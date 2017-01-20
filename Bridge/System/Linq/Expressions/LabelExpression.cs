using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 56")]
    public sealed class LabelExpression : Expression
    {
        [Field]
        [Name("dv")]
        public extern Expression DefaultValue { get; private set; }

        [Field]
        public extern LabelTarget Target { get; private set; }

        internal extern LabelExpression();
    }
}