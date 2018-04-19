using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Contract;

namespace Bridge.Translator
{
    public class TypeVariable : IVariable, IEquatable<TypeVariable>, IEquatable<IVariable>
    {
        private readonly IType typeVar;

        public TypeVariable(IType type)
        {
            this.typeVar = type;
        }

        public ISymbolReference ToReference()
        {
            throw new NotImplementedException();
        }

        public SymbolKind SymbolKind
        {
            get
            {
                return SymbolKind.TypeParameter;
            }
        }

        string IVariable.Name
        {
            get
            {
                return this.typeVar.Name;
            }
        }

        public DomRegion Region
        {
            get { return default(DomRegion); }
        }

        public IType Type
        {
            get { return this.typeVar; }
        }

        public bool IsConst
        {
            get { return false; }
        }

        public object ConstantValue
        {
            get { return null; }
        }

        string ISymbol.Name
        {
            get
            {
                return this.typeVar.Name;
            }
        }

        public bool Equals(TypeVariable other)
        {
            return this.typeVar.Equals(other.typeVar);
        }

        public bool Equals(IVariable other)
        {
            var typeVariable = other as TypeVariable;
            if (typeVariable != null)
            {
                return this.Equals(typeVariable);
            }

            return false;
        }

        public override int GetHashCode()
        {
            return this.typeVar.GetHashCode();
        }
    }

    public class CaptureAnalyzer : DepthFirstAstVisitor
    {
        private bool _usesThis;
        private HashSet<IVariable> _usedVariables = new HashSet<IVariable>();
        private List<string> _variables = new List<string>();

        public bool UsesThis { get { return _usesThis; } }
        public HashSet<IVariable> UsedVariables { get { return _usedVariables; } }
        public List<string> Variables { get { return _variables; } }
        private IEmitter emitter;

        public CaptureAnalyzer(IEmitter emitter)
        {
            this.emitter = emitter;
        }

        public void Analyze(AstNode node, IEnumerable<string> parameters = null)
        {
            _usesThis = false;
            _usedVariables.Clear();
            _variables.Clear();

            var methodDeclaration = node.GetParent<MethodDeclaration>();
            if (methodDeclaration != null)
            {
                foreach (var attrSection in methodDeclaration.Attributes)
                {
                    foreach (var attr in attrSection.Attributes)
                    {
                        var rr = this.emitter.Resolver.ResolveNode(attr.Type, this.emitter);
                        if (rr.Type.FullName == "Bridge.InitAttribute")
                        {
                            this._usedVariables.Add(null);
                            return;
                        }
                    }
                }
            }

            if (parameters != null)
            {
                foreach (var parameter in parameters)
                {
                    _variables.Add(parameter);
                }
            }

            node.AcceptVisitor(this);
        }

        public override void VisitTypeReferenceExpression(TypeReferenceExpression typeReferenceExpression)
        {
            this.CheckType(typeReferenceExpression.Type);
            base.VisitTypeReferenceExpression(typeReferenceExpression);
        }

        public override void VisitComposedType(ComposedType composedType)
        {
            this.CheckType(composedType);
            base.VisitComposedType(composedType);
        }

        public override void VisitPrimitiveType(PrimitiveType primitiveType)
        {
            this.CheckType(primitiveType);
            base.VisitPrimitiveType(primitiveType);
        }

        public override void VisitSimpleType(SimpleType simpleType)
        {
            this.CheckType(simpleType);
            base.VisitSimpleType(simpleType);
        }

        public override void VisitMemberType(MemberType memberType)
        {
            this.CheckType(memberType);
            base.VisitMemberType(memberType);
        }

        public void CheckType(AstType type)
        {
            var rr = this.emitter.Resolver.ResolveNode(type, this.emitter);

            if (Helpers.HasTypeParameters(rr.Type))
            {
                var ivar = new TypeVariable(rr.Type);
                if (!_usedVariables.Contains(ivar))
                {
                    _usedVariables.Add(ivar);
                }
            }
        }

        public override void VisitIndexerExpression(IndexerExpression indexerExpression)
        {
            this.CheckExpression(indexerExpression);

            if (this._usedVariables.Count == 0)
            {
                var rr = this.emitter.Resolver.ResolveNode(indexerExpression, this.emitter);
                var member = rr as MemberResolveResult;

                bool isInterface = member != null && member.Member.DeclaringTypeDefinition != null && member.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
                var hasTypeParemeter = isInterface && Helpers.IsTypeParameterType(member.Member.DeclaringType);
                if (isInterface && hasTypeParemeter)
                {
                    var ivar = new TypeVariable(member.Member.DeclaringType);
                    if (!_usedVariables.Contains(ivar))
                    {
                        _usedVariables.Add(ivar);
                    }
                }
            }

            base.VisitIndexerExpression(indexerExpression);
        }

