using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public interface IEquatable<in T> : IBridgeClass
    {
        [Template("Bridge.equalsT({this}, {other})")]
        [Name("equalsT")]
        bool Equals(T other);
    }
}