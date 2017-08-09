using Bridge.Contract;
using Bridge.Contract.Constants;
using Bridge.Translator.Utils;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Linq;

namespace Bridge.Translator
{
    public class AssignmentBlock : ConversionBlock
    {
        public AssignmentBlock(IEmitter emitter, AssignmentExpression assignmentExpression)
            : base(emitter, assignmentExpression)
        {
            this.Emitter = emitter;
            this.AssignmentExpression = assignmentExpression;
        }

        public AssignmentExpression AssignmentExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.AssignmentExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitAssignmentExpression();
        }

        protected bool ResolveOperator(AssignmentExpression assignmentExpression, OperatorResolveResult orr, int initCount, bool thisAssignment)
        {
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    if (this.Emitter.Writers.Count == initCount && !thisAssignment)
                    {
                        this.Write("= ");
                    }

                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, assignmentExpression, orr, method), inline).Emit();

                    if (this.Emitter.Writers.Count > initCount)
                    {
                        this.PopWriter();
                    }
                    return true;
                }
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    if (this.Emitter.Writers.Count == initCount && !thisAssignment)
                    {
                        this.Write("= ");
                    }

                    if (orr.IsLiftedOperator)
                    {
                        this.Write(JS.Types.SYSTEM_NULLABLE + "." + JS.Funcs.Math.LIFT + ".(");
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
                        new Expression[] { assignmentExpression.Left, assignmentExpression.Right }, null, null, 0).Emit();
                    this.WriteCloseParentheses();

                    if (this.Emitter.Writers.Count > initCount)
                    {
                        this.PopWriter();
                    }
                    return true;
                }
            }

            return false;
        }

        protected bool IsUserOperator(OperatorResolveResult orr)
        {
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    return true;
                }
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    return true;
                }
            }

            return false;
        }

        protected void VisitAssignmentExpression()
        {
            AssignmentExpression assignmentExpression = this.AssignmentExpression;
            var oldAssigment = this.Emitter.IsAssignment;
            var oldAssigmentType = this.Emitter.AssignmentType;
            string variable = null;

            bool needReturnValue = !(assignmentExpression.Parent is ExpressionStatement);

            if (needReturnValue && assignmentExpression.Parent is LambdaExpression)
            {
                var lambdarr = this.Emitter.Resolver.ResolveNode(assignmentExpression.Parent, this.Emitter) as LambdaResolveResult;

                if (lambdarr != null && lambdarr.ReturnType.Kind == TypeKind.Void)
                {
                    needReturnValue = false;
                }
            }

            var delegateAssigment = false;
            bool isEvent = false;
            var initCount = this.Emitter.Writers.Count;

            var asyncExpressionHandling = this.Emitter.AsyncExpressionHandling;

            this.WriteAwaiters(assignmentExpression.Left);
            this.WriteAwaiters(assignmentExpression.Right);

            var leftResolverResult = this.Emitter.Resolver.ResolveNode(assignmentExpression.Left, this.Emitter);
            var rightResolverResult = this.Emitter.Resolver.ResolveNode(assignmentExpression.Right, this.Emitter);
            var rr = this.Emitter.Resolver.ResolveNode(assignmentExpression, this.Emitter);
            var orr = rr as OperatorResolveResult;
            bool isDecimal = Helpers.IsDecimalType(rr.Type, this.Emitter.Resolver);
            bool isLong = Helpers.Is64Type(rr.Type, this.Emitter.Resolver);
            var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression);
            bool isDecimalExpected = Helpers.IsDecimalType(expectedType, this.Emitter.Resolver);
            bool isLongExpected = Helpers.Is64Type(expectedType, this.Emitter.Resolver);
            bool isUserOperator = this.IsUserOperator(orr);

            bool isUint = rr.Type.IsKnownType(KnownTypeCode.UInt16) ||
                          rr.Type.IsKnownType(KnownTypeCode.UInt32) ||
                          rr.Type.IsKnownType(KnownTypeCode.UInt64);

            var charToString = -1;

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

            var memberTargetrr = leftResolverResult as MemberResolveResult;
            bool isField = (memberTargetrr != null && memberTargetrr.Member is IField &&
                           (memberTargetrr.TargetResult is ThisResolveResult ||
                            memberTargetrr.TargetResult is LocalResolveResult)) || leftResolverResult is ThisResolveResult || leftResolverResult is LocalResolveResult || leftResolverResult is ConstantResolveResult;

            var rightMemberTargetrr = rightResolverResult as MemberResolveResult;
            bool isRightSimple = (rightMemberTargetrr != null && rightMemberTargetrr.Member is IField &&
                           (rightMemberTargetrr.TargetResult is ThisResolveResult ||
                            rightMemberTargetrr.TargetResult is LocalResolveResult)) || rightResolverResult is ThisResolveResult || rightResolverResult is LocalResolveResult || rightResolverResult is ConstantResolveResult;

            var needTempVar = needReturnValue && (!isRightSimple && !isField || assignmentExpression.Operator != AssignmentOperatorType.Assign);
            /*if (assignmentExpression.Operator == AssignmentOperatorType.Any)
            {
                needTempVar = false;
            }*/

            if (needReturnValue)
            {
                if (needTempVar)
                {
                    variable = this.GetTempVarName();
                    this.Write("(" + variable + " = ");

                    var oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                    this.Emitter.ReplaceAwaiterByVar = true;
                    assignmentExpression.Right.AcceptVisitor(this.Emitter);

                    this.Emitter.ReplaceAwaiterByVar = oldValue1;
                    this.Write(", ");
                }
                else
                {
                    this.Write("(");
                }
            }

            if (assignmentExpression.Operator == AssignmentOperatorType.Divide &&
                !(this.Emitter.IsJavaScriptOverflowMode && !ConversionBlock.InsideOverflowContext(this.Emitter, assignmentExpression)) &&
                !isLong && !isLongExpected &&
                (
                    (Helpers.IsIntegerType(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(rightResolverResult.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsIntegerType(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Right), this.Emitter.Resolver))
                ))
            {
                this.Emitter.IsAssignment = true;
                this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                var oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;
                this.AcceptLeftExpression(assignmentExpression.Left, memberTargetrr);

                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write(" = ");
                }

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AssignmentType = oldAssigmentType;
                this.Emitter.IsAssignment = oldAssigment;

                this.Write(JS.Types.BRIDGE_INT + "." + JS.Funcs.Math.DIV + "(");
                assignmentExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(", ");
                oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;

                assignmentExpression.Right.AcceptVisitor(this.Emitter);

                this.Write(")");

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AsyncExpressionHandling = asyncExpressionHandling;

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }

                if (needReturnValue && !isField)
                {
                    if (needTempVar)
                    {
                        this.Write(", " + variable);
                    }
                    else
                    {
                        this.Write(", ");
                        this.Emitter.IsAssignment = false;
                        assignmentExpression.Right.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = oldAssigment;
                    }
                }

                if (needReturnValue)
                {
                    this.Write(")");
                }

                return;
            }

            if (assignmentExpression.Operator == AssignmentOperatorType.Multiply &&
                !(this.Emitter.IsJavaScriptOverflowMode && !ConversionBlock.InsideOverflowContext(this.Emitter, assignmentExpression)) &&
                !isLong && !isLongExpected &&
                (
                    (Helpers.IsInteger32Type(leftResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(rightResolverResult.Type, this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(rr.Type, this.Emitter.Resolver)) ||

                    (Helpers.IsInteger32Type(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Left), this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression.Right), this.Emitter.Resolver) &&
                    Helpers.IsInteger32Type(rr.Type, this.Emitter.Resolver))
                ))
            {
                this.Emitter.IsAssignment = true;
                this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                var oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;
                this.AcceptLeftExpression(assignmentExpression.Left, memberTargetrr);

                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write(" = ");
                }

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AssignmentType = oldAssigmentType;
                this.Emitter.IsAssignment = oldAssigment;

                isUint = NullableType.GetUnderlyingType(rr.Type).IsKnownType(KnownTypeCode.UInt32);
                this.Write(JS.Types.BRIDGE_INT + "." + (isUint ? JS.Funcs.Math.UMUL : JS.Funcs.Math.MUL) + "(");
                assignmentExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(", ");
                oldValue1 = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;

                assignmentExpression.Right.AcceptVisitor(this.Emitter);

                if (ConversionBlock.IsInCheckedContext(this.Emitter, assignmentExpression))
                {
                    this.Write(", 1");
                }

                this.Write(")");

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AsyncExpressionHandling = asyncExpressionHandling;

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }

                if (needReturnValue && !isField)
                {
                    if (needTempVar)
                    {
                        this.Write(", " + variable);
                    }
                    else
                    {
                        this.Write(", ");
                        this.Emitter.IsAssignment = false;
                        assignmentExpression.Right.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = oldAssigment;
                    }
                }

                if (needReturnValue)
                {
                    this.Write(")");
                }

                return;
            }

            if (assignmentExpression.Operator == AssignmentOperatorType.Add ||
                assignmentExpression.Operator == AssignmentOperatorType.Subtract)
            {
                var add = assignmentExpression.Operator == AssignmentOperatorType.Add;

                if (this.Emitter.Validator.IsDelegateOrLambda(leftResolverResult))
                {
                    delegateAssigment = true;
                    var leftMemberResolveResult = leftResolverResult as MemberResolveResult;

                    if (leftMemberResolveResult != null)
                    {
                        isEvent = leftMemberResolveResult.Member is IEvent;
                    }

                    if (!isEvent)
                    {
                        this.Emitter.IsAssignment = true;
                        this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                        this.AcceptLeftExpression(assignmentExpression.Left, memberTargetrr);
                        this.Emitter.IsAssignment = false;

                        if (this.Emitter.Writers.Count == initCount)
                        {
                            this.Write(" = ");
                        }

                        this.Write(add ? JS.Funcs.BRIDGE_COMBINE : JS.Funcs.BRIDGE_REMOVE);
                        this.WriteOpenParentheses();
                    }
                }
            }

            bool nullable = orr != null && orr.IsLiftedOperator;
            string root = JS.Types.SYSTEM_NULLABLE + ".";

            bool special = nullable;

            this.Emitter.IsAssignment = true;
            this.Emitter.AssignmentType = assignmentExpression.Operator;
            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            bool thisAssignment = leftResolverResult is ThisResolveResult;

            if (!thisAssignment)
            {
                if (special || (isDecimal && isDecimalExpected) || (isLong && isLongExpected) || isUserOperator)
                {
                    this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                }

                if (delegateAssigment && !isEvent)
                {
                    this.Emitter.IsAssignment = false;
                }

                this.AcceptLeftExpression(assignmentExpression.Left, memberTargetrr);

                if (delegateAssigment)
                {
                    this.Emitter.IsAssignment = true;
                }
            }
            else
            {
                this.Write("(");
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AssignmentType = oldAssigmentType;
            this.Emitter.IsAssignment = oldAssigment;

            if (this.Emitter.Writers.Count == initCount && !delegateAssigment && !thisAssignment)
            {
                this.WriteSpace();
            }

            if (isDecimal && isDecimalExpected)
            {
                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write("= ");
                }

                oldValue = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;

                this.HandleDecimal(rr, variable);

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }

                if (needTempVar)
                {
                    this.Write(", " + variable + ")");
                }
                else if (needReturnValue)
                {
                    if (!isField)
                    {
                        this.Write(", ");
                        this.Emitter.IsAssignment = false;
                        assignmentExpression.Right.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = oldAssigment;
                    }

                    this.Write(")");
                }

                this.Emitter.ReplaceAwaiterByVar = oldValue;
                return;
            }

            if (isLong && isLongExpected)
            {
                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write("= ");
                }

                oldValue = this.Emitter.ReplaceAwaiterByVar;
                this.Emitter.ReplaceAwaiterByVar = true;

                this.HandleLong(rr, variable, isUint);

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }

                if (needTempVar)
                {
                    this.Write(", " + variable + ")");
                }
                else if (needReturnValue)
                {
                    if (!isField)
                    {
                        this.Write(", ");
                        this.Emitter.IsAssignment = false;
                        assignmentExpression.Right.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = oldAssigment;
                    }

                    this.Write(")");
                }
                this.Emitter.ReplaceAwaiterByVar = oldValue;
                return;
            }

            if (this.ResolveOperator(assignmentExpression, orr, initCount, thisAssignment))
            {
                if (thisAssignment)
                {
                    this.Write(")." + JS.Funcs.CLONE + "(this)");
                }
                else if (needReturnValue)
                {
                    this.Write(")");
                }
                return;
            }

            bool isBool = NullableType.IsNullable(rr.Type) ? NullableType.GetUnderlyingType(rr.Type).IsKnownType(KnownTypeCode.Boolean) : rr.Type.IsKnownType(KnownTypeCode.Boolean);

            if (!delegateAssigment)
            {
                if (!special)
                {
                    switch (assignmentExpression.Operator)
                    {
                        case AssignmentOperatorType.Assign:
                            break;

                        case AssignmentOperatorType.Add:
                            this.Write("+");
                            break;

                        case AssignmentOperatorType.BitwiseAnd:
                            if (!isBool)
                            {
                                this.Write("&");
                            }
                            break;

                        case AssignmentOperatorType.BitwiseOr:
                            if (!isBool)
                            {
                                this.Write("|");
                            }

                            break;

                        case AssignmentOperatorType.Divide:
                            this.Write("/");
                            break;

                        case AssignmentOperatorType.ExclusiveOr:
                            this.Write("^");
                            break;

                        case AssignmentOperatorType.Modulus:
                            this.Write("%");
                            break;

                        case AssignmentOperatorType.Multiply:
                            this.Write("*");
                            break;

                        case AssignmentOperatorType.ShiftLeft:
                            this.Write("<<");
                            break;

                        case AssignmentOperatorType.ShiftRight:
                            this.Write(isUint ? ">>>" : ">>");
                            break;

                        case AssignmentOperatorType.Subtract:
                            this.Write("-");
                            break;

                        default:
                            throw new EmitterException(assignmentExpression,
                                "Unsupported assignment operator: " + assignmentExpression.Operator.ToString());
                    }
                }

                if (special)
                {
                    if (this.Emitter.Writers.Count == initCount)
                    {
                        this.Write("= ");
                    }
                    this.Write(root);

                    switch (assignmentExpression.Operator)
                    {
                        case AssignmentOperatorType.Assign:
                            break;

                        case AssignmentOperatorType.Add:
                            this.Write(JS.Funcs.Math.ADD);
                            break;

                        case AssignmentOperatorType.BitwiseAnd:
                            this.Write(isBool ? JS.Funcs.Math.AND : JS.Funcs.Math.BAND);
                            break;

                        case AssignmentOperatorType.BitwiseOr:
                            this.Write(isBool ? JS.Funcs.Math.OR : JS.Funcs.Math.BOR);
                            break;

                        case AssignmentOperatorType.Divide:
                            this.Write(JS.Funcs.Math.DIV);
                            break;

                        case AssignmentOperatorType.ExclusiveOr:
                            this.Write(JS.Funcs.Math.XOR);
                            break;

                        case AssignmentOperatorType.Modulus:
                            this.Write(JS.Funcs.Math.MOD);
                            break;

                        case AssignmentOperatorType.Multiply:
                            this.Write(JS.Funcs.Math.MUL);
                            break;

                        case AssignmentOperatorType.ShiftLeft:
                            this.Write(JS.Funcs.Math.SL);
                            break;

                        case AssignmentOperatorType.ShiftRight:
                            this.Write(isUint ? JS.Funcs.Math.SRR : JS.Funcs.Math.SR);
                            break;

                        case AssignmentOperatorType.Subtract:
                            this.Write(JS.Funcs.Math.SUB);
                            break;

                        default:
                            throw new EmitterException(assignmentExpression,
                                "Unsupported assignment operator: " + assignmentExpression.Operator.ToString());
                    }

                    this.WriteOpenParentheses();

                    assignmentExpression.Left.AcceptVisitor(this.Emitter);
                    this.Write(", ");
                }

                if (this.Emitter.Writers.Count == initCount && !thisAssignment && !special)
                {
                    this.Write("= ");
                }
            }
            else if (!isEvent)
            {
                this.WriteComma();
            }

            if (!special && isBool && (assignmentExpression.Operator == AssignmentOperatorType.BitwiseAnd || assignmentExpression.Operator == AssignmentOperatorType.BitwiseOr))
            {
                this.Write("!!(");
                assignmentExpression.Left.AcceptVisitor(this.Emitter);
                this.Write(assignmentExpression.Operator == AssignmentOperatorType.BitwiseAnd ? " & " : " | ");
            }

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            if (charToString == 1)
            {
                this.Write(JS.Funcs.STRING_FROMCHARCODE + "(");
            }

            if (needTempVar)
            {
                int pos = this.Emitter.Output.Length;
                this.Write(variable);
                Helpers.CheckValueTypeClone(rr, assignmentExpression.Right, this, pos);
            }
            else
            {
                var wrap = assignmentExpression.Operator != AssignmentOperatorType.Assign
                    && this.Emitter.Writers.Count > initCount
                    && !AssigmentExpressionHelper.CheckIsRightAssigmentExpression(assignmentExpression);

                if (wrap)
                {
                    this.WriteOpenParentheses();
                }

                assignmentExpression.Right.AcceptVisitor(this.Emitter);

                if (wrap)
                {
                    this.WriteCloseParentheses();
                }
            }

            if (!special && isBool &&
                (assignmentExpression.Operator == AssignmentOperatorType.BitwiseAnd ||
                 assignmentExpression.Operator == AssignmentOperatorType.BitwiseOr))
            {
                this.WriteCloseParentheses();
            }

            if (charToString == 1)
            {
                this.WriteCloseParentheses();
            }

            if (special)
            {
                this.WriteCloseParentheses();
            }

            if (thisAssignment)
            {
                this.Write(")." + JS.Funcs.CLONE + "(this)");
            }

            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = asyncExpressionHandling;

            if (this.Emitter.Writers.Count > initCount)
            {
                var writerCount = this.Emitter.Writers.Count;
                for (int i = initCount; i < writerCount; i++)
                {
                    this.PopWriter();
                }
            }

            if (delegateAssigment)
            {
                this.WriteCloseParentheses();
            }

            if (needTempVar)
            {
                this.Write(", " + variable + ")");
            }
            else if (needReturnValue)
            {
                if (!isField)
                {
                    this.Write(", ");
                    this.Emitter.IsAssignment = false;
                    assignmentExpression.Right.AcceptVisitor(this.Emitter);
                    this.Emitter.IsAssignment = oldAssigment;
                }

                this.Write(")");
            }
        }

        private void AcceptLeftExpression(Expression left, ResolveResult rr)
        {
            var mrr = rr as MemberResolveResult;
            if (!this.Emitter.InConstructor || mrr == null || !(mrr.Member is IProperty) || mrr.Member.IsStatic || mrr.Member.DeclaringTypeDefinition == null || !mrr.Member.DeclaringTypeDefinition.Equals(this.Emitter.TypeInfo.Type))
            {
                left.AcceptVisitor(this.Emitter);
            }
            else
            {
                var property = (IProperty)mrr.Member;
                var proto = mrr.IsVirtualCall || property.IsVirtual || property.IsOverride;

                var td = this.Emitter.GetTypeDefinition();
                var prop = td.Properties.FirstOrDefault(p => p.Name == mrr.Member.Name);

                if (proto && prop != null && prop.SetMethod == null)
                {
                    var name = OverloadsCollection.Create(this.Emitter, mrr.Member).GetOverloadName();
                    this.Write(JS.Types.Bridge.ENSURE_BASE_PROPERTY + "(this, \"" + name + "\")");
                    this.WriteDot();
                    var alias = BridgeTypes.ToJsName(mrr.Member.DeclaringType, this.Emitter, isAlias: true);
                    if (alias.StartsWith("\""))
                    {
                        alias = alias.Insert(1, "$");
                        name = alias + "+\"$" + name + "\"";
                        this.WriteIdentifier(name, false);
                    }
                    else
                    {
                        name = "$" + alias + "$" + name;
                        this.WriteIdentifier(name);
                    }
                }
                else
                {
                    left.AcceptVisitor(this.Emitter);
                }
            }
        }

        private void HandleType(ResolveResult resolveOperator, string variable, string op_name, KnownTypeCode typeCode)
        {
            if (this.AssignmentExpression.Operator == AssignmentOperatorType.Assign)
            {
                if (variable != null)
                {
                    this.Write(variable);
                }
                else
                {
                    new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Right }, null, null, 0).Emit();
                }

                return;
            }

            var orr = resolveOperator as OperatorResolveResult;
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;
            var assigmentType = Helpers.TypeOfAssignment(this.AssignmentExpression.Operator);
            if (orr != null && method == null)
            {
                var name = Helpers.GetBinaryOperatorMethodName(assigmentType);
                var type = NullableType.IsNullable(orr.Type) ? NullableType.GetUnderlyingType(orr.Type) : orr.Type;
                method = type.GetMethods(m => m.Name == name, GetMemberOptions.IgnoreInheritedMembers).FirstOrDefault();
            }

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (orr.IsLiftedOperator)
                {
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                    string action = JS.Funcs.Math.LIFT2;

                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    if (variable != null)
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left }, null, null, 0).Emit();
                    }
                    else
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left, this.AssignmentExpression.Right }, null, null, 0).Emit();
                    }
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
                else if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, this.AssignmentExpression, orr, method), inline).Emit();
                }
                else if (!this.Emitter.Validator.IsExternalType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    if (variable != null)
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left }, null, null, 0).Emit();
                        this.Write(", " + variable);
                    }
                    else
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left, this.AssignmentExpression.Right }, null, null, 0).Emit();
                    }

                    this.WriteCloseParentheses();
                }
            }
            else
            {
                if (orr.IsLiftedOperator)
                {
                    this.Write(JS.Types.SYSTEM_NULLABLE + ".");
                    string action = JS.Funcs.Math.LIFT2;

                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    if (variable != null)
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left }, null, null, 0).Emit();
                    }
                    else
                    {
                        new ExpressionListBlock(this.Emitter, new Expression[] { this.AssignmentExpression.Left, this.AssignmentExpression.Right }, null, null, 0).Emit();
                    }
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
                else
                {
                    this.AssignmentExpression.Left.AcceptVisitor(this.Emitter);
                    this.WriteDot();
                    this.Write(op_name);
                    this.WriteOpenParentheses();
                    this.AssignmentExpression.Right.AcceptVisitor(this.Emitter);
                    this.AddOveflowFlag(typeCode, op_name);
                    this.WriteCloseParentheses();
                }
            }
        }

        private void AddOveflowFlag(KnownTypeCode typeCode, string op_name)
        {
            if ((typeCode == KnownTypeCode.Int64 || typeCode == KnownTypeCode.UInt64) && ConversionBlock.IsInCheckedContext(this.Emitter, this.AssignmentExpression))
            {
                if (op_name == JS.Funcs.Math.ADD || op_name == JS.Funcs.Math.SUB || op_name == JS.Funcs.Math.MUL)
                {
                    this.Write(", 1");
                }
            }
        }

        private void HandleDecimal(ResolveResult resolveOperator, string variable)
        {
            var assigmentType = Helpers.TypeOfAssignment(this.AssignmentExpression.Operator);

            string op_name = null;

            if (this.AssignmentExpression.Operator != AssignmentOperatorType.Assign)
            {
                switch (assigmentType)
                {
                    case BinaryOperatorType.GreaterThan:
                        op_name = JS.Funcs.Math.GT;
                        break;

                    case BinaryOperatorType.GreaterThanOrEqual:
                        op_name = JS.Funcs.Math.GTE;
                        break;

                    case BinaryOperatorType.Equality:
                        op_name = JS.Funcs.Math.EQUALS;
                        break;

                    case BinaryOperatorType.InEquality:
                        op_name = JS.Funcs.Math.NE;
                        break;

                    case BinaryOperatorType.LessThan:
                        op_name = JS.Funcs.Math.LT;
                        break;

                    case BinaryOperatorType.LessThanOrEqual:
                        op_name = JS.Funcs.Math.LTE;
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
            }
            this.HandleType(resolveOperator, variable, op_name, KnownTypeCode.Decimal);
        }

        private void HandleLong(ResolveResult resolveOperator, string variable, bool isUnsigned)
        {
            var assigmentType = Helpers.TypeOfAssignment(this.AssignmentExpression.Operator);

            string op_name = null;
            if (this.AssignmentExpression.Operator != AssignmentOperatorType.Assign)
            {
                switch (assigmentType)
                {
                    case BinaryOperatorType.GreaterThan:
                        op_name = JS.Funcs.Math.GT;
                        break;

                    case BinaryOperatorType.GreaterThanOrEqual:
                        op_name = JS.Funcs.Math.GTE;
                        break;

                    case BinaryOperatorType.Equality:
                        op_name = JS.Funcs.Math.EQUALS;
                        break;

                    case BinaryOperatorType.InEquality:
                        op_name = JS.Funcs.Math.NE;
                        break;

                    case BinaryOperatorType.LessThan:
                        op_name = JS.Funcs.Math.LT;
                        break;

                    case BinaryOperatorType.LessThanOrEqual:
                        op_name = JS.Funcs.Math.LTE;
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
                        op_name = isUnsigned ? JS.Funcs.Math.SHRU : JS.Funcs.Math.SHR;
                        break;

                    default:
                        throw new ArgumentOutOfRangeException();
                }
            }

            this.HandleType(resolveOperator, variable, op_name, isUnsigned ? KnownTypeCode.UInt64 : KnownTypeCode.Int64);
        }
    }
}