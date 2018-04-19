namespace System.Linq.Expressions
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Name("System.Object")]
    [Bridge.Cast("{this}.btype === 0")]
    public sealed class MemberAssignment : MemberBinding
    {
        [Bridge.Convention(Bridge.Notation.CamelCase)]
        public extern Expression Expression { get; private set; }

        internal extern MemberAssignment();
    }
}