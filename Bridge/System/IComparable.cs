using Bridge;

namespace System
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IComparable : IBridgeClass
    {
        [Template("Bridge.compare({this}, {obj})")]
        int CompareTo(Object obj);
    }

    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IComparable<in T> : IBridgeClass
    {
        [Template("Bridge.compare({this}, {other}, false, {T})")]
        int CompareTo(T other);
    }
}