using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 22")]
    public sealed class ListInitExpression : Expression
    {
        [Name(true)] //[Field]
        public extern NewExpression NewExpression { get; private set; }

        [Name(true)] //[Field]
        public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

        internal extern ListInitExpression();
    }
}