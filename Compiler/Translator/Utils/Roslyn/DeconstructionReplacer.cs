using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using Microsoft.CodeAnalysis.CSharp;
using System.Collections.Immutable;

namespace Bridge.Translator
{
    public class DeconstructionReplacer
    {
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model, Func<SyntaxNode, Tuple<SyntaxTree, SemanticModel>> updater)
        {
            root = InsertVariables(root, model);
            var tuple = updater(root);
            root = tuple.Item1.GetRoot();
            model = tuple.Item2;

            root = ReplaceDeconstructions(root, model);
            tuple = updater(root);
            root = tuple.Item1.GetRoot();
            model = tuple.Item2;

            root = ReplaceForeachDeconstructions(root, model);

            return root;
        }

        public SyntaxNode InsertVariables(SyntaxNode root, SemanticModel model)
        {
            var tuples = root
                .DescendantNodes()
                .OfType<TupleExpressionSyntax>()
                .Where(e => e.Parent is AssignmentExpressionSyntax ae && ae.Left == e || e.Parent is ForEachVariableStatementSyntax fe && fe.Variable == e);

            var updatedStatements = new Dictionary<StatementSyntax, List<LocalDeclarationStatementSyntax>>();

            foreach (var tuple in tuples)
            {
                var beforeStatement = tuple.Ancestors().OfType<StatementSyntax>().FirstOrDefault();
                if (beforeStatement != null)
                {
                    foreach (var arg in tuple.Arguments)
                    {
                        if (arg.Expression is DeclarationExpressionSyntax de)
                        {
                            var designation = de.Designation as SingleVariableDesignationSyntax;

                            if (designation != null)
                            {
                                var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();
                                var typeInfo = model.GetTypeInfo(de).Type;
                                var varDecl = SyntaxFactory.VariableDeclaration(SyntaxHelper.GenerateTypeSyntax(typeInfo)).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                    SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(designation.Identifier.ValueText))
                                ));

                                locals.Add(SyntaxFactory.LocalDeclarationStatement(varDecl).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n")));

                                updatedStatements[beforeStatement] = locals;
                            }
                        }
                    }
                }
            }

            var parenthesized = root
                .DescendantNodes()
                .OfType<ParenthesizedVariableDesignationSyntax>()
                .Where(e => e.Parent is DeclarationExpressionSyntax && e.Parent.Parent is AssignmentExpressionSyntax ae && ae.Left == e.Parent ||
                 e.Parent is DeclarationExpressionSyntax && e.Parent.Parent is ForEachVariableStatementSyntax fe && fe.Variable == e.Parent);

            foreach (var p in parenthesized)
            {
                var beforeStatement = p.Ancestors().OfType<StatementSyntax>().FirstOrDefault();
                var declaration = (DeclarationExpressionSyntax)p.Parent;
                if (beforeStatement != null)
                {
                    var typeInfo = model.GetTypeInfo(declaration).Type;
                    List<TypeSyntax> types = new List<TypeSyntax>();
                    if (typeInfo.IsTupleType)
                    {
                        var elements = ((INamedTypeSymbol)typeInfo).TupleElements;
                        foreach (var el in elements)
                        {
                            types.Add(SyntaxHelper.GenerateTypeSyntax(el.Type));
                        }
                    }
                    else
                    {
                        continue;
                    }

                    int idx = 0;
                    foreach (var v in p.Variables)
                    {
                        var designation = v as SingleVariableDesignationSyntax;

                        if (designation != null)
                        {
                            var locals = updatedStatements.ContainsKey(beforeStatement) ? updatedStatements[beforeStatement] : new List<LocalDeclarationStatementSyntax>();
                            
                            var varDecl = SyntaxFactory.VariableDeclaration(types[idx++]).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                SyntaxFactory.VariableDeclarator(SyntaxFactory.Identifier(designation.Identifier.ValueText))
                            ));

                            locals.Add(SyntaxFactory.LocalDeclarationStatement(varDecl).NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n")));

                            updatedStatements[beforeStatement] = locals;
                        }
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

                if(annotatedNode is ForEachVariableStatementSyntax fe)
                {
                    varStatements[varStatements.Count - 1] = varStatements.Last().WithAdditionalAnnotations(new SyntaxAnnotation("last_variable"));
                    var list = new List<StatementSyntax>(varStatements);

                    if (fe.Statement is BlockSyntax b)
                    {
                        list.AddRange(b.Statements);
                    }
                    else{
                        list.Add(fe.Statement);
                    }                   

                    root = root.ReplaceNode(annotatedNode, fe.WithStatement(SyntaxFactory.Block(list)).NormalizeWhitespace());
                }
                else if (annotatedNode.Parent is BlockSyntax || !(annotatedNode is StatementSyntax))
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

        public SyntaxNode ReplaceForeachDeconstructions(SyntaxNode root, SemanticModel model)
        {
            var loops = root
               .DescendantNodes()
               .OfType<ForEachVariableStatementSyntax>()
               .Where(forEach => forEach.Variable is TupleExpressionSyntax || forEach.Variable is DeclarationExpressionSyntax de && de.Designation is ParenthesizedVariableDesignationSyntax);

            if (loops.Any())
            {
                Dictionary<ForEachVariableStatementSyntax, DeconstructionInfo> infos = new Dictionary<ForEachVariableStatementSyntax, DeconstructionInfo>();

                foreach (var loop in loops)
                {
                    var deconstructionInfo = model.GetDeconstructionInfo(loop);
                    infos.Add(loop, deconstructionInfo);
                }

                var tempIndex = 0;
                root = root.ReplaceNodes(loops, (n1, n2) => {
                    var variable = n2.Variable;
                    
                    string instance = "_d" + ++tempIndex;
                    if (n1.Parent != null)
                    {
                        var info = LocalUsageGatherer.GatherInfo(model, n1.Parent);

                        while (info.DirectlyOrIndirectlyUsedLocals.Any(s => s.Name == instance) || info.Names.Contains(instance))
                        {
                            instance = "_d" + ++tempIndex;
                        }
                    }

                    var newloop = SyntaxFactory.ForEachStatement(SyntaxFactory.IdentifierName("var"), SyntaxFactory.Identifier(instance), n2.Expression, n2.Statement)
                        .WithLeadingTrivia(n2.GetLeadingTrivia())
                        .WithTrailingTrivia(n2.GetTrailingTrivia());

                    var deconstructionInfo = infos[n1];
                    var invocation = DeconstructionToMethod(variable, SyntaxFactory.IdentifierName(instance), deconstructionInfo);

                    if (newloop.Statement is BlockSyntax b)
                    {
                        foreach (var statement in b.Statements)
                        {
                            if (statement.ContainsAnnotations)
                            {
                                var annotaions = statement.GetAnnotations("last_variable");
                                if (annotaions != null && annotaions.Any())
                                {
                                    newloop = newloop.InsertNodesAfter(statement, new[] { SyntaxFactory.ExpressionStatement(invocation) });
                                    break;
                                }
                            }
                        }
                    }

                    return newloop.NormalizeWhitespace().WithTrailingTrivia(SyntaxFactory.Whitespace("\n"));
                });
            }

            return root;
        }

        public SyntaxNode ReplaceDeconstructions(SyntaxNode root, SemanticModel model)
        {
            var assignments = root
                .DescendantNodes()
                .OfType<AssignmentExpressionSyntax>()
                .Where(ae => ae.Left is TupleExpressionSyntax || ae.Left is DeclarationExpressionSyntax de && de.Designation is ParenthesizedVariableDesignationSyntax);

            Dictionary<AssignmentExpressionSyntax, DeconstructionInfo> infos = new Dictionary<AssignmentExpressionSyntax, DeconstructionInfo>();
            List<AssignmentExpressionSyntax> nodes = new List<AssignmentExpressionSyntax>();

            foreach (var assignment in assignments)
            {
                var deconstructionInfo = model.GetDeconstructionInfo(assignment);
                infos.Add(assignment, deconstructionInfo);
                nodes.Add(assignment);
            }

            if (nodes.Count > 0)
            {
                root = root.ReplaceNodes(nodes, (n1, n2) =>
                {
                    var assignment = n2;
                    var deconstructionInfo = infos[n1];

                    
                    var tuple = assignment.Left;
                    var obj = assignment.Right;

                    return DeconstructionToMethod(tuple, obj, deconstructionInfo);
                });
            }

            return root;
        }

        private ExpressionSyntax DeconstructionToMethod(ExpressionSyntax tuple, ExpressionSyntax obj, DeconstructionInfo deconstructionInfo)
        {
            List<ArgumentSyntax> arguments = new List<ArgumentSyntax>();

            if (tuple is TupleExpressionSyntax te)
            {
                foreach (var arg in te.Arguments)
                {
                    if (arg.Expression is DeclarationExpressionSyntax de)
                    {
                        if (de.Designation is SingleVariableDesignationSyntax sv)
                        {
                            arguments.Add(SyntaxFactory.Argument(SyntaxFactory.IdentifierName(sv.Identifier)).WithRefKindKeyword(SyntaxFactory.Token(SyntaxKind.OutKeyword)).WithRefOrOutKeyword(
                                                    SyntaxFactory.Token(SyntaxKind.OutKeyword)));
                        }
                    }
                    else
                    {
                        arguments.Add(arg.WithRefKindKeyword(SyntaxFactory.Token(SyntaxKind.OutKeyword)).WithRefOrOutKeyword(
                                                    SyntaxFactory.Token(SyntaxKind.OutKeyword)));
                    }
                }
            }
            else
            {
                var variables = ((ParenthesizedVariableDesignationSyntax)((DeclarationExpressionSyntax)tuple).Designation).Variables;
                foreach (var variable in variables)
                {
                    if (variable is SingleVariableDesignationSyntax sv)
                    {
                        arguments.Add(SyntaxFactory.Argument(SyntaxFactory.IdentifierName(sv.Identifier)).WithRefKindKeyword(SyntaxFactory.Token(SyntaxKind.OutKeyword)).WithRefOrOutKeyword(
                                                    SyntaxFactory.Token(SyntaxKind.OutKeyword)));
                    }
                }
            }

            if (deconstructionInfo.Method != null)
            {
                if (deconstructionInfo.Method.IsExtensionMethod)
                {
                    arguments.Insert(0, SyntaxFactory.Argument(obj));
                    return SyntaxHelper.GenerateInvocation(deconstructionInfo.Method.Name, deconstructionInfo.Method.ContainingType.FullyQualifiedName(), arguments.ToArray()).NormalizeWhitespace();
                }
                else
                {
                    return SyntaxHelper.GenerateInvocation(deconstructionInfo.Method.Name, obj, arguments.ToArray()).NormalizeWhitespace();
                }
            }
            else
            {
                arguments.Insert(0, SyntaxFactory.Argument(obj));
                return SyntaxHelper.GenerateInvocation("Deconstruct", "Bridge.Script", arguments.ToArray()).NormalizeWhitespace();
            }
        }
    }
}