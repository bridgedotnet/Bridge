using Bridge;
using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [External]
    [Name("Object")]
    [Cast("{this}.ntype === 31")]
    public sealed class NewExpression : Expression
    {
        [FieldProperty]
        public new extern ConstructorInfo Constructor { get; private set; }

        [FieldProperty]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        [FieldProperty]
        [Name("m")]
        public extern ReadOnlyCollection<MemberInfo> Members { get; private set; }

        internal extern NewExpression();
    }
}