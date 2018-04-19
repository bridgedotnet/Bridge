using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class YieldBlock : AbstractEmitterBlock
    {
        public YieldBlock(IEmitter emitter, YieldBreakStatement yieldBreakStatement)
            : base(emitter, yieldBreakStatement)
        {
            this.Emitter = emitter;
            this.YieldBreakStatement = yieldBreakStatement;
        }

        public YieldBlock(IEmitter emitter, YieldReturnStatement yieldReturnStatement)
            : base(emitter, yieldReturnStatement)
        {
            this.Emitter = emitter;
            this.YieldReturnStatement = yieldReturnStatement;
        }

        public YieldBreakStatement YieldBreakStatement
        {
            get;
            set;
        }

        public YieldReturnStatement YieldReturnStatement
        {
            get;
            set;
        }

        public List<IAsyncStep> EmittedAsyncSteps
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmittedAsyncSteps = this.Emitter.AsyncBlock.EmittedAsyncSteps;
            this.Emitter.AsyncBlock.EmittedAsyncSteps = new List<IAsyncStep>();

            if (this.YieldReturnStatement != null)
            {
                this.Write(JS.Vars.ENUMERATOR + "." + JS.Fields.CURRENT + " = ");
                this.YieldReturnStatement.Expression.AcceptVisitor(this.Emitter);
                this.WriteSemiColon();
                this.WriteNewLine();

                this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step);
                this.WriteSemiColon();
                this.WriteNewLine();

                this.WriteReturn(true);
                this.Write("true");
                this.WriteSemiColon();
                this.WriteNewLine();

                this.Emitter.AsyncBlock.AddAsyncStep();
            }
            else if (this.YieldBreakStatement != null)
            {
                this.WriteReturn(true);
                this.Write("false");

                this.WriteSemiColon();
                this.WriteNewLine();
            }

            this.Emitter.AsyncBlock.EmittedAsyncSteps = this.EmittedAsyncSteps;
        }

        public static bool HasYield(AstNode node)
        {
            var visitor = new YieldSearchVisitor();
            node.AcceptVisitor(visitor);
            return visitor.Found;
        }
    }
}