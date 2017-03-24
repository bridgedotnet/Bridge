using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 56")]
    public sealed class LabelExpression : Expression
    {
        [Name("dv")]
        public extern Expression DefaultValue { get; private set; }

        [Name(true)] //[Field]
        public extern LabelTarget Target { get; private set; }

        internal extern LabelExpression();
    }
}