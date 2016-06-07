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

        public ArrayCreateExpression ArrayCreateExpression
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
            var rr = this.Emitter.Resolver.ResolveNode(arrayCreateExpression, this.Emitter) as ArrayCreateResolveResult;
            var at = (ArrayType)rr.Type;
            var rank = arrayCreateExpression.Arguments.Count;

            if (arrayCreateExpression.Initializer.IsNull && rank == 1)
            {
                string typedArrayName = null;
                if (this.Emitter.AssemblyInfo.UseTypedArrays && (typedArrayName = Helpers.GetTypedArrayName(at.ElementType)) != null)
                {
                    this.Write("new ", typedArrayName, "(");
                    arrayCreateExpression.Arguments.First().AcceptVisitor(this.Emitter);
                    this.Write(")");
                }
                else
                {
                    this.Write(JS.Types.SYSTEM_ARRAY + ".init(");
                    arrayCreateExpression.Arguments.First().AcceptVisitor(this.Emitter);
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

                    this.Write(")");
                }
                return;
            }

            if (at.Dimensions > 1)
            {
                this.Write(JS.Types.SYSTEM_ARRAY + ".create(");
                var defaultInitializer = new PrimitiveExpression(Inspector.GetDefaultFieldValue(at.ElementType, arrayCreateExpression.Type), "?");

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

            if (rr.InitializerElements != null && rr.InitializerElements.Count > 0)
            {
                this.WriteOpenBracket();
                var elements = arrayCreateExpression.Initializer.Elements;
                new ExpressionListBlock(this.Emitter, elements, null).Emit();
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

                this.Write(")");
                this.Emitter.Comma = false;
            }
        }
    }
}
