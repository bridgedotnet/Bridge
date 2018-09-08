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
            var isInterface = memberResult.Member.DeclaringType.Kind == TypeKind.Interface;
            var ignoreInterface = isInterface &&
                                      memberResult.Member.DeclaringType.TypeParameterCount > 0;
            this.WriteSignature(methodDeclaration, overloads, ignoreInterface, isInterface);
            if (!ignoreInterface && isInterface)
            {
                this.WriteSignature(methodDeclaration, overloads, true, isInterface);
            }
        }

        private void WriteSignature(MethodDeclaration methodDeclaration, OverloadsCollection overloads, bool ignoreInterface, bool isInterface)
        {
            if (!isInterface && !methodDeclaration.HasModifier(Modifiers.Public))
            {
                return;
            }

            string name = overloads.GetOverloadName(ignoreInterface);
            this.Write(name);

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

            var resolveResult = this.Emitter.Resolver.ResolveNode(methodDeclaration.ReturnType, this.Emitter);
            if (resolveResult != null && (resolveResult.Type.IsReferenceType.HasValue && resolveResult.Type.IsReferenceType.Value || resolveResult.Type.IsKnownType(KnownTypeCode.NullableOfT)))
            {
                this.Write(" | null");
            }

            this.WriteSemiColon();
            this.WriteNewLine();
        }

        protected virtual void EmitMethodParameters(IEnumerable<ParameterDeclaration> declarations, AstNode context)
        {
            bool needComma = false;

            foreach (var p in declarations)
            {
                var name = this.Emitter.GetParameterName(p);
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

                var resolveResult = this.Emitter.Resolver.ResolveNode(p.Type, this.Emitter);
                if (resolveResult != null && (resolveResult.Type.IsReferenceType.HasValue && resolveResult.Type.IsReferenceType.Value || resolveResult.Type.IsKnownType(KnownTypeCode.NullableOfT)))
                {
                    name += " | null";
                }

                if (p.ParameterModifier == ParameterModifier.Out || p.ParameterModifier == ParameterModifier.Ref)
                {
                    name = "{v: " + name + "}";
                }
                this.Write(name);
            }
        }
    }
}