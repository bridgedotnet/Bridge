using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;

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
            this.Emitter.TempVariables = new Dictionary<string, bool>();
            this.Emitter.Locals = new Dictionary<string, AstType>();
            this.Emitter.IteratorCount = 0;
        }

        public virtual void AddLocals(IEnumerable<ParameterDeclaration> declarations, AstNode statement)
        {
            declarations.ToList().ForEach(item =>
            {
                var name = this.Emitter.GetEntityName(item);
                var vName = this.AddLocal(item.Name, item.Type);

                if (item.ParameterModifier == ParameterModifier.Out || item.ParameterModifier == ParameterModifier.Ref)
                {
                    this.Emitter.LocalsMap[item.Name] = name + ".v";
                }
                else
                {
                    this.Emitter.LocalsMap[item.Name] = name;
                }
            });

            var visitor = new ReferenceArgumentVisitor();
            statement.AcceptVisitor(visitor);

            foreach (var expr in visitor.DirectionExpression)
            {
                var rr = this.Emitter.Resolver.ResolveNode(expr, this.Emitter);

                if (rr is LocalResolveResult && expr is IdentifierExpression)
                {
                    var ie = (IdentifierExpression)expr;
                    this.Emitter.LocalsMap[ie.Identifier] = ie.Identifier + ".v";
                }
                else
                {
                    throw new EmitterException(expr, "Only local variables can be passed by reference");
                }
            }
        }

        public string AddLocal(string name, AstType type)
        {
            this.Emitter.Locals.Add(name, type);

            name = name.StartsWith(Bridge.Translator.Emitter.FIX_ARGUMENT_NAME) ? name.Substring(Bridge.Translator.Emitter.FIX_ARGUMENT_NAME.Length) : name;
            string vName = name;

            if (Helpers.IsReservedWord(name))
            {
                vName = this.GetUniqueName(name);
            }

            if (!this.Emitter.LocalsNamesMap.ContainsKey(name))
            {
                this.Emitter.LocalsNamesMap.Add(name, vName);
            }
            else
            {
                this.Emitter.LocalsNamesMap[name] = this.GetUniqueName(vName);
            }

            var result = this.Emitter.LocalsNamesMap[name];

            if (this.Emitter.IsAsync && !this.Emitter.AsyncVariables.Contains(result))
            {
                this.Emitter.AsyncVariables.Add(result);
            }

            return result;
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

            while (this.Emitter.LocalsNamesMap.ContainsValue(tempName))
            {
                tempName = name + ++index;
            }

            return tempName;
        }

        public virtual Dictionary<string, string> BuildLocalsMap()
        {
            var prevMap = this.Emitter.LocalsMap;

            if (prevMap == null)
            {
                this.Emitter.LocalsMap = new Dictionary<string, string>();
            }
            else
            {
                this.Emitter.LocalsMap = new Dictionary<string, string>(prevMap);
            }

            return prevMap;
        }

        public virtual void ClearLocalsMap(Dictionary<string, string> prevMap = null)
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
                            foreach (var prm in method.Parameters)
                            {
                                if (prm.IsOptional)
                                {
                                    this.Write(string.Format("if ({0} === void 0) {{ {0} = {1}; }}", prm.Name, Newtonsoft.Json.JsonConvert.SerializeObject(prm.ConstantValue)));
                                    this.WriteNewLine();
                                }
                            }
                        }
                    }
                }
            }

            declarations.ToList().ForEach(item =>
            {
                var isReferenceLocal = this.Emitter.LocalsMap.ContainsKey(item.Name) && this.Emitter.LocalsMap[item.Name].EndsWith(".v");

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

        protected virtual void RemoveTempVar(string name)
        {
            this.Emitter.TempVariables[name] = false;
        }

        protected virtual string GetTempVarName()
        {
            foreach (var pair in this.Emitter.TempVariables)
            {
                if (!pair.Value)
                {
                    this.Emitter.TempVariables[pair.Key] = true;
                    return pair.Key;
                }
            }

            string name = "$t";
            int i = 0;

            while (this.Emitter.TempVariables.ContainsKey(name))
            {
                name = "$t" + ++i;
            }

            name = "$t" + (i > 0 ? i.ToString() : "");

            this.IntroduceTempVar(name);

            return name;
        }

        protected virtual void EmitTempVars(int pos)
        {
            if (this.Emitter.TempVariables.Count > 0)
            {
                string temp = this.Emitter.Output.ToString(pos, this.Emitter.Output.Length - pos);
                this.Emitter.Output.Length = pos;

                this.Emitter.IsNewLine = true;
                this.Indent();
                this.WriteIndent();
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
            }
        }
    }
}
