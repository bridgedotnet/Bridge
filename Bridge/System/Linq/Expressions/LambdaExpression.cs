using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 18")]
    public abstract class LambdaExpression : Expression
    {
        [Name("p")]
        [FieldProperty]
        public extern ReadOnlyCollection<ParameterExpression> Parameters { get; private set; }

        [FieldProperty]
        public extern Expression Body { get; private set; }

        [FieldProperty]
        [Name("rt")]
        public extern Expression ReturnType { get; private set; }

        internal extern LambdaExpression();
    }
}