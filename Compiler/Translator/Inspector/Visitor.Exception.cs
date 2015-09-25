using System;
using ICSharpCode.NRefactory.CSharp;
using System.Linq;
using Bridge.Contract;

namespace Bridge.Translator
{
    public abstract partial class Visitor : IAstVisitor
    {
        public virtual IVisitorException CreateException(AstNode node, string message)
        {
            if (String.IsNullOrEmpty(message))
            {
                message = String.Format("Language construction {0} is not supported", node.GetType().Name);
            }

            return new EmitterException(node, message);
        }

        public virtual IVisitorException CreateException(AstNode node)
        {
            return this.CreateException(node, null);
        }


        private bool throwException = true;
        public virtual bool ThrowException
        {
            get
            {
                return this.throwException;
            }
            set
            {
                this.throwException = value;
            }
        }

        public virtual void VisitAccessor(Accessor accessor)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(accessor);
            }
        }

        public virtual void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(anonymousMethodExpression);
            }
        }

        public virtual void VisitAnonymousTypeCreateExpression(AnonymousTypeCreateExpression anonymousTypeCreateExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(anonymousTypeCreateExpression);
            }
        }

        public virtual void VisitArrayCreateExpression(ArrayCreateExpression arrayCreateExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(arrayCreateExpression);
            }
        }

        public virtual void VisitArrayInitializerExpression(ArrayInitializerExpression arrayInitializerExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(arrayInitializerExpression);
            }
        }

        public virtual void VisitArraySpecifier(ArraySpecifier arraySpecifier)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(arraySpecifier);
            }
        }

        public virtual void VisitAsExpression(AsExpression asExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(asExpression);
            }
        }

        public virtual void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(assignmentExpression);
            }
        }

        public virtual void VisitAttribute(ICSharpCode.NRefactory.CSharp.Attribute attribute)
        {
            throw new NotImplementedException();
        }

        public virtual void VisitBaseReferenceExpression(BaseReferenceExpression baseReferenceExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(baseReferenceExpression);
            }
        }

        public virtual void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(binaryOperatorExpression);
            }
        }

        public virtual void VisitBlockStatement(BlockStatement blockStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(blockStatement);
            }
        }

        public virtual void VisitBreakStatement(BreakStatement breakStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(breakStatement);
            }
        }

        public virtual void VisitCaseLabel(CaseLabel caseLabel)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(caseLabel);
            }
        }

        public virtual void VisitCastExpression(CastExpression castExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(castExpression);
            }
        }

        public virtual void VisitCatchClause(CatchClause catchClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(catchClause);
            }
        }

        public virtual void VisitCheckedExpression(CheckedExpression checkedExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(checkedExpression);
            }
        }

        public virtual void VisitCheckedStatement(CheckedStatement checkedStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(checkedStatement);
            }
        }

        public virtual void VisitComposedType(ComposedType composedType)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(composedType);
            }
        }

        public virtual void VisitConditionalExpression(ConditionalExpression conditionalExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(conditionalExpression);
            }
        }

        public virtual void VisitConstructorDeclaration(ConstructorDeclaration constructorDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(constructorDeclaration);
            }
        }

        public virtual void VisitConstructorInitializer(ConstructorInitializer constructorInitializer)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(constructorInitializer);
            }
        }

        public virtual void VisitContinueStatement(ContinueStatement continueStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(continueStatement);
            }
        }

        public virtual void VisitCustomEventDeclaration(CustomEventDeclaration customEventDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(customEventDeclaration);
            }
        }

        public virtual void VisitDelegateDeclaration(DelegateDeclaration delegateDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(delegateDeclaration);
            }
        }

        public virtual void VisitDestructorDeclaration(DestructorDeclaration destructorDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(destructorDeclaration);
            }
        }

        public virtual void VisitDirectionExpression(DirectionExpression directionExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(directionExpression);
            }
        }

        public virtual void VisitDoWhileStatement(DoWhileStatement doWhileStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(doWhileStatement);
            }
        }

        public virtual void VisitDocumentationReference(DocumentationReference documentationReference)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(documentationReference);
            }
        }

        public virtual void VisitEmptyStatement(EmptyStatement emptyStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(emptyStatement);
            }
        }

        public virtual void VisitEnumMemberDeclaration(EnumMemberDeclaration enumMemberDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(enumMemberDeclaration);
            }
        }

        public virtual void VisitEventDeclaration(EventDeclaration eventDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(eventDeclaration);
            }
        }

        public virtual void VisitExpressionStatement(ExpressionStatement expressionStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(expressionStatement);
            }
        }

        public virtual void VisitExternAliasDeclaration(ExternAliasDeclaration externAliasDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(externAliasDeclaration);
            }
        }

        public virtual void VisitFieldDeclaration(FieldDeclaration fieldDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(fieldDeclaration);
            }
        }

        public virtual void VisitFixedFieldDeclaration(FixedFieldDeclaration fixedFieldDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(fixedFieldDeclaration);
            }
        }

        public virtual void VisitFixedStatement(FixedStatement fixedStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(fixedStatement);
            }
        }

        public virtual void VisitFixedVariableInitializer(FixedVariableInitializer fixedVariableInitializer)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(fixedVariableInitializer);
            }
        }

        public virtual void VisitForStatement(ForStatement forStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(forStatement);
            }
        }

        public virtual void VisitForeachStatement(ForeachStatement foreachStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(foreachStatement);
            }
        }

        public virtual void VisitGotoCaseStatement(GotoCaseStatement gotoCaseStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(gotoCaseStatement);
            }
        }

        public virtual void VisitGotoDefaultStatement(GotoDefaultStatement gotoDefaultStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(gotoDefaultStatement);
            }
        }

        public virtual void VisitGotoStatement(GotoStatement gotoStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(gotoStatement);
            }
        }

        public virtual void VisitIdentifierExpression(IdentifierExpression identifierExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(identifierExpression);
            }
        }

        public virtual void VisitIfElseStatement(IfElseStatement ifElseStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(ifElseStatement);
            }
        }

        public virtual void VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(indexerDeclaration);
            }
        }

        public virtual void VisitIndexerExpression(IndexerExpression indexerExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(indexerExpression);
            }
        }

        public virtual void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(invocationExpression);
            }
        }

        public virtual void VisitIsExpression(IsExpression isExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(isExpression);
            }
        }

        public virtual void VisitLabelStatement(LabelStatement labelStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(labelStatement);
            }
        }

        public virtual void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(lambdaExpression);
            }
        }

        public virtual void VisitLockStatement(LockStatement lockStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(lockStatement);
            }
        }

        public virtual void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(memberReferenceExpression);
            }
        }

        public virtual void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(methodDeclaration);
            }
        }

        public virtual void VisitNamedArgumentExpression(NamedArgumentExpression namedArgumentExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(namedArgumentExpression);
            }
        }

        public virtual void VisitNamedExpression(NamedExpression namedExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(namedExpression);
            }
        }

        public virtual void VisitNamespaceDeclaration(NamespaceDeclaration namespaceDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(namespaceDeclaration);
            }
        }

        public virtual void VisitObjectCreateExpression(ObjectCreateExpression objectCreateExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(objectCreateExpression);
            }
        }

        public virtual void VisitParameterDeclaration(ParameterDeclaration parameterDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(parameterDeclaration);
            }
        }

        public virtual void VisitParenthesizedExpression(ParenthesizedExpression parenthesizedExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(parenthesizedExpression);
            }
        }

        public virtual void VisitPatternPlaceholder(AstNode placeholder, ICSharpCode.NRefactory.PatternMatching.Pattern pattern)
        {
            throw new NotImplementedException();
        }

        public virtual void VisitPointerReferenceExpression(PointerReferenceExpression pointerReferenceExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(pointerReferenceExpression);
            }
        }

        public virtual void VisitPrimitiveExpression(PrimitiveExpression primitiveExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(primitiveExpression);
            }
        }

        public virtual void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(propertyDeclaration);
            }
        }

        public virtual void VisitQueryContinuationClause(QueryContinuationClause queryContinuationClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryContinuationClause);
            }
        }

        public virtual void VisitQueryExpression(QueryExpression queryExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryExpression);
            }
        }

        public virtual void VisitQueryFromClause(QueryFromClause queryFromClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryFromClause);
            }
        }

        public virtual void VisitQueryGroupClause(QueryGroupClause queryGroupClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryGroupClause);
            }
        }

        public virtual void VisitQueryJoinClause(QueryJoinClause queryJoinClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryJoinClause);
            }
        }

        public virtual void VisitQueryLetClause(QueryLetClause queryLetClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryLetClause);
            }
        }

        public virtual void VisitQueryOrderClause(QueryOrderClause queryOrderClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryOrderClause);
            }
        }

        public virtual void VisitQueryOrdering(QueryOrdering queryOrdering)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryOrdering);
            }
        }

        public virtual void VisitQuerySelectClause(QuerySelectClause querySelectClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(querySelectClause);
            }
        }

        public virtual void VisitQueryWhereClause(QueryWhereClause queryWhereClause)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(queryWhereClause);
            }
        }

        public virtual void VisitReturnStatement(ReturnStatement returnStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(returnStatement);
            }
        }

        public virtual void VisitSizeOfExpression(SizeOfExpression sizeOfExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(sizeOfExpression);
            }
        }

        public virtual void VisitStackAllocExpression(StackAllocExpression stackAllocExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(stackAllocExpression);
            }
        }

        public virtual void VisitSwitchSection(SwitchSection switchSection)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(switchSection);
            }
        }

        public virtual void VisitSwitchStatement(SwitchStatement switchStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(switchStatement);
            }
        }

        public virtual void VisitSyntaxTree(SyntaxTree syntaxTree)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(syntaxTree);
            }
        }

        public virtual void VisitText(TextNode textNode)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(textNode);
            }
        }

        public virtual void VisitThisReferenceExpression(ThisReferenceExpression thisReferenceExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(thisReferenceExpression);
            }
        }

        public virtual void VisitThrowStatement(ThrowStatement throwStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(throwStatement);
            }
        }

        public virtual void VisitTryCatchStatement(TryCatchStatement tryCatchStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(tryCatchStatement);
            }
        }

        public virtual void VisitTypeDeclaration(TypeDeclaration typeDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(typeDeclaration);
            }
        }

        public virtual void VisitTypeOfExpression(TypeOfExpression typeOfExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(typeOfExpression);
            }
        }

        public virtual void VisitTypeReferenceExpression(TypeReferenceExpression typeReferenceExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(typeReferenceExpression);
            }
        }

        public virtual void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(unaryOperatorExpression);
            }
        }

        public virtual void VisitUncheckedExpression(UncheckedExpression uncheckedExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(uncheckedExpression);
            }
        }

        public virtual void VisitUncheckedStatement(UncheckedStatement uncheckedStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(uncheckedStatement);
            }
        }

        public virtual void VisitUndocumentedExpression(UndocumentedExpression undocumentedExpression)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(undocumentedExpression);
            }
        }

        public virtual void VisitUnsafeStatement(UnsafeStatement unsafeStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(unsafeStatement);
            }
        }

        public virtual void VisitUsingDeclaration(UsingDeclaration usingDeclaration)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(usingDeclaration);
            }
        }

        public virtual void VisitUsingStatement(UsingStatement usingStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(usingStatement);
            }
        }

        public virtual void VisitVariableDeclarationStatement(VariableDeclarationStatement variableDeclarationStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(variableDeclarationStatement);
            }
        }

        public virtual void VisitVariableInitializer(VariableInitializer variableInitializer)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(variableInitializer);
            }
        }

        public virtual void VisitWhileStatement(WhileStatement whileStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(whileStatement);
            }
        }

        public virtual void VisitWhitespace(WhitespaceNode whitespaceNode)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(whitespaceNode);
            }
        }

        public virtual void VisitYieldBreakStatement(YieldBreakStatement yieldBreakStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(yieldBreakStatement);
            }
        }

        public virtual void VisitYieldReturnStatement(YieldReturnStatement yieldReturnStatement)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(yieldReturnStatement);
            }
        }

        public virtual void VisitErrorNode(AstNode errorNode)
        {
            if (this.ThrowException)
            {
                throw (System.Exception)this.CreateException(errorNode);
            }
        }
    }
}