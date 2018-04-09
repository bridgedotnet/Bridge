using System.Collections.ObjectModel;
using System.Reflection;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 59")]
    public sealed class SwitchExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression SwitchValue { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<SwitchCase> Cases { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression DefaultBody { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern MethodInfo Comparison { get; private set; }

        internal extern SwitchExpression();
    }
}