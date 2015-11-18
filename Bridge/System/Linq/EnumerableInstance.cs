using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System.Linq
{
    [External]
    [IgnoreGeneric]
    public class EnumerableInstance<TElement> : IEnumerable<TElement>
    {
        internal EnumerableInstance()
        {
        }

        public IEnumerator<TElement> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }

        public TElement Aggregate(Func<TElement, TElement, TElement> func)
        {
            return default(TElement);
        }

        public TAccumulate Aggregate<TAccumulate>(TAccumulate seed, Func<TAccumulate, TElement, TAccumulate> func)
        {
            return default(TAccumulate);
        }

        public TResult Aggregate<TAccumulate, TResult>(TAccumulate seed, Func<TAccumulate, TElement, TAccumulate> func,
            Func<TAccumulate, TResult> resultSelector)
        {
            return default(TResult);
        }

        public bool All(Func<TElement, bool> predicate)
        {
            return false;
        }

        public EnumerableInstance<TElement> Alternate(TElement value)
        {
            return null;
        }

        public bool Any()
        {
            return false;
        }

        public bool Any(Func<TElement, bool> predicate)
        {
            return false;
        }

        public double Average(Func<TElement, int> selector)
        {
            return 0;
        }

        public double Average(Func<TElement, long> selector)
        {
            return 0;
        }

        public float Average(Func<TElement, float> selector)
        {
            return 0;
        }

        public double Average(Func<TElement, double> selector)
        {
            return 0;
        }

        public decimal Average(Func<TElement, decimal> selector)
        {
            return 0;
        }

        public EnumerableInstance<TElement[]> Buffer(int count)
        {
            return null;
        }

        public EnumerableInstance<TElement> CascadeBreadthFirst(Func<TElement, IEnumerable<TElement>> func)
        {
            return null;
        }

        public EnumerableInstance<TResult> CascadeBreadthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TResult> CascadeBreadthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, int, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TElement> CascadeDepthFirst(Func<TElement, IEnumerable<TElement>> func)
        {
            return null;
        }

        public EnumerableInstance<TResult> CascadeDepthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TResult> CascadeDepthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, int, TResult> resultSelector)
        {
            return null;
        }

        [Template("{this}.select(function(x) {{ return Bridge.cast(x, {TResult}); }})")]
        public EnumerableInstance<TResult> Cast<TResult>()
        {
            return null;
        }

        public EnumerableInstance<TElement> CatchError(Action<Exception> action)
        {
            return null;
        }

        public EnumerableInstance<TElement> Concat(IEnumerable<TElement> other)
        {
            return null;
        }

        public bool Contains(TElement value)
        {
            return false;
        }

        public bool Contains(TElement value, IEqualityComparer<TElement> comparer)
        {
            return false;
        }

        public int Count()
        {
            return 0;
        }

        public int Count(Func<TElement, bool> predicate)
        {
            return 0;
        }

        [Template("{this}.defaultIfEmpty(Bridge.getDefaultValue({TElement}))")]
        public EnumerableInstance<TElement> DefaultIfEmpty()
        {
            return null;
        }

        public EnumerableInstance<TElement> DefaultIfEmpty(TElement defaultValue)
        {
            return null;
        }

        public EnumerableInstance<TElement> Distinct()
        {
            return null;
        }

        public EnumerableInstance<TElement> Distinct(IEqualityComparer<TElement> comparer)
        {
            return null;
        }

        public EnumerableInstance<TElement> DoAction(Action<TElement> action)
        {
            return null;
        }

        public EnumerableInstance<TElement> DoAction(Action<TElement, int> action)
        {
            return null;
        }

        public TElement ElementAt(int index)
        {
            return default(TElement);
        }

        [Template("{this}.elementAtOrDefault({index}, Bridge.getDefaultValue({TElement}))")]
        public TElement ElementAtOrDefault(int index)
        {
            return default(TElement);
        }

        public TElement ElementAtOrDefault(int index, TElement defaultValue)
        {
            return default(TElement);
        }

        public EnumerableInstance<TElement> Except(IEnumerable<TElement> other)
        {
            return null;
        }

        public EnumerableInstance<TElement> Except(IEnumerable<TElement> other, IEqualityComparer<TElement> comparer)
        {
            return null;
        }

        public EnumerableInstance<TElement> FinallyAction(Action action)
        {
            return null;
        }

        public TElement First()
        {
            return default(TElement);
        }

        public TElement First(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        [Template("{this}.firstOrDefault(null, Bridge.getDefaultValue({TElement}))")]
        public TElement FirstOrDefault()
        {
            return default(TElement);
        }

        [Template("{this}.firstOrDefault(null, {defaultValue})")]
        public TElement FirstOrDefault(TElement defaultValue)
        {
            return default(TElement);
        }

        [Template("{this}.firstOrDefault({predicate}, Bridge.getDefaultValue({TElement}))")]
        public TElement FirstOrDefault(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        [Template("{this}.firstOrDefault({predicate}, {defaultValue})")]
        public TElement FirstOrDefault(Func<TElement, bool> predicate, TElement defaultValue)
        {
            return default(TElement);
        }

        public EnumerableInstance<object> Flatten()
        {
            return null;
        }

        public void Force()
        {
        }

        public void ForEach(Action<TElement> action)
        {
        }

        public void ForEach(Func<TElement, bool> action)
        {
        }

        public void ForEach(Action<TElement, int> action)
        {
        }

        public void ForEach(Func<TElement, int, bool> action)
        {
        }

        public EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        [Template("{this}.groupBy({keySelector}, null, null, {comparer})")]
        public EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector)
        {
            return null;
        }

        [Template("{this}.groupBy({keySelector}, null, {resultSelector})")]
        public EnumerableInstance<TResult> GroupBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
        {
            return null;
        }

        [Template("{this}.groupBy({keySelector}, {elementSelector}, null, {comparer})")]
        public EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<TResult> GroupBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
        {
            return null;
        }

        [Template("{this}.groupBy({keySelector}, null, {resultSelector}, {comparer})")]
        public EnumerableInstance<TResult> GroupBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<TResult> GroupBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comperer)
        {
            return null;
        }

        public EnumerableInstance<TResult> GroupJoin<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, IEnumerable<TInner>, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TResult> GroupJoin<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, IEnumerable<TInner>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public int IndexOf(TElement item)
        {
            return 0;
        }

        public int IndexOf(TElement item, Func<TElement, bool> predicate)
        {
            return 0;
        }

        public int IndexOf(TElement item, IEqualityComparer<TElement> comparer)
        {
            return 0;
        }

        public EnumerableInstance<TElement> Insert(int index, IEnumerable<TElement> other)
        {
            return null;
        }

        public EnumerableInstance<TResult> Join<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, TInner, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TResult> Join<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, TInner, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public TElement Last()
        {
            return default(TElement);
        }

        public TElement Last(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        public int LastIndexOf(TElement item)
        {
            return 0;
        }

        public int LastIndexOf(TElement item, Func<TElement, bool> predicate)
        {
            return 0;
        }

        public int LastIndexOf(TElement item, IEqualityComparer<TElement> comparer)
        {
            return 0;
        }

        [Template("{this}.count()")]
        public static long LongCount<TSource>()
        {
            return default(long);
        }

        [Template("{this}.count({predicate})")]
        public static long LongCount<TSource>(Func<TSource, bool> predicate)
        {
            return default(long);
        }

        [Template("{this}.lastOrDefault(null, Bridge.getDefaultValue({TElement}))")]
        public TElement LastOrDefault()
        {
            return default(TElement);
        }

        [Template("{this}.lastOrDefault(null, {defaultValue})")]
        public TElement LastOrDefault(TElement defaultValue)
        {
            return default(TElement);
        }

        [Template("{this}.lastOrDefault({predicate}, Bridge.getDefaultValue({TElement}))")]
        public TElement LastOrDefault(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        [Template("{this}.lastOrDefault({predicate}, {defaultValue})")]
        public TElement LastOrDefault(Func<TElement, bool> predicate, TElement defaultValue)
        {
            return default(TElement);
        }

        public EnumerableInstance<TResult> LetBind<TResult>(Func<IEnumerable<TElement>, IEnumerable<TResult>> func)
        {
            return null;
        }

        public static TSource Max<TSource>()
        {
            return default(TSource);
        }

        public static TResult Max<TSource, TResult>(Func<TSource, TResult> selector)
        {
            return default(TResult);
        }

        public int Max(Func<TElement, int> selector)
        {
            return 0;
        }

        public long Max(Func<TElement, long> selector)
        {
            return 0;
        }

        public float Max(Func<TElement, float> selector)
        {
            return 0;
        }

        public double Max(Func<TElement, double> selector)
        {
            return 0;
        }

        public decimal Max(Func<TElement, decimal> selector)
        {
            return 0;
        }

        public TElement MaxBy(Func<TElement, int> selector)
        {
            return default(TElement);
        }

        public TElement MaxBy(Func<TElement, long> selector)
        {
            return default(TElement);
        }

        public TElement MaxBy(Func<TElement, float> selector)
        {
            return default(TElement);
        }

        public TElement MaxBy(Func<TElement, double> selector)
        {
            return default(TElement);
        }

        public TElement MaxBy(Func<TElement, decimal> selector)
        {
            return default(TElement);
        }

        public EnumerableInstance<TElement> Memoize()
        {
            return null;
        }

        public static TSource Min<TSource>()
        {
            return default(TSource);
        }

        public static TResult Min<TSource, TResult>(Func<TSource, TResult> selector)
        {
            return default(TResult);
        }

        public int Min(Func<TElement, int> selector)
        {
            return 0;
        }

        public long Min(Func<TElement, long> selector)
        {
            return 0;
        }

        public float Min(Func<TElement, float> selector)
        {
            return 0;
        }

        public double Min(Func<TElement, double> selector)
        {
            return 0;
        }

        public decimal Min(Func<TElement, decimal> selector)
        {
            return 0;
        }

        public TElement MinBy(Func<TElement, int> selector)
        {
            return default(TElement);
        }

        public TElement MinBy(Func<TElement, long> selector)
        {
            return default(TElement);
        }

        public TElement MinBy(Func<TElement, float> selector)
        {
            return default(TElement);
        }

        public TElement MinBy(Func<TElement, double> selector)
        {
            return default(TElement);
        }

        public TElement MinBy(Func<TElement, decimal> selector)
        {
            return default(TElement);
        }

        [Template("{this}.ofType({TResult})")]
        public EnumerableInstance<TResult> OfType<TResult>()
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderBy()
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderBy<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer)
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderByDescending()
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderByDescending<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        public OrderedEnumerable<TElement> OrderByDescending<TKey>(Func<TElement, TKey> keySelector,
            IComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<TResult> Pairwise<TResult>(Func<TElement, TElement, TResult> selector)
        {
            return null;
        }

        public EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        [Template("{this}.partitionBy({keySelector}, null, null, {comparer})")]
        public EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TKey, TSource>(
            Func<TSource, TKey> keySelector, Func<TSource, TSource> elementSelector)
        {
            return null;
        }

        [Template("{this}.partitionBy({keySelector}, null, {resultSelector})")]
        public EnumerableInstance<TResult> PartitionBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
        {
            return null;
        }

        [Template("{this}.partitionBy({keySelector}, {elementSelector}, null, {comparer})")]
        public EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TKey, TSource>(
            Func<TSource, TKey> keySelector, Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<TResult> PartitionBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
        {
            return null;
        }

        [Template("{this}.partitionBy({keySelector}, null, {resultSelector}, {comparer})")]
        public EnumerableInstance<TResult> PartitionBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public EnumerableInstance<TResult> PartitionBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comperer)
        {
            return null;
        }

        public EnumerableInstance<TElement> Reverse()
        {
            return null;
        }

        public static EnumerableInstance<T> Scan<T>(Func<T, T, T> func)
        {
            return null;
        }

        public EnumerableInstance<TAccumulate> Scan<TAccumulate>(TAccumulate seed,
            Func<TAccumulate, TElement, TAccumulate> func)
        {
            return null;
        }

        public EnumerableInstance<TResult> Select<TResult>(Func<TElement, TResult> selector)
        {
            return null;
        }

        public EnumerableInstance<TResult> Select<TResult>(Func<TElement, int, TResult> selector)
        {
            return null;
        }

        public EnumerableInstance<TResult> SelectMany<TResult>(Func<TElement, IEnumerable<TResult>> selector)
        {
            return null;
        }

        public EnumerableInstance<TResult> SelectMany<TResult>(Func<TElement, int, IEnumerable<TResult>> selector)
        {
            return null;
        }

        public EnumerableInstance<TResult> SelectMany<TCollection, TResult>(
            Func<TElement, IEnumerable<TCollection>> collectionSelector,
            Func<TElement, TCollection, TResult> resultSelector)
        {
            return null;
        }

        public EnumerableInstance<TResult> SelectMany<TCollection, TResult>(
            Func<TElement, int, IEnumerable<TCollection>> collectionSelector,
            Func<TElement, TCollection, TResult> resultSelector)
        {
            return null;
        }

        public bool SequenceEqual(IEnumerable<TElement> other)
        {
            return false;
        }

        public bool SequenceEqual<TKey>(IEnumerable<TElement> other, Func<TElement, TKey> compareSelector)
        {
            return false;
        }

        public EnumerableInstance<TElement> Share()
        {
            return null;
        }

        public EnumerableInstance<TElement> Shuffle()
        {
            return null;
        }

        public TElement Single()
        {
            return default(TElement);
        }

        public TElement Single(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        [Template("{this}.singleOrDefault(null, Bridge.getDefaultValue({TElement}))")]
        public TElement SingleOrDefault()
        {
            return default(TElement);
        }

        [Template("{this}.singleOrDefault(null, {defaultValue})")]
        public TElement SingleOrDefault(TElement defaultValue)
        {
            return default(TElement);
        }

        [Template("{this}.singleOrDefault({predicate}, Bridge.getDefaultValue({TElement}))")]
        public TElement SingleOrDefault(Func<TElement, bool> predicate)
        {
            return default(TElement);
        }

        [Template("{this}.singleOrDefault({predicate}, {defaultValue})")]
        public TElement SingleOrDefault(Func<TElement, bool> predicate, TElement defaultValue)
        {
            return default(TElement);
        }

        public EnumerableInstance<TElement> Skip(int count)
        {
            return null;
        }

        public EnumerableInstance<TElement> SkipWhile(Func<TElement, bool> predicate)
        {
            return null;
        }

        public EnumerableInstance<TElement> SkipWhile(Func<TElement, int, bool> predicate)
        {
            return null;
        }

        public int Sum(Func<TElement, int> selector)
        {
            return 0;
        }

        public long Sum(Func<TElement, long> selector)
        {
            return 0;
        }

        public float Sum(Func<TElement, float> selector)
        {
            return 0;
        }

        public double Sum(Func<TElement, double> selector)
        {
            return 0;
        }

        public decimal Sum(Func<TElement, decimal> selector)
        {
            return 0;
        }

        public EnumerableInstance<TElement> Take(int count)
        {
            return null;
        }

        public EnumerableInstance<TElement> TakeExceptLast()
        {
            return null;
        }

        public EnumerableInstance<TElement> TakeExceptLast(int count)
        {
            return null;
        }

        public EnumerableInstance<TElement> TakeFromLast(int count)
        {
            return null;
        }

        public EnumerableInstance<TElement> TakeWhile(Func<TElement, bool> predicate)
        {
            return null;
        }

        public EnumerableInstance<TElement> TakeWhile(Func<TElement, int, bool> predicate)
        {
            return null;
        }

        public static IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(Func<TSource, TKey> keySelector)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        public static IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        public static IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(Func<TSource, TKey> keySelector)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        public static IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        public TElement[] ToArray()
        {
            return null;
        }

        [Template("{this}.toDictionary({keySelector}, null, {TKey}, {TElement})")]
        public IDictionary<TKey, TElement> ToDictionary<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        [Template("{this}.toDictionary({keySelector}, null, {TKey}, {TElement}, {comparer})")]
        public IDictionary<TKey, TElement> ToDictionary<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        [Template("{this}.toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue})")]
        public IDictionary<TKey, TValue> ToDictionary<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> elementSelector)
        {
            return null;
        }

        [Template("{this}.toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue}, {comparer})")]
        public IDictionary<TKey, TValue> ToDictionary<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public string ToJoinedString()
        {
            return null;
        }

        public string ToJoinedString(string separator)
        {
            return null;
        }

        public string ToJoinedString(string separator, Func<TElement, string> selector)
        {
            return null;
        }

        [Template("{this}.toList({TElement})")]
        public List<TElement> ToList()
        {
            return null;
        }

        public Lookup<TKey, TElement> ToLookup<TKey>(Func<TElement, TKey> keySelector)
        {
            return null;
        }

        [Template("{this}.toLookup({keySelector}, null, {comparer})")]
        public Lookup<TKey, TElement> ToLookup<TKey>(Func<TElement, TKey> keySelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public Lookup<TKey, TSource> ToLookup<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector)
        {
            return null;
        }

        public Lookup<TKey, TSource> ToLookup<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        public object ToObject<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> valueSelector)
        {
            return null;
        }

        public EnumerableInstance<TElement> Trace()
        {
            return null;
        }

        public EnumerableInstance<TElement> Trace(string message)
        {
            return null;
        }

        public EnumerableInstance<TElement> Trace(string message, Func<TElement, string> selector)
        {
            return null;
        }

        public EnumerableInstance<TElement> Union(IEnumerable<TElement> other)
        {
            return null;
        }

        public EnumerableInstance<TElement> Union(IEnumerable<TElement> other, IEqualityComparer<TElement> comparer)
        {
            return null;
        }

        public EnumerableInstance<TElement> Where(Func<TElement, bool> predicate)
        {
            return null;
        }

        public EnumerableInstance<TElement> Where(Func<TElement, int, bool> predicate)
        {
            return null;
        }

        public EnumerableInstance<TResult> Zip<TOther, TResult>(IEnumerable<TOther> other,
            Func<TElement, TOther, TResult> selector)
        {
            return null;
        }

        public EnumerableInstance<TResult> Zip<TOther, TResult>(IEnumerable<TOther> other,
            Func<TElement, TOther, int, TResult> selector)
        {
            return null;
        }
    }
}
