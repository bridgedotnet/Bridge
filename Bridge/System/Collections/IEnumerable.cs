using Bridge;

namespace System.Collections
{
    [External]
    [Namespace("Bridge")]
    public interface IEnumerable : IBridgeClass
    {
        [Template("Bridge.getEnumerator({this})")]
        IEnumerator GetEnumerator();
    }
}