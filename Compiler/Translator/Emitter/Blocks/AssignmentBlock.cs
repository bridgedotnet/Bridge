using System;
using System.Linq;
using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using ICSharpCode.NRefactory.TypeSystem.Implementation;

namespace Bridge.Translator
{
    public class AssignmentBlock : AbstractEmitterBlock
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

        protected override void DoEmit()
        {
            this.VisitAssignmentExpression();
        }

        protected bool ResolveOperator(AssignmentExpression assignmentExpression, OperatorResolveResult orr, int initCount)
        {
            var method = orr != null ? orr.UserDefinedOperatorMethod : null;

            if (method != null)
            {
                var inline = this.Emitter.GetInline(method);

                if (!string.IsNullOrWhiteSpace(inline))
                {
                    if (this.Emitter.Writers.Count == initCount)
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
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                {
                    if (this.Emitter.Writers.Count == initCount)
                    {
                        this.Write("= ");
                    }

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

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { assignmentExpression.Left, assignmentExpression.Right }, null).Emit();
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
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
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
            var expectedType = this.Emitter.Resolver.Resolver.GetExpectedType(assignmentExpression);
            bool isDecimalExpected = Helpers.IsDecimalType(expectedType, this.Emitter.Resolver);
            bool isUserOperator = this.IsUserOperator(orr);

            if (assignmentExpression.Operator == AssignmentOperatorType.Divide &&
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
                assignmentExpression.Left.AcceptVisitor(this.Emitter);

                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write(" = ");
                }

                this.Emitter.ReplaceAwaiterByVar = oldValue1;
                this.Emitter.AssignmentType = oldAssigmentType;
                this.Emitter.IsAssignment = oldAssigment;

                this.Write("Bridge.Int.div(");
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
                        isEvent = leftMemberResolveResult.Member is DefaultResolvedEvent;
                    }

                    if (!isEvent)
                    {
                        this.Emitter.IsAssignment = true;
                        this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                        assignmentExpression.Left.AcceptVisitor(this.Emitter);
                        this.Emitter.IsAssignment = false;

                        if (this.Emitter.Writers.Count == initCount)
                        {
                            this.Write(" = ");
                        }

                        this.Write(Bridge.Translator.Emitter.ROOT + "." + (add ? Bridge.Translator.Emitter.DELEGATE_COMBINE : Bridge.Translator.Emitter.DELEGATE_REMOVE));
                        this.WriteOpenParentheses();
                    }
                }
            }

            bool nullable = orr != null && orr.IsLiftedOperator;
            string root = Bridge.Translator.Emitter.ROOT + ".Nullable.";

            bool special = nullable;

            this.Emitter.IsAssignment = true;
            this.Emitter.AssignmentType = assignmentExpression.Operator;
            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            bool thisAssignment = leftResolverResult is ThisResolveResult;

            if (!thisAssignment)
            {
                if (special || (isDecimal && isDecimalExpected) || isUserOperator)
                {
                    this.Emitter.AssignmentType = AssignmentOperatorType.Assign;
                }

                if (delegateAssigment && !isEvent)
                {
                    this.Emitter.IsAssignment = false;
                }

                assignmentExpression.Left.AcceptVisitor(this.Emitter);

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

            if (this.Emitter.Writers.Count == 0 && !delegateAssigment && !thisAssignment)
            {
                this.WriteSpace();
            }

            if (isDecimal && isDecimalExpected)
            {
                if (this.Emitter.Writers.Count == initCount)
                {
                    this.Write(" = ");
                }

                this.HandleDecimal(rr);

                if (this.Emitter.Writers.Count > initCount)
                {
                    this.PopWriter();
                }

                return;
            }

            if (this.ResolveOperator(assignmentExpression, orr, initCount))
            {
                return;
            }

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
                            this.Write("&");
                            break;
                        case AssignmentOperatorType.BitwiseOr:
                            this.Write("|");
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
                            this.Write(">>");
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
                        this.Write(" = ");
                    }
                    this.Write(root);

