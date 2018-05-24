using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class PrimitiveExpressionBlock : ConversionBlock
    {
        public PrimitiveExpressionBlock(IEmitter emitter, PrimitiveExpression primitiveExpression)
            : base(emitter, primitiveExpression)
        {
            this.Emitter = emitter;
            this.PrimitiveExpression = primitiveExpression;
        }

        public PrimitiveExpression PrimitiveExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.PrimitiveExpression;
        }

        protected override void EmitConversionExpression()
        {
            if (this.PrimitiveExpression.IsNull)
            {
                return;
            }

            var isTplRaw = this.Emitter.TemplateModifier == "raw";
            if (this.PrimitiveExpression.Value is RawValue || isTplRaw)
            {
                this.Write(AbstractEmitterBlock.UpdateIndentsInString(this.PrimitiveExpression.Value.ToString(), 0));
            }
            else
            {
                this.WriteScript(Bridge.Translator.Emitter.ConvertConstant(this.PrimitiveExpression.Value, this.PrimitiveExpression, this.Emitter));
            }
        }
    }
}