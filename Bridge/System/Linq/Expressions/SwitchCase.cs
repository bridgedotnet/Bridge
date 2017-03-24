using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class SwitchCase
    {
        [Name(true)] //[Field]
        public extern ReadOnlyCollection<Expression> TestValues { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Body { get; private set; }

        internal extern SwitchCase();
    }
}