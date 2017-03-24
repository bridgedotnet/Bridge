using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 18")]
    public abstract class LambdaExpression : Expression
    {
        [Name("p")]
        public extern ReadOnlyCollection<ParameterExpression> Parameters { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Body { get; private set; }

        [Name("rt")]
        public extern Expression ReturnType { get; private set; }

        internal extern LambdaExpression();
    }
}