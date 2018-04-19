namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    public sealed class LabelTarget
    {
        [Bridge.Name("n")]
        public extern string Name { get; }

        [Bridge.Name("t")]
        public extern Type Type { get; }

        internal extern LabelTarget();
    }
}