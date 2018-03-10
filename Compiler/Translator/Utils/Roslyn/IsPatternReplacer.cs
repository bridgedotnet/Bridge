﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;

namespace Bridge.Translator
{
    public class IsPatternReplacer : ICSharpReplacer
    {
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model)
        {
            root = InsertVariables(root, model);
            return ReplacePatterns(root, model);
        }

        public SyntaxNode InsertVariables(SyntaxNode root, SemanticModel model)
        {
            var patterns = root
                .DescendantNodes()
                .OfType<IsPatternExpressionSyntax>();

            var updatedStatements = new Dictionary<StatementSyntax, List<LocalDeclarationStatementSyntax>>();

            foreach (var pattern in patterns)
            {
                var beforeStatement = pattern.Ancestors().OfType<StatementSyntax>().FirstOrDefault();
                if (beforeStatement != null && pattern.Pattern is DeclarationPatternSyntax)
                {
                    var declarationPattern = (DeclarationPatternSyntax)pattern.Pattern;
                    var designation = declarationPattern.Designation as SingleVariableDesignationSyntax;

                    if (designation != null)
                    {
                        var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();

                        var varDecl = SyntaxFactory.VariableDeclaration(declarationPattern.Type).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                            SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(designation.Identifier.ValueText))
                        ));

                        locals.Add(SyntaxFactory.LocalDeclarationStatement(varDecl).WithTrailingTrivia(SyntaxFactory.Whitespace("\n")).NormalizeWhitespace());

                        updatedStatements[beforeStatement] = locals;
                    }
                }
            }

            var annotated = new Dictionary<SyntaxAnnotation, List<LocalDeclarationStatementSyntax>>();
            root = root.ReplaceNodes(updatedStatements.Keys, (n1, n2) =>
            {
                var annotation = new SyntaxAnnotation();
                annotated[annotation] = updatedStatements[n1];

                n2 = n2.WithAdditionalAnnotations(annotation);
                return n2;
            });

            foreach (var annotation in annotated.Keys)
            {
                var annotatedNode = root.GetAnnotatedNodes(annotation).First();
                var varStatements = annotated[annotation];

                if(annotatedNode.Parent is BlockSyntax || !(annotatedNode is StatementSyntax))
                {
                    root = root.InsertNodesBefore(annotatedNode, varStatements);
                }
                else
                {
                    var list = new List<StatementSyntax>(varStatements);
                    list.Add((StatementSyntax)annotatedNode);
                    root = root.ReplaceNode(annotatedNode, SyntaxFactory.Block(list).NormalizeWhitespace());
                }
                
            }

            return root;
        }

        public SyntaxNode ReplacePatterns(SyntaxNode root, SemanticModel model)
        {
            var patterns = root.DescendantNodes().OfType<IsPatternExpressionSyntax>();
            var updatedPatterns = new Dictionary<IsPatternExpressionSyntax, BinaryExpressionSyntax>();

            foreach (var pattern in patterns)
            {
                var block = pattern.Ancestors().OfType<BlockSyntax>().FirstOrDefault();
                if (block != null && pattern.Pattern is DeclarationPatternSyntax)
                {
                    var declarationPattern = (DeclarationPatternSyntax)pattern.Pattern;
                    var designation = declarationPattern.Designation as SingleVariableDesignationSyntax;
                    var beforeStatement = pattern.Ancestors().OfType<StatementSyntax>().FirstOrDefault(ss => ss.Parent == block);

                    if (designation != null)
                    {
                        var newExpr = SyntaxFactory.BinaryExpression(SyntaxKind.NotEqualsExpression, SyntaxFactory.ParenthesizedExpression(SyntaxFactory.AssignmentExpression(
                            SyntaxKind.SimpleAssignmentExpression,
                            SyntaxFactory.IdentifierName(designation.Identifier.ValueText),
                            SyntaxFactory.BinaryExpression(SyntaxKind.AsExpression, pattern.Expression, declarationPattern.Type)
                        )), SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression));
                        updatedPatterns[pattern] = newExpr.NormalizeWhitespace();
                    }
                }
            }

            if (updatedPatterns.Count > 0)
            {
                root = root.ReplaceNodes(updatedPatterns.Keys, (b1, b2) => updatedPatterns[b1]);
            }

            return root;
        }
    }
}