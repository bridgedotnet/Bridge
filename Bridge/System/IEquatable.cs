using Bridge;

namespace System
{
    [External]
    [Convention(Target = ConventionTarget.Member, Member = ConventionMember.Method, Notation = Notation.LowerCamelCase)]
    [Reflectable]
    public interface IEquatable<T> : IBridgeClass
    {
        [Template("Bridge.equalsT({this}, {other}, {T})")]
        [Name("equalsT")]
        bool Equals(T other);
    }
}