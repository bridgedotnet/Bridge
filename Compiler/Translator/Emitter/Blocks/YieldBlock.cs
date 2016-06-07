using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class YieldBlock : AbstractEmitterBlock
    {
        public YieldBlock(IEmitter emitter, YieldBreakStatement yieldBreakStatement)
            : base(emitter, yieldBreakStatement)
        {
            this.Emitter = emitter;
            this.YieldBreakStatement = yieldBreakStatement;
        }

        public YieldBlock(IEmitter emitter, YieldReturnStatement yieldReturnStatement)
            : base(emitter, yieldReturnStatement)
        {
            this.Emitter = emitter;
            this.YieldReturnStatement = yieldReturnStatement;
        }

        public YieldBreakStatement YieldBreakStatement
        {
            get;
            set;
        }

        public YieldReturnStatement YieldReturnStatement
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            if (this.YieldReturnStatement != null)
            {
                this.Write(JS.Vars.YIELD + ".push");
                this.WriteOpenParentheses();
                this.YieldReturnStatement.Expression.AcceptVisitor(this.Emitter);
                this.WriteCloseParentheses();
                this.WriteSemiColon();
                this.WriteNewLine();
            }
            else
            {
                if (this.YieldBreakStatement.GetParent<ForStatement>() == null &&
                    this.YieldBreakStatement.GetParent<ForeachStatement>() == null &&
                    this.YieldBreakStatement.GetParent<WhileStatement>() == null &&
                    this.YieldBreakStatement.GetParent<DoWhileStatement>() == null)
                {
                    YieldBlock.EmitYieldReturn(this, this.Emitter.ReturnType);
                }
                else
                {
                    new BreakBlock(this.Emitter, this.YieldBreakStatement).Emit();
                }
            }
        }

        public static bool HasYield(AstNode node)
        {
            var visitor = new YieldSearchVisitor();
            node.AcceptVisitor(visitor);
            return visitor.Found;
        }

        public static void EmitYield(AbstractEmitterBlock block, IType returnType)
        {
            block.Write("var " + JS.Vars.YIELD + " = []");

            block.WriteSemiColon();
            block.WriteNewLine();
        }

        public static void EmitYieldReturn(AbstractEmitterBlock block, IType returnType)
        {
            block.WriteReturn(true);

            if (returnType != null && returnType.Name == "IEnumerator")
            {
                block.Write(JS.Types.SYSTEM_ARRAY + "." + JS.Funcs.TO_ENUMERATOR + "(" + JS.Vars.YIELD +")");
            }
            else
            {
                block.Write(JS.Types.SYSTEM_ARRAY + "." + JS.Funcs.TO_ENUMERABLE + "(" + JS.Vars.YIELD + ")");
            }

            block.WriteSemiColon();
            block.WriteNewLine();
        }
    }
}
