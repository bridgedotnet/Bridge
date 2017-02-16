using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.Linq
{
    [External]
    [Name("Bridge.Linq.Enumerable")]
    public static class Enumerable
    {
        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).alternate({value})")]
        public static extern EnumerableInstance<TSource> Alternate<TSource>(this IEnumerable<TSource> source, TSource value);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).buffer({count})")]
        public static extern EnumerableInstance<TSource[]> Buffer<TSource>(this IEnumerable<TSource> source, int count);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).catchError({action})")]
        public static extern EnumerableInstance<TSource> CatchError<TSource>(this IEnumerable<TSource> source,
            Action<Exception> action);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Choice<TResult>(params TResult[] arguments);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Cycle<TResult>(params TResult[] arguments);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
        public static extern EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
            Action<TSource> action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
        public static extern EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
            Action<TSource, int> action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).elementAtOrDefault({index}, {defaultValue})")]
        public static TSource ElementAtOrDefault<TSource>(this IEnumerable<TSource> source, int index, TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).finallyAction({action})")]
        public static extern EnumerableInstance<TSource> FinallyAction<TSource>(this IEnumerable<TSource> source, Action action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault(null, {defaultValue})")]
        public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault({predicate}, {defaultValue})")]
        public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
            TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).flatten()")]
        public static extern EnumerableInstance<object> Flatten(this IEnumerable<object> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).force()")]
        public static extern void Force<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static extern void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource> action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static extern void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static extern void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource, int> action);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static extern void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> action);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> From<TResult>(IEnumerable<TResult> source);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<string> From(string source);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<object> From(object arrayLikeObject);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func, int count);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item})")]
        public static extern int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({predicate})")]
        public static extern int IndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item}, {comparer})")]
        public static extern int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
            IEqualityComparer<TSource> comparer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).insert({index}, {other})")]
        public static extern EnumerableInstance<TSource> Insert<TSource>(this IEnumerable<TSource> source, int index,
            IEnumerable<TSource> other);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({predicate})")]
        public static extern int LastIndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({item}, {comparer})")]
        public static extern int LastIndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
            IEqualityComparer<TSource> comparer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault(null, {defaultValue})")]
        public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault({predicate}, {defaultValue})")]
        public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
            TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).letBind({func})")]
        public static extern EnumerableInstance<TResult> LetBind<TSource, TResult>(this IEnumerable<TSource> source,
            Func<IEnumerable<TSource>, IEnumerable<TResult>> func);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Make<TResult>(TResult element);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<string[]> Matches(string input, string pattern);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<string[]> Matches(string input, string pattern, string flags);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
        public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
        public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
        public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
        public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).maxBy({selector})")]
        public static TSource MaxBy<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).memoize()")]
        public static extern EnumerableInstance<TSource> Memoize<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
        public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
        public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
        public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
        public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).minBy({selector})")]
        public static TSource MinBy<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).orderBy()")]
        public static extern OrderedEnumerable<TSource> OrderBy<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending()")]
        public static extern OrderedEnumerable<TSource> OrderByDescending<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).pairwise({selector})")]
        public static extern EnumerableInstance<TResult> Pairwise<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TSource, TResult> selector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector})")]
        public static extern EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, null, {comparer})")]
        public static extern EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector})")]
        public static extern EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector})")]
        public static extern EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, null, {comparer})")]
        public static extern EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            IEqualityComparer<TKey> comparer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector}, {comparer})")]
        public static extern EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comparer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector}, {comparer})")]
        public static extern EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> Range(int start, int count, int step);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> RangeDown(int start, int count);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> RangeDown(int start, int count, int step);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> RangeTo(int start, int count);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> RangeTo(int start, int count, int step);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> Repeat<TResult>(TResult element);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<TResult> RepeatWithFinalize<TResult>(Func<TResult> initializer,
            Action<TResult> finalizer);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).scan({func})")]
        public static extern EnumerableInstance<TSource> Scan<TSource>(this IEnumerable<TSource> source,
            Func<TSource, TSource, TSource> func);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).scan({seed}, {func})")]
        public static extern EnumerableInstance<TAccumulate> Scan<TSource, TAccumulate>(this IEnumerable<TSource> source,
            TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).share()")]
        public static extern EnumerableInstance<TSource> Share<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).shuffle()")]
        public static extern EnumerableInstance<TSource> Shuffle<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault(null, {defaultValue})")]
        public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault({predicate}, {defaultValue})")]
        public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate,
            TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).takeExceptLast()")]
        public static extern EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).takeExceptLast({count})")]
        public static extern EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source, int count);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).takeFromLast({count})")]
        public static extern EnumerableInstance<TSource> TakeFromLast<TSource>(this IEnumerable<TSource> source, int count);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToInfinity();

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToInfinity(int start);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToInfinity(int start, int step);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString()")]
        public static extern string ToJoinedString<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator})")]
        public static extern string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator}, {selector})")]
        public static extern string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator,
            Func<TSource, string> selector);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToNegativeInfinity();

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToNegativeInfinity(int start);

        // FIXME: absent from linq definitions!
        public static extern EnumerableInstance<int> ToNegativeInfinity(int start, int step);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toObject({keySelector}, {valueSelector})")]
        public static extern object ToObject<TSource, TKey, TValue>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TValue> valueSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace()")]
        public static extern EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace({message})")]
        public static extern EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace({message}, {selector})")]
        public static extern EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message,
            Func<TSource, string> selector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func})")]
        public static extern EnumerableInstance<TSource> TraverseBreadthFirst<TSource>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func})")]
        public static extern EnumerableInstance<TSource> TraverseDepthFirst<TSource>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector);

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({first}).zip({second}, {resultSelector})")]
        public static extern EnumerableInstance<TResult> Zip<TFirst, TSecond, TResult>(this IEnumerable<TFirst> first,
            IEnumerable<TSecond> second, Func<TFirst, TSecond, int, TResult> resultSelector);
    }
}