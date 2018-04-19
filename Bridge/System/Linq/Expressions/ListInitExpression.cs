using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 22")]
    public sealed class ListInitExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern NewExpression NewExpression { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<ElementInit> Initializers { get; private set; }

        internal extern ListInitExpression();
    }
}