using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 22")]
    public sealed class ListInitExpression : Expression
    {
        [Field]
        public extern NewExpression NewExpression { get; private set; }

        [Field]
        public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

        internal extern ListInitExpression();
    }
}