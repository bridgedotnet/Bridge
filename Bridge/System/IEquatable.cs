using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IEquatable<in T> : IBridgeClass
    {
        [Template("Bridge.equalsT({this}, {other}, {T})")]
        [Name("equalsT")]
        bool Equals(T other);
    }
}