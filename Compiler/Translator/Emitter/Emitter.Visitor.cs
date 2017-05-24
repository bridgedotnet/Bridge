using System.Linq;
using Bridge.Contract;
using Bridge.Contract.Constants;
using ICSharpCode.NRefactory.CSharp;

namespace Bridge.Translator
{
    public partial class Emitter : Visitor
    {
        public override void VisitMethodDeclaration(MethodDeclaration methodDeclaration)
        {
            new VisitorMethodBlock(this, methodDeclaration).Emit();
        }

        public override void VisitOperatorDeclaration(OperatorDeclaration operatorDeclaration)
        {
            new OperatorBlock(this, operatorDeclaration).Emit();
        }

        public override void VisitPropertyDeclaration(PropertyDeclaration propertyDeclaration)
        {
            //new VisitorPropertyBlock(this, propertyDeclaration).Emit();
        }

        public override void VisitCustomEventDeclaration(CustomEventDeclaration customEventDeclaration)
        {
            new VisitorCustomEventBlock(this, customEventDeclaration).Emit();
        }

        public override void VisitBlockStatement(BlockStatement blockStatement)
        {
            new Block(this, blockStatement).Emit();
        }

        public override void VisitVariableDeclarationStatement(VariableDeclarationStatement variableDeclarationStatement)
        {
            new VariableBlock(this, variableDeclarationStatement).Emit();
        }

        public override void VisitPrimitiveExpression(PrimitiveExpression primitiveExpression)
        {
            new PrimitiveExpressionBlock(this, primitiveExpression).Emit();
        }

        public override void VisitExpressionStatement(ExpressionStatement expressionStatement)
        {
            new ExpressionBlock(this, expressionStatement).Emit();
        }

        public override void VisitEmptyStatement(EmptyStatement emptyStatement)
        {
            new EmptyBlock(this, emptyStatement).Emit();
        }

        public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression)
        {
            new UnaryOperatorBlock(this, unaryOperatorExpression).Emit();
        }

