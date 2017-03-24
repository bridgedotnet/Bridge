using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 61")]
    public sealed class TryExpression : Expression
    {
        [Name(true)] //[Field]
        public extern Expression Body { get; private set; }

        [Name(true)] //[Field]
        public extern ReadOnlyCollection<CatchBlock> Handlers { get; private set; }

        [Name("finallyExpr")]
        public extern Expression Finally { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Fault { get; private set; }

        internal extern TryExpression();
    }
}