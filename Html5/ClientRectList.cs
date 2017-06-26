using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// collection of rectangles that indicate the bounding rectangles for each box in a client.
    /// </summary>
    [External]
    [Name("ClientRectList")]
    public class ClientRectList : IEnumerable<ClientRect>
    {
        protected extern internal ClientRectList();

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public extern virtual ClientRect this[int index] { get; }

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds. Equivalent to nodeList[idx].
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual extern ClientRect GetItem(int index);

        /// <summary>
        /// The number of items in the ClientRectList.
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<ClientRect> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}