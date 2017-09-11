using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public static class LocalUsageGatherer
    {
        private class Analyzer : CSharpSyntaxWalker
        {
            private bool _usesThis;
            private readonly HashSet<ISymbol> _usedVariables = new HashSet<ISymbol>();
            private readonly List<string> _usedVariablesNames = new List<string>();
            private readonly SemanticModel _semanticModel;

            public bool UsesThis
            {
                get
                {
                    return _usesThis;
                }
            }

            public HashSet<ISymbol> UsedVariables
            {
                get
                {
                    return _usedVariables;
                }
            }

            public List<string> UsedVariablesNames
            {
                get
                {
                    return _usedVariablesNames;
                }
            }

            public Analyzer(SemanticModel semanticModel)
            {
                _semanticModel = semanticModel;
            }

            public void Analyze(SyntaxNode node)
            {
                _usesThis = false;
                _usedVariables.Clear();

                if (node is SimpleLambdaExpressionSyntax)
                {
                    Visit(((SimpleLambdaExpressionSyntax)node).Body);
                }
                else if (node is ParenthesizedLambdaExpressionSyntax)
                {
                    Visit(((ParenthesizedLambdaExpressionSyntax)node).Body);
                }
                else if (node is AnonymousMethodExpressionSyntax)
                {
                    Visit(((AnonymousMethodExpressionSyntax)node).Block);
                }
                else
                {
                    Visit(node);
                }
            }

            public override void VisitThisExpression(ThisExpressionSyntax syntax)
            {
                _usesThis = true;
            }

            public override void VisitBaseExpression(BaseExpressionSyntax syntax)
            {
                _usesThis = true;
            }

            public override void VisitIdentifierName(IdentifierNameSyntax syntax)
            {
                var symbol = _semanticModel.GetSymbolInfo(syntax).Symbol;

                if (symbol is ILocalSymbol || symbol is IParameterSymbol || symbol is IRangeVariableSymbol)
                {
                    _usedVariables.Add(symbol);
                }
                else if ((symbol is IFieldSymbol || symbol is IEventSymbol || symbol is IPropertySymbol || symbol is IMethodSymbol) && !symbol.IsStatic)
                {
                    _usesThis = true;
                }
            }

            public override void VisitVariableDeclarator(VariableDeclaratorSyntax node)
            {
                var name = node.Identifier.Value.ToString();

                if (!this.UsedVariablesNames.Contains(name))
                {
                    this.UsedVariablesNames.Add(name);
                }

                base.VisitVariableDeclarator(node);
            }

            public override void VisitNameEquals(NameEqualsSyntax node)
            {
            }

            public override void VisitNameColon(NameColonSyntax node)
            {
            }

            public override void VisitGenericName(GenericNameSyntax node)
            {
                var symbol = _semanticModel.GetSymbolInfo(node).Symbol;

                if ((symbol is IFieldSymbol || symbol is IEventSymbol || symbol is IPropertySymbol || symbol is IMethodSymbol) && !symbol.IsStatic)
                {
                    _usesThis = true;
                }
            }

            public override void VisitMemberAccessExpression(MemberAccessExpressionSyntax node)
            {
                base.Visit(node.Expression);
            }

            public override void VisitParameter(ParameterSyntax node)
            {
                var name = node.Identifier.Value.ToString();

                if (!this.UsedVariablesNames.Contains(name))
                {
                    this.UsedVariablesNames.Add(name);
                }
                base.VisitParameter(node);
            }
            public override void VisitTypeParameter(TypeParameterSyntax node)
            {
                var name = node.Identifier.Value.ToString();

                if (!this.UsedVariablesNames.Contains(name))
                {
                    this.UsedVariablesNames.Add(name);
                }
                base.VisitTypeParameter(node);
            }
        }

        public static LocalUsageData GatherInfo(SemanticModel semanticModel, SyntaxNode node)
        {
            var analyzer = new Analyzer(semanticModel);
            analyzer.Analyze(node);
            return new LocalUsageData(analyzer.UsesThis, analyzer.UsedVariables, analyzer.UsedVariablesNames);
        }
    }

    public class IdentifierReplacer : CSharpSyntaxRewriter
    {
        private string name;
        private ExpressionSyntax replacer;

        public IdentifierReplacer(string name, ExpressionSyntax replacer)
        {
            this.name = name;
            this.replacer = replacer;
        }

        public ExpressionSyntax Replace(ExpressionSyntax expr)
        {
            return (ExpressionSyntax)Visit(expr);
        }

        public override SyntaxNode VisitIdentifierName(IdentifierNameSyntax syntax)
        {
            if (syntax.Identifier.Value.ToString() == name)
            {
                return this.replacer;
            }

            return syntax;
        }
    }

    public class LocalUsageData
    {
        public bool DirectlyOrIndirectlyUsesThis
        {
            get;
            private set;
        }

        public ISet<ISymbol> DirectlyOrIndirectlyUsedLocals
        {
            get;
            private set;
        }

        public IList<string> Names
        {
            get;
            private set;
        }

        public LocalUsageData(bool directlyOrIndirectlyUsesThis, ISet<ISymbol> directlyOrIndirectlyUsedVariables, IList<string> names)
        {
            DirectlyOrIndirectlyUsesThis = directlyOrIndirectlyUsesThis;
            DirectlyOrIndirectlyUsedLocals = new HashSet<ISymbol>(directlyOrIndirectlyUsedVariables);
            this.Names = new List<string>(names);
        }
    }
}