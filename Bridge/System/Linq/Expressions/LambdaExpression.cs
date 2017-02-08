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
        [Field]
        public extern ReadOnlyCollection<ParameterExpression> Parameters { get; private set; }

        [Field]
        public extern Expression Body { get; private set; }

        [Field]
        [Name("rt")]
        public extern Expression ReturnType { get; private set; }

        internal extern LambdaExpression();
    }
}