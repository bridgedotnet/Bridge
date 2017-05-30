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

            if (memberResult != null &&
                propertyDeclaration.Getter.IsNull && propertyDeclaration.Setter.IsNull)
            {
                return;
            }

            if (!propertyDeclaration.Getter.IsNull && this.Emitter.GetInline(propertyDeclaration.Getter) == null)
            {
                
                var isInterface = memberResult.Member.DeclaringType.Kind == TypeKind.Interface;
                var ignoreInterface = isInterface &&
                                      memberResult.Member.DeclaringType.TypeParameterCount > 0;

                this.WriteAccessor(propertyDeclaration, memberResult, ignoreInterface);

                if (!ignoreInterface && isInterface)
                {
                    this.WriteAccessor(propertyDeclaration, memberResult, true);
                }
            }
        }

        private bool comment = false;
        private void WriteAccessor(PropertyDeclaration p, MemberResolveResult memberResult, bool ignoreInterface)
        {
            string name = Helpers.GetPropertyRef(memberResult.Member, this.Emitter, false, false, ignoreInterface);
            if (name.Contains("\""))
            {
                return;
            }
            if (!this.comment)
            {
                XmlToJsDoc.EmitComment(this, this.PropertyDeclaration);
            }
            this.comment = true;
            this.Write(name);
            this.WriteColon();
            name = BridgeTypes.ToTypeScriptName(p.ReturnType, this.Emitter);
            this.Write(name);
            this.WriteSemiColon();
            this.WriteNewLine();
        }
    }
}