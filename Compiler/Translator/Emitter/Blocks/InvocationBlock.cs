using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Linq;
using System.Text;

namespace Bridge.Translator
{
    public class InvocationBlock : ConversionBlock
    {
        public InvocationBlock(IEmitter emitter, InvocationExpression invocationExpression)
            : base(emitter, invocationExpression)
        {
            this.Emitter = emitter;
            this.InvocationExpression = invocationExpression;
        }

        public InvocationExpression InvocationExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.InvocationExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitInvocationExpression();
        }

        protected virtual bool IsEmptyPartialInvoking(IMethod method)
        {
            return method != null && method.IsPartial && !method.HasBody;
        }

        protected void WriteThisExtension(Expression target)
        {
            if (target.HasChildren)
            {
                var first = target.Children.ElementAt(0);
                var expression = first as Expression;

                if (expression != null)
                {
                    expression.AcceptVisitor(this.Emitter);
                }
            }
        }

        protected void VisitInvocationExpression()
        {
            InvocationExpression invocationExpression = this.InvocationExpression;

            if (this.Emitter.IsForbiddenInvocation(invocationExpression))
            {
                throw new EmitterException(invocationExpression, "This method cannot be invoked directly");
            }

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;

            if (this.Emitter.IsAsync && !this.Emitter.AsyncExpressionHandling)
            {
                this.WriteAwaiters(invocationExpression);
                this.Emitter.ReplaceAwaiterByVar = true;
                this.Emitter.AsyncExpressionHandling = true;
            }

            Tuple<bool, bool, string> inlineInfo = this.Emitter.GetInlineCode(invocationExpression);
            var argsInfo = new ArgumentsInfo(this.Emitter, invocationExpression);

            var argsExpressions = argsInfo.ArgumentsExpressions;
            var paramsArg = argsInfo.ParamsExpression;
            var argsCount = argsExpressions.Count();

            if (inlineInfo != null)
            {
                bool isStaticMethod = inlineInfo.Item1;
                bool isInlineMethod = inlineInfo.Item2;
                string inlineScript = inlineInfo.Item3;

                if (isInlineMethod)
                {
                    if (invocationExpression.Arguments.Count == 1)
                    {
                        var code = invocationExpression.Arguments.First();
                        var inlineExpression = code as PrimitiveExpression;

                        if (inlineExpression == null)
                        {
                            throw new EmitterException(invocationExpression, "Only primitive expression can be inlined");
                        }

                        string value = inlineExpression.Value.ToString().Trim();

                        if (value.Length > 0)
                        {
                            this.Write(inlineExpression.Value);

                            if (value[value.Length - 1] == ';')
                            {
                                this.Emitter.EnableSemicolon = false;
                                this.WriteNewLine();
                            }
                        }
                        else
                        {
                            // Empty string, emit nothing.
                            this.Emitter.EnableSemicolon = false;
                        }

                        this.Emitter.ReplaceAwaiterByVar = oldValue;
                        this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                        return;
                    }
                }
                else
                {
                    MemberReferenceExpression targetMemberRef = invocationExpression.Target as MemberReferenceExpression;
                    bool isBase = targetMemberRef != null && targetMemberRef.Target is BaseReferenceExpression;

                    if (!String.IsNullOrEmpty(inlineScript) && (isBase || invocationExpression.Target is IdentifierExpression))
                    {
                        argsInfo.ThisArgument = "this";
                        bool noThis = !inlineScript.Contains("{this}");

                        if (!isStaticMethod && noThis)
                        {
                            this.WriteThis();
                            this.WriteDot();
                        }

                        new InlineArgumentsBlock(this.Emitter, argsInfo, inlineScript).Emit();
                        this.Emitter.ReplaceAwaiterByVar = oldValue;
                        this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                        return;
                    }
                }
            }

            MemberReferenceExpression targetMember = invocationExpression.Target as MemberReferenceExpression;

            ResolveResult targetMemberResolveResult = null;
            if (targetMember != null)
            {
                targetMemberResolveResult = this.Emitter.Resolver.ResolveNode(targetMember.Target, this.Emitter);
            }

            if (targetMember != null)
            {
                var member = this.Emitter.Resolver.ResolveNode(targetMember.Target, this.Emitter);

                if (member != null && member.Type.Kind == TypeKind.Delegate)
                {
                    throw new EmitterException(invocationExpression, "Delegate's methods are not supported. Please use direct delegate invoke.");
                }

                //var targetResolve = this.Emitter.Resolver.ResolveNode(targetMember, this.Emitter);
                var targetResolve = this.Emitter.Resolver.ResolveNode(invocationExpression, this.Emitter);

                if (targetResolve != null)
                {
                    var csharpInvocation = targetResolve as CSharpInvocationResolveResult;

                    InvocationResolveResult invocationResult;
                    bool isExtensionMethodInvocation = false;
                    if (csharpInvocation != null)
                    {
                        if (csharpInvocation.IsExtensionMethodInvocation)
                        {
                            invocationResult = csharpInvocation;
                            isExtensionMethodInvocation = true;
                            var resolvedMethod = invocationResult.Member as IMethod;
                            if (resolvedMethod != null && resolvedMethod.IsExtensionMethod)
                            {
                                string inline = this.Emitter.GetInline(resolvedMethod);
                                bool isNative = this.IsNativeMethod(resolvedMethod);

                                if (string.IsNullOrWhiteSpace(inline) && isNative)
                                {
                                    invocationResult = null;
                                }
                            }
                        }
                        else
                        {
                            invocationResult = null;
                        }



                        if (this.IsEmptyPartialInvoking(csharpInvocation.Member as IMethod))
                        {
                            this.Emitter.SkipSemiColon = true;
                            this.Emitter.ReplaceAwaiterByVar = oldValue;
                            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                            return;
                        }
                    }
                    else
                    {
                        invocationResult = targetResolve as InvocationResolveResult;

                        if (invocationResult != null && this.IsEmptyPartialInvoking(invocationResult.Member as IMethod))
                        {
                            this.Emitter.SkipSemiColon = true;
                            this.Emitter.ReplaceAwaiterByVar = oldValue;
                            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                            return;
                        }
                    }

                    if (invocationResult == null)
                    {
                        invocationResult = this.Emitter.Resolver.ResolveNode(invocationExpression, this.Emitter) as InvocationResolveResult;
                    }

                    if (invocationResult != null)
                    {
                        var resolvedMethod = invocationResult.Member as IMethod;

                        if (resolvedMethod != null && resolvedMethod.IsExtensionMethod)
                        {
                            string inline = this.Emitter.GetInline(resolvedMethod);
                            bool isNative = this.IsNativeMethod(resolvedMethod);

                            if (isExtensionMethodInvocation)
                            {
                                if (!string.IsNullOrWhiteSpace(inline))
                                {
                                    this.Write("");
                                    StringBuilder savedBuilder = this.Emitter.Output;
                                    this.Emitter.Output = new StringBuilder();
                                    this.WriteThisExtension(invocationExpression.Target);
                                    argsInfo.ThisArgument = this.Emitter.Output.ToString();
                                    this.Emitter.Output = savedBuilder;
                                    new InlineArgumentsBlock(this.Emitter, argsInfo, inline).Emit();
                                }
                                else if (!isNative)
                                {
                                    string name = BridgeTypes.ToJsName(resolvedMethod.DeclaringType, this.Emitter) + "." + this.Emitter.GetEntityName(resolvedMethod);
                                    var isIgnoreClass = resolvedMethod.DeclaringTypeDefinition != null && this.Emitter.Validator.IsIgnoreType(resolvedMethod.DeclaringTypeDefinition);

                                    this.Write(name);

                                    if (!isIgnoreClass && argsInfo.HasTypeArguments)
                                    {
                                        this.WriteOpenParentheses();
                                        new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                                        this.WriteCloseParentheses();
                                    }

                                    this.WriteOpenParentheses();

                                    this.WriteThisExtension(invocationExpression.Target);

                                    if (argsCount > 0)
                                    {
                                        this.WriteComma();
                                    }

                                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, invocationExpression).Emit();

                                    this.WriteCloseParentheses();
                                }

                                if (!string.IsNullOrWhiteSpace(inline) || !isNative)
                                {
                                    this.Emitter.ReplaceAwaiterByVar = oldValue;
                                    this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                                    return;
                                }
                            }
                            else if (isNative)
                            {
                                if (!string.IsNullOrWhiteSpace(inline))
                                {
                                    this.Write("");
                                    StringBuilder savedBuilder = this.Emitter.Output;
                                    this.Emitter.Output = new StringBuilder();
                                    this.WriteThisExtension(invocationExpression.Target);
                                    argsInfo.ThisArgument = this.Emitter.Output.ToString();
                                    this.Emitter.Output = savedBuilder;
                                    new InlineArgumentsBlock(this.Emitter, argsInfo, inline).Emit();
                                }
                                else
                                {
                                    argsExpressions.First().AcceptVisitor(this.Emitter);
                                    this.WriteDot();
                                    string name = this.Emitter.GetEntityName(resolvedMethod);
                                    this.Write(name);
                                    this.WriteOpenParentheses();
                                    new ExpressionListBlock(this.Emitter, argsExpressions.Skip(1), paramsArg, invocationExpression).Emit();
                                    this.WriteCloseParentheses();
                                }

                                this.Emitter.ReplaceAwaiterByVar = oldValue;
                                this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

                                return;
                            }
                        }
                    }
                }
            }

