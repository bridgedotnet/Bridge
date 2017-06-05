using Bridge;

namespace System
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IComparable : IBridgeClass
    {
        [Template("Bridge.compare({this}, {obj})")]
        int CompareTo(Object obj);
    }

    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IComparable<in T> : IBridgeClass
    {
        [Template("Bridge.compare({this}, {other}, false, {T})")]
        int CompareTo(T other);
    }
}