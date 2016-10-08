using Bridge;
using System.Collections.Generic;

namespace System.Collections.ObjectModel
{
    [External]
    public class ReadOnlyCollection<T> : IList<T>, IReadOnlyList<T>
    {
        public extern ReadOnlyCollection(IList<T> list);

        public extern int Count
        {
            get;
        }

        /// <summary>
        /// Gets a value indicating whether the ReadOnlyCollection is read-only.
        /// </summary>
        extern bool ICollection<T>.IsReadOnly
        {
            get;
        }

        [AccessorsIndexer]
        public extern T this[int index]
        {
            [Name("get")]
            get;
        }

        public extern bool Contains(T value);

        public extern IEnumerator<T> GetEnumerator();

        public extern int IndexOf(T value);

        extern T IList<T>.this[int index]
        {
            [Name("get")]
            get;
            set;
        }

        extern void ICollection<T>.Add(T value);

        extern void ICollection<T>.Clear();

        public extern void CopyTo(T[] array, int arrayIndex);

        extern void IList<T>.Insert(int index, T value);

        extern bool ICollection<T>.Remove(T value);

        extern void IList<T>.RemoveAt(int index);

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}