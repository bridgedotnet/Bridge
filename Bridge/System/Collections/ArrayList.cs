using Bridge;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace System.Collections
{
    [Name("System.Collections.Generic.List$1(System.Object)")]
    [External, Reflectable]
    public class ArrayList : IList, ICloneable
    {
        //TODO: add Adapter method.
        //TODO: add CopyTo with more arguments.
        //TODO: add more reverse methods.
        //TODO: add SetRange method.
        //TODO: add Sort method with more arguments.

        [AccessorsIndexer]
        public extern object this[int index] { get; set; }

        extern bool IList.IsReadOnly { get; }

        public extern int Count { get; }

        public extern void Add(object item);

        public extern int BinarySearch(object value);

        public extern int BinarySearch(object value, IComparer comparer);

        public extern int BinarySearch(int index, int length, object value, IComparer comparer);

        public extern void AddRange(IList list);

        public extern void Clear();

        public extern bool Contains(object item);

        public extern void CopyTo(Array array, int arrayIndex);

        public extern void CopyTo(Array array);

        public extern IEnumerator GetEnumerator();

        /// <summary>
        /// Do not use this function. It is very slow.
        /// </summary>
        /// <remarks>
        /// Do not use this function. It is very slow.
        /// In fact, don't use this class it is very old, see
        /// https://msdn.microsoft.com/en-us/library/system.collections.arraylist(v=vs.110).aspx
        /// </remarks>
        [Template("{this}.getRange({from}, {to}).getEnumerator()")]
        public extern IEnumerator GetEnumerator(int from, int to);

        public extern int IndexOf(object item);
        
        public extern int IndexOf(object item, int startIndex);

        /// <summary>
        /// Do not use this function. It is very slow.
        /// </summary>
        /// <remarks>
        /// Do not use this function. It is very slow.
        /// In fact, don't use this class it is very old, see
        /// https://msdn.microsoft.com/en-us/library/system.collections.arraylist(v=vs.110).aspx
        /// </remarks>
        [Template("getRange({startIndex}, {count}).indexOf({item}) + {fromIndex}")]
        public extern int IndexOf(object item, int startIndex, int count);

        public extern void Insert(int index, object item);

        public extern void InsertRange(int index, ICollection items);

        public extern int LastIndexOf(object item);

        public extern int LastIndexOf(object item, int fromIndex);


        /// <summary>
        /// Do not use this function. It is very slow.
        /// </summary>
        /// <remarks>
        /// Do not use this function. It is very slow.
        /// In fact, don't use this class it is very old, see
        /// https://msdn.microsoft.com/en-us/library/system.collections.arraylist(v=vs.110).aspx
        /// </remarks>
        [Template("getRange({fromIndex}, {toIndex}).lastIndexOf(item) + {fromIndex}")]
        public extern int LastIndexOf(object item, int fromIndex, int toIndex);

        public extern bool Remove(object item);

        public extern void RemoveAt(int index);

        public extern void RemoveRange(int index, int count);

        public extern void Reverse();

        public extern void Sort();

        [Template("{this}.sort(Bridge.fn.bind({comparer}, {comparer}.compare))")]
        public extern void Sort(IComparer comparer);

        [Template("items")]
        public extern void ToArray();

        [Template("System.Linq.Enumerable.from({this}.items).select(function(x) { return Bridge.cast(x, {type}); }).toArray({type})")]
        public extern void ToArray(Type type);

        [Name("TrimExcess")]
        public extern void TrimToSize();

        [Template("new (System.Collections.Generic.List$1(System.Object))({this})")]
        public extern object Clone();

        public extern ArrayList();

        public extern ArrayList(ICollection collection);

        public extern ArrayList(int capacity);
    }
}
