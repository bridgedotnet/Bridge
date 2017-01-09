using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

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
            var rr = this.Emitter.Resolver.ResolveNode(this.ArrayInitializerExpression, this.Emitter) as ArrayCreateResolveResult;
            var at = rr != null ? (ArrayType)rr.Type : null;

            if (!isObjectInitializer || this.ArrayInitializerExpression.IsSingleElement)
            {
                if (at != null)
                {
                    this.Write(JS.Types.System.Array.INIT);
                    this.WriteOpenParentheses();
                }

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
                if (at != null)
                {
                    this.Write(", ");
                    this.Write(BridgeTypes.ToJsName(at.ElementType, this.Emitter));
                    this.Write(")");
                }
            }
            else
            {
                this.WriteNewLine();
                this.EndBlock();
            }
        }
    }
}