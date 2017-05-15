using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;

using System.Collections.Generic;
using System.Linq;

namespace Bridge.Translator
{
    public abstract class AbstractMethodBlock : AbstractEmitterBlock
    {
        public AbstractMethodBlock(IEmitter emitter, AstNode node)
            : base(emitter, node)
        {
        }

        protected virtual void EmitMethodParameters(IEnumerable<ParameterDeclaration> declarations, IEnumerable<TypeParameterDeclaration> typeParamsdeclarations, AstNode context, bool skipCloseParentheses = false)
        {
            this.WriteOpenParentheses();
            bool needComma = false;

            if (typeParamsdeclarations != null && typeParamsdeclarations.Any())
            {
                this.EmitTypeParameters(typeParamsdeclarations, context);

                if (declarations.Any())
                {
                    this.EnsureComma(false);
                }
            }

            foreach (var p in declarations)
            {
                var name = this.Emitter.GetParameterName(p);

                name = name.Replace(JS.Vars.FIX_ARGUMENT_NAME, "");

                if (this.Emitter.LocalsNamesMap != null && this.Emitter.LocalsNamesMap.ContainsKey(name))
                {
                    name = this.Emitter.LocalsNamesMap[name];
                }

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.WriteSourceMapName(p.Name);
                this.WriteSequencePoint(p.Region);
                this.Write(name);
            }

            if (!skipCloseParentheses)
            {
                this.WriteCloseParentheses();
            }
        }

        protected virtual void EmitTypeParameters(IEnumerable<TypeParameterDeclaration> declarations, AstNode context)
        {
            bool needComma = false;

            foreach (var p in declarations)
            {
                this.Emitter.Validator.CheckIdentifier(p.Name, context);

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.WriteSourceMapName(p.Name);
                this.WriteSequencePoint(p.Region);
                this.Write(p.Name.Replace(JS.Vars.FIX_ARGUMENT_NAME, ""));
                this.Emitter.Comma = true;
            }
        }
    }
}