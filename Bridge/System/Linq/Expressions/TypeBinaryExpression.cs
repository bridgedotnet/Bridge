namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 45 || {this}.ntype === 81")]
    public sealed class TypeBinaryExpression : Expression
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Expression { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Type TypeOperand { get; private set; }

        internal extern TypeBinaryExpression();
    }
}