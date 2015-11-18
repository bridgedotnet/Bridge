using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class NullReferenceBlock : ConversionBlock
    {
        public NullReferenceBlock(IEmitter emitter, AstNode nullNode)
            : base(emitter, nullNode)
        {
            this.Emitter = emitter;
            this.NullNode = nullNode;
        }

        public AstNode NullNode
        {
            get;
            set;
        }

protected override Expression GetExpression()
        {
            var expr = this.NullNode as Expression;
            return  expr;
        }

        protected override void EmitConversionExpression()
        {
            this.VisitNull();
        }

        protected void VisitNull()
        {
            this.Write("null");
        }
    }
}
