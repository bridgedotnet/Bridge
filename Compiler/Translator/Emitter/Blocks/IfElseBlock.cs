using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public class IfElseBlock : AbstractEmitterBlock
    {
        public IfElseBlock(IEmitter emitter, IfElseStatement ifElseStatement)
            : base(emitter, ifElseStatement)
        {
            this.Emitter = emitter;
            this.IfElseStatement = ifElseStatement;
        }

        public IfElseStatement IfElseStatement
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
            this.VisitIfElseStatement();
        }

        protected void VisitIfElseStatement()
        {
            IfElseStatement ifElseStatement = this.IfElseStatement;

            var awaiters = this.GetAwaiters(ifElseStatement);

            if (awaiters == null || awaiters.Length == 0)
            {
                this.WriteIf();
                this.WriteOpenParentheses();
                ifElseStatement.Condition.AcceptVisitor(this.Emitter);
                this.WriteCloseParentheses();
                this.EmitBlockOrIndentedLine(ifElseStatement.TrueStatement);
                if (ifElseStatement.FalseStatement != null && !ifElseStatement.FalseStatement.IsNull)
                {
                    this.Write(" else");
                    this.EmitBlockOrIndentedLine(ifElseStatement.FalseStatement);
                }
                return;
            }

            this.WriteAwaiters(ifElseStatement.Condition);

            this.WriteIf();
            this.WriteOpenParentheses();

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            this.Emitter.ReplaceAwaiterByVar = true;
            ifElseStatement.Condition.AcceptVisitor(this.Emitter);
            this.Emitter.ReplaceAwaiterByVar = oldValue;

            this.WriteCloseParentheses();

            int startCount = 0;
            int elseCount = 0;
            IAsyncStep trueStep = null;
            IAsyncStep elseStep = null;

            if (this.Emitter.IsAsync)
            {
                startCount = this.Emitter.AsyncBlock.Steps.Count;

                this.EmittedAsyncSteps = this.Emitter.AsyncBlock.EmittedAsyncSteps;
                this.Emitter.AsyncBlock.EmittedAsyncSteps = new List<IAsyncStep>();

                this.Emitter.IgnoreBlock = ifElseStatement.TrueStatement;
                this.WriteSpace();
                this.BeginBlock();
                this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
                this.WriteNewLine();
                this.Write("continue;");
                var writer = this.SaveWriter();
                this.Emitter.AsyncBlock.AddAsyncStep();
                ifElseStatement.TrueStatement.AcceptVisitor(this.Emitter);

                if (this.Emitter.AsyncBlock.Steps.Count > startCount)
                {
                    trueStep = this.Emitter.AsyncBlock.Steps.Last();
                }

                if (this.RestoreWriter(writer) && !this.IsOnlyWhitespaceOnPenultimateLine(true))
                {
                    this.WriteNewLine();
                }

                this.EndBlock();
                this.WriteSpace();

                elseCount = this.Emitter.AsyncBlock.Steps.Count;
            }
            else
            {
                this.EmitBlockOrIndentedLine(ifElseStatement.TrueStatement);
            }

            if (ifElseStatement.FalseStatement != null && !ifElseStatement.FalseStatement.IsNull)
            {
                this.WriteElse();
                if (this.Emitter.IsAsync)
                {
                    this.Emitter.IgnoreBlock = ifElseStatement.FalseStatement;
                    this.WriteSpace();
                    this.BeginBlock();
                    this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                    var writer = this.SaveWriter();
                    this.Emitter.AsyncBlock.AddAsyncStep();
                    ifElseStatement.FalseStatement.AcceptVisitor(this.Emitter);

                    if (this.Emitter.AsyncBlock.Steps.Count > elseCount)
                    {
                        elseStep = this.Emitter.AsyncBlock.Steps.Last();
                    }

                    if (this.RestoreWriter(writer) && !this.IsOnlyWhitespaceOnPenultimateLine(true))
                    {
                        this.WriteNewLine();
                    }

                    this.EndBlock();
                    this.WriteSpace();
                }
                else
                {
                    this.EmitBlockOrIndentedLine(ifElseStatement.FalseStatement);
                }
            }

            if (this.Emitter.IsAsync && this.Emitter.AsyncBlock.Steps.Count > startCount)
            {
                if (this.Emitter.AsyncBlock.Steps.Count <= elseCount && !AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
                {
                    this.WriteNewLine();
                    this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
                    this.WriteNewLine();
                    this.Write("continue;");
                }

                var nextStep = this.Emitter.AsyncBlock.AddAsyncStep();

                if (trueStep != null)
                {
                    trueStep.JumpToStep = nextStep.Step;
                }

                if (elseStep != null)
                {
                    elseStep.JumpToStep = nextStep.Step;
                }
            }
            else if (this.Emitter.IsAsync)
            {
                this.WriteNewLine();
            }

            if (this.Emitter.IsAsync)
            {
                this.Emitter.AsyncBlock.EmittedAsyncSteps = this.EmittedAsyncSteps;
            }
        }
    }
}