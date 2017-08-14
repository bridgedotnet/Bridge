using Bridge.Contract;
using Bridge.Contract.Constants;
using Bridge.Translator.Utils;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using Expression = ICSharpCode.NRefactory.CSharp.Expression;
using ExpressionStatement = ICSharpCode.NRefactory.CSharp.ExpressionStatement;
using ParenthesizedExpression = ICSharpCode.NRefactory.CSharp.ParenthesizedExpression;
using Statement = ICSharpCode.NRefactory.CSharp.Statement;

namespace Bridge.Translator
{
    public class PreconverterDetecter : DepthFirstAstVisitor
    {
        public PreconverterDetecter(MemberResolver resolver)
        {
            this.Resolver = resolver;
        }

        public bool Found
        {
            get;
            set;
        }

        public MemberResolver Resolver
        {
            get;
            set;
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement)
            {
                var rr = this.Resolver.ResolveNode(unaryOperatorExpression, null);

                if (rr is ErrorResolveResult)
                {
                    this.Found = true;
                }
                else
                {
                    var orr = rr as OperatorResolveResult;

                    if (orr != null && !Helpers.IsFloatType(orr.Type, this.Resolver) && !Helpers.Is64Type(orr.Type, this.Resolver))
                    {
                        this.Found = true;
                    }
                }
            }

            base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            if (assignmentExpression.Operator != AssignmentOperatorType.Any && assignmentExpression.Operator != AssignmentOperatorType.Assign)
            {
                var rr = this.Resolver.ResolveNode(assignmentExpression, null);
                var isInt = Helpers.IsIntegerType(rr.Type, this.Resolver);
                if (isInt || !(assignmentExpression.Parent is ExpressionStatement))
                {
                    this.Found = true;
                }

                if (assignmentExpression.Operator == AssignmentOperatorType.Add && rr.Type.IsKnownType(KnownTypeCode.String))
                {
                    this.Found = true;
                }

                if (this.Found && !isInt && assignmentExpression.Parent is ICSharpCode.NRefactory.CSharp.LambdaExpression)
                {
                    var lambdarr = this.Resolver.ResolveNode(assignmentExpression.Parent, null) as LambdaResolveResult;

                    if (lambdarr != null && lambdarr.ReturnType.Kind == TypeKind.Void)
                    {
                        this.Found = false;
                    }
                }
            }

            base.VisitAssignmentExpression(assignmentExpression);
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            var rr = this.Resolver.ResolveNode(invocationExpression, null) as InvocationResolveResult;

            if (rr != null && rr.IsError)
            {
                this.Found = true;
            }

            base.VisitInvocationExpression(invocationExpression);
        }

