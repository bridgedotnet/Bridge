using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 53")]
    public sealed class GotoExpression : Expression
    {
        [Field]
        public extern GotoExpressionKind Kind { get; private set; }

        [Field]
        public extern Expression Value { get; private set; }

        [Field]
        public extern LabelTarget Target { get; private set; }

        internal extern GotoExpression();
    }
}