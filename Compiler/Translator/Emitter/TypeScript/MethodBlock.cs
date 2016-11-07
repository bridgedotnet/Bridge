using Bridge.Contract;
using Bridge.Contract.Constants;

using ICSharpCode.NRefactory.CSharp;
using System.Collections.Generic;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

namespace Bridge.Translator.TypeScript
{
    public class MethodBlock : TypeScriptBlock
    {
        public MethodBlock(IEmitter emitter, MethodDeclaration methodDeclaration)
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
            XmlToJsDoc.EmitComment(this, this.MethodDeclaration);
            var overloads = OverloadsCollection.Create(this.Emitter, methodDeclaration);
            var memberResult = this.Emitter.Resolver.ResolveNode(methodDeclaration, this.Emitter) as MemberResolveResult;
            var ignoreInterface = memberResult.Member.DeclaringType.Kind == TypeKind.Interface &&
                                      memberResult.Member.DeclaringType.TypeParameterCount > 0;
            if (overloads.HasOverloads)
            {
                string name = overloads.GetOverloadName(ignoreInterface);
                this.Write(name);
            }
            else
            {
                this.Write(this.Emitter.GetEntityName(methodDeclaration, ignoreInterface: ignoreInterface));
            }

            bool needComma = false;
            var isGeneric = methodDeclaration.TypeParameters.Count > 0;
            if (isGeneric)
            {
                this.Write("<");
                foreach (var p in methodDeclaration.TypeParameters)
                {
                    if (needComma)
                    {
                        this.WriteComma();
                    }

                    needComma = true;
                    this.Write(p.Name);
                }
                this.Write(">");

                this.WriteOpenParentheses();

                var comma = false;
                foreach (var p in methodDeclaration.TypeParameters)
                {
                    if (comma)
                    {
                        this.WriteComma();
                    }
                    this.Write(p.Name);
                    this.WriteColon();
                    this.WriteOpenBrace();
                    this.Write(JS.Fields.PROTOTYPE);
                    this.WriteColon();
                    this.Write(p.Name);

                    this.WriteCloseBrace();
                    comma = true;
                }
            }
            else
            {
                this.WriteOpenParentheses();
            }

            if (needComma && methodDeclaration.Parameters.Count > 0)
            {
                this.WriteComma();
            }

            this.EmitMethodParameters(methodDeclaration.Parameters, methodDeclaration);

            this.WriteCloseParentheses();

            this.WriteColon();

            var retType = BridgeTypes.ToTypeScriptName(methodDeclaration.ReturnType, this.Emitter);
            this.Write(retType);

            this.WriteSemiColon();
            this.WriteNewLine();
        }

        protected virtual void EmitMethodParameters(IEnumerable<ParameterDeclaration> declarations, AstNode context)
        {
            bool needComma = false;

            foreach (var p in declarations)
            {
                var name = this.Emitter.GetEntityName(p);
                bool optional = p.DefaultExpression != null && !p.DefaultExpression.IsNull;

                if (needComma)
                {
                    this.WriteComma();
                }

                needComma = true;
                this.Write(name);

                if (optional)
                {
                    this.Write("?");
                }

                this.WriteColon();
                name = BridgeTypes.ToTypeScriptName(p.Type, this.Emitter);
                if (p.ParameterModifier == ParameterModifier.Out || p.ParameterModifier == ParameterModifier.Ref)
                {
                    name = "{v: " + name + "}";
                }
                this.Write(name);
            }
        }
    }
}