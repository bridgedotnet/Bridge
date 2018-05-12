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

                var info = model.GetSymbolInfo(x);
                var xSymbol = info.Symbol;

                if (xSymbol == null && info.CandidateSymbols != null && info.CandidateSymbols.Length > 0)
                {
                    xSymbol = info.CandidateSymbols[0];
                }

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
            var updatedBlocks = new Dictionary<SyntaxNode, List<StatementSyntax>>();
            var updatedClasses = new Dictionary<TypeDeclarationSyntax, List<DelegateDeclarationSyntax>>();

            foreach (var fn in localFns)
            {
                var parentNode = fn.Parent;
                var usage = GetFirstUsageLocalFunc(model, fn, parentNode);
                var beforeStatement = usage.Ancestors().OfType<StatementSyntax>().FirstOrDefault(ss => ss.Parent == parentNode);

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

                var isVoid = fn.ReturnType is PredefinedTypeSyntax ptsInstance && ptsInstance.Keyword.Kind() == SyntaxKind.VoidKeyword;

                TypeSyntax varType;

                if (customDelegate)
                {
                    var typeDecl = parentNode.Ancestors().OfType<TypeDeclarationSyntax>().FirstOrDefault();
                    var delegates = updatedClasses.ContainsKey(typeDecl) ? updatedClasses[typeDecl] : new List<DelegateDeclarationSyntax>();
                    var name = $"___{fn.Identifier.ValueText}_Delegate_{delegates.Count}";
                    var delDecl = SyntaxFactory.DelegateDeclaration(fn.ReturnType, SyntaxFactory.Identifier(name))
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
                                SyntaxFactory.TypeArgumentList(SyntaxFactory.SingletonSeparatedList(fn.ReturnType))
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
                                            new TypeSyntax[] { fn.ReturnType }
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
                    foreach (var prm in fn.ParameterList.Parameters)
                    {
                        var newPrm = prm.WithDefault(null);
                        var idx = newPrm.Modifiers.IndexOf(SyntaxKind.ParamsKeyword);

                        if (idx > -1)
                        {
                            newPrm = newPrm.WithModifiers(newPrm.Modifiers.RemoveAt(idx));
                        }

                        prms.Add(newPrm);
                    }
                }
                else
                {
                    foreach (var prm in fn.ParameterList.Parameters)
                    {
                        prms.Add(SyntaxFactory.Parameter(prm.Identifier));
                    }
                }

                var varDecl = SyntaxFactory.VariableDeclaration(varType).WithVariables(SyntaxFactory.SingletonSeparatedList(
                    SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(fn.Identifier.ValueText)).WithInitializer
                    (
                        SyntaxFactory.EqualsValueClause(SyntaxFactory.ParenthesizedLambdaExpression(fn.Body ?? (CSharpSyntaxNode)fn.ExpressionBody.Expression).WithParameterList(
                            SyntaxFactory.ParameterList(SyntaxFactory.SeparatedList(prms))
                        ))
                    )
                )).NormalizeWhitespace();


                List<StatementSyntax> statements = null;

                if (updatedBlocks.ContainsKey(parentNode))
                {
                    statements = updatedBlocks[parentNode];
                }
                else
                {
                    if (parentNode is BlockSyntax bs)
                    {
                        statements = bs.Statements.ToList();
                    }
                    else if (parentNode is SwitchSectionSyntax sss)
                    {
                        statements = sss.Statements.ToList();
                    }
                }

                statements.Remove(fn);
                statements.Insert(beforeStatement != null ? statements.IndexOf(beforeStatement) : 0, SyntaxFactory.LocalDeclarationStatement(varDecl));

                updatedBlocks[parentNode] = statements;
            }

            if (updatedClasses.Count > 0)
            {
                root = root.ReplaceNodes(updatedClasses.Keys, (t1, t2) =>
                {
                    var members = updatedClasses[t1].ToArray();

                    t1 = t1.ReplaceNodes(updatedBlocks.Keys, (b1, b2) => {
                        SyntaxNode result = b1 is SwitchSectionSyntax sss ? sss.WithStatements(SyntaxFactory.List(updatedBlocks[b1])) : (SyntaxNode)(((BlockSyntax)b1).WithStatements(SyntaxFactory.List(updatedBlocks[b1])));
                        return result;
                    });

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
                root = root.ReplaceNodes(updatedBlocks.Keys, (b1, b2) => {
                    SyntaxNode result = b1 is SwitchSectionSyntax sss ? sss.WithStatements(SyntaxFactory.List(updatedBlocks[b1])) : (SyntaxNode)(((BlockSyntax)b1).WithStatements(SyntaxFactory.List(updatedBlocks[b1])));
                    return result;
                });
            }

            return root;
        }
    }
}