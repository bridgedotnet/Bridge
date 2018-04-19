namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 8")]
    public sealed class ConditionalExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Test { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression IfTrue { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression IfFalse { get; private set; }

        internal extern ConditionalExpression();
    }
}