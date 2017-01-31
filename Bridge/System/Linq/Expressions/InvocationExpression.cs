using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 17")]
    public sealed class InvocationExpression : Expression
    {
        [Field]
        public extern Expression Expression { get; private set; }

        [Name("args")]
        [Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern InvocationExpression();
    }
}