using System;
using System.Collections.Generic;
using Bridge;

namespace System.Collections.Generic
{
    [Ignore]
    [Namespace("Bridge")]
    public interface IList<T> : ICollection<T>
    {
        T this[int index]
        {
            [Template("Bridge.Array.getItem({this}, {0})")]
            get;
            [Template("Bridge.Array.setItem({this}, {0})")]
            set;
        }

        [Template("Bridge.Array.indexOf({this}, {item})")]
        int IndexOf(T item);

        [Template("Bridge.Array.insert({this}, {index}, {item})")]
        void Insert(int index, T item);

        [Template("Bridge.Array.removeAt({this}, {index})")]
        void RemoveAt(int index);
    }
}
