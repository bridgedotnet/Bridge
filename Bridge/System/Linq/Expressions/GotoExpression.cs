using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 53")]
    public sealed class GotoExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern GotoExpressionKind Kind { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Value { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern LabelTarget Target { get; private set; }

        internal extern GotoExpression();
    }
}