using Bridge.Contract;
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
                    this.Emitter.AsyncBlock.JumpLabels.Add(new AsyncJumpLabel { Node = finallyNode, Output = this.Emitter.Output });
                    this.Write("$step = ${" + hashcode + "};");
                    this.WriteNewLine();
                    this.Write("$jumpFromFinally = ");
                    this.Emitter.JumpStatements.Add(new JumpInfo(this.Emitter.Output, this.Emitter.Output.Length, false));
                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
                else
                {
                    this.Write("$step = ");
                    this.Emitter.JumpStatements.Add(new JumpInfo(this.Emitter.Output, this.Emitter.Output.Length, false));

                    this.WriteSemiColon();
                    this.WriteNewLine();
                }
            }

            if (this.Emitter.ReplaceJump && this.Emitter.JumpStatements == null)
            {
                this.Write("return 1");

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
