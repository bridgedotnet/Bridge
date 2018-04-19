using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 31")]
    public sealed class NewExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public new extern ConstructorInfo Constructor { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<Expression> Arguments { get; private set; }

        [Bridge.Name("m")]
        public extern ReadOnlyCollection<MemberInfo> Members { get; private set; }

        internal extern NewExpression();
    }
}