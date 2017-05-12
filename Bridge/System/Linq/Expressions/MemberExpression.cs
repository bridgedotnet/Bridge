using Bridge;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 23")]
    public sealed class MemberExpression : Expression
    {
        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern MemberInfo Member { get; private set; }

        [Convention(Notation.LowerCamelCase)] //[Field]
        public extern Expression Expression { get; private set; }

        internal extern MemberExpression();
    }
}