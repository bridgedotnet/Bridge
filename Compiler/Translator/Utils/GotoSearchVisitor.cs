using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class GotoSearchVisitor : DepthFirstAstVisitor
    {
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

        public override void VisitGotoStatement(GotoStatement gotoStatement)
        {
            this.Found = true;
        }

        public override void VisitGotoCaseStatement(GotoCaseStatement gotoCaseStatement)
        {
            this.Found = true;
        }

        public override void VisitGotoDefaultStatement(GotoDefaultStatement gotoDefaultStatement)
        {
            this.Found = true;
        }
    }
}