using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class ContinueBlock : AbstractEmitterBlock
    {
        public ContinueBlock(IEmitter emitter, ContinueStatement continueStatement)
            : base(emitter, continueStatement)
        {
            this.Emitter = emitter;
            this.ContinueStatement = continueStatement;
        }

        public ContinueStatement ContinueStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            if (this.Emitter.JumpStatements != null)
            {
                var finallyNode = this.GetParentFinallyBlock(this.ContinueStatement, true);

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
                    this.Write(JS.Vars.ASYNC_JUMP + " = ");
                    this.Emitter.JumpStatements.Add(new JumpInfo(this.Emitter.Output, this.Emitter.Output.Length, false));
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
                else
                {
                    this.Write(JS.Vars.ASYNC_STEP + " = ");
                    this.Emitter.JumpStatements.Add(new JumpInfo(this.Emitter.Output, this.Emitter.Output.Length, false));

                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
            }

            if (this.Emitter.ReplaceJump && this.Emitter.JumpStatements == null)
            {
                this.Write("return {jump:1}");
            }
            else
            {
                this.Write("continue");
            }

            this.WriteSemiColon();
            this.WriteNewLine();
        }
    }
}
