namespace System
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Name("Function")]
    [Bridge.External]
    public delegate int Comparison<in T>(T x, T y);
}