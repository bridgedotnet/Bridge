using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public class TypeExpressionListBlock : AbstractEmitterBlock
    {
        public TypeExpressionListBlock(IEmitter emitter, IEnumerable<TypeParamExpression> expressions)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.Expressions = expressions;
        }

        public TypeExpressionListBlock(IEmitter emitter, IEnumerable<AstType> types)
            : base(emitter, null)
        {
            this.Emitter = emitter;
            this.Types = types;
        }

        public IEnumerable<TypeParamExpression> Expressions
        {
            get;
            set;
        }

        public IEnumerable<AstType> Types
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            if (this.Expressions != null)
            {
                this.EmitExpressionList(this.Expressions);
            }
            else if (this.Types != null)
            {
                this.EmitExpressionList(this.Types);
            }
        }

        protected virtual void EmitExpressionList(IEnumerable<TypeParamExpression> expressions)
        {
            bool needComma = false;

            foreach (var expr in expressions)
            {
                if (expr.Inherited)
                {
                    continue;
                }
                this.EnsureComma(false);

                this.Emitter.Translator.EmitNode = expr.AstType;
                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;

                if (expr.AstType != null)
                {
                    this.Write(BridgeTypes.ToJsName(expr.AstType, this.Emitter));
                }
                else if (expr.IType != null)
                {
                    this.Write(BridgeTypes.ToJsName(expr.IType, this.Emitter));
                }
                else
                {
                    throw new EmitterException(this.PreviousNode, "There is no type information");
                }
            }

            if (needComma)
            {
                this.Emitter.Comma = true;
            }
        }

        protected virtual void EmitExpressionList(IEnumerable<AstType> types)
        {
            bool needComma = false;

            foreach (var type in types)
            {
                this.EnsureComma(false);
                this.Emitter.Translator.EmitNode = type;
                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.Write(BridgeTypes.ToJsName(type, this.Emitter));
            }

            if (needComma)
            {
                this.Emitter.Comma = true;
            }
        }
    }
}