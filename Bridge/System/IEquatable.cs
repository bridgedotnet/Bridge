namespace System
{
    [Bridge.External]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.Reflectable]
    public interface IEquatable<T> : Bridge.IBridgeClass
    {
        [Bridge.Template("Bridge.equalsT({this}, {other}, {T})")]
        [Bridge.Name("equalsT")]
        bool Equals(T other);
    }
}