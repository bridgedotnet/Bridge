using System;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Win32.SafeHandles;

namespace Bridge.Translator
{
    public partial class AbstractEmitterBlock
    {
        public virtual void PushLocals()
        {
            if (this.Emitter.LocalsStack == null)
            {
                this.Emitter.LocalsStack = new Stack<Dictionary<string, AstType>>();
            }

            // Pushes even if null, else it will have nothing to pull later and another test will be needed.
            this.Emitter.LocalsStack.Push(this.Emitter.Locals);

            if (this.Emitter.Locals != null)
            {
                this.Emitter.Locals = new Dictionary<string, AstType>(this.Emitter.Locals);
            }
            else
            {
                this.Emitter.Locals = new Dictionary<string, AstType>();
            }
        }

        public virtual void PopLocals()
        {
            this.Emitter.Locals = this.Emitter.LocalsStack.Pop();
        }

        public virtual void ResetLocals()
        {
            this.Emitter.NamedTempVariables = new Dictionary<string, string>();
            this.Emitter.TempVariables = new Dictionary<string, bool>();
            this.Emitter.Locals = new Dictionary<string, AstType>();
            this.Emitter.IteratorCount = 0;
        }

        public virtual void AddLocals(IEnumerable<ParameterDeclaration> declarations, AstNode statement)
        {
            var visitor = new ReferenceArgumentVisitor(this.Emitter);
            statement.AcceptVisitor(visitor);

            declarations.ToList().ForEach(item =>
            {
                var rr = item.Parent != null ? (LocalResolveResult)this.Emitter.Resolver.ResolveNode(item, this.Emitter) : null;
                var name = this.Emitter.GetParameterName(item);
                var vName = this.AddLocal(item.Name, item, item.Type, name);

                if (item.Parent == null && item.Name == "value" && visitor.DirectionExpression.Any(expr => expr is IdentifierExpression && ((IdentifierExpression)expr).Identifier == "value"))
                {
                    return;
                }

                if (item.ParameterModifier == ParameterModifier.Out || item.ParameterModifier == ParameterModifier.Ref)
                {
                    this.Emitter.LocalsMap[rr != null ? rr.Variable : new DefaultVariable(ReflectionHelper.FindType(this.Emitter.Resolver.Compilation, TypeCode.Object), name)] = vName + ".v";
                }
                else
                {
                    this.Emitter.LocalsMap[rr != null ? rr.Variable : new DefaultVariable(ReflectionHelper.FindType(this.Emitter.Resolver.Compilation, TypeCode.Object), name)] = vName;
                }
            });

            foreach (var expr in visitor.DirectionExpression)
            {
                var rr = this.Emitter.Resolver.ResolveNode(expr, this.Emitter);

                IdentifierExpression identifierExpression;
                var lrr = rr as LocalResolveResult;
                if (lrr != null && ((identifierExpression = expr as IdentifierExpression) != null))
                {
                    var name = identifierExpression.Identifier;
                    if (Helpers.IsReservedWord(this.Emitter, name))
                    {
                        name = Helpers.ChangeReservedWord(name);
                    }
                    this.Emitter.LocalsMap[lrr.Variable] = name + ".v";
                }
            }

            foreach (var variable in visitor.DirectionVariables)
            {
                var name = variable.Name;

                if (Helpers.IsReservedWord(this.Emitter, name))
                {
                    name = Helpers.ChangeReservedWord(name);
                }
                this.Emitter.LocalsMap[variable] = name + ".v";
            }
        }

        public string AddLocal(string name, AstNode node, AstType type, string valueName = null)
        {
            if (this.Emitter.Locals.ContainsKey(name))
            {
                throw new EmitterException(node, string.Format(Constants.Messages.Exceptions.DUPLICATE_LOCAL_VARIABLE, name));
            }

            this.Emitter.Locals.Add(name, type);

            name = name.StartsWith(JS.Vars.FIX_ARGUMENT_NAME) ? name.Substring(JS.Vars.FIX_ARGUMENT_NAME.Length) : name;
            string vName = valueName ?? name;

            if (Helpers.IsReservedWord(this.Emitter, vName))
            {
                vName = Helpers.ChangeReservedWord(vName);
            }

            if (!this.Emitter.LocalsNamesMap.ContainsKey(name))
            {
                if (this.Emitter.LocalsNamesMap.ContainsValue(name))
                {
                    this.Emitter.LocalsNamesMap.Add(name, this.GetUniqueNameByValue(vName));
                }
                else
                {
                    this.Emitter.LocalsNamesMap.Add(name, vName);
                }
            }
            else
            {
                this.Emitter.LocalsNamesMap[name] = this.GetUniqueName(vName);
            }

            var result = this.Emitter.LocalsNamesMap[name];
            var lrr = node != null && node.Parent != null ? this.Emitter.Resolver.ResolveNode(node, this.Emitter) as LocalResolveResult : null;

            if (this.Emitter.LocalsMap != null && lrr != null && this.Emitter.LocalsMap.ContainsKey(lrr.Variable))
            {
                var oldValue = this.Emitter.LocalsMap[lrr.Variable];
                this.Emitter.LocalsMap[lrr.Variable] = result + (oldValue.EndsWith(".v") ? ".v" : "");
            }

            if (this.Emitter.IsAsync && !this.Emitter.AsyncVariables.Contains(result))
            {
                this.Emitter.AsyncVariables.Add(result);
            }

            return result;
        }

