using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class ExpressionBlock : AbstractEmitterBlock
    {
        public ExpressionBlock(IEmitter emitter, ExpressionStatement expressionStatement)
            : base(emitter, expressionStatement)
        {
            this.Emitter = emitter;
            this.ExpressionStatement = expressionStatement;
        }

        public ExpressionStatement ExpressionStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            if (this.ExpressionStatement.IsNull)
            {
                return;
            }

            var oldSemiColon = this.Emitter.EnableSemicolon;

            if (this.Emitter.IsAsync)
            {
                var awaitSearch = new AwaitSearchVisitor(this.Emitter);
                this.ExpressionStatement.Expression.AcceptVisitor(awaitSearch);
            }

            bool isAwaiter = this.ExpressionStatement.Expression is UnaryOperatorExpression && ((UnaryOperatorExpression)this.ExpressionStatement.Expression).Operator == UnaryOperatorType.Await;

            this.ExpressionStatement.Expression.AcceptVisitor(this.Emitter);

            if (this.Emitter.EnableSemicolon && !isAwaiter)
            {
                this.WriteSemiColon(true);
            }

            if (oldSemiColon)
            {
                this.Emitter.EnableSemicolon = true;
            }
        }
    }
}