using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class VisitorIndexerBlock : AbstractMethodBlock
    {
        public VisitorIndexerBlock(IEmitter emitter, IndexerDeclaration indexerDeclaration)
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
            var rr = this.Emitter.Resolver.ResolveNode(this.IndexerDeclaration, this.Emitter) as MemberResolveResult;
            IProperty prop = null;
            if (rr != null)
            {
                prop = rr.Member as IProperty;

                if (prop != null && this.Emitter.Validator.IsIgnoreType(prop))
                {
                    return;
                }
            }

            this.EmitIndexerMethod(this.IndexerDeclaration, prop, this.IndexerDeclaration.Getter, prop == null ? null : prop.Getter, false);
            this.EmitIndexerMethod(this.IndexerDeclaration, prop, this.IndexerDeclaration.Setter, prop == null ? null : prop.Setter, true);
        }

        protected virtual void EmitIndexerMethod(IndexerDeclaration indexerDeclaration, IProperty prop, Accessor accessor, IMethod propAccessor, bool setter)
        {
            var isIgnore = propAccessor != null && this.Emitter.Validator.IsIgnoreType(propAccessor);

            if (!accessor.IsNull && this.Emitter.GetInline(accessor) == null && !isIgnore)
            {
                this.EnsureComma();

                this.ResetLocals();

                var prevMap = this.BuildLocalsMap();
                var prevNamesMap = this.BuildLocalsNamesMap();

                if (setter)
                {
                    this.AddLocals(new ParameterDeclaration[] {new ParameterDeclaration {Name = "value"}}, accessor.Body);
                }
                else
                {
                    this.AddLocals(new ParameterDeclaration[0], accessor.Body);
                }

                XmlToJsDoc.EmitComment(this, this.IndexerDeclaration);

                string accName = null;

                if (prop != null)
                {
                    accName = this.Emitter.GetEntityNameFromAttr(prop, setter);

                    if (string.IsNullOrEmpty(accName))
                    {
                        var overloads = OverloadsCollection.Create(this.Emitter, indexerDeclaration, setter);
                        accName = Helpers.GetSetOrGet(setter) + overloads.GetOverloadName();
                    }
                }

                this.Write(accName);
                this.WriteColon();
                this.WriteFunction();
                this.EmitMethodParameters(indexerDeclaration.Parameters, null, indexerDeclaration, setter);

                if (setter)
                {
                    this.Write(", value)");
                }
                this.WriteSpace();

                var script = this.Emitter.GetScript(accessor);

                if (script == null)
                {
                    accessor.Body.AcceptVisitor(this.Emitter);
                }
                else
                {
                    this.BeginBlock();

                    this.WriteLines(script);

                    this.EndBlock();
                }

                this.ClearLocalsMap(prevMap);
                this.ClearLocalsNamesMap(prevNamesMap);
                this.Emitter.Comma = true;
            }
        }
    }
}