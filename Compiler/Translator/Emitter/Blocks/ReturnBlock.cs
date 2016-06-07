using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class ReturnBlock : AbstractEmitterBlock
    {
        public ReturnBlock(IEmitter emitter, ReturnStatement returnStatement)
            : base(emitter, returnStatement)
        {
            this.Emitter = emitter;
            this.ReturnStatement = returnStatement;
        }

        public ReturnStatement ReturnStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitReturnStatement();
        }

        protected void VisitReturnStatement()
        {
            ReturnStatement returnStatement = this.ReturnStatement;

            if (this.Emitter.IsAsync)
            {
                var finallyNode = this.GetParentFinallyBlock(returnStatement, false);

                if (this.Emitter.AsyncBlock != null && this.Emitter.AsyncBlock.IsTaskReturn)
                {
                    this.WriteAwaiters(returnStatement.Expression);

                    if (finallyNode != null)
                    {
                        this.Write(JS.Vars.ASYNC_RETURN_VALUE + " = ");
                    }
                    else
                    {
                        this.Write(JS.Vars.ASYNC_TCS + "." + JS.Funcs.SET_RESULT + "(");
                    }

                    if (!returnStatement.Expression.IsNull)
                    {
                        var oldValue = this.Emitter.ReplaceAwaiterByVar;
                        this.Emitter.ReplaceAwaiterByVar = true;
                        returnStatement.Expression.AcceptVisitor(this.Emitter);
                        this.Emitter.ReplaceAwaiterByVar = oldValue;
                    }
                    else
                    {
                        this.Write("null");
                    }

                    this.Write(finallyNode != null ? ";" : ");");
                    this.WriteNewLine();
                }

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
                    this.WriteReturn(false);
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
            }
            else
            {
                this.WriteReturn(false);

                if (this.Emitter.ReplaceJump && this.Emitter.JumpStatements == null)
                {
                    this.WriteSpace();
                    this.Write("{jump: 3");

                    if (!returnStatement.Expression.IsNull)
                    {
                        this.Write(", v: ");
                        returnStatement.Expression.AcceptVisitor(this.Emitter);
                    }

                    this.Write("}");
                }
                else if (!returnStatement.Expression.IsNull)
                {
                    this.WriteSpace();
                    returnStatement.Expression.AcceptVisitor(this.Emitter);
                }

                this.WriteSemiColon();
                this.WriteNewLine();
            }
        }
    }
}