        private void CheckMember(IMember member)
        {
            if (member != null && member.IsStatic && member.DeclaringTypeDefinition.TypeParameterCount > 0 && !Helpers.IsIgnoreGeneric(member.DeclaringTypeDefinition) && Helpers.HasTypeParameters(member.DeclaringType))
            {
                var ivar = new TypeVariable(member.DeclaringType);
                if (!_usedVariables.Contains(ivar))
                {
                    _usedVariables.Add(ivar);
                }
            }
        }

        private void CheckExpression(Expression expression)
        {
            if (this._usedVariables.Count == 0)
            {
                var rr = this.emitter.Resolver.ResolveNode(expression, this.emitter);
                var conversion = this.emitter.Resolver.Resolver.GetConversion(expression);
                if (conversion != null && conversion.Method != null)
                {
                    CheckMember(conversion.Method);
                }
            }
        }

        public override void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression)
        {
            this.CheckExpression(memberReferenceExpression);

            if (this._usedVariables.Count == 0)
            {
                var rr = this.emitter.Resolver.ResolveNode(memberReferenceExpression, this.emitter);

                var member = rr as MemberResolveResult;

                if (member != null)
                {
                    CheckMember(member.Member);
                }

                bool isInterface = member != null && member.Member.DeclaringTypeDefinition != null && member.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
                var hasTypeParemeter = isInterface && Helpers.IsTypeParameterType(member.Member.DeclaringType);
                if (isInterface && hasTypeParemeter)
                {
                    var ivar = new TypeVariable(member.Member.DeclaringType);
                    if (!_usedVariables.Contains(ivar))
                    {
                        _usedVariables.Add(ivar);
                    }
                }
            }

            base.VisitMemberReferenceExpression(memberReferenceExpression);
        }

        public override void VisitIdentifierExpression(IdentifierExpression identifierExpression)
        {
            var rr = this.emitter.Resolver.ResolveNode(identifierExpression, this.emitter);
            this.CheckExpression(identifierExpression);

            if (this._usedVariables.Count == 0)
            {
                var member = rr as MemberResolveResult;

                if (member != null && member.Member.IsStatic && member.Member.DeclaringTypeDefinition.TypeParameterCount > 0 && member.Member.DeclaringTypeDefinition.Equals(this.emitter.TypeInfo.Type.GetDefinition()) && !Helpers.IsIgnoreGeneric(member.Member.DeclaringTypeDefinition))
                {
                    var ivar = new TypeVariable(member.Member.DeclaringType);
                    if (!_usedVariables.Contains(ivar))
                    {
                        _usedVariables.Add(ivar);
                    }
                }

                bool isInterface = member != null && member.Member.DeclaringTypeDefinition != null &&
                                   member.Member.DeclaringTypeDefinition.Kind == TypeKind.Interface;
                var hasTypeParemeter = isInterface && Helpers.IsTypeParameterType(member.Member.DeclaringType);
                if (isInterface && hasTypeParemeter)
                {
                    var ivar = new TypeVariable(member.Member.DeclaringType);
                    if (!_usedVariables.Contains(ivar))
                    {
                        _usedVariables.Add(ivar);
                    }
                }
            }

            var localResolveResult = rr as LocalResolveResult;
            if (localResolveResult != null)
            {
                if (!_variables.Contains(localResolveResult.Variable.Name) && !_usedVariables.Contains(localResolveResult.Variable))
                {
                    _usedVariables.Add(localResolveResult.Variable);
                }
            }
            else if (rr is ThisResolveResult)
            {
                _usesThis = true;
            }

            base.VisitIdentifierExpression(identifierExpression);
        }