        protected virtual string GetUniqueNameByValue(string name)
        {
            int index = 1;
            string tempName = name + index;

            while (this.Emitter.LocalsNamesMap.ContainsValue(tempName) || Helpers.IsReservedWord(this.Emitter, tempName))
            {
                tempName = name + ++index;
            }

            return tempName;
        }

        protected virtual string GetUniqueName(string name)
        {
            int index = 1;

            if (this.Emitter.LocalsNamesMap.ContainsKey(name))
            {
                var value = this.Emitter.LocalsNamesMap[name];
                if (value.Length > name.Length)
                {
                    var suffix = value.Substring(name.Length);

                    int subindex;
                    bool isNumeric = int.TryParse(suffix, out subindex);

                    if (isNumeric)
                    {
                        index = subindex + 1;
                    }
                }
            }

            string tempName = name + index;

            while (this.Emitter.LocalsNamesMap.ContainsValue(tempName) || Helpers.IsReservedWord(this.Emitter, tempName))
            {
                tempName = name + ++index;
            }

            return tempName;
        }

        public virtual Dictionary<IVariable, string> BuildLocalsMap()
        {
            var prevMap = this.Emitter.LocalsMap;

            if (prevMap == null)
            {
                this.Emitter.LocalsMap = new Dictionary<IVariable, string>();
            }
            else
            {
                this.Emitter.LocalsMap = new Dictionary<IVariable, string>(prevMap);
            }

            return prevMap;
        }

        public virtual void ClearLocalsMap(Dictionary<IVariable, string> prevMap = null)
        {
            this.Emitter.LocalsMap = prevMap;
        }

        public virtual Dictionary<string, string> BuildLocalsNamesMap()
        {
            var prevMap = this.Emitter.LocalsNamesMap;

            if (prevMap == null)
            {
                this.Emitter.LocalsNamesMap = new Dictionary<string, string>();
            }
            else
            {
                this.Emitter.LocalsNamesMap = new Dictionary<string, string>(prevMap);
            }

            return prevMap;
        }

        public virtual void ClearLocalsNamesMap(Dictionary<string, string> prevMap = null)
        {
            this.Emitter.LocalsNamesMap = prevMap;
        }

