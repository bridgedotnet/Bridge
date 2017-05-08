using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Text;

namespace Bridge.Translator
{
    public class IdentifierBlock : ConversionBlock
    {
        private bool isRefArg;

        public IdentifierBlock(IEmitter emitter, IdentifierExpression identifierExpression)
            : base(emitter, identifierExpression)
        {
            this.Emitter = emitter;
            this.IdentifierExpression = identifierExpression;
        }

        public IdentifierExpression IdentifierExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.IdentifierExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitIdentifierExpression();
        }

        protected void VisitIdentifierExpression()
        {
            IdentifierExpression identifierExpression = this.IdentifierExpression;
            int pos = this.Emitter.Output.Length;
            ResolveResult resolveResult = null;
            this.isRefArg = this.Emitter.IsRefArg;
            this.Emitter.IsRefArg = false;

            resolveResult = this.Emitter.Resolver.ResolveNode(identifierExpression, this.Emitter);

            var id = identifierExpression.Identifier;

            var isResolved = resolveResult != null && !(resolveResult is ErrorResolveResult);
            var memberResult = resolveResult as MemberResolveResult;

            if (this.Emitter.Locals != null && this.Emitter.Locals.ContainsKey(id) && resolveResult is LocalResolveResult)
            {
                var lrr = (LocalResolveResult) resolveResult;
                if (this.Emitter.LocalsMap != null && this.Emitter.LocalsMap.ContainsKey(lrr.Variable) && !(identifierExpression.Parent is DirectionExpression))
                {
                    this.Write(this.Emitter.LocalsMap[lrr.Variable]);
                }
                else if (this.Emitter.LocalsNamesMap != null && this.Emitter.LocalsNamesMap.ContainsKey(id))
                {
                    this.Write(this.Emitter.LocalsNamesMap[id]);
                }
                else
                {
                    this.Write(id);
                }

                Helpers.CheckValueTypeClone(resolveResult, identifierExpression, this, pos);

                return;
            }

            if (resolveResult is TypeResolveResult)
            {
                this.Write(BridgeTypes.ToJsName(resolveResult.Type, this.Emitter));
                /*if (this.Emitter.Validator.IsExternalType(resolveResult.Type.GetDefinition()) || resolveResult.Type.Kind == TypeKind.Enum)
                {
                    this.Write(BridgeTypes.ToJsName(resolveResult.Type, this.Emitter));
                }
                else
                {
                    this.Write("Bridge.get(" + BridgeTypes.ToJsName(resolveResult.Type, this.Emitter) + ")");
                }*/

                return;
            }

            string inlineCode = memberResult != null ? this.Emitter.GetInline(memberResult.Member) : null;

            var isInvoke = identifierExpression.Parent is InvocationExpression && (((InvocationExpression)(identifierExpression.Parent)).Target == identifierExpression);
            if (memberResult != null && memberResult.Member is IMethod && isInvoke)
            {
                var i_rr = this.Emitter.Resolver.ResolveNode(identifierExpression.Parent, this.Emitter) as CSharpInvocationResolveResult;

                if (i_rr != null && !i_rr.IsExpandedForm)
                {
                    var tpl = this.Emitter.GetAttribute(memberResult.Member.Attributes, JS.NS.BRIDGE + ".TemplateAttribute");

                    if (tpl != null && tpl.PositionalArguments.Count == 2)
                    {
                        inlineCode = tpl.PositionalArguments[1].ConstantValue.ToString();
                    }
                }
            }

            if (string.IsNullOrEmpty(inlineCode) && memberResult != null &&
                memberResult.Member is IMethod &&
                !(memberResult is InvocationResolveResult) &&
                !(
                    identifierExpression.Parent is InvocationExpression &&
                    identifierExpression.NextSibling != null &&
                    identifierExpression.NextSibling.Role is TokenRole &&
                    ((TokenRole)identifierExpression.NextSibling.Role).Token == "("
                    )
                )
            {
                var method = (IMethod)memberResult.Member;
                if (method.TypeArguments.Count > 0)
                {
                    inlineCode = MemberReferenceBlock.GenerateInlineForMethodReference(method, this.Emitter);
                }
            }

            bool hasInline = !string.IsNullOrEmpty(inlineCode);
            bool hasThis = hasInline && inlineCode.Contains("{this}");

            if (hasInline && inlineCode.StartsWith("<self>"))
            {
                hasThis = true;
                inlineCode = inlineCode.Substring(6);
            }

            if (hasThis)
            {
                Emitter.ThisRefCounter++;
                this.Write("");
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();

                if (memberResult.Member.IsStatic)
                {
                    this.Write(BridgeTypes.ToJsName(memberResult.Member.DeclaringType, this.Emitter));
                    /*if (!this.Emitter.Validator.IsExternalType(memberResult.Member.DeclaringTypeDefinition) && memberResult.Member.DeclaringTypeDefinition.Kind != TypeKind.Enum)
                    {
                        this.Write("(Bridge.get(" + BridgeTypes.ToJsName(memberResult.Member.DeclaringType, this.Emitter) + "))");
                    }
                    else
                    {
                        this.Write(BridgeTypes.ToJsName(memberResult.Member.DeclaringType, this.Emitter));
                    }*/
                }
                else
                {
                    this.WriteThis();
                }

                var oldInline = inlineCode;
                var thisArg = this.Emitter.Output.ToString();
                int thisIndex = inlineCode.IndexOf("{this}");
                inlineCode = inlineCode.Replace("{this}", thisArg);
                this.Emitter.Output = oldBuilder;

                int[] range = null;

                if (thisIndex > -1)
                {
                    range = new[] { thisIndex, thisIndex + thisArg.Length };
                }

                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inlineCode, null, thisArg, range);
                }
                else
                {
                    if (memberResult.Member is IMethod)
                    {
                        ResolveResult targetrr = null;
                        if (memberResult.Member.IsStatic)
                        {
                            targetrr = new TypeResolveResult(memberResult.Member.DeclaringType);
                        }

                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, this.IdentifierExpression, resolveResult), oldInline, (IMethod)memberResult.Member, targetrr).EmitFunctionReference();
                    }
                    else if (memberResult != null && memberResult.Member is IField && inlineCode.Contains("{0}"))
                    {
                        this.PushWriter(inlineCode, null, thisArg, range);
                    }
                    else if (InlineArgumentsBlock.FormatArgRegex.IsMatch(inlineCode))
                    {
                        this.PushWriter(inlineCode, null, thisArg, range);
                    }
                    else
                    {
                        this.Write(inlineCode);
                    }
                }

                return;
            }

            if (hasInline)
            {
                if (!memberResult.Member.IsStatic)
                {
                    inlineCode = "this." + inlineCode;
                }
                
                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inlineCode);
                }
                else
                {
                    if (memberResult.Member is IMethod)
                    {
                        ResolveResult targetrr = null;
                        if (memberResult.Member.IsStatic)
                        {
                            targetrr = new TypeResolveResult(memberResult.Member.DeclaringType);
                        }

                        new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, this.IdentifierExpression, resolveResult), inlineCode, (IMethod)memberResult.Member, targetrr).EmitFunctionReference();
                    }
                    else if (InlineArgumentsBlock.FormatArgRegex.IsMatch(inlineCode))
                    {
                        this.PushWriter(inlineCode);
                    }
                    else
                    {
                        this.Write(inlineCode);
                    }
                }

                return;
            }

            string appendAdditionalCode = null;
            if (memberResult != null &&
                        memberResult.Member is IMethod &&
                        !(memberResult is InvocationResolveResult) &&
                        !(
                        identifierExpression.Parent is InvocationExpression &&
                        identifierExpression.NextSibling != null &&
                        identifierExpression.NextSibling.Role is TokenRole &&
                        ((TokenRole)identifierExpression.NextSibling.Role).Token == "("
                        )
                )
            {
                if (!string.IsNullOrEmpty(inlineCode))
                {
                    ResolveResult targetrr = null;
                    if (memberResult.Member.IsStatic)
                    {
                        targetrr = new TypeResolveResult(memberResult.Member.DeclaringType);
                    }

                    new InlineArgumentsBlock(this.Emitter,
                            new ArgumentsInfo(this.Emitter, identifierExpression, resolveResult), inlineCode,
                            (IMethod)memberResult.Member, targetrr).EmitFunctionReference();
                }
                else
                {
                    var resolvedMethod = (IMethod)memberResult.Member;
                    bool isStatic = resolvedMethod != null && resolvedMethod.IsStatic;

                    if (!isStatic)
                    {
                        var isExtensionMethod = resolvedMethod.IsExtensionMethod;
                        this.Write(isExtensionMethod ? JS.Funcs.BRIDGE_BIND_SCOPE : JS.Funcs.BRIDGE_CACHE_BIND);
                        this.WriteOpenParentheses();
                        this.WriteThis();
                        this.Write(", ");
                        appendAdditionalCode = ")";
                    }
                }
            }

            if (memberResult != null && memberResult.Member.SymbolKind == SymbolKind.Field && this.Emitter.IsMemberConst(memberResult.Member) && this.Emitter.IsInlineConst(memberResult.Member))
            {
                this.WriteScript(memberResult.ConstantValue);
                return;
            }

            if (memberResult != null && memberResult.Member.SymbolKind == SymbolKind.Property && memberResult.TargetResult.Type.Kind != TypeKind.Anonymous)
            {
                bool isStatement = false;
                string valueVar = null;

                if (this.Emitter.IsUnaryAccessor)
                {
                    isStatement = identifierExpression.Parent is UnaryOperatorExpression && identifierExpression.Parent.Parent is ExpressionStatement;

                    if (NullableType.IsNullable(memberResult.Type))
                    {
                        isStatement = false;
                    }

                    if (!isStatement)
                    {
                        this.WriteOpenParentheses();

                        valueVar = this.GetTempVarName();

                        this.Write(valueVar);
                        this.Write(" = ");
                    }
                }

                this.WriteTarget(memberResult);

                if (!string.IsNullOrWhiteSpace(inlineCode))
                {
                    //this.Write(inlineCode);
                    if (resolveResult is InvocationResolveResult || (memberResult.Member.SymbolKind == SymbolKind.Property && this.Emitter.IsAssignment))
                    {
                        this.PushWriter(inlineCode);
                    }
                    else
                    {
                        this.Write(inlineCode);
                    }
                }
                else if (memberResult.Member is IProperty)
                {
                    var name = Helpers.GetPropertyRef(memberResult.Member, this.Emitter);

                    this.WriteIdentifier(name);
                }
                else if (!this.Emitter.IsAssignment)
                {
                    if (this.Emitter.IsUnaryAccessor)
                    {
                        bool isDecimal = Helpers.IsDecimalType(memberResult.Member.ReturnType, this.Emitter.Resolver);
                        bool isLong = Helpers.Is64Type(memberResult.Member.ReturnType, this.Emitter.Resolver);
                        bool isNullable = NullableType.IsNullable(memberResult.Member.ReturnType);
                        if (isStatement)
                        {
                            this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, true));
                            this.WriteOpenParentheses();

                            if (isDecimal || isLong)
                            {
                                if (isNullable)
                                {
                                    this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                    this.WriteOpenParentheses();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                        this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.WriteScript(JS.Funcs.Math.INC);
                                    }
                                    else
                                    {
                                        this.WriteScript(JS.Funcs.Math.DEC);
                                    }

                                    this.WriteComma();

                                    this.WriteTarget(memberResult);

                                    this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false));
                                    this.WriteOpenParentheses();
                                    this.WriteCloseParentheses();
                                    this.WriteCloseParentheses();
                                }
                                else
                                {
                                    this.WriteTarget(memberResult);
                                    this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false));
                                    this.WriteOpenParentheses();
                                    this.WriteCloseParentheses();
                                    this.WriteDot();

                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                        this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.Write(JS.Funcs.Math.INC);
                                    }
                                    else
                                    {
                                        this.Write(JS.Funcs.Math.DEC);
                                    }

                                    this.WriteOpenParentheses();
                                    this.WriteCloseParentheses();
                                }
                            }
                            else
                            {
                                this.WriteTarget(memberResult);

                                this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false));
                                this.WriteOpenParentheses();
                                this.WriteCloseParentheses();

                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("+");
                                }
                                else
                                {
                                    this.Write("-");
                                }

                                this.Write("1");
                            }

                            this.WriteCloseParentheses();
                        }
                        else
                        {
                            this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false));
                            this.WriteOpenParentheses();
                            this.WriteCloseParentheses();
                            this.WriteComma();

                            this.WriteTarget(memberResult);
                            this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, true));
                            this.WriteOpenParentheses();

                            if (isDecimal || isLong)
                            {
                                if (isNullable)
                                {
                                    this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1);
                                    this.WriteOpenParentheses();
                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                        this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.WriteScript(JS.Funcs.Math.INC);
                                    }
                                    else
                                    {
                                        this.WriteScript(JS.Funcs.Math.DEC);
                                    }

                                    this.WriteComma();
                                    this.Write(valueVar);
                                    this.WriteCloseParentheses();
                                }
                                else
                                {
                                    this.Write(valueVar);

                                    this.WriteDot();

                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                        this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.Write(JS.Funcs.Math.INC);
                                    }
                                    else
                                    {
                                        this.Write(JS.Funcs.Math.DEC);
                                    }

                                    this.WriteOpenParentheses();
                                    this.WriteCloseParentheses();
                                }
                            }
                            else
                            {
                                this.Write(valueVar);

                                if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                {
                                    this.Write("+");
                                }
                                else
                                {
                                    this.Write("-");
                                }

                                this.Write("1");
                            }

                            this.WriteCloseParentheses();
                            this.WriteComma();

                            if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                this.Emitter.UnaryOperatorType == UnaryOperatorType.Decrement)
                            {
                                this.WriteTarget(memberResult);
                                this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false));
                                this.WriteOpenParentheses();
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                this.Write(valueVar);
                            }

                            this.WriteCloseParentheses();

                            if (valueVar != null)
                            {
                                this.RemoveTempVar(valueVar);
                            }
                        }
                    }
                    else
                    {
                        this.Write(Helpers.GetPropertyRef(memberResult.Member, this.Emitter));
                        this.WriteOpenParentheses();
                        this.WriteCloseParentheses();
                    }
                }
                else if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                {
                    string trg;

                    if (memberResult.Member.IsStatic)
                    {
                        trg = BridgeTypes.ToJsName(memberResult.Member.DeclaringType, this.Emitter);
                    }
                    else
                    {
                        trg = "this";
                    }

                    bool isBool = memberResult != null && NullableType.IsNullable(memberResult.Member.ReturnType) ? NullableType.GetUnderlyingType(memberResult.Member.ReturnType).IsKnownType(KnownTypeCode.Boolean) : memberResult.Member.ReturnType.IsKnownType(KnownTypeCode.Boolean);
                    bool skipGet = false;
                    var orr = this.Emitter.Resolver.ResolveNode(identifierExpression.Parent, this.Emitter) as OperatorResolveResult;
                    bool special = orr != null && orr.IsLiftedOperator;

                    if (!special && isBool &&
                        (this.Emitter.AssignmentType == AssignmentOperatorType.BitwiseAnd ||
                         this.Emitter.AssignmentType == AssignmentOperatorType.BitwiseOr))
                    {
                        skipGet = true;
                    }

                    if (skipGet)
                    {
                        this.PushWriter(string.Concat(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, true), "({0})"));
                    }
                    else
                    {
                        this.PushWriter(string.Concat(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, true),
                        "(",
                        trg,
                        ".",
                        Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false),
                        "()",
                        "{0})"));
                    }
                }
                else
                {
                    this.PushWriter(Helpers.GetPropertyRef(memberResult.Member, this.Emitter, true) + "({0})");
                }
            }
            else if (memberResult != null && memberResult.Member is IEvent)
            {
                if (this.Emitter.IsAssignment &&
                    (this.Emitter.AssignmentType == AssignmentOperatorType.Add ||
                     this.Emitter.AssignmentType == AssignmentOperatorType.Subtract))
                {
                    this.WriteTarget(memberResult);

                    if (!string.IsNullOrWhiteSpace(inlineCode))
                    {
                        this.Write(inlineCode);
                    }
                    else
                    {
                        this.Write(Helpers.GetAddOrRemove(this.Emitter.AssignmentType == AssignmentOperatorType.Add));
                        this.Write(
                            OverloadsCollection.Create(this.Emitter, memberResult.Member,
                                this.Emitter.AssignmentType == AssignmentOperatorType.Subtract).GetOverloadName());
                    }

                    this.WriteOpenParentheses();
                }
                else
                {
                    this.WriteTarget(memberResult);
                    this.Write(this.Emitter.GetEntityName(memberResult.Member));
                }
            }
            else
            {
                if (!string.IsNullOrWhiteSpace(inlineCode))
                {
                    this.Write(inlineCode);
                }
                else if (isResolved)
                {
                    if (resolveResult is LocalResolveResult)
                    {
                        var localResolveResult = (LocalResolveResult)resolveResult;
                        this.Write(localResolveResult.Variable.Name);
                    }
                    else if (memberResult != null)
                    {
                        this.WriteTarget(memberResult);
                        string name = OverloadsCollection.Create(this.Emitter, memberResult.Member).GetOverloadName();
                        if (isRefArg)
                        {
                            this.WriteScript(name);
                        }
                        else if (memberResult.Member is IField)
                        {
                            this.WriteIdentifier(name);
                        }
                        else
                        {
                            this.Write(name);
                        }
                    }
                    else
                    {
                        this.Write(resolveResult.ToString());
                    }
                }
                else
                {
                    throw new EmitterException(identifierExpression, "Cannot resolve identifier: " + id);
                }
            }

            if (appendAdditionalCode != null)
            {
                this.Write(appendAdditionalCode);
            }

            Helpers.CheckValueTypeClone(resolveResult, identifierExpression, this, pos);
        }

        protected void WriteTarget(MemberResolveResult memberResult)
        {
            bool noTarget = false;
            if (memberResult.Member.IsStatic)
            {
                var target = BridgeTypes.ToJsName(memberResult.Member.DeclaringType, this.Emitter);
                noTarget = string.IsNullOrWhiteSpace(target);
                this.Write(target);
            }
            else
            {
                this.WriteThis();
            }

            if (this.isRefArg)
            {
                this.WriteComma();
            }
            else if(!noTarget)
            {
                this.WriteDot();
            }
        }
    }
}