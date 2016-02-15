using Bridge;

namespace System
{
    [External]
    [Namespace("Bridge")]
    public interface IComparable : IBridgeClass
    {
        [Template("Bridge.compare({this}, {obj})")]
        int CompareTo(Object obj);
    }

    [External]
    [Namespace("Bridge")]
    public interface IComparable<in T> : IBridgeClass
    {
        [Template("Bridge.compare({this}, {other})")]
        int CompareTo(T other);
    }
}