using Bridge;
namespace System
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IEquatable<in T> : IBridgeClass
    {
        [Template("Bridge.equalsT({this}, {other})")]
        bool Equals(T other);
    }
}
