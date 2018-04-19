namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype == 50 && {this}.dtype === 0")]
    public sealed class DynamicMemberExpression : DynamicExpression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern string Member { get; private set; }

        internal extern DynamicMemberExpression();
    }
}