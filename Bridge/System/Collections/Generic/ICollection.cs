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

        /// <summary>
        /// Copies the elements of the ICollection to an Array, starting at a particular Array index.
        /// </summary>
        /// <param name="array">The one-dimensional Array that is the destination of the elements copied from ICollection.</param>
        /// <param name="arrayIndex">The zero-based index in array at which copying begins.</param>
        [Template("System.Array.copyTo({this}, {array}, {arrayIndex}, {T})")]
        void CopyTo(T[] array, int arrayIndex);

        [Template("System.Array.clear({this}, {T})")]
        void Clear();

        [Template("System.Array.contains({this}, {item}, {T})")]
        bool Contains(T item);

        [Template("System.Array.remove({this}, {item}, {T})")]
        bool Remove(T item);
    }
}