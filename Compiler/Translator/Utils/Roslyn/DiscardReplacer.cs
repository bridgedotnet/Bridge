using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;

namespace Bridge.Translator
{
    public class DiscardReplacer
    {
        private const string DISCARD_IDENTIFIER = "_";
        private const string DISCARD_VARIABLE = "_discard";
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model, Func<SyntaxNode, Tuple<SyntaxTree, SemanticModel>> updater)
        {
            var discards = root
               .DescendantNodes()
               .OfType<DiscardDesignationSyntax>();

            var outVars = root
                .DescendantNodes()
                .OfType<ArgumentSyntax>()
                .Where(arg => arg.Expression is DeclarationExpressionSyntax && arg.RefOrOutKeyword.Kind() == SyntaxKind.OutKeyword);

            var outDiscardVars = root
                .DescendantNodes()
                .OfType<ArgumentSyntax>()
                .Where(arg => {
                    if (arg.Expression is IdentifierNameSyntax ins && ins.Identifier.ValueText == DISCARD_IDENTIFIER/* && arg.RefOrOutKeyword.Kind() == SyntaxKind.OutKeyword*/)
                    {
                        var si = model.GetSymbolInfo(arg.Expression);
                        return si.Symbol == null || si.Symbol.Kind == SymbolKind.Discard;
                    }

                    return false;
                 });

            var discardAssigments = root
                .DescendantNodes()
                .OfType<AssignmentExpressionSyntax>()
                .Where(assignment => {
                    if (assignment.Left is IdentifierNameSyntax ins && ins.Identifier.ValueText == DISCARD_IDENTIFIER)
                    {
                        var si = model.GetSymbolInfo(assignment.Left);
                        return si.Symbol == null || si.Symbol.Kind == SymbolKind.Discard;
                    }

                    return false;
                });

            var updatedStatements = new Dictionary<StatementSyntax, List<LocalDeclarationStatementSyntax>>();
            var updatedDiscards = new Dictionary<DiscardDesignationSyntax, string>();
            var updatedDiscardVars = new Dictionary<ArgumentSyntax, string>();

            var tempIndex = 0;

            foreach (var discard in discards)
            {
                try
                {
                    var noLocal = false;
                    var parentTuple = discard.GetParent<TupleExpressionSyntax>();
                    if (parentTuple != null && parentTuple.Parent is AssignmentExpressionSyntax ae && ae.Left == parentTuple)
                    {
                        noLocal = true;
                    }

                    var typeInfo = model.GetTypeInfo(discard.Parent);
                    var beforeStatement = discard.Ancestors().OfType<StatementSyntax>().FirstOrDefault();

                    if (beforeStatement != null)
                    {
                        if (typeInfo.Type != null)
                        {
                            string instance = DISCARD_VARIABLE + ++tempIndex;
                            if (beforeStatement.Parent != null)
                            {
                                var info = LocalUsageGatherer.GatherInfo(model, beforeStatement.Parent);

                                while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                                {
                                    instance = DISCARD_VARIABLE + ++tempIndex;
                                }
                            }

                            if (!noLocal)
                            {
                                var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();
                                var varDecl = SyntaxFactory.VariableDeclaration(SyntaxHelper.GenerateTypeSyntax(typeInfo.Type, model, discard.Parent.GetLocation().SourceSpan.Start)).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                    SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(instance))
                                ));

                                var local = SyntaxFactory.LocalDeclarationStatement(varDecl).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n"));
                                locals.Add(local);

                                updatedStatements[beforeStatement] = locals;
                            }                            

                            updatedDiscards[discard] = instance;
                        }
                        else if (discard.Parent is DeclarationPatternSyntax && !(discard.Parent.Parent is IsPatternExpressionSyntax))
                        {
                            string instance = DISCARD_VARIABLE + ++tempIndex;
                            if (beforeStatement.Parent != null)
                            {
                                var info = LocalUsageGatherer.GatherInfo(model, beforeStatement.Parent);

                                while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                                {
                                    instance = DISCARD_VARIABLE + ++tempIndex;
                                }
                            }

                            updatedDiscards[discard] = instance;
                        }
                    }
                }
                catch (Exception e)
                {
                    throw new ReplacerException(discard, e);
                }
            }

            foreach (var discardVar in outDiscardVars)
            {
                try
                {
                    var typeInfo = model.GetTypeInfo(discardVar.Expression);

                    if (typeInfo.Type != null)
                    {
                        var beforeStatement = discardVar.Ancestors().OfType<StatementSyntax>().FirstOrDefault();
                        if (beforeStatement != null)
                        {
                            string instance = DISCARD_VARIABLE + ++tempIndex;
                            if (beforeStatement.Parent != null)
                            {
                                var info = LocalUsageGatherer.GatherInfo(model, beforeStatement.Parent);

                                while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                                {
                                    instance = DISCARD_VARIABLE + ++tempIndex;
                                }
                            }

                            var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();
                            var varDecl = SyntaxFactory.VariableDeclaration(SyntaxHelper.GenerateTypeSyntax(typeInfo.Type, model, discardVar.Expression.GetLocation().SourceSpan.Start)).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(instance))
                            ));

                            var local = SyntaxFactory.LocalDeclarationStatement(varDecl).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n"));
                            locals.Add(local);

                            updatedStatements[beforeStatement] = locals;
                            updatedDiscardVars[discardVar] = instance;
                        }
                    }
                }
                catch (Exception e)
                {
                    throw new ReplacerException(discardVar, e);
                }
            }

            foreach (var outVar in outVars)
            {
                try
                {
                    if (((DeclarationExpressionSyntax)outVar.Expression).Designation.Kind() == SyntaxKind.DiscardDesignation)
                    {
                        continue;
                    }

                    var typeInfo = model.GetTypeInfo(outVar.Expression);

                    if (typeInfo.Type != null)
                    {
                        var beforeStatement = outVar.Ancestors().OfType<StatementSyntax>().FirstOrDefault();
                        if (beforeStatement != null)
                        {
                            if (outVar.Expression is DeclarationExpressionSyntax de)
                            {
                                var designation = de.Designation as SingleVariableDesignationSyntax;

                                if (designation != null)
                                {
                                    var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();
                                    var varDecl = SyntaxFactory.VariableDeclaration(SyntaxHelper.GenerateTypeSyntax(typeInfo.Type, model, outVar.Expression.GetLocation().SourceSpan.Start)).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                        SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(designation.Identifier.ValueText))
                                    ));

                                    locals.Add(SyntaxFactory.LocalDeclarationStatement(varDecl).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n")));

                                    updatedStatements[beforeStatement] = locals;
                                }
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    throw new ReplacerException(outVar, e);
                }
            }

            var annotatedStatemnts = new Dictionary<SyntaxAnnotation, List<LocalDeclarationStatementSyntax>>();
            var annotatedDiscards = new Dictionary<SyntaxAnnotation, string>();
            var annotatedDiscardVars = new Dictionary<SyntaxAnnotation, string>();
            var annotatedAssigments = new List<SyntaxAnnotation>();

            var keys = updatedStatements.Keys.Cast<SyntaxNode>()
                            .Concat(updatedDiscards.Keys.Cast<SyntaxNode>())
                            .Concat(updatedDiscardVars.Keys.Cast<SyntaxNode>())
                            .Concat(discardAssigments);

            root = root.ReplaceNodes(keys, (n1, n2) =>
            {
                var annotation = new SyntaxAnnotation();

                if (n1 is AssignmentExpressionSyntax)
                {
                    annotatedAssigments.Add(annotation);
                }
                else if (n1 is DiscardDesignationSyntax)
                {
                    annotatedDiscards[annotation] = updatedDiscards[(DiscardDesignationSyntax)n1];
                }
                else if (n1 is ArgumentSyntax)
                {
                    annotatedDiscardVars[annotation] = updatedDiscardVars[(ArgumentSyntax)n1];
                }
                else
                {
                    annotatedStatemnts[annotation] = updatedStatements[(StatementSyntax)n1];
                }

                n2 = n2.WithAdditionalAnnotations(annotation);
                return n2;
            });

            foreach (var annotation in annotatedDiscards.Keys)
            {
                var annotatedNode = root.GetAnnotatedNodes(annotation).First();
                var name = annotatedDiscards[annotation];

                root = root.ReplaceNode(annotatedNode, SyntaxFactory.SingleVariableDesignation(SyntaxFactory.Identifier(name)).NormalizeWhitespace());
            }

            foreach (var annotation in annotatedDiscardVars.Keys)
            {
                var annotatedNode = root.GetAnnotatedNodes(annotation).First();
                var name = annotatedDiscardVars[annotation];

                root = root.ReplaceNode(annotatedNode, ((ArgumentSyntax)annotatedNode).WithExpression(SyntaxFactory.IdentifierName(name)));
            }

            foreach (var annotation in annotatedAssigments)
            {
                var annotatedNode = root.GetAnnotatedNodes(annotation).First();
                root = root.ReplaceNode(annotatedNode, ((AssignmentExpressionSyntax)annotatedNode).WithLeft(SyntaxFactory.IdentifierName("Bridge.Script.Discard")));
            }

            outVars = root
               .DescendantNodes()
               .OfType<ArgumentSyntax>()
               .Where(arg => arg.Expression is DeclarationExpressionSyntax && arg.RefOrOutKeyword.Kind() == SyntaxKind.OutKeyword);

            root = root.ReplaceNodes(outVars, (n1, n2) =>
            {
                var designation = ((DeclarationExpressionSyntax)n2.Expression).Designation as SingleVariableDesignationSyntax;

                if (designation == null)
                {
                    return n2;
                }

                return SyntaxFactory.Argument(SyntaxFactory.IdentifierName(designation.Identifier)).WithRefKindKeyword(SyntaxFactory.Token(SyntaxKind.OutKeyword)).WithRefOrOutKeyword(SyntaxFactory.Token(SyntaxKind.OutKeyword)).NormalizeWhitespace();
            });        

            foreach (var annotation in annotatedStatemnts.Keys)
            {
                var annotatedNode = root.GetAnnotatedNodes(annotation).First();
                var varStatements = annotatedStatemnts[annotation];

                if (annotatedNode.Parent is BlockSyntax || !(annotatedNode is StatementSyntax))
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

            var discardPatterns = root.DescendantNodes().OfType<IsPatternExpressionSyntax>().Where(pattern => pattern.Pattern is DeclarationPatternSyntax dp && dp.Designation.Kind() == SyntaxKind.DiscardDesignation);

            if (discardPatterns.Any())
            {
                root = root.ReplaceNodes(discardPatterns, (n1, n2) => {
                    return SyntaxFactory.LiteralExpression(SyntaxKind.TrueLiteralExpression, SyntaxFactory.Token(SyntaxKind.TrueKeyword));
                });
            }

            return root;
        }
    }
}