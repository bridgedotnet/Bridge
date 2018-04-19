using System.Collections.Generic;

namespace System.Linq
{
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    [Bridge.Convention(Target = Bridge.ConventionTarget.Member, Member = Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    public interface IOrderedEnumerable<TSource> : IEnumerable<TSource>
    {
        [Bridge.Template("thenBy({keySelector})")]
        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector);

        [Bridge.Template("thenBy({keySelector}, {comparer})")]
        IOrderedEnumerable<TSource> ThenBy<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);

        [Bridge.Template("thenByDescending({keySelector})")]
        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector);

        [Bridge.Template("thenByDescending({keySelector}, {comparer})")]
        IOrderedEnumerable<TSource> ThenByDescending<TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);
    }

    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.IgnoreGeneric]
    public class OrderedEnumerable<TElement> : EnumerableInstance<TElement>, IOrderedEnumerable<TElement>
    {
        internal extern OrderedEnumerable();

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