        public override void VisitVariableDeclarationStatement(VariableDeclarationStatement variableDeclarationStatement)
        {
            foreach (var variable in variableDeclarationStatement.Variables)
            {
                _variables.Add(variable.Name);
            }
            base.VisitVariableDeclarationStatement(variableDeclarationStatement);
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            this.CheckExpression(lambdaExpression);

            var analyzer = new CaptureAnalyzer(this.emitter);
            analyzer.Analyze(lambdaExpression.Body, lambdaExpression.Parameters.Select(p => p.Name));

            foreach (var usedVariable in analyzer.UsedVariables)
            {
                if (!_variables.Contains(usedVariable.Name) && !_usedVariables.Contains(usedVariable))
                {
                    _usedVariables.Add(usedVariable);
                }
            }

            if (analyzer.UsesThis)
            {
                this._usesThis = true;
            }

            //base.VisitLambdaExpression(lambdaExpression);
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            this.CheckExpression(anonymousMethodExpression);

            var analyzer = new CaptureAnalyzer(this.emitter);
            analyzer.Analyze(anonymousMethodExpression.Body, anonymousMethodExpression.Parameters.Select(p => p.Name));

            foreach (var usedVariable in analyzer.UsedVariables)
            {
                if (!_variables.Contains(usedVariable.Name) && !_usedVariables.Contains(usedVariable))
                {
                    _usedVariables.Add(usedVariable);
                }
            }

            if (analyzer.UsesThis)
            {
                this._usesThis = true;
            }

            //base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }

        public override void VisitCastExpression(CastExpression castExpression)
        {
            var conversion = this.emitter.Resolver.Resolver.GetConversion(castExpression.Expression);
            if (conversion.IsUserDefined && conversion.Method.DeclaringType.TypeArguments.Count > 0)
            {
                foreach (var typeArgument in conversion.Method.DeclaringType.TypeArguments)
                {
                    if (Helpers.HasTypeParameters(typeArgument))
                    {
                        var ivar = new TypeVariable(typeArgument);
                        if (!_usedVariables.Contains(ivar))
                        {
                            _usedVariables.Add(ivar);
                        }
                    }
                }
            }
            base.VisitCastExpression(castExpression);
        }

        public override void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression)
        {
            this.CheckExpression(binaryOperatorExpression);

            var rr = this.emitter.Resolver.ResolveNode(binaryOperatorExpression, this.emitter) as OperatorResolveResult;
            if (rr != null && rr.UserDefinedOperatorMethod != null)
            {
                foreach (var typeArgument in rr.UserDefinedOperatorMethod.DeclaringType.TypeArguments)
                {
                    if (Helpers.HasTypeParameters(typeArgument))
                    {
                        var ivar = new TypeVariable(typeArgument);
                        if (!_usedVariables.Contains(ivar))
                        {
                            _usedVariables.Add(ivar);
                        }
                    }
                }
            }
            base.VisitBinaryOperatorExpression(binaryOperatorExpression);
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            this.CheckExpression(unaryOperatorExpression);

            var rr = this.emitter.Resolver.ResolveNode(unaryOperatorExpression, this.emitter) as OperatorResolveResult;
            if (rr != null && rr.UserDefinedOperatorMethod != null)
            {
                foreach (var typeArgument in rr.UserDefinedOperatorMethod.DeclaringType.TypeArguments)
                {
                    if (Helpers.HasTypeParameters(typeArgument))
                    {
                        var ivar = new TypeVariable(typeArgument);
                        if (!_usedVariables.Contains(ivar))
                        {
                            _usedVariables.Add(ivar);
                        }
                    }
                }
            }

            base.VisitUnaryOperatorExpression(unaryOperatorExpression);
        }

        public override void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            var rr = this.emitter.Resolver.ResolveNode(assignmentExpression, this.emitter) as OperatorResolveResult;
            if (rr != null && rr.UserDefinedOperatorMethod != null)
            {
                foreach (var typeArgument in rr.UserDefinedOperatorMethod.DeclaringType.TypeArguments)
                {
                    if (Helpers.HasTypeParameters(typeArgument))
                    {
                        var ivar = new TypeVariable(typeArgument);
                        if (!_usedVariables.Contains(ivar))
                        {
                            _usedVariables.Add(ivar);
                        }
                    }
                }
            }

            base.VisitAssignmentExpression(assignmentExpression);
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            this.CheckExpression(invocationExpression);

            var rr = this.emitter.Resolver.ResolveNode(invocationExpression, this.emitter) as InvocationResolveResult;

            if (rr != null)
            {
                foreach (var argument in rr.Arguments)
                {
                    if (argument.Type != null && Helpers.HasTypeParameters(argument.Type))
                    {
                        var ivar = new TypeVariable(argument.Type);
                        if (!_usedVariables.Contains(ivar))
                        {
                            _usedVariables.Add(ivar);
                        }
                    }
                }
            }

            base.VisitInvocationExpression(invocationExpression);
        }
    }
}