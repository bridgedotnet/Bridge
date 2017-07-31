using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

using System;

namespace Bridge.Translator
{
    public abstract partial class ConversionBlock
    {
        private static readonly bool[,] _needNarrowingConversion = {
            /*                 Char    SByte     Byte    Int16   UInt16    Int32   UInt32    Int64   UInt64   Single   Double  Decimal
            /*    Char */ {   false,    true,    true,    true,   false,   false,   false,   false,   false,   false,   false,   false },
            /*   SByte */ {    true,   false,    true,   false,    true,   false,    true,   false,    true,   false,   false,   false },
            /*    Byte */ {   false,    true,   false,   false,   false,   false,   false,   false,   false,   false,   false,   false },
            /*   Int16 */ {    true,    true,    true,   false,    true,   false,    true,   false,    true,   false,   false,   false },
            /*  UInt16 */ {   false,    true,    true,    true,   false,   false,   false,   false,   false,   false,   false,   false },
            /*   Int32 */ {    true,    true,    true,    true,    true,   false,    true,   false,    true,   false,   false,   false },
            /*  UInt32 */ {    true,    true,    true,    true,    true,    true,   false,   false,   false,   false,   false,   false },
            /*   Int64 */ {    true,    true,    true,    true,    true,    true,    true,   false,    true,   false,   false,   false },
            /*  UInt64 */ {    true,    true,    true,    true,    true,    true,    true,    true,   false,   false,   false,   false },
            /*  Single */ {    true,    true,    true,    true,    true,    true,    true,    true,    true,   false,   false,   false },
            /*  Double */ {    true,    true,    true,    true,    true,    true,    true,    true,    true,   false,   false,   false },
            /* Decimal */ {    true,    true,    true,    true,    true,    true,    true,    true,    true,   false,   false,   false },
        };

