using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    [External]
    [Name("DataTransferItemList")]
    public class DataTransferItemList : IEnumerable<DataTransferItem>
    {
        extern internal DataTransferItemList();

        public extern virtual DataTransferItem this[int index] { get; }

        /// <summary>
        /// Adds an File to the drag item list and returns a DataTransferItem for the new item.
        /// </summary>
        /// <param name="file"></param>
        /// <returns></returns>
        public extern DataTransferItem Add(File file);

        /// <summary>
        /// Adds a string of a specific type to the drag item list and returns a DataTransferItem for the new item.
        /// </summary>
        /// <param name="data">A string representing the drag item's data.</param>
        /// <param name="type">A string of the drag item's type.
        /// Some example types are text/html and text/plain.</param>
        /// <returns></returns>
        public extern DataTransferItem Add(string data, string type);

        /// <summary>
        /// Removes the drag item from the list at the given index.
        /// </summary>
        /// <param name="index">index of the item in the drag data list to remove.</param>
        public extern void Remove(int index);

        /// <summary>
        /// Removes all of the drag items from the list.
        /// </summary>
        public extern void Clear();

        /// <summary>
        /// Number of drag items in the list.
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<DataTransferItem> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}