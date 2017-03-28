using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class WhileBlock : AbstractEmitterBlock
    {
        public WhileBlock(IEmitter emitter, WhileStatement whileStatement)
            : base(emitter, whileStatement)
        {
            this.Emitter = emitter;
            this.WhileStatement = whileStatement;
        }

        public WhileStatement WhileStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var awaiters = this.Emitter.IsAsync ? this.GetAwaiters(this.WhileStatement) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                this.VisitAsyncWhileStatement();
            }
            else
            {
                this.VisitWhileStatement();
            }
        }

        protected void VisitAsyncWhileStatement()
        {
            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = new List<IJumpInfo>();

            IAsyncStep conditionStep = null;
            var lastStep = this.Emitter.AsyncBlock.Steps.Last();

            if (string.IsNullOrWhiteSpace(lastStep.Output.ToString()))
            {
                conditionStep = lastStep;
            }
            else
            {
                lastStep.JumpToStep = this.Emitter.AsyncBlock.Step;
                conditionStep = this.Emitter.AsyncBlock.AddAsyncStep();
            }

            this.WriteAwaiters(this.WhileStatement.Condition);
            this.Emitter.ReplaceAwaiterByVar = true;

            this.WriteIf();
            this.WriteOpenParentheses(true);
            this.WhileStatement.Condition.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses(true);
            this.Emitter.ReplaceAwaiterByVar = oldValue;

            this.WriteSpace();
            this.BeginBlock();

            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");

            var writer = this.SaveWriter();

            this.Emitter.AsyncBlock.AddAsyncStep();
            this.Emitter.IgnoreBlock = this.WhileStatement.EmbeddedStatement;

            var startCount = this.Emitter.AsyncBlock.Steps.Count;

            this.WhileStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);

            if (!AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
            {
                this.WriteNewLine();
                this.Write(JS.Vars.ASYNC_STEP + " = " + conditionStep.Step + ";");
                this.WriteNewLine();
                this.Write("continue;");
            }

            this.RestoreWriter(writer);

            this.WriteNewLine();
            this.EndBlock();
            this.WriteSpace();

            if (!AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
            {
                this.WriteNewLine();
                this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
                this.WriteNewLine();
                this.Write("continue;");
            }

            var nextStep = this.Emitter.AsyncBlock.AddAsyncStep();
            conditionStep.JumpToStep = nextStep.Step;

            if (this.Emitter.JumpStatements.Count > 0)
            {
                this.Emitter.JumpStatements.Sort((j1, j2) => -j1.Position.CompareTo(j2.Position));
                foreach (var jump in this.Emitter.JumpStatements)
                {
                    jump.Output.Insert(jump.Position, jump.Break ? nextStep.Step : conditionStep.Step);
                }
            }

            this.Emitter.JumpStatements = jumpStatements;
        }

        protected void VisitWhileStatement()
        {
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = null;

            this.WriteWhile();
            this.WriteOpenParentheses();
            this.WhileStatement.Condition.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses();
            this.EmitBlockOrIndentedLine(this.WhileStatement.EmbeddedStatement);

            this.Emitter.JumpStatements = jumpStatements;
        }
    }
}