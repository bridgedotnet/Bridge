using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Convention(Type = NotationType.Member, Member = NotationMember.Method, Notation = Notation.LowerCamelCase)]
    public interface IList<T> : ICollection<T>
    {
        T this[int index]
        {
            [Template("System.Array.getItem({this}, {0}, {T})")]
            get;
            [Template("System.Array.setItem({this}, {0}, {T})")]
            set;
        }

        [Template("System.Array.indexOf({this}, {item}, 0, null, {T})")]
        int IndexOf(T item);

        [Template("System.Array.insert({this}, {index}, {item}, {T})")]
        void Insert(int index, T item);

        [Template("System.Array.removeAt({this}, {index}, {T})")]
        void RemoveAt(int index);
    }
}