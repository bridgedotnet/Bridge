using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using Bridge.Contract;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class ReferenceArgumentVisitor : DepthFirstAstVisitor
    {
        public ReferenceArgumentVisitor(IEmitter emitter)
        {
            this.DirectionExpression = new List<Expression>();
            this.DirectionVariables = new List<IVariable>();
            this.Emitter = emitter;
        }

        public IEmitter Emitter
        {
            get; set;
        }

        public List<Expression> DirectionExpression
        {
            get;
            set;
        }

        public List<IVariable> DirectionVariables
        {
            get;
            set;
        }

        public override void VisitDirectionExpression(DirectionExpression directionExpression)
        {
            this.DirectionExpression.Add(directionExpression.Expression);
            base.VisitDirectionExpression(directionExpression);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            var capturedVariables = LambdaBlock.GetCapturedLoopVariables(this.Emitter, lambdaExpression, lambdaExpression.Parameters, true);

            if (capturedVariables != null)
            {
                DirectionVariables.AddRange(capturedVariables);
            }

            base.VisitLambdaExpression(lambdaExpression);
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            var capturedVariables = LambdaBlock.GetCapturedLoopVariables(this.Emitter, anonymousMethodExpression, anonymousMethodExpression.Parameters, true);

            if (capturedVariables != null)
            {
                DirectionVariables.AddRange(capturedVariables);
            }

            base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }
    }
}