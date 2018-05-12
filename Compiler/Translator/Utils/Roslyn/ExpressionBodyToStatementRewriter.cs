using Microsoft.CodeAnalysis;
using Microsoft.CodeAnalysis.CSharp;
using Microsoft.CodeAnalysis.CSharp.Syntax;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Bridge.Translator
{
    public class ExpressionBodyToStatementRewriter : CSharpSyntaxRewriter
    {
        private const string SYSTEM_IDENTIFIER = "System";
        private const string FUNC_IDENTIFIER = "Func";
        private SemanticModel semanticModel;

        public ExpressionBodyToStatementRewriter(SemanticModel semanticModel)
        {
            this.semanticModel = semanticModel;
        }

        public override SyntaxNode VisitConstructorDeclaration(ConstructorDeclarationSyntax node)
        {
            node = (ConstructorDeclarationSyntax)base.VisitConstructorDeclaration(node);

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitDestructorDeclaration(DestructorDeclarationSyntax node)
        {
            node = (DestructorDeclarationSyntax)base.VisitDestructorDeclaration(node);

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitAccessorList(AccessorListSyntax node)
        {
            node = (AccessorListSyntax)base.VisitAccessorList(node);

            if (node.Accessors.Any(a => a.ExpressionBody != null))
            {
                var list = new List<AccessorDeclarationSyntax>();
                foreach (var accessor in node.Accessors)
                {
                    if (accessor != null && accessor.ExpressionBody != null)
                    {
                        list.Add(SyntaxHelper.ToStatementBody(accessor));
                    }
                    else
                    {
                        list.Add(accessor);
                    }
                }

                node = node.WithAccessors(SyntaxFactory.List(list)).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitPropertyDeclaration(PropertyDeclarationSyntax node)
        {
            node = (PropertyDeclarationSyntax)base.VisitPropertyDeclaration(node);
            var newNode = node;

            if (node.ExpressionBody != null)
            {
                newNode = SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return newNode.Equals(node) ? node : newNode;
        }

        public override SyntaxNode VisitMethodDeclaration(MethodDeclarationSyntax node)
        {
            node = base.VisitMethodDeclaration(node) as MethodDeclarationSyntax;

            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitOperatorDeclaration(OperatorDeclarationSyntax node)
        {
            node = (OperatorDeclarationSyntax)base.VisitOperatorDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitConversionOperatorDeclaration(ConversionOperatorDeclarationSyntax node)
        {
            node = (ConversionOperatorDeclarationSyntax)base.VisitConversionOperatorDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitIndexerDeclaration(IndexerDeclarationSyntax node)
        {
            node = (IndexerDeclarationSyntax)base.VisitIndexerDeclaration(node);
            if (node.ExpressionBody != null)
            {
                return SyntaxHelper.ToStatementBody(node).NormalizeWhitespace();
            }

            return node;
        }

        public override SyntaxNode VisitThrowExpression(ThrowExpressionSyntax node)
        {
            if (node.Parent is ExpressionStatementSyntax es && es.Expression == node || node.Parent is ThrowStatementSyntax)
            {
                return base.VisitThrowExpression(node);
            }

            var typeInfo = semanticModel.GetTypeInfo(node);

            node = (ThrowExpressionSyntax)base.VisitThrowExpression(node);

            if ((typeInfo.ConvertedType ?? typeInfo.Type) != null)
            {
                var type = typeInfo.ConvertedType ?? typeInfo.Type;

                var invocation = SyntaxFactory.InvocationExpression(
                        SyntaxFactory.ParenthesizedExpression(
                            SyntaxFactory.CastExpression(
                                SyntaxFactory.QualifiedName(
                                    SyntaxFactory.IdentifierName(SYSTEM_IDENTIFIER),
                                    SyntaxFactory.GenericName(
                                        SyntaxFactory.Identifier(FUNC_IDENTIFIER))
                                    .WithTypeArgumentList(
                                        SyntaxFactory.TypeArgumentList(
                                            SyntaxFactory.SingletonSeparatedList<TypeSyntax>(
                                                SyntaxFactory.ParseTypeName(type.ToMinimalDisplayString(semanticModel, node.GetLocation().SourceSpan.Start))
                                                ))
                                        .WithLessThanToken(
                                            SyntaxFactory.Token(SyntaxKind.LessThanToken))
                                        .WithGreaterThanToken(
                                            SyntaxFactory.Token(SyntaxKind.GreaterThanToken))))
                                .WithDotToken(
                                    SyntaxFactory.Token(SyntaxKind.DotToken)),
                                SyntaxFactory.ParenthesizedExpression(
                                    SyntaxFactory.ParenthesizedLambdaExpression(
                                        SyntaxFactory.Block(
                                            SyntaxFactory.SingletonList<StatementSyntax>(
                                                SyntaxFactory.ThrowStatement(node.Expression)
                                                .WithThrowKeyword(
                                                    SyntaxFactory.Token(SyntaxKind.ThrowKeyword))
                                                .WithSemicolonToken(
                                                    SyntaxFactory.Token(SyntaxKind.SemicolonToken))
                                                .NormalizeWhitespace()))
                                        .WithOpenBraceToken(
                                            SyntaxFactory.Token(SyntaxKind.OpenBraceToken))
                                        .WithCloseBraceToken(
                                            SyntaxFactory.Token(SyntaxKind.CloseBraceToken)))
                                    .WithParameterList(
                                        SyntaxFactory.ParameterList()
                                        .WithOpenParenToken(
                                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                        .WithCloseParenToken(
                                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                                    .WithArrowToken(
                                        SyntaxFactory.Token(SyntaxKind.EqualsGreaterThanToken)))
                                .WithOpenParenToken(
                                    SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                                .WithCloseParenToken(
                                    SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                            .WithOpenParenToken(
                                SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                            .WithCloseParenToken(
                                SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                        .WithOpenParenToken(
                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                        .WithCloseParenToken(
                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)))
                    .WithArgumentList(
                        SyntaxFactory.ArgumentList()
                        .WithOpenParenToken(
                            SyntaxFactory.Token(SyntaxKind.OpenParenToken))
                        .WithCloseParenToken(
                            SyntaxFactory.Token(SyntaxKind.CloseParenToken)));

                return invocation;
            }

            return node;
        }
    }
}
