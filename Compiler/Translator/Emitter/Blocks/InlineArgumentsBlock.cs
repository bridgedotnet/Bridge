using System;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using Object.Net.Utilities;
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

            if (argsInfo.Expression != null)
            {
                var rr = emitter.Resolver.ResolveNode(argsInfo.Expression, emitter) as MemberResolveResult;

                if (rr != null)
                {
                    BridgeType bridgeType = emitter.BridgeTypes.Get(rr.Member.DeclaringType, true);

                    if (bridgeType != null)
                    {
                        bool isCustomName;
                        BridgeTypes.AddModule(null, bridgeType, false, out isCustomName);
                    }
                }
            }
        }

        public int[] IgnoreRange
        {
            get; set;
        }

        public IMethod Method
        {
            get; set;
        }

        public ResolveResult TargetResolveResult
        {
            get; set;
        }

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

        internal static Regex FormatArgRegex = new Regex(@"\{(\*?)(\w+)(\:(\w+))?\}");
        private static Regex _inlineMethod = new Regex(@"([$\w\.\{\}\(\)]+)\(\s*(.*)\)");

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

        protected virtual IList<ResolveResult> GetResolveResultByKey(string key)
        {
            if (this.ArgumentsInfo.Attribute.PositionalArguments.Count == 0)
            {
                return new List<ResolveResult>();
            }

            if (Regex.IsMatch(key, "^\\d+$"))
            {
                return this.ArgumentsInfo.Attribute.PositionalArguments.Skip(int.Parse(key)).ToList();
            }

            var p = this.ArgumentsInfo.Attribute.Constructor.Parameters.FirstOrDefault(cp => cp.Name == key);

            if (p != null)
            {
                var idx = this.ArgumentsInfo.Attribute.Constructor.Parameters.IndexOf(p);
                return p.IsParams ? this.ArgumentsInfo.Attribute.PositionalArguments.Skip(idx).ToList() : new List<ResolveResult> { this.ArgumentsInfo.Attribute.PositionalArguments[idx] };
            }

            return new List<ResolveResult>();
        }

        protected virtual IList<string> GetStringArgumentByKey(string key)
        {
            if (this.ArgumentsInfo.StringArguments.Length == 0)
            {
                return new List<string>();
            }

            if (Regex.IsMatch(key, "^\\d+$"))
            {
                var i = int.Parse(key);
                var p1 = this.Method.Parameters[i];

                return p1.IsParams ? this.ArgumentsInfo.StringArguments.Skip(i).ToList() : this.ArgumentsInfo.StringArguments.Skip(i).Take(1).ToList();
            }

            var p = this.Method.Parameters.FirstOrDefault(cp => cp.Name == key);

            if (p != null)
            {
                var idx = this.Method.Parameters.IndexOf(p);
                return p.IsParams ? this.ArgumentsInfo.StringArguments.Skip(idx).ToList() : new List<string> { this.ArgumentsInfo.StringArguments[idx] };
            }

            return new List<string>();
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
            if (args.Length > 0)
            {
                var emitter = block.Emitter;
                inline = InlineArgumentsBlock.FormatArgRegex.Replace(inline, delegate (Match m)
                {
                    int count = emitter.Writers.Count;
                    string key = m.Groups[2].Value;
                    string modifier = m.Groups[1].Success ? m.Groups[4].Value : null;

                    if (!string.IsNullOrWhiteSpace(modifier) && modifier != "raw")
                    {
                        return m.Value;
                    }

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
            }

            return inline;
        }

        protected virtual void WriteParamName(string name)
        {
            if (this.Method.TypeParameters.Count > 0 && this.Method.TypeArguments.Count > 0)
            {
                var tp = this.Method.TypeParameters.FirstOrDefault(p => p.Name == name);
                if (tp != null)
                {
                    name = BridgeTypes.ToJsName(this.Method.TypeArguments[tp.Index], this.Emitter);
                }
            }

            if (Helpers.IsReservedWord(this.Emitter, name))
            {
                name = Helpers.ChangeReservedWord(name);
            }

            this.Write(name);
        }

        private string[] allowedModifiers = new[] {"default", "defaultFn", "raw", "plain", "body", "gettmp", "version", "tmp", "type", "array", "module", "GetHashCode", "ToString"};

        protected virtual void EmitInlineExpressionList(ArgumentsInfo argsInfo, string inline, bool asRef = false, bool isNull = false, bool? definition = null)
        {
            IMember member = this.Method ?? argsInfo.Method ?? argsInfo.ResolveResult?.Member;
            if (member == null && argsInfo.Expression != null && argsInfo.Expression.Parent != null)
            {
                var rre = this.Emitter.Resolver.ResolveNode(argsInfo.Expression, this.Emitter) as MemberResolveResult;
                if (rre != null)
                {
                    member = rre.Member;
                }
            }

            if (member != null)
            {
                inline = Helpers.ConvertTokens(this.Emitter, inline, member);
            }

            IEnumerable<NamedParamExpression> expressions = argsInfo.NamedExpressions;
            IEnumerable<TypeParamExpression> typeParams = argsInfo.TypeArguments;
            bool addClose = false;
            this.Write("");

            if (asRef)
            {
                var withoutTypeParams = this.Method.TypeArguments.Count > 0 &&
                                     this.Method.TypeArguments.All(t => t.Kind != TypeKind.TypeParameter);

                if (definition.HasValue)
                {
                    withoutTypeParams = !definition.Value;
                }

                if (withoutTypeParams && (!this.Method.IsStatic || this.Method.IsExtensionMethod && this.TargetResolveResult is ThisResolveResult) /*&& (this.TargetResolveResult is ThisResolveResult || this.TargetResolveResult == null)*/ && (inline.Contains("{this}") || this.Method.IsStatic || this.Method.IsExtensionMethod && inline.Contains("{" + this.Method.Parameters.First().Name + "}")))
                {
                    this.Write(JS.Funcs.BRIDGE_BIND);
                    this.Write("(this, ");
                    addClose = true;
                }

                this.Write("function (");
                this.EmitMethodParameters(this.Method, this.Method.Parameters, withoutTypeParams ? null : this.Method.TypeParameters, isNull);
                this.Write(") { return ");
            }

            bool needExpand = false;
            bool expandParams = false;

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
                expandParams = argsInfo.ResolveResult.Member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute");
            }
            else if (argsInfo.Method != null)
            {
                var paramsParam = argsInfo.Method.Parameters.FirstOrDefault(p => p.IsParams);
                if (paramsParam != null)
                {
                    paramsIndex = argsInfo.Method.Parameters.IndexOf(paramsParam);
                    paramsName = paramsParam.Name;
                    paramsType = paramsParam.Type;
                }
                expandParams = argsInfo.Method.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExpandParamsAttribute");
            }

            if (paramsName != null)
            {
                var matches = InlineArgumentsBlock.FormatArgRegex.Matches(inline);
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

                if (expandParams)
                {
                    ignoreArray = true;
                }

                if (argsInfo.ResolveResult is CSharpInvocationResolveResult)
                {
                    needExpand = !((CSharpInvocationResolveResult)argsInfo.ResolveResult).IsExpandedForm;
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

            var r = InlineArgumentsBlock.FormatArgRegex.Matches(inline);
            List<Match> keyMatches = new List<Match>();
            foreach (Match keyMatch in r)
            {
                keyMatches.Add(keyMatch);
            }

            var tempVars = new Dictionary<string, string>();
            var tempMap = new Dictionary<string, string>();

            inline = InlineArgumentsBlock.FormatArgRegex.Replace(inline, delegate (Match m)
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

                bool isSimple = false;

                var tempKey = key + ":" + modifier ?? "";
                if (tempMap.ContainsKey(tempKey))
                {
                    return tempMap[tempKey];
                }

                if (!string.IsNullOrWhiteSpace(modifier) && !this.allowedModifiers.Contains(modifier))
                {
                    return m.Value;
                }

                if (modifier == "array")
                {
                    ignoreArray = false;
                }

                StringBuilder oldSb = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();

                if (modifier == "module")
                {
                    IList<Expression> exprs = this.GetExpressionsByKey(expressions, key);

                    if (exprs.Count > 0)
                    {
                        var amd = new List<string>();
                        var cjs = new List<string>();
                        foreach (var expr in exprs)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(expr, this.Emitter) as TypeOfResolveResult;

                            if (rr == null)
                            {
                                throw new EmitterException(expr, "Module.Load supports typeof expression only");
                            }

                            var bridgeType = this.Emitter.BridgeTypes.Get(rr.ReferencedType, true);
                            Module module = null;

                            if (bridgeType.TypeInfo == null)
                            {
                                BridgeTypes.EnsureModule(bridgeType);
                                module = bridgeType.Module;
                            }
                            else
                            {
                                module = bridgeType.TypeInfo.Module;
                            }

                            AddModuleByType(amd, cjs, module);
                        }

                        this.Write("{");

                        if (amd.Count > 0)
                        {
                            this.Write("amd: ");
                            this.Write(this.Emitter.ToJavaScript(amd.ToArray()));
                            if (cjs.Count > 0)
                            {
                                this.Write(", ");
                            }
                        }

                        if (cjs.Count > 0)
                        {
                            this.Write("cjs: ");
                            this.Write(this.Emitter.ToJavaScript(cjs.ToArray()));
                        }

                        if (!string.IsNullOrWhiteSpace(this.Emitter.AssemblyInfo.Loader.FunctionName))
                        {
                            this.Write(", ");
                            this.Write(this.Emitter.ToJavaScript(this.Emitter.AssemblyInfo.Loader.FunctionName));
                        }

                        this.Write("}, function () { ");

                        var idx = 0;
                        var list = amd.Concat(cjs);

                        foreach (var moduleName in list)
                        {
                            this.Write(moduleName);
                            this.Write(" = arguments[");
                            this.Write(idx++);
                            this.Write("];");
                        }

                        this.Write(" }");
                    }
                }
                else if (asRef)
                {
                    if (Regex.IsMatch(key, "^\\d+$"))
                    {
                        var index = int.Parse(key);
                        key = this.Method.Parameters[index].Name;
                    }

                    if (modifier == "type")
                    {
                        this.Write(JS.Funcs.BRIDGE_GET_TYPE + "(");
                    }

                    if (key == "this")
                    {
                        if (isNull)
                        {
                            isSimple = true;
                            this.Write(JS.Vars.T);
                        }
                        else if (this.Method.IsExtensionMethod && this.TargetResolveResult is TypeResolveResult)
                        {
                            isSimple = true;
                            this.WriteParamName(this.Method.Parameters.First().Name);
                        }
                        else if (argsInfo.Expression is MemberReferenceExpression)
                        {
                            var trg = ((MemberReferenceExpression)argsInfo.Expression).Target;

                            if (trg is BaseReferenceExpression)
                            {
                                isSimple = true;
                                this.Write("this");
                            }
                            else
                            {
                                isSimple = this.IsSimpleExpression(trg);
                                trg.AcceptVisitor(this.Emitter);
                            }
                        }
                        else
                        {
                            this.Write("this");
                        }
                    }
                    else if (this.Method.IsExtensionMethod && key == this.Method.Parameters.First().Name)
                    {
                        if (this.TargetResolveResult is TypeResolveResult)
                        {
                            isSimple = true;
                            this.WriteParamName(key);
                        }
                        else if (argsInfo.Expression is MemberReferenceExpression)
                        {
                            var trg = ((MemberReferenceExpression)argsInfo.Expression).Target;

                            if (trg is BaseReferenceExpression)
                            {
                                isSimple = true;
                                this.Write("this");
                            }
                            else
                            {
                                isSimple = this.IsSimpleExpression(trg);
                                trg.AcceptVisitor(this.Emitter);
                            }
                        }
                        else
                        {
                            isSimple = true;
                            this.WriteParamName(key);
                        }
                    }
                    else if (paramsName == key && !ignoreArray)
                    {
                        isSimple = true;
                        this.Write(JS.Types.ARRAY + "." + JS.Fields.PROTOTYPE + "." + JS.Funcs.SLICE);
                        this.WriteCall("(" + JS.Vars.ARGUMENTS + ", " + paramsIndex + ")");
                    }
                    else
                    {
                        isSimple = true;
                        this.WriteParamName(key);
                    }

                    if (modifier == "type")
                    {
                        this.Write(")");
                    }
                }
                else if (key == "this" || key == argsInfo.ThisName || (key == "0" && argsInfo.IsExtensionMethod))
                {
                    if(modifier == "GetHashCode" || modifier == "ToString")
                    {
                        AstNode node = null;
                        if (argsInfo.ThisArgument is AstNode)
                        {
                            node = (AstNode)argsInfo.ThisArgument;
                        }
                        else
                        {
                            node = argsInfo.Expression;
                        }

                        if (node != null)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(node, this.Emitter);
                            var type = rr.Type;
                            var mrr = rr as MemberResolveResult;
                            if (mrr != null && mrr.Member.ReturnType.Kind != TypeKind.Enum && mrr.TargetResult != null)
                            {
                                type = mrr.TargetResult.Type;
                            }

                            var inlineMethod = ConversionBlock.GetInlineMethod(this.Emitter, modifier,
                                           modifier == "ToString" ? this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String) :
                                            this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.Int32), type, argsInfo.Expression);
                            this.Write(inlineMethod);
                        }
                    }
                    else if (modifier == "type")
                    {
                        AstNode node = null;
                        if (argsInfo.ThisArgument is AstNode)
                        {
                            node = (AstNode)argsInfo.ThisArgument;
                        }
                        else
                        {
                            node = argsInfo.Expression;
                        }

                        if (node != null)
                        {
                            var rr = this.Emitter.Resolver.ResolveNode(node, this.Emitter);
                            var type = rr.Type;
                            var mrr = rr as MemberResolveResult;
                            if (mrr != null && mrr.Member.ReturnType.Kind != TypeKind.Enum && mrr.TargetResult != null)
                            {
                                type = mrr.TargetResult.Type;
                            }

                            bool needName = this.NeedName(type);

                            if (needName)
                            {
                                isSimple = true;
                                var enumType = NullableType.GetUnderlyingType(type);
                                if (type.Kind == TypeKind.Enum && this.Emitter.Validator.IsExternalType(type.GetDefinition()))
                                {
                                    var enumMode = Helpers.EnumEmitMode(type);
                                    if (enumMode >= 3 && enumMode < 7)
                                    {
                                        enumType = this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String);
                                    }
                                    else if (enumMode == 2)
                                    {
                                        enumType = type.GetDefinition().EnumUnderlyingType;
                                    }
                                }
                                this.Write(BridgeTypes.ToJsName(enumType, this.Emitter));
                            }
                            else
                            {
                                string thisValue = argsInfo.GetThisValue();

                                if (thisValue != null)
                                {
                                    if (type.Kind == TypeKind.TypeParameter && !Helpers.IsIgnoreGeneric(((ITypeParameter)type).Owner, this.Emitter))
                                    {
                                        thisValue = thisValue + ", " + type.Name;
                                    }
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
                            isSimple = true;
                            this.Write(thisValue);
                        }
                    }
                }
                else
                {
                    IList<Expression> exprs = this.GetExpressionsByKey(expressions, key);

                    if (exprs.Count > 0)
                    {
                        if (modifier == "GetHashCode" || modifier == "ToString")
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

                            var inlineMethod = ConversionBlock.GetInlineMethod(this.Emitter, modifier,
                                               modifier == "ToString" ? this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String) :
                                                this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.Int32), type, exprs[0]);
                            this.Write(inlineMethod);
                        }
                        else if (modifier == "type")
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
                            isSimple = true;
                        }
                        else if (modifier == "tmp")
                        {
                            var tmpVarName = this.GetTempVarName();
                            var nameExpr = exprs[0] as PrimitiveExpression;

                            if (nameExpr == null)
                            {
                                throw new EmitterException(exprs[0], "Primitive expression is required");
                            }

                            Emitter.NamedTempVariables[nameExpr.LiteralValue] = tmpVarName;
                            Write(tmpVarName);
                            isSimple = true;
                        }
                        else if (modifier == "version")
                        {
                            var versionTypeExp = exprs != null && exprs.Any() ? exprs[0] : null;

                            var versionType = 0;
                            if (versionTypeExp != null)
                            {
                                var versionTypePrimitiveExp = versionTypeExp as PrimitiveExpression;
                                if (versionTypePrimitiveExp != null && versionTypePrimitiveExp.Value is int)
                                {
                                    versionType = (int)versionTypePrimitiveExp.Value;
                                }
                                else
                                {
                                    var rr = this.Emitter.Resolver.ResolveNode(versionTypeExp, this.Emitter);

                                    if (rr != null && rr.ConstantValue != null && rr.ConstantValue is int)
                                    {
                                        versionType = (int)rr.ConstantValue;
                                    }
                                }
                            }

                            string version;

                            if (versionType == 0)
                            {
                                version = this.Emitter.Translator.GetVersionContext().Assembly.Version;
                            }
                            else
                            {
                                version = this.Emitter.Translator.GetVersionContext().Compiler.Version;
                            }

                            Write("\"", version, "\"");

                            isSimple = true;
                        }
                        else if (modifier == "gettmp")
                        {
                            var nameExpr = exprs[0] as PrimitiveExpression;

                            if (nameExpr == null)
                            {
                                throw new EmitterException(exprs[0], "Primitive expression is required");
                            }

                            if (!Emitter.NamedTempVariables.ContainsKey(nameExpr.LiteralValue))
                            {
                                throw new EmitterException(exprs[0], "Primitive expression is required");
                            }

                            var tmpVarName = Emitter.NamedTempVariables[nameExpr.LiteralValue];
                            Write(tmpVarName);
                            isSimple = true;
                        }
                        else if (modifier == "body")
                        {
                            var lambdaExpr = exprs[0] as LambdaExpression;

                            if (lambdaExpr == null)
                            {
                                throw new EmitterException(exprs[0], "Lambda expression is required");
                            }

                            var writer = this.SaveWriter();
                            this.NewWriter();

                            lambdaExpr.Body.AcceptVisitor(this.Emitter);

                            var s = this.Emitter.Output.ToString();
                            this.RestoreWriter(writer);
                            this.Write(this.WriteIndentToString(s));
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
                                isSimple = true;
                                this.Write("null");
                            }
                            else
                            {
                                new ExpressionListBlock(this.Emitter, exprs, null, null, 0).Emit();
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
                                        this.Write(JS.Funcs.BRIDGE_REF + "(");

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
                                        this.Write(JS.Funcs.BRIDGE_TOPLAIN);
                                        this.WriteOpenParentheses();
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
                                    isSimple = this.IsSimpleExpression(exprs[0]);
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
                                isSimple = true;
                                s = "null";
                            }

                            this.Write(this.WriteIndentToString(s));
                        }
                    }
                    else if (this.ArgumentsInfo.Attribute != null)
                    {
                        var results = this.GetResolveResultByKey(key);

                        if (results.Count > 1 || paramsName == key)
                        {
                            if (needExpand)
                            {
                                ignoreArray = true;
                            }

                            if (!ignoreArray)
                            {
                                this.Write("[");
                            }

                            if (exprs.Count == 1 && results[0].IsCompileTimeConstant && results[0].ConstantValue == null)
                            {
                                isSimple = true;
                                this.Write("null");
                            }
                            else
                            {
                                bool needComma = false;
                                foreach (ResolveResult item in results)
                                {
                                    if (needComma)
                                    {
                                        this.WriteComma();
                                    }

                                    needComma = true;

                                    isSimple = this.IsSimpleResolveResult(item);
                                    AttributeCreateBlock.WriteResolveResult(item, this);
                                }
                            }

                            if (!ignoreArray)
                            {
                                this.Write("]");
                            }
                        }
                        else
                        {
                            string s;
                            if (results[0] != null)
                            {
                                var writer = this.SaveWriter();
                                this.NewWriter();

                                isSimple = this.IsSimpleResolveResult(results[0]);
                                AttributeCreateBlock.WriteResolveResult(results[0], this);

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
                    else if (this.ArgumentsInfo.StringArguments != null)
                    {
                        var results = this.GetStringArgumentByKey(key);

                        if (results.Count > 1 || paramsName == key)
                        {
                            if (needExpand)
                            {
                                ignoreArray = true;
                            }

                            if (!ignoreArray)
                            {
                                this.Write("[");
                            }

                            bool needComma = false;
                            foreach (string item in results)
                            {
                                if (needComma)
                                {
                                    this.WriteComma();
                                }

                                needComma = true;

                                this.Write(item);
                            }

                            if (!ignoreArray)
                            {
                                this.Write("]");
                            }
                        }
                        else
                        {
                            string s;
                            if (results[0] != null)
                            {
                                s = results[0];

                                if (modifier == "raw")
                                {
                                    s = s.Trim('"');
                                }
                            }
                            else
                            {
                                s = "null";
                            }

                            this.Write(s);
                        }
                    }
                    else if (typeParams != null)
                    {
                        if (modifier == "GetHashCode" || modifier == "ToString")
                        {
                            var iType = this.GetTypeByKey(typeParams, key);

                            if (iType != null)
                            {
                                var inlineMethod = ConversionBlock.GetInlineMethod(this.Emitter, modifier,
                                    modifier == "ToString"
                                        ? this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String)
                                        : this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.Int32), iType.IType,
                                    null);
                                this.Write(inlineMethod ?? "null");
                            }
                        }
                        else
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
                }

                if (this.Emitter.Writers.Count != count)
                {
                    this.PopWriter();
                }

                string replacement = this.Emitter.Output.ToString();
                this.Emitter.Output = oldSb;

                if (!isSimple && keyMatches.Count(keyMatch =>
                {
                    string key1 = keyMatch.Groups[2].Value;
                    string modifier1 = keyMatch.Groups[1].Success ? keyMatch.Groups[4].Value : null;
                    return key == key1 && modifier1 == modifier;
                }) > 1)
                {
                    var t = this.GetTempVarName();
                    tempVars.Add(t, replacement);
                    tempMap[tempKey] = t;
                    return t;
                }

                return replacement;
            });

            if (tempVars.Count > 0)
            {
                StringBuilder sb = new StringBuilder();

                sb.Append("(");

                foreach (var tempVar in tempVars)
                {
                    sb.Append(tempVar.Key);
                    sb.Append(" = ");
                    sb.Append(tempVar.Value);
                    sb.Append(", ");
                }

                sb.Append(inline);
                sb.Append(")");

                inline = sb.ToString();
            }
            this.Write(inline);

            if (asRef)
            {
                this.Write("; }");
                if (addClose)
                {
                    this.Write(")");
                }
            }
        }

        public void AddModuleByType(List<string> amd, List<string> cjs, Module module)
        {
            if (module != null)
            {
                if (!(module.Type == ModuleType.UMD &&
                     this.Emitter.AssemblyInfo.Loader.Type == ModuleLoaderType.Global))
                {
                    if (module.Type == ModuleType.AMD
                        || (module.Type == ModuleType.UMD && this.Emitter.AssemblyInfo.Loader.Type == ModuleLoaderType.AMD))
                    {
                        amd.Add(module.Name);
                    }
                    else
                    {
                        cjs.Add(module.Name);
                    }
                }
            }
        }

        private void WriteGetType(bool needName, IType type, AstNode node, string modifier)
        {
            if (needName)
            {
                var enumType = type;
                if (type.Kind == TypeKind.Enum && this.Emitter.Validator.IsExternalType(type.GetDefinition()))
                {
                    var enumMode = Helpers.EnumEmitMode(type);
                    if (enumMode >= 3 && enumMode < 7)
                    {
                        enumType = this.Emitter.Resolver.Compilation.FindType(KnownTypeCode.String);
                    }
                    else if (enumMode == 2)
                    {
                        enumType = type.GetDefinition().EnumUnderlyingType;
                    }
                }
                this.Write(BridgeTypes.ToJsName(enumType, this.Emitter));
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

                if (type.Kind == TypeKind.TypeParameter && !Helpers.IsIgnoreGeneric(((ITypeParameter)type).Owner, this.Emitter))
                {
                    s = s + ", " + type.Name;
                }

                this.Write(this.WriteIndentToString(JS.Funcs.BRIDGE_GET_TYPE + "(" + s + ")"));
            }
        }

        private bool NeedName(IType type)
        {
            var def = type.GetDefinition();
            return (def != null && def.IsSealed && !Helpers.IsKnownType(KnownTypeCode.Array, type, this.Emitter.Resolver))
                   || (type.Kind == TypeKind.Enum || Helpers.IsKnownType(KnownTypeCode.Enum, type, this.Emitter.Resolver)) && type.FullName != "System.Enum"
                   || Helpers.IsIntegerType(type, this.Emitter.Resolver)
                   || Helpers.IsFloatType(type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Boolean, type, this.Emitter.Resolver)
                   || Helpers.IsKnownType(KnownTypeCode.Type, type, this.Emitter.Resolver)
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
                    this.Write(BridgeTypes.ToJsName((AstType)def, this.Emitter) + "." + JS.Funcs.GETDEFAULTVALUE);
                }
                else
                {
                    this.Write(Inspector.GetStructDefaultValue((AstType)def, this.Emitter));
                }
            }
            else if (def is IType)
            {
                if (modifier == "defaultFn")
                {
                    this.Write(BridgeTypes.ToJsName((IType)def, this.Emitter) + "." + JS.Funcs.GETDEFAULTVALUE);
                }
                else
                {
                    this.Write(Inspector.GetStructDefaultValue((IType)def, this.Emitter));
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
            else if (this.Method.IsExtensionMethod && !(this.TargetResolveResult is TypeResolveResult) && this.TargetResolveResult != null)
            {
                parameters = parameters.Skip(1);
            }

            foreach (var p in parameters)
            {
                var name = p.Name;

                if (Helpers.IsReservedWord(this.Emitter, name))
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

        public virtual void EmitFunctionReference(bool? definition = false)
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode, true, false, definition);
        }

        public virtual void EmitNullableReference()
        {
            this.EmitInlineExpressionList(this.ArgumentsInfo, this.InlineCode, true, true);
        }

        public bool IsSimpleExpression(Expression expression)
        {
            if (expression is PrimitiveExpression || expression is ThisReferenceExpression)
            {
                return true;
            }

            var rr = this.Emitter.Resolver.ResolveNode(expression, this.Emitter);
            return this.IsSimpleResolveResult(rr);
        }

        private bool IsSimpleResolveResult(ResolveResult rr)
        {
            var memberTargetrr = rr as MemberResolveResult;
            bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                           (memberTargetrr.TargetResult is ThisResolveResult ||
                            memberTargetrr.TargetResult is LocalResolveResult);

            return rr is ThisResolveResult || rr is ConstantResolveResult || rr is LocalResolveResult || isField;
        }
    }
}