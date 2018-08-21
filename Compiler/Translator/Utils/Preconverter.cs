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
using ICSharpCode.NRefactory.PatternMatching;
using Mono.Cecil;
using System.Text;

namespace Bridge.Translator
{
    public class PreconverterDetecter : DepthFirstAstVisitor
    {
        public PreconverterDetecter(MemberResolver resolver, IEmitter emitter)
        {
            this.Resolver = resolver;
            this.Emitter = emitter;
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

        internal IEmitter Emitter
        {
            get; private set;
        }
        internal CompilerRule Rules
        {
            get; private set;
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (this.Found)
            {
                return;
            }

            if (this.Rules.Integer == IntegerRule.Managed && (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement))
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
            if (this.Found)
            {
                return;
            }

            if (assignmentExpression.Operator != AssignmentOperatorType.Any && assignmentExpression.Operator != AssignmentOperatorType.Assign)
            {
                var rr = this.Resolver.ResolveNode(assignmentExpression, null);
                var isInt = Helpers.IsIntegerType(rr.Type, this.Resolver);
                if (this.Rules.Integer == IntegerRule.Managed && isInt || !(assignmentExpression.Parent is ExpressionStatement))
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

        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(methodDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            base.VisitMethodDeclaration(methodDeclaration);
        }

        public override void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(propertyDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            base.VisitPropertyDeclaration(propertyDeclaration);
        }

        public override void VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(indexerDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            base.VisitIndexerDeclaration(indexerDeclaration);
        }

        public override void VisitCustomEventDeclaration(CustomEventDeclaration eventDeclaration)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(eventDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            base.VisitCustomEventDeclaration(eventDeclaration);
        }

        public override void VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(typeDeclaration, null) as TypeResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Type.GetDefinition());
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            base.VisitTypeDeclaration(typeDeclaration);
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            if (this.Found)
            {
                return;
            }

            var rr = this.Resolver.ResolveNode(invocationExpression, null) as InvocationResolveResult;

            if (rr != null && rr.IsError)
            {
                this.Found = true;
            }

            base.VisitInvocationExpression(invocationExpression);
        }

        public override void VisitUsingStatement(UsingStatement usingStatement)
        {
            if (this.Found)
            {
                return;
            }

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
        public PreconverterFixer(MemberResolver resolver, IEmitter emitter)
        {
            this.Resolver = resolver;
            this.Emitter = emitter;
        }

        public PreconverterFixer(MemberResolver resolver, IEmitter emitter, ILogger log) : this(resolver, emitter)
        {
            this.log = log;
        }

        public MemberResolver Resolver
        {
            get;
            set;
        }

        internal IEmitter Emitter
        {
            get; private set;
        }
        internal CompilerRule Rules
        {
            get; private set;
        }

        private ILogger log;

        public override AstNode VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            var rr = this.Resolver.ResolveNode(methodDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            return base.VisitMethodDeclaration(methodDeclaration);
        }

        public override AstNode VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            var rr = this.Resolver.ResolveNode(propertyDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            return base.VisitPropertyDeclaration(propertyDeclaration);
        }

        public override AstNode VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            var rr = this.Resolver.ResolveNode(indexerDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            return base.VisitIndexerDeclaration(indexerDeclaration);
        }

        public override AstNode VisitCustomEventDeclaration(CustomEventDeclaration eventDeclaration)
        {
            var rr = this.Resolver.ResolveNode(eventDeclaration, null) as MemberResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Member);
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            return base.VisitCustomEventDeclaration(eventDeclaration);
        }

        public override AstNode VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            var rr = this.Resolver.ResolveNode(typeDeclaration, null) as TypeResolveResult;
            if (rr != null)
            {
                this.Rules = Contract.Rules.Get(this.Emitter, rr.Type.GetDefinition());
            }
            else
            {
                this.Rules = Contract.Rules.Default;
            }

            return base.VisitTypeDeclaration(typeDeclaration);
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
            UsingStatement node = (UsingStatement)base.VisitUsingStatement(usingStatement) ?? (UsingStatement)usingStatement.Clone();
            if (awaiters.Length > 0)
            {
                IEnumerable<AstNode> inner = null;

                var res = node.ResourceAcquisition;
                var varStat = res as VariableDeclarationStatement;
                if (varStat != null)
                {
                    inner = varStat.Variables.Skip(1);
                    res = varStat.Variables.First();
                }

                return this.EmitUsing(node, res, inner, varStat);
            }

            return node;
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
            try
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

                    if (rr.IsExtensionMethodInvocation)
                    {
                        for (int i = 1; i < map.Count; i++)
                        {
                            if (map[i] < 0)
                            {
                                continue;
                            }

                            result[i - 1] = orig[map[i] - 1];
                        }
                    }
                    else
                    {
                        for (int i = 0; i < map.Count; i++)
                        {
                            if (map[i] < 0)
                            {
                                continue;
                            }

                            result[i] = orig[map[i]];
                        }
                    }

                    clonInvocationExpression.Arguments.ReplaceWith(result);
                    return clonInvocationExpression;
                }
            }
            catch(Exception e)
            {
                var fileName = invocationExpression.GetParent<SyntaxTree>()?.FileName;

                this.log.Warn(string.Format("VisitInvocationExpression fails in {0} ({1}): {2}", fileName, invocationExpression.StartLocation.ToString(), e.Message));
            }

