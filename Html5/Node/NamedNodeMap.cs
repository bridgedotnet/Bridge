using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// A collection of nodes returned by Node.attributes
    /// </summary>
    [External]
    [Name("NamedNodeMap")]
    public class NamedNodeMap : IEnumerable<Node>
    {
        protected internal NamedNodeMap()
        {
        }

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public virtual Node this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public new virtual Node this[string name]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets a node by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual Node GetNamedItem(string name)
        {
            return null;
        }

        /// <summary>
        /// Adds (or replaces) a node by its nodeName
        /// </summary>
        /// <param name="node"></param>
        /// <returns></returns>
        public virtual Node SetNamedItem(Node node)
        {
            return null;
        }

        /// <summary>
        /// Removes a node (or if an attribute, may reveal a default if present)
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual Node RemoveNamedItem(string name)
        {
            return null;
        }

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual Node GetItem(int index)
        {
            return null;
        }

        /// <summary>
        /// Gets a node by namespaceURI and localName
        /// </summary>
        /// <param name="namespaceURI"></param>
        /// <param name="localName"></param>
        /// <returns></returns>
        public virtual Node GetNamedItemNS(string namespaceURI, string localName)
        {
            return null;
        }

        /// <summary>
        /// Adds (or replaces) a node by its localName and namespaceURI
        /// </summary>
        /// <param name="node"></param>
        /// <returns></returns>
        public virtual Node SetNamedItemNS(Node node)
        {
            return null;
        }

        /// <summary>
        /// Removes a node (or if an attribute, may reveal a default if present)
        /// </summary>
        /// <param name="namespaceURI"></param>
        /// <param name="localName"></param>
        /// <returns></returns>
        public virtual Node RemoveNamedItemNS(string namespaceURI, string localName)
        {
            return null;
        }

        /// <summary>
        /// The number of attributes in the node.
        /// </summary>
        public readonly int Length;

        public virtual IEnumerator<Node> GetEnumerator()
        {
            return null;
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return null;
        }
    }
}
