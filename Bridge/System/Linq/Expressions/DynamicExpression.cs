using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype == 50")]
    public abstract class DynamicExpression : Expression
    {
        [Name("dtype")]
        public extern DynamicExpressionType DynamicType { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Expression { get; private set; }

        internal extern DynamicExpression();
    }
}