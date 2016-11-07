using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class LambdaVisitor : DepthFirstAstVisitor
    {
        private bool captureOnly;
        private IEmitter emitter;

        public LambdaVisitor(bool captureOnly = false, IEmitter emitter = null)
        {
            this.emitter = emitter;
            this.captureOnly = captureOnly;
            this.LambdaExpression = new List<Expression>();
        }

        public List<Expression> LambdaExpression
        {
            get;
            set;
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            if (captureOnly)
            {
                var analyzer = new CaptureAnalyzer(this.emitter);
                analyzer.Analyze(anonymousMethodExpression.Body, anonymousMethodExpression.Parameters.Select(p => p.Name));

                if (analyzer.UsedVariables.Count > 0)
                {
                    this.LambdaExpression.Add(anonymousMethodExpression);
                }
            }
            else
            {
                this.LambdaExpression.Add(anonymousMethodExpression);
            }

            base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            if (captureOnly)
            {
                var analyzer = new CaptureAnalyzer(this.emitter);
                analyzer.Analyze(lambdaExpression.Body, lambdaExpression.Parameters.Select(p => p.Name));

                if (analyzer.UsedVariables.Count > 0)
                {
                    this.LambdaExpression.Add(lambdaExpression);
                }
            }
            else
            {
                this.LambdaExpression.Add(lambdaExpression);
            }

            base.VisitLambdaExpression(lambdaExpression);
        }
    }

    public class ContinueBreakVisitor : DepthFirstAstVisitor
    {
        private bool findReturn;

        public ContinueBreakVisitor(bool findReturn)
        {
            this.findReturn = findReturn;

            if (findReturn)
            {
                this.Return = new List<ReturnStatement>();
            }
            else
            {
                this.Continue = new List<ContinueStatement>();
                this.Break = new List<BreakStatement>();
            }
        }

        public List<ContinueStatement> Continue
        {
            get;
            set;
        }

        public List<BreakStatement> Break
        {
            get;
            set;
        }

        public List<ReturnStatement> Return
        {
            get;
            set;
        }

        public bool InsideSwitch
        {
            get; set;
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
        }

        public override void VisitForStatement(ForStatement forStatement)
        {
            if (findReturn)
            {
                base.VisitForStatement(forStatement);
            }
        }

        public override void VisitForeachStatement(ForeachStatement foreachStatement)
        {
            if (findReturn)
            {
                base.VisitForeachStatement(foreachStatement);
            }
        }

        public override void VisitWhileStatement(WhileStatement whileStatement)
        {
            if (findReturn)
            {
                base.VisitWhileStatement(whileStatement);
            }
        }

        public override void VisitDoWhileStatement(DoWhileStatement doWhileStatement)
        {
            if (findReturn)
            {
                base.VisitDoWhileStatement(doWhileStatement);
            }
        }

        public override void VisitContinueStatement(ContinueStatement continueStatement)
        {
            if (!findReturn)
            {
                this.Continue.Add(continueStatement);
            }
            base.VisitContinueStatement(continueStatement);
        }

        public override void VisitBreakStatement(BreakStatement breakStatement)
        {
            if (!findReturn && !this.InsideSwitch)
            {
                this.Break.Add(breakStatement);
            }

            base.VisitBreakStatement(breakStatement);
        }

        public override void VisitReturnStatement(ReturnStatement returnStatement)
        {
            if (findReturn)
            {
                this.Return.Add(returnStatement);
            }
            base.VisitReturnStatement(returnStatement);
        }

        public override void VisitSwitchStatement(SwitchStatement switchStatement)
        {
            var oldValue = this.InsideSwitch;
            this.InsideSwitch = true;
            base.VisitSwitchStatement(switchStatement);
            this.InsideSwitch = oldValue;
        }
    }
}