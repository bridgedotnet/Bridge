using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;

namespace Bridge.Translator
{
    public class ChainingAssigmentReplacer : ICSharpReplacer
    {
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model)
        {
            var assignments = root.DescendantNodes().OfType<AssignmentExpressionSyntax>();
            var updatedBlocks = new Dictionary<BlockSyntax, List<StatementSyntax>>();
            var locals = new List<LocalDeclarationStatementSyntax>();

            foreach (var assignment in assignments)
            {
                try
                {
                    var identifier = assignment.Left as IdentifierNameSyntax;
                    if (identifier != null)
                    {
                        var local = assignment.GetParent<LocalDeclarationStatementSyntax>();
                        if (local != null && locals.Contains(local))
                        {
                            continue;
                        }
                        locals.Add(local);

                        var name = identifier.Identifier.ValueText;

                        if (local != null && local.Declaration.Variables.Any(v => v.Identifier.ValueText == name))
                        {
                            var block = local.Ancestors().OfType<BlockSyntax>().First();

                            var statements = updatedBlocks.ContainsKey(block) ? updatedBlocks[block] : block.Statements.ToList();
                            var index = statements.IndexOf(local);

                            foreach (var variable in local.Declaration.Variables)
                            {
                                var newLocal = SyntaxFactory.LocalDeclarationStatement(SyntaxFactory.VariableDeclaration(local.Declaration.Type.WithoutTrivia(), SyntaxFactory.SingletonSeparatedList(SyntaxFactory.VariableDeclarator(variable.Identifier.ValueText)))).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n"));

                                if (local.Declaration.Variables.First().Equals(variable))
                                {
                                    newLocal = newLocal.WithLeadingTrivia(local.GetLeadingTrivia());
                                }

                                statements.Insert(index++, newLocal);

                                if (variable.Initializer != null)
                                {
                                    var equals = SyntaxFactory.ExpressionStatement(SyntaxFactory.AssignmentExpression(SyntaxKind.SimpleAssignmentExpression, SyntaxFactory.IdentifierName(variable.Identifier.ValueText), variable.Initializer.Value.WithoutTrivia())).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n"));
                                    if (local.Declaration.Variables.Last().Equals(variable))
                                    {
                                        equals = equals.WithTrailingTrivia(local.GetTrailingTrivia());
                                    }

                                    statements.Insert(index++, equals);
                                }
                            }

                            statements.Remove(local);

                            updatedBlocks[block] = statements;
                        }
                    }
                }
                catch (Exception e)
                {

                    throw new ReplacerException(assignment, e);
                }
            }

            if (updatedBlocks.Count > 0)
            {
                root = root.ReplaceNodes(updatedBlocks.Keys, (b1, b2) => b1.WithStatements(SyntaxFactory.List<StatementSyntax>(updatedBlocks[b1])));
            }

            return root;
        }
    }
}