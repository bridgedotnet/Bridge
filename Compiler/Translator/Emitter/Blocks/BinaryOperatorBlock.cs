using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

using System;
using System.Linq;

namespace Bridge.Translator
{
    public class BinaryOperatorBlock : ConversionBlock
    {
        public BinaryOperatorBlock(IEmitter emitter, BinaryOperatorExpression binaryOperatorExpression)
            : base(emitter, binaryOperatorExpression)
        {
            this.Emitter = emitter;
            this.BinaryOperatorExpression = binaryOperatorExpression;
        }

        public BinaryOperatorExpression BinaryOperatorExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.BinaryOperatorExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitBinaryOperatorExpression();
        }

        protected bool ResolveOperator(BinaryOperatorExpression binaryOperatorExpression, OperatorResolveResult orr)
        {
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, binaryOperatorExpression, orr, method), inline).Emit();
                    return true;
                }
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                {
                    if (orr.IsLiftedOperator)
                    {
                        this.Write(JS.Types.SYSTEM_NULLABLE + ".");

                        string action = JS.Funcs.Math.LIFT;

                        switch (this.BinaryOperatorExpression.Operator)
                        {
                            case BinaryOperatorType.GreaterThan:
                                action = JS.Funcs.Math.LIFTCMP;
                                break;

                            case BinaryOperatorType.GreaterThanOrEqual:
                                action = JS.Funcs.Math.LIFTCMP;
                                break;

                            case BinaryOperatorType.Equality:
                                action = JS.Funcs.Math.LIFTEQ;
                                break;

                            case BinaryOperatorType.InEquality:
                                action = JS.Funcs.Math.LIFTNE;
                                break;

                            case BinaryOperatorType.LessThan:
                                action = JS.Funcs.Math.LIFTCMP;
                                break;

                            case BinaryOperatorType.LessThanOrEqual:
                                action = JS.Funcs.Math.LIFTCMP;
                                break;
                        }

                        this.Write(action + "(");
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

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { binaryOperatorExpression.Left, binaryOperatorExpression.Right }, null).Emit();
                    this.WriteCloseParentheses();

                    return true;
                }
            }

            return false;
        }

        protected void VisitBinaryOperatorExpression()
        {
            BinaryOperatorExpression binaryOperatorExpression = this.BinaryOperatorExpression;
            var resolveOperator = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression, this.Emitter);
            var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression);
            bool isDecimalExpected = Helpers.IsDecimalType(expectedType, this.Emitter.Resolver);
            bool isDecimal = Helpers.IsDecimalType(resolveOperator.Type, this.Emitter.Resolver);
            bool isLongExpected = Helpers.Is64Type(expectedType, this.Emitter.Resolver);
            bool isLong = Helpers.Is64Type(resolveOperator.Type, this.Emitter.Resolver);
            OperatorResolveResult orr = resolveOperator as OperatorResolveResult;
            var leftResolverResult = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Left, this.Emitter);
            var rightResolverResult = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Right, this.Emitter);
            var charToString = -1;
            string variable = null;
            bool leftIsNull = this.BinaryOperatorExpression.Left is NullReferenceExpression;
            bool rightIsNull = this.BinaryOperatorExpression.Right is NullReferenceExpression;
            bool isUint = resolveOperator.Type.IsKnownType(KnownTypeCode.UInt16) ||
                          resolveOperator.Type.IsKnownType(KnownTypeCode.UInt32) ||
                          resolveOperator.Type.IsKnownType(KnownTypeCode.UInt64);
            
            var isFloatResult = Helpers.IsFloatType(resolveOperator.Type, this.Emitter.Resolver);
            var leftExpected = this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left);
            var rightExpected = this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right);
            var strictNullChecks = this.Emitter.AssemblyInfo.StrictNullChecks;

            if (orr != null && orr.Type.IsKnownType(KnownTypeCode.String))
            {
                for (int i = 0; i < orr.Operands.Count; i++)
                {
                    var crr = orr.Operands[i] as ConversionResolveResult;
                    if (crr != null && crr.Input.Type.IsKnownType(KnownTypeCode.Char))
                    {
                        charToString = i;
                    }
                }
            }

            if (resolveOperator is ConstantResolveResult)
            {
                this.WriteScript(((ConstantResolveResult)resolveOperator).ConstantValue);
                return;
            }

            if (!((expectedType.IsKnownType(KnownTypeCode.String) || resolveOperator.Type.IsKnownType(KnownTypeCode.String)) && binaryOperatorExpression.Operator == BinaryOperatorType.Add) && (Helpers.IsDecimalType(leftResolverResult.Type, this.Emitter.Resolver) || Helpers.IsDecimalType(rightResolverResult.Type, this.Emitter.Resolver)))
            {
                isDecimal = true;
                isDecimalExpected = true;
            }

            if (isDecimal && isDecimalExpected && binaryOperatorExpression.Operator != BinaryOperatorType.NullCoalescing)
            {
                this.HandleDecimal(resolveOperator);
                return;
            }
            
            var isLeftLong = Helpers.Is64Type(leftExpected, this.Emitter.Resolver);
            var isRightLong = Helpers.Is64Type(rightExpected, this.Emitter.Resolver);

            if (!((expectedType.IsKnownType(KnownTypeCode.String) || resolveOperator.Type.IsKnownType(KnownTypeCode.String)) && binaryOperatorExpression.Operator == BinaryOperatorType.Add) && (isLeftLong || isRightLong))
            {
                isLong = true;
                isLongExpected = true;    
            }
            
            if (isLong && isLongExpected && binaryOperatorExpression.Operator != BinaryOperatorType.NullCoalescing)
            {
                if (!isFloatResult || binaryOperatorExpression.Operator == BinaryOperatorType.Divide && isLeftLong)
                {
                    this.HandleLong(resolveOperator, isUint);
                    return;
                }
            }

            var delegateOperator = false;

            if (this.ResolveOperator(binaryOperatorExpression, orr))
            {
                return;
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Equality || binaryOperatorExpression.Operator == BinaryOperatorType.InEquality)
            {
                if (leftIsNull || rightIsNull)
                {
                    binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);

                    if (binaryOperatorExpression.Operator == BinaryOperatorType.Equality)
                    {
                        this.Write(strictNullChecks ? " === " : " == ");
                    }
                    else
                    {
                        this.Write(strictNullChecks ? " !== " : " != ");
                    }

                    binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
                    return;
                }
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Divide &&
                !(this.Emitter.IsJavaScriptOverflowMode && !ConversionBlock.InsideOverflowContext(this.Emitter, binaryOperatorExpression)) &&
                (
                    (Helpers.IsIntegerType(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), this.Emitter.Resolver))
                ))
            {
                this.Write(JS.Types.BRIDGE_INT + "." + JS.Funcs.Math.DIV + "(");
                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(", ");
                binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
                this.Write(")");
                return;
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Add ||
                binaryOperatorExpression.Operator == BinaryOperatorType.Subtract)
            {
                var add = binaryOperatorExpression.Operator == BinaryOperatorType.Add;

                if (this.Emitter.Validator.IsDelegateOrLambda(leftResolverResult) && this.Emitter.Validator.IsDelegateOrLambda(rightResolverResult))
                {
                    delegateOperator = true;
                    this.Write(add ? JS.Funcs.BRIDGE_COMBINE : JS.Funcs.BRIDGE_REMOVE);
                    this.WriteOpenParentheses();
                }
            }

            bool nullable = orr != null && orr.IsLiftedOperator;
            bool isCoalescing = binaryOperatorExpression.Operator == BinaryOperatorType.NullCoalescing;
            string root = JS.Types.SYSTEM_NULLABLE + ".";
            bool special = nullable;
            bool rootSpecial = nullable;
            bool isBool = NullableType.IsNullable(resolveOperator.Type) ? NullableType.GetUnderlyingType(resolveOperator.Type).IsKnownType(KnownTypeCode.Boolean) : resolveOperator.Type.IsKnownType(KnownTypeCode.Boolean);
            bool toBool = isBool && !rootSpecial && !delegateOperator && (binaryOperatorExpression.Operator == BinaryOperatorType.BitwiseAnd || binaryOperatorExpression.Operator == BinaryOperatorType.BitwiseOr);
            bool isRefEquals = !isCoalescing && !strictNullChecks &&
                    (binaryOperatorExpression.Operator == BinaryOperatorType.InEquality || binaryOperatorExpression.Operator == BinaryOperatorType.Equality) &&
                    leftExpected.IsReferenceType.HasValue && leftExpected.IsReferenceType.Value &&
                    rightExpected.IsReferenceType.HasValue && rightExpected.IsReferenceType.Value;
            
            if (rootSpecial)
            {
                this.Write(root);
            }
            else if (!isRefEquals)
            {
                if (isCoalescing)
                {
                    this.Write("(");
                    variable = this.GetTempVarName();
                    this.Write(variable);
                    this.Write(" = ");
                }
                else if (charToString == 0)
                {
                    this.Write(JS.Funcs.STRING_FROMCHARCODE + "(");
                }

                if (toBool)
                {
                    this.Write("!!(");
                }

                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);

                if (isCoalescing)
                {
                    this.Write(", ");
                    this.Write(variable);

                    this.Write(strictNullChecks ? " !== null" : " != null");

                    this.Write(" ? ");
                    this.Write(variable);
                }
                else if (charToString == 0)
                {
                    this.Write(")");
                }
            }

            if (isRefEquals)
            {
                if (binaryOperatorExpression.Operator == BinaryOperatorType.InEquality)
                {
                    this.Write("!");
                }
                this.Write(JS.Funcs.BRIDGE_REFERENCEEQUALS);
                special = true;
            }

            if (!delegateOperator)
            {
                if (!special)
                {
                    this.WriteSpace();
                }
                
                switch (binaryOperatorExpression.Operator)
                {
                    case BinaryOperatorType.Add:
                        this.Write(rootSpecial ? JS.Funcs.Math.ADD : "+");
                        break;

                    case BinaryOperatorType.BitwiseAnd:
                        if (isBool)
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.AND : "&");
                        }
                        else
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.BAND : "&");
                        }

                        break;

                    case BinaryOperatorType.BitwiseOr:
                        if (isBool)
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.OR : "|");
                        }
                        else
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.BOR : "|");
                        }
                        break;

                    case BinaryOperatorType.ConditionalAnd:
                        this.Write(rootSpecial ? JS.Funcs.Math.AND : "&&");
                        break;

                    case BinaryOperatorType.NullCoalescing:
                        this.Write(":");
                        break;

                    case BinaryOperatorType.ConditionalOr:
                        this.Write(rootSpecial ? JS.Funcs.Math.OR : "||");
                        break;

                    case BinaryOperatorType.Divide:
                        this.Write(rootSpecial ? JS.Funcs.Math.DIV : "/");
                        break;

                    case BinaryOperatorType.Equality:
                        if (!isRefEquals)
                        {
                            this.Write(rootSpecial ? "eq" : "===");    
                        }
                        
                        break;

                    case BinaryOperatorType.ExclusiveOr:
                        this.Write(rootSpecial ? JS.Funcs.Math.XOR : "^");
                        break;

                    case BinaryOperatorType.GreaterThan:
                        this.Write(rootSpecial ? JS.Funcs.Math.GT : ">");
                        break;

                    case BinaryOperatorType.GreaterThanOrEqual:
                        this.Write(rootSpecial ? JS.Funcs.Math.GTE : ">=");
                        break;

                    case BinaryOperatorType.InEquality:
                        if (!isRefEquals)
                        {
                            this.Write(rootSpecial ? "neq" : "!==");
                        }
                        break;

                    case BinaryOperatorType.LessThan:
                        this.Write(rootSpecial ? JS.Funcs.Math.LT : "<");
                        break;

                    case BinaryOperatorType.LessThanOrEqual:
                        this.Write(rootSpecial ? JS.Funcs.Math.LTE : "<=");
                        break;

                    case BinaryOperatorType.Modulus:
                        this.Write(rootSpecial ? JS.Funcs.Math.MOD : "%");
                        break;

                    case BinaryOperatorType.Multiply:
                        this.Write(rootSpecial ? JS.Funcs.Math.MUL : "*");
                        break;

                    case BinaryOperatorType.ShiftLeft:
                        this.Write(rootSpecial ? JS.Funcs.Math.SL : "<<");
                        break;

                    case BinaryOperatorType.ShiftRight:
                        if (isUint)
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.SRR : ">>>");
                        }
                        else
                        {
                            this.Write(rootSpecial ? JS.Funcs.Math.SR : ">>");
                        }

                        break;

                    case BinaryOperatorType.Subtract:
                        this.Write(rootSpecial ? JS.Funcs.Math.SUB : "-");
                        break;

                    default:
                        throw new EmitterException(binaryOperatorExpression, "Unsupported binary operator: " + binaryOperatorExpression.Operator.ToString());
                }
            }
            else
            {
                this.WriteComma();
            }

            if (special)
            {
                this.WriteOpenParentheses();
                if (charToString == 0)
                {
                    this.Write(JS.Funcs.STRING_FROMCHARCODE + "(");
                }

                binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);

                if (charToString == 0)
                {
                    this.Write(")");
                }

                this.WriteComma();
            }
            else
            {
                this.WriteSpace();
            }

            if (charToString == 1)
            {
                this.Write(JS.Funcs.STRING_FROMCHARCODE + "(");
            }

            binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);

            if (toBool)
            {
                this.WriteCloseParentheses();
            }

            if (charToString == 1 || isCoalescing)
            {
                this.WriteCloseParentheses();
            }

            if (delegateOperator || special)
            {
                this.WriteCloseParentheses();
            }
        }

        private void HandleType(ResolveResult resolveOperator, KnownTypeCode typeCode, string op_name, string action)
        {
            var orr = resolveOperator as OperatorResolveResult;
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (orr != null && method == null)
            {
                var name = Helpers.GetBinaryOperatorMethodName(this.BinaryOperatorExpression.Operator);
                var type = this.Emitter.Resolver.Compilation.FindType(typeCode);
                method = type.GetMethods(m => m.Name == name, GetMemberOptions.IgnoreInheritedMembers).FirstOrDefault();
            }

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (orr.IsLiftedOperator)
                {
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    new ExpressionListBlock(this.Emitter,
                        new Expression[] {this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right}, null)
                        .Emit();
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
                else if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, this.BinaryOperatorExpression, orr, method), inline).Emit();
                }
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] {this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right}, null)
                        .Emit();
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
            }
            else
            {
                if (orr.IsLiftedOperator)
                {
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right }, null)
                        .Emit();
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
                else
                {
                    this.BinaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                    this.WriteDot();
                    this.Write(op_name);
                    this.WriteOpenParentheses();
                    this.BinaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();    
                }
            }
        }

        private void AddOveflowFlag(KnownTypeCode typeCode, string op_name)
        {
            if ((typeCode == KnownTypeCode.Int64 || typeCode == KnownTypeCode.UInt64) && ConversionBlock.IsInCheckedContext(this.Emitter, this.BinaryOperatorExpression))
            {
                if (op_name == JS.Funcs.Math.ADD || op_name == JS.Funcs.Math.SUB || op_name == JS.Funcs.Math.MUL)
                {
                    this.Write(", 1");
                }
            }
        }

        private void HandleDecimal(ResolveResult resolveOperator)
        {
            string action = JS.Funcs.Math.LIFT2;
            string op_name = null;

            switch (this.BinaryOperatorExpression.Operator)
            {
                case BinaryOperatorType.GreaterThan:
                    op_name = JS.Funcs.Math.GT;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.GreaterThanOrEqual:
                    op_name = JS.Funcs.Math.GTE;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.Equality:
                    op_name = JS.Funcs.Math.EQUALS;
                    action = JS.Funcs.Math.LIFTEQ;
                    break;

                case BinaryOperatorType.InEquality:
                    op_name = JS.Funcs.Math.NE;
                    action = JS.Funcs.Math.LIFTNE;
                    break;

                case BinaryOperatorType.LessThan:
                    op_name = JS.Funcs.Math.LT;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.LessThanOrEqual:
                    op_name = JS.Funcs.Math.LTE;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.Add:
                    op_name = JS.Funcs.Math.ADD;
                    break;

                case BinaryOperatorType.Subtract:
                    op_name = JS.Funcs.Math.SUB;
                    break;

                case BinaryOperatorType.Multiply:
                    op_name = JS.Funcs.Math.MUL;
                    break;

                case BinaryOperatorType.Divide:
                    op_name = JS.Funcs.Math.DIV;
                    break;

                case BinaryOperatorType.Modulus:
                    op_name = JS.Funcs.Math.MOD;
                    break;

                default:
                    throw new ArgumentOutOfRangeException();
            }

            this.HandleType(resolveOperator, KnownTypeCode.Decimal,  op_name, action);
        }

        private void HandleLong(ResolveResult resolveOperator, bool isUint)
        {
            string action = JS.Funcs.Math.LIFT2;
            string op_name = null;

            switch (this.BinaryOperatorExpression.Operator)
            {
                case BinaryOperatorType.GreaterThan:
                    op_name = JS.Funcs.Math.GT;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.GreaterThanOrEqual:
                    op_name = JS.Funcs.Math.GTE;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.Equality:
                    op_name = JS.Funcs.Math.EQUALS;
                    action = JS.Funcs.Math.LIFTEQ;
                    break;

                case BinaryOperatorType.InEquality:
                    op_name = JS.Funcs.Math.NE;
                    action = JS.Funcs.Math.LIFTNE;
                    break;

                case BinaryOperatorType.LessThan:
                    op_name = JS.Funcs.Math.LT;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.LessThanOrEqual:
                    op_name = JS.Funcs.Math.LTE;
                    action = JS.Funcs.Math.LIFTCMP;
                    break;

                case BinaryOperatorType.Add:
                    op_name = JS.Funcs.Math.ADD;
                    break;

                case BinaryOperatorType.Subtract:
                    op_name = JS.Funcs.Math.SUB;
                    break;

                case BinaryOperatorType.Multiply:
                    op_name = JS.Funcs.Math.MUL;
                    break;

                case BinaryOperatorType.Divide:
                    op_name = JS.Funcs.Math.DIV;
                    if (Helpers.IsFloatType(resolveOperator.Type, this.Emitter.Resolver))
                    {
                        op_name = "JS.Funcs.Math.TO_NUMBER_DIVIDED";
                    }
                    break;

                case BinaryOperatorType.Modulus:
                    op_name = JS.Funcs.Math.MOD;
                    break;

                case BinaryOperatorType.BitwiseAnd:
                    op_name = JS.Funcs.Math.AND;
                    break;

                case BinaryOperatorType.BitwiseOr:
                    op_name = JS.Funcs.Math.OR;
                    break;

                case BinaryOperatorType.ExclusiveOr:
                    op_name = JS.Funcs.Math.XOR;
                    break;

                case BinaryOperatorType.ShiftLeft:
                    op_name = JS.Funcs.Math.SHL;
                    break;

                case BinaryOperatorType.ShiftRight:
                    op_name = isUint ? JS.Funcs.Math.SHRU : JS.Funcs.Math.SHR;
                    break;

                default:
                    throw new ArgumentOutOfRangeException();
            }

            this.HandleType(resolveOperator, isUint ? KnownTypeCode.UInt64  : KnownTypeCode.Int64, op_name, action);
        }
    }
}
