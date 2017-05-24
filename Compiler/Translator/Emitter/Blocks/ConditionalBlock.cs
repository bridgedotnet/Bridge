using System.Collections.Generic;
using System.Linq;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class ConditionalBlock : ConversionBlock
    {
        public ConditionalBlock(IEmitter emitter, ConditionalExpression conditionalExpression)
            : base(emitter, conditionalExpression)
        {
            this.Emitter = emitter;
            this.ConditionalExpression = conditionalExpression;
        }

        public ConditionalExpression ConditionalExpression
        {
            get;
            set;
        }

        public List<IAsyncStep> EmittedAsyncSteps
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.ConditionalExpression;
        }

        protected override void EmitConversionExpression()
        {
            var conditionalExpression = this.ConditionalExpression;

            if (this.Emitter.IsAsync && this.GetAwaiters(this.ConditionalExpression).Length > 0)
            {
                if (this.Emitter.AsyncBlock.WrittenAwaitExpressions.Contains(conditionalExpression))
                {
                    var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, conditionalExpression) + 1;
                    this.Write(JS.Vars.ASYNC_TASK_RESULT + index);
                }
                else
                {
                    var index = System.Array.IndexOf(this.Emitter.AsyncBlock.AwaitExpressions, this.ConditionalExpression) + 1;
                    this.WriteAsyncConditionalExpression(index);
                }
            }
            else
            {
                conditionalExpression.Condition.AcceptVisitor(this.Emitter);
                this.Write(" ? ");
                conditionalExpression.TrueExpression.AcceptVisitor(this.Emitter);
                this.Write(" : ");
                conditionalExpression.FalseExpression.AcceptVisitor(this.Emitter);
            }
        }

        internal void WriteAsyncConditionalExpression(int index)
        {
            if (this.Emitter.AsyncBlock.WrittenAwaitExpressions.Contains(this.ConditionalExpression))
            {
                return;
            }

            this.Emitter.AsyncBlock.WrittenAwaitExpressions.Add(this.ConditionalExpression);

            this.WriteAwaiters(this.ConditionalExpression.Condition);

            this.WriteIf();
            this.WriteOpenParentheses();

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;
            this.Emitter.ReplaceAwaiterByVar = true;
            this.Emitter.AsyncExpressionHandling = true;
            this.ConditionalExpression.Condition.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

            int startCount = 0;
            int elseCount = 0;
            IAsyncStep trueStep = null;
            IAsyncStep elseStep = null;

            startCount = this.Emitter.AsyncBlock.Steps.Count;

            this.EmittedAsyncSteps = this.Emitter.AsyncBlock.EmittedAsyncSteps;
            this.Emitter.AsyncBlock.EmittedAsyncSteps = new List<IAsyncStep>();

            var taskResultVar = JS.Vars.ASYNC_TASK_RESULT + index;
            if (!this.Emitter.Locals.ContainsKey(taskResultVar))
            {
                this.AddLocal(taskResultVar, null, AstType.Null);
            }

            this.WriteSpace();
            this.BeginBlock();
            this.Write($"{JS.Vars.ASYNC_STEP} = {this.Emitter.AsyncBlock.Step};");
            this.WriteNewLine();
            this.Write("continue;");
            var writer = this.SaveWriter();
            this.Emitter.AsyncBlock.AddAsyncStep();

            this.WriteAwaiters(this.ConditionalExpression.TrueExpression);

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;
            this.Emitter.ReplaceAwaiterByVar = true;
            this.Emitter.AsyncExpressionHandling = true;
            this.Write(taskResultVar + " = ");
            this.ConditionalExpression.TrueExpression.AcceptVisitor(this.Emitter);
            this.WriteSemiColon();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

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

            this.WriteSpace();
            this.WriteElse();
            this.BeginBlock();

            this.Write($"{JS.Vars.ASYNC_STEP} = {this.Emitter.AsyncBlock.Step};");
            this.WriteNewLine();
            this.Write("continue;");
            writer = this.SaveWriter();
            this.Emitter.AsyncBlock.AddAsyncStep();
            this.WriteAwaiters(this.ConditionalExpression.FalseExpression);

            oldValue = this.Emitter.ReplaceAwaiterByVar;
            oldAsyncExpressionHandling = this.Emitter.AsyncExpressionHandling;
            this.Emitter.ReplaceAwaiterByVar = true;
            this.Emitter.AsyncExpressionHandling = true;
            this.Write(taskResultVar + " = ");
            this.ConditionalExpression.FalseExpression.AcceptVisitor(this.Emitter);
            this.WriteSemiColon();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.Emitter.AsyncExpressionHandling = oldAsyncExpressionHandling;

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

            if (this.Emitter.IsAsync && this.Emitter.AsyncBlock.Steps.Count > startCount)
            {
                if (this.Emitter.AsyncBlock.Steps.Count <= elseCount && !AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
                {
                    this.WriteNewLine();
                    this.Write($"{JS.Vars.ASYNC_STEP} = {this.Emitter.AsyncBlock.Step};");
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