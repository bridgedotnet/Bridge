using System.Collections.Generic;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;
using Bridge.Contract;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
    public class DependencyFinderVisitor : DepthFirstAstVisitor
    {
        public DependencyFinderVisitor(IEmitter emitter)
        {
            this.Emitter = emitter;
            this.Dependencies = new List<ITypeInfo>();
        }

        public override void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression)
        {
            base.VisitMemberReferenceExpression(memberReferenceExpression);

            var rr = this.Emitter.Resolver.ResolveNode(memberReferenceExpression.Target, this.Emitter);

            if (rr is TypeResolveResult)
            {
                var typeInfo = this.Emitter.BridgeTypes.Get(rr.Type, true);

                if (typeInfo != null && typeInfo.TypeInfo != null)
                {
                    this.Dependencies.Add(typeInfo.TypeInfo);    
                }
            }
        }

        public override void VisitConstructorDeclaration(ConstructorDeclaration methodDeclaration)
        {
            if (methodDeclaration.HasModifier(Modifiers.Static))
            {
                base.VisitConstructorDeclaration(methodDeclaration);
            }
        }

        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            if (methodDeclaration.HasModifier(Modifiers.Static))
            {
                base.VisitMethodDeclaration(methodDeclaration);    
            }
        }

        public override void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            if (fieldDeclaration.HasModifier(Modifiers.Static))
            {
                base.VisitFieldDeclaration(fieldDeclaration);    
            }
        }

        public override void VisitFixedFieldDeclaration(FixedFieldDeclaration fixedFieldDeclaration)
        {
            if (fixedFieldDeclaration.HasModifier(Modifiers.Static))
            {
                base.VisitFixedFieldDeclaration(fixedFieldDeclaration);
            }
        }

        public IEmitter Emitter
        {
            get; 
            set;
        }

        public List<ITypeInfo> Dependencies
        {
            get; set;
        }
    }
}
