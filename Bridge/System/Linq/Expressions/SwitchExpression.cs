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
        [Name(true)] //[Field]
        public extern Expression SwitchValue { get; private set; }

        [Name(true)] //[Field]
        public extern ReadOnlyCollection<SwitchCase> Cases { get; private set; }

        [Name(true)] //[Field]
        public extern Expression DefaultBody { get; private set; }

        [Name(true)] //[Field]
        public extern MethodInfo Comparison { get; private set; }

        internal extern SwitchExpression();
    }
}