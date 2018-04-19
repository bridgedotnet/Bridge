using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 23")]
    public sealed class MemberExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern MemberInfo Member { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Expression { get; private set; }

        internal extern MemberExpression();
    }
}