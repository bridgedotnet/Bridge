using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public sealed class SwitchCase
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<Expression> TestValues { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Body { get; private set; }

        internal extern SwitchCase();
    }
}