namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 56")]
    public sealed class LabelExpression : Expression
    {
        [Bridge.Name("dv")]
        public extern Expression DefaultValue { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern LabelTarget Target { get; private set; }

        internal extern LabelExpression();
    }
}