using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Linq;

namespace Bridge.Translator
{
    public class ArrayCreateBlock : AbstractEmitterBlock
    {
        public ArrayCreateBlock(IEmitter emitter, ArrayCreateExpression arrayCreateExpression)
            : base(emitter, arrayCreateExpression)
        {
            this.Emitter = emitter;
            this.ArrayCreateExpression = arrayCreateExpression;
        }

        public ArrayCreateBlock(IEmitter emitter, ArrayCreateExpression arrayCreateExpression, ArrayCreateResolveResult arrayCreateResolveResult)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.ArrayCreateExpression = arrayCreateExpression;
            this.ArrayCreateResolveResult = arrayCreateResolveResult;
        }

        public ArrayCreateExpression ArrayCreateExpression
        {
            get;
            set;
        }

        public ArrayCreateResolveResult ArrayCreateResolveResult
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitArrayCreateExpression();
        }

        protected void VisitArrayCreateExpression()
        {
            ArrayCreateExpression arrayCreateExpression = this.ArrayCreateExpression;
            var rr = this.ArrayCreateResolveResult ?? (this.Emitter.Resolver.ResolveNode(arrayCreateExpression, this.Emitter) as ArrayCreateResolveResult);
            var at = (ArrayType)rr.Type;
            var rank = arrayCreateExpression.Arguments.Count;

            if (arrayCreateExpression.Initializer.IsNull && rank == 1)
            {
                string typedArrayName = null;
                if (this.Emitter.AssemblyInfo.UseTypedArrays && (typedArrayName = Helpers.GetTypedArrayName(at.ElementType)) != null)
                {
                    this.Write(JS.Types.System.Array.INIT);
                    this.WriteOpenParentheses();

                    this.Write("new ", typedArrayName, "(");
                    if (this.ArrayCreateResolveResult != null)
                    {
                        AttributeCreateBlock.WriteResolveResult(this.ArrayCreateResolveResult.SizeArguments.First(), this);
                    }
                    else
                    {
                        arrayCreateExpression.Arguments.First().AcceptVisitor(this.Emitter);
                    }
                    this.Write(")");
                    this.Write(", ");
                    this.Write(BridgeTypes.ToJsName(at.ElementType, this.Emitter));
                    this.Write(")");
                }
                else
                {
                    this.Write(JS.Types.System.Array.INIT);
                    this.WriteOpenParentheses();

                    if (this.ArrayCreateResolveResult != null)
                    {
                        AttributeCreateBlock.WriteResolveResult(this.ArrayCreateResolveResult.SizeArguments.First(), this);
                    }
                    else
                    {
                        arrayCreateExpression.Arguments.First().AcceptVisitor(this.Emitter);
                    }
                    this.WriteComma();

                    var def = Inspector.GetDefaultFieldValue(at.ElementType, arrayCreateExpression.Type);
                    if (def == at.ElementType || def is RawValue)
                    {
                        this.WriteFunction();
                        this.WriteOpenCloseParentheses();
                        this.BeginBlock();
                        this.WriteReturn(true);
                        if (def is RawValue)
                        {
                            this.Write(def.ToString());
                        }
                        else
                        {
                            this.Write(Inspector.GetStructDefaultValue(at.ElementType, this.Emitter));
                        }

                        this.WriteSemiColon();
                        this.WriteNewLine();
                        this.EndBlock();
                    }
                    else
                    {
                        this.WriteScript(def);
                    }

                    this.Write(", ");
                    this.Write(BridgeTypes.ToJsName(at.ElementType, this.Emitter));

                    this.Write(")");
                }
                return;
            }

            if (at.Dimensions > 1)
            {
                this.Write(JS.Types.System.Array.CREATE);
                this.WriteOpenParentheses();

                var defaultInitializer =
                    new PrimitiveExpression(Inspector.GetDefaultFieldValue(at.ElementType, arrayCreateExpression.Type),
                        "?");

                if (defaultInitializer.Value is IType)
                {
                    this.Write(Inspector.GetStructDefaultValue((IType) defaultInitializer.Value, this.Emitter));
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
            else
            {
                this.Write(JS.Types.System.Array.INIT);
                this.WriteOpenParentheses();
            }

            if (rr.InitializerElements != null && rr.InitializerElements.Count > 0)
            {
                this.WriteOpenBracket();

                if (this.ArrayCreateResolveResult != null)
                {
                    bool needComma = false;
                    foreach (ResolveResult item in this.ArrayCreateResolveResult.InitializerElements)
                    {
                        if (needComma)
                        {
                            this.WriteComma();
                        }

                        needComma = true;

                        AttributeCreateBlock.WriteResolveResult(item, this);
                    }
                }
                else
                {
                    var elements = arrayCreateExpression.Initializer.Elements;
                    new ExpressionListBlock(this.Emitter, elements, null, null, 0).Emit();
                }

                this.WriteCloseBracket();
            }
            else if (at.Dimensions > 1)
            {
                this.Write("null");
            }
            else
            {
                this.Write("[]");
            }

            this.Write(", ");
            this.Write(BridgeTypes.ToJsName(at.ElementType, this.Emitter));

            if (at.Dimensions > 1)
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
                    else if (this.ArrayCreateResolveResult != null)
                    {
                        AttributeCreateBlock.WriteResolveResult(this.ArrayCreateResolveResult.SizeArguments[i], this);
                    }
                    else if (arrayCreateExpression.Arguments.Count > i)
                    {
                        var arg = arrayCreateExpression.Arguments.ElementAt(i);

                        if (arg != null)
                        {
                            arg.AcceptVisitor(this.Emitter);
                        }
                    }
                    this.Emitter.Comma = true;
                }
            }

            this.Write(")");
            this.Emitter.Comma = false;
        }
    }
}