using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 59")]
    public sealed class SwitchExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression SwitchValue { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern ReadOnlyCollection<SwitchCase> Cases { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression DefaultBody { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern MethodInfo Comparison { get; private set; }

        internal extern SwitchExpression();
    }
}