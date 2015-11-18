using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public interface ICollection<T> : IEnumerable<T>, IBridgeClass
    {
        int Count
        {
            [Template("Bridge.Array.getCount({this})")]
            get;
        }

        [Template("Bridge.Array.add({this}, {item})")]
        void Add(T item);

        [Template("Bridge.Array.clear({this})")]
        void Clear();

        [Template("Bridge.Array.contains({this}, {item})")]
        bool Contains(T item);

        [Template("Bridge.Array.remove({this}, {item})")]
        bool Remove(T item);
    }
}
