using Bridge;

namespace System
{
    [External]
    public interface IComparable : IBridgeClass
    {
        [Template("Bridge.compare({this}, {obj})")]
        int CompareTo(Object obj);
    }

    [External]
    public interface IComparable<in T> : IBridgeClass
    {
        [Template("Bridge.compare({this}, {other}, false, {T})")]
        int CompareTo(T other);
    }
}