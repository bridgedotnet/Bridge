using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface ICollection<T> : IEnumerable<T>, IBridgeClass
    {
        int Count
        {
            [Template("System.Array.getCount({this}, {T})")]
            get;
        }

        [Template("System.Array.add({this}, {item}, {T})")]
        void Add(T item);

        [Template("System.Array.clear({this}, {T})")]
        void Clear();

        [Template("System.Array.contains({this}, {item}, {T})")]
        bool Contains(T item);

        [Template("System.Array.remove({this}, {item}, {T})")]
        bool Remove(T item);
    }
}