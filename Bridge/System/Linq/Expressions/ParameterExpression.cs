namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.ntype === 38")]
    public sealed class ParameterExpression : Expression
    {
        [Bridge.Name("n")]
        public extern string Name { get; private set; }

        internal extern ParameterExpression();
    }
}