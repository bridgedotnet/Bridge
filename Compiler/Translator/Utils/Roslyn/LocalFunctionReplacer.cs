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
    public class LocalFunctionReplacer : ICSharpReplacer
    {
        private static SyntaxNode GetFirstUsageLocalFunc(SemanticModel model, LocalFunctionStatementSyntax node, SyntaxNode root)
        {
            var symbol = model.GetSymbolInfo(node).Symbol ?? model.GetDeclaredSymbol(node);

            return root.DescendantNodes(x => x != node).OfType<IdentifierNameSyntax>().Where(x =>
            {
                if (x.Identifier.ValueText != node.Identifier.ValueText)
                {
                    return false;
                }

                var xSymbol = model.GetSymbolInfo(x).Symbol;
                if (xSymbol == null || !symbol.Equals(xSymbol))
                {
                    return false;
                }

                return true;
            }).FirstOrDefault();
        }

        public SyntaxNode Replace(SyntaxNode root, SemanticModel model)
        {
            var localFns = root.DescendantNodes().OfType<LocalFunctionStatementSyntax>();
            var updatedBlocks = new Dictionary<BlockSyntax, List<StatementSyntax>>();
            var initForBlocks = new Dictionary<BlockSyntax, List<StatementSyntax>>();
            var updatedClasses = new Dictionary<TypeDeclarationSyntax, List<DelegateDeclarationSyntax>>();

            foreach (var fn in localFns)
            {
                var block = fn.Ancestors().OfType<BlockSyntax>().First();
                var usage = GetFirstUsageLocalFunc(model, fn, block);
                var beforeStatement = usage?.Ancestors().OfType<StatementSyntax>().FirstOrDefault(ss => ss.Parent == block);

                if (beforeStatement is LocalFunctionStatementSyntax beforeFn)
                {
                    usage = GetFirstUsageLocalFunc(model, beforeFn, block);
                    beforeStatement = usage?.Ancestors().OfType<StatementSyntax>().FirstOrDefault(ss => ss.Parent == block);
                }

                var customDelegate = false;

                if (fn.TypeParameterList != null && fn.TypeParameterList.Parameters.Count > 0)
                {
                    customDelegate = true;
                }
                else
                {
                    foreach (var prm in fn.ParameterList.Parameters)
                    {
                        if (prm.Default != null)
                        {
                            customDelegate = true;
                            break;
                        }

                        foreach (var modifier in prm.Modifiers)
                        {
                            var kind = modifier.Kind();
                            if (kind == SyntaxKind.RefKeyword ||
                                kind == SyntaxKind.OutKeyword ||
                                kind == SyntaxKind.ParamsKeyword)
                            {
                                customDelegate = true;
                                break;
                            }
                        }

                        if (customDelegate)
                        {
                            break;
                        }
                    }
                }

                var returnType = fn.ReturnType.WithoutLeadingTrivia().WithoutTrailingTrivia();
                var isVoid = returnType is PredefinedTypeSyntax ptsInstance && ptsInstance.Keyword.Kind() == SyntaxKind.VoidKeyword;

                TypeSyntax varType;

                if (customDelegate)
                {
                    var typeDecl = block.Ancestors().OfType<TypeDeclarationSyntax>().FirstOrDefault();
                    var delegates = updatedClasses.ContainsKey(typeDecl) ? updatedClasses[typeDecl] : new List<DelegateDeclarationSyntax>();
                    var name = $"___{fn.Identifier.ValueText}_Delegate_{delegates.Count}";
                    var delDecl = SyntaxFactory.DelegateDeclaration(returnType, SyntaxFactory.Identifier(name))
                        .WithModifiers(SyntaxFactory.TokenList(SyntaxFactory.Token(SyntaxKind.PrivateKeyword)))
                        .WithParameterList(fn.ParameterList).NormalizeWhitespace();
                    delegates.Add(delDecl);
                    updatedClasses[typeDecl] = delegates;

                    varType = SyntaxFactory.IdentifierName(name);
                }
                else if (isVoid)
                {
                    if (fn.ParameterList.Parameters.Count == 0)
                    {
                        varType = SyntaxFactory.QualifiedName(SyntaxFactory.IdentifierName("System"), SyntaxFactory.IdentifierName("Action"));
                    }
                    else
                    {
                        varType = SyntaxFactory.QualifiedName
                        (
                            SyntaxFactory.IdentifierName("System"),
                            SyntaxFactory.GenericName("Action").WithTypeArgumentList
                            (
                                SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(fn.ParameterList.Parameters.Select(p => p.Type)))
                            )
                        );
                    }
                }
                else
                {
                    if (fn.ParameterList.Parameters.Count == 0)
                    {
                        varType = SyntaxFactory.QualifiedName(
                            SyntaxFactory.IdentifierName("System"),
                            SyntaxFactory.GenericName("Func").WithTypeArgumentList(
                                SyntaxFactory.TypeArgumentList(SyntaxFactory.SingletonSeparatedList(returnType))
                            )
                        );
                    }
                    else
                    {
                        varType = SyntaxFactory.QualifiedName
                        (
                            SyntaxFactory.IdentifierName("System"),
                            SyntaxFactory.GenericName("Func").WithTypeArgumentList
                            (
                                SyntaxFactory.TypeArgumentList(
                                    SyntaxFactory.SeparatedList(
                                        fn.ParameterList.Parameters.Select(p => p.Type).Concat(
                                            new TypeSyntax[] { returnType }
                                        )
                                    )
                                )
                            )
                        );
                    }
                }

                List<ParameterSyntax> prms = new List<ParameterSyntax>();

                if (customDelegate)
                {
                    prms = fn.ParameterList.Parameters.ToList();
                }
                else
                {
                    foreach (var prm in fn.ParameterList.Parameters)
                    {
                        prms.Add(SyntaxFactory.Parameter(prm.Identifier));
                    }
                }

                var initVar = SyntaxFactory.LocalDeclarationStatement(SyntaxFactory.VariableDeclaration(varType).WithVariables(
                    SyntaxFactory.SingletonSeparatedList(
                        SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(fn.Identifier.ValueText)).WithInitializer
                        (
                            SyntaxFactory.EqualsValueClause(SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression))
                        )
                    )
                )).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace(Emitter.NEW_LINE));

                var assignment = SyntaxFactory.ExpressionStatement(SyntaxFactory.AssignmentExpression(SyntaxKind.SimpleAssignmentExpression, 
                    SyntaxFactory.IdentifierName(fn.Identifier.ValueText),
                    SyntaxFactory.ParenthesizedLambdaExpression(fn.Body ?? (CSharpSyntaxNode)fn.ExpressionBody.Expression).WithParameterList(
                        SyntaxFactory.ParameterList(SyntaxFactory.SeparatedList(prms))
                    )
                )).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace(Emitter.NEW_LINE));

                var statements = updatedBlocks.ContainsKey(block) ? updatedBlocks[block] : block.Statements.ToList();
                var fnIdx = statements.IndexOf(fn);
                statements.Insert(beforeStatement != null ? statements.IndexOf(beforeStatement) : Math.Max(0, fnIdx), assignment);
                updatedBlocks[block] = statements;

                statements = initForBlocks.ContainsKey(block) ? initForBlocks[block] : new List<StatementSyntax>();
                statements.Insert(0, initVar);
                initForBlocks[block] = statements;
            }

            foreach (var key in initForBlocks.Keys)
            {
                updatedBlocks[key] = initForBlocks[key].Concat(updatedBlocks[key]).ToList();
            }

            if (updatedClasses.Count > 0)
            {
                root = root.ReplaceNodes(updatedClasses.Keys, (t1, t2) =>
                {
                    var members = updatedClasses[t1].ToArray();
                    t1 = t1.ReplaceNodes(updatedBlocks.Keys, (b1, b2) => b1.WithStatements(SyntaxFactory.List(updatedBlocks[b1])));

                    var cls = t1 as ClassDeclarationSyntax;
                    if (cls != null)
                    {
                        return cls.AddMembers(members);
                    }

                    var structDecl = t2 as StructDeclarationSyntax;
                    if (structDecl != null)
                    {
                        return structDecl.AddMembers(members);
                    }

                    return t1;
                });
            }
            else if (updatedBlocks.Count > 0)
            {
                root = root.ReplaceNodes(updatedBlocks.Keys, (b1, b2) => b1.WithStatements(SyntaxFactory.List(updatedBlocks[b1])));
            }

            root = root.RemoveNodes(root.DescendantNodes().OfType<LocalFunctionStatementSyntax>(), SyntaxRemoveOptions.KeepTrailingTrivia | SyntaxRemoveOptions.KeepLeadingTrivia);

            return root;
        }
    }
}