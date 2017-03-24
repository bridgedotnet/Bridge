using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 8")]
    public sealed class ConditionalExpression : Expression
    {
        [Name(true)] //[Field]
        public extern Expression Test { get; private set; }

        [Name(true)] //[Field]
        public extern Expression IfTrue { get; private set; }

        [Name(true)] //[Field]
        public extern Expression IfFalse { get; private set; }

        internal extern ConditionalExpression();
    }
}