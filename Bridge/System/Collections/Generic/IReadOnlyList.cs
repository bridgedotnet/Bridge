using Bridge;

namespace System.Collections.Generic
{
    [External]
    public interface IReadOnlyCollection<T> : IEnumerable<T>
    {
        int Count
        {
            [Template("System.Array.getCount({this}, {T})")]
            get;
        }
    }

    [External]
    public interface IReadOnlyList<T> : IReadOnlyCollection<T>
    {
        T this[int index]
        {
            [Template("System.Array.getItem({this}, {0}, {T})")]
            get;
        }
    }
}