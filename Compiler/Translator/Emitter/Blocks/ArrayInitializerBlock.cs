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
            var create = at != null && at.Dimensions > 1;

            if(rr != null) { }
            if (!isObjectInitializer || this.ArrayInitializerExpression.IsSingleElement)
            {
                if (at != null)
                {
                    this.Write(create ? JS.Types.System.Array.CREATE : JS.Types.System.Array.INIT);
                    this.WriteOpenParentheses();
                }

                if (create)
                {
                    var defaultInitializer = new PrimitiveExpression(Inspector.GetDefaultFieldValue(at.ElementType, AstType.Null), "?");

                    if (defaultInitializer.Value is IType)
                    {
                        this.Write(Inspector.GetStructDefaultValue((IType)defaultInitializer.Value, this.Emitter));
                    }
                    else if (defaultInitializer.Value is RawValue)
                    {
                        this.Write(defaultInitializer.Value.ToString());
                    }
                    else
                    {
                        defaultInitializer.AcceptVisitor(this.Emitter);
                    }

                    this.WriteComma();
                }

                this.Write("[");
            }
            else
            {
                this.BeginBlock();
            }

            new ExpressionListBlock(this.Emitter, elements, null, null, 0, elements.Count > 2).Emit();

            if (!isObjectInitializer || this.ArrayInitializerExpression.IsSingleElement)
            {
                this.Write("]");
                if (at != null)
                {
                    this.Write(", ");
                    this.Write(BridgeTypes.ToJsName(at.ElementType, this.Emitter));

                    if (create)
                    {
                        this.Emitter.Comma = true;

                        for (int i = 0; i < rr.SizeArguments.Count; i++)
                        {
                            var a = rr.SizeArguments[i];
                            this.EnsureComma(false);

                            if (a.IsCompileTimeConstant)
                            {
                                this.Write(a.ConstantValue);
                            }
                            else
                            {
                                AttributeCreateBlock.WriteResolveResult(rr.SizeArguments[i], this);
                            }
                            this.Emitter.Comma = true;
                        }
                    }

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