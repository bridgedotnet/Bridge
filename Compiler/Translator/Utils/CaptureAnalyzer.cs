using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;
using ICSharpCode.NRefactory.TypeSystem;

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

    public class CaptureAnalyzer : CombinedAstAndResolveResultVisitor
    {
        private bool _usesThis;
        private HashSet<IVariable> _usedVariables = new HashSet<IVariable>();
        private List<string> _variables = new List<string>();

        public bool UsesThis { get { return _usesThis; } }
        public HashSet<IVariable> UsedVariables { get { return _usedVariables; } }
        public List<string> Variables { get { return _variables; } }

        public CaptureAnalyzer(CSharpAstResolver resolver)
            : base(resolver)
        {
        }

        public void Analyze(AstNode node, IEnumerable<string> parameters = null)
        {
            _usesThis = false;
            _usedVariables.Clear();
            _variables.Clear();

            if (parameters != null)
            {
                foreach (var parameter in parameters)
                {
                    _variables.Add(parameter);
                }
            }

            node.AcceptVisitor(this);
        }

        public override object VisitTypeOfResolveResult(TypeOfResolveResult rr, object data)
        {
            if (rr.ReferencedType.Kind == TypeKind.TypeParameter)
            {
                var ivar = new TypeVariable(rr.ReferencedType);
                if (!_usedVariables.Contains(ivar))
                {
                    _usedVariables.Add(ivar);
                }
            }

            return base.VisitTypeOfResolveResult(rr, data);
        }

        public override object VisitTypeResolveResult(TypeResolveResult rr, object data)
        {
            if (rr.Type.Kind == TypeKind.TypeParameter)
            {
                var ivar = new TypeVariable(rr.Type);
                if (!_usedVariables.Contains(ivar))
                {
                    _usedVariables.Add(ivar);
                }
            }

            return base.VisitTypeResolveResult(rr, data);
        }

        public override object VisitConstantResolveResult(ConstantResolveResult rr, object data)
        {
            if (rr.Type.Kind == TypeKind.TypeParameter)
            {
                var ivar = new TypeVariable(rr.Type);
                if (!_usedVariables.Contains(ivar))
                {
                    _usedVariables.Add(ivar);
                }
            }

            return base.VisitConstantResolveResult(rr, data);
        }

        public override object VisitThisResolveResult(ThisResolveResult rr, object data)
        {
            _usesThis = true;
            return base.VisitThisResolveResult(rr, data);
        }

        public override object VisitLocalResolveResult(LocalResolveResult rr, object data)
        {
            if (!_variables.Contains(rr.Variable.Name) && !_usedVariables.Contains(rr.Variable))
            {
                _usedVariables.Add(rr.Variable);
            }

            return base.VisitLocalResolveResult(rr, data);
        }

        public override object VisitLambdaResolveResult(LambdaResolveResult rr, object data)
        {
            return null;
            //return base.VisitLambdaResolveResult(rr, data);
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
            var analyzer = new CaptureAnalyzer(this._resolver);
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

            base.VisitLambdaExpression(lambdaExpression);
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            var analyzer = new CaptureAnalyzer(this._resolver);
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

            base.VisitAnonymousMethodExpression(anonymousMethodExpression);
        }
    }

}
