using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype == 50 && {this}.dtype === 0")]
    public sealed class DynamicMemberExpression : DynamicExpression
    {
        [Field]
        public extern string Member { get; private set; }

        internal extern DynamicMemberExpression();
    }
}