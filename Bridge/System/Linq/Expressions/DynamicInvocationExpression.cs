using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype == 50 && {this}.dtype === 1")]
    public sealed class DynamicInvocationExpression : DynamicExpression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern DynamicInvocationExpression();
    }
}