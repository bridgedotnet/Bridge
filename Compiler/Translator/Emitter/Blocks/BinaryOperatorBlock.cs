using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using Expression = ICSharpCode.NRefactory.CSharp.Expression;

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

        public List<IAsyncStep> EmittedAsyncSteps
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

        internal void WriteAsyncBinaryExpression(int index)
        {
            if (this.Emitter.AsyncBlock.WrittenAwaitExpressions.Contains(this.BinaryOperatorExpression))
            {
                return;
            }

            this.Emitter.AsyncBlock.WrittenAwaitExpressions.Add(this.BinaryOperatorExpression);

            this.WriteAwaiters(this.BinaryOperatorExpression.Left);

            this.WriteIf();
            this.WriteOpenParentheses();

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;
            this.Emitter.ReplaceAwaiterByVar = true;
            this.Emitter.AsyncExpressionHandling = true;

            var isOr = this.BinaryOperatorExpression.Operator == BinaryOperatorType.BitwiseOr ||
                        this.BinaryOperatorExpression.Operator == BinaryOperatorType.ConditionalOr;

            if (isOr)
            {
                this.Write("!");
            }

            this.BinaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

            int startCount = 0;
            IAsyncStep trueStep = null;
            startCount = this.Emitter.AsyncBlock.Steps.Count;

            this.EmittedAsyncSteps = this.Emitter.AsyncBlock.EmittedAsyncSteps;
            this.Emitter.AsyncBlock.EmittedAsyncSteps = new List<IAsyncStep>();

            var taskResultVar = JS.Vars.ASYNC_TASK_RESULT + index;
            if (!this.Emitter.Locals.ContainsKey(taskResultVar))
            {
                this.AddLocal(taskResultVar, null, AstType.Null);
            }

            this.WriteSpace();
            this.BeginBlock();
            this.Write($"{JS.Vars.ASYNC_STEP} = {this.Emitter.AsyncBlock.Step};");
            this.WriteNewLine();
            this.Write("continue;");
            var writer = this.SaveWriter();
            this.Emitter.AsyncBlock.AddAsyncStep();

            this.WriteAwaiters(this.BinaryOperatorExpression.Right);

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;
            this.Emitter.ReplaceAwaiterByVar = true;
            this.Emitter.AsyncExpressionHandling = true;
            this.Write(taskResultVar + " = ");
            this.BinaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
            this.WriteSemiColon();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

            if (this.Emitter.AsyncBlock.Steps.Count > startCount)
            {
                trueStep = this.Emitter.AsyncBlock.Steps.Last();
            }

            if (this.RestoreWriter(writer) && !this.IsOnlyWhitespaceOnPenultimateLine(true))
            {
                this.WriteNewLine();
            }

            this.EndBlock();

            this.WriteNewLine();
            this.Write($"{taskResultVar} = {(isOr ? "true" : "false")};");
            this.WriteNewLine();
            this.Write($"{JS.Vars.ASYNC_STEP} = {this.Emitter.AsyncBlock.Step};");
            this.WriteNewLine();
            this.Write("continue;");
            var nextStep = this.Emitter.AsyncBlock.AddAsyncStep();

            if (trueStep != null)
            {
                trueStep.JumpToStep = nextStep.Step;
            }

            this.Emitter.AsyncBlock.EmittedAsyncSteps = this.EmittedAsyncSteps;
        }

        private IMethod FindOperatorTrueOrFalse(IType type, bool findTrue)
        {
            var isNullable = NullableType.IsNullable(type);
            if (isNullable)
            {
                type = NullableType.GetUnderlyingType(type);
            }

            return (IMethod)type.GetMethods(null, GetMemberOptions.IgnoreInheritedMembers).Single(m => m.Name == (findTrue ? "op_True" : "op_False") && m.Parameters.Count == 1 && NullableType.IsNullable(m.Parameters[0].Type) == isNullable);
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
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    bool addClose = false;
                    string leftInterfaceTempVar = null;

                    if (orr.OperatorType == ExpressionType.OrElse || orr.OperatorType == ExpressionType.AndAlso)
                    {
                        var orElse = orr.OperatorType == ExpressionType.OrElse;
                        var left = orr.Operands[0];
                        var memberTargetrr = left as MemberResolveResult;
                        bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                                       (memberTargetrr.TargetResult is ThisResolveResult ||
                                        memberTargetrr.TargetResult is LocalResolveResult);

                        if (!(left is ThisResolveResult || left is TypeResolveResult || left is LocalResolveResult || left is ConstantResolveResult || isField))
                        {
                            this.WriteOpenParentheses();

                            leftInterfaceTempVar = this.GetTempVarName();
                            this.Write(leftInterfaceTempVar);
                            this.Write(" = ");

                            binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);

                            this.WriteComma();

                            addClose = true;
                        }

                        var m = FindOperatorTrueOrFalse(left.Type, orElse);

                        this.Write(BridgeTypes.ToJsName(m.DeclaringType, this.Emitter));
                        this.WriteDot();
                        this.Write(OverloadsCollection.Create(this.Emitter, m).GetOverloadName());

                        this.WriteOpenParentheses();

                        if (leftInterfaceTempVar != null)
                        {
                            this.Write(leftInterfaceTempVar);
                        }
                        else
                        {
                            binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                        }

                        this.WriteCloseParentheses();

                        this.Write(" ? ");

                        if (leftInterfaceTempVar != null)
                        {
                            this.Write(leftInterfaceTempVar);
                        }
                        else
                        {
                            binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                        }

                        this.Write(" : ");
                    }

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

                    if (leftInterfaceTempVar != null)
                    {
                        this.Write(leftInterfaceTempVar);
                        this.Write(", ");
                        binaryOperatorExpression.Right.AcceptVisitor(this.Emitter);
                    }
                    else
                    {
                        new ExpressionListBlock(this.Emitter,
                        new Expression[] { binaryOperatorExpression.Left, binaryOperatorExpression.Right }, null, null, 0).Emit();
                    }

                    this.WriteCloseParentheses();

                    if (addClose)
                    {
                        this.WriteCloseParentheses();
                    }

                    return true;
                }
            }

            return false;
        }

        public static bool IsOperatorSimple(BinaryOperatorExpression binaryOperatorExpression, IEmitter emitter)
        {
            var leftResolverResult = emitter.Resolver.ResolveNode(binaryOperatorExpression.Left, emitter);
            var rightResolverResult = emitter.Resolver.ResolveNode(binaryOperatorExpression.Right, emitter);
            bool leftIsSimple = binaryOperatorExpression.Left is PrimitiveExpression ||
                                 leftResolverResult.Type.IsReferenceType != null && !leftResolverResult.Type.IsReferenceType.Value;

            bool rightIsSimple = binaryOperatorExpression.Right is PrimitiveExpression ||
                                 rightResolverResult.Type.IsReferenceType != null && !rightResolverResult.Type.IsReferenceType.Value;

            bool isSimpleConcat = leftIsSimple && rightIsSimple;

            if (!isSimpleConcat)
            {
                var be = binaryOperatorExpression.Left as BinaryOperatorExpression;
                leftIsSimple = be != null ? BinaryOperatorBlock.IsOperatorSimple(be, emitter) : leftIsSimple;

                be = binaryOperatorExpression.Right as BinaryOperatorExpression;
                rightIsSimple = be != null ? BinaryOperatorBlock.IsOperatorSimple(be, emitter) : rightIsSimple;
                isSimpleConcat = leftIsSimple && rightIsSimple;
            }

            return isSimpleConcat;
        }

        protected void VisitBinaryOperatorExpression()
        {
            BinaryOperatorExpression binaryOperatorExpression = this.BinaryOperatorExpression;

            if (this.Emitter.IsAsync && this.GetAwaiters(binaryOperatorExpression).Length > 0)
            {
                if (this.Emitter.AsyncBlock.WrittenAwaitExpressions.Contains(binaryOperatorExpression))
                {
                    var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, binaryOperatorExpression) + 1;
                    this.Write(JS.Vars.ASYNC_TASK_RESULT + index);
                }
                else
                {
                    var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, binaryOperatorExpression) + 1;
                    this.WriteAsyncBinaryExpression(index);
                }

                return;
            }

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

            var resultIsString = expectedType.IsKnownType(KnownTypeCode.String) || resolveOperator.Type.IsKnownType(KnownTypeCode.String);
            var isStringConcat = resultIsString && binaryOperatorExpression.Operator == BinaryOperatorType.Add;
            var toStringForLeft = false;
            var toStringForRight = false;

            var parentBinary = binaryOperatorExpression.Parent as BinaryOperatorExpression;
            bool parentIsString = resultIsString && parentBinary != null && parentBinary.Operator == BinaryOperatorType.Add;

            if (parentIsString)
            {
                var parentResolveOperator = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Parent, this.Emitter) as OperatorResolveResult;

                if (parentResolveOperator != null && parentResolveOperator.UserDefinedOperatorMethod != null)
                {
                    parentIsString = false;
                }
            }

            bool isSimpleConcat = isStringConcat && BinaryOperatorBlock.IsOperatorSimple(binaryOperatorExpression, this.Emitter);

            if (charToString == -1 && isStringConcat && !leftResolverResult.Type.IsKnownType(KnownTypeCode.String))
            {
                toStringForLeft = true;
            }

            if (charToString == -1 && isStringConcat && !rightResolverResult.Type.IsKnownType(KnownTypeCode.String))
            {
                toStringForRight = true;
            }

            if (!isStringConcat && (Helpers.IsDecimalType(leftResolverResult.Type, this.Emitter.Resolver) || Helpers.IsDecimalType(rightResolverResult.Type, this.Emitter.Resolver)))
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

            if (!isLeftLong && !isRightLong)
            {
                if (leftExpected.Kind == TypeKind.Enum && Helpers.Is64Type(leftExpected.GetDefinition().EnumUnderlyingType, this.Emitter.Resolver))
                {
                    isLeftLong = true;
                }

                if (rightExpected.Kind == TypeKind.Enum && Helpers.Is64Type(rightExpected.GetDefinition().EnumUnderlyingType, this.Emitter.Resolver))
                {
                    isRightLong = true;
                }
            }

            if (!(resultIsString && binaryOperatorExpression.Operator == BinaryOperatorType.Add) && (isLeftLong || isRightLong))
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
                    this.WritePart(binaryOperatorExpression.Left, toStringForLeft, leftResolverResult);

                    if (binaryOperatorExpression.Operator == BinaryOperatorType.Equality)
                    {
                        this.Write(strictNullChecks ? " === " : " == ");
                    }
                    else
                    {
                        this.Write(strictNullChecks ? " !== " : " != ");
                    }

                    this.WritePart(binaryOperatorExpression.Right, toStringForRight, rightResolverResult);
                    return;
                }
            }

            var insideOverflowContext = ConversionBlock.InsideOverflowContext(this.Emitter, binaryOperatorExpression);
            if (binaryOperatorExpression.Operator == BinaryOperatorType.Divide &&
                !(this.Emitter.IsJavaScriptOverflowMode && !insideOverflowContext) &&
                (
                    (Helpers.IsIntegerType(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), this.Emitter.Resolver))
                ))
            {
                this.Write(JS.Types.BRIDGE_INT + "." + JS.Funcs.Math.DIV + "(");
                this.WritePart(binaryOperatorExpression.Left, toStringForLeft, leftResolverResult);
                this.Write(", ");
                this.WritePart(binaryOperatorExpression.Right, toStringForRight, rightResolverResult);
                this.Write(")");
                return;
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Multiply &&
                !(this.Emitter.IsJavaScriptOverflowMode && !insideOverflowContext) &&
                (
                    (Helpers.IsInteger32Type(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(rightResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(resolveOperator.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsInteger32Type(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(this.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(resolveOperator.Type, this.Emitter.Resolver))
                ))
            {
                isUint = NullableType.GetUnderlyingType(resolveOperator.Type).IsKnownType(KnownTypeCode.UInt32);
                this.Write(JS.Types.BRIDGE_INT + "." + (isUint ? JS.Funcs.Math.UMUL : JS.Funcs.Math.MUL) + "(");
                this.WritePart(binaryOperatorExpression.Left, toStringForLeft, leftResolverResult);
                this.Write(", ");
                this.WritePart(binaryOperatorExpression.Right, toStringForRight, rightResolverResult);

                if (ConversionBlock.IsInCheckedContext(this.Emitter, this.BinaryOperatorExpression))
                {
                    this.Write(", 1");
                }

                this.Write(")");
                return;
            }

            if (binaryOperatorExpression.Operator == BinaryOperatorType.Add ||
                binaryOperatorExpression.Operator == BinaryOperatorType.Subtract)
            {
                var add = binaryOperatorExpression.Operator == BinaryOperatorType.Add;

                if (expectedType.Kind == TypeKind.Delegate || this.Emitter.Validator.IsDelegateOrLambda(leftResolverResult) && this.Emitter.Validator.IsDelegateOrLambda(rightResolverResult))
                {
                    delegateOperator = true;
                    this.Write(add ? JS.Funcs.BRIDGE_COMBINE : JS.Funcs.BRIDGE_REMOVE);
                    this.WriteOpenParentheses();
                }
            }

            if (isStringConcat && !parentIsString && !isSimpleConcat)
            {
                this.Write(JS.Types.System.String.CONCAT);
                this.WriteOpenParentheses();
            }

            bool nullable = orr != null && orr.IsLiftedOperator;
            bool isCoalescing = (this.Emitter.AssemblyInfo.StrictNullChecks ||
                                 NullableType.IsNullable(leftResolverResult.Type) ||
                                 leftResolverResult.Type.IsKnownType(KnownTypeCode.String) ||
                                 leftResolverResult.Type.IsKnownType(KnownTypeCode.Object)
                                ) && binaryOperatorExpression.Operator == BinaryOperatorType.NullCoalescing;
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

                this.WritePart(binaryOperatorExpression.Left, toStringForLeft, leftResolverResult, isCoalescing);

                if (isCoalescing)
                {
                    this.Write(", ");
                    this.Write(variable);

                    this.Write(strictNullChecks ? " !== null" : " != null");

                    this.Write(" ? ");

                    ConversionBlock.expressionMap.Add(binaryOperatorExpression.Left, variable);
                    //this.Write(variable);
                    binaryOperatorExpression.Left.AcceptVisitor(this.Emitter);
                    ConversionBlock.expressionMap.Remove(binaryOperatorExpression.Left);
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

            if (!delegateOperator && (!isStringConcat || isSimpleConcat))
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
                        this.Write(isCoalescing ? ":" : "||");
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

                this.WritePart(binaryOperatorExpression.Left, toStringForLeft, leftResolverResult);

                if (charToString == 0)
                {
                    this.Write(")");
                }

                this.WriteComma();
            }
            else if (!delegateOperator && (!isStringConcat || isSimpleConcat))
            {
                this.WriteSpace();
            }

            if (charToString == 1)
            {
                this.Write(JS.Funcs.STRING_FROMCHARCODE + "(");
            }

            this.WritePart(binaryOperatorExpression.Right, toStringForRight, rightResolverResult);

            if (toBool)
            {
                this.WriteCloseParentheses();
            }

            if (charToString == 1 || isCoalescing)
            {
                this.WriteCloseParentheses();
            }

            if (delegateOperator || special || isStringConcat && !parentIsString && !isSimpleConcat)
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
                        new Expression[] { this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right }, null, null, 0)
                        .Emit();
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
                else if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, this.BinaryOperatorExpression, orr, method), inline).Emit();
                }
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right }, null, null, 0)
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
                        new Expression[] { this.BinaryOperatorExpression.Left, this.BinaryOperatorExpression.Right }, null, null, 0)
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

            this.HandleType(resolveOperator, KnownTypeCode.Decimal, op_name, action);
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

            this.HandleType(resolveOperator, isUint ? KnownTypeCode.UInt64 : KnownTypeCode.Int64, op_name, action);
        }

        private void WritePart(Expression expression, bool toString, ResolveResult rr, bool isCoalescing = false)
        {
            if (isCoalescing)
            {
                ConversionBlock.expressionInWork.Add(expression);
            }

            if (toString)
            {
                var toStringMethod = rr.Type.GetMembers().FirstOrDefault(m =>
                {
                    if (m.Name == "ToString" && !m.IsStatic && m.ReturnType.IsKnownType(KnownTypeCode.String) && m.IsOverride)
                    {
                        var method = m as IMethod;

                        if (method != null && method.Parameters.Count == 0 && method.TypeParameters.Count == 0)
                        {
                            return true;
                        }
                    }

                    return false;
                });

                if (toStringMethod != null)
                {
                    var inline = this.Emitter.GetInline(toStringMethod);

                    if (inline != null)
                    {
                        var writer = new Writer
                        {
                            InlineCode = inline,
                            Output = this.Emitter.Output,
                            IsNewLine = this.Emitter.IsNewLine
                        };
                        this.Emitter.IsNewLine = false;
                        this.Emitter.Output = new StringBuilder();

                        expression.AcceptVisitor(this.Emitter);

                        string result = this.Emitter.Output.ToString();
                        this.Emitter.Output = writer.Output;
                        this.Emitter.IsNewLine = writer.IsNewLine;

                        var argsInfo = new ArgumentsInfo(this.Emitter, expression, (IMethod)toStringMethod);
                        argsInfo.ArgumentsExpressions = new Expression[] { expression };
                        argsInfo.ArgumentsNames = new string[] { "this" };
                        argsInfo.ThisArgument = result;
                        new InlineArgumentsBlock(this.Emitter, argsInfo, writer.InlineCode).Emit();
                        return;
                    }
                }

                expression.AcceptVisitor(this.Emitter);
            }
            else
            {
                expression.AcceptVisitor(this.Emitter);
            }

            if (isCoalescing)
            {
                ConversionBlock.expressionInWork.Remove(expression);
            }
        }
    }
}