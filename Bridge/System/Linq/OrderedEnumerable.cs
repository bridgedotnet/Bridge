using System.Collections.Generic;
using Bridge;

namespace System.Linq
{
    [Ignore]
    [IgnoreGeneric]
    public interface IOrderedEnumerable<TSource> : IEnumerable<TSource>
    {
        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector);
        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);
        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector);
        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);
    }

    [Ignore]
    [IgnoreGeneric]
    public class OrderedEnumerable<TElement> : EnumerableInstance<TElement>, IOrderedEnumerable<TElement>
    {
        internal OrderedEnumerable()
        {
        }

        IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenBy<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer)
        {
            return null;
        }

        IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenByDescending<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenByDescending<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer)
        {
            return null;
        }

        public OrderedEnumerable<TElement> ThenBy<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        public OrderedEnumerable<TElement> ThenBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer)
        {
            return null;
        }

        public OrderedEnumerable<TElement> ThenByDescending<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        public OrderedEnumerable<TElement> ThenByDescending<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer)
        {
            return null;
        }
    }
}