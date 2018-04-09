namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 53")]
    public sealed class GotoExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern GotoExpressionKind Kind { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Value { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern LabelTarget Target { get; private set; }

        internal extern GotoExpression();
    }
}