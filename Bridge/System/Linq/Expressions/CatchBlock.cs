namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public sealed class CatchBlock
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern ParameterExpression Variable { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Type Test { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Body { get; private set; }

        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Filter { get; private set; }

        internal extern CatchBlock();
    }
}