using Bridge;

namespace System.Collections.Generic
{
    [External]
    [Namespace("Bridge")]
    public class List<T> : IList<T>, IBridgeClass, IAccessorsIndexer
    {
        public List()
        {
        }

        public List(int capacity)
            : this()
        {
        }

        public List(IEnumerable<T> items)
        {
        }

        public T this[int index]
        {
            get
            {
                return default(T);
            }
            set
            {
            }
        }

        public int Count
        {
            get
            {
                return 0;
            }
        }

        private T Items(int index)
        {
            return default(T);
        }

        public T Get(int index)
        {
            return default(T);
        }

        public void Set(int index, T value)
        {
        }

        public void Add(T item)
        {
        }

        public void AddRange(IEnumerable<T> items)
        {
        }

        public void Clear()
        {
        }

        public bool Contains(T item)
        {
            return false;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }

        public IEnumerator<T> GetEnumerator()
        {
            return null;
        }

        public List<T> GetRange(int index)
        {
            return null;
        }

        public List<T> GetRange(int index, int count)
        {
            return null;
        }

        public int IndexOf(T item)
        {
            return 0;
        }

        public int IndexOf(T item, int startIndex)
        {
            return 0;
        }

        public void Insert(int index, T item)
        {
        }

        public void InsertRange(int index, IEnumerable<T> items)
        {
        }

        public string Join()
        {
            return null;
        }

        public string Join(string delimiter)
        {
            return null;
        }

        public int LastIndexOf(object item)
        {
            return 0;
        }

        public int LastIndexOf(object item, int fromIndex)
        {
            return 0;
        }

        public bool Remove(T item)
        {
            return false;
        }

        public void RemoveAt(int index)
        {
        }

        public List<T> RemoveRange(int index, int count)
        {
            return null;
        }

        public void Reverse()
        {
        }

        public List<T> Slice(int start)
        {
            return null;
        }

        public List<T> Slice(int start, int end)
        {
            return null;
        }

        public void Sort()
        {
        }

        public void Sort(Func<T, T, int> comparison)
        {
        }

        [Template("sort(Bridge.fn.bind({comparer}, {comparer}.compare))")]
        public void Sort(IComparer<T> comparer)
        {
        }

        public void Splice(int start, int deleteCount)
        {
        }

        public void Splice(int start, int deleteCount, IEnumerable<T> itemsToInsert)
        {
        }

        public void Unshift(params T[] items)
        {
        }

        public T[] ToArray()
        {
            return null;
        }

        public extern int BinarySearch(T value);

        public extern int BinarySearch(int index, int length, T value);

        public extern int BinarySearch(T value, IComparer<T> comparer);

        public extern int BinarySearch(int index, int length, T value, IComparer<T> comparer);
    }
}
