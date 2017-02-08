using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 32 || {this}.ntype === 33")]
    public sealed class NewArrayExpression : Expression
    {
        [Field]
        public extern ReadOnlyCollection<Expression> Expressions { get; private set; }

        internal extern NewArrayExpression();
    }
}