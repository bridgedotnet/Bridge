using System.Collections.ObjectModel;

namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 32 || {this}.ntype === 33")]
    public sealed class NewArrayExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ReadOnlyCollection<Expression> Expressions { get; private set; }

        internal extern NewArrayExpression();
    }
}