        private static void CheckNumericConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion)
        {
            var fromType = rr.Type;
            var toType = expectedType;

            if (fromType.Kind == TypeKind.Enum)
            {
                fromType = fromType.GetDefinition().EnumUnderlyingType;
            }

            if (toType.Kind == TypeKind.Enum)
            {
                toType = toType.GetDefinition().EnumUnderlyingType;
            }

            bool isArrayIndex = false;
            if (Helpers.Is64Type(toType, block.Emitter.Resolver) && expression.Parent is IndexerExpression &&
                ((IndexerExpression)expression.Parent).Arguments.Contains(expression))
            {
                var memberResolveResult = rr as MemberResolveResult;
                var isIgnore = true;
                var isAccessorsIndexer = false;
                IProperty member = null;
                IndexerAccessor current = null;

                if (memberResolveResult == null)
                {
                    memberResolveResult = block.Emitter.Resolver.ResolveNode(expression.Parent, block.Emitter) as MemberResolveResult;
                }

                if (memberResolveResult != null)
                {
                    var resolvedMember = memberResolveResult.Member;
                    isIgnore = block.Emitter.Validator.IsExternalType(resolvedMember.DeclaringTypeDefinition);
                    isAccessorsIndexer = block.Emitter.Validator.IsAccessorsIndexer(resolvedMember);

                    var property = resolvedMember as IProperty;
                    if (property != null)
                    {
                        member = property;
                        current = IndexerBlock.GetIndexerAccessor(block.Emitter, member, block.Emitter.IsAssignment);
                    }
                }

                if (!(current != null && current.InlineAttr != null) && !(!(isIgnore || (current != null && current.IgnoreAccessor)) || isAccessorsIndexer))
                {
                    block.Write(JS.Types.System.Int64.TONUMBER);
                    block.Write("(");
                    isArrayIndex = true;
                }
            }

            if ((conversion.IsNumericConversion || conversion.IsEnumerationConversion) && conversion.IsExplicit)
            {
                if (!(expression.Parent is ArrayInitializerExpression) &&
                     Helpers.Is64Type(fromType, block.Emitter.Resolver) &&
                     Helpers.IsFloatType(toType, block.Emitter.Resolver) &&
                     !Helpers.IsDecimalType(toType, block.Emitter.Resolver))
                {
                    var be = expression.Parent as BinaryOperatorExpression;

                    if (be == null || be.Operator != BinaryOperatorType.Divide || be.Left != expression)
                    {
                        block.Write(JS.Types.System.Int64.TONUMBER);
                        block.Write("(");
                        block.AfterOutput += ")";
                    }
                }
                else if (Helpers.IsDecimalType(toType, block.Emitter.Resolver) && !Helpers.IsDecimalType(fromType, block.Emitter.Resolver))
                {
                    block.Write(JS.Types.SYSTEM_DECIMAL + "(");
                    block.AfterOutput += ", null, " + BridgeTypes.ToJsName(fromType, block.Emitter) + ")";
                }
                else if (Helpers.IsDecimalType(fromType, block.Emitter.Resolver))
                {
                    ClipDecimal(expression, block, toType);
                }
                else if (Helpers.Is64Type(fromType, block.Emitter.Resolver))
                {
                    CheckLong(block, expression, toType, fromType, IsInCheckedContext(block.Emitter, expression));
                }
                else if (Helpers.IsFloatType(fromType, block.Emitter.Resolver) && Helpers.IsIntegerType(toType, block.Emitter.Resolver))
                {
                    FloatToInt(block, expression, fromType, toType, IsInCheckedContext(block.Emitter, expression));
                }
                else if (NeedsNarrowingNumericConversion(fromType, toType))
                {
                    if (IsInCheckedContext(block.Emitter, expression))
                    {
                        CheckInteger(block, expression, toType);
                    }
                    else
                    {
                        ClipInteger(block, expression, toType, true);
                    }
                }
            }
            else if (conversion.IsNumericConversion && conversion.IsImplicit && !(expression.Parent is ArrayInitializerExpression) &&
                     Helpers.Is64Type(fromType, block.Emitter.Resolver) &&
                     Helpers.IsFloatType(toType, block.Emitter.Resolver) &&
                     !Helpers.IsDecimalType(toType, block.Emitter.Resolver))
            {
                var be = expression.Parent as BinaryOperatorExpression;

                if (be == null || be.Operator != BinaryOperatorType.Divide || be.Left != expression)
                {
                    block.Write(JS.Types.System.Int64.TONUMBER);
                    block.Write("(");
                    block.AfterOutput += ")";
                }
            }
            else if (((!Helpers.Is64Type(toType, block.Emitter.Resolver) && Helpers.IsIntegerType(toType, block.Emitter.Resolver)) ||
                     (rr is OperatorResolveResult && !Helpers.Is64Type(fromType, block.Emitter.Resolver) && Helpers.IsIntegerType(fromType, block.Emitter.Resolver))) &&
                     (expression is BinaryOperatorExpression || expression is UnaryOperatorExpression || expression.Parent is AssignmentExpression) &&
                     IsInCheckedContext(block.Emitter, expression))
            {
                var needCheck = false;

                var be = expression as BinaryOperatorExpression;
                bool isBitwiseOperator = be != null && (be.Operator == BinaryOperatorType.ShiftLeft || be.Operator == BinaryOperatorType.ShiftRight || be.Operator == BinaryOperatorType.BitwiseAnd || be.Operator == BinaryOperatorType.BitwiseOr || be.Operator == BinaryOperatorType.ExclusiveOr);
                if ((Helpers.IsKnownType(KnownTypeCode.Int32, toType, block.Emitter.Resolver) && isBitwiseOperator) || (Helpers.IsKnownType(KnownTypeCode.UInt32, toType, block.Emitter.Resolver) && be != null && be.Operator == BinaryOperatorType.ShiftRight))
                {
                    // Don't need to check even in checked context and don't need to clip
                }
                else if (be != null && (be.Operator == BinaryOperatorType.Add ||
                    be.Operator == BinaryOperatorType.Divide ||
                    be.Operator == BinaryOperatorType.Multiply ||
                    isBitwiseOperator ||
                    be.Operator == BinaryOperatorType.Subtract))
                {
                    if (isBitwiseOperator)
                    {
                        ClipInteger(block, expression, toType, false);
                    }
                    else
                    {
                        needCheck = true;
                    }
                }
                else
                {
                    var ue = expression as UnaryOperatorExpression;

                    if (ue != null && (ue.Operator == UnaryOperatorType.Minus ||
                                       ue.Operator == UnaryOperatorType.Increment ||
                                       ue.Operator == UnaryOperatorType.Decrement ||
                                       ue.Operator == UnaryOperatorType.PostIncrement ||
                                       ue.Operator == UnaryOperatorType.PostDecrement))
                    {
                        needCheck = true;
                    }
                    else
                    {
                        var ae = expression.Parent as AssignmentExpression;
                        isBitwiseOperator = ae != null && (ae.Operator == AssignmentOperatorType.ShiftRight || ae.Operator == AssignmentOperatorType.ShiftLeft || ae.Operator == AssignmentOperatorType.BitwiseAnd || ae.Operator == AssignmentOperatorType.BitwiseOr || ae.Operator == AssignmentOperatorType.ExclusiveOr);
                        if ((isBitwiseOperator && Helpers.IsKnownType(KnownTypeCode.Int32, toType, block.Emitter.Resolver))
                            || (ae != null && ae.Operator == AssignmentOperatorType.ShiftRight && Helpers.IsKnownType(KnownTypeCode.UInt32, toType, block.Emitter.Resolver)))
                        {
                            // Don't need to check even in checked context and don't need to clip
                        }
                        else if (ae != null && (isBitwiseOperator || ae.Operator == AssignmentOperatorType.Add ||
                                           ae.Operator == AssignmentOperatorType.Divide ||
                                           ae.Operator == AssignmentOperatorType.Multiply ||
                                           ae.Operator == AssignmentOperatorType.Subtract))
                        {
                            if (isBitwiseOperator)
                            {
                                ClipInteger(block, expression, toType, false);
                            }
                            else
                            {
                                needCheck = true;
                            }
                        }
                    }
                }

                if (!Helpers.IsIntegerType(toType, block.Emitter.Resolver))
                {
                    if (rr is OperatorResolveResult)
                    {
                        toType = fromType;
                    }
                }

                if (needCheck)
                {
                    CheckInteger(block, expression, toType);
                }
            }
            else if (((!Helpers.Is64Type(toType, block.Emitter.Resolver) && Helpers.IsIntegerType(toType, block.Emitter.Resolver)) ||
                     (rr is OperatorResolveResult && !Helpers.Is64Type(fromType, block.Emitter.Resolver) && Helpers.IsIntegerType(fromType, block.Emitter.Resolver))) &&
                     (expression is BinaryOperatorExpression || expression is UnaryOperatorExpression || expression.Parent is AssignmentExpression) &&
                     IsInUncheckedContext(block.Emitter, expression))
            {
                if (ConversionBlock.IsLongConversion(block, expression, rr, toType, conversion) || rr is ConstantResolveResult)
                {
                    return;
                }

                if (!Helpers.IsIntegerType(toType, block.Emitter.Resolver))
                {
                    if (rr is OperatorResolveResult)
                    {
                        toType = fromType;
                    }
                }

                var needCheck = false;

                var be = expression as BinaryOperatorExpression;
                bool isBitwiseOperator = be != null && (be.Operator == BinaryOperatorType.ShiftLeft || be.Operator == BinaryOperatorType.ShiftRight || be.Operator == BinaryOperatorType.BitwiseAnd || be.Operator == BinaryOperatorType.BitwiseOr || be.Operator == BinaryOperatorType.ExclusiveOr);

                if ((Helpers.IsKnownType(KnownTypeCode.Int32, toType, block.Emitter.Resolver) && isBitwiseOperator) || (Helpers.IsKnownType(KnownTypeCode.UInt32, toType, block.Emitter.Resolver) && be != null && be.Operator == BinaryOperatorType.ShiftRight))
                {
                    // Don't need to check even in checked context and don't need to clip
                }
                else if (be != null && !(be.Left is PrimitiveExpression && be.Right is PrimitiveExpression) && (be.Operator == BinaryOperatorType.Add ||
                    be.Operator == BinaryOperatorType.Divide ||
                    be.Operator == BinaryOperatorType.Multiply ||
                    isBitwiseOperator ||
                    be.Operator == BinaryOperatorType.Subtract))
                {
                    needCheck = true;
                }
                else
                {
                    var ue = expression as UnaryOperatorExpression;
                    if (ue != null && !(ue.Expression is PrimitiveExpression) && (ue.Operator == UnaryOperatorType.Minus ||
                                       ue.Operator == UnaryOperatorType.Increment ||
                                       ue.Operator == UnaryOperatorType.Decrement ||
                                       ue.Operator == UnaryOperatorType.PostIncrement ||
                                       ue.Operator == UnaryOperatorType.PostDecrement))
                    {
                        needCheck = true;
                    }
                    else
                    {
                        var ae = expression.Parent as AssignmentExpression;
                        isBitwiseOperator = ae != null && (ae.Operator == AssignmentOperatorType.ShiftRight || ae.Operator == AssignmentOperatorType.ShiftLeft || ae.Operator == AssignmentOperatorType.BitwiseAnd || ae.Operator == AssignmentOperatorType.BitwiseOr || ae.Operator == AssignmentOperatorType.ExclusiveOr);
                        if ((isBitwiseOperator && Helpers.IsKnownType(KnownTypeCode.Int32, toType, block.Emitter.Resolver))
                            || (ae != null && ae.Operator == AssignmentOperatorType.ShiftRight && Helpers.IsKnownType(KnownTypeCode.UInt32, toType, block.Emitter.Resolver)))
                        {
                            // Don't need to check even in checked context and don't need to clip
                        }
                        else if (ae != null && (isBitwiseOperator || ae.Operator == AssignmentOperatorType.Add ||
                                           ae.Operator == AssignmentOperatorType.Divide ||
                                           ae.Operator == AssignmentOperatorType.Multiply ||
                                           ae.Operator == AssignmentOperatorType.Subtract))
                        {
                            needCheck = true;
                        }
                    }
                }

                if (needCheck)
                {
                    ClipInteger(block, expression, toType, false);
                }
            }

            if (isArrayIndex)
            {
                block.AfterOutput += ")";
            }
        }

