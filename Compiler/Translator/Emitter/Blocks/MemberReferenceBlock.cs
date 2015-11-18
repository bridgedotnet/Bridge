using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using Object.Net.Utilities;
using System.Linq;
using System.Text;

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

        protected void VisitMemberReferenceExpression()
        {
            MemberReferenceExpression memberReferenceExpression = this.MemberReferenceExpression;

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
            if (memberTargetrr != null && memberTargetrr.Type.Kind == TypeKind.Enum && memberTargetrr.Member is DefaultResolvedField && this.Emitter.Validator.EnumEmitMode(memberTargetrr.Type) == 2)
            {
                isConstTarget = true;
            }

            if (memberReferenceExpression.Parent is InvocationExpression && (((InvocationExpression)(memberReferenceExpression.Parent)).Target == memberReferenceExpression))
            {
                resolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Parent, this.Emitter);
                expressionResolveResult = this.Emitter.Resolver.ResolveNode(memberReferenceExpression, this.Emitter);

                if (expressionResolveResult is InvocationResolveResult)
                {
                    resolveResult = expressionResolveResult;
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

            if (resolveResult is DynamicInvocationResolveResult)
            {
                resolveResult = ((DynamicInvocationResolveResult)resolveResult).Target;
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

            string inline = member != null ? this.Emitter.GetInline(member.Member) : null;
            bool hasInline = !string.IsNullOrEmpty(inline);
            bool hasThis = hasInline && inline.Contains("{this}");

            if (hasThis)
            {
                this.Write("");
                var oldBuilder = this.Emitter.Output;
                this.Emitter.Output = new StringBuilder();
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
                inline = inline.Replace("{this}", this.Emitter.Output.ToString());
                this.Emitter.Output = oldBuilder;

                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inline);
                }
                else
                {
                    this.Write(inline);
                }

                return;
            }

            if (member != null && member.Member.SymbolKind == SymbolKind.Field && this.Emitter.IsMemberConst(member.Member) && this.Emitter.IsInlineConst(member.Member))
            {
                this.WriteScript(member.ConstantValue);
            }
            else if (hasInline && member.Member.IsStatic)
            {
                if (resolveResult is InvocationResolveResult)
                {
                    this.PushWriter(inline);
                }
                else
                {
                    //this.Write(inline);
                    new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, memberReferenceExpression, resolveResult), inline).Emit();
                }
            }
            else
            {
                if (member != null && member.IsCompileTimeConstant && member.Member.DeclaringType.Kind == TypeKind.Enum)
                {
                    var typeDef = member.Member.DeclaringType as DefaultResolvedTypeDefinition;

                    if (typeDef != null)
                    {
                        var enumMode = this.Emitter.Validator.EnumEmitMode(typeDef);

                        if ((this.Emitter.Validator.IsIgnoreType(typeDef) && enumMode == -1) || enumMode == 2)
                        {
                            this.WriteScript(member.ConstantValue);

                            return;
                        }

                        if (enumMode >= 3)
                        {
                            string enumStringName = member.Member.Name;
                            var attr = this.Emitter.GetAttribute(member.Member.Attributes, Translator.Bridge_ASSEMBLY + ".NameAttribute");

                            if (attr != null)
                            {
                                enumStringName = this.Emitter.GetEntityName(member.Member);
                            }
                            else
                            {
                                switch (enumMode)
                                {
                                    case 3:
                                        enumStringName = Object.Net.Utilities.StringUtils.ToLowerCamelCase(member.Member.Name);
                                        break;

                                    case 4:
                                        break;

                                    case 5:
                                        enumStringName = enumStringName.ToLowerInvariant();
                                        break;

                                    case 6:
                                        enumStringName = enumStringName.ToUpperInvariant();
                                        break;
                                }
                            }

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
                else if (member != null &&
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
                    var resolvedMethod = (IMethod)member.Member;
                    bool isStatic = resolvedMethod != null && resolvedMethod.IsStatic;

                    var isExtensionMethod = resolvedMethod.IsExtensionMethod;

                    this.Emitter.IsAssignment = false;
                    this.Emitter.IsUnaryAccessor = false;

                    if (!isStatic)
                    {
                        this.Write(Bridge.Translator.Emitter.ROOT + "." + (isExtensionMethod ? Bridge.Translator.Emitter.DELEGATE_BIND_SCOPE : Bridge.Translator.Emitter.DELEGATE_BIND) + "(");
                        memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
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
                        memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                        if (isConstTarget)
                        {
                            this.Write(")");
                        }
                        this.Emitter.IsAssignment = oldIsAssignment;
                        this.Emitter.IsUnaryAccessor = oldUnary;
                    }

                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, member.Member).GetOverloadName());

                    if (!isStatic)
                    {
                        this.Write(")");
                    }

                    return;
                }
                else
                {
                    bool isProperty = false;

                    if (member != null && member.Member.SymbolKind == SymbolKind.Property && member.TargetResult.Type.Kind != TypeKind.Anonymous && !this.Emitter.Validator.IsObjectLiteral(member.Member.DeclaringTypeDefinition))
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
                    memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
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
                    this.WriteDot();
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
                    if (resolveResult is InvocationResolveResult || (member.Member.SymbolKind == SymbolKind.Property && this.Emitter.IsAssignment))
                    {
                        this.PushWriter(inline);
                    }
                    else
                    {
                        this.Write(inline);
                    }
                }
                else if (member.Member.SymbolKind == SymbolKind.Property && member.TargetResult.Type.Kind != TypeKind.Anonymous && !this.Emitter.Validator.IsObjectLiteral(member.Member.DeclaringTypeDefinition))
                {
                    var proto = false;
                    if (this.MemberReferenceExpression.Target is BaseReferenceExpression && member != null)
                    {
                        var prop = member.Member as IProperty;

                        if (prop != null && (prop.IsVirtual || prop.IsOverride))
                        {
                            proto = true;
                        }
                    }

                    if (Helpers.IsFieldProperty(member.Member, this.Emitter))
                    {
                        this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter));
                    }
                    else if (!this.Emitter.IsAssignment)
                    {
                        if (this.Emitter.IsUnaryAccessor)
                        {
                            bool isNullable = NullableType.IsNullable(member.Member.ReturnType);
                            bool isDecimal = Helpers.IsDecimalType(member.Member.ReturnType, this.Emitter.Resolver);

                            if (isStatement)
                            {
                                this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, true));
                                if (proto)
                                {
                                    this.Write(".call");
                                    this.WriteOpenParentheses();
                                    this.WriteThis();
                                    this.WriteComma();
                                }
                                else
                                {
                                    this.WriteOpenParentheses();
                                }

                                if (isDecimal)
                                {
                                    if (isNullable)
                                    {
                                        this.Write("Bridge.Nullable.lift1");
                                        this.WriteOpenParentheses();
                                        if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                        {
                                            this.WriteScript("inc");
                                        }
                                        else
                                        {
                                            this.WriteScript("dec");
                                        }

                                        this.WriteComma();

                                        if (targetVar != null)
                                        {
                                            this.Write(targetVar);
                                        }
                                        else
                                        {
                                            memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                                        }

                                        this.WriteDot();

                                        this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, false));

                                        if (proto)
                                        {
                                            this.Write(".call");
                                            this.WriteOpenParentheses();
                                            this.WriteThis();
                                            this.WriteCloseParentheses();
                                        }
                                        else
                                        {
                                            this.WriteOpenParentheses();
                                            this.WriteCloseParentheses();
                                        }

                                        this.WriteCloseParentheses();
                                    }
                                    else
                                    {
                                        if (targetVar != null)
                                        {
                                            this.Write(targetVar);
                                        }
                                        else
                                        {
                                            memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                                        }

                                        this.WriteDot();

                                        this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, false));

                                        if (proto)
                                        {
                                            this.Write(".call");
                                            this.WriteOpenParentheses();
                                            this.WriteThis();
                                            this.WriteCloseParentheses();
                                        }
                                        else
                                        {
                                            this.WriteOpenParentheses();
                                            this.WriteCloseParentheses();
                                        }

                                        this.WriteDot();

                                        if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                        {
                                            this.Write("inc");
                                        }
                                        else
                                        {
                                            this.Write("dec");
                                        }

                                        this.WriteOpenParentheses();
                                        this.WriteCloseParentheses();

                                        this.WriteCloseParentheses();
                                    }
                                }
                                else
                                {
                                    if (targetVar != null)
                                    {
                                        this.Write(targetVar);
                                    }
                                    else
                                    {
                                        if (isConstTarget)
                                        {
                                            this.Write("(");
                                        }
                                        memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                                        if (isConstTarget)
                                        {
                                            this.Write(")");
                                        }
                                    }

                                    this.WriteDot();

                                    this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, false));

                                    if (proto)
                                    {
                                        this.Write(".call");
                                        this.WriteOpenParentheses();
                                        this.WriteThis();
                                        this.WriteCloseParentheses();
                                    }
                                    else
                                    {
                                        this.WriteOpenParentheses();
                                        this.WriteCloseParentheses();
                                    }

                                    if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                    {
                                        this.Write("+");
                                    }
                                    else
                                    {
                                        this.Write("-");
                                    }

                                    this.Write("1");
                                    this.WriteCloseParentheses();
                                }
                            }
                            else
                            {
                                this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, false));
                                if (proto)
                                {
                                    this.Write(".call");
                                    this.WriteOpenParentheses();
                                    this.WriteThis();
                                    this.WriteCloseParentheses();
                                }
                                else
                                {
                                    this.WriteOpenParentheses();
                                    this.WriteCloseParentheses();
                                }
                                this.WriteComma();

                                if (targetVar != null)
                                {
                                    this.Write(targetVar);
                                }
                                else
                                {
                                    if (isConstTarget)
                                    {
                                        this.Write("(");
                                    }
                                    memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                                    if (isConstTarget)
                                    {
                                        this.Write(")");
                                    }
                                }

                                this.WriteDot();
                                this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, true));

                                if (proto)
                                {
                                    this.Write(".call");
                                    this.WriteOpenParentheses();
                                    this.WriteThis();
                                    this.WriteComma();
                                }
                                else
                                {
                                    this.WriteOpenParentheses();
                                }

                                if (isDecimal)
                                {
                                    if (isNullable)
                                    {
                                        this.Write("Bridge.Nullable.lift1");
                                        this.WriteOpenParentheses();
                                        if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                        {
                                            this.WriteScript("inc");
                                        }
                                        else
                                        {
                                            this.WriteScript("dec");
                                        }
                                        this.WriteComma();
                                        this.Write(valueVar);
                                        this.WriteCloseParentheses();
                                    }
                                    else
                                    {
                                        this.Write(valueVar);
                                        this.WriteDot();
                                        if (this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment || this.Emitter.UnaryOperatorType == UnaryOperatorType.PostIncrement)
                                        {
                                            this.Write("inc");
                                        }
                                        else
                                        {
                                            this.Write("dec");
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

                                bool isPreOp = this.Emitter.UnaryOperatorType == UnaryOperatorType.Increment ||
                                               this.Emitter.UnaryOperatorType == UnaryOperatorType.Decrement;

                                if (isPreOp)
                                {
                                    if (targetVar != null)
                                    {
                                        this.Write(targetVar);
                                    }
                                    else
                                    {
                                        memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                                    }
                                    this.WriteDot();
                                    this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter, false));
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

                            if (targetVar != null)
                            {
                                this.RemoveTempVar(targetVar);
                            }
                        }
                        else
                        {
                            this.Write(Helpers.GetPropertyRef(member.Member, this.Emitter));
                            if (proto)
                            {
                                this.Write(".call");
                                this.WriteOpenParentheses();
                                this.WriteThis();
                                this.WriteCloseParentheses();
                            }
                            else
                            {
                                this.WriteOpenParentheses();
                                this.WriteCloseParentheses();
                            }
                        }
                    }
                    else if (this.Emitter.AssignmentType != AssignmentOperatorType.Assign)
                    {
                        if (targetVar != null)
                        {
                            this.PushWriter(string.Concat(Helpers.GetPropertyRef(member.Member, this.Emitter, true),
                                proto ? ".call(this, " : "(",
                                targetVar,
                                ".",
                                Helpers.GetPropertyRef(member.Member, this.Emitter, false),
                                proto ? ".call(this)" : "()",
                                "{0})"), () =>
                                {
                                    this.RemoveTempVar(targetVar);
                                });
                        }
                        else
                        {
                            var oldWriter = this.SaveWriter();
                            this.NewWriter();

                            this.Emitter.IsAssignment = false;
                            this.Emitter.IsUnaryAccessor = false;
                            memberReferenceExpression.Target.AcceptVisitor(this.Emitter);
                            this.Emitter.IsAssignment = oldIsAssignment;
                            this.Emitter.IsUnaryAccessor = oldUnary;
                            var trg = this.Emitter.Output.ToString();

                            this.RestoreWriter(oldWriter);
                            this.PushWriter(string.Concat(Helpers.GetPropertyRef(member.Member, this.Emitter, true),
                                proto ? ".call(this, " : "(",
                                trg,
                                ".",
                                Helpers.GetPropertyRef(member.Member, this.Emitter, false),
                                proto ? ".call(this)" : "()",
                                "{0})"));
                        }
                    }
                    else
                    {
                        if (proto)
                        {
                            this.PushWriter(Helpers.GetPropertyRef(member.Member, this.Emitter, true) + ".call(this, {0})");
                        }
                        else
                        {
                            this.PushWriter(Helpers.GetPropertyRef(member.Member, this.Emitter, true) + "({0})");
                        }
                    }
                }
                else if (member.Member.SymbolKind == SymbolKind.Field)
                {
                    bool isConst = this.Emitter.IsMemberConst(member.Member);

                    if (isConst && this.Emitter.IsInlineConst(member.Member))
                    {
                        this.WriteScript(member.ConstantValue);
                    }
                    else
                    {
                        this.Write(OverloadsCollection.Create(this.Emitter, member.Member).GetOverloadName());
                    }
                }
                else if (resolveResult is InvocationResolveResult)
                {
                    InvocationResolveResult invocationResult = (InvocationResolveResult)resolveResult;
                    CSharpInvocationResolveResult cInvocationResult = (CSharpInvocationResolveResult)resolveResult;
                    var expresssionMember = expressionResolveResult as MemberResolveResult;

                    if (expresssionMember != null &&
                        cInvocationResult != null &&
                        cInvocationResult.IsDelegateInvocation &&
                        invocationResult.Member != expresssionMember.Member)
                    {
                        this.Write(OverloadsCollection.Create(this.Emitter, expresssionMember.Member).GetOverloadName());
                    }
                    else
                    {
                        this.Write(OverloadsCollection.Create(this.Emitter, invocationResult.Member).GetOverloadName());
                    }
                }
                else if (member.Member is DefaultResolvedEvent)
                {
                    if (this.Emitter.IsAssignment &&
                        (this.Emitter.AssignmentType == AssignmentOperatorType.Add ||
                         this.Emitter.AssignmentType == AssignmentOperatorType.Subtract))
                    {
                        this.Write(this.Emitter.AssignmentType == AssignmentOperatorType.Add ? "add" : "remove");
                        this.Write(
                            OverloadsCollection.Create(this.Emitter, member.Member,
                                this.Emitter.AssignmentType == AssignmentOperatorType.Subtract).GetOverloadName());
                        this.WriteOpenParentheses();
                    }
                    else
                    {
                        this.Write(this.Emitter.GetEntityName(member.Member, true));
                    }
                }
                else
                {
                    this.Write(this.Emitter.GetEntityName(member.Member));
                }

                Helpers.CheckValueTypeClone(resolveResult, memberReferenceExpression, this);
            }
        }
    }
}
