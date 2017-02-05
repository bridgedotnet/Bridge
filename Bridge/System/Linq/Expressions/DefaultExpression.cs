using Bridge;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 51")]
    public sealed class DefaultExpression : Expression
    {
        internal extern DefaultExpression();
    }
}