        public override void VisitUsingStatement(UsingStatement usingStatement)
        {
            var awaitSearch = new AwaitSearchVisitor(null);
            usingStatement.AcceptVisitor(awaitSearch);

            var awaiters = awaitSearch.GetAwaitExpressions().ToArray();

            if (awaiters.Length > 0)
            {
                this.Found = true;
            }

            base.VisitUsingStatement(usingStatement);
        }
    }

    public class PreconverterFixer : DepthFirstAstVisitor<AstNode>
    {
        public PreconverterFixer(MemberResolver resolver)
        {
            this.Resolver = resolver;
        }

        public MemberResolver Resolver
        {
            get;
            set;
        }

        protected override AstNode VisitChildren(AstNode node)
        {
            List<AstNode> newChildren = null;

            int i = 0;
            foreach (var child in node.Children)
            {
                var newChild = child.AcceptVisitor(this);
                if (newChild != null)
                {
                    newChildren = newChildren ?? Enumerable.Repeat((AstNode)null, i).ToList();
                    newChildren.Add(newChild);
                }
                else if (newChildren != null)
                {
                    newChildren.Add(null);
                }
                i++;
            }

            if (newChildren == null)
            {
                return null;
            }

            var result = node.Clone();

            i = 0;
            foreach (var children in result.Children)
            {
                if (newChildren[i] != null)
                    children.ReplaceWith(newChildren[i]);
                i++;
            }

            return result;
        }

        public override AstNode VisitUsingStatement(UsingStatement usingStatement)
        {
            var awaitSearch = new AwaitSearchVisitor(null);
            usingStatement.AcceptVisitor(awaitSearch);

            var awaiters = awaitSearch.GetAwaitExpressions().ToArray();

            if (awaiters.Length > 0)
            {
                IEnumerable<AstNode> inner = null;

                var res = usingStatement.ResourceAcquisition;
                var varStat = res as VariableDeclarationStatement;
                if (varStat != null)
                {
                    inner = varStat.Variables.Skip(1);
                    res = varStat.Variables.First();
                }

                return this.EmitUsing(usingStatement, res, inner, varStat);
            }

            return base.VisitUsingStatement(usingStatement);
        }

        private static int counter = 0;

        protected virtual string GetTempVarName()
        {
            return "_bridgeTmp_" + ++counter;
        }

        protected virtual Statement EmitUsing(UsingStatement usingStatement, AstNode expression, IEnumerable<AstNode> inner, VariableDeclarationStatement varStat)
        {
            string name = null;
            BlockStatement wrapper = null;

            var varInit = expression as VariableInitializer;
            if (varInit != null)
            {
                name = varInit.Name;
                wrapper = new BlockStatement();
                wrapper.Statements.Add(new VariableDeclarationStatement(varStat != null ? varStat.Type.Clone() : AstType.Null, varInit.Name, varInit.Initializer.Clone()));
            }
            else if (expression is IdentifierExpression)
            {
                name = ((IdentifierExpression)expression).Identifier;
            }
            else
            {
                name = this.GetTempVarName();
                wrapper = new BlockStatement();
                wrapper.Statements.Add(new VariableDeclarationStatement(varStat != null ? varStat.Type.Clone() : AstType.Null, name, expression.Clone() as Expression));
            }

            var tryCatchStatement = new TryCatchStatement();
            if (wrapper != null)
            {
                wrapper.Statements.Add(tryCatchStatement);
            }

            if (inner != null && inner.Any())
            {
                var block = new BlockStatement();
                block.Statements.Add(this.EmitUsing(usingStatement, inner.First(), inner.Skip(1), varStat));
                tryCatchStatement.TryBlock = block;
            }
            else
            {
                var block = usingStatement.EmbeddedStatement as BlockStatement;

                if (block == null)
                {
                    block = new BlockStatement();
                    block.Add(usingStatement.EmbeddedStatement.Clone());
                }
                else
                {
                    block = (BlockStatement)block.Clone();
                }

                tryCatchStatement.TryBlock = block;
            }

            var finallyBlock = new BlockStatement();
            var dispose = new InvocationExpression(
                new MemberReferenceExpression(
                    new MemberReferenceExpression(new TypeReferenceExpression(new MemberType(new SimpleType("global"), CS.NS.BRIDGE) { IsDoubleColon = true }), "Script"), "Write"),
                new PrimitiveExpression(
                    string.Format("if (" + JS.Funcs.BRIDGE_HASVALUE + "({0})) {0}." + JS.Funcs.DISPOSE + "();", name))
            );

            finallyBlock.Statements.Add(dispose);

            tryCatchStatement.FinallyBlock = finallyBlock;
            return wrapper ?? (Statement)tryCatchStatement;
        }

        public override AstNode VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            var rr = this.Resolver.ResolveNode(invocationExpression, null) as CSharpInvocationResolveResult;

            if (rr != null && rr.IsError)
            {
                InvocationExpression clonInvocationExpression = (InvocationExpression)base.VisitInvocationExpression(invocationExpression);
                if (clonInvocationExpression == null)
                {
                    clonInvocationExpression = (InvocationExpression)invocationExpression.Clone();
                }

                var map = rr.GetArgumentToParameterMap();
                var orig = clonInvocationExpression.Arguments.ToArray();
                var result = clonInvocationExpression.Arguments.ToArray();
                for (int i = 0; i < map.Count; i++)
                {
                    result[i] = orig[map[i]];
                }

                clonInvocationExpression.Arguments.ReplaceWith(result);
                return clonInvocationExpression;
            }

            return base.VisitInvocationExpression(invocationExpression);
        }

        public override AstNode VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement)
            {
                var rr = this.Resolver.ResolveNode(unaryOperatorExpression, null);

                if (rr is ErrorResolveResult)
                {
                    UnaryOperatorExpression clonUnaryOperatorExpression = (UnaryOperatorExpression)base.VisitUnaryOperatorExpression(unaryOperatorExpression);
                    if (clonUnaryOperatorExpression == null)
                    {
                        clonUnaryOperatorExpression = (UnaryOperatorExpression)unaryOperatorExpression.Clone();
                    }

                    bool isPost = clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement ||
                                  clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;

                    var isStatement = unaryOperatorExpression.Parent is ExpressionStatement;
                    var isIncr = clonUnaryOperatorExpression.Operator == UnaryOperatorType.Increment || clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;
                    AssignmentExpression ae;

                    ae = new AssignmentExpression(clonUnaryOperatorExpression.Expression.Clone(), new BinaryOperatorExpression(clonUnaryOperatorExpression.Expression.Clone(), isIncr ? BinaryOperatorType.Add : BinaryOperatorType.Subtract, new PrimitiveExpression(1)));

                    if (isPost && !isStatement)
                    {
                        return new InvocationExpression(new MemberReferenceExpression(new MemberReferenceExpression(new TypeReferenceExpression(new MemberType(new SimpleType("global"), CS.NS.BRIDGE) { IsDoubleColon = true }), "Script"), "Identity"), clonUnaryOperatorExpression.Expression.Clone(), ae);
                    }
                    else
                    {
                        if (isStatement)
                        {
                            return ae;
                        }

                        return new ParenthesizedExpression(ae);
                    }
                }
                else
                {
                    var orr = (OperatorResolveResult)rr;

                    if (Helpers.IsFloatType(orr.Type, this.Resolver) || Helpers.Is64Type(orr.Type, this.Resolver))
                    {
                        return base.VisitUnaryOperatorExpression(unaryOperatorExpression);
                    }

                    UnaryOperatorExpression clonUnaryOperatorExpression = (UnaryOperatorExpression)base.VisitUnaryOperatorExpression(unaryOperatorExpression);
                    if (clonUnaryOperatorExpression == null)
                    {
                        clonUnaryOperatorExpression = (UnaryOperatorExpression)unaryOperatorExpression.Clone();
                    }

                    bool isPost = clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement ||
                                  clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;

                    var isStatement = unaryOperatorExpression.Parent is ExpressionStatement;
                    var isIncr = clonUnaryOperatorExpression.Operator == UnaryOperatorType.Increment || clonUnaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement;
                    AssignmentExpression ae;

                    if (orr.UserDefinedOperatorMethod != null)
                    {
                        ae = new AssignmentExpression(clonUnaryOperatorExpression.Expression.Clone(), clonUnaryOperatorExpression);
                    }
                    else
                    {
                        ae = new AssignmentExpression(clonUnaryOperatorExpression.Expression.Clone(),
                                 new BinaryOperatorExpression(clonUnaryOperatorExpression.Expression.Clone(), isIncr ? BinaryOperatorType.Add : BinaryOperatorType.Subtract, new PrimitiveExpression(1)));
                    }

                    if (isPost && !isStatement)
                    {
                        return new InvocationExpression(new MemberReferenceExpression(new MemberReferenceExpression(new TypeReferenceExpression(new MemberType(new SimpleType("global"), CS.NS.BRIDGE) { IsDoubleColon = true }), "Script"), "Identity"), clonUnaryOperatorExpression.Expression.Clone(), ae);
                    }
                    else
                    {
                        if (isStatement)
                        {
                            return ae;
                        }

                        return new ParenthesizedExpression(ae);
                    }
                }
            }

            return base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override AstNode VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            var rr = this.Resolver.ResolveNode(assignmentExpression, null);
            bool found = false;
            var isInt = Helpers.IsIntegerType(rr.Type, this.Resolver);
            if (isInt || !(assignmentExpression.Parent is ExpressionStatement))
            {
                found = true;
            }

            if (found && !isInt && assignmentExpression.Parent is ICSharpCode.NRefactory.CSharp.LambdaExpression)
            {
                var lambdarr = this.Resolver.ResolveNode(assignmentExpression.Parent, null) as LambdaResolveResult;

                if (lambdarr != null && lambdarr.ReturnType.Kind == TypeKind.Void)
                {
                    found = false;
                }
            }

            if (assignmentExpression.Operator == AssignmentOperatorType.Add && rr.Type.IsKnownType(KnownTypeCode.String))
            {
                found = true;
            }

            if (assignmentExpression.Operator != AssignmentOperatorType.Any &&
                assignmentExpression.Operator != AssignmentOperatorType.Assign &&
                found)
            {
                AssignmentExpression clonAssignmentExpression = (AssignmentExpression)base.VisitAssignmentExpression(assignmentExpression);
                if (clonAssignmentExpression == null)
                {
                    clonAssignmentExpression = (AssignmentExpression)assignmentExpression.Clone();
                }

                var op = clonAssignmentExpression.Operator;
                clonAssignmentExpression.Operator = AssignmentOperatorType.Assign;
                BinaryOperatorType opType;
                switch (op)
                {
                    case AssignmentOperatorType.Add:
                        opType = BinaryOperatorType.Add;
                        break;

                    case AssignmentOperatorType.Subtract:
                        opType = BinaryOperatorType.Subtract;
                        break;

                    case AssignmentOperatorType.Multiply:
                        opType = BinaryOperatorType.Multiply;
                        break;

                    case AssignmentOperatorType.Divide:
                        opType = BinaryOperatorType.Divide;
                        break;

                    case AssignmentOperatorType.Modulus:
                        opType = BinaryOperatorType.Modulus;
                        break;

                    case AssignmentOperatorType.ShiftLeft:
                        opType = BinaryOperatorType.ShiftLeft;
                        break;

                    case AssignmentOperatorType.ShiftRight:
                        opType = BinaryOperatorType.ShiftRight;
                        break;

                    case AssignmentOperatorType.BitwiseAnd:
                        opType = BinaryOperatorType.BitwiseAnd;
                        break;

                    case AssignmentOperatorType.BitwiseOr:
                        opType = BinaryOperatorType.BitwiseOr;
                        break;

                    case AssignmentOperatorType.ExclusiveOr:
                        opType = BinaryOperatorType.ExclusiveOr;
                        break;

                    default:
                        throw new ArgumentOutOfRangeException();
                }

                var wrapRightExpression = AssigmentExpressionHelper.CheckIsRightAssigmentExpression(clonAssignmentExpression)
                    ? clonAssignmentExpression.Right.Clone()
                    : new ParenthesizedExpression(clonAssignmentExpression.Right.Clone());

                clonAssignmentExpression.Right = new BinaryOperatorExpression(
                    clonAssignmentExpression.Left.Clone(),
                    opType,
                    wrapRightExpression);

                return clonAssignmentExpression;
            }

            return base.VisitAssignmentExpression(assignmentExpression);
        }
    }
}