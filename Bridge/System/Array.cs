using Bridge;
using System.Collections;
using System.Collections.Generic;

namespace System
{
    [External]
    [Name("Array")]
    public sealed class Array : IEnumerable, ICloneable
    {
        public readonly int Length = 0;

        private Array()
        {
        }

        public object this[int index]
        {
            [External]
            get
            {
                return null;
            }
            [External]
            set
            {
            }
        }

        public Array Concat(params object[] items)
        {
            return null;
        }

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <returns></returns>
        public int IndexOf(string searchElement)
        {
            return 0;
        }

        /// <summary>
        /// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
        /// </summary>
        /// <param name="searchElement"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public int IndexOf(string searchElement, int fromIndex)
        {
            return 0;
        }

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <returns></returns>
        public int LastIndexOf(string searchString)
        {
            return 0;
        }

        /// <summary>
        /// The lastIndexOf() method returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
        /// </summary>
        /// <param name="searchString"></param>
        /// <param name="fromIndex"></param>
        /// <returns></returns>
        public int LastIndexOf(string searchString, int fromIndex)
        {
            return 0;
        }

        public string Join()
        {
            return null;
        }

        public string Join(string separator)
        {
            return null;
        }

        public object Pop()
        {
            return null;
        }

        public void Push(params object[] items)
        {
        }

        public void Reverse()
        {
        }

        public object Shift()
        {
            return null;
        }

        public Array Slice(int start)
        {
            return null;
        }

        public Array Slice(int start, int end)
        {
            return null;
        }

        [Name("sort")]
        public void JsSort()
        {
        }

        [Name("sort")]
        public void JsSort(Func<object, object, int> compareFunction)
        {
        }

        public Array Splice(int start, int deleteCount, params object[] newItems)
        {
            return null;
        }

        public void Unshift(params object[] items)
        {
        }

        [Template("Bridge.getEnumerator({this})")]
        public IEnumerator GetEnumerator()
        {
            return null;
        }

        [Template("Bridge.Array.get({this}, {indices})")]
        public object GetValue(params int[] indices)
        {
            return null;
        }

        [Template("Bridge.Array.set({this}, {value}, {indices})")]
        public void SetValue(object value, params int[] indices)
        {
        }

        [Template("Bridge.Array.getLength({this}, {dimension})")]
        public int GetLength(int dimension)
        {
            return 0;
        }

        public int Rank
        {
            [Template("Bridge.Array.getRank({this})")]
            get
            {
                return 0;
            }
        }

        [Template("Bridge.Array.getLower({this}, {dimension})")]
        public int GetLowerBound(int dimension)
        {
            return 0;
        }

        [Template("(Bridge.Array.getLength({this}, {dimension}) - 1)")]
        public int GetUpperBound(int dimension)
        {
            return 0;
        }

        [Template("(Bridge.Array.toEnumerable({this})")]
        public IEnumerable ToEnumerable()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerable({this})")]
        public IEnumerable<T> ToEnumerable<T>()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerator({this})")]
        public IEnumerator ToEnumerator()
        {
            return null;
        }

        [Template("(Bridge.Array.toEnumerator({this})")]
        public IEnumerator<T> ToEnumerator<T>()
        {
            return null;
        }

        [Template("(Bridge.Array.clone({this}))")]
        public object Clone()
        {
            return null;
        }

        [Template("Bridge.Array.init({count}, {value})")]
        public static extern T[] Repeat<T>(T value, int count);

        [Template("Bridge.Array.fill({dst}, {T}.getDefaultValue || Bridge.getDefaultValue({T}), {index}, {count})")]
        public static extern void Clear<T>(T[] dst, int index, int count);

        [Template("Bridge.Array.copy({src}, {spos}, {dst}, {dpos}, {len})")]
        public static extern void Copy(Array src, int spos, Array dst, int dpos, int len);

        [Template("Bridge.Array.copy({src}, 0, {dst}, 0, {len})")]
        public static extern void Copy(Array src, Array dst, int len);

        [Template("Bridge.Array.copy({this}, {index}, {array}, 0, {this}.length - {index})")]
        public extern void CopyTo(Array array, int index);

        [Template("Bridge.Array.copy({this}, {index}, {array}, 0, {this}.length - {index})")]
        public extern void CopyTo(Array array, long index);

        [Template("Bridge.Array.resize({array}, {newSize}, {T}.getDefaultValue || Bridge.getDefaultValue({T}))")]
        public static extern void Resize<T>(T[] array, int newSize);

        [Template("Bridge.Array.reverse({array})")]
        public static extern void Reverse(Array array);

        [Template("Bridge.Array.reverse({array}, {index}, {length})")]
        public static extern void Reverse(Array array, int index, int length);

        [Template("Bridge.Array.binarySearch({array}, 0, {array}.length, {value})")]
        public static extern int BinarySearch<T>(T[] array, T value);

        [Template("Bridge.Array.binarySearch({array}, {index}, {length}, {value})")]
        public static extern int BinarySearch<T>(T[] array, int index, int length, T value);

        [Template("Bridge.Array.binarySearch({array}, 0, {array}.length, {value}, {comparer})")]
        public static extern int BinarySearch<T>(T[] array, T value, IComparer<T> comparer);

        [Template("Bridge.Array.binarySearch({array}, {index}, {length}, {value}, {comparer})")]
        public static extern int BinarySearch<T>(T[] array, int index, int length, T value, IComparer<T> comparer);

        [Template("Bridge.Array.sort({array}, {index}, {length}, {comparer})")]
        public static extern void Sort<T>(T[] array, int index, int length, IComparer<T> comparer);

        [Template("Bridge.Array.sort({array}, {index}, {length})")]
        public static extern void Sort<T>(T[] array, int index, int length);

        [Template("Bridge.Array.sort({array})")]
        public static extern void Sort<T>(T[] array);

        [Template("Bridge.Array.sort({array}, {comparer})")]
        public static extern void Sort<T>(T[] array, IComparer<T> comparer);
    }
}
