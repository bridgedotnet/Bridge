using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System.Linq
{
    [External]
    [IgnoreGeneric]
    public class EnumerableInstance<TElement> : IEnumerable<TElement>
    {
        internal extern EnumerableInstance();

        public extern IEnumerator<TElement> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();

        public extern TElement Aggregate(Func<TElement, TElement, TElement> func);

        public extern TAccumulate Aggregate<TAccumulate>(TAccumulate seed, Func<TAccumulate, TElement, TAccumulate> func);

        public extern TResult Aggregate<TAccumulate, TResult>(TAccumulate seed, Func<TAccumulate, TElement, TAccumulate> func,
            Func<TAccumulate, TResult> resultSelector);

        public extern bool All(Func<TElement, bool> predicate);

        public extern EnumerableInstance<TElement> Alternate(TElement value);

        public extern bool Any();

        public extern bool Any(Func<TElement, bool> predicate);

        public extern double Average(Func<TElement, int> selector);

        public extern double Average(Func<TElement, long> selector);

        public extern float Average(Func<TElement, float> selector);

        public extern double Average(Func<TElement, double> selector);

        [Template("{this}.average({selector}, System.Decimal.Zero)")]
        public extern decimal Average(Func<TElement, decimal> selector);

        public extern EnumerableInstance<TElement[]> Buffer(int count);

        public extern EnumerableInstance<TElement> CascadeBreadthFirst(Func<TElement, IEnumerable<TElement>> func);

        public extern EnumerableInstance<TResult> CascadeBreadthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, TResult> resultSelector);

        public extern EnumerableInstance<TResult> CascadeBreadthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, int, TResult> resultSelector);

        public extern EnumerableInstance<TElement> CascadeDepthFirst(Func<TElement, IEnumerable<TElement>> func);

        public extern EnumerableInstance<TResult> CascadeDepthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, TResult> resultSelector);

        public extern EnumerableInstance<TResult> CascadeDepthFirst<TResult>(Func<TElement, IEnumerable<TElement>> func,
            Func<TElement, int, TResult> resultSelector);

        [Template("{this}.select(function(x) {{ return Bridge.cast(x, {TResult}); }})")]
        public extern EnumerableInstance<TResult> Cast<TResult>();

        public extern EnumerableInstance<TElement> CatchError(Action<Exception> action);

        public extern EnumerableInstance<TElement> Concat(IEnumerable<TElement> other);

        public extern bool Contains(TElement value);

        public extern bool Contains(TElement value, IEqualityComparer<TElement> comparer);

        public extern int Count();

        public extern int Count(Func<TElement, bool> predicate);

        [Template("{this}.defaultIfEmpty({TElement:default})")]
        public extern EnumerableInstance<TElement> DefaultIfEmpty();

        public extern EnumerableInstance<TElement> DefaultIfEmpty(TElement defaultValue);

        public extern EnumerableInstance<TElement> Distinct();

        public extern EnumerableInstance<TElement> Distinct(IEqualityComparer<TElement> comparer);

        public extern EnumerableInstance<TElement> DoAction(Action<TElement> action);

        public extern EnumerableInstance<TElement> DoAction(Action<TElement, int> action);

        public extern TElement ElementAt(int index);

        [Template("{this}.elementAtOrDefault({index}, {TElement:default})")]
        public extern TElement ElementAtOrDefault(int index);

        public extern TElement ElementAtOrDefault(int index, TElement defaultValue);

        public extern EnumerableInstance<TElement> Except(IEnumerable<TElement> other);

        public extern EnumerableInstance<TElement> Except(IEnumerable<TElement> other, IEqualityComparer<TElement> comparer);

        public extern EnumerableInstance<TElement> FinallyAction(Action action);

        public extern TElement First();

        public extern TElement First(Func<TElement, bool> predicate);

        [Template("{this}.firstOrDefault(null, {TElement:default})")]
        public extern TElement FirstOrDefault();

        [Template("{this}.firstOrDefault(null, {defaultValue})")]
        public extern TElement FirstOrDefault(TElement defaultValue);

        [Template("{this}.firstOrDefault({predicate}, {TElement:default})")]
        public extern TElement FirstOrDefault(Func<TElement, bool> predicate);

        [Template("{this}.firstOrDefault({predicate}, {defaultValue})")]
        public extern TElement FirstOrDefault(Func<TElement, bool> predicate, TElement defaultValue);

        public extern EnumerableInstance<object> Flatten();

        public extern void Force();

        public extern void ForEach(Action<TElement> action);

        public extern void ForEach(Func<TElement, bool> action);

        public extern void ForEach(Action<TElement, int> action);

        public extern void ForEach(Func<TElement, int, bool> action);

        public extern EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TKey>(Func<TElement, TKey> keySelector);

        [Template("{this}.groupBy({keySelector}, null, null, {comparer})")]
        public extern EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector);

        [Template("{this}.groupBy({keySelector}, null, {resultSelector})")]
        public extern EnumerableInstance<TResult> GroupBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector);

        [Template("{this}.groupBy({keySelector}, {elementSelector}, null, {comparer})")]
        public extern EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<TResult> GroupBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector);

        [Template("{this}.groupBy({keySelector}, null, {resultSelector}, {comparer})")]
        public extern EnumerableInstance<TResult> GroupBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<TResult> GroupBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comperer);

        public extern EnumerableInstance<TResult> GroupJoin<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, IEnumerable<TInner>, TResult> resultSelector);

        public extern EnumerableInstance<TResult> GroupJoin<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, IEnumerable<TInner>, TResult> resultSelector, IEqualityComparer<TKey> comparer);

        public extern int IndexOf(TElement item);

        public extern int IndexOf(TElement item, Func<TElement, bool> predicate);

        public extern int IndexOf(TElement item, IEqualityComparer<TElement> comparer);

        public extern EnumerableInstance<TElement> Insert(int index, IEnumerable<TElement> other);

        public extern EnumerableInstance<TResult> Join<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, TInner, TResult> resultSelector);

        public extern EnumerableInstance<TResult> Join<TInner, TKey, TResult>(IEnumerable<TInner> inner,
            Func<TElement, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TElement, TInner, TResult> resultSelector, IEqualityComparer<TKey> comparer);

        public extern TElement Last();

        public extern TElement Last(Func<TElement, bool> predicate);

        public extern int LastIndexOf(TElement item);

        public extern int LastIndexOf(TElement item, Func<TElement, bool> predicate);

        public extern int LastIndexOf(TElement item, IEqualityComparer<TElement> comparer);

        [Template("{this}.count()")]
        public extern long LongCount<TSource>();

        [Template("{this}.count({predicate})")]
        public extern long LongCount<TSource>(Func<TSource, bool> predicate);

        [Template("{this}.lastOrDefault(null, {TElement:default})")]
        public extern TElement LastOrDefault();

        [Template("{this}.lastOrDefault(null, {defaultValue})")]
        public extern TElement LastOrDefault(TElement defaultValue);

        [Template("{this}.lastOrDefault({predicate}, {TElement:default})")]
        public extern TElement LastOrDefault(Func<TElement, bool> predicate);

        [Template("{this}.lastOrDefault({predicate}, {defaultValue})")]
        public extern TElement LastOrDefault(Func<TElement, bool> predicate, TElement defaultValue);

        public extern EnumerableInstance<TResult> LetBind<TResult>(Func<IEnumerable<TElement>, IEnumerable<TResult>> func);

        public extern TSource Max<TSource>();

        public extern TResult Max<TSource, TResult>(Func<TSource, TResult> selector);

        public extern int Max(Func<TElement, int> selector);

        public extern long Max(Func<TElement, long> selector);

        public extern float Max(Func<TElement, float> selector);

        public extern double Max(Func<TElement, double> selector);

        public extern decimal Max(Func<TElement, decimal> selector);

        public extern TElement MaxBy(Func<TElement, int> selector);

        public extern TElement MaxBy(Func<TElement, long> selector);

        public extern TElement MaxBy(Func<TElement, float> selector);

        public extern TElement MaxBy(Func<TElement, double> selector);

        public extern TElement MaxBy(Func<TElement, decimal> selector);

        public extern EnumerableInstance<TElement> Memoize();

        public extern TSource Min<TSource>();

        public extern TResult Min<TSource, TResult>(Func<TSource, TResult> selector);

        public extern int Min(Func<TElement, int> selector);

        public extern long Min(Func<TElement, long> selector);

        public extern float Min(Func<TElement, float> selector);

        public extern double Min(Func<TElement, double> selector);

        public extern decimal Min(Func<TElement, decimal> selector);

        public extern TElement MinBy(Func<TElement, int> selector);

        public extern TElement MinBy(Func<TElement, long> selector);

        public extern TElement MinBy(Func<TElement, float> selector);

        public extern TElement MinBy(Func<TElement, double> selector);

        public extern TElement MinBy(Func<TElement, decimal> selector);

        [Template("{this}.ofType({TResult})")]
        public extern EnumerableInstance<TResult> OfType<TResult>();

        public extern OrderedEnumerable<TElement> OrderBy();

        public extern OrderedEnumerable<TElement> OrderBy<TKey>(Func<TElement, TKey> keySelector);

        public extern OrderedEnumerable<TElement> OrderBy<TKey>(Func<TElement, TKey> keySelector, IComparer<TKey> comparer);

        public extern OrderedEnumerable<TElement> OrderByDescending();

        public extern OrderedEnumerable<TElement> OrderByDescending<TKey>(Func<TElement, TKey> keySelector);

        public extern OrderedEnumerable<TElement> OrderByDescending<TKey>(Func<TElement, TKey> keySelector,
            IComparer<TKey> comparer);

        public extern EnumerableInstance<TResult> Pairwise<TResult>(Func<TElement, TElement, TResult> selector);

        public extern EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TKey>(Func<TElement, TKey> keySelector);

        [Template("{this}.partitionBy({keySelector}, null, null, {comparer})")]
        public extern EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TKey, TSource>(
            Func<TSource, TKey> keySelector, Func<TSource, TSource> elementSelector);

        [Template("{this}.partitionBy({keySelector}, null, {resultSelector})")]
        public extern EnumerableInstance<TResult> PartitionBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector);

        [Template("{this}.partitionBy({keySelector}, {elementSelector}, null, {comparer})")]
        public extern EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TKey, TSource>(
            Func<TSource, TKey> keySelector, Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<TResult> PartitionBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector);

        [Template("{this}.partitionBy({keySelector}, null, {resultSelector}, {comparer})")]
        public extern EnumerableInstance<TResult> PartitionBy<TKey, TResult>(Func<TElement, TKey> keySelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer);

        public extern EnumerableInstance<TResult> PartitionBy<TKey, TSource, TResult>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comperer);

        public extern EnumerableInstance<TElement> Reverse();

        public extern EnumerableInstance<T> Scan<T>(Func<T, T, T> func);

        public extern EnumerableInstance<TAccumulate> Scan<TAccumulate>(TAccumulate seed,
            Func<TAccumulate, TElement, TAccumulate> func);

        public extern EnumerableInstance<TResult> Select<TResult>(Func<TElement, TResult> selector);

        public extern EnumerableInstance<TResult> Select<TResult>(Func<TElement, int, TResult> selector);

        public extern EnumerableInstance<TResult> SelectMany<TResult>(Func<TElement, IEnumerable<TResult>> selector);

        public extern EnumerableInstance<TResult> SelectMany<TResult>(Func<TElement, int, IEnumerable<TResult>> selector);

        public extern EnumerableInstance<TResult> SelectMany<TCollection, TResult>(
            Func<TElement, IEnumerable<TCollection>> collectionSelector,
            Func<TElement, TCollection, TResult> resultSelector);

        public extern EnumerableInstance<TResult> SelectMany<TCollection, TResult>(
            Func<TElement, int, IEnumerable<TCollection>> collectionSelector,
            Func<TElement, TCollection, TResult> resultSelector);

        public extern bool SequenceEqual(IEnumerable<TElement> other);

        public extern bool SequenceEqual<TKey>(IEnumerable<TElement> other, Func<TElement, TKey> compareSelector);

        public extern EnumerableInstance<TElement> Share();

        public extern EnumerableInstance<TElement> Shuffle();

        public extern TElement Single();

        public extern TElement Single(Func<TElement, bool> predicate);

        [Template("{this}.singleOrDefault(null, {TElement:default})")]
        public extern TElement SingleOrDefault();

        [Template("{this}.singleOrDefault(null, {defaultValue})")]
        public extern TElement SingleOrDefault(TElement defaultValue);

        [Template("{this}.singleOrDefault({predicate}, {TElement:default})")]
        public extern TElement SingleOrDefault(Func<TElement, bool> predicate);

        [Template("{this}.singleOrDefault({predicate}, {defaultValue})")]
        public extern TElement SingleOrDefault(Func<TElement, bool> predicate, TElement defaultValue);

        public extern EnumerableInstance<TElement> Skip(int count);

        public extern EnumerableInstance<TElement> SkipWhile(Func<TElement, bool> predicate);

        public extern EnumerableInstance<TElement> SkipWhile(Func<TElement, int, bool> predicate);

        public extern int Sum(Func<TElement, int> selector);

        [Template("{this}.sum({selector}, System.Int64.Zero)")]
        public extern long Sum(Func<TElement, long> selector);

        public extern float Sum(Func<TElement, float> selector);

        public extern double Sum(Func<TElement, double> selector);

        [Template("{this}.sum({selector}, System.Decimal.Zero)")]
        public extern decimal Sum(Func<TElement, decimal> selector);

        public extern EnumerableInstance<TElement> Take(int count);

        public extern EnumerableInstance<TElement> TakeExceptLast();

        public extern EnumerableInstance<TElement> TakeExceptLast(int count);

        public extern EnumerableInstance<TElement> TakeFromLast(int count);

        public extern EnumerableInstance<TElement> TakeWhile(Func<TElement, bool> predicate);

        public extern EnumerableInstance<TElement> TakeWhile(Func<TElement, int, bool> predicate);

        public static extern IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(Func<TSource, TKey> keySelector);

        public static extern IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);

        public static extern IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(Func<TSource, TKey> keySelector);

        public static extern IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(Func<TSource, TKey> keySelector, IComparer<TKey> comparer);

        [Template("{this}.toArray({TElement})")]
        public extern TElement[] ToArray();

        [Template("{this}.toDictionary({keySelector}, null, {TKey}, {TElement})")]
        public extern Dictionary<TKey, TElement> ToDictionary<TKey>(Func<TElement, TKey> keySelector);

        [Template("{this}.toDictionary({keySelector}, null, {TKey}, {TElement}, {comparer})")]
        public extern Dictionary<TKey, TElement> ToDictionary<TKey>(Func<TElement, TKey> keySelector,
            IEqualityComparer<TKey> comparer);

        [Template("{this}.toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue})")]
        public extern Dictionary<TKey, TValue> ToDictionary<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> elementSelector);

        [Template("{this}.toDictionary({keySelector}, {elementSelector}, {TKey}, {TValue}, {comparer})")]
        public extern Dictionary<TKey, TValue> ToDictionary<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> elementSelector, IEqualityComparer<TKey> comparer);

        public extern string ToJoinedString();

        public extern string ToJoinedString(string separator);

        public extern string ToJoinedString(string separator, Func<TElement, string> selector);

        [Template("{this}.toList({TElement})")]
        public extern List<TElement> ToList();

        public extern Lookup<TKey, TElement> ToLookup<TKey>(Func<TElement, TKey> keySelector);

        [Template("{this}.toLookup({keySelector}, null, {comparer})")]
        public extern Lookup<TKey, TElement> ToLookup<TKey>(Func<TElement, TKey> keySelector, IEqualityComparer<TKey> comparer);

        public extern Lookup<TKey, TSource> ToLookup<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector);

        public extern Lookup<TKey, TSource> ToLookup<TKey, TSource>(Func<TSource, TKey> keySelector,
            Func<TSource, TSource> elementSelector, IEqualityComparer<TKey> comparer);

        public extern object ToObject<TKey, TValue>(Func<TElement, TKey> keySelector,
            Func<TElement, TValue> valueSelector);

        public extern EnumerableInstance<TElement> Trace();

        public extern EnumerableInstance<TElement> Trace(string message);

        public extern EnumerableInstance<TElement> Trace(string message, Func<TElement, string> selector);

        public extern EnumerableInstance<TElement> Union(IEnumerable<TElement> other);

        public extern EnumerableInstance<TElement> Union(IEnumerable<TElement> other, IEqualityComparer<TElement> comparer);

        public extern EnumerableInstance<TElement> Where(Func<TElement, bool> predicate);

        public extern EnumerableInstance<TElement> Where(Func<TElement, int, bool> predicate);

        public extern EnumerableInstance<TResult> Zip<TOther, TResult>(IEnumerable<TOther> other,
            Func<TElement, TOther, TResult> selector);

        public extern EnumerableInstance<TResult> Zip<TOther, TResult>(IEnumerable<TOther> other,
            Func<TElement, TOther, int, TResult> selector);
    }
}