using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 38")]
    public sealed class ParameterExpression : Expression
    {
        [FieldProperty]
        [Name("n")]
        public extern string Name { get; private set; }

        internal extern ParameterExpression();
    }
}