using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class VisitorCustomEventBlock : AbstractMethodBlock
    {
        public VisitorCustomEventBlock(IEmitter emitter, CustomEventDeclaration customEventDeclaration)
            : base(emitter, customEventDeclaration)
        {
            this.Emitter = emitter;
            this.CustomEventDeclaration = customEventDeclaration;
        }

        public CustomEventDeclaration CustomEventDeclaration
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.EmitPropertyMethod(this.CustomEventDeclaration, this.CustomEventDeclaration.AddAccessor, false);
            this.EmitPropertyMethod(this.CustomEventDeclaration, this.CustomEventDeclaration.RemoveAccessor, true);
        }

        protected virtual void EmitPropertyMethod(CustomEventDeclaration customEventDeclaration, Accessor accessor, bool remover)
        {
            if (!accessor.IsNull && this.Emitter.GetInline(accessor) == null)
            {
                this.EnsureComma();

                this.ResetLocals();

                var prevMap = this.BuildLocalsMap();
                var prevNamesMap = this.BuildLocalsNamesMap();

                this.AddLocals(new ParameterDeclaration[] { new ParameterDeclaration { Name = "value" } }, accessor.Body);
                XmlToJsDoc.EmitComment(this, this.CustomEventDeclaration);
                var member_rr = (MemberResolveResult)this.Emitter.Resolver.ResolveNode(customEventDeclaration, this.Emitter);

                this.Write(Helpers.GetEventRef(customEventDeclaration, this.Emitter, remover, false, false, OverloadsCollection.ExcludeTypeParameterForDefinition(member_rr)));
                this.WriteColon();
                this.WriteFunction();
                var m_rr = (MemberResolveResult)this.Emitter.Resolver.ResolveNode(customEventDeclaration, this.Emitter);
                var nm = Helpers.GetFunctionName(this.Emitter.AssemblyInfo.NamedFunctions, m_rr.Member, this.Emitter, remover);
                if (nm != null)
                {
                    this.Write(nm);
                }
                this.WriteOpenParentheses();
                this.Write("value");
                this.WriteCloseParentheses();
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