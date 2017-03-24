using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 53")]
    public sealed class GotoExpression : Expression
    {
        [Name(true)] //[Field]
        public extern GotoExpressionKind Kind { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Value { get; private set; }

        [Name(true)] //[Field]
        public extern LabelTarget Target { get; private set; }

        internal extern GotoExpression();
    }
}