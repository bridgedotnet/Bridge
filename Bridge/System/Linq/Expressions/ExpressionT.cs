using System.Collections.Generic;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 18")]
    [Bridge.IgnoreGeneric]
    public sealed class Expression<TDelegate> : LambdaExpression
    {
        public extern Expression<TDelegate> Update(Expression body, IEnumerable<ParameterExpression> parameters);

        internal extern Expression();
    }
}