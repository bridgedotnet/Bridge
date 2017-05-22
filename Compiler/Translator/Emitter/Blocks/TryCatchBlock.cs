using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using Object.Net.Utilities;
using System;
using System.Collections.Generic;
using System.Linq;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class TryCatchBlock : AbstractEmitterBlock
    {
        public TryCatchBlock(IEmitter emitter, TryCatchStatement tryCatchStatement)
            : base(emitter, tryCatchStatement)
        {
            this.Emitter = emitter;
            this.TryCatchStatement = tryCatchStatement;
        }

        public TryCatchStatement TryCatchStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var awaiters = this.Emitter.IsAsync ? this.GetAwaiters(this.TryCatchStatement) : null;

            if (awaiters != null && awaiters.Length > 0)
            {
                this.VisitAsyncTryCatchStatement();
            }
            else
            {
                this.VisitTryCatchStatement();
            }
        }

        protected void VisitAsyncTryCatchStatement()
        {
            TryCatchStatement tryCatchStatement = this.TryCatchStatement;

            this.Emitter.AsyncBlock.Steps.Last().JumpToStep = this.Emitter.AsyncBlock.Step;

            var tryStep = this.Emitter.AsyncBlock.AddAsyncStep();
            AsyncTryInfo tryInfo = new AsyncTryInfo();
            tryInfo.StartStep = tryStep.Step;

            this.Emitter.IgnoreBlock = tryCatchStatement.TryBlock;
            tryCatchStatement.TryBlock.AcceptVisitor(this.Emitter);
            tryStep = this.Emitter.AsyncBlock.Steps.Last();
            tryInfo.EndStep = tryStep.Step;

            List<IAsyncStep> catchSteps = new List<IAsyncStep>();

            foreach (var clause in tryCatchStatement.CatchClauses)
            {
                var catchStep = this.Emitter.AsyncBlock.AddAsyncStep();

                this.PushLocals();
                var varName = clause.VariableName;

                if (!String.IsNullOrEmpty(varName) && !this.Emitter.Locals.ContainsKey(varName))
                {
                    varName = this.AddLocal(varName, clause.VariableNameToken, clause.Type);
                }

                this.Emitter.IgnoreBlock = clause.Body;
                clause.Body.AcceptVisitor(this.Emitter);
                Write(JS.Vars.ASYNC_E + " = null;");
                this.PopLocals();
                this.WriteNewLine();

                tryInfo.CatchBlocks.Add(new Tuple<string, string, int, int>(varName, clause.Type.IsNull ? JS.Types.System.Exception.NAME : BridgeTypes.ToJsName(clause.Type, this.Emitter), catchStep.Step, Emitter.AsyncBlock.Steps.Last().Step));
                catchSteps.Add(Emitter.AsyncBlock.Steps.Last());
            }

            if (!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
            {
                this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
            }

            IAsyncStep finalyStep = null;
            if (!tryCatchStatement.FinallyBlock.IsNull)
            {
                finalyStep = this.Emitter.AsyncBlock.AddAsyncStep(tryCatchStatement.FinallyBlock);
                this.Emitter.IgnoreBlock = tryCatchStatement.FinallyBlock;
                tryCatchStatement.FinallyBlock.AcceptVisitor(this.Emitter);

                var finallyNode = this.GetParentFinallyBlock(tryCatchStatement, false);

                this.WriteNewLine();

                this.WriteIf();
                this.WriteOpenParentheses();
                this.Write(JS.Vars.ASYNC_JUMP + " > -1");
                this.WriteCloseParentheses();
                this.WriteSpace();
                this.BeginBlock();
                if (finallyNode != null)
                {
                    var hashcode = finallyNode.GetHashCode();
                    this.Emitter.AsyncBlock.JumpLabels.Add(new AsyncJumpLabel
                    {
                        Node = finallyNode,
                        Output = this.Emitter.Output
                    });
                    this.Write(JS.Vars.ASYNC_STEP + " = " + Helpers.PrefixDollar("{", hashcode, "};"));
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else
                {
                    this.Write(JS.Vars.ASYNC_STEP + " = " + JS.Vars.ASYNC_JUMP + ";");
                    this.WriteNewLine();
                    this.Write(JS.Vars.ASYNC_JUMP + " = null;");
                }

                this.WriteNewLine();
                this.EndBlock();

                this.WriteSpace();
                this.WriteElse();
                this.WriteIf();
                this.WriteOpenParentheses();
                this.Write(JS.Vars.ASYNC_E);
                this.WriteCloseParentheses();
                this.WriteSpace();
                this.BeginBlock();

                if (this.Emitter.AsyncBlock.IsTaskReturn)
                {
                    this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_EXCEPTION + "(" + JS.Vars.ASYNC_E + ");");
                }
                else
                {
                    this.Write("throw " + JS.Vars.ASYNC_E + ";");
                }

                this.WriteNewLine();
                this.WriteReturn(false);
                this.WriteSemiColon();
                this.WriteNewLine();
                this.EndBlock();

                this.WriteSpace();
                this.WriteElse();
                this.WriteIf();
                this.WriteOpenParentheses();
                this.Write(JS.Funcs.BRIDGE_IS_DEFINED);
                this.WriteOpenParentheses();
                this.Write(JS.Vars.ASYNC_RETURN_VALUE);
                this.WriteCloseParentheses();
                this.WriteCloseParentheses();
                this.WriteSpace();
                this.BeginBlock();

                if (finallyNode != null)
                {
                    var hashcode = finallyNode.GetHashCode();
                    this.Emitter.AsyncBlock.JumpLabels.Add(new AsyncJumpLabel
                    {
                        Node = finallyNode,
                        Output = this.Emitter.Output
                    });
                    this.Write(JS.Vars.ASYNC_STEP + " = " + Helpers.PrefixDollar("{", hashcode, "};"));
                    this.WriteNewLine();
                    this.Write("continue;");
                }
                else
                {
                    this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_RESULT + "(" + JS.Vars.ASYNC_RETURN_VALUE + ");");
                    this.WriteNewLine();
                    this.WriteReturn(false);
                    this.WriteSemiColon();
                }

                this.WriteNewLine();
                this.EndBlock();

                if (!this.Emitter.Locals.ContainsKey(JS.Vars.ASYNC_E))
                {
                    this.AddLocal(JS.Vars.ASYNC_E, null, AstType.Null);
                }
            }

            var lastFinallyStep = Emitter.AsyncBlock.Steps.Last();

            var nextStep = this.Emitter.AsyncBlock.AddAsyncStep();
            if (finalyStep != null)
            {
                tryInfo.FinallyStep = finalyStep.Step;
                lastFinallyStep.JumpToStep = nextStep.Step;
            }

            tryStep.JumpToStep = finalyStep != null ? finalyStep.Step : nextStep.Step;

            foreach (var step in catchSteps)
            {
                step.JumpToStep = finalyStep != null ? finalyStep.Step : nextStep.Step;
            }

            this.Emitter.AsyncBlock.TryInfos.Add(tryInfo);
        }

        protected void VisitTryCatchStatement()
        {
            this.EmitTryBlock();

            var count = this.TryCatchStatement.CatchClauses.Count;

            if (count > 0)
            {
                var firstClause = this.TryCatchStatement.CatchClauses.Count == 1 ? this.TryCatchStatement.CatchClauses.First() : null;
                var exceptionType = (firstClause == null || firstClause.Type.IsNull) ? null : BridgeTypes.ToJsName(firstClause.Type, this.Emitter);
                var isBaseException = exceptionType == null || exceptionType == JS.Types.System.Exception.NAME;

                if (count == 1 && isBaseException)
                {
                    this.EmitSingleCatchBlock();
                }
                else
                {
                    this.EmitMultipleCatchBlock();
                }
            }

            this.EmitFinallyBlock();
        }

        protected virtual void EmitTryBlock()
        {
            TryCatchStatement tryCatchStatement = this.TryCatchStatement;

            this.WriteTry();

            tryCatchStatement.TryBlock.AcceptVisitor(this.Emitter);
        }

        protected virtual void EmitFinallyBlock()
        {
            TryCatchStatement tryCatchStatement = this.TryCatchStatement;

            if (!tryCatchStatement.FinallyBlock.IsNull)
            {
                this.WriteFinally();
                tryCatchStatement.FinallyBlock.AcceptVisitor(this.Emitter);
            }
        }

        protected virtual void EmitSingleCatchBlock()
        {
            TryCatchStatement tryCatchStatement = this.TryCatchStatement;

            foreach (var clause in tryCatchStatement.CatchClauses)
            {
                this.PushLocals();

                var varName = clause.VariableName;

                if (String.IsNullOrEmpty(varName))
                {
                    varName = this.AddLocal(this.GetUniqueName(JS.Vars.E), null, AstType.Null);
                }
                else
                {
                    varName = this.AddLocal(varName, clause.VariableNameToken, clause.Type);
                }

                var oldVar = this.Emitter.CatchBlockVariable;
                this.Emitter.CatchBlockVariable = varName;

                this.WriteCatch();
                this.WriteOpenParentheses();
                this.Write(varName);
                this.WriteCloseParentheses();
                this.WriteSpace();

                this.BeginBlock();
                this.Write(string.Format("{0} = " + JS.Types.System.Exception.CREATE + "({0});", varName));

                this.WriteNewLine();
                this.Emitter.NoBraceBlock = clause.Body;
                clause.Body.AcceptVisitor(this.Emitter);
                if (!this.Emitter.IsNewLine)
                {
                    this.WriteNewLine();
                }

                this.EndBlock();
                this.WriteNewLine();

                this.PopLocals();
                this.Emitter.CatchBlockVariable = oldVar;
            }
        }

        protected virtual void EmitMultipleCatchBlock()
        {
            TryCatchStatement tryCatchStatement = this.TryCatchStatement;

            this.WriteCatch();
            this.WriteOpenParentheses();
            var varName = this.AddLocal(this.GetUniqueName(JS.Vars.E), null, AstType.Null);

            var oldVar = this.Emitter.CatchBlockVariable;
            this.Emitter.CatchBlockVariable = varName;

            this.Write(varName);
            this.WriteCloseParentheses();
            this.WriteSpace();
            this.BeginBlock();
            this.Write(string.Format("{0} = " + JS.Types.System.Exception.CREATE + "({0});", varName));
            this.WriteNewLine();

            var catchVars = new Dictionary<string, string>();
            var writeVar = false;

            foreach (var clause in tryCatchStatement.CatchClauses)
            {
                if (clause.VariableName.IsNotEmpty() && !catchVars.ContainsKey(clause.VariableName))
                {
                    if (!writeVar)
                    {
                        writeVar = true;
                        this.WriteVar(true);
                    }

                    this.EnsureComma(false);
                    catchVars.Add(clause.VariableName, clause.VariableName);
                    this.Write(clause.VariableName);
                    this.Emitter.Comma = true;
                }
            }

            this.Emitter.Comma = false;
            if (writeVar)
            {
                this.WriteSemiColon(true);
            }

            var firstClause = true;
            var writeElse = true;
            var needNewLine = false;

            foreach (var clause in tryCatchStatement.CatchClauses)
            {
                var exceptionType = clause.Type.IsNull ? null : BridgeTypes.ToJsName(clause.Type, this.Emitter);
                var isBaseException = exceptionType == null || exceptionType == JS.Types.System.Exception.NAME;

                if (!firstClause)
                {
                    this.WriteSpace();
                    this.WriteElse();
                }

                if (isBaseException)
                {
                    writeElse = false;
                }
                else
                {
                    this.WriteIf();
                    this.WriteOpenParentheses();
                    this.Write(string.Format(JS.Types.Bridge.IS + "({0}, {1})", varName, exceptionType));
                    this.WriteCloseParentheses();
                    this.WriteSpace();
                }

                firstClause = false;

                this.PushLocals();
                this.BeginBlock();

                if (clause.VariableName.IsNotEmpty())
                {
                    this.Write(clause.VariableName + " = " + varName);
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }

                this.Emitter.NoBraceBlock = clause.Body;
                clause.Body.AcceptVisitor(this.Emitter);
                this.Emitter.NoBraceBlock = null;
                this.EndBlock();

                needNewLine = true;

                this.PopLocals();
            }

            if (writeElse)
            {
                this.WriteSpace();
                this.WriteElse();
                this.BeginBlock();
                this.Write("throw " + varName);
                this.WriteSemiColon();
                this.WriteNewLine();
                this.EndBlock();
                needNewLine = true;
            }

            if (needNewLine)
            {
                this.WriteNewLine();
                needNewLine = false;
            }

            this.EndBlock();
            this.WriteNewLine();
            this.Emitter.CatchBlockVariable = oldVar;
        }
    }

    public class AsyncTryInfo : IAsyncTryInfo
    {
        public int StartStep
        {
            get;
            set;
        }

        public int EndStep
        {
            get;
            set;
        }

        public int FinallyStep
        {
            get;
            set;
        }

        private List<Tuple<string, string, int, int>> catchBlocks;

        public List<Tuple<string, string, int, int>> CatchBlocks
        {
            get
            {
                if (this.catchBlocks == null)
                {
                    this.catchBlocks = new List<Tuple<string, string, int, int>>();
                }
                return this.catchBlocks;
            }
        }
    }
}