        private static void ClipDecimal(Expression expression, ConversionBlock block, IType expectedType)
        {
            var toFloat = Helpers.IsFloatType(expectedType, block.Emitter.Resolver);

            if (toFloat || (block.Emitter.IsJavaScriptOverflowMode && !InsideOverflowContext(block.Emitter, expression)))
            {
                block.Write(JS.Types.SYSTEM_DECIMAL + ".toFloat");
                block.Write("(");
                block.AfterOutput += ")";
            }
            else
            {
                block.Write(JS.Types.SYSTEM_DECIMAL + ".toInt(");
                block.AfterOutput = ", " + BridgeTypes.ToJsName(expectedType, block.Emitter) + ")";
            }
        }

        private static void CheckLong(ConversionBlock block, Expression expression, IType expectedType, IType fromType, bool isChecked)
        {
            if (!NeedsNarrowingNumericConversion(fromType, expectedType))
            {
                return;
            }

            if (isChecked)
            {
                expectedType = NullableType.IsNullable(expectedType) ? NullableType.GetUnderlyingType(expectedType) : expectedType;
                block.Write(JS.Types.System.Int64.CHECK);
                block.WriteOpenParentheses();

                block.AfterOutput += ", ";
                block.AfterOutput += BridgeTypes.ToJsName(expectedType, block.Emitter);
                block.AfterOutput += ")";
            }
            else
            {
                string action = null;
                expectedType = NullableType.IsNullable(expectedType) ? NullableType.GetUnderlyingType(expectedType) : expectedType;

                if (block.Emitter.IsJavaScriptOverflowMode && !InsideOverflowContext(block.Emitter, expression))
                {
                    action = "toNumber";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.Char))
                {
                    action = "clipu16";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.SByte))
                {
                    action = "clip8";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.Byte))
                {
                    action = "clipu8";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.Int16))
                {
                    action = "clip16";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.UInt16))
                {
                    action = "clipu16";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.Int32))
                {
                    action = "clip32";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.UInt32))
                {
                    action = "clipu32";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.Int64))
                {
                    action = "clip64";
                }
                else if (expectedType.IsKnownType(KnownTypeCode.UInt64))
                {
                    action = "clipu64";
                }
                else
                {
                    throw new ArgumentException("Can not narrow to " + expectedType, "expectedType");
                }

                block.Write(JS.Types.System.Int64.NAME + ".");
                block.Write(action);
                block.Write("(");
                block.AfterOutput += ")";
            }
        }

        private static bool NeedsNarrowingNumericConversion(IType fromType, IType toType)
        {
            fromType = NullableType.IsNullable(fromType) ? NullableType.GetUnderlyingType(fromType) : fromType;
            toType = NullableType.IsNullable(toType) ? NullableType.GetUnderlyingType(toType) : toType;

            var fromTypeCode = fromType.GetDefinition().KnownTypeCode;
            var toTypeCode = toType.GetDefinition().KnownTypeCode;

            return fromTypeCode >= KnownTypeCode.Char
                && fromTypeCode <= KnownTypeCode.Decimal
                && _needNarrowingConversion[fromTypeCode - KnownTypeCode.Char, toTypeCode - KnownTypeCode.Char];
        }

        private static void NarrowingNumericOrEnumerationConversion(ConversionBlock block, Expression expression, IType targetType, bool fromFloatingPoint, bool isChecked, bool isNullable, bool isExplicit = true)
        {
            if (block.Emitter.IsJavaScriptOverflowMode && !InsideOverflowContext(block.Emitter, expression))
            {
                return;
            }

            var binaryOperatorExpression = expression as BinaryOperatorExpression;
            if (binaryOperatorExpression != null)
            {
                var rr = block.Emitter.Resolver.ResolveNode(expression, block.Emitter);
                var leftResolverResult = block.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Left, block.Emitter);
                var rightResolverResult = block.Emitter.Resolver.ResolveNode(binaryOperatorExpression.Right, block.Emitter);
                if (rr != null)
                {
                    if (binaryOperatorExpression.Operator == BinaryOperatorType.Multiply &&
                        !(block.Emitter.IsJavaScriptOverflowMode && !ConversionBlock.InsideOverflowContext(block.Emitter, binaryOperatorExpression)) &&
                        (
                            (Helpers.IsInteger32Type(leftResolverResult.Type, block.Emitter.Resolver) &&
                            Helpers.IsInteger32Type(rightResolverResult.Type, block.Emitter.Resolver) &&
                            Helpers.IsInteger32Type(rr.Type, block.Emitter.Resolver)) ||

                            (Helpers.IsInteger32Type(block.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Left), block.Emitter.Resolver) &&
                            Helpers.IsInteger32Type(block.Emitter.Resolver.Resolver.GetExpectedType(binaryOperatorExpression.Right), block.Emitter.Resolver) &&
                            Helpers.IsInteger32Type(rr.Type, block.Emitter.Resolver))
                        ))
                    {
                        return;
                    }
                }
            }

            var assignmentExpression = expression as AssignmentExpression;
            if (assignmentExpression != null)
            {
                var leftResolverResult = block.Emitter.Resolver.ResolveNode(assignmentExpression.Left, block.Emitter);
                var rightResolverResult = block.Emitter.Resolver.ResolveNode(assignmentExpression.Right, block.Emitter);
                var rr = block.Emitter.Resolver.ResolveNode(assignmentExpression, block.Emitter);

                if (assignmentExpression.Operator == AssignmentOperatorType.Multiply &&
                    !(block.Emitter.IsJavaScriptOverflowMode ||
                      ConversionBlock.InsideOverflowContext(block.Emitter, assignmentExpression)) &&
                    (
                        (Helpers.IsInteger32Type(leftResolverResult.Type, block.Emitter.Resolver) &&
                         Helpers.IsInteger32Type(rightResolverResult.Type, block.Emitter.Resolver) &&
                         Helpers.IsInteger32Type(rr.Type, block.Emitter.Resolver)) ||

                        (Helpers.IsInteger32Type(
                             block.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Left),
                             block.Emitter.Resolver) &&
                         Helpers.IsInteger32Type(
                             block.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Right),
                             block.Emitter.Resolver) &&
                         Helpers.IsInteger32Type(rr.Type, block.Emitter.Resolver))
                    ))
                {
                    return;
                }
            }

            if (isChecked)
            {
                block.Write(JS.Types.BRIDGE_INT + ".check(");

                if (fromFloatingPoint)
                {
                    block.Write(JS.Types.BRIDGE_INT + ".trunc");
                    block.WriteOpenParentheses();
                }

                //expression.AcceptVisitor(block.Emitter);

                if (fromFloatingPoint)
                {
                    block.AfterOutput += ")";
                }

                block.AfterOutput += ", ";
                block.AfterOutput += BridgeTypes.ToJsName(targetType, block.Emitter);
                block.AfterOutput += ")";
            }
            else
            {
                if (isNullable || fromFloatingPoint)
                {
                    targetType = NullableType.IsNullable(targetType) ? NullableType.GetUnderlyingType(targetType) : targetType;
                    string action = null;
                    if (targetType.IsKnownType(KnownTypeCode.Char))
                    {
                        action = "clipu16";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.SByte))
                    {
                        action = "clip8";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Byte))
                    {
                        action = "clipu8";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int16))
                    {
                        action = "clip16";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt16))
                    {
                        action = "clipu16";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int32))
                    {
                        action = "clip32";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt32))
                    {
                        action = "clipu32";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int64))
                    {
                        action = "clip64";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt64))
                    {
                        action = "clipu64";
                    }
                    else
                    {
                        throw new ArgumentException("Can not narrow to " + targetType, "targetType");
                    }

                    block.Write(JS.Types.BRIDGE_INT + ".");
                    block.Write(action);
                    block.Write("(");
                    block.AfterOutput += ")";
                }
                else
                {
                    var skipOuterWrap = (expression.Parent is VariableInitializer) ||
                                        (expression.Parent is AssignmentExpression) ||
                                        targetType.IsKnownType(KnownTypeCode.Int64) ||
                                        targetType.IsKnownType(KnownTypeCode.UInt64) ||
                                        targetType.IsKnownType(KnownTypeCode.Int16) ||
                                        targetType.IsKnownType(KnownTypeCode.SByte);

                    bool skipInnerWrap = false;

                    var rr = block.Emitter.Resolver.ResolveNode(expression is CastExpression ? ((CastExpression)expression).Expression : expression, block.Emitter);
                    var memberTargetrr = rr as MemberResolveResult;
                    bool isField = memberTargetrr != null && memberTargetrr.Member is IField &&
                               (memberTargetrr.TargetResult is ThisResolveResult ||
                                memberTargetrr.TargetResult is LocalResolveResult);

                    if (rr is ThisResolveResult || rr is LocalResolveResult || rr is ConstantResolveResult || isField)
                    {
                        skipInnerWrap = true;
                    }

                    if (!skipOuterWrap)
                    {
                        block.WriteOpenParentheses();
                    }

                    if (targetType.IsKnownType(KnownTypeCode.Char))
                    {
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " & 65535";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.SByte))
                    {
                        block.Write(JS.Types.BRIDGE_INT + ".sxb(");
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " & 255)";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Byte))
                    {
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " & 255";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int16))
                    {
                        block.Write(JS.Types.BRIDGE_INT + ".sxs(");
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " & 65535)";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt16))
                    {
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " & 65535";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int32))
                    {
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " | 0";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt32))
                    {
                        if (!skipInnerWrap)
                        {
                            block.WriteOpenParentheses();
                            block.AfterOutput += ")";
                        }
                        block.AfterOutput += " >>> 0";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.Int64))
                    {
                        block.Write(JS.Types.BRIDGE_INT + ".clip64(");
                        block.AfterOutput += ")";
                    }
                    else if (targetType.IsKnownType(KnownTypeCode.UInt64))
                    {
                        block.Write(JS.Types.BRIDGE_INT + ".clipu64(");
                        block.AfterOutput += ")";
                    }
                    else
                    {
                        throw new ArgumentException("Can not narrow to " + targetType, "targetType");
                    }

                    if (!skipOuterWrap)
                    {
                        block.AfterOutput += ")";
                    }
                }
            }
        }

        public static void ClipInteger(ConversionBlock block, Expression expression, IType type, bool isExplicit)
        {
            var specialType = NullableType.IsNullable(type) ? NullableType.GetUnderlyingType(type) : type;

            if (!isExplicit && (specialType.IsKnownType(KnownTypeCode.UInt64) || specialType.IsKnownType(KnownTypeCode.Int64)))
            {
                //expression.AcceptVisitor(block.Emitter);
                return;
            }

            NarrowingNumericOrEnumerationConversion(block, expression, specialType, false, false, NullableType.IsNullable(type), isExplicit);
        }

        public static void CheckInteger(ConversionBlock block, Expression expression, IType type)
        {
            NarrowingNumericOrEnumerationConversion(block, expression, NullableType.IsNullable(type) ? NullableType.GetUnderlyingType(type) : type, false, true, NullableType.IsNullable(type));
        }

        public static void FloatToInt(ConversionBlock block, Expression expression, IType sourceType, IType targetType, bool isChecked)
        {
            NarrowingNumericOrEnumerationConversion(block, expression, NullableType.IsNullable(targetType) ? NullableType.GetUnderlyingType(targetType) : targetType, true, isChecked, NullableType.IsNullable(sourceType));
        }

        public static bool IsInCheckedContext(IEmitter emitter, Expression expression)
        {
            var found = false;
            expression.GetParent(p =>
            {
                if (p is CheckedExpression || p is CheckedStatement)
                {
                    found = true;
                    return true;
                }

                if (p is UncheckedExpression || p is UncheckedStatement)
                {
                    found = false;
                    return true;
                }

                return false;
            });

            if (found)
            {
                return true;
            }

            return emitter.AssemblyInfo.OverflowMode.HasValue && emitter.AssemblyInfo.OverflowMode == OverflowMode.Checked;
        }

        public static bool IsInUncheckedContext(IEmitter emitter, Expression expression)
        {
            var found = false;
            expression.GetParent(p =>
            {
                if (p is UncheckedExpression || p is UncheckedStatement)
                {
                    found = true;
                    return true;
                }

                if (p is CheckedExpression || p is CheckedStatement)
                {
                    found = false;
                    return true;
                }

                return false;
            });

            if (found)
            {
                return true;
            }

            return !emitter.AssemblyInfo.OverflowMode.HasValue || emitter.AssemblyInfo.OverflowMode == OverflowMode.Unchecked;
        }

        public static bool InsideOverflowContext(IEmitter emitter, Expression expression)
        {
            var found = false;
            expression.GetParent(p =>
            {
                if (p is UncheckedExpression || p is UncheckedStatement || p is CheckedExpression || p is CheckedStatement)
                {
                    found = true;
                    return true;
                }

                return false;
            });

            return found;
        }
    }
}