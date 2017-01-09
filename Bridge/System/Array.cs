using Bridge;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace System
{
    [External]
    [Name("Array")]
    public sealed class Array : IEnumerable, ICloneable, IList
    {
        public extern int Length
        {
            [Template("{this}.length")]
            get;
        }

        private extern Array();

        public extern object this[int index]
        {
            [External]
            get;
            [External]
            set;
        }

        [Template("new (System.Collections.ObjectModel.ReadOnlyCollection$1({T}))({array})")]
        public static extern ReadOnlyCollection<T> AsReadOnly<T>(T[] array);

        [Template("System.Array.convertAll({array}, {converter})")]
        public static extern TOutput[] ConvertAll<TInput, TOutput>(TInput[] array, Converter<TInput, TOutput> converter);

        [Template("(System.Array.findIndex({array}, {match}) !== -1)")]
        public static extern bool Exists<T>(T[] array, Predicate<T> match);

        [Template("System.Array.find({T}, {array}, {match})")]
        public static extern T Find<T>(T[] array, Predicate<T> match);

        [Template("System.Array.findAll({array}, {match})")]
        public static extern T[] FindAll<T>(T[] array, Predicate<T> match);

        [Template("System.Array.findIndex({array}, {match})")]
        public static extern int FindIndex<T>(T[] array, Predicate<T> match);

        [Template("System.Array.findIndex({array}, {startIndex}, {match})")]
        public static extern int FindIndex<T>(T[] array, int startIndex, Predicate<T> match);

        [Template("System.Array.findIndex({array}, {startIndex}, {count}, {match})")]
        public static extern int FindIndex<T>(T[] array, int startIndex, int count, Predicate<T> match);

        [Template("System.Array.findLast({T}, {array}, {match})")]
        public static extern T FindLast<T>(T[] array, Predicate<T> match);

        [Template("System.Array.findLastIndex({array}, {match})")]
        public static extern int FindLastIndex<T>(T[] array, Predicate<T> match);

        [Template("System.Array.findLastIndex({array}, {startIndex}, {match})")]
        public static extern int FindLastIndex<T>(T[] array, int startIndex, Predicate<T> match);

        [Template("System.Array.findLastIndex({array}, {startIndex}, {count}, {match})")]
        public static extern int FindLastIndex<T>(T[] array, int startIndex, int count, Predicate<T> match);

        [Template("System.Array.forEach({array}, {action})")]
        public static extern void ForEach<T>(T[] array, Action<T> action);

        [Template("System.Array.forEach({array}, {action})")]
        public static extern void ForEach<T>(T[] array, Action<T, int, T[]> action);

        [Template("System.Array.indexOfT({array}, {value})")]
        public static extern int IndexOf(Array array, Object value);

        [Template("System.Array.indexOfT({array}, {value}, {startIndex})")]
        public static extern int IndexOf(Array array, Object value, int startIndex);

        [Template("System.Array.indexOfT({array}, {value}, {startIndex}, {count})")]
        public static extern int IndexOf(Array array, Object value, int startIndex, int count);

        [Template("System.Array.indexOfT({array}, {value})")]
        public static extern int IndexOf<T>(T[] array, T value);

        [Template("System.Array.indexOfT({array}, {value}, {startIndex})")]
        public static extern int IndexOf<T>(T[] array, T value, int startIndex);

        [Template("System.Array.indexOfT({array}, {value}, {startIndex}, {count})")]
        public static extern int IndexOf<T>(T[] array, T value, int startIndex, int count);

        [Template("System.Array.lastIndexOfT({array}, {value})")]
        public static extern int LastIndexOf(Array array, Object value);

        [Template("System.Array.lastIndexOfT({array}, {value}, {startIndex})")]
        public static extern int LastIndexOf(Array array, Object value, int startIndex);

        [Template("System.Array.lastIndexOfT({array}, {value}, {startIndex}, {count})")]
        public static extern int LastIndexOf(Array array, Object value, int startIndex, int count);

        [Template("System.Array.lastIndexOfT({array}, {value})")]
        public static extern int LastIndexOf<T>(T[] array, T value);

        [Template("System.Array.lastIndexOfT({array}, {value}, {startIndex})")]
        public static extern int LastIndexOf<T>(T[] array, T value, int startIndex);

        [Template("System.Array.lastIndexOfT({array}, {value}, {startIndex}, {count})")]
        public static extern int LastIndexOf<T>(T[] array, T value, int startIndex, int count);

        [Template("System.Array.trueForAll({array}, {match})")]
        public static extern bool TrueForAll<T>(T[] array, Predicate<T> match);

        public extern Array Concat(params object[] items);

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <returns></returns>
        public extern int IndexOf(string searchElement);

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public extern int IndexOf(string searchElement, int fromIndex);

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <returns></returns>
        public extern int LastIndexOf(string searchString);

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public extern int LastIndexOf(string searchString, int fromIndex);

        public extern string Join();

        public extern string Join(string separator);

        public extern object Pop();

        public extern void Reverse();

        public extern object Shift();

        public extern Array Slice(int start);

        public extern Array Slice(int start, int end);

        [Name("sort")]
        public extern void JsSort();

        [Name("sort")]
        public extern void JsSort(Func<object, object, int> compareFunction);

        public extern Array Splice(int start, int deleteCount, params object[] newItems);

        public extern void Unshift(params object[] items);

        [Template("Bridge.getEnumerator({this})")]
        public extern IEnumerator GetEnumerator();

        [Template("System.Array.get({this}, {indices})")]
        public extern object GetValue(params int[] indices);

        [Template("System.Array.set({this}, {value}, {indices})")]
        public extern void SetValue(object value, params int[] indices);

        [Template("System.Array.getLength({this}, {dimension})")]
        public extern int GetLength(int dimension);

        public extern int Rank
        {
            [Template("System.Array.getRank({this})")]
            get;
        }

        [Template("System.Array.getLower({this}, {dimension})")]
        public extern int GetLowerBound(int dimension);

        [Template("(System.Array.getLength({this}, {dimension}) - 1)")]
        public extern int GetUpperBound(int dimension);

        [Template("System.Array.toEnumerable({this})")]
        public extern IEnumerable ToEnumerable();

        [Template("System.Array.toEnumerable({this})")]
        public extern IEnumerable<T> ToEnumerable<T>();

        [Template("System.Array.toEnumerator({this})")]
        public extern IEnumerator ToEnumerator();

        [Template("System.Array.toEnumerator({this}, {T})")]
        public extern IEnumerator<T> ToEnumerator<T>();

        [Template("System.Array.clone({this})")]
        public extern object Clone();

        [Template("System.Array.init({count}, {value}, {T})")]
        public static extern T[] Repeat<T>(T value, int count);

        [Template("System.Array.fill({dst}, {T:defaultFn}, {index}, {count})")]
        public static extern void Clear<T>(T[] dst, int index, int count);

        [Template("System.Array.copy({src}, {spos}, {dst}, {dpos}, {len})")]
        public static extern void Copy(Array src, int spos, Array dst, int dpos, int len);

        [Template("System.Array.copy({src}, 0, {dst}, 0, {len})")]
        public static extern void Copy(Array src, Array dst, int len);

        [Template("System.Array.copy({this}, 0, {array}, {index}, {this}.length)")]
        public extern void CopyTo(Array array, int index);

        [Template("System.Array.copy({this}, 0, {array}, {index}.toNumber(), {this}.length)")]
        public extern void CopyTo(Array array, long index);

        [Template("System.Array.resize({array}, {newSize}, {T:defaultFn})")]
        public static extern void Resize<T>(ref T[] array, int newSize);

        [Template("System.Array.reverse({array})")]
        public static extern void Reverse(Array array);

        [Template("System.Array.reverse({array}, {index}, {length})")]
        public static extern void Reverse(Array array, int index, int length);

        [Template("System.Array.binarySearch({array}, 0, {array}.length, {value})")]
        public static extern int BinarySearch<T>(T[] array, T value);

        [Template("System.Array.binarySearch({array}, {index}, {length}, {value})")]
        public static extern int BinarySearch<T>(T[] array, int index, int length, T value);

        [Template("System.Array.binarySearch({array}, 0, {array}.length, {value}, {comparer})")]
        public static extern int BinarySearch<T>(T[] array, T value, IComparer<T> comparer);

        [Template("System.Array.binarySearch({array}, {index}, {length}, {value}, {comparer})")]
        public static extern int BinarySearch<T>(T[] array, int index, int length, T value, IComparer<T> comparer);

        [Template("System.Array.sort({array}, {index}, {length}, {comparer})")]
        public static extern void Sort<T>(T[] array, int index, int length, IComparer<T> comparer);

        [Template("System.Array.sort({array}, {index}, {length})")]
        public static extern void Sort<T>(T[] array, int index, int length);

        [Template("System.Array.sort({array})")]
        public static extern void Sort<T>(T[] array);

        [Template("System.Array.sort({array}, {comparer})")]
        public static extern void Sort<T>(T[] array, IComparer<T> comparer);

        /// <summary>
        /// Creates a one-dimensional Array of the specified Type and length, with zero-based indexing.
        /// </summary>
        /// <param name="elementType">The Type of the Array to create.</param>
        /// <param name="length">The size of the Array to create.</param>
        /// <returns>A new one-dimensional Array of the specified Type with the specified length, using zero-based indexing.</returns>
        [Template("System.Array.init({length}, Bridge.getDefaultValue({elementType}), {elementType})")]
        public static extern Array CreateInstance(Type elementType, int length);

        /// <summary>
        /// Creates a two-dimensional Array of the specified Type and dimension lengths, with zero-based indexing.
        /// </summary>
        /// <param name="elementType">The Type of the Array to create.</param>
        /// <param name="length1">The size of the first dimension of the Array to create.</param>
        /// <param name="length2">The size of the second dimension of the Array to create.</param>
        /// <returns>A new two-dimensional Array of the specified Type with the specified length for each dimension, using zero-based indexing.</returns>
        [Template("System.Array.create(Bridge.getDefaultValue({elementType}), null, {elementType}, {length1}, {length2})")]
        public static extern Array CreateInstance(Type elementType, int length1, int length2);

        /// <summary>
        /// Creates a three-dimensional Array of the specified Type and dimension lengths, with zero-based indexing.
        /// </summary>
        /// <param name="elementType">The Type of the Array to create.</param>
        /// <param name="length1">The size of the first dimension of the Array to create.</param>
        /// <param name="length2">The size of the second dimension of the Array to create.</param>
        /// <param name="length3">The size of the third dimension of the Array to create.</param>
        /// <returns>A new three-dimensional Array of the specified Type with the specified length for each dimension, using zero-based indexing.</returns>
        [Template("System.Array.create(Bridge.getDefaultValue({elementType}), null, {elementType}, {length1}, {length2}, {length3})")]
        public static extern Array CreateInstance(Type elementType, int length1, int length2, int length3);

        /// <summary>
        /// Creates a multidimensional Array of the specified Type and dimension lengths, with zero-based indexing. The dimension lengths are specified in an array of 32-bit integers.
        /// </summary>
        /// <param name="elementType">The Type of the Array to create.</param>
        /// <param name="lengths">An array of 32-bit integers that represent the size of each dimension of the Array to create.</param>
        /// <returns>A new multidimensional Array of the specified Type with the specified length for each dimension, using zero-based indexing.</returns>
        [Template("System.Array.create(Bridge.getDefaultValue({elementType}), null, {elementType}, {lengths:array})")]
        public static extern Array CreateInstance(Type elementType, params int[] lengths);

        extern int ICollection.Count
        {
            get;
        }

        extern void IList.Add(object item);

        extern void IList.Clear();

        extern bool IList.Contains(object item);

        extern int IList.IndexOf(object item);

        extern void IList.Insert(int index, object item);

        extern void IList.RemoveAt(int index);

        extern bool IList.Remove(object item);

        extern bool IList.IsReadOnly
        {
            get;
        }
    }

    [External]
    public static class ArrayExtensions
    {
        [Template("System.Array.contains({array}, {item}, {T})")]
        public static extern bool Contains<T>(this T[] array, T item);

        [Template("{array}.every({callback})")]
        public static extern bool Every<T>(this T[] array, Func<T, int, T[], bool> callback);

        [Template("{array}.every({callback})")]
        public static extern bool Every<T>(this T[] array, Func<T, bool> callback);

        [Template("{array}.filter({callback})")]
        public static extern T[] Filter<T>(this T[] array, Func<T, int, T[], bool> callback);

        [Template("{array}.filter({callback})")]
        public static extern T[] Filter<T>(this T[] array, Func<T, bool> callback);

        [Template("{array}.map({callback})")]
        public static extern TResult[] Map<TSource, TResult>(this TSource[] array, Func<TSource, int, TSource[], TResult> callback);

        [Template("{array}.map({callback})")]
        public static extern TResult[] Map<TSource, TResult>(this TSource[] array, Func<TSource, TResult> callback);

        [Template("{array}.some({callback})")]
        public static extern bool Some<T>(this T[] array, Func<T, int, T[], bool> callback);

        [Template("{array}.some({callback})")]
        public static extern bool Some<T>(this T[] array, Func<T, bool> callback);

        [Template("{source}.push({*values})")]
        public static extern void Push<T>(this T[] source, params T[] values);

        [Template("{array}.sort()")]
        public static extern void Sort<T>(this T[] array);

        [Template("{array}.sort({compareCallback})")]
        public static extern void Sort<T>(this T[] array, Func<T, T, int> compareCallback);

        [Template("{array}.forEach({callback})")]
        public static extern void ForEach<T>(this T[] array, Action<T, int, T[]> callback);

        [Template("{array}.forEach({callback})")]
        public static extern void ForEach<T>(this T[] array, Action<T> callback);
    }
}