using System.Diagnostics;
using ICSharpCode.NRefactory.CSharp.Resolver;
using ICSharpCode.NRefactory.Semantics;

namespace Bridge.Translator 
{
	public interface IResolveResultVisitor<out TResult, in TData> {
		TResult VisitResolveResult(ResolveResult rr, TData data);
		TResult VisitDefaultResolveResult(ResolveResult rr, TData data);
		TResult VisitTypeOfResolveResult(TypeOfResolveResult rr, TData data);
		TResult VisitThisResolveResult(ThisResolveResult rr, TData data);
		TResult VisitOperatorResolveResult(OperatorResolveResult rr, TData data);
		TResult VisitMemberResolveResult(MemberResolveResult rr, TData data);
		TResult VisitLocalResolveResult(LocalResolveResult rr, TData data);
		TResult VisitMethodGroupResolveResult(MethodGroupResolveResult rr, TData data);
		TResult VisitLambdaResolveResult(LambdaResolveResult rr, TData data);
		TResult VisitCSharpInvocationResolveResult(CSharpInvocationResolveResult rr, TData data);
		TResult VisitInvocationResolveResult(InvocationResolveResult rr, TData data);
		TResult VisitConversionResolveResult(ConversionResolveResult rr, TData data);
		TResult VisitConstantResolveResult(ConstantResolveResult rr, TData data);
		TResult VisitByReferenceResolveResult(ByReferenceResolveResult rr, TData data);
		TResult VisitArrayCreateResolveResult(ArrayCreateResolveResult rr, TData data);
		TResult VisitArrayAccessResolveResult(ArrayAccessResolveResult rr, TData data);
		TResult VisitTypeResolveResult(TypeResolveResult rr, TData data);
		TResult VisitTypeIsResolveResult(TypeIsResolveResult rr, TData data);
		TResult VisitInitializedObjectResolveResult(InitializedObjectResolveResult rr, TData data);
		TResult VisitDynamicInvocationResolveResult(DynamicInvocationResolveResult rr, TData data);
		TResult VisitDynamicMemberResolveResult(DynamicMemberResolveResult rr, TData data);
		TResult VisitNamedArgumentResolveResult(NamedArgumentResolveResult rr, TData data);
		TResult VisitAwaitResolveResult(AwaitResolveResult rr, TData data);
		TResult VisitSizeOfResolveResult(SizeOfResolveResult rr, TData data);
	}

	public static class ResolveResultVisitorExtensions {
		[DebuggerStepThrough]
		public static TResult DefaultVisitResolveResult<TResult, TData>(this IResolveResultVisitor<TResult, TData> visitor, ResolveResult rr, TData data) {
			if (rr is ArrayAccessResolveResult) {
				return visitor.VisitArrayAccessResolveResult((ArrayAccessResolveResult)rr, data);
			}
			else if (rr is ArrayCreateResolveResult) {
				return visitor.VisitArrayCreateResolveResult((ArrayCreateResolveResult)rr, data);
			}
			else if (rr is ByReferenceResolveResult) {
				return visitor.VisitByReferenceResolveResult((ByReferenceResolveResult)rr, data);
			}
			else if (rr is ConstantResolveResult) {
				return visitor.VisitConstantResolveResult((ConstantResolveResult)rr, data);
			}
			else if (rr is ConversionResolveResult) {
				return visitor.VisitConversionResolveResult((ConversionResolveResult)rr, data);
			}
			else if (rr is CSharpInvocationResolveResult) {
				return visitor.VisitCSharpInvocationResolveResult((CSharpInvocationResolveResult)rr, data);
			}
			else if (rr is InvocationResolveResult) {
				return visitor.VisitInvocationResolveResult((InvocationResolveResult)rr, data);
			}
			else if (rr is LambdaResolveResult) {
				return visitor.VisitLambdaResolveResult((LambdaResolveResult)rr, data);
			}
			else if (rr is MethodGroupResolveResult) {
				return visitor.VisitMethodGroupResolveResult((MethodGroupResolveResult)rr, data);
			}
			else if (rr is LocalResolveResult) {
				return visitor.VisitLocalResolveResult((LocalResolveResult)rr, data);
			}
			else if (rr is MemberResolveResult) {
				return visitor.VisitMemberResolveResult((MemberResolveResult)rr, data);
			}
			else if (rr is OperatorResolveResult) {
				return visitor.VisitOperatorResolveResult((OperatorResolveResult)rr, data);
			}
			else if (rr is ThisResolveResult) {
				return visitor.VisitThisResolveResult((ThisResolveResult)rr, data);
			}
			else if (rr is TypeOfResolveResult) {
				return visitor.VisitTypeOfResolveResult((TypeOfResolveResult)rr, data);
			}
			else if (rr is TypeResolveResult) {
				return visitor.VisitTypeResolveResult((TypeResolveResult)rr, data);
			}
			else if (rr is TypeIsResolveResult) {
				return visitor.VisitTypeIsResolveResult((TypeIsResolveResult)rr, data);
			}
			else if (rr is InitializedObjectResolveResult) {
				return visitor.VisitInitializedObjectResolveResult((InitializedObjectResolveResult)rr, data);
			}
			else if (rr is DynamicInvocationResolveResult) {
				return visitor.VisitDynamicInvocationResolveResult((DynamicInvocationResolveResult)rr, data);
			}
			else if (rr is DynamicMemberResolveResult) {
				return visitor.VisitDynamicMemberResolveResult((DynamicMemberResolveResult)rr, data);
			}
			else if (rr is NamedArgumentResolveResult) {
				return visitor.VisitNamedArgumentResolveResult((NamedArgumentResolveResult)rr, data);
			}
			else if (rr is AwaitResolveResult) {
				return visitor.VisitAwaitResolveResult((AwaitResolveResult)rr, data);
			}
			else if (rr is SizeOfResolveResult) {
				return visitor.VisitSizeOfResolveResult((SizeOfResolveResult)rr, data);
			}
			else {
				return visitor.VisitDefaultResolveResult(rr, data);
			}
		}

		public static void DefaultVisitChildResolveResults<TResult, TData>(this IResolveResultVisitor<TResult, TData> visitor, ResolveResult rr, TData data) {
			foreach (var r in rr.GetChildResults())
				visitor.VisitResolveResult(r, data);
		}
	}
}
