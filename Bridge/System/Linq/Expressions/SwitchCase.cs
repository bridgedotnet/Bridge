using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    public sealed class SwitchCase
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ReadOnlyCollection<Expression> TestValues { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Body { get; private set; }

        internal extern SwitchCase();
    }
}