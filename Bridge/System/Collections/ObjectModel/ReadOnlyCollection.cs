using Bridge;
using System.Collections.Generic;
using System.Runtime.CompilerServices;

namespace System.Collections.ObjectModel
{
    [Ignore]
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

        public bool Contains(T value)
        {
            return false;
        }

        public IEnumerator<T> GetEnumerator()
        {
            return null;
        }

        public int IndexOf(T value)
        {
            return 0;
        }

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

        void ICollection<T>.Add(T value)
        {
        }

        void ICollection<T>.Clear()
        {
        }

        void IList<T>.Insert(int index, T value)
        {
        }

        bool ICollection<T>.Remove(T value)
        {
            return false;
        }

        void IList<T>.RemoveAt(int index)
        {
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}