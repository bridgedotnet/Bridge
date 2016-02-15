using Bridge;
using System.Collections.Generic;

namespace System.Linq
{
    [External]
    [IgnoreGeneric]
    public interface IOrderedEnumerable<TSource> : IEnumerable<TSource>
    {
        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector);

        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);

        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector);

        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);
    }

    [External]
    [IgnoreGeneric]
    public class OrderedEnumerable<TElement> : EnumerableInstance<TElement>, IOrderedEnumerable<TElement>
    {
        internal OrderedEnumerable()
        {
        }

        extern IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenBy<TKey>(Func<TElement, TKey> keySelector);

        extern IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer);

        extern IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenByDescending<TKey>(Func<TElement, TKey> keySelector);

        extern IOrderedEnumerable<TElement> IOrderedEnumerable<TElement>.ThenByDescending<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer);

        public extern OrderedEnumerable<TElement> ThenBy<TKey>(Func<TElement, TKey> keySelector);

        public extern OrderedEnumerable<TElement> ThenBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer);

        public extern OrderedEnumerable<TElement> ThenByDescending<TKey>(Func<TElement, TKey> keySelector);

        public extern OrderedEnumerable<TElement> ThenByDescending<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer);
    }
}