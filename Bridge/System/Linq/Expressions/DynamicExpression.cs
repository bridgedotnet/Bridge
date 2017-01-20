using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype == 50")]
    public abstract class DynamicExpression : Expression
    {
        [Name("dtype")]
        [Field]
        public extern DynamicExpressionType DynamicType { get; private set; }

        [Field]
        public extern Expression Expression { get; private set; }

        internal extern DynamicExpression();
    }
}