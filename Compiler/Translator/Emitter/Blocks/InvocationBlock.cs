using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
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
                else
                {
                    this.WriteThis();
                }
            }
        }

        public static bool IsConditionallyRemoved(InvocationExpression invocationExpression, IEntity entity)
        {
            if (entity == null)
            {
                return false;
            }
            var result = new List<string>();
            foreach (var a in entity.Attributes)
            {
                var type = a.AttributeType.GetDefinition();
                if (type != null && type.FullName.Equals("System.Diagnostics.ConditionalAttribute", StringComparison.Ordinal))
                {
                    if (a.PositionalArguments.Count > 0)
                    {
                        var symbol = a.PositionalArguments[0].ConstantValue as string;
                        if (symbol != null)
                        {
                            result.Add(symbol);
                        }
                    }
                }
            }

            if (result.Count > 0)
            {
                var syntaxTree = invocationExpression.GetParent<SyntaxTree>();
                if (syntaxTree != null)
                {
                    return !result.Intersect(syntaxTree.ConditionalSymbols).Any();
                }
            }

            return false;
        }

        protected void VisitInvocationExpression()
        {
            InvocationExpression invocationExpression = this.InvocationExpression;
            int pos = this.Emitter.Output.Length;

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

            var targetResolve = this.Emitter.Resolver.ResolveNode(invocationExpression, this.Emitter);
            var csharpInvocation = targetResolve as CSharpInvocationResolveResult;
            MemberReferenceExpression targetMember = invocationExpression.Target as MemberReferenceExpression;
            bool isObjectLiteral = csharpInvocation != null && csharpInvocation.Member.DeclaringTypeDefinition != null ? this.Emitter.Validator.IsObjectLiteral(csharpInvocation.Member.DeclaringTypeDefinition) : false;

            var interceptor = this.Emitter.Plugins.OnInvocation(this, this.InvocationExpression, targetResolve as InvocationResolveResult);

            if (interceptor.Cancel)
            {
                this.Emitter.SkipSemiColon = true;
                this.Emitter.ReplaceAwaiterByVar = oldValue;
                this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
                return;
            }

            if (!string.IsNullOrEmpty(interceptor.Replacement))
            {
                this.Write(interceptor.Replacement);
                this.Emitter.ReplaceAwaiterByVar = oldValue;
                this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
                return;
            }

            if (inlineInfo != null)
            {
                bool isStaticMethod = inlineInfo.Item1;
                bool isInlineMethod = inlineInfo.Item2;
                string inlineScript = inlineInfo.Item3;

                if (isInlineMethod)
                {
                    if (invocationExpression.Arguments.Count > 0)
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
                            value = InlineArgumentsBlock.ReplaceInlineArgs(this, inlineExpression.Value.ToString(), invocationExpression.Arguments.Skip(1).ToArray());
                            this.Write(value);

                            value = value.Trim();
                            if (value[value.Length - 1] == ';' || value.EndsWith("*/", StringComparison.InvariantCulture) || value.StartsWith("//"))
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
                        bool noThis = !Helpers.HasThis(inlineScript);

                        if (inlineScript.StartsWith("<self>"))
                        {
                            noThis = false;
                            inlineScript = inlineScript.Substring(6);
                        }

                        if (!noThis)
                        {
                            Emitter.ThisRefCounter++;
                        }

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

            if (targetMember != null || isObjectLiteral)
            {
                var member = targetMember != null ? this.Emitter.Resolver.ResolveNode(targetMember.Target, this.Emitter) : null;

                if (targetResolve != null)
                {
                    InvocationResolveResult invocationResult;
                    bool isExtensionMethodInvocation = false;
                    if (csharpInvocation != null)
                    {
                        if (member != null && member.Type.Kind == TypeKind.Delegate && (/*csharpInvocation.Member.Name == "Invoke" || */csharpInvocation.Member.Name == "BeginInvoke" || csharpInvocation.Member.Name == "EndInvoke") && !csharpInvocation.IsExtensionMethodInvocation)
                        {
                            throw new EmitterException(invocationExpression, "Delegate's 'Invoke' methods are not supported. Please use direct delegate invoke.");
                        }

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

                        if (this.IsEmptyPartialInvoking(csharpInvocation.Member as IMethod) || IsConditionallyRemoved(invocationExpression, csharpInvocation.Member))
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

                        if (invocationResult != null && (this.IsEmptyPartialInvoking(invocationResult.Member as IMethod) || IsConditionallyRemoved(invocationExpression, invocationResult.Member)))
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

                        if (resolvedMethod != null && (resolvedMethod.IsExtensionMethod || isObjectLiteral))
                        {
                            string inline = this.Emitter.GetInline(resolvedMethod);
                            bool isNative = this.IsNativeMethod(resolvedMethod);

                            if (isExtensionMethodInvocation || isObjectLiteral)
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
                                    var overloads = OverloadsCollection.Create(this.Emitter, resolvedMethod);

                                    if (isObjectLiteral && !resolvedMethod.IsStatic && resolvedMethod.DeclaringType.Kind == TypeKind.Interface)
                                    {
                                        this.Write("Bridge.getType(");
                                        this.WriteThisExtension(invocationExpression.Target);
                                        this.Write(").");
                                    }
                                    else
                                    {
                                        string name = BridgeTypes.ToJsName(resolvedMethod.DeclaringType, this.Emitter, ignoreLiteralName: false) + ".";
                                        this.Write(name);
                                    }

                                    if (isObjectLiteral && !resolvedMethod.IsStatic)
                                    {
                                        this.Write(JS.Fields.PROTOTYPE + "." + overloads.GetOverloadName() + "." + JS.Funcs.CALL);
                                    }
                                    else
                                    {
                                        this.Write(overloads.GetOverloadName());
                                    }

                                    var isIgnoreClass = resolvedMethod.DeclaringTypeDefinition != null && this.Emitter.Validator.IsExternalType(resolvedMethod.DeclaringTypeDefinition);
                                    int openPos = this.Emitter.Output.Length;
                                    this.WriteOpenParentheses();

                                    this.Emitter.Comma = false;

                                    if (isObjectLiteral && !resolvedMethod.IsStatic)
                                    {
                                        this.WriteThisExtension(invocationExpression.Target);
                                        this.Emitter.Comma = true;
                                    }

                                    if (!isIgnoreClass && !Helpers.IsIgnoreGeneric(resolvedMethod, this.Emitter) && argsInfo.HasTypeArguments)
                                    {
                                        this.EnsureComma(false);
                                        new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                                        this.Emitter.Comma = true;
                                    }

                                    if (!isObjectLiteral && resolvedMethod.IsStatic)
                                    {
                                        this.EnsureComma(false);
                                        this.WriteThisExtension(invocationExpression.Target);
                                        this.Emitter.Comma = true;
                                    }

                                    if (invocationExpression.Arguments.Count > 0)
                                    {
                                        this.EnsureComma(false);
                                    }

                                    new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, invocationExpression, openPos).Emit();

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
                                    int openPos = this.Emitter.Output.Length;
                                    this.WriteOpenParentheses();
                                    new ExpressionListBlock(this.Emitter, argsExpressions.Skip(1), paramsArg, invocationExpression, openPos).Emit();
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

                bool isIgnore = this.Emitter.Validator.IsExternalType(baseType);

                bool needComma = false;

                var resolveResult = this.Emitter.Resolver.ResolveNode(targetMember, this.Emitter);

                string name = null;

                if (this.Emitter.TypeInfo.GetBaseTypes(this.Emitter).Any())
                {
                    name = BridgeTypes.ToJsName(this.Emitter.TypeInfo.GetBaseClass(this.Emitter), this.Emitter);
                }
                else
                {
                    name = BridgeTypes.ToJsName(baseType, this.Emitter);
                }

                string baseMethod;
                bool isIgnoreGeneric = false;
                if (resolveResult is MemberResolveResult)
                {
                    MemberResolveResult memberResult = (MemberResolveResult)resolveResult;
                    baseMethod = OverloadsCollection.Create(this.Emitter, memberResult.Member).GetOverloadName();
                    isIgnoreGeneric = Helpers.IsIgnoreGeneric(memberResult.Member, this.Emitter);
                }
                else
                {
                    baseMethod = targetMember.MemberName;
                    baseMethod = Object.Net.Utilities.StringUtils.ToLowerCamelCase(baseMethod);
                }

                this.Write(name, "." + JS.Fields.PROTOTYPE + ".", baseMethod);

                this.WriteCall();
                this.WriteOpenParentheses();
                this.WriteThis();
                this.Emitter.Comma = true;
                if (!isIgnore && !isIgnoreGeneric && argsInfo.HasTypeArguments)
                {
                    new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                }

                needComma = false;

                foreach (var arg in argsExpressions)
                {
                    if (arg == null)
                    {
                        continue;
                    }

                    this.EnsureComma(false);

                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;
                    arg.AcceptVisitor(this.Emitter);
                }
                this.Emitter.Comma = false;
                this.WriteCloseParentheses();
            }
            else
            {
                var dynamicResolveResult = this.Emitter.Resolver.ResolveNode(invocationExpression, this.Emitter) as DynamicInvocationResolveResult;
                IMethod method = null;

                if (dynamicResolveResult != null)
                {
                    var group = dynamicResolveResult.Target as MethodGroupResolveResult;

                    if (group != null && group.Methods.Count() > 1)
                    {
                        method = group.Methods.FirstOrDefault(m =>
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
                        });

                        if (method == null)
                        {
                            throw new EmitterException(invocationExpression, Bridge.Translator.Constants.Messages.Exceptions.DYNAMIC_INVOCATION_TOO_MANY_OVERLOADS);
                        }
                    }
                }
                else
                {
                    var targetResolveResult = this.Emitter.Resolver.ResolveNode(invocationExpression.Target, this.Emitter);
                    var invocationResolveResult = targetResolveResult as MemberResolveResult;

                    if (invocationResolveResult != null)
                    {
                        method = invocationResolveResult.Member as IMethod;
                    }
                }

                if (this.IsEmptyPartialInvoking(method) || IsConditionallyRemoved(invocationExpression, method))
                {
                    this.Emitter.SkipSemiColon = true;
                    this.Emitter.ReplaceAwaiterByVar = oldValue;
                    this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
                    return;
                }

                bool isIgnore = method != null && method.DeclaringTypeDefinition != null && this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition);

                bool needExpand = false;
                if (method != null)
                {
                    string paramsName = null;

                    var paramsParam = method.Parameters.FirstOrDefault(p => p.IsParams);
                    if (paramsParam != null)
                    {
                        paramsName = paramsParam.Name;
                    }

                    if (paramsName != null)
                    {
                        if (csharpInvocation != null && !csharpInvocation.IsExpandedForm)
                        {
                            needExpand = true;
                        }
                    }
                }

                int count = this.Emitter.Writers.Count;
                invocationExpression.Target.AcceptVisitor(this.Emitter);

                if (this.Emitter.Writers.Count > count)
                {
                    var writer = this.Emitter.Writers.Pop();

                    if (method != null && method.IsExtensionMethod)
                    {
                        StringBuilder savedBuilder = this.Emitter.Output;
                        this.Emitter.Output = new StringBuilder();
                        this.WriteThisExtension(invocationExpression.Target);
                        argsInfo.ThisArgument = this.Emitter.Output.ToString();
                        this.Emitter.Output = savedBuilder;
                    }
                    else if (writer.ThisArg != null)
                    {
                        argsInfo.ThisArgument = writer.ThisArg;
                    }

                    new InlineArgumentsBlock(this.Emitter, argsInfo, writer.InlineCode) { IgnoreRange = writer.IgnoreRange }.Emit();
                    var result = this.Emitter.Output.ToString();
                    this.Emitter.Output = writer.Output;
                    this.Emitter.IsNewLine = writer.IsNewLine;
                    this.Write(result);

                    if (writer.Callback != null)
                    {
                        writer.Callback.Invoke();
                    }
                }
                else
                {
                    if (needExpand && isIgnore)
                    {
                        this.Write("." + JS.Funcs.APPLY);
                    }
                    int openPos = this.Emitter.Output.Length;
                    this.WriteOpenParentheses();

                    bool isIgnoreGeneric = false;
                    var invocationResult = targetResolve as InvocationResolveResult;

                    if (invocationResult != null)
                    {
                        isIgnoreGeneric = Helpers.IsIgnoreGeneric(invocationResult.Member, this.Emitter);
                    }

                    if (needExpand && isIgnore)
                    {
                        StringBuilder savedBuilder = this.Emitter.Output;
                        this.Emitter.Output = new StringBuilder();
                        this.WriteThisExtension(invocationExpression.Target);
                        var thisArg = this.Emitter.Output.ToString();
                        this.Emitter.Output = savedBuilder;

                        this.Write(thisArg);

                        this.Emitter.Comma = true;

                        if (!isIgnore && !isIgnoreGeneric && argsInfo.HasTypeArguments)
                        {
                            new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                        }

                        this.EnsureComma(false);

                        if (argsExpressions.Length > 1)
                        {
                            this.WriteOpenBracket();
                            new ExpressionListBlock(this.Emitter, argsExpressions.Take(argsExpressions.Length - 1).ToArray(), paramsArg, invocationExpression, openPos).Emit();
                            this.WriteCloseBracket();
                            this.Write(".concat(");
                            new ExpressionListBlock(this.Emitter, new Expression[] { argsExpressions[argsExpressions.Length - 1] }, paramsArg, invocationExpression, openPos).Emit();
                            this.Write(")");
                        }
                        else
                        {
                            new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, invocationExpression, -1).Emit();
                        }
                    }
                    else
                    {
                        this.Emitter.Comma = false;
                        if (!isIgnore && !isIgnoreGeneric && argsInfo.HasTypeArguments)
                        {
                            new TypeExpressionListBlock(this.Emitter, argsInfo.TypeArguments).Emit();
                        }

                        if (invocationExpression.Arguments.Count > 0)
                        {
                            this.EnsureComma(false);
                        }

                        new ExpressionListBlock(this.Emitter, argsExpressions, paramsArg, invocationExpression, openPos).Emit();
                    }
                    this.Emitter.Comma = false;
                    this.WriteCloseParentheses();
                }
            }

            var irr = targetResolve as InvocationResolveResult;
            if (irr != null && irr.Member.MemberDefinition != null && irr.Member.MemberDefinition.ReturnType.Kind == TypeKind.TypeParameter)
            {
                Helpers.CheckValueTypeClone(this.Emitter.Resolver.ResolveNode(invocationExpression, this.Emitter), invocationExpression, this, pos);
            }
            
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
        }

        private bool IsNativeMethod(IMethod resolvedMethod)
        {
            return resolvedMethod.DeclaringTypeDefinition != null &&
                   this.Emitter.Validator.IsExternalType(resolvedMethod.DeclaringTypeDefinition);
        }
    }
}