        public override void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression)
        {
            new BinaryOperatorBlock(this, binaryOperatorExpression).Emit();
        }

        public override void VisitIdentifierExpression(IdentifierExpression identifierExpression)
        {
            new IdentifierBlock(this, identifierExpression).Emit();
        }

        public override void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression)
        {
            new MemberReferenceBlock(this, memberReferenceExpression).Emit();
        }

        public override void VisitThisReferenceExpression(ThisReferenceExpression thisReferenceExpression)
        {
            new ThisReferenceBlock(this, thisReferenceExpression).Emit();
        }

        public override void VisitBaseReferenceExpression(BaseReferenceExpression baseReferenceExpression)
        {
            new BaseReferenceBlock(this, baseReferenceExpression).Emit();
        }

        public override void VisitInvocationExpression(InvocationExpression invocationExpression)
        {
            new InvocationBlock(this, invocationExpression).Emit();
        }

        public override void VisitAssignmentExpression(AssignmentExpression assignmentExpression)
        {
            new AssignmentBlock(this, assignmentExpression).Emit();
        }

        public override void VisitTypeReferenceExpression(TypeReferenceExpression typeReferenceExpression)
        {
            new TypeBlock(this, typeReferenceExpression.Type).Emit();
        }

        public override void VisitComposedType(ComposedType composedType)
        {
            new TypeBlock(this, composedType).Emit();
        }

        public override void VisitPrimitiveType(PrimitiveType primitiveType)
        {
            new TypeBlock(this, primitiveType).Emit();
        }

        public override void VisitSimpleType(SimpleType simpleType)
        {
            new TypeBlock(this, simpleType).Emit();
        }

        public override void VisitMemberType(MemberType memberType)
        {
            new TypeBlock(this, memberType).Emit();
        }

        public override void VisitNamedExpression(NamedExpression namedExpression)
        {
            new NameBlock(this, namedExpression).Emit();
        }

        public override void VisitArrayInitializerExpression(ArrayInitializerExpression arrayInitializerExpression)
        {
            new ArrayInitializerBlock(this, arrayInitializerExpression).Emit();
        }

        public override void VisitArrayCreateExpression(ArrayCreateExpression arrayCreateExpression)
        {
            new ArrayCreateBlock(this, arrayCreateExpression).Emit();
        }

        public override void VisitLambdaExpression(LambdaExpression lambdaExpression)
        {
            new LambdaBlock(this, lambdaExpression).Emit();
        }

        public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression)
        {
            new LambdaBlock(this, anonymousMethodExpression).Emit();
        }

        public override void VisitObjectCreateExpression(ObjectCreateExpression objectCreateExpression)
        {
            new ObjectCreateBlock(this, objectCreateExpression).Emit();
        }

        public override void VisitIfElseStatement(IfElseStatement ifElseStatement)
        {
            new IfElseBlock(this, ifElseStatement).Emit();
        }

        public override void VisitForStatement(ForStatement forStatement)
        {
            new ForBlock(this, forStatement).Emit();
        }

        public override void VisitIndexerExpression(IndexerExpression indexerExpression)
        {
            new IndexerBlock(this, indexerExpression).Emit();
        }

        public override void VisitCastExpression(CastExpression castExpression)
        {
            new CastBlock(this, castExpression).Emit();
        }

        public override void VisitAsExpression(AsExpression asExpression)
        {
            new CastBlock(this, asExpression).Emit();
        }

        public override void VisitIsExpression(IsExpression isExpression)
        {
            new CastBlock(this, isExpression).Emit();
        }

        public override void VisitReturnStatement(ReturnStatement returnStatement)
        {
            new ReturnBlock(this, returnStatement).Emit();
        }

        public override void VisitThrowStatement(ThrowStatement throwStatement)
        {
            new ThrowBlock(this, throwStatement).Emit();
        }

        public override void VisitForeachStatement(ForeachStatement foreachStatement)
        {
            new ForeachBlock(this, foreachStatement).Emit();
        }

        public override void VisitConditionalExpression(ConditionalExpression conditionalExpression)
        {
            new ConditionalBlock(this, conditionalExpression).Emit();
        }

        public override void VisitTryCatchStatement(TryCatchStatement tryCatchStatement)
        {
            new TryCatchBlock(this, tryCatchStatement).Emit();
        }

        public override void VisitWhileStatement(WhileStatement whileStatement)
        {
            new WhileBlock(this, whileStatement).Emit();
        }

        public override void VisitDoWhileStatement(DoWhileStatement doWhileStatement)
        {
            new DoWhileBlock(this, doWhileStatement).Emit();
        }

        public override void VisitSwitchStatement(SwitchStatement switchStatement)
        {
            new SwitchBlock(this, switchStatement).Emit();
        }

        public override void VisitSwitchSection(SwitchSection switchSection)
        {
            new SwitchBlock(this, switchSection).Emit();
        }

        public override void VisitCaseLabel(CaseLabel caseLabel)
        {
            new SwitchBlock(this, caseLabel).Emit();
        }

        public override void VisitBreakStatement(BreakStatement breakStatement)
        {
            new BreakBlock(this, breakStatement).Emit();
        }

        public override void VisitContinueStatement(ContinueStatement continueStatement)
        {
            new ContinueBlock(this, continueStatement).Emit();
        }

        public override void VisitParenthesizedExpression(ParenthesizedExpression parenthesizedExpression)
        {
            new ParenthesizedBlock(this, parenthesizedExpression).Emit();
        }

        public override void VisitTypeOfExpression(TypeOfExpression typeOfExpression)
        {
            new TypeOfExpressionBlock(this, typeOfExpression).Emit();
        }

        public override void VisitComment(Comment comment)
        {
            new CommentBlock(this, comment).Emit();
        }

        public override void VisitAnonymousTypeCreateExpression(AnonymousTypeCreateExpression anonymousTypeCreateExpression)
        {
            new AnonymousTypeCreateBlock(this, anonymousTypeCreateExpression).Emit();
        }

        public override void VisitDefaultValueExpression(DefaultValueExpression defaultValueExpression)
        {
            new DefaultValueBlock(this, defaultValueExpression).Emit();
        }

        public override void VisitEventDeclaration(EventDeclaration eventDeclaration)
        {
            new EventDeclarationBlock(this, eventDeclaration).Emit();
        }

        public override void VisitNullReferenceExpression(NullReferenceExpression nullReferenceExpression)
        {
            new NullReferenceBlock(this, nullReferenceExpression).Emit();
        }

        public override void VisitDirectionExpression(DirectionExpression directionExpression)
        {
            directionExpression.Expression.AcceptVisitor(this);
        }

        public override void VisitNullNode(AstNode nullNode)
        {
            new NullReferenceBlock(this, nullNode).Emit();
        }

        public override void VisitIndexerDeclaration(IndexerDeclaration indexerDeclaration)
        {
            new VisitorIndexerBlock(this, indexerDeclaration).Emit();
        }

        public override void VisitNewLine(NewLineNode newLineNode)
        {
            if (newLineNode.PrevSibling == null || newLineNode.PrevSibling is NewLineNode || newLineNode.PrevSibling.EndLocation.Line != newLineNode.StartLocation.Line)
            {
                if (this.IsAsync && this.AsyncBlock != null)
                {
                    var step = this.AsyncBlock.Steps.LastOrDefault();

                    if (step != null && this.ContainsOnlyOrEmpty(step.Output, ' '))
                    {
                        return;
                    }
                }

                this.Output.Append(NEW_LINE);
                this.IsNewLine = true;
            }
        }

        public override void VisitYieldBreakStatement(YieldBreakStatement yieldBreakStatement)
        {
            new YieldBlock(this, yieldBreakStatement).Emit();
        }

        public override void VisitYieldReturnStatement(YieldReturnStatement yieldReturnStatement)
        {
            new YieldBlock(this, yieldReturnStatement).Emit();
        }

        public override void VisitUsingStatement(UsingStatement usingStatement)
        {
            new UsingBlock(this, usingStatement).Emit();
        }

        public override void VisitUncheckedExpression(UncheckedExpression uncheckedExpression)
        {
            uncheckedExpression.Expression.AcceptVisitor(this);
        }

        public override void VisitUncheckedStatement(UncheckedStatement uncheckedStatement)
        {
            this.NoBraceBlock = uncheckedStatement.Body;
            uncheckedStatement.Body.AcceptVisitor(this);
        }

        public override void VisitLockStatement(LockStatement lockStatement)
        {
            lockStatement.Expression.AcceptVisitor(this);
            this.Output.Append(";");
            this.Output.Append(NEW_LINE);
            this.IsNewLine = true;
            lockStatement.EmbeddedStatement.AcceptVisitor(this);
        }

        public override void VisitCheckedExpression(CheckedExpression checkedExpression)
        {
            checkedExpression.Expression.AcceptVisitor(this);
        }

        public override void VisitCheckedStatement(CheckedStatement checkedStatement)
        {
            this.NoBraceBlock = checkedStatement.Body;
            checkedStatement.Body.AcceptVisitor(this);
        }

        public override void VisitGotoCaseStatement(GotoCaseStatement gotoCaseStatement)
        {
            new GotoBlock(this, gotoCaseStatement).Emit();
        }

        public override void VisitGotoDefaultStatement(GotoDefaultStatement gotoDefaultStatement)
        {
            new GotoBlock(this, gotoDefaultStatement).Emit();
        }

        public override void VisitGotoStatement(GotoStatement gotoStatement)
        {
            new GotoBlock(this, gotoStatement).Emit();
        }

        public override void VisitLabelStatement(LabelStatement labelStatement)
        {
            if (this.AsyncBlock != null)
            {
                var step = this.AsyncBlock.AddAsyncStep();
                step.Label = labelStatement.Label;
                step.Node = labelStatement;
            }
        }
    }
}