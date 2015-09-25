using System.Collections.Generic;
using Bridge;
using System.Collections;

namespace System.Linq
{
    [Ignore]
    [IgnoreGeneric]
    public interface ILookup<TKey, TElement> : IEnumerable<Grouping<TKey, TElement>>
    {
        int Count
        {
            [Template("count()")]
            get;
        }

        EnumerableInstance<TElement> this[TKey key]
        {
            [Template("get()")]
            get;
        }

        bool Contains(TKey key);
    }

    [Ignore]
    [IgnoreGeneric]
    public class Lookup<TKey, TElement> : ILookup<TKey, TElement>
    {
        internal Lookup()
        {
        }

        public int Count
        {
            get
            {
                return 0;
            }
        }

        public EnumerableInstance<TElement> this[TKey key]
        {
            get
            {
                return null;
            }
        }

        public bool Contains(TKey key)
        {
            return false;
        }

        public IEnumerator<Grouping<TKey, TElement>> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}