        public virtual void ConvertParamsToReferences(IEnumerable<ParameterDeclaration> declarations)
        {
            if (declarations.Any())
            {
                var p = declarations.First().Parent;
                if (p != null)
                {
                    var rr = this.Emitter.Resolver.ResolveNode(p, this.Emitter) as MemberResolveResult;

                    if (rr != null)
                    {
                        var method = rr.Member as DefaultResolvedMethod;

                        if (method != null)
                        {
                            var expandParams = method.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute");
                            foreach (var prm in method.Parameters)
                            {
                                if (prm.IsOptional)
                                {
                                    var name = prm.Name;
                                    if (Helpers.IsReservedWord(this.Emitter, name))
                                    {
                                        name = Helpers.ChangeReservedWord(name);
                                    }

                                    this.Write(string.Format("if ({0} === void 0) {{ {0} = ", name));
                                    if (prm.ConstantValue == null && prm.Type.Kind == TypeKind.Struct && !prm.Type.IsKnownType(KnownTypeCode.NullableOfT))
                                    {
                                        this.Write(Inspector.GetStructDefaultValue(prm.Type, this.Emitter));
                                    }
                                    else if (prm.ConstantValue == null && prm.Type.Kind == TypeKind.TypeParameter)
                                    {
                                        this.Write(JS.Funcs.BRIDGE_GETDEFAULTVALUE + "(" + BridgeTypes.ToJsName(prm.Type, this.Emitter) + ")");
                                    }
                                    else
                                    {
                                        this.WriteScript(prm.ConstantValue);
                                    }

                                    this.Write("; }");
                                    this.WriteNewLine();
                                }
                                else if (prm.IsParams)
                                {
                                    var name = prm.Name;
                                    if (Helpers.IsReservedWord(this.Emitter, name))
                                    {
                                        name = Helpers.ChangeReservedWord(name);
                                    }

                                    if (expandParams)
                                    {
                                        this.Write(string.Format("{0} = " + JS.Types.ARRAY + "." + JS.Fields.PROTOTYPE + "." + JS.Funcs.SLICE + "." + JS.Funcs.CALL + "(" + JS.Vars.ARGUMENTS + ", {1});", name, method.Parameters.IndexOf(prm) + method.TypeParameters.Count));
                                    }
                                    else
                                    {
                                        this.Write(string.Format("if ({0} === void 0) {{ {0} = []; }}", name));
                                    }

                                    this.WriteNewLine();
                                }
                            }
                        }
                    }
                }
            }

            declarations.ToList().ForEach(item =>
            {
                var lrr = item.Parent != null ? (LocalResolveResult)this.Emitter.Resolver.ResolveNode(item, this.Emitter) : null;
                var isReferenceLocal = lrr != null && this.Emitter.LocalsMap.ContainsKey(lrr.Variable) && this.Emitter.LocalsMap[lrr.Variable].EndsWith(".v");

                if (item.Parent == null && item.Name == "value")
                {
                    var p = this.Emitter.LocalsMap.FirstOrDefault(pair => pair.Key.Name == "value");
                    if (p.Value != null && p.Value.EndsWith(".v"))
                    {
                        isReferenceLocal = true;
                    }
                }

                if (isReferenceLocal && !(item.ParameterModifier == ParameterModifier.Out || item.ParameterModifier == ParameterModifier.Ref))
                {
                    this.Write(string.Format("{0} = {{v:{0}}};", this.Emitter.LocalsNamesMap[item.Name]));
                    this.WriteNewLine();
                }
            });
        }

        protected virtual void IntroduceTempVar(string name)
        {
            this.Emitter.TempVariables[name] = true;

            if (this.Emitter.IsAsync && !this.Emitter.AsyncVariables.Contains(name))
            {
                this.Emitter.AsyncVariables.Add(name);
            }
        }

        public virtual void RemoveTempVar(string name)
        {
            this.Emitter.TempVariables[name] = false;
        }

        public virtual string GetTempVarName()
        {
            if (this.Emitter.TempVariables == null)
            {
                this.ResetLocals();
            }

            foreach (var pair in this.Emitter.TempVariables)
            {
                if (!pair.Value)
                {
                    this.Emitter.TempVariables[pair.Key] = true;
                    return pair.Key;
                }
            }

            string name = JS.Vars.T;
            int i = 0;

            while (this.Emitter.TempVariables.ContainsKey(name) || (this.Emitter.ParentTempVariables != null && this.Emitter.ParentTempVariables.ContainsKey(name)))
            {
                name = JS.Vars.T + ++i;
            }

            name = JS.Vars.T + (i > 0 ? i.ToString() : "");

            this.IntroduceTempVar(name);

            return name;
        }

        protected virtual void EmitTempVars(int pos, bool skipIndent = false)
        {
            if (this.Emitter.TempVariables.Count > 0)
            {
                var newLine = this.Emitter.IsNewLine;
                var temp = this.Emitter.Output.ToString(pos, this.Emitter.Output.Length - pos);
                this.Emitter.Output.Length = pos;

                this.Emitter.IsNewLine = true;
                this.Emitter.Comma = false;

                if (!skipIndent)
                {
                    this.Indent();
                    this.WriteIndent();
                }
                this.WriteVar(true);

                foreach (var localVar in this.Emitter.TempVariables)
                {
                    this.EnsureComma(false);
                    this.Write(localVar.Key);
                    this.Emitter.Comma = true;
                }

                this.Emitter.Comma = false;
                this.WriteSemiColon();
                this.Outdent();
                this.WriteNewLine();

                this.Emitter.Output.Append(temp);
                this.Emitter.IsNewLine = newLine;
            }
        }

        protected virtual void SimpleEmitTempVars(bool newline = true)
        {
            if (this.Emitter.TempVariables.Count > 0)
            {
                this.WriteVar(true);

                foreach (var localVar in this.Emitter.TempVariables)
                {
                    this.EnsureComma(false);
                    this.Write(localVar.Key);
                    this.Emitter.Comma = true;
                }

                this.Emitter.Comma = false;
                this.WriteSemiColon();
                if (newline)
                {
                    this.WriteNewLine();
                }
            }
        }
    }
}