using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype == 50 && {this}.dtype === 2")]
    public sealed class DynamicIndexExpression : DynamicExpression
    {
        [Field]
        public extern Expression Argument { get; private set; }

        internal extern DynamicIndexExpression();
    }
}