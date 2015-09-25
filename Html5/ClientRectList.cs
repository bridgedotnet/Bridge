using System.Collections.Generic;

using Bridge;
using System.Collections;

namespace Bridge.Html5
{
    /// <summary>
    /// collection of rectangles that indicate the bounding rectangles for each box in a client.
    /// </summary>
    [Ignore]
    [Name("ClientRectList")]
    public class ClientRectList: IEnumerable<ClientRect>
    {
        protected internal ClientRectList()
        {
        }

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual ClientRect this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds. Equivalent to nodeList[idx].
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual ClientRect GetItem(int index)
        {
            return null;
        }

        /// <summary>
        /// The number of items in the ClientRectList.
        /// </summary>
        public readonly int Length;

        public virtual IEnumerator<ClientRect> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}