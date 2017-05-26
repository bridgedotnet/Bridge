using ICSharpCode.NRefactory.CSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Contract;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class AwaitSearchVisitor : DepthFirstAstVisitor
    {
        public AwaitSearchVisitor(IEmitter emitter)
        {
            this.AwaitExpressions = new List<AstNode>();
            this.InsertPosition = -1;
            this.Emitter = emitter;
        }

        public IEmitter Emitter
        {
            get;
            set;
        }

        private List<AstNode> AwaitExpressions
        {
            get;
            set;
        }

        public List<AstNode> GetAwaitExpressions()
        {
            return this.AwaitExpressions.ToList();
        }

        private int InsertPosition
        {
            get;
            set;
        }

        private void Add(AstNode node)
        {
            if (this.InsertPosition >= 0)
            {
                this.AwaitExpressions.Insert(this.InsertPosition++, node);
            }
            else
            {
                this.AwaitExpressions.Add(node);
            }
        }

        public override void VisitConditionalExpression(ConditionalExpression conditionalExpression)
        {
            var count = this.AwaitExpressions.Count;
            var idx = this.InsertPosition;

            base.VisitConditionalExpression(conditionalExpression);

            if (this.AwaitExpressions.Count > count)
            {
                this.AwaitExpressions.Insert(idx > -1 ? idx : 0, conditionalExpression);
            }
        }

        public override void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression)
        {
            if (this.Emitter != null && binaryOperatorExpression.GetParent<SyntaxTree>() != null)
            {
                var rr = this.Emitter.Resolver.ResolveNode(binaryOperatorExpression, this.Emitter) as OperatorResolveResult;
                if (rr != null && rr.Type.IsKnownType(KnownTypeCode.Boolean))
                {
                    var count = this.AwaitExpressions.Count;
                    var idx = this.InsertPosition;

                    base.VisitBinaryOperatorExpression(binaryOperatorExpression);

                    if (this.AwaitExpressions.Count > count)
                    {
                        this.AwaitExpressions.Insert(idx > -1 ? idx : 0, binaryOperatorExpression);
                    }

                    return;
                }
            }

            base.VisitBinaryOperatorExpression(binaryOperatorExpression);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            var uo = invocationExpression.Parent as UnaryOperatorExpression;
            int oldPos = -2;
            if (uo != null && uo.Operator == UnaryOperatorType.Await)
            {
                oldPos = this.InsertPosition;
                this.InsertPosition = Math.Max(this.InsertPosition - 1, 0);
            }

            base.VisitInvocationExpression(invocationExpression);

            if (oldPos > -2)
            {
                this.InsertPosition = oldPos;
            }
        }

        public override void VisitYieldReturnStatement(YieldReturnStatement yieldReturnStatement)
        {
            this.Add(yieldReturnStatement);

            base.VisitYieldReturnStatement(yieldReturnStatement);
        }

        public override void VisitYieldBreakStatement(YieldBreakStatement yieldBreakStatement)
        {
            this.Add(yieldBreakStatement);

            base.VisitYieldBreakStatement(yieldBreakStatement);
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Await)
            {
                this.Add(unaryOperatorExpression.Expression);
            }

            base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override void VisitGotoCaseStatement(GotoCaseStatement gotoCaseStatement)
        {
            this.Add(gotoCaseStatement);
            base.VisitGotoCaseStatement(gotoCaseStatement);
        }

        public override void VisitGotoDefaultStatement(GotoDefaultStatement gotoDefaultStatement)
        {
            this.Add(gotoDefaultStatement);
            base.VisitGotoDefaultStatement(gotoDefaultStatement);
        }

        public override void VisitGotoStatement(GotoStatement gotoStatement)
        {
            this.Add(gotoStatement);
            base.VisitGotoStatement(gotoStatement);
        }

        public override void VisitLabelStatement(LabelStatement labelStatement)
        {
            this.Add(labelStatement);
            base.VisitLabelStatement(labelStatement);
        }
    }

    public class AsyncTryVisitor : DepthFirstAstVisitor
    {
        public AsyncTryVisitor()
        {
        }

        public bool Found
        {
            get;
            set;
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (unaryOperatorExpression.Operator == UnaryOperatorType.Await)
            {
                var tryBlock = unaryOperatorExpression.GetParent<TryCatchStatement>();

                if (tryBlock != null)
                {
                    this.Found = true;
                }
            }

            base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }
    }
}