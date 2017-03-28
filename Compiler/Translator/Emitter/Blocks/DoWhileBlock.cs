using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class DoWhileBlock : AbstractEmitterBlock
    {
        public DoWhileBlock(IEmitter emitter, DoWhileStatement doWhileStatement)
            : base(emitter, doWhileStatement)
        {
            this.Emitter = emitter;
            this.DoWhileStatement = doWhileStatement;
        }

        public DoWhileStatement DoWhileStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var awaiters = this.Emitter.IsAsync ? this.GetAwaiters(this.DoWhileStatement) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                this.VisitAsyncDoWhileStatement();
            }
            else
            {
                this.VisitDoWhileStatement();
            }
        }

        protected void VisitAsyncDoWhileStatement()
        {
            DoWhileStatement doWhileStatement = this.DoWhileStatement;

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = new List<IJumpInfo>();

            var loopStep = this.Emitter.AsyncBlock.Steps.Last();

            if (!string.IsNullOrWhiteSpace(loopStep.Output.ToString()))
            {
                loopStep = this.Emitter.AsyncBlock.AddAsyncStep();
            }

            this.Emitter.IgnoreBlock = doWhileStatement.EmbeddedStatement;
            doWhileStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);

            this.Emitter.AsyncBlock.Steps.Last().JumpToStep = this.Emitter.AsyncBlock.Step;
            var conditionStep = this.Emitter.AsyncBlock.AddAsyncStep();
            this.WriteAwaiters(doWhileStatement.Condition);

            this.WriteIf();
            this.WriteOpenParentheses(true);
            this.Emitter.ReplaceAwaiterByVar = true;
            doWhileStatement.Condition.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses(true);
            this.Emitter.ReplaceAwaiterByVar = oldValue;

            this.WriteSpace();
            this.BeginBlock();
            this.WriteNewLine();
            this.Write(JS.Vars.ASYNC_STEP + " = " + loopStep.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");
            this.WriteNewLine();
            this.EndBlock();

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

        protected void VisitDoWhileStatement()
        {
            DoWhileStatement doWhileStatement = this.DoWhileStatement;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = null;

            this.WriteDo();
            this.EmitBlockOrIndentedLine(doWhileStatement.EmbeddedStatement);

            if (doWhileStatement.EmbeddedStatement is BlockStatement)
            {
                this.WriteSpace();
            }

            this.WriteWhile();
            this.WriteOpenParentheses();

            doWhileStatement.Condition.AcceptVisitor(this.Emitter);

            this.WriteCloseParentheses();
            this.WriteSemiColon();

            this.WriteNewLine();

            this.Emitter.JumpStatements = jumpStatements;
        }
    }
}