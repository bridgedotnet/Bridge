using Bridge.Contract;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;

namespace Bridge.Translator
{
    public class VisitorMethodBlock : AbstractMethodBlock
    {
        public VisitorMethodBlock(IEmitter emitter, MethodDeclaration methodDeclaration)
            : base(emitter, methodDeclaration)
        {
            this.Emitter = emitter;
            this.MethodDeclaration = methodDeclaration;
        }

        public MethodDeclaration MethodDeclaration
        {
            get;
            set;
        }

        protected override void DoEmit()
        {
            this.VisitMethodDeclaration(this.MethodDeclaration);
        }

        protected void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            foreach (var attrSection in methodDeclaration.Attributes)
            {
                foreach (var attr in attrSection.Attributes)
                {
                    var rr = this.Emitter.Resolver.ResolveNode(attr.Type, this.Emitter);
                    if (rr.Type.FullName == "Bridge.ExternalAttribute" || rr.Type.FullName == "Bridge.IgnoreAttribute")
                    {
                        return;
                    }
                    else if (rr.Type.FullName == "Bridge.InitAttribute")
                    {
                        int initPosition = 0;

                        if (attr.HasArgumentList)
                        {
                            if (attr.Arguments.Any())
                            {
                                var argExpr = attr.Arguments.First();
                                var argrr = this.Emitter.Resolver.ResolveNode(argExpr, this.Emitter);
                                if (argrr.ConstantValue is int)
                                {
                                    initPosition = (int)argrr.ConstantValue;
                                }
                            }
                        }

                        if (initPosition > 0)
                        {
                            return;
                        }
                    }
                }
            }

            this.EnsureComma();
            this.ResetLocals();

            var prevMap = this.BuildLocalsMap();
            var prevNamesMap = this.BuildLocalsNamesMap();

            this.AddLocals(methodDeclaration.Parameters, methodDeclaration.Body);

            var overloads = OverloadsCollection.Create(this.Emitter, methodDeclaration);
            XmlToJsDoc.EmitComment(this, this.MethodDeclaration);

            string name = overloads.GetOverloadName(false, null, true);
            this.Write(name);

            this.WriteColon();

            this.WriteFunction();

            this.EmitMethodParameters(methodDeclaration.Parameters, methodDeclaration.TypeParameters.Count > 0 && Helpers.IsIgnoreGeneric(methodDeclaration, this.Emitter) ? null : methodDeclaration.TypeParameters, methodDeclaration);

            this.WriteSpace();

            var script = this.Emitter.GetScript(methodDeclaration);

            if (script == null)
            {
                if (methodDeclaration.HasModifier(Modifiers.Async))
                {
                    new AsyncBlock(this.Emitter, methodDeclaration).Emit();
                }
                else
                {
                    methodDeclaration.Body.AcceptVisitor(this.Emitter);
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