using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("System.Object")]
    [Cast("{this}.ntype === 31")]
    public sealed class NewExpression : Expression
    {
        [Field]
        public new extern ConstructorInfo Constructor { get; private set; }

        [Field]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        [Field]
        [Name("m")]
        public extern ReadOnlyCollection<MemberInfo> Members { get; private set; }

        internal extern NewExpression();
    }
}