            return base.VisitInvocationExpression(invocationExpression);
        }

        public override AstNode VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (this.Rules.Integer == IntegerRule.Managed && (unaryOperatorExpression.Operator == UnaryOperatorType.Increment ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostIncrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.Decrement ||
                unaryOperatorExpression.Operator == UnaryOperatorType.PostDecrement))
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

        private int tempKey = 1;

        public override AstNode VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            var rr = this.Resolver.ResolveNode(assignmentExpression, null);
            var orr = rr as OperatorResolveResult;
            var simpleIndex = true;

            if (orr != null)
            {
                var accessrr = orr.Operands[0] as ArrayAccessResolveResult;
                if (accessrr != null)
                {
                    foreach (var index in accessrr.Indexes)
                    {
                        var indexMemberTargetrr = index as MemberResolveResult;
                        bool isIndexSimple = (indexMemberTargetrr != null && indexMemberTargetrr.Member is IField &&
                                       (indexMemberTargetrr.TargetResult is ThisResolveResult ||
                                        indexMemberTargetrr.TargetResult is LocalResolveResult)) || index is ThisResolveResult || index is LocalResolveResult || index is ConstantResolveResult;


                        if (!isIndexSimple)
                        {
                            simpleIndex = false;
                        }
                    }
                }
            }

            bool found = false;
            var isInt = Helpers.IsIntegerType(rr.Type, this.Resolver);
            if (this.Rules.Integer == IntegerRule.Managed && isInt || !(assignmentExpression.Parent is ExpressionStatement))
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

                var indexerExpr = clonAssignmentExpression.Left as IndexerExpression;
                List<Expression> leftIndexerArgs = null;
                List<Expression> rightIndexerArgs = null;
                var needReturnValue = false;

                if (indexerExpr != null && !simpleIndex)
                {
                    leftIndexerArgs = new List<Expression>();
                    rightIndexerArgs = new List<Expression>();

                    foreach (var index in indexerExpr.Arguments)
                    {
                        var expr = new InvocationExpression(new MemberReferenceExpression(new MemberReferenceExpression(new TypeReferenceExpression(new MemberType(new SimpleType("global"), CS.NS.BRIDGE) { IsDoubleColon = true }), "Script"), "ToTemp"), new PrimitiveExpression("idx" + tempKey), index.Clone());
                        leftIndexerArgs.Add(expr);

                        expr = new InvocationExpression(new MemberReferenceExpression(new MemberReferenceExpression(new TypeReferenceExpression(new MemberType(new SimpleType("global"), CS.NS.BRIDGE) { IsDoubleColon = true }), "Script"), "FromTemp"), new PrimitiveExpression("idx" + tempKey++), index.Clone());
                        rightIndexerArgs.Add(expr);
                    }

                    needReturnValue = !(assignmentExpression.Parent is ExpressionStatement);

                    if (needReturnValue && assignmentExpression.Parent is LambdaExpression)
                    {
                        var lambdarr = this.Resolver.ResolveNode(assignmentExpression.Parent, null) as LambdaResolveResult;

                        if (lambdarr != null && lambdarr.ReturnType.Kind == TypeKind.Void)
                        {
                            needReturnValue = false;
                        }
                    }

                    clonAssignmentExpression.Left = new IndexerExpression(indexerExpr.Target.Clone(), needReturnValue ? rightIndexerArgs : leftIndexerArgs);
                }
                else
                {
                    indexerExpr = null;
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
                    indexerExpr != null ? new IndexerExpression(indexerExpr.Target.Clone(), needReturnValue ? leftIndexerArgs : rightIndexerArgs) : clonAssignmentExpression.Left.Clone(),
                    opType,
                    wrapRightExpression);

                return clonAssignmentExpression;
            }

            return base.VisitAssignmentExpression(assignmentExpression);
        }
    }
}