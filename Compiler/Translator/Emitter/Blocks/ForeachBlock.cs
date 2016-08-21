using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System;
using System.Collections.Generic;
using System.Linq;
using ICSharpCode.NRefactory.MonoCSharp;
using ICSharpCode.NRefactory.Semantics;
using EmptyStatement = ICSharpCode.NRefactory.CSharp.EmptyStatement;

namespace Bridge.Translator
{
    public class ForeachBlock : AbstractEmitterBlock
    {
        public ForeachBlock(IEmitter emitter, ForeachStatement foreachStatement)
            : base(emitter, foreachStatement)
        {
            this.Emitter = emitter;
            this.ForeachStatement = foreachStatement;
        }

        public ForeachStatement ForeachStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var awaiters = this.Emitter.IsAsync ? this.GetAwaiters(this.ForeachStatement) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                this.VisitAsyncForeachStatement();
            }
            else
            {
                this.VisitForeachStatement();
            }
        }

        protected virtual string GetNextIteratorName()
        {
            var index = this.Emitter.IteratorCount++;
            var result = JS.Vars.ITERATOR;

            if (index > 0)
            {
                result += index;
            }

            return result;
        }

        protected void VisitAsyncForeachStatement()
        {
            ForeachStatement foreachStatement = this.ForeachStatement;

            if (foreachStatement.EmbeddedStatement is EmptyStatement)
            {
                return;
            }

            var oldValue = this.Emitter.ReplaceAwaiterByVar;
            var jumpStatements = this.Emitter.JumpStatements;
            this.Emitter.JumpStatements = new List<IJumpInfo>();
            this.WriteAwaiters(foreachStatement.InExpression);

            bool containsAwaits = false;
            var awaiters = this.GetAwaiters(foreachStatement.EmbeddedStatement);

            if (awaiters != null && awaiters.Length > 0)
            {
                containsAwaits = true;
            }

            this.Emitter.ReplaceAwaiterByVar = true;

            if (!containsAwaits)
            {
                this.VisitForeachStatement(oldValue);
                return;
            }

            //var iteratorName = this.GetNextIteratorName();
            var iteratorName = this.AddLocal(this.GetTempVarName(), null, AstType.Null);

            //this.WriteVar();
            this.Write(iteratorName, " = ", JS.Funcs.BRIDGE_GET_ENUMERATOR);

            this.WriteOpenParentheses();
            foreachStatement.InExpression.AcceptVisitor(this.Emitter);
            this.Emitter.ReplaceAwaiterByVar = oldValue;
            this.WriteCloseParentheses();
            this.WriteSemiColon();
            this.WriteNewLine();
            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");
            this.WriteNewLine();

            IAsyncStep conditionStep = this.Emitter.AsyncBlock.AddAsyncStep();

            this.WriteIf();
            this.WriteOpenParentheses();
            this.Write(iteratorName);
            this.WriteDot();
            this.Write(JS.Funcs.MOVE_NEXT);
            this.WriteOpenCloseParentheses();
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();

            this.PushLocals();
            var varName = this.AddLocal(foreachStatement.VariableName, foreachStatement.VariableNameToken, foreachStatement.VariableType);

            this.WriteVar();
            this.Write(varName, " = ", iteratorName);

            this.WriteDot();
            this.Write(JS.Funcs.GET_CURRENT);

            this.WriteOpenCloseParentheses();
            this.WriteSemiColon();
            this.WriteNewLine();

            this.Write(JS.Vars.ASYNC_STEP + " = " + this.Emitter.AsyncBlock.Step + ";");
            this.WriteNewLine();
            this.Write("continue;");

            BlockStatement block = foreachStatement.EmbeddedStatement as BlockStatement;

            var writer = this.SaveWriter();
            var bodyStep = this.Emitter.AsyncBlock.AddAsyncStep();
            this.Emitter.IgnoreBlock = foreachStatement.EmbeddedStatement;
            var startCount = this.Emitter.AsyncBlock.Steps.Count;

            if (block != null)
            {
                block.AcceptChildren(this.Emitter);
            }
            else
            {
                foreachStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);
            }

            IAsyncStep loopStep = null;

            if (this.Emitter.AsyncBlock.Steps.Count > startCount)
            {
                loopStep = this.Emitter.AsyncBlock.Steps.Last();
                loopStep.JumpToStep = conditionStep.Step;
            }

            this.RestoreWriter(writer);

            if (!AbstractEmitterBlock.IsJumpStatementLast(this.Emitter.Output.ToString()))
            {
                this.Write(JS.Vars.ASYNC_STEP + " = " + conditionStep.Step + ";");
                this.WriteNewLine();
                this.Write("continue;");
                this.WriteNewLine();
            }

            this.PopLocals();

            this.WriteNewLine();
            this.EndBlock();
            this.WriteNewLine();

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

        protected void VisitForeachStatement(bool? replaceAwaiterByVar = null)
        {
            ForeachStatement foreachStatement = this.ForeachStatement;

            if (foreachStatement.EmbeddedStatement is EmptyStatement)
            {
                return;
            }

            var iteratorVar = this.GetTempVarName();
            var iteratorName = this.AddLocal(iteratorVar, null, AstType.Null);

            //this.WriteVar();
            this.Write(iteratorName, " = ", JS.Funcs.BRIDGE_GET_ENUMERATOR);

            this.WriteOpenParentheses();
            foreachStatement.InExpression.AcceptVisitor(this.Emitter);
            this.WriteCloseParentheses();
            this.WriteSemiColon();
            this.WriteNewLine();

            this.WriteWhile();
            this.WriteOpenParentheses();
            this.Write(iteratorName);
            this.WriteDot();
            this.Write(JS.Funcs.MOVE_NEXT);
            this.WriteOpenCloseParentheses();
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();

            this.PushLocals();
            Action ac = () =>
            {
                var varName = this.AddLocal(foreachStatement.VariableName, foreachStatement.VariableNameToken, foreachStatement.VariableType);

                this.WriteVar();
                this.Write(varName + " = ");

                var rr = this.Emitter.Resolver.ResolveNode(foreachStatement, this.Emitter) as ForEachResolveResult;
                var needCast = rr != null && rr.ElementType != rr.ElementVariable.Type;
                if (needCast)
                {
                    this.Write(JS.Funcs.BRIDGE_CAST);
                    this.WriteOpenParentheses();
                }

                this.Write(iteratorName);

                this.WriteDot();
                this.Write(JS.Funcs.GET_CURRENT);
                this.WriteOpenCloseParentheses();

                if (needCast)
                {
                    this.Write(", ", BridgeTypes.ToJsName(rr.ElementVariable.Type, this.Emitter), ")");
                }

                this.WriteSemiColon();
                this.WriteNewLine();
            };
            this.Emitter.BeforeBlock = ac;

            BlockStatement block = foreachStatement.EmbeddedStatement as BlockStatement;

            if (replaceAwaiterByVar.HasValue)
            {
                this.Emitter.ReplaceAwaiterByVar = replaceAwaiterByVar.Value;
            }

            if (block != null)
            {
                this.Emitter.NoBraceBlock = block;
            }

            foreachStatement.EmbeddedStatement.AcceptVisitor(this.Emitter);

            this.PopLocals();

            if (!this.Emitter.IsNewLine)
            {
                this.WriteNewLine();
            }

            this.EndBlock();
            this.WriteNewLine();
        }
    }
}