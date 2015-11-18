using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;

namespace Bridge.Linq
{
    [External]
    [Name("Bridge.Linq.Enumerable")]
    public static class Enumerable
    {
        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).alternate({value})")]
        public static EnumerableInstance<TSource> Alternate<TSource>(this IEnumerable<TSource> source, TSource value)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).buffer({count})")]
        public static EnumerableInstance<TSource[]> Buffer<TSource>(this IEnumerable<TSource> source, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).catchError({action})")]
        public static EnumerableInstance<TSource> CatchError<TSource>(this IEnumerable<TSource> source,
            Action<Exception> action)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Choice<TResult>(params TResult[] arguments)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Cycle<TResult>(params TResult[] arguments)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
        public static EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
            Action<TSource> action)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).doAction({action})")]
        public static EnumerableInstance<TSource> DoAction<TSource>(this IEnumerable<TSource> source,
            Action<TSource, int> action)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).elementAtOrDefault({index}, {defaultValue})")]
        public static TSource ElementAtOrDefault<TSource>(this IEnumerable<TSource> source, int index, TSource defaultValue)
        {
            return default(TSource);
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).finallyAction({action})")]
        public static EnumerableInstance<TSource> FinallyAction<TSource>(this IEnumerable<TSource> source, Action action)
        {
            return null;
        }

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
        public static EnumerableInstance<object> Flatten(this IEnumerable<object> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).force()")]
        public static void Force<TSource>(this IEnumerable<TSource> source)
        {
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource> action)
        {
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> action)
        {
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static void ForEach<TSource>(this IEnumerable<TSource> source, Action<TSource, int> action)
        {
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).forEach({action})")]
        public static void ForEach<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> action)
        {
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> From<TResult>(IEnumerable<TResult> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<string> From(string source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<object> From(object arrayLikeObject)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Generate<TResult>(Func<TResult> func, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item})")]
        public static int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item)
        {
            return 0;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({predicate})")]
        public static int IndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return 0;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).indexOf({item}, {comparer})")]
        public static int IndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
            IEqualityComparer<TSource> comparer)
        {
            return 0;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).insert({index}, {other})")]
        public static EnumerableInstance<TSource> Insert<TSource>(this IEnumerable<TSource> source, int index,
            IEnumerable<TSource> other)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({predicate})")]
        public static int LastIndexOf<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return 0;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).lastIndexOf({item}, {comparer})")]
        public static int LastIndexOf<TSource>(this IEnumerable<TSource> source, TSource item,
            IEqualityComparer<TSource> comparer)
        {
            return 0;
        }

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
        public static EnumerableInstance<TResult> LetBind<TSource, TResult>(this IEnumerable<TSource> source,
            Func<IEnumerable<TSource>, IEnumerable<TResult>> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Make<TResult>(TResult element)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<RegexMatch> Matches(string input, Regex pattern)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<RegexMatch> Matches(string input, string pattern)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<RegexMatch> Matches(string input, string pattern, string flags)
        {
            return null;
        }

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
        public static EnumerableInstance<TSource> Memoize<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

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
        public static OrderedEnumerable<TSource> OrderBy<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending()")]
        public static OrderedEnumerable<TSource> OrderByDescending<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).pairwise({selector})")]
        public static EnumerableInstance<TResult> Pairwise<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TSource, TResult> selector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector})")]
        public static EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, null, {comparer})")]
        public static EnumerableInstance<Grouping<TKey, TSource>> PartitionBy<TSource, TKey>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector})")]
        public static EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector})")]
        public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, null, {comparer})")]
        public static EnumerableInstance<Grouping<TKey, TElement>> PartitionBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, null, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).partitionBy({keySelector}, {elementSelector}, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> PartitionBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> Range(int start, int count, int step)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> RangeDown(int start, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> RangeDown(int start, int count, int step)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> RangeTo(int start, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> RangeTo(int start, int count, int step)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> Repeat<TResult>(TResult element)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<TResult> RepeatWithFinalize<TResult>(Func<TResult> initializer,
            Action<TResult> finalizer)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).scan({func})")]
        public static EnumerableInstance<TSource> Scan<TSource>(this IEnumerable<TSource> source,
            Func<TSource, TSource, TSource> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).scan({seed}, {func})")]
        public static EnumerableInstance<TAccumulate> Scan<TSource, TAccumulate>(this IEnumerable<TSource> source,
            TAccumulate seed, Func<TAccumulate, TSource, TAccumulate> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).share()")]
        public static EnumerableInstance<TSource> Share<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).shuffle()")]
        public static EnumerableInstance<TSource> Shuffle<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

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
        public static EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).takeExceptLast({count})")]
        public static EnumerableInstance<TSource> TakeExceptLast<TSource>(this IEnumerable<TSource> source, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).takeFromLast({count})")]
        public static EnumerableInstance<TSource> TakeFromLast<TSource>(this IEnumerable<TSource> source, int count)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToInfinity()
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToInfinity(int start)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToInfinity(int start, int step)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString()")]
        public static string ToJoinedString<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator})")]
        public static string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toJoinedString({separator}, {selector})")]
        public static string ToJoinedString<TSource>(this IEnumerable<TSource> source, string separator,
            Func<TSource, string> selector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToNegativeInfinity()
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToNegativeInfinity(int start)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        public static EnumerableInstance<int> ToNegativeInfinity(int start, int step)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).toObject({keySelector}, {valueSelector})")]
        public static object ToObject<TSource, TKey, TValue>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TValue> valueSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace()")]
        public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace({message})")]
        public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).trace({message}, {selector})")]
        public static EnumerableInstance<TSource> Trace<TSource>(this IEnumerable<TSource> source, string message,
            Func<TSource, string> selector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func})")]
        public static EnumerableInstance<TSource> TraverseBreadthFirst<TSource>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
        public static EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseBreadthFirst({func}, {resultSelector})")]
        public static EnumerableInstance<TResult> TraverseBreadthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func})")]
        public static EnumerableInstance<TSource> TraverseDepthFirst<TSource>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
        public static EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({source}).traverseDepthFirst({func}, {resultSelector})")]
        public static EnumerableInstance<TResult> TraverseDepthFirst<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TSource>> func, Func<TSource, int, TResult> resultSelector)
        {
            return null;
        }

        // FIXME: absent from linq definitions!
        [Template("Bridge.Linq.Enumerable.from({first}).zip({second}, {resultSelector})")]
        public static EnumerableInstance<TResult> Zip<TFirst, TSecond, TResult>(this IEnumerable<TFirst> first,
            IEnumerable<TSecond> second, Func<TFirst, TSecond, int, TResult> resultSelector)
        {
            return null;
        }
    }
}