using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public class TypeOfExpressionBlock : ConversionBlock
    {
        public TypeOfExpressionBlock(IEmitter emitter, TypeOfExpression typeOfExpression)
            : base(emitter, typeOfExpression)
        {
            this.Emitter = emitter;
            this.TypeOfExpression = typeOfExpression;
        }

        public TypeOfExpression TypeOfExpression
        {
            get;
            set;
        }

        protected override Expression GetExpression()
        {
            return this.TypeOfExpression;
        }

        protected override void EmitConversionExpression()
        {
            this.TypeOfExpression.Type.AcceptVisitor(this.Emitter);
        }
    }
}