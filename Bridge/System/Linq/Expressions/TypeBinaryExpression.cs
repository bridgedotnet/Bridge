using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 45 || {this}.ntype === 81")]
    public sealed class TypeBinaryExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Expression { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Type TypeOperand { get; private set; }

        internal extern TypeBinaryExpression();
    }
}