using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;


namespace Bridge.Translator
{
    public class InlineArgumentsBlock : AbstractEmitterBlock
    {
        public InlineArgumentsBlock(IEmitter emitter, ArgumentsInfo argsInfo, string inline, IMethod method = null, ResolveResult targetResolveResult = null)
            : base(emitter, argsInfo.Expression)
        {
            this.Emitter = emitter;
            this.ArgumentsInfo = argsInfo;
            this.InlineCode = inline;

            argsInfo.AddExtensionParam();
            this.Method = method;
            this.TargetResolveResult = targetResolveResult;
        }

        public int[] IgnoreRange
        {
            get; set;
        }

        public IMethod Method
        {
            get; set;
        }

        public ResolveResult TargetResolveResult { get; set; }

        public ArgumentsInfo ArgumentsInfo
        {
            get;
            set;
        }

        public string InlineCode
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode);
        }

        private static Regex _formatArg = new Regex(@"\{(\*?)(\w+)(\:(\w+))?\}");
        private static Regex _inlineMethod = new Regex(@"([$\w\.\{\}]+)\(\s*(.*)\)");

        protected virtual IList<Expression> GetExpressionsByKey(IEnumerable<NamedParamExpression> expressions, string key)
        {
            if (expressions == null)
            {
                return new List<Expression>();
            }

            if (Regex.IsMatch(key, "^\\d+$"))
            {
                var list = new List<Expression>();

                list.Add(expressions.Skip(int.Parse(key)).First().Expression);

                return list;
            }

            return expressions.Where(e => e.Name == key).Select(e => e.Expression).ToList();
        }

        protected virtual AstType GetAstTypeByKey(IEnumerable<TypeParamExpression> types, string key)
        {
            return types.Where(e => e.Name == key && e.AstType != null).Select(e => e.AstType).FirstOrDefault();
        }

        protected virtual TypeParamExpression GetTypeByKey(IEnumerable<TypeParamExpression> types, string key)
        {
            return types.Where(e => e.Name == key && e.IType != null).FirstOrDefault();
        }

        public static string ReplaceInlineArgs(AbstractEmitterBlock block, string inline, Expression[] args)
        {
            var emitter = block.Emitter;
            inline = _formatArg.Replace(inline, delegate(Match m)
            {
                int count = emitter.Writers.Count;
                string key = m.Groups[2].Value;
                string modifier = m.Groups[1].Success ? m.Groups[4].Value : null;

                StringBuilder oldSb = emitter.Output;
                emitter.Output = new StringBuilder();

                Expression expr = null;

                if (Regex.IsMatch(key, "^\\d+$"))
                {
                    expr = args.Skip(int.Parse(key)).FirstOrDefault();
                }
                else
                {
                    expr = args.FirstOrDefault(e => e.ToString() == key);
                }

                string s = "";
                if (expr != null)
                {
                    var writer = block.SaveWriter();
                    block.NewWriter();
                    expr.AcceptVisitor(emitter);
                    s = emitter.Output.ToString();
                    block.RestoreWriter(writer);

                    if (modifier == "raw")
                    {
                        s = s.Trim('"');
                    }
                }

                block.Write(block.WriteIndentToString(s));

                if (emitter.Writers.Count != count)
                {
                    block.PopWriter();
                }

                string replacement = emitter.Output.ToString();
                emitter.Output = oldSb;

                return replacement;
            });

            return inline;
        }

        protected virtual void WriteParamName(string name)
        {
            if (Helpers.IsReservedWord(name))
            {
                name = Helpers.ChangeReservedWord(name);
            }

            this.Write(name);
        }

        protected virtual void EmitInlineExpressionList(ArgumentsInfo argsInfo, string inline, bool asRef = false, bool isNull = false)
        {
            IEnumerable<NamedParamExpression> expressions = argsInfo.NamedExpressions;
            IEnumerable<TypeParamExpression> typeParams = argsInfo.TypeArguments;

            this.Write("");

            if (asRef)
            {
                this.Write("function (");
                this.EmitMethodParameters(this.Method, this.Method.Parameters, this.Method.TypeParameters, isNull);
                this.Write(") { return ");
            }

            bool needExpand = false;

            string paramsName = null;
            IType paramsType = null;
            int paramsIndex = 0;
            if (argsInfo.ResolveResult != null)
            {
                var paramsParam = argsInfo.ResolveResult.Member.Parameters.FirstOrDefault(p => p.IsParams);
                if (paramsParam != null)
                {
                    paramsIndex = argsInfo.ResolveResult.Member.Parameters.IndexOf(paramsParam);
                    paramsName = paramsParam.Name;
                    paramsType = paramsParam.Type;
                }
            }

            if (paramsName != null)
            {
                var matches = _formatArg.Matches(inline);
                bool ignoreArray = false;
                foreach (Match m in matches)
                {
                    if (m.Groups[2].Value == paramsName)
                    {
                        bool isRaw = m.Groups[1].Success && m.Groups[1].Value == "*";
                        ignoreArray = isRaw || argsInfo.ParamsExpression == null;
                        string modifier = m.Groups[1].Success ? m.Groups[4].Value : null;

                        if (modifier == "array")
                        {
                            ignoreArray = false;
                        }

                        break;
                    }
                }

                if (argsInfo.ResolveResult is CSharpInvocationResolveResult)
                {
                    needExpand = !((CSharpInvocationResolveResult) argsInfo.ResolveResult).IsExpandedForm;
                }

                if (needExpand && ignoreArray && !asRef)
                {
                    IList<Expression> exprs = this.GetExpressionsByKey(expressions, paramsName);

                    if (exprs.Count == 1 && exprs[0] != null && exprs[0].Parent != null)
                    {
                        var exprrr = this.Emitter.Resolver.ResolveNode(exprs[0], this.Emitter);
                        if (exprrr.Type.Kind == TypeKind.Array)
                        {
                            var match = _inlineMethod.Match(inline);

                            if (match.Success)
                            {
                                string target = null;
                                var methodName = match.Groups[1].Value;

                                if (methodName.Contains("."))
                                {
                                    target = methodName.LeftOfRightmostOf('.');
                                }

                                string args = match.Groups[2].Value;

                                StringBuilder sb = new StringBuilder();
                                sb.Append(methodName);
                                sb.Append(".");
                                sb.Append(JS.Funcs.APPLY);
                                sb.Append("(");
                                sb.Append(target ?? "null");

                                if (args.Contains(","))
                                {
                                    sb.Append(", [");
                                    sb.Append(args.LeftOfRightmostOf(',').Trim());
                                    sb.Append("].concat(");
                                    sb.Append(args.RightOfRightmostOf(',').Trim());
                                    sb.Append(")");
                                }
                                else
                                {
                                    sb.Append(",");
                                    sb.Append(args);
                                }
                                
                                sb.Append(")");

                                inline = inline.Remove(match.Index, match.Length);
                                inline = inline.Insert(match.Index, sb.ToString());
                            }
                        }
                    }
                }
            }

            inline = _formatArg.Replace(inline, delegate(Match m)
            {
                if (this.IgnoreRange != null && m.Index >= this.IgnoreRange[0] && m.Index <= this.IgnoreRange[1])
                {
                    return m.Value;
                }

                int count = this.Emitter.Writers.Count;
                string key = m.Groups[2].Value;
                bool isRaw = m.Groups[1].Success && m.Groups[1].Value == "*";
                bool ignoreArray = isRaw || argsInfo.ParamsExpression == null;
                string modifier = m.Groups[1].Success ? m.Groups[4].Value : null;
                

                if (modifier == "array")
                {
                    ignoreArray = false;
                }

                StringBuilder oldSb = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();

                if (asRef)
                {
                    if (Regex.IsMatch(key, "^\\d+$"))
                    {
                        var index = int.Parse(key);
                        key = this.Method.Parameters[index].Name;
                    }

                    if (key == "this")
                    {
                        if (isNull)
                        {
                            this.Write(JS.Vars.T);
                        }
                        else if (this.Method.IsExtensionMethod && this.TargetResolveResult is TypeResolveResult)
                        {
                            this.WriteParamName(this.Method.Parameters.First().Name);
                        }
                        else
                        {
                            ((MemberReferenceExpression)argsInfo.Expression).Target.AcceptVisitor(this.Emitter);    
                        }
                    }
                    else if (this.Method.IsExtensionMethod && key == this.Method.Parameters.First().Name)
                    {
                        if (this.TargetResolveResult is TypeResolveResult)
                        {
                            this.WriteParamName(key);
                        }
                        else
                        {
                            ((MemberReferenceExpression)argsInfo.Expression).Target.AcceptVisitor(this.Emitter);
                        }
                    }
                    else if (paramsName == key && !ignoreArray)
                    {
                        this.Write(JS.Types.ARRAY + "." + JS.Fields.PROTOTYPE + "." + JS.Funcs.SLICE);
                        this.WriteCall("(" + JS.Vars.ARGUMENTS + ", " + paramsIndex + ")");
                    }
                    else
                    {
                        this.WriteParamName(key);
                    }
                }
                else if (key == "this" || key == argsInfo.ThisName || (key == "0" && argsInfo.IsExtensionMethod))
                {
                    if (modifier == "type")
                    {
                        AstNode node = null;
                        if (argsInfo.ThisArgument is AstNode)
                        {
                            node = (AstNode) argsInfo.ThisArgument;
                        }
                        else
                        {
                            node = argsInfo.Expression;
                        }

                        if (node != null)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(node, this.Emitter);
                            var type = rr.Type;
                            if (rr is MemberResolveResult)
                            {
                                type = ((MemberResolveResult) rr).TargetResult.Type;
                            }

                            bool needName = this.NeedName(type);

                            if (needName)
                            {
                                this.Write(BridgeTypes.ToJsName(type, this.Emitter));
                            }
                            else
                            {
                                string thisValue = argsInfo.GetThisValue();

                                if (thisValue != null)
                                {
                                    this.Write(JS.Funcs.BRIDGE_GET_TYPE + "(" + thisValue + ")");
                                } 
                            }
                        }
                    }
                    else
                    {
                        string thisValue = argsInfo.GetThisValue();

                        if (thisValue != null)
                        {
                            this.Write(thisValue);
                        }    
                    }
                }
                else
                {
                    IList<Expression> exprs = this.GetExpressionsByKey(expressions, key);
                    
                    if (exprs.Count > 0)
                    {
                        if (modifier == "type")
                        {
                            IType type = null;
                            if (paramsName == key && paramsType != null)
                            {
                                type = paramsType;
                            }
                            else
                            {
                                var rr = this.Emitter.Resolver.ResolveNode(exprs[0], this.Emitter);
                                type = rr.Type;
                            }

                            bool needName = this.NeedName(type);
                            this.WriteGetType(needName, type, exprs[0], modifier);
                        }
                        else if (exprs.Count > 1 || paramsName == key)
                        {
                            if (needExpand)
                            {
                                ignoreArray = true;
                            }

                            if (!ignoreArray)
                            {
                                this.Write("[");
                            }

                            if (exprs.Count == 1 && exprs[0] == null)
                            {
                                this.Write("null");
                            }
                            else
                            {
                                new ExpressionListBlock(this.Emitter, exprs, null).Emit();
                            }

                            if (!ignoreArray)
                            {
                                this.Write("]");
                            }   
                        }
                        else
                        {
                            string s;
                            if (exprs[0] != null)
                            {
                                var writer = this.SaveWriter();
                                this.NewWriter();

                                var directExpr = exprs[0] as DirectionExpression;
                                if (directExpr != null)
                                {
                                    var rr = this.Emitter.Resolver.ResolveNode(exprs[0], this.Emitter) as ByReferenceResolveResult;

                                    if (rr != null && !(rr.ElementResult is LocalResolveResult))
                                    {
                                        this.Write("Bridge.ref(");

                                        this.Emitter.IsRefArg = true;
                                        exprs[0].AcceptVisitor(this.Emitter);
                                        this.Emitter.IsRefArg = false;

                                        if (this.Emitter.Writers.Count != count)
                                        {
                                            this.PopWriter();
                                            count = this.Emitter.Writers.Count;
                                        }

                                        this.Write(")");
                                    }
                                    else
                                    {
                                        exprs[0].AcceptVisitor(this.Emitter);
                                    }
                                }
                                else if (modifier == "plain")
                                {
                                    var an = exprs[0] as AnonymousTypeCreateExpression;
                                    if (an == null)
                                    {
                                        this.Write("Bridge.toPlain(");
                                        exprs[0].AcceptVisitor(this.Emitter);
                                        this.Write(")");
                                    }
                                    else
                                    {
                                        new AnonymousTypeCreateBlock(this.Emitter, an, true).Emit();
                                    }
                                }
                                else
                                {
                                    exprs[0].AcceptVisitor(this.Emitter);
                                }
                                
                                s = this.Emitter.Output.ToString();
                                this.RestoreWriter(writer);

                                if (modifier == "raw")
                                {
                                    s = s.Trim('"');
                                }
                            }
                            else
                            {
                                s = "null";
                            }

                            this.Write(this.WriteIndentToString(s));
                        }
                    }
                    else if (typeParams != null)
                    {
                        var type = this.GetAstTypeByKey(typeParams, key);

                        if (type != null)
                        {
                            if (modifier == "default" || modifier == "defaultFn")
                            {
                                var def = Inspector.GetDefaultFieldValue(type, this.Emitter.Resolver);
                                this.GetDefaultValue(def, modifier);
                            }
                            else
                            {
                                type.AcceptVisitor(this.Emitter);    
                            }
                        }
                        else
                        {
                            var iType = this.GetTypeByKey(typeParams, key);

                            if (iType != null)
                            {
                                if (modifier == "default" || modifier == "defaultFn")
                                {
                                    var def = Inspector.GetDefaultFieldValue(iType.IType, iType.AstType);
                                    this.GetDefaultValue(def, modifier);
                                }
                                else
                                {
                                    new CastBlock(this.Emitter, iType.IType).Emit();
                                }
                            }
                        }
                    }
                }

                if (this.Emitter.Writers.Count != count)
                {
                    this.PopWriter();
                }

                string replacement = this.Emitter.Output.ToString();
                this.Emitter.Output = oldSb;

                return replacement;
            });

            this.Write(inline);

            if (asRef)
            {
                this.Write("; }");
            }
        }

        private void WriteGetType(bool needName, IType type, AstNode node, string modifier)
        {
            if (needName)
            {
                this.Write(BridgeTypes.ToJsName(type, this.Emitter));
            }
            else
            {
                string s;
                if (node != null)
                {
                    var writer = this.SaveWriter();
                    this.NewWriter();
                    node.AcceptVisitor(this.Emitter);
                    s = this.Emitter.Output.ToString();
                    this.RestoreWriter(writer);

                    if (modifier == "raw")
                    {
                        s = s.Trim('"');
                    }
                }
                else
                {
                    s = "null";
                }

                this.Write(this.WriteIndentToString(JS.Funcs.BRIDGE_GET_TYPE + "(" + s + ")"));
            }
        }

        private bool NeedName(IType type)
        {
            var def = type.GetDefinition();
            return (def != null && def.IsSealed)
                   || type.Kind == TypeKind.Enum 
                   || type.IsKnownType(KnownTypeCode.Enum)
                   || Helpers.IsIntegerType(type, this.Emitter.Resolver)
                   || Helpers.IsFloatType(type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Enum, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Boolean, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Type, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Array, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Char, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.DateTime, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Delegate, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.String, type, this.Emitter.Resolver);
        }

        private void GetDefaultValue(object def, string modifier)
        {
            if (def is AstType)
            {
                if (modifier == "defaultFn")
                {
                    this.Write(BridgeTypes.ToJsName((AstType) def, this.Emitter) + ".getDefaultValue");
                }
                else
                {
                    this.Write(Inspector.GetStructDefaultValue((AstType) def, this.Emitter));
                }
            }
            else if (def is IType)
            {
                if (modifier == "defaultFn")
                {
                    this.Write(BridgeTypes.ToJsName((IType) def, this.Emitter) + ".getDefaultValue");
                }
                else
                {
                    this.Write(Inspector.GetStructDefaultValue((IType) def, this.Emitter));
                }
            }
            else if (def is RawValue)
            {
                this.Write(def.ToString());
            }
            else
            {
                this.WriteScript(def);
            }
        }

        protected virtual void EmitMethodParameters(IMethod method, IEnumerable<IParameter> parameters, IEnumerable<ITypeParameter> typeParameters, bool isNull)
        {
            bool needComma = false;

            if (typeParameters != null && typeParameters.Any())
            {
                foreach (var tp in typeParameters)
                {
                    this.Emitter.Validator.CheckIdentifier(tp.Name, this.ArgumentsInfo.Expression);

                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;
                    this.Write(tp.Name);
                }
            }

            if (isNull)
            {
                this.Write(JS.Vars.T);
                needComma = true;
            }
            else if (!(this.TargetResolveResult is TypeResolveResult))
            {
                parameters = parameters.Skip(1);
            }

            foreach (var p in parameters)
            {
                var name = p.Name;

                if (Helpers.IsReservedWord(name))
                {
                    name = Helpers.ChangeReservedWord(name);
                }

                if (this.Emitter.LocalsNamesMap != null && this.Emitter.LocalsNamesMap.ContainsKey(name))
                {
                    name = this.Emitter.LocalsNamesMap[name];
                }

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.Write(name);
            }
        }

        public virtual void EmitFunctionReference()
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode, true);
        }

        public virtual void EmitNullableReference()
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode, true, true);
        }
    }
}
