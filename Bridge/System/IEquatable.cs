using Bridge;

namespace System
{
    [External]
    public interface IEquatable<in T> : IBridgeClass
    {
        [Template("Bridge.equalsT({this}, {other}, {T})")]
        [Name("equalsT")]
        bool Equals(T other);
    }
}