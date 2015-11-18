using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System.Linq
{
    [External]
    [Name("Bridge.Linq.Enumerable")]
    public static class Enumerable
    {
        /// <summary>
        /// Applies an accumulator function over a sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to aggregate over.
        /// </param>
        /// <param name="func">
        /// An accumulator function to be invoked on each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The final accumulator value.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or func is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).aggregate({func})")]
        public static TSource Aggregate<TSource>(this IEnumerable<TSource> source, Func<TSource, TSource, TSource> func)
        {
            return default(TSource);
        }

        /// <summary>
        /// Applies an accumulator function over a sequence. The specified seed value
        /// is used as the initial accumulator value.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to aggregate over.
        /// </param>
        /// <param name="seed">
        /// The initial accumulator value.
        /// </param>
        /// <param name="func">
        /// An accumulator function to be invoked on each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TAccumulate">
        /// The type of the accumulator value.
        /// </typeparam>
        /// <returns>
        /// The final accumulator value.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or func is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).aggregate({seed}, {func})")]
        public static TAccumulate Aggregate<TSource, TAccumulate>(this IEnumerable<TSource> source, TAccumulate seed,
            Func<TAccumulate, TSource, TAccumulate> func)
        {
            return default(TAccumulate);
        }

        /// <summary>
        /// Applies an accumulator function over a sequence. The specified seed value
        /// is used as the initial accumulator value, and the specified function is used
        /// to select the result value.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to aggregate over.
        /// </param>
        /// <param name="seed">
        /// The initial accumulator value.
        /// </param>
        /// <param name="func">
        /// An accumulator function to be invoked on each element.
        /// </param>
        /// <param name="resultSelector">
        /// A function to transform the final accumulator value into the result value.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TAccumulate">
        /// The type of the accumulator value.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the resulting value.
        /// </typeparam>
        /// <returns>
        /// The transformed final accumulator value.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or func or resultSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).aggregate({seed}, {func}, {resultSelector})")]
        public static TResult Aggregate<TSource, TAccumulate, TResult>(this IEnumerable<TSource> source, TAccumulate seed,
            Func<TAccumulate, TSource, TAccumulate> func, Func<TAccumulate, TResult> resultSelector)
        {
            return default(TResult);
        }

        /// <summary>
        /// Determines whether all elements of a sequence satisfy a condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements to
        /// apply the predicate to.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// true if every element of the source sequence passes the test in the specified
        /// predicate, or if the sequence is empty; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).all({predicate})")]
        public static bool All<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(bool);
        }

        /// <summary>
        /// Determines whether a sequence contains any elements.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to check for emptiness.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// true if the source sequence contains any elements; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).any()")]
        public static bool Any<TSource>(this IEnumerable<TSource> source)
        {
            return default(bool);
        }

        /// <summary>
        /// Determines whether any element of a sequence satisfies a condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to apply the
        /// predicate to.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// true if any elements in the source sequence pass the test in the specified
        /// predicate; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).any({predicate})")]
        public static bool Any<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(bool);
        }

        /// <summary>
        /// Returns the input typed as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </summary>
        /// <param name="source">
        /// The sequence to type as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The input sequence typed as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </returns>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{source}")]
        public static EnumerableInstance<TSource> AsEnumerable<TSource>(this EnumerableInstance<TSource> source)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns the input typed as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </summary>
        /// <param name="source">
        /// The sequence to type as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The input sequence typed as System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </returns>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{source}")]
        public static IEnumerable<TSource> AsEnumerable<TSource>(this IEnumerable<TSource> source)
        {
            return default(IEnumerable<TSource>);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableAverage()")]
        public static decimal? Average(this EnumerableInstance<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage()")]
        public static decimal? Average(this IEnumerable<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.average()")]
        public static decimal Average(this EnumerableInstance<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average()")]
        public static decimal Average(this IEnumerable<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableAverage()")]
        public static double? Average(this EnumerableInstance<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage()")]
        public static double? Average(this IEnumerable<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.average()")]
        public static double Average(this EnumerableInstance<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average()")]
        public static double Average(this IEnumerable<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableAverage()")]
        public static float? Average(this EnumerableInstance<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage()")]
        public static float? Average(this IEnumerable<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.average()")]
        public static float Average(this EnumerableInstance<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average()")]
        public static float Average(this IEnumerable<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableAverage()")]
        public static double? Average(this EnumerableInstance<int?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage()")]
        public static double? Average(this IEnumerable<int?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.average()")]
        public static double Average(this EnumerableInstance<int> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average()")]
        public static double Average(this IEnumerable<int> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableAverage()")]
        public static double? Average(this EnumerableInstance<long?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage()")]
        public static double? Average(this IEnumerable<long?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.average()")]
        public static double Average(this EnumerableInstance<long> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to calculate the average of.
        /// </param>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average()")]
        public static double Average(this IEnumerable<long> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Decimal values that
        /// are obtained by invoking a transform function on each element of the input
        /// sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage({selector})")]
        public static decimal? Average<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal?> selector)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Decimal values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate an average.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Decimal.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
        public static decimal Average<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Double values that
        /// are obtained by invoking a transform function on each element of the input
        /// sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage({selector})")]
        public static double? Average<TSource>(this IEnumerable<TSource> source, Func<TSource, double?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Double values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
        public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Single values that
        /// are obtained by invoking a transform function on each element of the input
        /// sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage({selector})")]
        public static float? Average<TSource>(this IEnumerable<TSource> source, Func<TSource, float?> selector)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Single values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
        public static float Average<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int32 values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage({selector})")]
        public static double? Average<TSource>(this IEnumerable<TSource> source, Func<TSource, int?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int32 values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
        public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the average of a sequence of nullable System.Int64 values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values, or null if the source sequence is
        /// empty or contains only values that are null.
        /// </returns>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableAverage({selector})")]
        public static double? Average<TSource>(this IEnumerable<TSource> source, Func<TSource, long?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the average of a sequence of System.Int64 values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to calculate the average of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The average of the sequence of values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum of the elements in the sequence is larger than System.Int64.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).average({selector})")]
        public static double Average<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Casts the elements of an System.Collections.IEnumerable to the specified
        /// type.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.IEnumerable that contains the elements to be cast
        /// to type TResult.
        /// </param>
        /// <typeparam name="TResult">
        /// The type to cast the elements of source to.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains each element of
        /// the source sequence cast to the specified type.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidCastException">
        /// An element in the sequence cannot be cast to type TResult.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).select(function(x) {{ return Bridge.cast(x, {TResult}); }})")]
        public static EnumerableInstance<TResult> Cast<TResult>(this IEnumerable source)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Concatenates two sequences.
        /// </summary>
        /// <param name="first">
        /// The first sequence to concatenate.
        /// </param>
        /// <param name="second">
        /// The sequence to concatenate to the first sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the concatenated
        /// elements of the two input sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({first}).concat({second})")]
        public static EnumerableInstance<TSource> Concat<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Determines whether a sequence contains a specified element by using the default
        /// equality comparer.
        /// </summary>
        /// <param name="source">
        /// A sequence in which to locate a value.
        /// </param>
        /// <param name="value">
        /// The value to locate in the sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// true if the source sequence contains an element that has the specified value;
        /// otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).contains({value})")]
        public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value)
        {
            return default(bool);
        }

        /// <summary>
        /// Determines whether a sequence contains a specified element by using a specified
        /// System.Collections.Generic.IEqualityComparer&lt;T&gt;.
        /// </summary>
        /// <param name="source">
        /// A sequence in which to locate a value.
        /// </param>
        /// <param name="value">
        /// The value to locate in the sequence.
        /// </param>
        /// <param name="comparer">
        /// An equality comparer to compare values.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// true if the source sequence contains an element that has the specified value;
        /// otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).contains({value}, {comparer})")]
        public static bool Contains<TSource>(this IEnumerable<TSource> source, TSource value,
            IEqualityComparer<TSource> comparer)
        {
            return default(bool);
        }

        /// <summary>
        /// Returns the number of elements in a sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence that contains elements to be counted.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The number of elements in the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The number of elements in source is larger than System.Int32.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).count()")]
        public static int Count<TSource>(this IEnumerable<TSource> source)
        {
            return default(int);
        }

        /// <summary>
        /// Returns a number that represents how many elements in the specified sequence
        /// satisfy a condition.
        /// </summary>
        /// <param name="source">
        /// A sequence that contains elements to be tested and counted.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// A number that represents how many elements in the sequence satisfy the condition
        /// in the predicate function.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The number of elements in source is larger than System.Int32.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).count({predicate})")]
        public static int Count<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(int);
        }

        /// <summary>
        /// Returns the elements of the specified sequence or the type parameter's default
        /// value in a singleton collection if the sequence is empty.
        /// </summary>
        /// <param name="source">
        /// The sequence to return a default value for if it is empty.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; object that contains the default
        /// value for the TSource type if source is empty; otherwise, source.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).defaultIfEmpty(Bridge.getDefaultValue({TSource}))")]
        public static EnumerableInstance<TSource> DefaultIfEmpty<TSource>(this IEnumerable<TSource> source)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns the elements of the specified sequence or the specified value in
        /// a singleton collection if the sequence is empty.
        /// </summary>
        /// <param name="source">
        /// The sequence to return the specified value for if it is empty.
        /// </param>
        /// <param name="defaultValue">
        /// The value to return if the sequence is empty.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains defaultValue if
        /// source is empty; otherwise, source.
        /// </returns>
        [Template("Bridge.Linq.Enumerable.from({source}).defaultIfEmpty({defaultValue})")]
        public static EnumerableInstance<TSource> DefaultIfEmpty<TSource>(this IEnumerable<TSource> source,
            TSource defaultValue)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns distinct elements from a sequence by using the default equality comparer
        /// to compare values.
        /// </summary>
        /// <param name="source">
        /// The sequence to remove duplicate elements from.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains distinct elements
        /// from the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).distinct()")]
        public static EnumerableInstance<TSource> Distinct<TSource>(this IEnumerable<TSource> source)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns distinct elements from a sequence by using a specified System.Collections.Generic.IEqualityComparer&lt;T&gt;
        /// to compare values.
        /// </summary>
        /// <param name="source">
        /// The sequence to remove duplicate elements from.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare values.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains distinct elements
        /// from the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).distinct({comparer})")]
        public static EnumerableInstance<TSource> Distinct<TSource>(this IEnumerable<TSource> source,
            IEqualityComparer<TSource> comparer)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns the element at a specified index in a sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="index">
        /// The zero-based index of the element to retrieve.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The element at the specified position in the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// index is less than 0 or greater than or equal to the number of elements in
        /// source.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).elementAt({index})")]
        public static TSource ElementAt<TSource>(this IEnumerable<TSource> source, int index)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the element at a specified index in a sequence or a default value
        /// if the index is out of range.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="index">
        /// The zero-based index of the element to retrieve.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// default(TSource) if the index is outside the bounds of the source sequence;
        /// otherwise, the element at the specified position in the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).elementAtOrDefault({index}, Bridge.getDefaultValue({TSource}))")]
        public static TSource ElementAtOrDefault<TSource>(this IEnumerable<TSource> source, int index)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns an empty System.Collections.Generic.IEnumerable&lt;T&gt; that has the specified
        /// type argument.
        /// </summary>
        /// <typeparam name="TResult">
        /// The type to assign to the type parameter of the returned generic System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </typeparam>
        /// <returns>
        /// An empty System.Collections.Generic.IEnumerable&lt;T&gt; whose type argument is
        /// TResult.
        /// </returns>
        public static EnumerableInstance<TResult> Empty<TResult>()
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Produces the set difference of two sequences by using the default equality
        /// comparer to compare values.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements that are not
        /// also in second will be returned.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements that also occur
        /// in the first sequence will cause those elements to be removed from the returned
        /// sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// A sequence that contains the set difference of the elements of two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({first}).except({second})")]
        public static EnumerableInstance<TSource> Except<TSource>(this IEnumerable<TSource> first,
            IEnumerable<TSource> second)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Produces the set difference of two sequences by using the specified System.Collections.Generic.IEqualityComparer&lt;T&gt;
        /// to compare values.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements that are not
        /// also in second will be returned.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements that also occur
        /// in the first sequence will cause those elements to be removed from the returned
        /// sequence.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare values.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// A sequence that contains the set difference of the elements of two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({first}).except({second}, {comparer})")]
        public static EnumerableInstance<TSource> Except<TSource>(this IEnumerable<TSource> first,
            IEnumerable<TSource> second, IEqualityComparer<TSource> comparer)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns the first element of a sequence.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to return the first element
        /// of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The first element in the specified sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// The source sequence is empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).first()")]
        public static TSource First<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the first element in a sequence that satisfies a specified condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The first element in the sequence that passes the test in the specified predicate
        /// function.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// No element satisfies the condition in predicate.-or-The source sequence is
        /// empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).first({predicate})")]
        public static TSource First<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the first element of a sequence, or a default value if the sequence
        /// contains no elements.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to return the first element
        /// of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// default(TSource) if source is empty; otherwise, the first element in source.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault(null, Bridge.getDefaultValue({TSource}))")]
        public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the first element of the sequence that satisfies a condition or a
        /// default value if no such element is found.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// default(TSource) if source is empty or if no element passes the test specified
        /// by predicate; otherwise, the first element in source that passes the test
        /// specified by predicate.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).firstOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
        public static TSource FirstOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An IEnumerable&lt;IGrouping&lt;TKey, TSource&gt;&gt; in C# or IEnumerable(Of IGrouping(Of
        /// TKey, TSource)) in Visual Basic where each System.Linq.IGrouping&lt;TKey,TElement&gt;
        /// object contains a sequence of objects and a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector})")]
        public static EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector)
        {
            return default(EnumerableInstance<Grouping<TKey, TSource>>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and creates a result value from each group and its key.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result value from each group.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result value returned by resultSelector.
        /// </typeparam>
        /// <returns>
        /// A collection of elements of type TResult where each element represents a
        /// projection over a group and its key.
        /// </returns>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, {resultSelector})")]
        public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and projects the elements for each group by using a specified function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="elementSelector">
        /// A function to map each source element to an element in the System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the elements in the System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </typeparam>
        /// <returns>
        /// An IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt; in C# or IEnumerable(Of IGrouping(Of
        /// TKey, TElement)) in Visual Basic where each System.Linq.IGrouping&lt;TKey,TElement&gt;
        /// object contains a collection of objects of type TElement and a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector})")]
        public static EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
        {
            return default(EnumerableInstance<Grouping<TKey, TElement>>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and compares the keys by using a specified comparer.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An IEnumerable&lt;IGrouping&lt;TKey, TSource&gt;&gt; in C# or IEnumerable(Of IGrouping(Of
        /// TKey, TSource)) in Visual Basic where each System.Linq.IGrouping&lt;TKey,TElement&gt;
        /// object contains a collection of objects and a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, null, {comparer})")]
        public static EnumerableInstance<Grouping<TKey, TSource>> GroupBy<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<Grouping<TKey, TSource>>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and creates a result value from each group and its key. The keys are compared
        /// by using a specified comparer.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result value from each group.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys with.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result value returned by resultSelector.
        /// </typeparam>
        /// <returns>
        /// A collection of elements of type TResult where each element represents a
        /// projection over a group and its key.
        /// </returns>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, null, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TKey, IEnumerable<TSource>, TResult> resultSelector,
            IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and creates a result value from each group and its key. The elements of each
        /// group are projected by using a specified function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="elementSelector">
        /// A function to map each source element to an element in an System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result value from each group.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the elements in each System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result value returned by resultSelector.
        /// </typeparam>
        /// <returns>
        /// A collection of elements of type TResult where each element represents a
        /// projection over a group and its key.
        /// </returns>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a key selector function. The
        /// keys are compared by using a comparer and each group's elements are projected
        /// by using a specified function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="elementSelector">
        /// A function to map each source element to an element in an System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the elements in the System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </typeparam>
        /// <returns>
        /// An IEnumerable&lt;IGrouping&lt;TKey, TElement&gt;&gt; in C# or IEnumerable(Of IGrouping(Of
        /// TKey, TElement)) in Visual Basic where each System.Linq.IGrouping&lt;TKey,TElement&gt;
        /// object contains a collection of objects of type TElement and a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, null, {comparer})")]
        public static EnumerableInstance<Grouping<TKey, TElement>> GroupBy<TSource, TKey, TElement>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<Grouping<TKey, TElement>>);
        }

        /// <summary>
        /// Groups the elements of a sequence according to a specified key selector function
        /// and creates a result value from each group and its key. Key values are compared
        /// by using a specified comparer, and the elements of each group are projected
        /// by using a specified function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements to group.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract the key for each element.
        /// </param>
        /// <param name="elementSelector">
        /// A function to map each source element to an element in an System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result value from each group.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys with.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the elements in each System.Linq.IGrouping&lt;TKey,TElement&gt;.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result value returned by resultSelector.
        /// </typeparam>
        /// <returns>
        /// A collection of elements of type TResult where each element represents a
        /// projection over a group and its key.
        /// </returns>
        [Template("Bridge.Linq.Enumerable.from({source}).groupBy({keySelector}, {elementSelector}, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> GroupBy<TSource, TKey, TElement, TResult>(
            this IEnumerable<TSource> source, Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector,
            Func<TKey, IEnumerable<TElement>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Correlates the elements of two sequences based on equality of keys and groups
        /// the results. The default equality comparer is used to compare keys.
        /// </summary>
        /// <param name="outer">
        /// The first sequence to join.
        /// </param>
        /// <param name="inner">
        /// The sequence to join to the first sequence.
        /// </param>
        /// <param name="outerKeySelector">
        /// A function to extract the join key from each element of the first sequence.
        /// </param>
        /// <param name="innerKeySelector">
        /// A function to extract the join key from each element of the second sequence.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result element from an element from the first sequence
        /// and a collection of matching elements from the second sequence.
        /// </param>
        /// <typeparam name="TOuter">
        /// The type of the elements of the first sequence.
        /// </typeparam>
        /// <typeparam name="TInner">
        /// The type of the elements of the second sequence.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the keys returned by the key selector functions.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result elements.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements of type
        /// TResult that are obtained by performing a grouped join on two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// outer or inner or outerKeySelector or innerKeySelector or resultSelector
        /// is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({outer}).groupJoin({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
            IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TOuter, IEnumerable<TInner>, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Correlates the elements of two sequences based on key equality and groups
        /// the results. A specified System.Collections.Generic.IEqualityComparer&lt;T&gt;
        /// is used to compare keys.
        /// </summary>
        /// <param name="outer">
        /// The first sequence to join.
        /// </param>
        /// <param name="inner">
        /// The sequence to join to the first sequence.
        /// </param>
        /// <param name="outerKeySelector">
        /// A function to extract the join key from each element of the first sequence.
        /// </param>
        /// <param name="innerKeySelector">
        /// A function to extract the join key from each element of the second sequence.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result element from an element from the first sequence
        /// and a collection of matching elements from the second sequence.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to hash and compare keys.
        /// </param>
        /// <typeparam name="TOuter">
        /// The type of the elements of the first sequence.
        /// </typeparam>
        /// <typeparam name="TInner">
        /// The type of the elements of the second sequence.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the keys returned by the key selector functions.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result elements.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements of type
        /// TResult that are obtained by performing a grouped join on two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// outer or inner or outerKeySelector or innerKeySelector or resultSelector
        /// is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({outer}).groupJoin({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> GroupJoin<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
            IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TOuter, IEnumerable<TInner>, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Produces the set intersection of two sequences by using the default equality
        /// comparer to compare values.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements that
        /// also appear in second will be returned.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements that
        /// also appear in the first sequence will be returned.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// A sequence that contains the elements that form the set intersection of two
        /// sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).intersect({second})")]
        public static EnumerableInstance<TSource> Intersect<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Produces the set intersection of two sequences by using the specified System.Collections.Generic.IEqualityComparer&lt;T&gt;
        /// to compare values.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements that
        /// also appear in second will be returned.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements that
        /// also appear in the first sequence will be returned.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare values.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// A sequence that contains the elements that form the set intersection of two
        /// sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).intersect({second}, {comparer})")]
        public static EnumerableInstance<TSource> Intersect<TSource>(this IEnumerable<TSource> first,
            IEnumerable<TSource> second, IEqualityComparer<TSource> comparer)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Correlates the elements of two sequences based on matching keys. The default
        /// equality comparer is used to compare keys.
        /// </summary>
        /// <param name="outer">
        /// The first sequence to join.
        /// </param>
        /// <param name="inner">
        /// The sequence to join to the first sequence.
        /// </param>
        /// <param name="outerKeySelector">
        /// A function to extract the join key from each element of the first sequence.
        /// </param>
        /// <param name="innerKeySelector">
        /// A function to extract the join key from each element of the second sequence.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result element from two matching elements.
        /// </param>
        /// <typeparam name="TOuter">
        /// The type of the elements of the first sequence.
        /// </typeparam>
        /// <typeparam name="TInner">
        /// The type of the elements of the second sequence.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the keys returned by the key selector functions.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result elements.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that has elements of type TResult
        /// that are obtained by performing an inner join on two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// outer or inner or outerKeySelector or innerKeySelector or resultSelector
        /// is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({this}).join({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
            IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TOuter, TInner, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Correlates the elements of two sequences based on matching keys. A specified
        /// System.Collections.Generic.IEqualityComparer&lt;T&gt; is used to compare keys.
        /// </summary>
        /// <param name="outer">
        /// The first sequence to join.
        /// </param>
        /// <param name="inner">
        /// The sequence to join to the first sequence.
        /// </param>
        /// <param name="outerKeySelector">
        /// A function to extract the join key from each element of the first sequence.
        /// </param>
        /// <param name="innerKeySelector">
        /// A function to extract the join key from each element of the second sequence.
        /// </param>
        /// <param name="resultSelector">
        /// A function to create a result element from two matching elements.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to hash and compare keys.
        /// </param>
        /// <typeparam name="TOuter">
        /// The type of the elements of the first sequence.
        /// </typeparam>
        /// <typeparam name="TInner">
        /// The type of the elements of the second sequence.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the keys returned by the key selector functions.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the result elements.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that has elements of type TResult
        /// that are obtained by performing an inner join on two sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// outer or inner or outerKeySelector or innerKeySelector or resultSelector
        /// is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({this}).join({inner}, {outerKeySelector}, {innerKeySelector}, {resultSelector}, {comparer})")]
        public static EnumerableInstance<TResult> Join<TOuter, TInner, TKey, TResult>(this IEnumerable<TOuter> outer,
            IEnumerable<TInner> inner, Func<TOuter, TKey> outerKeySelector, Func<TInner, TKey> innerKeySelector,
            Func<TOuter, TInner, TResult> resultSelector, IEqualityComparer<TKey> comparer)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Returns an System.Int64 that represents the total number of elements in a
        /// sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements to
        /// be counted.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The number of elements in the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The number of elements exceeds System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).count()")]
        public static long LongCount<TSource>(this IEnumerable<TSource> source)
        {
            return default(long);
        }

        /// <summary>
        /// Returns an System.Int64 that represents how many elements in a sequence satisfy
        /// a condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements to
        /// be counted.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// A number that represents how many elements in the sequence satisfy the condition
        /// in the predicate function.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The number of matching elements exceeds System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).count({predicate})")]
        public static long LongCount<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(long);
        }

        /// <summary>
        /// Returns the last element of a sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return the last element of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value at the last position in the source sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// The source sequence is empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).last()")]
        public static TSource Last<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the last element of a sequence that satisfies a specified condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The last element in the sequence that passes the test in the specified predicate
        /// function.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// No element satisfies the condition in predicate.-or-The source sequence is
        /// empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).last({predicate})")]
        public static TSource Last<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the last element of a sequence, or a default value if the sequence
        /// contains no elements.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return the last element of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// default(TSource) if the source sequence is empty; otherwise, the last element
        /// in the System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault(null, Bridge.getDefaultValue({TSource}))")]
        public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the last element of a sequence that satisfies a condition or a default
        /// value if no such element is found.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return an element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// default(TSource) if the sequence is empty or if no elements pass the test
        /// in the predicate function; otherwise, the last element that passes the test
        /// in the predicate function.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).lastOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
        public static TSource LastOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMax()")]
        public static decimal? Max(this EnumerableInstance<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax()")]
        public static decimal? Max(this IEnumerable<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.max()")]
        public static decimal Max(this EnumerableInstance<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static decimal Max(this IEnumerable<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMax()")]
        public static double? Max(this EnumerableInstance<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax()")]
        public static double? Max(this IEnumerable<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.max()")]
        public static double Max(this EnumerableInstance<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static double Max(this IEnumerable<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMax()")]
        public static float? Max(this EnumerableInstance<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax()")]
        public static float? Max(this IEnumerable<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.max()")]
        public static float Max(this EnumerableInstance<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static float Max(this IEnumerable<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int32&gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMax()")]
        public static int? Max(this EnumerableInstance<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int327gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax()")]
        public static int? Max(this IEnumerable<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.max()")]
        public static int Max(this EnumerableInstance<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static int Max(this IEnumerable<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMax()")]
        public static long? Max(this EnumerableInstance<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to determine the maximum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax()")]
        public static long? Max(this IEnumerable<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.max()")]
        public static long Max(this EnumerableInstance<long> source)
        {
            return default(long);
        }

        /// <summary>
        /// Returns the maximum value in a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to determine the maximum value of.
        /// </param>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static long Max(this IEnumerable<long> source)
        {
            return 0;
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum nullable System.Decimal value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax({selector})")]
        public static decimal? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal?> selector)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Decimal value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static decimal Max<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(decimal);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum nullable System.Double value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual
        /// Basic that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax({selector})")]
        public static double? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, double?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Double value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static double Max<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum nullable System.Single value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual
        /// Basic that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax({selector})")]
        public static float? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, float?> selector)
        {
            return default(float?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Single value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static float Max<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(float);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum nullable System.Int32 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Int32&gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax({selector})")]
        public static int? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, int?> selector)
        {
            return default(int?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Int32 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static int Max<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(int);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum nullable System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMax({selector})")]
        public static long? Max<TSource>(this IEnumerable<TSource> source, Func<TSource, long?> selector)
        {
            return default(long?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static long Max<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(long);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMin()")]
        public static decimal? Min(this EnumerableInstance<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin()")]
        public static decimal? Min(this IEnumerable<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max()")]
        public static TSource Max<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// maximum System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the maximum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements in result.
        /// </typeparam>
        /// <returns>
        /// The maximum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).max({selector})")]
        public static TResult Max<TSource, TResult>(this IEnumerable<TSource> source, Func<TSource, TResult> selector)
        {
            return default(TResult);
        }

        /// <summary>
        /// Returns the minimum TSource value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static TSource Min<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum TResult value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements in result.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static TResult Min<TSource, TResult>(this IEnumerable<TSource> source, Func<TSource, TResult> selector)
        {
            return default(TResult);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.min()")]
        public static decimal Min(this EnumerableInstance<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static decimal Min(this IEnumerable<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMin()")]
        public static double? Min(this EnumerableInstance<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin()")]
        public static double? Min(this IEnumerable<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.min()")]
        public static double Min(this EnumerableInstance<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static double Min(this IEnumerable<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMin()")]
        public static float? Min(this EnumerableInstance<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin()")]
        public static float? Min(this IEnumerable<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.min()")]
        public static float Min(this EnumerableInstance<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static float Min(this IEnumerable<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int32&gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMin()")]
        public static int? Min(this EnumerableInstance<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int32&gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin()")]
        public static int? Min(this IEnumerable<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.min()")]
        public static int Min(this EnumerableInstance<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static int Min(this IEnumerable<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableMin()")]
        public static long? Min(this EnumerableInstance<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to determine the minimum value
        /// of.
        /// </param>
        /// <returns>
        /// A value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin()")]
        public static long? Min(this IEnumerable<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("{this}.min()")]
        public static long Min(this EnumerableInstance<long> source)
        {
            return default(long);
        }

        /// <summary>
        /// Returns the minimum value in a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to determine the minimum value of.
        /// </param>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min()")]
        public static long Min(this IEnumerable<long> source)
        {
            return default(long);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum nullable System.Decimal value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Decimal&gt; in C# or Nullable(Of Decimal) in Visual
        /// Basic that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin({selector})")]
        public static decimal? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal?> selector)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum System.Decimal value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static decimal Min<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(decimal);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum nullable System.Double value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Double&gt; in C# or Nullable(Of Double) in Visual
        /// Basic that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin({selector})")]
        public static double? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, double?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum System.Double value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static double Min<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum nullable System.Single value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Single&gt; in C# or Nullable(Of Single) in Visual
        /// Basic that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin({selector})")]
        public static float? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, float?> selector)
        {
            return default(float?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum System.Single value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static float Min<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(float);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum nullable System.Int32 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Int32&gt; in C# or Nullable(Of Int32) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin({selector})")]
        public static int? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, int?> selector)
        {
            return default(int?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum System.Int32 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static int Min<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(int);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum nullable System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The value of type Nullable&lt;Int64&gt; in C# or Nullable(Of Int64) in Visual Basic
        /// that corresponds to the minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableMin({selector})")]
        public static long? Min<TSource>(this IEnumerable<TSource> source, Func<TSource, long?> selector)
        {
            return default(long?);
        }

        /// <summary>
        /// Invokes a transform function on each element of a sequence and returns the
        /// minimum System.Int64 value.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to determine the minimum value of.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The minimum value in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// source contains no elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).min({selector})")]
        public static long Min<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(long);
        }

        /// <summary>
        /// Filters the elements of an System.Collections.IEnumerable based on a specified
        /// type.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.IEnumerable whose elements to filter.
        /// </param>
        /// <typeparam name="TResult">
        /// The type to filter the elements of the sequence on.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements from
        /// the input sequence of type TResult.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).ofType({TResult})")]
        public static EnumerableInstance<TResult> OfType<TResult>(this IEnumerable source)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Sorts the elements of a sequence in ascending order according to a key.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to order.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from an element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted according
        /// to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).orderBy({keySelector})")]
        public static OrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            return default(OrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Sorts the elements of a sequence in ascending order by using a specified
        /// comparer.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to order.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from an element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted according
        /// to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).orderBy({keySelector}, {comparer})")]
        public static OrderedEnumerable<TSource> OrderBy<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector,
            IComparer<TKey> comparer)
        {
            return default(OrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Sorts the elements of a sequence in descending order according to a key.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to order.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from an element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted in
        /// descending order according to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending({keySelector})")]
        public static OrderedEnumerable<TSource> OrderByDescending<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector)
        {
            return default(OrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Sorts the elements of a sequence in descending order by using a specified
        /// comparer.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to order.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from an element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted in
        /// descending order according to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).orderByDescending({keySelector}, {comparer})")]
        public static OrderedEnumerable<TSource> OrderByDescending<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            return default(OrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Generates a sequence of integral numbers within a specified range.
        /// </summary>
        /// <param name="start">
        /// The value of the first integer in the sequence.
        /// </param>
        /// <param name="count">
        /// The number of sequential integers to generate.
        /// </param>
        /// <returns>
        /// An IEnumerable&lt;Int32&gt; in C# or IEnumerable(Of Int32) in Visual Basic that
        /// contains a range of sequential integral numbers.
        /// </returns>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// count is less than 0.-or-start + count -1 is larger than System.Int32.MaxValue.
        /// </exception>
        public static EnumerableInstance<int> Range(int start, int count)
        {
            return default(EnumerableInstance<int>);
        }

        /// <summary>
        /// Generates a sequence that contains one repeated value.
        /// </summary>
        /// <param name="element">
        /// The value to be repeated.
        /// </param>
        /// <param name="count">
        /// The number of times to repeat the value in the generated sequence.
        /// </param>
        /// <typeparam name="TResult">
        /// The type of the value to be repeated in the result sequence.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains a repeated value.
        /// </returns>
        /// <exception cref="System.ArgumentOutOfRangeException">
        /// count is less than 0.
        /// </exception>
        public static EnumerableInstance<TResult> Repeat<TResult>(TResult element, int count)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Inverts the order of the elements in a sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to reverse.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// A sequence whose elements correspond to those of the input sequence in reverse
        /// order.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).reverse()")]
        public static EnumerableInstance<TSource> Reverse<TSource>(this IEnumerable<TSource> source)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Projects each element of a sequence into a new form by incorporating the
        /// element's index.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to invoke a transform function on.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each source element; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the value returned by selector.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the transform function on each element of source.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).select({selector})")]
        public static EnumerableInstance<TResult> Select<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, int, TResult> selector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Projects each element of a sequence into a new form.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to invoke a transform function on.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the value returned by selector.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the transform function on each element of source.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).select({selector})")]
        public static EnumerableInstance<TResult> Select<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, TResult> selector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Projects each element of a sequence to an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// and flattens the resulting sequences into one sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to project.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements of the sequence returned by selector.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the one-to-many transform function on each element of the input
        /// sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).selectMany({selector})")]
        public static EnumerableInstance<TResult> SelectMany<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TResult>> selector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Projects each element of a sequence to an System.Collections.Generic.IEnumerable&lt;T&gt;,
        /// and flattens the resulting sequences into one sequence. The index of each
        /// source element is used in the projected form of that element.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to project.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each source element; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements of the sequence returned by selector.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the one-to-many transform function on each element of an input
        /// sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).selectMany({selector})")]
        public static EnumerableInstance<TResult> SelectMany<TSource, TResult>(this IEnumerable<TSource> source,
            Func<TSource, int, IEnumerable<TResult>> selector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Projects each element of a sequence to an System.Collections.Generic.IEnumerable&lt;T&gt;,
        /// flattens the resulting sequences into one sequence, and invokes a result
        /// selector function on each element therein.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to project.
        /// </param>
        /// <param name="collectionSelector">
        /// A transform function to apply to each element of the input sequence.
        /// </param>
        /// <param name="resultSelector">
        /// A transform function to apply to each element of the intermediate sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TCollection">
        /// The type of the intermediate elements collected by collectionSelector.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements of the resulting sequence.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the one-to-many transform function collectionSelector on each
        /// element of source and then mapping each of those sequence elements and their
        /// corresponding source element to a result element.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or collectionSelector or resultSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).selectMany({collectionSelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> SelectMany<TSource, TCollection, TResult>(this IEnumerable<TSource> source,
            Func<TSource, IEnumerable<TCollection>> collectionSelector, Func<TSource, TCollection, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Projects each element of a sequence to an System.Collections.Generic.IEnumerable&lt;T&gt;,
        /// flattens the resulting sequences into one sequence, and invokes a result
        /// selector function on each element therein. The index of each source element
        /// is used in the intermediate projected form of that element.
        /// </summary>
        /// <param name="source">
        /// A sequence of values to project.
        /// </param>
        /// <param name="collectionSelector">
        /// A transform function to apply to each source element; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <param name="resultSelector">
        /// A transform function to apply to each element of the intermediate sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TCollection">
        /// The type of the intermediate elements collected by collectionSelector.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements of the resulting sequence.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose elements are the result
        /// of invoking the one-to-many transform function collectionSelector on each
        /// element of source and then mapping each of those sequence elements and their
        /// corresponding source element to a result element.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or collectionSelector or resultSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).selectMany({collectionSelector}, {resultSelector})")]
        public static EnumerableInstance<TResult> SelectMany<TSource, TCollection, TResult>(this IEnumerable<TSource> source,
            Func<TSource, int, IEnumerable<TCollection>> collectionSelector, Func<TSource, TCollection, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }

        /// <summary>
        /// Determines whether two sequences are equal by comparing the elements by using
        /// the default equality comparer for their type.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to compare to second.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to compare to the first sequence.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// true if the two source sequences are of equal length and their corresponding
        /// elements are equal according to the default equality comparer for their type;
        /// otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).sequenceEqual({second})")]
        public static bool SequenceEqual<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second)
        {
            return default(bool);
        }

        /// <summary>
        /// Determines whether two sequences are equal by comparing their elements by
        /// using a specified System.Collections.Generic.IEqualityComparer&lt;T&gt;.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to compare to second.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to compare to the first sequence.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to use to compare elements.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// true if the two source sequences are of equal length and their corresponding
        /// elements compare equal according to comparer; otherwise, false.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).sequenceEqual({second}, {comparer})")]
        public static bool SequenceEqual<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second,
            IEqualityComparer<TSource> comparer)
        {
            return default(bool);
        }

        /// <summary>
        /// Returns the only element of a sequence, and throws an exception if there
        /// is not exactly one element in the sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return the single element
        /// of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The single element of the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// The input sequence contains more than one element.-or-The input sequence
        /// is empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).single()")]
        public static TSource Single<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the only element of a sequence that satisfies a specified condition,
        /// and throws an exception if more than one such element exists.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return a single element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test an element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The single element of the input sequence that satisfies a condition.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// No element satisfies the condition in predicate.-or-More than one element
        /// satisfies the condition in predicate.-or-The source sequence is empty.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).single({predicate})")]
        public static TSource Single<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the only element of a sequence, or a default value if the sequence
        /// is empty; this method throws an exception if there is more than one element
        /// in the sequence.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return the single element
        /// of.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The single element of the input sequence, or default(TSource) if the sequence
        /// contains no elements.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.InvalidOperationException">
        /// The input sequence contains more than one element.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault(null, Bridge.getDefaultValue({TSource}))")]
        public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource);
        }

        /// <summary>
        /// Returns the only element of a sequence that satisfies a specified condition
        /// or a default value if no such element exists; this method throws an exception
        /// if more than one element satisfies the condition.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return a single element from.
        /// </param>
        /// <param name="predicate">
        /// A function to test an element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The single element of the input sequence that satisfies the condition, or
        /// default(TSource) if no such element is found.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).singleOrDefault({predicate}, Bridge.getDefaultValue({TSource}))")]
        public static TSource SingleOrDefault<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(TSource);
        }

        /// <summary>
        /// Bypasses a specified number of elements in a sequence and then returns the
        /// remaining elements.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return elements from.
        /// </param>
        /// <param name="count">
        /// The number of elements to skip before returning the remaining elements.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements that
        /// occur after the specified index in the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).skip({count})")]
        public static EnumerableInstance<TSource> Skip<TSource>(this IEnumerable<TSource> source, int count)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Bypasses elements in a sequence as long as a specified condition is true
        /// and then returns the remaining elements.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return elements from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements from
        /// the input sequence starting at the first element in the linear series that
        /// does not pass the test specified by predicate.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).skipWhile({predicate})")]
        public static EnumerableInstance<TSource> SkipWhile<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Bypasses elements in a sequence as long as a specified condition is true
        /// and then returns the remaining elements. The element's index is used in the
        /// logic of the predicate function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to return elements from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each source element for a condition; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements from
        /// the input sequence starting at the first element in the linear series that
        /// does not pass the test specified by predicate.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).skipWhile({predicate})")]
        public static EnumerableInstance<TSource> SkipWhile<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableSum()")]
        public static decimal? Sum(this EnumerableInstance<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Decimal values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum()")]
        public static decimal? Sum(this IEnumerable<decimal?> source)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        [Template("{this}.sum()")]
        public static decimal Sum(this EnumerableInstance<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Decimal values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Decimal values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
        public static decimal Sum(this IEnumerable<decimal> source)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableSum()")]
        public static double? Sum(this EnumerableInstance<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Double values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum()")]
        public static double? Sum(this IEnumerable<double?> source)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("{this}.sum()")]
        public static double Sum(this EnumerableInstance<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Double values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Double values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
        public static double Sum(this IEnumerable<double> source)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableSum()")]
        public static float? Sum(this EnumerableInstance<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Single values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum()")]
        public static float? Sum(this IEnumerable<float?> source)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("{this}.sum()")]
        public static float Sum(this EnumerableInstance<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Single values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Single values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
        public static float Sum(this IEnumerable<float> source)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableSum()")]
        public static int? Sum(this EnumerableInstance<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int32 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum()")]
        public static int? Sum(this IEnumerable<int?> source)
        {
            return default(int?);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        [Template("{this}.sum()")]
        public static int Sum(this EnumerableInstance<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Int32 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int32 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
        public static int Sum(this IEnumerable<int> source)
        {
            return default(int);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("{this}.nullableSum()")]
        public static long? Sum(this EnumerableInstance<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Computes the sum of a sequence of nullable System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of nullable System.Int64 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum()")]
        public static long? Sum(this IEnumerable<long?> source)
        {
            return default(long?);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        [Template("{this}.sum()")]
        public static long Sum(this EnumerableInstance<long> source)
        {
            return default(long);
        }

        /// <summary>
        /// Computes the sum of a sequence of System.Int64 values.
        /// </summary>
        /// <param name="source">
        /// A sequence of System.Int64 values to calculate the sum of.
        /// </param>
        /// <returns>
        /// The sum of the values in the sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum()")]
        public static long Sum(this IEnumerable<long> source)
        {
            return default(long);
        }

        /// <summary>
        /// Computes the sum of the sequence of nullable System.Decimal values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum({selector})")]
        public static decimal? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal?> selector)
        {
            return default(decimal?);
        }

        /// <summary>
        /// Computes the sum of the sequence of System.Decimal values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Decimal.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
        public static decimal Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, decimal> selector)
        {
            return default(decimal);
        }

        /// <summary>
        /// Computes the sum of the sequence of nullable System.Double values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum({selector})")]
        public static double? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, double?> selector)
        {
            return default(double?);
        }

        /// <summary>
        /// Computes the sum of the sequence of System.Double values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
        public static double Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, double> selector)
        {
            return default(double);
        }

        /// <summary>
        /// Computes the sum of the sequence of nullable System.Single values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum({selector})")]
        public static float? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, float?> selector)
        {
            return default(float?);
        }

        /// <summary>
        /// Computes the sum of the sequence of System.Single values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
        public static float Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, float> selector)
        {
            return default(float);
        }

        /// <summary>
        /// Computes the sum of the sequence of nullable System.Int32 values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum({selector})")]
        public static int? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, int?> selector)
        {
            return default(int?);
        }

        /// <summary>
        /// Computes the sum of the sequence of System.Int32 values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int32.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
        public static int Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, int> selector)
        {
            return default(int);
        }

        /// <summary>
        /// Computes the sum of the sequence of nullable System.Int64 values that are
        /// obtained by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).nullableSum({selector})")]
        public static long? Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, long?> selector)
        {
            return default(long?);
        }

        /// <summary>
        /// Computes the sum of the sequence of System.Int64 values that are obtained
        /// by invoking a transform function on each element of the input sequence.
        /// </summary>
        /// <param name="source">
        /// A sequence of values that are used to calculate a sum.
        /// </param>
        /// <param name="selector">
        /// A transform function to apply to each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// The sum of the projected values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or selector is null.
        /// </exception>
        /// <exception cref="System.OverflowException">
        /// The sum is larger than System.Int64.MaxValue.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).sum({selector})")]
        public static long Sum<TSource>(this IEnumerable<TSource> source, Func<TSource, long> selector)
        {
            return default(long);
        }

        /// <summary>
        /// Returns a specified number of contiguous elements from the start of a sequence.
        /// </summary>
        /// <param name="source">
        /// The sequence to return elements from.
        /// </param>
        /// <param name="count">
        /// The number of elements to return.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the specified
        /// number of elements from the start of the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).take({count})")]
        public static EnumerableInstance<TSource> Take<TSource>(this IEnumerable<TSource> source, int count)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns elements from a sequence as long as a specified condition is true.
        /// </summary>
        /// <param name="source">
        /// A sequence to return elements from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements from
        /// the input sequence that occur before the element at which the test no longer
        /// passes.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).takeWhile({predicate})")]
        public static EnumerableInstance<TSource> TakeWhile<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Returns elements from a sequence as long as a specified condition is true.
        /// The element's index is used in the logic of the predicate function.
        /// </summary>
        /// <param name="source">
        /// The sequence to return elements from.
        /// </param>
        /// <param name="predicate">
        /// A function to test each source element for a condition; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements from
        /// the input sequence that occur before the element at which the test no longer
        /// passes.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).takeWhile({predicate})")]
        public static EnumerableInstance<TSource> TakeWhile<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Performs a subsequent ordering of the elements in a sequence in ascending
        /// order according to a key.
        /// </summary>
        /// <param name="source">
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; that contains elements to sort.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted according
        /// to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).thenBy({keySelector})")]
        public static IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(this IOrderedEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Performs a subsequent ordering of the elements in a sequence in ascending
        /// order by using a specified comparer.
        /// </summary>
        /// <param name="source">
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; that contains elements to sort.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted according
        /// to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).thenBy({keySelector}, {comparer})")]
        public static IOrderedEnumerable<TSource> ThenBy<TSource, TKey>(this IOrderedEnumerable<TSource> source, Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Performs a subsequent ordering of the elements in a sequence in descending
        /// order, according to a key.
        /// </summary>
        /// <param name="source">
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; that contains elements to sort.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted in
        /// descending order according to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).thenByDescending({keySelector}, {comparer})")]
        public static IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(this IOrderedEnumerable<TSource> source, Func<TSource, TKey> keySelector)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Performs a subsequent ordering of the elements in a sequence in descending
        /// order by using a specified comparer.
        /// </summary>
        /// <param name="source">
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; that contains elements to sort.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// An System.Linq.IOrderedEnumerable&lt;TElement&gt; whose elements are sorted in
        /// descending order according to a key.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        /// <remarks>Bridge.NET has no mapping for this in JavaScript.</remarks>
        [Template("Bridge.Linq.Enumerable.from({source}).thenByDescending({keySelector}, {comparer})")]
        public static IOrderedEnumerable<TSource> ThenByDescending<TSource, TKey>(this IOrderedEnumerable<TSource> source, Func<TSource, TKey> keySelector, IComparer<TKey> comparer)
        {
            return default(IOrderedEnumerable<TSource>);
        }

        /// <summary>
        /// Creates an array from a System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to create an array from.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An array that contains the elements from the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toArray()")]
        public static TSource[] ToArray<TSource>(this IEnumerable<TSource> source)
        {
            return default(TSource[]);
        }

        /// <summary>
        /// Creates a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// A System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; that contains keys and
        /// values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.-or-keySelector produces a key that is null.
        /// </exception>
        /// <exception cref="System.ArgumentException">
        /// keySelector produces duplicate keys for two elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, null, {TKey}, {TSource})")]
        public static IDictionary<TKey, TSource> ToDictionary<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector)
        {
            return default(IDictionary<TKey, TSource>);
        }

        /// <summary>
        /// Creates a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to specified key selector and element selector functions.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="elementSelector">
        /// A transform function to produce a result element value from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the value returned by elementSelector.
        /// </typeparam>
        /// <returns>
        /// A System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; that contains values
        /// of type TElement selected from the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.-or-keySelector produces
        /// a key that is null.
        /// </exception>
        /// <exception cref="System.ArgumentException">
        /// keySelector produces duplicate keys for two elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, {elementSelector}, {TKey}, {TElement})")]
        public static IDictionary<TKey, TElement> ToDictionary<TSource, TKey, TElement>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
        {
            return default(IDictionary<TKey, TElement>);
        }

        /// <summary>
        /// Creates a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function and key comparer.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the keys returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// A System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; that contains keys and
        /// values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.-or-keySelector produces a key that is null.
        /// </exception>
        /// <exception cref="System.ArgumentException">
        /// keySelector produces duplicate keys for two elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, null, {TKey}, {TSource}, {comparer})")]
        public static IDictionary<TKey, TSource> ToDictionary<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, IEqualityComparer<TKey> comparer)
        {
            return default(IDictionary<TKey, TSource>);
        }

        /// <summary>
        /// Creates a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function, a comparer, and an element
        /// selector function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Collections.Generic.Dictionary&lt;TKey,TValue&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="elementSelector">
        /// A transform function to produce a result element value from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the value returned by elementSelector.
        /// </typeparam>
        /// <returns>
        /// A System.Collections.Generic.Dictionary&lt;TKey,TValue&gt; that contains values
        /// of type TElement selected from the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.-or-keySelector produces
        /// a key that is null.
        /// </exception>
        /// <exception cref="System.ArgumentException">
        /// keySelector produces duplicate keys for two elements.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toDictionary({keySelector}, {elementSelector}, {TKey}, {TElement}, {comparer})")]
        public static IDictionary<TKey, TElement> ToDictionary<TSource, TKey, TElement>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return default(IDictionary<TKey, TElement>);
        }

        /// <summary>
        /// Creates a System.Collections.Generic.List&lt;T&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Collections.Generic.List&lt;T&gt;
        /// from.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// A System.Collections.Generic.List&lt;T&gt; that contains elements from the input
        /// sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toList({TSource})")]
        public static List<TSource> ToList<TSource>(this IEnumerable<TSource> source)
        {
            return default(List<TSource>);
        }

        /// <summary>
        /// Creates a System.Linq.Lookup&lt;TKey,TElement&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Linq.Lookup&lt;TKey,TElement&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// A System.Linq.Lookup&lt;TKey,TElement&gt; that contains keys and values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector})")]
        public static Lookup<TKey, TSource> ToLookup<TSource, TKey>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector)
        {
            return default(Lookup<TKey, TSource>);
        }

        /// <summary>
        /// Creates a System.Linq.Lookup&lt;TKey,TElement&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to specified key selector and element selector functions.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Linq.Lookup&lt;TKey,TElement&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="elementSelector">
        /// A transform function to produce a result element value from each element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the value returned by elementSelector.
        /// </typeparam>
        /// <returns>
        /// A System.Linq.Lookup&lt;TKey,TElement&gt; that contains values of type TElement
        /// selected from the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, {elementSelector})")]
        public static Lookup<TKey, TElement> ToLookup<TSource, TKey, TElement>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector)
        {
            return default(Lookup<TKey, TElement>);
        }

        /// <summary>
        /// Creates a System.Linq.Lookup&lt;TKey,TElement&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function and key comparer.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Linq.Lookup&lt;TKey,TElement&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <returns>
        /// A System.Linq.Lookup&lt;TKey,TElement&gt; that contains keys and values.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, null, {comparer})")]
        public static Lookup<TKey, TSource> ToLookup<TSource, TKey>(this IEnumerable<TSource> source, Func<TSource, TKey> keySelector,
            IEqualityComparer<TKey> comparer)
        {
            return default(Lookup<TKey, TSource>);
        }

        /// <summary>
        /// Creates a System.Linq.Lookup&lt;TKey,TElement&gt; from an System.Collections.Generic.IEnumerable&lt;T&gt;
        /// according to a specified key selector function, a comparer and an element
        /// selector function.
        /// </summary>
        /// <param name="source">
        /// The System.Collections.Generic.IEnumerable&lt;T&gt; to create a System.Linq.Lookup&lt;TKey,TElement&gt;
        /// from.
        /// </param>
        /// <param name="keySelector">
        /// A function to extract a key from each element.
        /// </param>
        /// <param name="elementSelector">
        /// A transform function to produce a result element value from each element.
        /// </param>
        /// <param name="comparer">
        /// An System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare keys.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <typeparam name="TKey">
        /// The type of the key returned by keySelector.
        /// </typeparam>
        /// <typeparam name="TElement">
        /// The type of the value returned by elementSelector.
        /// </typeparam>
        /// <returns>
        /// A System.Linq.Lookup&lt;TKey,TElement&gt; that contains values of type TElement
        /// selected from the input sequence.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or keySelector or elementSelector is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).toLookup({keySelector}, {elementSelector}, {comparer})")]
        public static Lookup<TKey, TElement> ToLookup<TSource, TKey, TElement>(this IEnumerable<TSource> source,
            Func<TSource, TKey> keySelector, Func<TSource, TElement> elementSelector, IEqualityComparer<TKey> comparer)
        {
            return default(Lookup<TKey, TElement>);
        }

        /// <summary>
        /// Produces the set union of two sequences by using the default equality comparer.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements form
        /// the first set for the union.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements form
        /// the second set for the union.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements from
        /// both input sequences, excluding duplicates.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).union({second})")]
        public static EnumerableInstance<TSource> Union<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Produces the set union of two sequences by using a specified System.Collections.Generic.IEqualityComparer&lt;T&gt;.
        /// </summary>
        /// <param name="first">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements form
        /// the first set for the union.
        /// </param>
        /// <param name="second">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; whose distinct elements form
        /// the second set for the union.
        /// </param>
        /// <param name="comparer">
        /// The System.Collections.Generic.IEqualityComparer&lt;T&gt; to compare values.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of the input sequences.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains the elements from
        /// both input sequences, excluding duplicates.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).union({second}, {comparer})")]
        public static EnumerableInstance<TSource> Union<TSource>(this IEnumerable<TSource> first, IEnumerable<TSource> second,
            IEqualityComparer<TSource> comparer)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Filters a sequence of values based on a predicate.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to filter.
        /// </param>
        /// <param name="predicate">
        /// A function to test each element for a condition.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements from
        /// the input sequence that satisfy the condition.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).where({predicate})")]
        public static EnumerableInstance<TSource> Where<TSource>(this IEnumerable<TSource> source, Func<TSource, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Filters a sequence of values based on a predicate. Each element's index is
        /// used in the logic of the predicate function.
        /// </summary>
        /// <param name="source">
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; to filter.
        /// </param>
        /// <param name="predicate">
        /// A function to test each source element for a condition; the second parameter
        /// of the function represents the index of the source element.
        /// </param>
        /// <typeparam name="TSource">
        /// The type of the elements of source.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains elements from
        /// the input sequence that satisfy the condition.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// source or predicate is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({source}).where({predicate})")]
        public static EnumerableInstance<TSource> Where<TSource>(this IEnumerable<TSource> source, Func<TSource, int, bool> predicate)
        {
            return default(EnumerableInstance<TSource>);
        }

        /// <summary>
        /// Merges two sequences by using the specified predicate function.
        /// </summary>
        /// <param name="first">
        /// The first sequence to merge.
        /// </param>
        /// <param name="second">
        /// The second sequence to merge.
        /// </param>
        /// <param name="resultSelector">
        /// A function that specifies how to merge the elements from the two sequences.
        /// </param>
        /// <typeparam name="TFirst">
        /// The type of the elements of the first input sequence.
        /// </typeparam>
        /// <typeparam name="TSecond">
        /// The type of the elements of the second input sequence.
        /// </typeparam>
        /// <typeparam name="TResult">
        /// The type of the elements of the result sequence.
        /// </typeparam>
        /// <returns>
        /// An System.Collections.Generic.IEnumerable&lt;T&gt; that contains merged elements
        /// of two input sequences.
        /// </returns>
        /// <exception cref="System.ArgumentNullException">
        /// first or second is null.
        /// </exception>
        [Template("Bridge.Linq.Enumerable.from({first}).zip({second}, {resultSelector})")]
        public static EnumerableInstance<TResult> Zip<TFirst, TSecond, TResult>(this IEnumerable<TFirst> first, IEnumerable<TSecond> second,
            Func<TFirst, TSecond, TResult> resultSelector)
        {
            return default(EnumerableInstance<TResult>);
        }
    }
}
