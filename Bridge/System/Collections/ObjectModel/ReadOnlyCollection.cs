using Bridge;
using System.Collections.Generic;

namespace System.Collections.ObjectModel
{
    [External]
    [Namespace("Bridge")]
    public class ReadOnlyCollection<T> : IList<T>
    {
        public ReadOnlyCollection(IList<T> list)
        {
        }

        public int Count
        {
            get;
            private set;
        }

        public T this[int index]
        {
            [Template("get({0})")]
            get
            {
                return default(T);
            }
        }

        public extern bool Contains(T value);

        public extern IEnumerator<T> GetEnumerator();

        public extern int IndexOf(T value);

        T IList<T>.this[int index]
        {
            [Template("get({0})")]
            get
            {
                return default(T);
            }
            set
            {
            }
        }

        extern void ICollection<T>.Add(T value);

        extern void ICollection<T>.Clear();

        extern void IList<T>.Insert(int index, T value);

        extern bool ICollection<T>.Remove(T value);

        extern void IList<T>.RemoveAt(int index);

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}