                    switch (assignmentExpression.Operator)
                    {
                        case AssignmentOperatorType.Assign:
                            break;
                        case AssignmentOperatorType.Add:
                            this.Write("add");
                            break;
                        case AssignmentOperatorType.BitwiseAnd:
                            this.Write("band");
                            break;
                        case AssignmentOperatorType.BitwiseOr:
                            this.Write("bor");
                            break;
                        case AssignmentOperatorType.Divide:
                            this.Write("div");
                            break;
                        case AssignmentOperatorType.ExclusiveOr:
                            this.Write("xor");
                            break;
                        case AssignmentOperatorType.Modulus:
                            this.Write("mod");
                            break;
                        case AssignmentOperatorType.Multiply:
                            this.Write("mul");
                            break;
                        case AssignmentOperatorType.ShiftLeft:
                            this.Write("sl");
                            break;
                        case AssignmentOperatorType.ShiftRight:
                            this.Write("sr");
                            break;
                        case AssignmentOperatorType.Subtract:
                            this.Write("sub");
                            break;
                        default:
                            throw new EmitterException(assignmentExpression,
                                "Unsupported assignment operator: " + assignmentExpression.Operator.ToString());
                    }

                    this.WriteOpenParentheses();

                    assignmentExpression.Left.AcceptVisitor(this.Emitter);
                    this.Write(", ");
                    }

                int count = this.Emitter.Writers.Count;
                if (count == 0 && !thisAssignment && !special)
                {
                    this.Write("= ");
                }
            }
            else if (!isEvent)
            {
                this.WriteComma();
            }

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;

            assignmentExpression.Right.AcceptVisitor(this.Emitter);

            if (special)
            {
                this.WriteCloseParentheses();
            }

            if (thisAssignment)
            {
                this.Write(").$clone(this)");
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
        }

        private void HandleDecimal(ResolveResult resolveOperator)
        {
            if (this.AssignmentExpression.Operator == AssignmentOperatorType.Assign)
            {
                new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.AssignmentExpression.Right }, null).Emit();
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
                    this.Write(Bridge.Translator.Emitter.ROOT + ".Nullable.");
                    string action = "lift2";
                    string op_name = null;

                    switch (assigmentType)
                    {
                        case BinaryOperatorType.GreaterThan:
                            op_name = "gt";
                            break;
                        case BinaryOperatorType.GreaterThanOrEqual:
                            op_name = "gte";
                            break;
                        case BinaryOperatorType.Equality:
                            op_name = "equals";
                            break;
                        case BinaryOperatorType.InEquality:
                            op_name = "ne";
                            break;
                        case BinaryOperatorType.LessThan:
                            op_name = "lt";
                            break;
                        case BinaryOperatorType.LessThanOrEqual:
                            op_name = "lte";
                            break;
                        case BinaryOperatorType.Add:
                            op_name = "add";
                            break;
                        case BinaryOperatorType.Subtract:
                            op_name = "sub";
                            break;
                        case BinaryOperatorType.Multiply:
                            op_name = "mul";
                            break;
                        case BinaryOperatorType.Divide:
                            op_name = "div";
                            break;
                        case BinaryOperatorType.Modulus:
                            op_name = "mod";
                            break;
                        default:
                            throw new ArgumentOutOfRangeException();
                    }

                    this.Write(action);
                    this.WriteOpenParentheses();
                    this.WriteScript(op_name);
                    this.WriteComma();
                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.AssignmentExpression.Left, this.AssignmentExpression.Right }, null).Emit();
                    this.WriteCloseParentheses();
                }
                else if (!string.IsNullOrWhiteSpace(inline))
                {
                    new InlineArgumentsBlock(this.Emitter,
                        new ArgumentsInfo(this.Emitter, this.AssignmentExpression, orr, method), inline).Emit();
                }
                else if (!this.Emitter.Validator.IsIgnoreType(method.DeclaringTypeDefinition))
                {
                    this.Write(BridgeTypes.ToJsName(method.DeclaringType, this.Emitter));
                    this.WriteDot();

                    this.Write(OverloadsCollection.Create(this.Emitter, method).GetOverloadName());

                    this.WriteOpenParentheses();

                    new ExpressionListBlock(this.Emitter,
                        new Expression[] { this.AssignmentExpression.Left, this.AssignmentExpression.Right }, null).Emit();
                    this.WriteCloseParentheses();
                }
            }
        }
    }
}
