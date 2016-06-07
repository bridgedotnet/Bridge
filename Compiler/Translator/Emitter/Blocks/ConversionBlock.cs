using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public abstract partial class ConversionBlock : AbstractEmitterBlock
    {
        public ConversionBlock(IEmitter emitter, AstNode node)
            : base(emitter, node)
        {
        }

        protected sealed override void DoEmit()
        {
            this.AfterOutput = "";
            var expression = this.GetExpression();

            if (expressionInWork.Contains(expression))
            {
                this.EmitConversionExpression();
                return;
            }

            expressionInWork.Add(expression);

            int parenthesesLevel = 0;
            bool check = expression != null && !expression.IsNull && expression.Parent != null;

            if (check)
            {
                parenthesesLevel = this.CheckConversion(expression);
            }

            if (this.DisableEmitConversionExpression)
            {
                expressionInWork.Remove(expression);
                return;
            }

            this.EmitConversionExpression();
            expressionInWork.Remove(expression);

            if (parenthesesLevel > 0)
            {
                for (int i = 0; i < parenthesesLevel; i++)
                {
                    this.WriteCloseParentheses();
                }
            }

            if (this.AfterOutput.Length > 0)
            {
                this.Write(this.AfterOutput);
            }
        }

        protected virtual string AfterOutput
        {
            get;
            set;
        }

        private static List<Expression> expressionInWork = new List<Expression>();

        protected virtual bool DisableEmitConversionExpression
        {
            get;
            set;
        }

        protected virtual int CheckConversion(Expression expression)
        {
            return ConversionBlock.CheckConversion(this, expression);
        }

        public static bool IsUserDefinedConversion(AbstractEmitterBlock block, Expression expression)
        {
            Conversion conversion = null;

            try
            {
                var rr = block.Emitter.Resolver.ResolveNode(expression, null);
                conversion = block.Emitter.Resolver.Resolver.GetConversion(expression);

                if (conversion == null)
                {
                    return false;
                }

                return conversion.IsUserDefined;
            }
            catch
            {
            }

            return false;
        }

        public static int CheckConversion(ConversionBlock block, Expression expression)
        {
            try
            {
                var rr = block.Emitter.Resolver.ResolveNode(expression, block.Emitter);
                var conversion = block.Emitter.Resolver.Resolver.GetConversion(expression);
                var expectedType = block.Emitter.Resolver.Resolver.GetExpectedType(expression);
                int level = 0;

                if (block.Emitter.IsAssignment)
                {
                    return level;
                }

                /*if (expression is ParenthesizedExpression && expression.Parent is CastExpression)
                {
                    return level;
                }*/

                if (conversion.IsUserDefined && expression.Parent is CastExpression && ((CastExpression)expression.Parent).Expression == expression)
                {
                    var parentConversion = block.Emitter.Resolver.Resolver.GetConversion((CastExpression)expression.Parent);

                    if (!parentConversion.IsUserDefined || parentConversion.Method.Equals(conversion.Method))
                    {
                        return level;    
                    }
                }

                if (rr is ConstantResolveResult && expression is CastExpression && !conversion.IsUserDefined)
                {
                    return level;
                }

                var convrr = rr as ConversionResolveResult;

                if (convrr != null && convrr.Input is ConstantResolveResult && !convrr.Conversion.IsUserDefined)
                {
                    return level;
                }

                if (convrr != null && !conversion.IsUserDefined)
                {
                    conversion = convrr.Conversion;
                    rr = convrr.Input;
                    expectedType = convrr.Type;
                }

                if (!((expression.Parent is CastExpression) && !(expression is CastExpression)))
                {
                    CheckNumericConversion(block, expression, rr, expectedType, conversion);
                }

                if (!(conversion.IsExplicit && conversion.IsNumericConversion))
                {
                    level = ConversionBlock.CheckDecimalConversion(block, expression, rr, expectedType, conversion) ? (level + 1) : level;    
                }

                if (Helpers.IsDecimalType(expectedType, block.Emitter.Resolver) && !conversion.IsUserDefined)
                {
                    return level;
                }

                if (!(conversion.IsExplicit && conversion.IsNumericConversion))
                {
                    level = ConversionBlock.CheckLongConversion(block, expression, rr, expectedType, conversion)
                        ? (level + 1)
                        : level;
                }

                if (Helpers.Is64Type(expectedType, block.Emitter.Resolver) && !conversion.IsUserDefined)
                {
                    return level;
                }


                if (conversion == null)
                {
                    return level;
                }

                if (conversion.IsIdentityConversion)
                {
                    return level;
                }

                var isNumLifted = conversion.IsImplicit && conversion.IsLifted && conversion.IsNumericConversion && !(expression is BinaryOperatorExpression);
                if (isNumLifted && !conversion.IsUserDefined)
                {
                    return level;
                }
                bool isLifted = conversion.IsLifted && !isNumLifted && !(block is CastBlock) && !Helpers.IsDecimalType(expectedType, block.Emitter.Resolver) && !Helpers.Is64Type(expectedType, block.Emitter.Resolver) && !NullableType.IsNullable(expectedType);
                if (isLifted)
                {
                    level++;
                    block.Write(JS.Types.SYSTEM_NULLABLE + ".getValue(");
                }

                if (conversion.IsUserDefined)
                {
                    var method = conversion.Method;

                    string inline = block.Emitter.GetInline(method);

                    if (conversion.IsExplicit && !string.IsNullOrWhiteSpace(inline))
                    {
                        // Still returns true if Nullable.lift( was written.
                        return level;
                    }

                    if (!string.IsNullOrWhiteSpace(inline))
                    {
                        if (expression is InvocationExpression)
                        {
                            new InlineArgumentsBlock(block.Emitter, new ArgumentsInfo(block.Emitter, (InvocationExpression)expression), inline).Emit();
                        }
                        else if (expression is ObjectCreateExpression)
                        {
                            new InlineArgumentsBlock(block.Emitter, new ArgumentsInfo(block.Emitter, (ObjectCreateExpression)expression), inline).Emit();
                        }
                        else if (expression is UnaryOperatorExpression)
                        {
                            var unaryExpression = (UnaryOperatorExpression)expression;
                            var resolveOperator = block.Emitter.Resolver.ResolveNode(unaryExpression, block.Emitter);
                            OperatorResolveResult orr = resolveOperator as OperatorResolveResult;
                            new InlineArgumentsBlock(block.Emitter, new ArgumentsInfo(block.Emitter, unaryExpression, orr, method), inline).Emit();
                        }
                        else if (expression is BinaryOperatorExpression)
                        {
                            var binaryExpression = (BinaryOperatorExpression)expression;
                            var resolveOperator = block.Emitter.Resolver.ResolveNode(binaryExpression, block.Emitter);
                            OperatorResolveResult orr = resolveOperator as OperatorResolveResult;
                            new InlineArgumentsBlock(block.Emitter, new ArgumentsInfo(block.Emitter, binaryExpression, orr, method), inline).Emit();
                        }
                        else
                        {
                            new InlineArgumentsBlock(block.Emitter, new ArgumentsInfo(block.Emitter, expression), inline).Emit();
                        }

                        block.DisableEmitConversionExpression = true;

                        // Still returns true if Nullable.lift( was written.
                        return level;
                    }
                    else
                    {
                        if (method.DeclaringTypeDefinition != null && (block.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition) || Helpers.IsIgnoreCast(method.DeclaringTypeDefinition, block.Emitter)))
                        {
                            // Still returns true if Nullable.lift( was written.
                            return level;
                        }

                        block.Write(BridgeTypes.ToJsName(method.DeclaringType, block.Emitter));
                        block.WriteDot();

                        block.Write(OverloadsCollection.Create(block.Emitter, method).GetOverloadName());
                    }

                    if (isLifted)
                    {
                        block.WriteComma();
                    }
                    else
                    {
                        block.WriteOpenParentheses();
                        level++;
                    }

                    var arg = method.Parameters[0];

                    if (Helpers.IsDecimalType(arg.Type, block.Emitter.Resolver, arg.IsParams) && !Helpers.IsDecimalType(rr.Type, block.Emitter.Resolver) && !expression.IsNull)
                    {
                        block.Write(JS.Types.SYSTEM_DECIMAL);
                        if (NullableType.IsNullable(arg.Type) && ConversionBlock.ShouldBeLifted(expression))
                        {
                            block.Write("." + JS.Funcs.Math.LIFT);
                        }
                        if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return level;
                        }
                        block.WriteOpenParentheses();
                        level++;
                    }

                    if (Helpers.Is64Type(arg.Type, block.Emitter.Resolver, arg.IsParams) && !Helpers.Is64Type(rr.Type, block.Emitter.Resolver) && !expression.IsNull)
                    {
                        var isUint = Helpers.IsULongType(arg.Type, block.Emitter.Resolver, arg.IsParams);
                        block.Write(isUint ? JS.Types.SYSTEM_UInt64 : JS.Types.SYSTEM_INT64);
                        if (NullableType.IsNullable(arg.Type) && ConversionBlock.ShouldBeLifted(expression))
                        {
                            block.Write("." + JS.Funcs.Math.LIFT);
                        }
                        if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return level;
                        }
                        block.WriteOpenParentheses();
                        level++;
                    }

                    return level;
                }
                // Still returns true if Nullable.lift( was written.
                return level;
            }
            catch
            {
            }

            return 0;
        }

        private delegate bool IsType(IType type, IMemberResolver resolver, bool allowArray = false);

        private static bool CheckTypeConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion, string typeName, IsType isType)
        {
            if (conversion.IsUserDefined)
            {
                var m = conversion.Method;
                if (isType(m.ReturnType, block.Emitter.Resolver))
                {
                    return false;
                }
            }

            if (expression is CastExpression)
            {
                var nestedExpr = ((CastExpression) expression).Expression;
                var nested_rr = block.Emitter.Resolver.ResolveNode(nestedExpr, block.Emitter);

                if (!(nested_rr is ConversionResolveResult))
                {
                    return false;    
                }
            }

            var invocationExpression = expression.Parent as InvocationExpression;
            if (invocationExpression != null && invocationExpression.Arguments.Any(a => a == expression))
            {
                var index = invocationExpression.Arguments.ToList().IndexOf(expression);
                var methodResolveResult = block.Emitter.Resolver.ResolveNode(invocationExpression, block.Emitter) as MemberResolveResult;

                if (methodResolveResult != null)
                {
                    var m = methodResolveResult.Member as IMethod;
                    var arg = m.Parameters[index < m.Parameters.Count ? index : (m.Parameters.Count - 1)];

                    if (isType(arg.Type, block.Emitter.Resolver, arg.IsParams) && !isType(rr.Type, block.Emitter.Resolver))
                    {
                        if (expression.IsNull)
                        {
                            return false;
                        }

                        block.Write(typeName);
                        if (NullableType.IsNullable(arg.Type) && ConversionBlock.ShouldBeLifted(expression))
                        {
                            block.Write("." + JS.Funcs.Math.LIFT);
                        }
                        if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return false;
                        }
                        block.WriteOpenParentheses();
                        return true;
                    }
                }
            }

            var objectCreateExpression = expression.Parent as ObjectCreateExpression;
            if (objectCreateExpression != null && objectCreateExpression.Arguments.Any(a => a == expression))
            {
                var index = objectCreateExpression.Arguments.ToList().IndexOf(expression);
                var methodResolveResult = block.Emitter.Resolver.ResolveNode(objectCreateExpression, block.Emitter) as MemberResolveResult;

                if (methodResolveResult != null)
                {
                    var m = methodResolveResult.Member as IMethod;
                    var arg = m.Parameters[index < m.Parameters.Count ? index : (m.Parameters.Count - 1)];

                    if (isType(arg.Type, block.Emitter.Resolver, arg.IsParams) && !isType(rr.Type, block.Emitter.Resolver))
                    {
                        if (expression.IsNull)
                        {
                            return false;
                        }

                        block.Write(typeName);
                        if (NullableType.IsNullable(arg.Type) && ConversionBlock.ShouldBeLifted(expression))
                        {
                            block.Write("." + JS.Funcs.Math.LIFT);
                        }
                        if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return false;
                        }
                        block.WriteOpenParentheses();
                        return true;
                    }
                }
            }

            var namedArgExpression = expression.Parent as NamedArgumentExpression;
            if (namedArgExpression != null)
            {
                var namedArgResolveResult = block.Emitter.Resolver.ResolveNode(namedArgExpression, block.Emitter) as NamedArgumentResolveResult;

                if (isType(namedArgResolveResult.Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(namedArgResolveResult.Type) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            var namedExpression = expression.Parent as NamedExpression;
            if (namedExpression != null)
            {
                var namedResolveResult = block.Emitter.Resolver.ResolveNode(namedExpression, block.Emitter);

                if (isType(namedResolveResult.Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(namedResolveResult.Type) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            var binaryOpExpr = expression.Parent as BinaryOperatorExpression;
            if (binaryOpExpr != null)
            {
                var idx = binaryOpExpr.Left == expression ? 0 : 1;
                var binaryOpRr = block.Emitter.Resolver.ResolveNode(binaryOpExpr, block.Emitter) as OperatorResolveResult;

                if (binaryOpRr != null && isType(binaryOpRr.Operands[idx].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    var isNullable = NullableType.IsNullable(binaryOpRr.Operands[idx].Type);
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (isNullable && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            var conditionalExpr = expression.Parent as ConditionalExpression;
            if (conditionalExpr != null && conditionalExpr.Condition != expression)
            {
                var idx = conditionalExpr.TrueExpression == expression ? 0 : 1;
                var conditionalrr = block.Emitter.Resolver.ResolveNode(conditionalExpr, block.Emitter) as OperatorResolveResult;

                if (conditionalrr != null && isType(conditionalrr.Operands[idx].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(conditionalrr.Operands[idx].Type) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            var assignmentExpr = expression.Parent as AssignmentExpression;
            if (assignmentExpr != null)
            {
                var assigmentRr = block.Emitter.Resolver.ResolveNode(assignmentExpr, block.Emitter) as OperatorResolveResult;

                if (isType(assigmentRr.Operands[1].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(assigmentRr.Operands[1].Type) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            var indexerExpr = expression.Parent as IndexerExpression;
            if (indexerExpr != null)
            {
                var index = indexerExpr.Arguments.ToList().IndexOf(expression);

                if (index >= 0)
                {
                    var invocationrr = block.Emitter.Resolver.ResolveNode(indexerExpr, block.Emitter) as InvocationResolveResult;
                    if (invocationrr != null)
                    {
                        var parameters = invocationrr.Member.Parameters;
                        if (parameters.Count <= index)
                        {
                            index = parameters.Count - 1;
                        }

                        if (isType(invocationrr.Member.Parameters.ElementAt(index).Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                        {
                            if (expression.IsNull)
                            {
                                return false;
                            }

                            block.Write(typeName);
                            if (NullableType.IsNullable(invocationrr.Member.Parameters.ElementAt(index).Type) && ConversionBlock.ShouldBeLifted(expression))
                            {
                                block.Write("." + JS.Funcs.Math.LIFT);
                            }
                            if (expression is CastExpression &&
                                ((CastExpression)expression).Expression is ParenthesizedExpression)
                            {
                                return false;
                            }
                            block.WriteOpenParentheses();
                            return true;
                        }
                    }
                }
            }

            var arrayInit = expression.Parent as ArrayInitializerExpression;
            if (arrayInit != null)
            {
                while (arrayInit.Parent is ArrayInitializerExpression)
                {
                    arrayInit = (ArrayInitializerExpression)arrayInit.Parent;
                }

                IType elementType = null;
                var arrayCreate = arrayInit.Parent as ArrayCreateExpression;
                if (arrayCreate != null)
                {
                    var rrArrayType = block.Emitter.Resolver.ResolveNode(arrayCreate, block.Emitter);
                    if (rrArrayType.Type is TypeWithElementType)
                    {
                        elementType = ((TypeWithElementType)rrArrayType.Type).ElementType;
                    }
                    else
                    {
                        elementType = rrArrayType.Type;
                    }
                }
                else
                {
                    var rrElemenet = block.Emitter.Resolver.ResolveNode(arrayInit.Parent, block.Emitter);
                    var pt = rrElemenet.Type as ParameterizedType;
                    if (pt != null && pt.TypeArguments.Count > 0)
                    {
                        if (pt.TypeArguments.Count == 1)
                        {
                            elementType = pt.TypeArguments.First();
                        }
                        else
                        {
                            var index = 0;
                            arrayInit = expression.Parent as ArrayInitializerExpression;

                            for (int i = 0; i < arrayInit.Elements.Count; i++)
                            {
                                if (expression == arrayInit.Elements.ElementAt(i))
                                {
                                    index = i;
                                    break;
                                }
                            }

                            elementType = index < pt.TypeArguments.Count ? pt.TypeArguments.ElementAt(index) : pt.TypeArguments.ElementAt(0);
                        }
                    }
                    else
                    {
                        var arrayType = rrElemenet.Type as TypeWithElementType;
                        if (arrayType != null)
                        {
                            elementType = arrayType.ElementType;
                        }
                        else
                        {
                            elementType = rrElemenet.Type;
                        }
                    }
                }

                if (elementType != null && isType(elementType, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(elementType) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
                else if (Helpers.Is64Type(rr.Type, block.Emitter.Resolver)
                         && Helpers.IsFloatType(elementType, block.Emitter.Resolver)
                         && !Helpers.IsDecimalType(elementType, block.Emitter.Resolver)
                         && isType(rr.Type, block.Emitter.Resolver))
                {
                    block.Write(JS.Types.SYSTEM_INT64 + ".toNumber");
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            if (isType(expectedType, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver) && !(conversion.IsExplicit && conversion.IsNumericConversion))
            {
                var castExpr = expression.Parent as CastExpression;
                ResolveResult castTypeRr = null;
                if (castExpr != null)
                {
                    castTypeRr = block.Emitter.Resolver.ResolveNode(castExpr.Type, block.Emitter);
                }

                /*if (castTypeRr == null || !isType(castTypeRr.Type, block.Emitter.Resolver))*/
                if (castTypeRr == null || !conversion.IsExplicit)
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    block.Write(typeName);
                    if (NullableType.IsNullable(expectedType) && ConversionBlock.ShouldBeLifted(expression))
                    {
                        block.Write("." + JS.Funcs.Math.LIFT);
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    block.WriteOpenParentheses();
                    return true;
                }
            }

            return false;
        }

        private static bool IsTypeConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion, string typeName, IsType isType)
        {
            if (conversion.IsUserDefined)
            {
                var m = conversion.Method;
                if (isType(m.ReturnType, block.Emitter.Resolver))
                {
                    return false;
                }
            }

            var invocationExpression = expression.Parent as InvocationExpression;
            if (invocationExpression != null && invocationExpression.Arguments.Any(a => a == expression))
            {
                var index = invocationExpression.Arguments.ToList().IndexOf(expression);
                var methodResolveResult = block.Emitter.Resolver.ResolveNode(invocationExpression, block.Emitter) as MemberResolveResult;

                if (methodResolveResult != null)
                {
                    var m = methodResolveResult.Member as IMethod;
                    var arg = m.Parameters[index < m.Parameters.Count ? index : (m.Parameters.Count - 1)];

                    if (isType(arg.Type, block.Emitter.Resolver, arg.IsParams) && !isType(rr.Type, block.Emitter.Resolver))
                    {
                        if (expression.IsNull)
                        {
                            return false;
                        }

                        if (expression is CastExpression && ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return false;
                        }
                        return true;
                    }
                }
            }

            var objectCreateExpression = expression.Parent as ObjectCreateExpression;
            if (objectCreateExpression != null && objectCreateExpression.Arguments.Any(a => a == expression))
            {
                var index = objectCreateExpression.Arguments.ToList().IndexOf(expression);
                var methodResolveResult = block.Emitter.Resolver.ResolveNode(objectCreateExpression, block.Emitter) as MemberResolveResult;

                if (methodResolveResult != null)
                {
                    var m = methodResolveResult.Member as IMethod;
                    var arg = m.Parameters[index < m.Parameters.Count ? index : (m.Parameters.Count - 1)];

                    if (isType(arg.Type, block.Emitter.Resolver, arg.IsParams) && !isType(rr.Type, block.Emitter.Resolver))
                    {
                        if (expression.IsNull)
                        {
                            return false;
                        }

                        if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                        {
                            return false;
                        }
                        return true;
                    }
                }
            }

            var namedArgExpression = expression.Parent as NamedArgumentExpression;
            if (namedArgExpression != null)
            {
                var namedArgResolveResult = block.Emitter.Resolver.ResolveNode(namedArgExpression, block.Emitter) as NamedArgumentResolveResult;

                if (isType(namedArgResolveResult.Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
            }

            var namedExpression = expression.Parent as NamedExpression;
            if (namedExpression != null)
            {
                var namedResolveResult = block.Emitter.Resolver.ResolveNode(namedExpression, block.Emitter);

                if (isType(namedResolveResult.Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    return true;
                }
            }

            var binaryOpExpr = expression.Parent as BinaryOperatorExpression;
            if (binaryOpExpr != null)
            {
                var idx = binaryOpExpr.Left == expression ? 0 : 1;
                var binaryOpRr = block.Emitter.Resolver.ResolveNode(binaryOpExpr, block.Emitter) as OperatorResolveResult;

                if (binaryOpRr != null && isType(binaryOpRr.Operands[idx].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
            }

            var conditionalExpr = expression.Parent as ConditionalExpression;
            if (conditionalExpr != null && conditionalExpr.Condition != expression)
            {
                var idx = conditionalExpr.TrueExpression == expression ? 0 : 1;
                var conditionalrr = block.Emitter.Resolver.ResolveNode(conditionalExpr, block.Emitter) as OperatorResolveResult;

                if (conditionalrr != null && isType(conditionalrr.Operands[idx].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
            }

            var assignmentExpr = expression.Parent as AssignmentExpression;
            if (assignmentExpr != null)
            {
                var assigmentRr = block.Emitter.Resolver.ResolveNode(assignmentExpr, block.Emitter) as OperatorResolveResult;

                if (isType(assigmentRr.Operands[1].Type, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }
                    
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
            }

            var arrayInit = expression.Parent as ArrayInitializerExpression;
            if (arrayInit != null)
            {
                while (arrayInit.Parent is ArrayInitializerExpression)
                {
                    arrayInit = (ArrayInitializerExpression)arrayInit.Parent;
                }

                IType elementType = null;
                var arrayCreate = arrayInit.Parent as ArrayCreateExpression;
                if (arrayCreate != null)
                {
                    var rrArrayType = block.Emitter.Resolver.ResolveNode(arrayCreate, block.Emitter);
                    if (rrArrayType.Type is TypeWithElementType)
                    {
                        elementType = ((TypeWithElementType)rrArrayType.Type).ElementType;
                    }
                    else
                    {
                        elementType = rrArrayType.Type;
                    }
                }
                else
                {
                    var rrElemenet = block.Emitter.Resolver.ResolveNode(arrayInit.Parent, block.Emitter);
                    var pt = rrElemenet.Type as ParameterizedType;
                    if (pt != null)
                    {
                        elementType = pt.TypeArguments.Count > 0 ? pt.TypeArguments.First() : null;
                    }
                    else
                    {
                        var arrayType = rrElemenet.Type as TypeWithElementType;
                        if (arrayType != null)
                        {
                            elementType = arrayType.ElementType;
                        }
                        else
                        {
                            elementType = rrElemenet.Type;
                        }
                    }
                }

                if (elementType != null && isType(elementType, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
                else if (Helpers.Is64Type(rr.Type, block.Emitter.Resolver)
                         && Helpers.IsFloatType(elementType, block.Emitter.Resolver)
                         && !Helpers.IsDecimalType(elementType, block.Emitter.Resolver)
                         && isType(rr.Type, block.Emitter.Resolver))
                {
                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    return true;
                }
            }

            if (isType(expectedType, block.Emitter.Resolver) && !isType(rr.Type, block.Emitter.Resolver) && !(conversion.IsExplicit && conversion.IsNumericConversion))
            {
                var castExpr = expression.Parent as CastExpression;
                ResolveResult castTypeRr = null;
                if (castExpr != null)
                {
                    castTypeRr = block.Emitter.Resolver.ResolveNode(castExpr.Type, block.Emitter);
                }

                /*if (castTypeRr == null || !isType(castTypeRr.Type, block.Emitter.Resolver))*/
                if (castTypeRr == null || !conversion.IsExplicit)
                {
                    if (expression.IsNull)
                    {
                        return false;
                    }

                    if (expression is CastExpression &&
                        ((CastExpression)expression).Expression is ParenthesizedExpression)
                    {
                        return false;
                    }
                    
                    return true;
                }
            }

            return false;
        }

        private static bool CheckDecimalConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion)
        {
            return CheckTypeConversion(block, expression, rr, expectedType, conversion, JS.Types.SYSTEM_DECIMAL, Helpers.IsDecimalType);
        }

        private static bool CheckLongConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion)
        {
            return CheckTypeConversion(block, expression, rr, expectedType, conversion, JS.Types.SYSTEM_INT64, Helpers.IsLongType) ||
                   CheckTypeConversion(block, expression, rr, expectedType, conversion, JS.Types.SYSTEM_UInt64, Helpers.IsULongType);
        }

        private static bool IsLongConversion(ConversionBlock block, Expression expression, ResolveResult rr, IType expectedType, Conversion conversion)
        {
            return IsTypeConversion(block, expression, rr, expectedType, conversion, JS.Types.SYSTEM_INT64, Helpers.IsLongType) ||
                   IsTypeConversion(block, expression, rr, expectedType, conversion, JS.Types.SYSTEM_UInt64, Helpers.IsULongType);
        }

        public static bool ShouldBeLifted(Expression expr)
        {
            return !(expr is PrimitiveExpression || expr.IsNull);
        }

        protected abstract void EmitConversionExpression();

        protected abstract Expression GetExpression();
    }
}
