using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System.Collections.Generic;

namespace Bridge.Translator.TypeScript
{
    public class IndexerBlock : TypeScriptBlock
    {
        public IndexerBlock(IEmitter emitter, IndexerDeclaration indexerDeclaration)
            : base(emitter, indexerDeclaration)
        {
            this.Emitter = emitter;
            this.IndexerDeclaration = indexerDeclaration;
        }

        public IndexerDeclaration IndexerDeclaration
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitIndexerMethod(this.IndexerDeclaration, this.IndexerDeclaration.Getter, false);
            this.EmitIndexerMethod(this.IndexerDeclaration, this.IndexerDeclaration.Setter, true);
        }

        protected virtual void EmitIndexerMethod(IndexerDeclaration indexerDeclaration, Accessor accessor, bool setter)
        {
            if (!accessor.IsNull && this.Emitter.GetInline(accessor) == null)
            {
                var memberResult = this.Emitter.Resolver.ResolveNode(this.IndexerDeclaration, this.Emitter) as MemberResolveResult;
                var isInterface = memberResult.Member.DeclaringType.Kind == TypeKind.Interface;
                var ignoreInterface = isInterface &&
                                      memberResult.Member.DeclaringType.TypeParameterCount > 0;

                this.WriteAccessor(indexerDeclaration, setter, ignoreInterface);

                if (!ignoreInterface && isInterface)
                {
                    this.WriteAccessor(indexerDeclaration, setter, true);
                }
            }
        }

        private void WriteAccessor(IndexerDeclaration indexerDeclaration, bool setter, bool ignoreInterface)
        {
            string name = Helpers.GetPropertyRef(this.IndexerDeclaration, this.Emitter, setter, false, ignoreInterface);
            if (name.Contains("\""))
            {
                return;
            }

            XmlToJsDoc.EmitComment(this, this.IndexerDeclaration, !setter);
            this.Write(name);

            this.EmitMethodParameters(indexerDeclaration.Parameters, null, indexerDeclaration, setter);

            if (setter)
            {
                this.Write(", value");
                this.WriteColon();
                name = BridgeTypes.ToTypeScriptName(indexerDeclaration.ReturnType, this.Emitter);
                this.Write(name);
                this.WriteCloseParentheses();
                this.WriteColon();
                this.Write("void");
            }
            else
            {
                this.WriteColon();
                name = BridgeTypes.ToTypeScriptName(indexerDeclaration.ReturnType, this.Emitter);
                this.Write(name);
            }

            this.WriteSemiColon();
            this.WriteNewLine();
        }

        protected virtual void EmitMethodParameters(IEnumerable<ParameterDeclaration> declarations, IEnumerable<TypeParameterDeclaration> typeParamsdeclarations, AstNode context, bool skipClose)
        {
            this.WriteOpenParentheses();
            bool needComma = false;

            foreach (var p in declarations)
            {
                var name = this.Emitter.GetParameterName(p);

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.Write(name);
                this.WriteColon();
                name = BridgeTypes.ToTypeScriptName(p.Type, this.Emitter);
                this.Write(name);
            }

            if (!skipClose)
            {
                this.WriteCloseParentheses();
            }
        }
    }
}