using Bridge;
using System.Collections.Generic;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 18")]
    [IgnoreGeneric]
    public sealed class Expression<TDelegate> : LambdaExpression
    {
        public extern Expression<TDelegate> Update(Expression body, IEnumerable<ParameterExpression> parameters);

        internal extern Expression();
    }
}