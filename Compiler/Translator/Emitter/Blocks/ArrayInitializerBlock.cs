using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;

namespace Bridge.Translator
{
    public class ArrayInitializerBlock : AbstractEmitterBlock
    {
        public ArrayInitializerBlock(IEmitter emitter, ArrayInitializerExpression arrayInitializerExpression)
            : base(emitter, arrayInitializerExpression)
        {
            this.Emitter = emitter;
            this.ArrayInitializerExpression = arrayInitializerExpression;
        }

        public ArrayInitializerExpression ArrayInitializerExpression
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var elements = this.ArrayInitializerExpression.Elements;
            var first = elements.Count > 0 ? elements.First() : null;

            var isObjectInitializer = first is NamedExpression || first is NamedArgumentExpression;

            if (!isObjectInitializer || this.ArrayInitializerExpression.IsSingleElement)
            {
                this.Write("[");
            }
            else
            {
                this.BeginBlock();
            }

            new ExpressionListBlock(this.Emitter, elements, null, null, 0).Emit();

            if (!isObjectInitializer || this.ArrayInitializerExpression.IsSingleElement)
            {
                this.Write("]");
            }
            else
            {
                this.WriteNewLine();
                this.EndBlock();
            }
        }
    }
}