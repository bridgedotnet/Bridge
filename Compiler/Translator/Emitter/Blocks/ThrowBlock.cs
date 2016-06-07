using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System;
using System.Linq;

namespace Bridge.Translator
{
    public class ThrowBlock : AbstractEmitterBlock
    {
        public ThrowBlock(IEmitter emitter, ThrowStatement throwStatement)
            : base(emitter, throwStatement)
        {
            this.Emitter = emitter;
            this.ThrowStatement = throwStatement;
        }

        public ThrowStatement ThrowStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var oldValue = this.Emitter.ReplaceAwaiterByVar;

            if (this.Emitter.IsAsync)
            {
                this.WriteAwaiters(this.ThrowStatement.Expression);
                this.Emitter.ReplaceAwaiterByVar = true;
            }

            this.WriteThrow();

            if (this.ThrowStatement.Expression.IsNull)
            {
                var tryStatement = this.ThrowStatement.GetParent<TryCatchStatement>();
                var count = tryStatement.CatchClauses.Count;
                var firstClause = tryStatement.CatchClauses.Count == 1 ? tryStatement.CatchClauses.First() : null;
                var exceptionType = (firstClause == null || firstClause.Type.IsNull) ? null : BridgeTypes.ToJsName(firstClause.Type, this.Emitter);
                var isBaseException = exceptionType == null || exceptionType == JS.Types.SYSTEM_EXCEPTION;

                string name = this.Emitter.CatchBlockVariable ?? JS.Vars.ASYNC_E;
                if (count == 1 && isBaseException)
                {
                    var clause = tryStatement.CatchClauses.First();

                    if (!String.IsNullOrEmpty(clause.VariableName))
                    {
                        name = clause.VariableName;
                    }
                }

                this.Write(name);
            }
            else
            {
                this.ThrowStatement.Expression.AcceptVisitor(this.Emitter);
            }

            this.WriteSemiColon();
            this.WriteNewLine();
            this.Emitter.ReplaceAwaiterByVar = oldValue;
        }
    }
}
