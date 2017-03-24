using Bridge;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 23")]
    public sealed class MemberExpression : Expression
    {
        [Name(true)] //[Field]
        public extern MemberInfo Member { get; private set; }

        [Name(true)] //[Field]
        public extern Expression Expression { get; private set; }

        internal extern MemberExpression();
    }
}