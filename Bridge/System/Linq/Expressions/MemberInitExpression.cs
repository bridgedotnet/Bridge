using Bridge;
using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 24")]
    public sealed class MemberInitExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern NewExpression NewExpression { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ReadOnlyCollection<MemberBinding> Bindings { get; private set; }

        internal extern MemberInitExpression();
    }
}