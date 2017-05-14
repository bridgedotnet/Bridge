using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using System.Linq;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator
{
    public class VisitorPropertyBlock : AbstractMethodBlock
    {
        public VisitorPropertyBlock(IEmitter emitter, PropertyDeclaration propertyDeclaration)
            : base(emitter, propertyDeclaration)
        {
            this.Emitter = emitter;
            this.PropertyDeclaration = propertyDeclaration;
        }

        public PropertyDeclaration PropertyDeclaration
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            var memberResult = this.Emitter.Resolver.ResolveNode(this.PropertyDeclaration, this.Emitter) as MemberResolveResult;

            if (memberResult != null &&
                memberResult.Member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.ExternalAttribute")
                )
            {
                return;
            }

            this.EmitPropertyMethod(this.PropertyDeclaration, this.PropertyDeclaration.Getter, ((IProperty)memberResult.Member).Getter, false, false);
            this.EmitPropertyMethod(this.PropertyDeclaration, this.PropertyDeclaration.Setter, ((IProperty)memberResult.Member).Setter, true, false);
        }

        public virtual void EmitPropertyMethod(PropertyDeclaration propertyDeclaration, Accessor accessor, IMethod method, bool setter, bool isObjectLiteral)
        {
            if ((!accessor.IsNull || method != null && Helpers.IsScript(method)) && this.Emitter.GetInline(accessor) == null)
            {
                this.EnsureComma();

                this.ResetLocals();

                var prevMap = this.BuildLocalsMap();
                var prevNamesMap = this.BuildLocalsNamesMap();

                if (setter)
                {
                    this.AddLocals(new ParameterDeclaration[] { new ParameterDeclaration { Name = "value" } }, accessor.Body);
                }
                else
                {
                    this.AddLocals(new ParameterDeclaration[0], accessor.Body);
                }

                //XmlToJsDoc.EmitComment(this, this.PropertyDeclaration);

                this.Write(setter ? JS.Funcs.Property.SET : JS.Funcs.Property.GET);

                this.WriteColon();
                this.WriteFunction();

                var m_rr = (MemberResolveResult)this.Emitter.Resolver.ResolveNode(propertyDeclaration, this.Emitter);
                var nm = Helpers.GetFunctionName(this.Emitter.AssemblyInfo.NamedFunctions, m_rr.Member, this.Emitter, setter);
                if (nm != null)
                {
                    this.Write(nm);
                }

                this.WriteOpenParentheses();
                this.Write(setter ? "value" : "");
                this.WriteCloseParentheses();
                this.WriteSpace();

                var script = this.Emitter.GetScript(accessor);

                if (script == null)
                {
                    if(YieldBlock.HasYield(accessor.Body))
                    {
                        new GeneratorBlock(this.Emitter, accessor).Emit();
                    }
                    else
                    {
                        accessor.Body.AcceptVisitor(this.Emitter);
                    }
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