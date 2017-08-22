using Bridge.Contract;
using Bridge.Contract.Constants;

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
                        this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT + "(");
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

                    new ExpressionListBlock(this.Emitter, new Expression[] { unaryOperatorExpression.Expression }, null, null, 0).Emit();
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
            bool isLongExpected = Helpers.Is64Type(expectedType, this.Emitter.Resolver);
            bool isLong = Helpers.Is64Type(resolveOperator.Type, this.Emitter.Resolver);
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

            if (isDecimal && isDecimalExpected && unaryOperatorExpression.Operator != UnaryOperatorType.Await)
            {
                this.HandleDecimal(resolveOperator);
                return;
            }

            if (this.ResolveOperator(unaryOperatorExpression, orr))
            {
                return;
            }

            if (Helpers.Is64Type(resolveOperator.Type, this.Emitter.Resolver))
            {
                isLong = true;
                isLongExpected = true;
            }

            if (isLong && isLongExpected && unaryOperatorExpression.Operator != UnaryOperatorType.Await)
            {
                this.HandleDecimal(resolveOperator, true);
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
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                }
            }

            bool isAccessor = false;

            var memberArgResolverResult = argResolverResult as MemberResolveResult;

            if (memberArgResolverResult != null)
            {
                var prop = memberArgResolverResult.Member as IProperty;

                if (prop != null)
                {
                    var isIgnore = memberArgResolverResult.Member.DeclaringTypeDefinition != null && this.Emitter.Validator.IsExternalType(memberArgResolverResult.Member.DeclaringTypeDefinition);
                    var inlineAttr = prop.Getter != null ? this.Emitter.GetAttribute(prop.Getter.Attributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute") : null;
                    var ignoreAccessor = prop.Getter != null && this.Emitter.Validator.IsExternalType(prop.Getter);
                    var isAccessorsIndexer = this.Emitter.Validator.IsAccessorsIndexer(memberArgResolverResult.Member);

                    isAccessor = prop.IsIndexer;

                    if (inlineAttr == null && (isIgnore || ignoreAccessor) && !isAccessorsIndexer)
                    {
                        isAccessor = false;
                    }
                }
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
                    this.Write(JS.Funcs.BRIDGE_HASVALUE);
                    this.WriteOpenParentheses();
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
                            this.Write(JS.Funcs.BRIDGE_HASVALUE);
                            this.WriteOpenParentheses();
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
                            this.Write(JS.Funcs.BRIDGE_HASVALUE);
                            this.WriteOpenParentheses();
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
                            this.Write(JS.Funcs.BRIDGE_HASVALUE);
                            this.WriteOpenParentheses();
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
                            this.Write(JS.Funcs.BRIDGE_HASVALUE);
                            this.WriteOpenParentheses();
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
                            this.Write(JS.Vars.ASYNC_TASK_RESULT + index);
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

        private void AddOveflowFlag(KnownTypeCode typeCode, string op_name, bool lifted)
        {
            if ((typeCode == KnownTypeCode.Int64 || typeCode == KnownTypeCode.UInt64) && ConversionBlock.IsInCheckedContext(this.Emitter, this.UnaryOperatorExpression))
            {
                if (op_name == JS.Funcs.Math.NEG || op_name == JS.Funcs.Math.DEC || op_name == JS.Funcs.Math.INC)
                {
                    if (lifted)
                    {
                        this.Write(", ");
                    }
                    this.Write("1");
                }
            }
        }

        private void HandleDecimal(ResolveResult resolveOperator, bool isLong = false)
        {
            var orr = resolveOperator as OperatorResolveResult;
            var op = this.UnaryOperatorExpression.Operator;
            var oldType = this.Emitter.UnaryOperatorType;
            var oldAccessor = this.Emitter.IsUnaryAccessor;
            var typeCode = isLong ? KnownTypeCode.Int64 : KnownTypeCode.Decimal;
            this.Emitter.UnaryOperatorType = op;

            var argResolverResult = this.Emitter.Resolver.ResolveNode(this.UnaryOperatorExpression.Expression, this.Emitter);
            bool nullable = NullableType.IsNullable(argResolverResult.Type);
            bool isAccessor = false;
            var memberArgResolverResult = argResolverResult as MemberResolveResult;

            if (memberArgResolverResult != null && memberArgResolverResult.Member is IProperty)
            {
                var isIgnore = this.Emitter.Validator.IsExternalType(memberArgResolverResult.Member.DeclaringTypeDefinition);
                var inlineAttr = this.Emitter.GetAttribute(memberArgResolverResult.Member.Attributes, Translator.Bridge_ASSEMBLY + ".TemplateAttribute");
                var ignoreAccessor = this.Emitter.Validator.IsExternalType(((IProperty)memberArgResolverResult.Member).Getter);
                var isAccessorsIndexer = this.Emitter.Validator.IsAccessorsIndexer(memberArgResolverResult.Member);

                isAccessor = ((IProperty)memberArgResolverResult.Member).IsIndexer;

                if (inlineAttr == null && (isIgnore || ignoreAccessor) && !isAccessorsIndexer)
                {
                    isAccessor = false;
                }
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
                    this.Write(JS.Funcs.BRIDGE_HASVALUE);
                    this.WriteOpenParentheses();
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

            if (orr.IsLiftedOperator)
            {
                if (!isOneOp)
                {
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                }

                string action = JS.Funcs.Math.LIFT1;
                string op_name = null;

                switch (this.UnaryOperatorExpression.Operator)
                {
                    case UnaryOperatorType.Minus:
                        op_name = JS.Funcs.Math.NEG;
                        break;

                    case UnaryOperatorType.Plus:
                        op_name = "clone";
                        break;

                    case UnaryOperatorType.BitNot:
                        op_name = "not";
                        break;

                    case UnaryOperatorType.Increment:
                    case UnaryOperatorType.Decrement:
                        this.Write(JS.Funcs.BRIDGE_HASVALUE);
                        this.WriteOpenParentheses();
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(") ? ");
                        this.WriteOpenParentheses();
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(" = " + JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1 + "(\"" + (op == UnaryOperatorType.Decrement ? JS.Funcs.Math.DEC : JS.Funcs.Math.INC) + "\", ");
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.AddOveflowFlag(typeCode, JS.Funcs.Math.DEC, true);
                        this.Write(")");
                        this.WriteCloseParentheses();

                        this.Write(" : null");
                        break;

                    case UnaryOperatorType.PostIncrement:
                    case UnaryOperatorType.PostDecrement:
                        this.Write(JS.Funcs.BRIDGE_HASVALUE);
                        this.WriteOpenParentheses();
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(") ? ");
                        this.WriteOpenParentheses();
                        var valueVar = this.GetTempVarName();

                        this.Write(valueVar);
                        this.Write(" = ");

                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.WriteComma();
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(" = " + JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT1 + "(\"" + (op == UnaryOperatorType.PostDecrement ? JS.Funcs.Math.DEC : JS.Funcs.Math.INC) + "\", ");
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.AddOveflowFlag(typeCode, JS.Funcs.Math.DEC, true);
                        this.Write(")");
                        this.WriteComma();
                        this.Write(valueVar);
                        this.WriteCloseParentheses();
                        this.RemoveTempVar(valueVar);

                        this.Write(" : null");
                        break;
                }

                if (!isOneOp)
                {
                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.UnaryOperatorExpression.Expression }, null, null, 0).Emit();
                    this.AddOveflowFlag(typeCode, op_name, true);
                    this.WriteCloseParentheses();
                }
            }
            else if (method == null)
            {
                string op_name = null;
                var isStatement = this.UnaryOperatorExpression.Parent is ExpressionStatement;

                if (isStatement)
                {
                    if (op == UnaryOperatorType.PostIncrement)
                    {
                        op = UnaryOperatorType.Increment;
                    }
                    else if (op == UnaryOperatorType.PostDecrement)
                    {
                        op = UnaryOperatorType.Decrement;
                    }
                }

                switch (op)
                {
                    case UnaryOperatorType.Minus:
                        op_name = JS.Funcs.Math.NEG;
                        break;

                    case UnaryOperatorType.Plus:
                        op_name = "clone";
                        break;

                    case UnaryOperatorType.BitNot:
                        op_name = "not";
                        break;

                    case UnaryOperatorType.Increment:
                    case UnaryOperatorType.Decrement:
                        if (!isStatement)
                        {
                            this.WriteOpenParentheses();
                        }

                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(" = ");
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write("." + (op == UnaryOperatorType.Decrement ? JS.Funcs.Math.DEC : JS.Funcs.Math.INC) + "(");
                        this.AddOveflowFlag(typeCode, JS.Funcs.Math.DEC, false);
                        this.Write(")");

                        if (!isStatement)
                        {
                            this.WriteCloseParentheses();
                        }
                        break;

                    case UnaryOperatorType.PostIncrement:
                    case UnaryOperatorType.PostDecrement:
                        this.WriteOpenParentheses();
                        var valueVar = this.GetTempVarName();

                        this.Write(valueVar);
                        this.Write(" = ");

                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.WriteComma();
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write(" = ");
                        this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                        this.Write("." + (op == UnaryOperatorType.PostDecrement ? JS.Funcs.Math.DEC : JS.Funcs.Math.INC) + "(");
                        this.AddOveflowFlag(typeCode, JS.Funcs.Math.DEC, false);
                        this.Write("), ");
                        this.Write(valueVar);
                        this.WriteCloseParentheses();
                        this.RemoveTempVar(valueVar);
                        break;
                }

                if (!isOneOp)
                {
                    this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                    this.WriteDot();
                    this.Write(op_name);
                    this.WriteOpenParentheses();
                    this.AddOveflowFlag(typeCode, op_name, false);
                    this.WriteCloseParentheses();
                }
            }
            else
            {
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    if (isOneOp)
                    {
                        var isStatement = this.UnaryOperatorExpression.Parent is ExpressionStatement;

                        if (isStatement || this.UnaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                            this.UnaryOperatorExpression.Operator == UnaryOperatorType.Decrement)
                        {
                            if (!isStatement)
                            {
                                this.WriteOpenParentheses();
                            }

                            this.UnaryOperatorExpression.Expression.AcceptVisitor(this.Emitter);
                            this.Write(" = ");
                            new InlineArgumentsBlock(this.Emitter,
                                new ArgumentsInfo(this.Emitter, this.UnaryOperatorExpression, orr, method), inline).Emit
                                ();
                            if (!isStatement)
                            {
                                this.WriteCloseParentheses();
                            }
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
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.UnaryOperatorExpression.Expression }, null, null, 0).Emit();
                    this.WriteCloseParentheses();
                }
            }

            this.Emitter.UnaryOperatorType = oldType;
        }
    }
}