            var proto = false;
            if (targetMember != null && targetMember.Target is BaseReferenceExpression)
            {
                var rr = this.Emitter.Resolver.ResolveNode(targetMember, this.Emitter) as MemberResolveResult;

                if (rr != null)
                {
                    proto = rr.IsVirtualCall;

                    /*var method = rr.Member as IMethod;
                    if (method != null && method.IsVirtual)
                    {
                        proto = true;
                    }
                    else
                    {
                        var prop = rr.Member as IProperty;

                        if (prop != null && prop.IsVirtual)
                        {
                            proto = true;
                        }
                    }*/
                }
            }

            if (proto)
            {
                var baseType = this.Emitter.GetBaseMethodOwnerTypeDefinition(targetMember.MemberName, targetMember.TypeArguments.Count);
                var method = invocationExpression.GetParent<MethodDeclaration>();

                bool isIgnore = this.Emitter.Validator.IsIgnoreType(baseType);

                if (isIgnore)
                {
                    //throw (System.Exception)this.Emitter.CreateException(targetMember.Target, "Cannot call base method, because parent class code is ignored");
                }

                bool needComma = false;

                var resolveResult = this.Emitter.Resolver.ResolveNode(targetMember, this.Emitter);

                string name = null;

                if (this.Emitter.TypeInfo.TypeDeclaration.BaseTypes.Any())
                {
                    name = BridgeTypes.ToJsName(this.Emitter.TypeInfo.TypeDeclaration.BaseTypes.First(), this.Emitter);
                }
                else
                {
                    name = BridgeTypes.ToJsName(baseType, this.Emitter);
                }

                if (resolveResult != null && resolveResult is InvocationResolveResult)
                {
                    InvocationResolveResult invocationResult = (InvocationResolveResult)resolveResult;
                    this.Write(name, ".prototype.", this.Emitter.GetEntityName(invocationResult.Member));
                }
                else
                {
                    string baseMethod = targetMember.MemberName;
                    this.Write(name, ".prototype.", this.Emitter.AssemblyInfo.PreserveMemberCase ? baseMethod : Object.Net.Utilities.StringUtils.ToLowerCamelCase(baseMethod));
                }

                if (!isIgnore && argsInfo.HasTypeArguments)
                {
                    this.WriteOpenParentheses();
                    new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                    this.WriteCloseParentheses();
                }

                this.WriteDot();

                this.Write("call");
                this.WriteOpenParentheses();

                this.WriteThis();
                needComma = true;

                foreach (var arg in argsExpressions)
                {
                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;
                    arg.AcceptVisitor(this.Emitter);
                }

                this.WriteCloseParentheses();
            }
            else
            {
                var targetResolveResult = this.Emitter.Resolver.ResolveNode(invocationExpression.Target, this.Emitter);
                var invocationResolveResult = targetResolveResult as MemberResolveResult;
                IMethod method = null;

                if (invocationResolveResult != null)
                {
                    method = invocationResolveResult.Member as IMethod;
                }

                if (this.IsEmptyPartialInvoking(method))
                {
                    this.Emitter.SkipSemiColon = true;
                    this.Emitter.ReplaceAwaiterByVar = oldValue;
                    this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
                    return;
                }

                int count = this.Emitter.Writers.Count;
                invocationExpression.Target.AcceptVisitor(this.Emitter);

                if (this.Emitter.Writers.Count > count)
                {
                    var tuple = this.Emitter.Writers.Pop();

                    if (method != null && method.IsExtensionMethod)
                    {
                        StringBuilder savedBuilder = this.Emitter.Output;
                        this.Emitter.Output = new StringBuilder();
                        this.WriteThisExtension(invocationExpression.Target);
                        argsInfo.ThisArgument = this.Emitter.Output.ToString();
                        this.Emitter.Output = savedBuilder;
                    }

                    new InlineArgumentsBlock(this.Emitter, argsInfo, tuple.Item1).Emit();
                    var result = this.Emitter.Output.ToString();
                    this.Emitter.Output = tuple.Item2;
                    this.Emitter.IsNewLine = tuple.Item3;
                    this.Write(result);
                }
                else
                {
                    var isIgnore = false;

                    if (method != null && method.DeclaringTypeDefinition != null && this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                    {
                        isIgnore = true;
                    }

                    if (!isIgnore && argsInfo.HasTypeArguments)
                    {
                        this.WriteOpenParentheses();
                        new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                        this.WriteCloseParentheses();
                    }

                    this.WriteOpenParentheses();
                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, invocationExpression).Emit();
                    this.WriteCloseParentheses();
                }
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
        }

        private bool IsNativeMethod(IMethod resolvedMethod)
        {
            return resolvedMethod.DeclaringTypeDefinition != null &&
                   this.Emitter.Validator.HasAttribute(resolvedMethod.DeclaringTypeDefinition.Attributes, "Bridge.IgnoreAttribute");
        }
    }
}