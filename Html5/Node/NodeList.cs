using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// NodeList objects are collections of nodes such as those returned by Node.childNodes and the querySelectorAll method.
    /// </summary>
    [External]
    [Name("NodeList")]
    public class NodeList : IEnumerable<Node>
    {
        protected extern internal NodeList();

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual extern Node this[int index] { get; }

        /// <summary>
        /// Returns an item in the list by its index, or null if out-of-bounds. Equivalent to nodeList[idx].
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual extern Node GetItem(int index);

        /// <summary>
        /// The number of nodes in the NodeList.
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<Node> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}