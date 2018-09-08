using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.Semantics;
using System.Linq;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator.TypeScript
{
    public class PropertyBlock : TypeScriptBlock
    {
        public PropertyBlock(IEmitter emitter, PropertyDeclaration propertyDeclaration)
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
            this.EmitPropertyMethod(this.PropertyDeclaration);
        }

        protected virtual void EmitPropertyMethod(PropertyDeclaration propertyDeclaration)
        {
            var memberResult = this.Emitter.Resolver.ResolveNode(propertyDeclaration, this.Emitter) as MemberResolveResult;
            var isInterface = memberResult != null && memberResult.Member.DeclaringType.Kind == TypeKind.Interface;

            if (!isInterface && !propertyDeclaration.HasModifier(Modifiers.Public))
            {
                return;
            }

            if (memberResult != null &&
                propertyDeclaration.Getter.IsNull && propertyDeclaration.Setter.IsNull)
            {
                return;
            }

            if (!propertyDeclaration.Getter.IsNull && this.Emitter.GetInline(propertyDeclaration.Getter) == null)
            {
                XmlToJsDoc.EmitComment(this, this.PropertyDeclaration);

                var ignoreInterface = isInterface &&
                                      memberResult.Member.DeclaringType.TypeParameterCount > 0;
                this.WriteAccessor(propertyDeclaration, memberResult, ignoreInterface);

                if (!ignoreInterface && isInterface)
                {
                    this.WriteAccessor(propertyDeclaration, memberResult, true);
                }
            }
        }

        private void WriteAccessor(PropertyDeclaration p, MemberResolveResult memberResult, bool ignoreInterface)
        {
            string name = Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false, false, ignoreInterface);
            this.Write(name);

            var property_rr = this.Emitter.Resolver.ResolveNode(p, this.Emitter);
            if (property_rr is MemberResolveResult mrr && mrr.Member.Attributes.Any(a => a.AttributeType.FullName == "Bridge.OptionalAttribute"))
            {
                this.Write("?");
            }

            this.WriteColon();
            name = BridgeTypes.ToTypeScriptName(p.ReturnType, this.Emitter);
            this.Write(name);

            var resolveResult = this.Emitter.Resolver.ResolveNode(p.ReturnType, this.Emitter);
            if (resolveResult != null && (resolveResult.Type.IsReferenceType.HasValue && resolveResult.Type.IsReferenceType.Value || resolveResult.Type.IsKnownType(KnownTypeCode.NullableOfT)))
            {
                this.Write(" | null");
            }

            this.WriteSemiColon();
            this.WriteNewLine();
        }
    }
}