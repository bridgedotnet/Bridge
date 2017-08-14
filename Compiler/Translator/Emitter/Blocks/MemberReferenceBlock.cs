using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Object.Net.Utilities;
using System;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace Bridge.Translator
{
    public class MemberReferenceBlock : ConversionBlock
    {
        public MemberReferenceBlock(IEmitter emitter, MemberReferenceExpression memberReferenceExpression)
            : base(emitter, memberReferenceExpression)
        {
            this.Emitter = emitter;
            this.MemberReferenceExpression = memberReferenceExpression;
        }

        public MemberReferenceExpression MemberReferenceExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.MemberReferenceExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitMemberReferenceExpression();
        }

        protected string WriteTarget(ResolveResult resolveResult, bool isInterfaceMember, MemberResolveResult memberTargetrr, ResolveResult targetrr, bool openParentheses)
        {
            string interfaceTempVar = null;
            if (isInterfaceMember)
            {
                MemberResolveResult member = resolveResult as MemberResolveResult;
                bool nativeImplementation = true;
                var externalInterface = member != null && this.Emitter.Validator.IsExternalInterface(member.Member.DeclaringTypeDefinition, out nativeImplementation);
                bool isField = externalInterface && memberTargetrr != null && memberTargetrr.Member is IField && (memberTargetrr.TargetResult is ThisResolveResult || memberTargetrr.TargetResult is LocalResolveResult);

                if (externalInterface && !nativeImplementation && !(targetrr is ThisResolveResult || targetrr is TypeResolveResult || targetrr is LocalResolveResult || isField))
                {
                    if (openParentheses)
                    {
                        this.WriteOpenParentheses();
                    }

                    interfaceTempVar = this.GetTempVarName();
                    this.Write(interfaceTempVar);
                    this.Write(" = ");
                }
            }

            this.WriteSimpleTarget(resolveResult);

            return interfaceTempVar;
        }

        protected void WriteSimpleTarget(ResolveResult resolveResult)
        {
            MemberResolveResult member = resolveResult as MemberResolveResult;
            if (member == null || !member.Member.IsStatic)
            {
                this.MemberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                return;
            }

            var imethod = member.Member as IMethod;
            var imember = member.Member;
            if ((imethod != null && imethod.IsExtensionMethod) || imember == null)
            {
                this.MemberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                return;
            }
            var target = BridgeTypes.ToJsName(member.Member.DeclaringType, this.Emitter);
            this.NoTarget = string.IsNullOrWhiteSpace(target);

            if (member.Member.IsStatic
                && target != CS.NS.BRIDGE
                && !target.StartsWith(CS.Bridge.DOTNAME)
                && this.MemberReferenceExpression.Target.ToString().StartsWith(CS.NS.GLOBAL))
            {
                this.Write(JS.Types.Bridge.Global.DOTNAME);
            }

            this.Write(target);
        }

        public bool NoTarget
        {
            get; set;
        }

        private void WriteInterfaceMember(string interfaceTempVar, MemberResolveResult resolveResult, bool isSetter, string prefix = null)
        {
            var itypeDef = resolveResult.Member.DeclaringTypeDefinition;
            var externalInterface = this.Emitter.Validator.IsExternalInterface(itypeDef);
            bool variance = MetadataUtils.IsJsGeneric(itypeDef, this.Emitter) &&
                itypeDef.TypeParameters != null &&
                itypeDef.TypeParameters.Any(typeParameter => typeParameter.Variance != VarianceModifier.Invariant);

            if (interfaceTempVar != null && externalInterface == null && !variance)
            {
                this.WriteComma();
                this.Write(interfaceTempVar);
            }

            if (externalInterface != null && externalInterface.IsDualImplementation || variance)
            {
                if (interfaceTempVar != null)
                {
                    this.WriteCloseParentheses();
                }

                this.WriteOpenBracket();
                this.Write(JS.Funcs.BRIDGE_GET_I);
                this.WriteOpenParentheses();

                if (interfaceTempVar != null)
                {
                    this.Write(interfaceTempVar);
                }
                else
                {
                    this.WriteSimpleTarget(resolveResult);
                }

                this.WriteComma();

                var interfaceName = OverloadsCollection.Create(Emitter, resolveResult.Member, isSetter).GetOverloadName(false, prefix);

                if (interfaceName.StartsWith("\""))
                {
                    this.Write(interfaceName);
                }
                else
                {
                    this.WriteScript(interfaceName);
                }

                if (variance)
                {
                    this.WriteComma();
                    this.WriteScript(OverloadsCollection.Create(Emitter, resolveResult.Member, isSetter).GetOverloadName(false, prefix, withoutTypeParams: true));
                }

                /*this.WriteComma();
                this.WriteScript(OverloadsCollection.Create(Emitter, resolveResult.Member, isSetter).GetOverloadName(true, prefix));*/

                this.Write(")");
                this.WriteCloseBracket();

                return;
            }

            this.WriteOpenBracket();
            this.Write(OverloadsCollection.Create(Emitter, resolveResult.Member, isSetter).GetOverloadName(externalInterface != null && externalInterface.IsSimpleImplementation, prefix));
            this.WriteCloseBracket();

            if (interfaceTempVar != null)
            {
                this.WriteCloseParentheses();
            }
        }

        protected void VisitMemberReferenceExpression()
        {
            MemberReferenceExpression memberReferenceExpression = this.MemberReferenceExpression;
            int pos = this.Emitter.Output.Length;
            bool isRefArg = this.Emitter.IsRefArg;
            this.Emitter.IsRefArg = false;

            ResolveResult resolveResult = null;
            ResolveResult expressionResolveResult = null;
            string targetVar = null;
            string valueVar = null;
            bool isStatement = false;
            bool isConstTarget = false;

            var targetrr = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Target, this.Emitter);
            if (targetrr is ConstantResolveResult)
            {
                isConstTarget = true;
            }

            var memberTargetrr = targetrr as MemberResolveResult;
            if (memberTargetrr != null && memberTargetrr.Type.Kind == TypeKind.Enum && memberTargetrr.Member is DefaultResolvedField && Helpers.EnumEmitMode(memberTargetrr.Type) == 2)
            {
                isConstTarget = true;
            }

            if (memberReferenceExpression.Target is ParenthesizedExpression ||
                (targetrr is ConstantResolveResult && targetrr.Type.IsKnownType(KnownTypeCode.Int64)) ||
                (targetrr is ConstantResolveResult && targetrr.Type.IsKnownType(KnownTypeCode.UInt64)) ||
                (targetrr is ConstantResolveResult && targetrr.Type.IsKnownType(KnownTypeCode.Decimal)))
            {
                isConstTarget = false;
            }

            var isInvoke = memberReferenceExpression.Parent is InvocationExpression && (((InvocationExpression)(memberReferenceExpression.Parent)).Target == memberReferenceExpression);
            if (isInvoke)
            {
                resolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Parent, this.Emitter);
                expressionResolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression, this.Emitter);

                if (expressionResolveResult is InvocationResolveResult)
                {
                    resolveResult = expressionResolveResult;
                }
                else if (expressionResolveResult is MemberResolveResult)
                {
                    if (((MemberResolveResult)expressionResolveResult).Member is IProperty)
                    {
                        resolveResult = expressionResolveResult;
                    }
                }
            }
            else
            {
                resolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression, this.Emitter);
            }

            bool oldIsAssignment = this.Emitter.IsAssignment;
            bool oldUnary = this.Emitter.IsUnaryAccessor;

            if (resolveResult == null)
            {
                this.Emitter.IsAssignment = false;
                this.Emitter.IsUnaryAccessor = false;
                if (isConstTarget)
                {
                    this.Write("(");
                }
                memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                if (isConstTarget)
                {
                    this.Write(")");
                }
                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
                this.WriteDot();
                string name = memberReferenceExpression.MemberName;
                this.Write(name.ToLowerCamelCase());

                return;
            }

            bool isDynamic = false;
            if (resolveResult is DynamicInvocationResolveResult)
            {
                var dynamicResolveResult = (DynamicInvocationResolveResult)resolveResult;
                var group = dynamicResolveResult.Target as MethodGroupResolveResult;

                if (group != null && group.Methods.Count() > 1)
                {
                    var method = group.Methods.FirstOrDefault(m =>
                    {
                        if (dynamicResolveResult.Arguments.Count != m.Parameters.Count)
                        {
                            return false;
                        }

                        for (int i = 0; i < m.Parameters.Count; i++)
                        {
                            var argType = dynamicResolveResult.Arguments[i].Type;

                            if (argType.Kind == TypeKind.Dynamic)
                            {
                                argType = this.Emitter.Resolver.Compilation.FindType(TypeCode.Object);
                            }

                            if (!m.Parameters[i].Type.Equals(argType))
                            {
                                return false;
                            }
                        }

                        return true;
                    }) ?? group.Methods.Last();

                    isDynamic = true;
                    resolveResult = new MemberResolveResult(new TypeResolveResult(method.DeclaringType), method);
                    resolveResult = new InvocationResolveResult(resolveResult, method, dynamicResolveResult.Arguments);
                }
            }

            if (resolveResult is MethodGroupResolveResult)
            {
                var oldResult = (MethodGroupResolveResult)resolveResult;
                resolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Parent, this.Emitter);

                if (resolveResult is DynamicInvocationResolveResult)
                {
                    var method = oldResult.Methods.Last();
                    resolveResult = new MemberResolveResult(new TypeResolveResult(method.DeclaringType), method);
                }
            }

            MemberResolveResult member = resolveResult as MemberResolveResult;
            var globalTarget = member != null ? this.Emitter.IsGlobalTarget(member.Member) : null;

            if (member != null &&
                member.Member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.NonScriptableAttribute"))
            {
                throw new EmitterException(this.MemberReferenceExpression, "Member " + member.ToString() + " is marked as not usable from script");
            }

            if (!(resolveResult is InvocationResolveResult) && member != null && member.Member is IMethod)
            {
                var interceptor = this.Emitter.Plugins.OnReference(this, this.MemberReferenceExpression, member);

                if (interceptor.Cancel)
                {
                    return;
                }

                if (!string.IsNullOrEmpty(interceptor.Replacement))
                {
                    this.Write(interceptor.Replacement);
                    return;
                }
            }

            if (globalTarget != null && globalTarget.Item1)
            {
                var target = globalTarget.Item2;

                if (!string.IsNullOrWhiteSpace(target))
                {
                    bool assign = false;
                    var memberExpression = member.Member is IMethod ? memberReferenceExpression.Parent.Parent : memberReferenceExpression.Parent;
                    var targetExpression = member.Member is IMethod ? memberReferenceExpression.Parent : memberReferenceExpression;
                    var assignment = memberExpression as AssignmentExpression;
                    if (assignment != null && assignment.Right == targetExpression)
                    {
                        assign = true;
                    }
                    else
                    {
                        var varInit = memberExpression as VariableInitializer;
                        if (varInit != null && varInit.Initializer == targetExpression)
                        {
                            assign = true;
                        }
                        else if (memberExpression is InvocationExpression)
                        {
                            var targetInvocation = (InvocationExpression)memberExpression;
                            if (targetInvocation.Arguments.Any(a => a == targetExpression))
                            {
                                assign = true;
                            }
                        }
                    }

                    if (assign)
                    {
                        if (resolveResult is InvocationResolveResult)
                        {
                            this.PushWriter(target);
                        }
                        else
                        {
                            this.Write(target);
                        }

                        return;
                    }
                }

                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter("");
                }

                return;
            }

            Tuple<bool, bool, string> inlineInfo = member != null ? (isDynamic ? ((Emitter)this.Emitter).GetInlineCodeFromMember(member.Member, null) : this.Emitter.GetInlineCode(memberReferenceExpression)) : null;
            //string inline = member != null ? this.Emitter.GetInline(member.Member) : null;
            string inline = inlineInfo != null ? inlineInfo.Item3 : null;

            if (string.IsNullOrEmpty(inline) && member != null &&
                member.Member is IMethod &&
                !(member is InvocationResolveResult) &&
                !(
                    memberReferenceExpression.Parent is InvocationExpression &&
                    memberReferenceExpression.NextSibling != null &&
                    memberReferenceExpression.NextSibling.Role is TokenRole &&
                    ((TokenRole)memberReferenceExpression.NextSibling.Role).Token == "("
                    )
                )
            {
                var parentInvocation = memberReferenceExpression.Parent as InvocationExpression;
                if (parentInvocation == null || parentInvocation.Target != memberReferenceExpression)
                {
                    var method = (IMethod)member.Member;
                    if (method.TypeArguments.Count > 0)
                    {
                        inline = MemberReferenceBlock.GenerateInlineForMethodReference(method, this.Emitter);
                    }
                }
            }

            if (member != null && member.Member is IMethod && isInvoke)
            {
                var i_rr = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Parent, this.Emitter) as CSharpInvocationResolveResult;

                if (i_rr != null && !i_rr.IsExpandedForm)
                {
                    var tpl = this.Emitter.GetAttribute(member.Member.Attributes, JS.NS.BRIDGE + ".TemplateAttribute");

                    if (tpl != null && tpl.PositionalArguments.Count == 2)
                    {
                        inline = tpl.PositionalArguments[1].ConstantValue.ToString();
                    }
                }
            }

            bool hasInline = !string.IsNullOrEmpty(inline);
            bool hasThis = hasInline && Helpers.HasThis(inline);
            inline = hasInline ? Helpers.ConvertTokens(this.Emitter, inline, member.Member) : inline;
            bool isInterfaceMember = false;

            if (hasInline && inline.StartsWith("<self>"))
            {
                hasThis = true;
                inline = inline.Substring(6);
            }

            bool nativeImplementation = true;
            bool isInterface = inline == null && member != null && member.Member.DeclaringTypeDefinition != null && member.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
            var hasTypeParemeter = isInterface && Helpers.IsTypeParameterType(member.Member.DeclaringType);
            if (isInterface)
            {
                var itypeDef = member.Member.DeclaringTypeDefinition;
                var variance = MetadataUtils.IsJsGeneric(itypeDef, this.Emitter) &&
                    itypeDef.TypeParameters != null &&
                    itypeDef.TypeParameters.Any(typeParameter => typeParameter.Variance != VarianceModifier.Invariant);

                if (variance)
                {
                    isInterfaceMember = true;
                }
                else
                {
                    var ei = this.Emitter.Validator.IsExternalInterface(itypeDef);

                    if (ei != null)
                    {
                        nativeImplementation = ei.IsNativeImplementation;
                    }
                    else
                    {
                        nativeImplementation = member.Member.DeclaringTypeDefinition.ParentAssembly.AssemblyName == CS.NS.BRIDGE ||
                                               !this.Emitter.Validator.IsExternalType(member.Member.DeclaringTypeDefinition);
                    }

                    if (ei != null && ei.IsSimpleImplementation)
                    {
                        nativeImplementation = false;
                        isInterfaceMember = false;
                    }
                    else if (ei != null || hasTypeParemeter)
                    {
                        if (hasTypeParemeter || !nativeImplementation)
                        {
                            isInterfaceMember = true;
                        }
                    }
                }
            }

            string interfaceTempVar = null;

            if (hasThis)
            {
                this.Write("");
                var oldBuilder = this.Emitter.Output;
                var oldInline = inline;
                string thisArg = null;
                bool isSimple = true;

                if (this.MemberReferenceExpression.Target is BaseReferenceExpression)
                {
                    thisArg = "this";
                }
                else
                {
                    this.Emitter.Output = new StringBuilder();
                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    if (isConstTarget)
                    {
                        this.Write("(");
                    }
                    this.WriteSimpleTarget(resolveResult);
                    if (isConstTarget)
                    {
                        this.Write(")");
                    }

                    thisArg = this.Emitter.Output.ToString();

                    if (Regex.Matches(inline, @"\{(\*?)this\}").Count > 1)
                    {
                        var mrr = resolveResult as MemberResolveResult;
                        bool isField = mrr != null && mrr.Member is IField &&
                                       (mrr.TargetResult is ThisResolveResult ||
                                        mrr.TargetResult is LocalResolveResult || mrr.TargetResult is MemberResolveResult && ((MemberResolveResult)mrr.TargetResult).Member is IField);

                        isSimple = (mrr != null && (mrr.TargetResult is ThisResolveResult || mrr.TargetResult is ConstantResolveResult || mrr.TargetResult is LocalResolveResult)) || isField;
                    }
                }

                int thisIndex;
                inline = member != null ? Helpers.ConvertTokens(this.Emitter, inline, member.Member) : inline;
                if (!isSimple)
                {
                    StringBuilder sb = new StringBuilder();

                    sb.Append("(");
                    var tempVar = this.GetTempVarName();
                    inline = inline.Replace("{this}", tempVar);
                    thisIndex = tempVar.Length + 2;

                    sb.Append(tempVar);
                    sb.Append(" = ");
                    sb.Append(thisArg);
                    sb.Append(", ");

                    sb.Append(inline);
                    sb.Append(")");

                    inline = sb.ToString();
                }
                else
                {
                    thisIndex = inline.IndexOf("{this}", StringComparison.Ordinal);
                    inline = inline.Replace("{this}", thisArg);
                }

                if (member != null && member.Member is IProperty)
                {
                    this.Emitter.Output = new StringBuilder();
                    inline = inline.Replace("{0}", "[[0]]");
                    new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline).Emit();
                    inline = this.Emitter.Output.ToString();
                    inline = inline.Replace("[[0]]", "{0}");
                }

                this.Emitter.IsAssignment = oldIsAssignment;
                this.Emitter.IsUnaryAccessor = oldUnary;
                this.Emitter.Output = oldBuilder;

                int[] range = null;

                if (thisIndex > -1)
                {
                    range = new[] { thisIndex, thisIndex + thisArg.Length };
                }

                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inline, null, thisArg, range);
                }
                else
                {
                    if (member != null && member.Member is IMethod)
                    {
                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), oldInline, (IMethod)member.Member, targetrr).EmitFunctionReference();
                    }
                    else if (member != null && member.Member is IField && inline.Contains("{0}"))
                    {
                        this.PushWriter(inline, null, thisArg, range);
                    }
                    else if (InlineArgumentsBlock.FormatArgRegex.IsMatch(inline))
                    {
                        this.PushWriter(inline, null, thisArg, range);
                    }
                    else
                    {
                        this.Write(inline);
                    }
                }

                return;
            }

            if (member != null && member.Member.SymbolKind == SymbolKind.Field && this.Emitter.IsMemberConst(member.Member) && this.Emitter.IsInlineConst(member.Member))
            {
                var parentExpression = memberReferenceExpression.Parent as MemberReferenceExpression;
                bool wrap = false;

                if (parentExpression != null)
                {
                    var ii = this.Emitter.GetInlineCode(parentExpression);

                    if (string.IsNullOrEmpty(ii.Item3))
                    {
                        wrap = true;
                        this.WriteOpenParentheses();
                    }
                }

                this.WriteScript(Bridge.Translator.Emitter.ConvertConstant(member.ConstantValue, memberReferenceExpression, this.Emitter));

                if (wrap)
                {
                    this.WriteCloseParentheses();
                }
            }
            else if (hasInline && member.Member.IsStatic)
            {
                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inline);
                }
                else
                {
                    if (member != null && member.Member is IMethod)
                    {
                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline, (IMethod)member.Member, targetrr).EmitFunctionReference();
                    }
                    else
                    {
                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline).Emit();
                    }
                }
            }
            else
            {
                if (member != null && member.IsCompileTimeConstant && member.Member.DeclaringType.Kind == TypeKind.Enum)
                {
                    var typeDef = member.Member.DeclaringType as ITypeDefinition;

                    if (typeDef != null)
                    {
                        var enumMode = Helpers.EnumEmitMode(typeDef);

                        if ((this.Emitter.Validator.IsExternalType(typeDef) && enumMode == -1) || enumMode == 2)
                        {
                            this.WriteScript(member.ConstantValue);

                            return;
                        }

                        if (enumMode >= 3 && enumMode < 7)
                        {
                            string enumStringName = this.Emitter.GetEntityName(member.Member);
                            this.WriteScript(enumStringName);
                            return;
                        }
                    }
                }

                if (resolveResult is TypeResolveResult)
                {
                    TypeResolveResult typeResolveResult = (TypeResolveResult)resolveResult;
                    this.Write(BridgeTypes.ToJsName(typeResolveResult.Type, this.Emitter));
                    return;
                }
                else
                {
                    if (member != null &&
                        member.Member is IMethod &&
                        !(member is InvocationResolveResult) &&
                        !(
                            memberReferenceExpression.Parent is InvocationExpression &&
                            memberReferenceExpression.NextSibling != null &&
                            memberReferenceExpression.NextSibling.Role is TokenRole &&
                            ((TokenRole)memberReferenceExpression.NextSibling.Role).Token == "("
                        )
                    )
                    {
                        var parentInvocation = memberReferenceExpression.Parent as InvocationExpression;
                        if (parentInvocation == null || parentInvocation.Target != memberReferenceExpression)
                        {
                            if (!string.IsNullOrEmpty(inline))
                            {
                                if (!(resolveResult is InvocationResolveResult) && member != null && member.Member is IMethod)
                                {
                                    new InlineArgumentsBlock(this.Emitter,
                                        new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline,
                                        (IMethod)member.Member, targetrr).EmitFunctionReference();
                                }
                                else if (resolveResult is InvocationResolveResult ||
                                         (member.Member.SymbolKind == SymbolKind.Property && this.Emitter.IsAssignment))
                                {
                                    this.PushWriter(inline);
                                }
                                else
                                {
                                    this.Write(inline);
                                }
                            }
                            else
                            {
                                var resolvedMethod = (IMethod)member.Member;
                                bool isStatic = resolvedMethod != null && resolvedMethod.IsStatic;

                                var isExtensionMethod = resolvedMethod.IsExtensionMethod;

                                this.Emitter.IsAssignment = false;
                                this.Emitter.IsUnaryAccessor = false;

                                if (!isStatic)
                                {
                                    this.Write(isExtensionMethod ? JS.Funcs.BRIDGE_BIND_SCOPE : JS.Funcs.BRIDGE_CACHE_BIND);
                                    this.WriteOpenParentheses();

                                    if (memberReferenceExpression.Target is BaseReferenceExpression)
                                    {
                                        this.WriteThis();
                                    }
                                    else
                                    {
                                        interfaceTempVar = this.WriteTarget(resolveResult, isInterfaceMember, memberTargetrr, targetrr, false);
                                    }

                                    this.Write(", ");
                                }

                                this.Emitter.IsAssignment = oldIsAssignment;
                                this.Emitter.IsUnaryAccessor = oldUnary;

                                if (isExtensionMethod)
                                {
                                    this.Write(BridgeTypes.ToJsName(resolvedMethod.DeclaringType, this.Emitter));
                                }
                                else
                                {
                                    this.Emitter.IsAssignment = false;
                                    this.Emitter.IsUnaryAccessor = false;
                                    if (isConstTarget)
                                    {
                                        this.Write("(");
                                    }

                                    if (interfaceTempVar != null)
                                    {
                                        this.Write(interfaceTempVar);
                                    }
                                    else
                                    {
                                        this.WriteSimpleTarget(resolveResult);
                                    }

                                    if (isConstTarget)
                                    {
                                        this.Write(")");
                                    }
                                    this.Emitter.IsAssignment = oldIsAssignment;
                                    this.Emitter.IsUnaryAccessor = oldUnary;
                                }

                                if (isInterfaceMember)
                                {
                                    this.WriteInterfaceMember(interfaceTempVar, member, false);
                                }
                                else
                                {
                                    this.WriteDot();
                                    this.Write(OverloadsCollection.Create(this.Emitter, member.Member).GetOverloadName(!nativeImplementation));
                                }

                                if (!isStatic)
                                {
                                    this.Write(")");
                                }
                            }

                            return;
                        }
                    }

                    bool isProperty = false;

                    if (member != null && member.Member.SymbolKind == SymbolKind.Property && (member.Member.DeclaringTypeDefinition == null || !this.Emitter.Validator.IsObjectLiteral(member.Member.DeclaringTypeDefinition)))
                    {
                        isProperty = true;
                        bool writeTargetVar = false;

                        if (this.Emitter.IsAssignment && this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                        {
                            writeTargetVar = true;
                        }
                        else if (this.Emitter.IsUnaryAccessor)
                        {
                            writeTargetVar = true;

                            isStatement = memberReferenceExpression.Parent is UnaryOperatorExpression && memberReferenceExpression.Parent.Parent is ExpressionStatement;

                            if (NullableType.IsNullable(member.Type))
                            {
                                isStatement = false;
                            }

                            if (!isStatement)
                            {
                                this.WriteOpenParentheses();
                            }
                        }

                        if (writeTargetVar)
                        {
                            bool isField = memberTargetrr != null && memberTargetrr.Member is IField && (memberTargetrr.TargetResult is ThisResolveResult || memberTargetrr.TargetResult is LocalResolveResult);

                            if (!(targetrr is ThisResolveResult || targetrr is TypeResolveResult || targetrr is LocalResolveResult || isField))
                            {
                                targetVar = this.GetTempVarName();

                                this.Write(targetVar);
                                this.Write(" = ");
                            }
                        }
                    }

                    if (isProperty && this.Emitter.IsUnaryAccessor && !isStatement && targetVar == null)
                    {
                        valueVar = this.GetTempVarName();

                        this.Write(valueVar);
                        this.Write(" = ");
                    }

                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;
                    if (isConstTarget)
                    {
                        this.Write("(");
                    }

                    if (targetVar == null && isInterfaceMember)
                    {
                        interfaceTempVar = this.WriteTarget(resolveResult, isInterfaceMember, memberTargetrr, targetrr, true);
                    }
                    else
                    {
                        this.WriteSimpleTarget(resolveResult);
                    }

                    if (member != null && targetrr != null && targetrr.Type.Kind == TypeKind.Delegate && (member.Member.Name == "Invoke"))
                    {
                        var method = member.Member as IMethod;
                        if (!(method != null && method.IsExtensionMethod))
                        {
                            return;
                        }
                    }

                    if (isConstTarget)
                    {
                        this.Write(")");
                    }
                    this.Emitter.IsAssignment = oldIsAssignment;
                    this.Emitter.IsUnaryAccessor = oldUnary;

                    if (targetVar != null)
                    {
                        if (this.Emitter.IsUnaryAccessor && !isStatement)
                        {
                            this.WriteComma(false);

                            valueVar = this.GetTempVarName();

                            this.Write(valueVar);
                            this.Write(" = ");

                            this.Write(targetVar);
                        }
                        else
                        {
                            this.WriteSemiColon();
                            this.WriteNewLine();
                            this.Write(targetVar);
                        }
                    }
                }

                var targetResolveResult = targetrr as MemberResolveResult;

                if (targetResolveResult == null || this.Emitter.IsGlobalTarget(targetResolveResult.Member) == null)
                {
                    if (isRefArg)
                    {
                        this.WriteComma();
                    }
                    else if (!isInterfaceMember && !this.NoTarget)
                    {
                        this.WriteDot();
                    }
                }

                if (member == null)
                {
                    if (targetrr != null && targetrr.Type.Kind == TypeKind.Dynamic)
                    {
                        this.Write(memberReferenceExpression.MemberName);
                    }
                    else
                    {
                        this.Write(memberReferenceExpression.MemberName.ToLowerCamelCase());
                    }
                }
                else if (!string.IsNullOrEmpty(inline))
                {
                    if (!(resolveResult is InvocationResolveResult) && member != null && member.Member is IMethod)
                    {
                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline, (IMethod)member.Member, targetrr).EmitFunctionReference();
                    }
                    else if (resolveResult is InvocationResolveResult || (member.Member.SymbolKind == SymbolKind.Property && this.Emitter.IsAssignment))
                    {
                        this.PushWriter(inline);
                    }
                    else
                    {
                        this.Write(inline);
                    }
                }
                else if (member.Member.SymbolKind == SymbolKind.Property && (member.Member.DeclaringTypeDefinition == null || (!this.Emitter.Validator.IsObjectLiteral(member.Member.DeclaringTypeDefinition) || member.Member.IsStatic)))
                {
                    if (member.Member is IProperty && targetrr != null && targetrr.Type.GetDefinition() != null && this.Emitter.Validator.IsObjectLiteral(targetrr.Type.GetDefinition()) && !this.Emitter.Validator.IsObjectLiteral(member.Member.DeclaringTypeDefinition))
                    {
                        this.Write(this.Emitter.GetLiteralEntityName(member.Member));
                    }
                    else
                    {
                        if (isInterfaceMember)
                        {
                            this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, false);
                        }
                        else
                        {
                            var name = OverloadsCollection.Create(this.Emitter, member.Member).GetOverloadName(!nativeImplementation);
                            var property = (IProperty)member.Member;
                            var proto = member.IsVirtualCall || property.IsVirtual || property.IsOverride;

                            if (this.MemberReferenceExpression.Target is BaseReferenceExpression && !property.IsIndexer && proto)
                            {
                                var alias = BridgeTypes.ToJsName(member.Member.DeclaringType, this.Emitter,
                                    isAlias: true);
                                if (alias.StartsWith("\""))
                                {
                                    alias = alias.Insert(1, "$");
                                    name = alias + "+\"$" + name + "\"";
                                    this.WriteIdentifier(name, false);
                                }
                                else
                                {
                                    name = "$" + alias + "$" + name;
                                    this.WriteIdentifier(name);
                                }
                            }
                            else
                            {
                                this.WriteIdentifier(name);
                            }
                        }
                    }
                }
                else if (member.Member.SymbolKind == SymbolKind.Field)
                {
                    bool isConst = this.Emitter.IsMemberConst(member.Member);

                    if (isConst && this.Emitter.IsInlineConst(member.Member))
                    {
                        this.WriteScript(Bridge.Translator.Emitter.ConvertConstant(member.ConstantValue, memberReferenceExpression, this.Emitter));
                    }
                    else
                    {
                        if (isInterfaceMember)
                        {
                            this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, false);
                        }
                        else
                        {
                            var fieldName = OverloadsCollection.Create(this.Emitter, member.Member).GetOverloadName(!nativeImplementation);

                            if (isRefArg)
                            {
                                this.WriteScript(fieldName);
                            }
                            else
                            {
                                this.WriteIdentifier(fieldName);
                            }
                        }
                    }
                }
                else if (resolveResult is InvocationResolveResult)
                {
                    InvocationResolveResult invocationResult = (InvocationResolveResult)resolveResult;
                    CSharpInvocationResolveResult cInvocationResult = resolveResult as CSharpInvocationResolveResult;
                    var expresssionMember = expressionResolveResult as MemberResolveResult;

                    if (isInterfaceMember)
                    {
                        this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, false);
                    }
                    else if (expresssionMember != null &&
                        cInvocationResult != null &&
                        cInvocationResult.IsDelegateInvocation &&
                        invocationResult.Member != expresssionMember.Member)
                    {
                        this.Write(OverloadsCollection.Create(this.Emitter, expresssionMember.Member).GetOverloadName(!nativeImplementation));
                    }
                    else
                    {
                        this.Write(OverloadsCollection.Create(this.Emitter, invocationResult.Member).GetOverloadName(!nativeImplementation));
                    }
                }
                else if (member.Member is IEvent)
                {
                    if (this.Emitter.IsAssignment &&
                        (this.Emitter.AssignmentType == AssignmentOperatorType.Add ||
                         this.Emitter.AssignmentType == AssignmentOperatorType.Subtract))
                    {
                        if (isInterfaceMember)
                        {
                            this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, this.Emitter.AssignmentType == AssignmentOperatorType.Subtract, Helpers.GetAddOrRemove(this.Emitter.AssignmentType == AssignmentOperatorType.Add));
                        }
                        else
                        {
                            this.Write(Helpers.GetEventRef(member.Member, this.Emitter, this.Emitter.AssignmentType != AssignmentOperatorType.Add, ignoreInterface: !nativeImplementation));
                        }

                        this.WriteOpenParentheses();
                    }
                    else
                    {
                        if (isInterfaceMember)
                        {
                            this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, false);
                        }
                        else
                        {
                            this.Write(this.Emitter.GetEntityName(member.Member));
                        }
                    }
                }
                else
                {
                    if (isInterfaceMember)
                    {
                        this.WriteInterfaceMember(interfaceTempVar ?? targetVar, member, false);
                    }
                    else
                    {
                        this.Write(this.Emitter.GetEntityName(member.Member));
                    }
                }

                Helpers.CheckValueTypeClone(resolveResult, memberReferenceExpression, this, pos);
            }
        }

        public static string GenerateInlineForMethodReference(IMethod method, IEmitter emitter)
        {
            StringBuilder sb = new StringBuilder();
            var parameters = method.Parameters;

            if (!method.IsStatic)
            {
                sb.Append("{this}");
            }
            else
            {
                sb.Append(BridgeTypes.ToJsName(method.DeclaringType, emitter));
            }

            sb.Append(".");
            sb.Append(OverloadsCollection.Create(emitter, method).GetOverloadName());
            sb.Append("(");

            bool needComma = false;

            if (!Helpers.IsIgnoreGeneric(method, emitter))
            {
                foreach (var typeArgument in method.TypeArguments)
                {
                    if (needComma)
                    {
                        sb.Append(", ");
                    }

                    needComma = true;
                    if (typeArgument.Kind == TypeKind.TypeParameter)
                    {
                        sb.Append("{");
                        sb.Append(typeArgument.Name);
                        sb.Append("}");
                    }
                    else
                    {
                        sb.Append(BridgeTypes.ToJsName(typeArgument, emitter));
                    }
                }
            }

            foreach (var parameter in parameters)
            {
                if (needComma)
                {
                    sb.Append(", ");
                }

                needComma = true;
                sb.Append("{");
                sb.Append(parameter.Name);
                sb.Append("}");
            }

            sb.Append(")");
            return sb.ToString();
        }
    }
}