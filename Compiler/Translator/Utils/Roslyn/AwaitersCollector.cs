using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System.Collections.Generic;

namespace Bridge.Translator
{
    public static class AwaitersCollector
    {
        private class Analyzer : CSharpSyntaxWalker
        {
            private readonly SemanticModel _semanticModel;
            public HashSet<AwaitExpressionSyntax> Awaiters { get; }

            public Analyzer(SemanticModel semanticModel)
            {
                _semanticModel = semanticModel;
                this.Awaiters = new HashSet<AwaitExpressionSyntax>();
            }

            public void Analyze(SyntaxNode node)
            {
                this.Awaiters.Clear();
                Visit(node);
            }

            public override void VisitAwaitExpression(AwaitExpressionSyntax node)
            {
                this.Awaiters.Add(node);
                base.VisitAwaitExpression(node);
            }
        }

        public static bool HasAwaiters(SemanticModel semanticModel, SyntaxNode node)
        {
            var analyzer = new Analyzer(semanticModel);
            analyzer.Analyze(node);
            return analyzer.Awaiters.Count > 0;
        }
    }
}