using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 56")]
    public sealed class LabelExpression : Expression
    {
        [FieldProperty]
        [Name("dv")]
        public extern Expression DefaultValue { get; private set; }

        [FieldProperty]
        public extern LabelTarget Target { get; private set; }

        internal extern LabelExpression();
    }
}