using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 58")]
    public sealed class LoopExpression : Expression
    {
        [Field]
        public extern Expression Body { get; private set; }

        [Field]
        public extern LabelTarget BreakLabel { get; private set; }

        [Field]
        public extern LabelTarget ContinueLabel { get; private set; }

        internal extern LoopExpression();
    }
}