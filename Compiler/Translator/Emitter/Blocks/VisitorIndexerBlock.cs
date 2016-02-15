using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;

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
            this.EmitIndexerMethod(this.IndexerDeclaration, this.IndexerDeclaration.Getter, false);
            this.EmitIndexerMethod(this.IndexerDeclaration, this.IndexerDeclaration.Setter, true);
        }

        protected virtual void EmitIndexerMethod(IndexerDeclaration indexerDeclaration, Accessor accessor, bool setter)
        {
            if (!accessor.IsNull && this.Emitter.GetInline(accessor) == null)
            {
                this.EnsureComma();

                this.ResetLocals();

                var prevMap = this.BuildLocalsMap();
                var prevNamesMap = this.BuildLocalsNamesMap();

                if (setter)
                {
                    this.AddLocals(new ParameterDeclaration[] { new ParameterDeclaration { Name = "value" } }, accessor.Body);
                }

                XmlToJsDoc.EmitComment(this, this.IndexerDeclaration);
                var overloads = OverloadsCollection.Create(this.Emitter, indexerDeclaration, setter);

                string name = overloads.GetOverloadName();
                this.Write((setter ? "set" : "get") + name);
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

                    foreach (var line in script)
                    {
                        this.Write(line);
                        this.WriteNewLine();
                    }

                    this.EndBlock();
                }

                this.ClearLocalsMap(prevMap);
                this.ClearLocalsNamesMap(prevNamesMap);
                this.Emitter.Comma = true;
            }
        }
    }
}
