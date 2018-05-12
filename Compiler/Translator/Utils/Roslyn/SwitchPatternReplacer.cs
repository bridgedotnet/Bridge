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
    public class SwitchPatternReplacer : ICSharpReplacer
    {
        public SyntaxNode Replace(SyntaxNode root, SemanticModel model)
        {
            var switches = root.DescendantNodes().OfType<SwitchStatementSyntax>().Where(sw => {
                return sw.Sections.Any(s => s.Labels.Any(l => l is CasePatternSwitchLabelSyntax));
            });

            var tempKey = 0;
            root = root.ReplaceNodes(switches, (s1, sw) =>
            {
                var ifNodes = new List<IfStatementSyntax>();
                BlockSyntax defaultBlock = null;
                var isComplex = IsExpressionComplexEnoughToGetATemporaryVariable.IsComplex(model, s1.Expression);
                var switchExpression = sw.Expression;
                StatementSyntax switchConditionVariable = null;

                var iType = model.GetTypeInfo(s1.Expression).Type;
                var expressionType = SyntaxFactory.ParseTypeName(iType.ToMinimalDisplayString(model, s1.Expression.GetLocation().SourceSpan.Start));

                if (isComplex)
                {
                    var key = tempKey++;
                    var keyArg = SyntaxFactory.LiteralExpression(SyntaxKind.StringLiteralExpression, SyntaxFactory.Literal("case_pattern" + key));
                    var methodIdentifier = SyntaxFactory.IdentifierName("global::Bridge.Script.ToTemp");

                    var toTemp = SyntaxFactory.InvocationExpression(methodIdentifier,
                        SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(keyArg), SyntaxFactory.Argument(switchExpression) })));

                    switchConditionVariable = SyntaxFactory.ExpressionStatement(toTemp).NormalizeWhitespace();                    

                    var parentMethodIdentifier = SyntaxFactory.GenericName(SyntaxFactory.Identifier("global::Bridge.Script.FromTemp"),
                                                                 SyntaxFactory.TypeArgumentList(SyntaxFactory.SeparatedList(new[] { expressionType })));
                    switchExpression = SyntaxFactory.InvocationExpression(parentMethodIdentifier,
                        SyntaxFactory.ArgumentList(SyntaxFactory.SeparatedList(new[] { SyntaxFactory.Argument(keyArg) })));
                }

                foreach (var section in sw.Sections)
                {
                    var tuple = CollectCondition(switchExpression, section.Labels, expressionType);
                    var condition = tuple.Item1;
                    var variables = tuple.Item2;
                    var whens = tuple.Item3;

                    var body = SyntaxFactory.Block();
                    var whenBody = SyntaxFactory.Block();

                    foreach (var variable in variables)
                    {
                        body = body.WithStatements(body.Statements.Add(SyntaxFactory.LocalDeclarationStatement(variable)));
                    }

                    foreach (var statement in section.Statements)
                    {
                        if (whens.Count > 0)
                        {
                            whenBody = whenBody.WithStatements(whenBody.Statements.Add(statement));
                        }
                        else
                        {
                            body = body.WithStatements(body.Statements.Add(statement));
                        }
                    }

                    if (whens.Count > 0)
                    {
                        ExpressionSyntax whenCondition = whens[0];
                        for (int i = 1; i < whens.Count; ++i)
                        {
                            whenCondition = SyntaxFactory.BinaryExpression(SyntaxKind.LogicalOrExpression, whenCondition, whens[i]);
                        }

                        body = body.WithStatements(body.Statements.Add(SyntaxFactory.IfStatement(whenCondition, whenBody)));
                    }

                    if (condition == null)
                    {
                        defaultBlock = body
                            .WithLeadingTrivia(section.GetLeadingTrivia())
                            .WithTrailingTrivia(section.GetTrailingTrivia());
                        break;
                    }

                    ifNodes.Add(SyntaxFactory.IfStatement(condition, body).WithLeadingTrivia(section.GetLeadingTrivia()));
                }

                var doBlock = SyntaxFactory.Block();
                if (switchConditionVariable != null)
                {
                    doBlock = doBlock.WithStatements(doBlock.Statements.Add(switchConditionVariable));
                }

                doBlock = doBlock.WithStatements(doBlock.Statements.AddRange(ifNodes));

                if (defaultBlock != null)
                {
                    doBlock = doBlock.WithStatements(doBlock.Statements.Add(defaultBlock));
                }

                var doStatement = SyntaxFactory.DoStatement(doBlock, SyntaxFactory.LiteralExpression(SyntaxKind.FalseLiteralExpression));

                doStatement = doStatement.WithLeadingTrivia(sw.GetLeadingTrivia().Concat(doStatement.GetLeadingTrivia())).WithTrailingTrivia(sw.GetTrailingTrivia());
                return doStatement.NormalizeWhitespace();
            });

            return root;
        }

        Tuple<ExpressionSyntax, List<VariableDeclarationSyntax>, List<ExpressionSyntax>> CollectCondition(ExpressionSyntax expressionSyntax, SyntaxList<SwitchLabelSyntax> labels, TypeSyntax keyType)
        {
            var conditionList = new List<ExpressionSyntax>();
            var variables = new List<VariableDeclarationSyntax>();
            var whens = new List<ExpressionSyntax>();

            if (labels.Count == 0 || labels.OfType<DefaultSwitchLabelSyntax>().Any())
            {
                return new Tuple<ExpressionSyntax, List<VariableDeclarationSyntax>, List<ExpressionSyntax>>(null, variables, whens);
            }

            var patternsCount = labels.Count(l => l is CasePatternSwitchLabelSyntax);

            foreach (var item in labels)
            {
                if (item is CaseSwitchLabelSyntax)
                {
                    var label = (CaseSwitchLabelSyntax)item;
                    conditionList.Add(SyntaxFactory.BinaryExpression(SyntaxKind.EqualsExpression, expressionSyntax, label.Value));
                }
                else if (item is CasePatternSwitchLabelSyntax)
                {
                    var label = (CasePatternSwitchLabelSyntax)item;
                    string varName = null;
                    if (label.Pattern is DeclarationPatternSyntax)
                    {
                        var declarationPattern = (DeclarationPatternSyntax)label.Pattern;
                        var designation = declarationPattern.Designation as SingleVariableDesignationSyntax;

                        if (designation != null)
                        {
                            var declarationType = declarationPattern.Type;

                            if (declarationType.IsVar)
                            {
                                declarationType = keyType;
                            }

                            var varDecl = SyntaxFactory.VariableDeclaration(SyntaxFactory.IdentifierName("var")).WithVariables(SyntaxFactory.SingletonSeparatedList<VariableDeclaratorSyntax>(
                                SyntaxFactory.VariableDeclarator(
                                    SyntaxFactory.Identifier(designation.Identifier.ValueText)                                    
                                ).WithInitializer(SyntaxFactory.EqualsValueClause(patternsCount > 1 ? (ExpressionSyntax)SyntaxFactory.BinaryExpression(SyntaxKind.AsExpression, expressionSyntax, declarationType) : SyntaxFactory.CastExpression(declarationType, expressionSyntax)))
                            )).WithTrailingTrivia(SyntaxFactory.Whitespace("\n")).NormalizeWhitespace();
                            varName = designation.Identifier.ValueText;
                            variables.Add(varDecl);

                            conditionList.Add(SyntaxFactory.BinaryExpression(SyntaxKind.IsExpression, expressionSyntax, declarationType));
                        }
                    }
                    else if (label.Pattern is ConstantPatternSyntax)
                    {
                        var constPattern = (ConstantPatternSyntax)label.Pattern;
                        conditionList.Add(SyntaxFactory.BinaryExpression(SyntaxKind.EqualsExpression, expressionSyntax, constPattern.Expression));
                    }

                    if (label.WhenClause != null)
                    {
                        var c = label.WhenClause.Condition;
                        if (patternsCount > 1 && NeedsParentheses(c))
                        {
                            c = SyntaxFactory.ParenthesizedExpression(c);
                        }

                        if (varName != null && patternsCount > 1)
                        {
                            whens.Add(SyntaxFactory.BinaryExpression(SyntaxKind.LogicalAndExpression, SyntaxFactory.BinaryExpression(SyntaxKind.NotEqualsExpression, SyntaxFactory.IdentifierName(varName), SyntaxFactory.LiteralExpression(SyntaxKind.NullLiteralExpression)), c));
                        }
                        else
                        {
                            whens.Add(c);
                        }                        
                    }
                }
            }

            for (int i = 0; i < conditionList.Count; ++i)
            {
                var cond = conditionList[i];
                var be = cond as BinaryExpressionSyntax;

                if (be != null)
                {
                    if (NeedsParentheses(be.Right))
                    {
                        conditionList[i] = be.WithRight(SyntaxFactory.ParenthesizedExpression(be.Right));
                    }                    
                }
                else
                {
                    if (NeedsParentheses(cond))
                    {
                        conditionList[i] = SyntaxFactory.ParenthesizedExpression(cond);
                    }
                }
            }

            if (conditionList.Count == 1)
            {
                return new Tuple<ExpressionSyntax, List<VariableDeclarationSyntax>, List<ExpressionSyntax>>(conditionList.First(), variables, whens);
            }                

            ExpressionSyntax condition = conditionList[0];
            for (int i = 1; i < conditionList.Count; ++i)
            {
                condition = SyntaxFactory.BinaryExpression(SyntaxKind.LogicalOrExpression, condition, conditionList[i]);
            }
            return new Tuple<ExpressionSyntax, List<VariableDeclarationSyntax>, List<ExpressionSyntax>>(condition, variables, whens);
        }

        internal bool NeedsParentheses(ExpressionSyntax expr)
        {
            if (expr.IsKind(SyntaxKind.ConditionalExpression) || expr.IsKind(SyntaxKind.EqualsExpression) || expr.IsKind(SyntaxKind.GreaterThanExpression) ||
                expr.IsKind(SyntaxKind.GreaterThanOrEqualExpression)
                || expr.IsKind(SyntaxKind.LessThanExpression) || expr.IsKind(SyntaxKind.LessThanOrEqualExpression) || expr.IsKind(SyntaxKind.LogicalAndExpression) ||
                expr.IsKind(SyntaxKind.LogicalOrExpression) || expr.IsKind(SyntaxKind.NotEqualsExpression))
            {
                return true;
            }

            var bOp = expr as BinaryExpressionSyntax;
            return bOp != null && NeedsParentheses(bOp.Right);
        }
    }
}