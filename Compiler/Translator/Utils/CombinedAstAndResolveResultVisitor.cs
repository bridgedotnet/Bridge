using ICSharpCode.NRefactory.CSharp;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator
{
	public abstract class CombinedAstAndResolveResultVisitor : DepthFirstAstVisitor, IResolveResultVisitor<object, object> {
		protected CSharpAstResolver _resolver;

		protected CombinedAstAndResolveResultVisitor(CSharpAstResolver resolver) {
			_resolver = resolver;
		}

		public override void VisitPreProcessorDirective(PreProcessorDirective preProcessorDirective) {
		}

		public override void VisitLambdaExpression(LambdaExpression lambdaExpression) {
			HandleExpressionNode(lambdaExpression);
		}

		public override void VisitAnonymousMethodExpression(AnonymousMethodExpression anonymousMethodExpression) {
			HandleExpressionNode(anonymousMethodExpression);
		}

		public override void VisitUndocumentedExpression(UndocumentedExpression undocumentedExpression) {
			HandleExpressionNode(undocumentedExpression);
		}

		public override void VisitArrayInitializerExpression(ArrayInitializerExpression arrayInitializerExpression) {
			HandleExpressionNode(arrayInitializerExpression);
		}

		public override void VisitNamedArgumentExpression(NamedArgumentExpression namedArgumentExpression) {
			HandleExpressionNode(namedArgumentExpression);
		}

		public override void VisitNamedExpression(NamedExpression namedExpression) {
			HandleExpressionNode(namedExpression);
		}

		public override void VisitIsExpression(IsExpression isExpression) {
			HandleExpressionNode(isExpression);
		}

		public override void VisitDefaultValueExpression(DefaultValueExpression defaultValueExpression) {
			HandleExpressionNode(defaultValueExpression);
		}

		public override void VisitMemberReferenceExpression(MemberReferenceExpression memberReferenceExpression) {
			HandleExpressionNode(memberReferenceExpression);
		}

		public override void VisitNullReferenceExpression(NullReferenceExpression nullReferenceExpression) {
			HandleExpressionNode(nullReferenceExpression);
		}

		public override void VisitObjectCreateExpression(ObjectCreateExpression objectCreateExpression) {
			HandleExpressionNode(objectCreateExpression);
		}

		public override void VisitAnonymousTypeCreateExpression(AnonymousTypeCreateExpression anonymousTypeCreateExpression) {
			HandleExpressionNode(anonymousTypeCreateExpression);
		}

		public override void VisitParenthesizedExpression(ParenthesizedExpression parenthesizedExpression) {
			HandleExpressionNode(parenthesizedExpression);
		}

		public override void VisitPointerReferenceExpression(PointerReferenceExpression pointerReferenceExpression) {
			HandleExpressionNode(pointerReferenceExpression);
		}

		public override void VisitPrimitiveExpression(PrimitiveExpression primitiveExpression) {
			HandleExpressionNode(primitiveExpression);
		}

		public override void VisitSizeOfExpression(SizeOfExpression sizeOfExpression) {
			HandleExpressionNode(sizeOfExpression);
		}

		public override void VisitStackAllocExpression(StackAllocExpression stackAllocExpression) {
			HandleExpressionNode(stackAllocExpression);
		}

		public override void VisitThisReferenceExpression(ThisReferenceExpression thisReferenceExpression) {
			HandleExpressionNode(thisReferenceExpression);
		}

		public override void VisitTypeOfExpression(TypeOfExpression typeOfExpression) {
			HandleExpressionNode(typeOfExpression);
		}

		public override void VisitTypeReferenceExpression(TypeReferenceExpression typeReferenceExpression) {
			HandleExpressionNode(typeReferenceExpression);
		}

		public override void VisitUnaryOperatorExpression(UnaryOperatorExpression unaryOperatorExpression) {
			HandleExpressionNode(unaryOperatorExpression);
		}

		public override void VisitUncheckedExpression(UncheckedExpression uncheckedExpression) {
			HandleExpressionNode(uncheckedExpression);
		}

		public override void VisitQueryExpression(QueryExpression queryExpression) {
			HandleExpressionNode(queryExpression);
		}

		public override void VisitAsExpression(AsExpression asExpression) {
			HandleExpressionNode(asExpression);
		}

		public override void VisitArrayCreateExpression(ArrayCreateExpression arrayCreateExpression) {
			HandleExpressionNode(arrayCreateExpression);
		}

		public override void VisitAssignmentExpression(AssignmentExpression assignmentExpression) {
			HandleExpressionNode(assignmentExpression);
		}

		public override void VisitBaseReferenceExpression(BaseReferenceExpression baseReferenceExpression) {
			HandleExpressionNode(baseReferenceExpression);
		}

		public override void VisitBinaryOperatorExpression(BinaryOperatorExpression binaryOperatorExpression) {
			HandleExpressionNode(binaryOperatorExpression);
		}

		public override void VisitCastExpression(CastExpression castExpression) {
			HandleExpressionNode(castExpression);
		}

		public override void VisitCheckedExpression(CheckedExpression checkedExpression) {
			HandleExpressionNode(checkedExpression);
		}

		public override void VisitConditionalExpression(ConditionalExpression conditionalExpression) {
			HandleExpressionNode(conditionalExpression);
		}

		public override void VisitDirectionExpression(DirectionExpression directionExpression) {
			HandleExpressionNode(directionExpression);
		}

		public override void VisitIdentifierExpression(IdentifierExpression identifierExpression) {
			HandleExpressionNode(identifierExpression);
		}

		public override void VisitIndexerExpression(IndexerExpression indexerExpression) {
			HandleExpressionNode(indexerExpression);
		}

		public override void VisitInvocationExpression(InvocationExpression invocationExpression) {
			HandleExpressionNode(invocationExpression);
		}

		protected void HandleExpressionNode(AstNode node) {
			var rr = _resolver.Resolve(node);
			VisitResolveResult(rr, null);
		}

		public virtual object VisitResolveResult(ResolveResult rr, object data) {
			this.DefaultVisitResolveResult(rr, data);
			return null;
		}

		protected virtual void VisitChildResolveResults(ResolveResult rr, object data) {
			this.DefaultVisitChildResolveResults(rr, data);
		}

		public virtual object VisitDefaultResolveResult(ResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitTypeOfResolveResult(TypeOfResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitThisResolveResult(ThisResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
	   }

		public virtual object VisitOperatorResolveResult(OperatorResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitMemberResolveResult(MemberResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitLocalResolveResult(LocalResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitMethodGroupResolveResult(MethodGroupResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitLambdaResolveResult(LambdaResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitInvocationResolveResult(InvocationResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitCSharpInvocationResolveResult(CSharpInvocationResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitConversionResolveResult(ConversionResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitConstantResolveResult(ConstantResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitByReferenceResolveResult(ByReferenceResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitArrayCreateResolveResult(ArrayCreateResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitArrayAccessResolveResult(ArrayAccessResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitTypeResolveResult(TypeResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitTypeIsResolveResult(TypeIsResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitInitializedObjectResolveResult(InitializedObjectResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitDynamicInvocationResolveResult(DynamicInvocationResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitDynamicMemberResolveResult(DynamicMemberResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitNamedArgumentResolveResult(NamedArgumentResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public virtual object VisitAwaitResolveResult(AwaitResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}

		public object VisitSizeOfResolveResult(SizeOfResolveResult rr, object data) {
			VisitChildResolveResults(rr, data);
			return null;
		}
	}
}
