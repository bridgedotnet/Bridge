using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System.Linq
{
    [External]
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

    [External]
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

        public extern bool Contains(TKey key);

        public extern IEnumerator<Grouping<TKey, TElement>> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}