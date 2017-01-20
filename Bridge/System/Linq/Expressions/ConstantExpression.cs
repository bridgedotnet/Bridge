using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 9")]
    public sealed class ConstantExpression : Expression
    {
        [Field]
        public extern object Value { get; private set; }

        internal extern ConstantExpression();
    }
}