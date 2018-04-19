namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 9")]
    public sealed class ConstantExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern object Value { get; private set; }

        internal extern ConstantExpression();
    }
}