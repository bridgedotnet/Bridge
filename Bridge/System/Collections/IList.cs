using Bridge;

namespace System.Collections
{
    [External]
    public interface IList : ICollection, IEnumerable
    {
        [Template("System.Array.add({this}, {item})")]
        void Add(object item);

        [Template("System.Array.clear({this})")]
        void Clear();

        [Template("System.Array.contains({this}, {item})")]
        bool Contains(object item);

        object this[int index]
        {
            [Template("System.Array.getItem({this}, {0})")]
            get;
            [Template("System.Array.setItem({this}, {0})")]
            set;
        }

        [Template("System.Array.indexOf({this}, {item}, 0, null)")]
        int IndexOf(object item);

        [Template("System.Array.insert({this}, {index}, {item})")]
        void Insert(int index, object item);

        [Template("System.Array.removeAt({this}, {index})")]
        void RemoveAt(int index);

        [Template("System.Array.remove({this}, {item})")]
        bool Remove(object item);

        /// <summary>
        /// Gets a value indicating whether the IList is read-only.
        /// </summary>
        bool IsReadOnly
        {
            [Template("System.Array.getIsReadOnly({this})")]
            get;
        }
    }
}