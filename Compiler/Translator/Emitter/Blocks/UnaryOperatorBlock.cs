using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;

namespace Bridge.Translator
{
    public class UnaryOperatorBlock : ConversionBlock
    {
        public UnaryOperatorBlock(IEmitter emitter, UnaryOperatorExpression unaryOperatorExpression)
            : base(emitter, unaryOperatorExpression)
        {
            this.Emitter = emitter;
            this.UnaryOperatorExpression = unaryOperatorExpression;
        }

        public UnaryOperatorExpression UnaryOperatorExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.UnaryOperatorExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitUnaryOperatorExpression();
        }

        protected bool ResolveOperator(UnaryOperatorExpression unaryOperatorExpression, OperatorResolveResult orr)
        {
            if (orr != null && orr.UserDefinedOperatorMethod != null)
            {
                var method = orr.UserDefinedOperatorMethod;
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, unaryOperatorExpression, orr, method), inline).Emit();
                    return true;
                }
                else
                {
                    if (orr.IsLiftedOperator)
                    {
                        this.Write(Bridge.Translator.Emitter.ROOT + ".Nullable.lift(");
                    }

                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    if (orr.IsLiftedOperator)
                    {
                        this.WriteComma();
                    }
                    else
                    {
                        this.WriteOpenParentheses();
                    }

                    new ExpressionListBlock(this.Emitter, new Expression[] { unaryOperatorExpression.Expression }, null).Emit();
                    this.WriteCloseParentheses();

                    return true;
                }
            }

            return false;
        }

        protected void VisitUnaryOperatorExpression()
        {
            var unaryOperatorExpression = this.UnaryOperatorExpression;
            var oldType = this.Emitter.UnaryOperatorType;
            var oldAccessor = this.Emitter.IsUnaryAccessor;
            var resolveOperator = this.Emitter.Resolver.ResolveNode(unaryOperatorExpression, this.Emitter);
            var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(unaryOperatorExpression);
            bool isDecimalExpected = Helpers.IsDecimalType(expectedType, this.Emitter.Resolver);
            bool isDecimal = Helpers.IsDecimalType(resolveOperator.Type, this.Emitter.Resolver);
            OperatorResolveResult orr = resolveOperator as OperatorResolveResult;
            int count = this.Emitter.Writers.Count;

            if (resolveOperator is ConstantResolveResult)
            {
                this.WriteScript(((ConstantResolveResult)resolveOperator).ConstantValue);
                return;
            }

            if (Helpers.IsDecimalType(resolveOperator.Type, this.Emitter.Resolver))
            {
                isDecimal = true;
                isDecimalExpected = true;
            }

            if (isDecimal && isDecimalExpected)
            {
                this.HandleDecimal(resolveOperator);
                return;
            }

            if (this.ResolveOperator(unaryOperatorExpression, orr))
            {
                return;
            }

            var op = unaryOperatorExpression.Operator;
            var argResolverResult = this.Emitter.Resolver.ResolveNode(unaryOperatorExpression.Expression, this.Emitter);
            bool nullable = NullableType.IsNullable(argResolverResult.Type);

            if (nullable)
            {
                if (op != UnaryOperatorType.Increment &&
                    op != UnaryOperatorType.Decrement &&
                    op != UnaryOperatorType.PostIncrement &&
                    op != UnaryOperatorType.PostDecrement)
                {
                    this.Write(Bridge.Translator.Emitter.ROOT + ".Nullable.");
                }
            }

            bool isAccessor = false;
            var memberArgResolverResult = argResolverResult as MemberResolveResult;

            if (memberArgResolverResult != null && memberArgResolverResult.Member is IProperty)
            {
                isAccessor = true;
            }
            else if (argResolverResult is ArrayAccessResolveResult)
            {
                isAccessor = ((ArrayAccessResolveResult)argResolverResult).Indexes.Count > 1;
            }

            this.Emitter.UnaryOperatorType = op;

            if ((isAccessor) &&
                (op == UnaryOperatorType.Increment ||
                 op == UnaryOperatorType.Decrement ||
                 op == UnaryOperatorType.PostIncrement ||
                 op == UnaryOperatorType.PostDecrement))
            {
                this.Emitter.IsUnaryAccessor = true;

                if (nullable)
                {
                    this.Write("(Bridge.hasValue(");
                    this.Emitter.IsUnaryAccessor = false;
                    unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                    this.Write(") ? ");
                    this.Emitter.IsUnaryAccessor = true;
                    unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                    this.Write(" : null)");
                }
                else
                {
                    unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                }

                this.Emitter.IsUnaryAccessor = oldAccessor;

                if (this.Emitter.Writers.Count > count)
                {
                    this.PopWriter();
                }
            }
            else
            {
                switch (op)
                {
                    case UnaryOperatorType.BitNot:
                        if (nullable)
                        {
                            bool is64bit = resolveOperator.Type.IsKnownType(KnownTypeCode.UInt64) ||
                               resolveOperator.Type.IsKnownType(KnownTypeCode.Int64);

                            if (is64bit)
                            {
                                throw new EmitterException(this.UnaryOperatorExpression, "Bitwise operations are not allowed on 64-bit types");
                            }

                            this.Write("bnot(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                        }
                        else
                        {
                            this.Write("~");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }
                        break;

                    case UnaryOperatorType.Decrement:
                        if (nullable)
                        {
                            this.Write("(Bridge.hasValue(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            this.Write("--");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" : null)");
                        }
                        else
                        {
                            this.Write("--");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }
                        break;

                    case UnaryOperatorType.Increment:
                        if (nullable)
                        {
                            this.Write("(Bridge.hasValue(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            this.Write("++");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" : null)");
                        }
                        else
                        {
                            this.Write("++");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }
                        break;

                    case UnaryOperatorType.Minus:
                        if (nullable)
                        {
                            this.Write("neg(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                        }
                        else
                        {
                            this.Write("-");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }
                        break;

                    case UnaryOperatorType.Not:
                        if (nullable)
                        {
                            this.Write("not(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                        }
                        else
                        {
                            this.Write("!");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }
                        break;

                    case UnaryOperatorType.Plus:
                        if (nullable)
                        {
                            this.Write("pos(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                        }
                        else
                        {
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        }

                        break;

                    case UnaryOperatorType.PostDecrement:
                        if (nullable)
                        {
                            this.Write("(Bridge.hasValue(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write("--");
                            this.Write(" : null)");
                        }
                        else
                        {
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write("--");
                        }
                        break;

                    case UnaryOperatorType.PostIncrement:
                        if (nullable)
                        {
                            this.Write("(Bridge.hasValue(");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write("++");
                            this.Write(" : null)");
                        }
                        else
                        {
                            unaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write("++");
                        }
                        break;

                    case UnaryOperatorType.Await:
                        if (this.Emitter.ReplaceAwaiterByVar)
                        {
                            var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, unaryOperatorExpression.Expression) + 1;
                            this.Write("$taskResult" + index);
                        }
                        else
                        {
                            var oldValue = this.Emitter.ReplaceAwaiterByVar;
                            var oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;

                            if (this.Emitter.IsAsync && !this.Emitter.AsyncExpressionHandling)
                            {
                                this.WriteAwaiters(unaryOperatorExpression.Expression);
                                this.Emitter.ReplaceAwaiterByVar = true;
                                this.Emitter.AsyncExpressionHandling = true;
                            }

                            this.WriteAwaiter(unaryOperatorExpression.Expression);

                            this.Emitter.ReplaceAwaiterByVar = oldValue;
                            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;
                        }
                        break;

                    default:
                        throw new EmitterException(unaryOperatorExpression, "Unsupported unary operator: " + unaryOperatorExpression.Operator.ToString());
                }

                if (this.Emitter.Writers.Count > count)
                {
                    this.PopWriter();
                }
            }

            this.Emitter.UnaryOperatorType = oldType;
        }

        private void HandleDecimal(ResolveResult resolveOperator)
        {
            var orr = resolveOperator as OperatorResolveResult;
            var op = this.UnaryOperatorExpression.Operator;
            var oldType = this.Emitter.UnaryOperatorType;
            var oldAccessor = this.Emitter.IsUnaryAccessor;

            this.Emitter.UnaryOperatorType = op;

            var argResolverResult = this.Emitter.Resolver.ResolveNode(this.UnaryOperatorExpression.Expression, this.Emitter);
            bool nullable = NullableType.IsNullable(argResolverResult.Type);
            bool isAccessor = false;
            var memberArgResolverResult = argResolverResult as MemberResolveResult;

            if (memberArgResolverResult != null && memberArgResolverResult.Member is IProperty)
            {
                isAccessor = true;
            }
            else if (argResolverResult is ArrayAccessResolveResult)
            {
                isAccessor = ((ArrayAccessResolveResult)argResolverResult).Indexes.Count > 1;
            }

            var isOneOp = op == UnaryOperatorType.Increment ||
                           op == UnaryOperatorType.Decrement ||
                           op == UnaryOperatorType.PostIncrement ||
                           op == UnaryOperatorType.PostDecrement;
            if (isAccessor && isOneOp)
            {
                this.Emitter.IsUnaryAccessor = true;

                if (nullable)
                {
                    this.Write("(Bridge.hasValue(");
                    this.Emitter.IsUnaryAccessor = false;
                    this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                    this.Write(") ? ");
                    this.Emitter.IsUnaryAccessor = true;
                    this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                    this.Write(" : null)");
                }
                else
                {
                    this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                }

                this.Emitter.UnaryOperatorType = oldType;
                this.Emitter.IsUnaryAccessor = oldAccessor;

                return;
            }

            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (orr != null && method == null)
            {
                var name = Helpers.GetUnaryOperatorMethodName(this.UnaryOperatorExpression.Operator);
                var type = NullableType.IsNullable(orr.Type) ? NullableType.GetUnderlyingType(orr.Type) : orr.Type;
                method = type.GetMethods(m => m.Name == name, GetMemberOptions.IgnoreInheritedMembers).FirstOrDefault();
            }

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (orr.IsLiftedOperator)
                {
                    if (!isOneOp)
                    {
                        this.Write(Bridge.Translator.Emitter.ROOT + ".Nullable.");
                    }

                    string action = "lift1";
                    string op_name = null;

                    switch (this.UnaryOperatorExpression.Operator)
                    {
                        case UnaryOperatorType.Minus:
                            op_name = "neg";
                            break;

                        case UnaryOperatorType.Plus:
                            op_name = "clone";
                            break;

                        case UnaryOperatorType.Increment:
                        case UnaryOperatorType.Decrement:
                            this.Write("(Bridge.hasValue(");
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            this.WriteOpenParentheses();
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" = Bridge.Nullable.lift1('" + (op == UnaryOperatorType.Decrement ? "dec" : "inc") + "', ");
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                            this.WriteCloseParentheses();

                            this.Write(" : null)");
                            break;

                        case UnaryOperatorType.PostIncrement:
                        case UnaryOperatorType.PostDecrement:
                            this.Write("(Bridge.hasValue(");
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(") ? ");
                            this.WriteOpenParentheses();
                            var valueVar = this.GetTempVarName();

                            this.Write(valueVar);
                            this.Write(" = ");

                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.WriteComma();
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" = Bridge.Nullable.lift1('" + (op == UnaryOperatorType.PostDecrement ? "dec" : "inc") + "', ");
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(")");
                            this.WriteComma();
                            this.Write(valueVar);
                            this.WriteCloseParentheses();
                            this.RemoveTempVar(valueVar);

                            this.Write(" : null)");
                            break;
                    }

                    if (!isOneOp)
                    {
                        this.Write(action);
                        this.WriteOpenParentheses();
                        this.WriteScript(op_name);
                        this.WriteComma();
                        new ExpressionListBlock(this.Emitter,
                            new Expression[] { this.UnaryOperatorExpression.Expression }, null).Emit();
                        this.WriteCloseParentheses();
                    }
                }
                else if (!string.IsNullOrWhiteSpace(inline))
                {
                    if (isOneOp)
                    {
                        var isStatement = this.UnaryOperatorExpression.Parent is ExpressionStatement;

                        if (isStatement || this.UnaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                            this.UnaryOperatorExpression.Operator == UnaryOperatorType.Decrement)
                        {
                            this.WriteOpenParentheses();
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" = ");
                            new InlineArgumentsBlock(this.Emitter,
                                new ArgumentsInfo(this.Emitter, this.UnaryOperatorExpression, orr, method), inline).Emit
                                ();
                            this.WriteCloseParentheses();
                        }
                        else
                        {
                            this.WriteOpenParentheses();
                            var valueVar = this.GetTempVarName();

                            this.Write(valueVar);
                            this.Write(" = ");

                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.WriteComma();
                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" = ");
                            new InlineArgumentsBlock(this.Emitter, new ArgumentsInfo(this.Emitter, this.UnaryOperatorExpression, orr, method), inline).Emit();
                            this.WriteComma();
                            this.Write(valueVar);
                            this.WriteCloseParentheses();
                            this.RemoveTempVar(valueVar);
                        }
                    }
                    else
                    {
                        new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, this.UnaryOperatorExpression, orr, method), inline).Emit();
                    }
                }
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.UnaryOperatorExpression.Expression }, null).Emit();
                    this.WriteCloseParentheses();
                }
            }

            this.Emitter.UnaryOperatorType = oldType;
        }
    }
}
