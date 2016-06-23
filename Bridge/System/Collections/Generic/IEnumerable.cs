using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IEnumerable<out T> : IEnumerable, IBridgeClass
    {
        [Template("Bridge.getEnumerator({this}, \"$1\", {T})")]
        new IEnumerator<T> GetEnumerator();
    }
}