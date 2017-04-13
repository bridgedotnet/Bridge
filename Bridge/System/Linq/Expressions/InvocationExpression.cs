using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 17")]
    public sealed class InvocationExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Expression { get; private set; }

        [Name("args")]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        internal extern InvocationExpression();
    }
}