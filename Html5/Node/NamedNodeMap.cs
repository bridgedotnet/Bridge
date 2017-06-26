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
        protected extern internal NamedNodeMap();

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public extern virtual Node this[int index] { get; }

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public extern new virtual Node this[string name] { get; }

        /// <summary>
        /// Gets a node by name
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual extern Node GetNamedItem(string name);

        /// <summary>
        /// Adds (or replaces) a node by its nodeName
        /// </summary>
        /// <param name="node"></param>
        /// <returns></returns>
        public virtual extern Node SetNamedItem(Node node);

        /// <summary>
        /// Removes a node (or if an attribute, may reveal a default if present)
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual extern Node RemoveNamedItem(string name);

        /// <summary>
        /// Returns the item at the given index (or null if the index is higher or equal to the number of nodes)
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public virtual extern Node GetItem(int index);

        /// <summary>
        /// Gets a node by namespaceURI and localName
        /// </summary>
        /// <param name="namespaceURI"></param>
        /// <param name="localName"></param>
        /// <returns></returns>
        public virtual extern Node GetNamedItemNS(string namespaceURI, string localName);

        /// <summary>
        /// Adds (or replaces) a node by its localName and namespaceURI
        /// </summary>
        /// <param name="node"></param>
        /// <returns></returns>
        public virtual extern Node SetNamedItemNS(Node node);

        /// <summary>
        /// Removes a node (or if an attribute, may reveal a default if present)
        /// </summary>
        /// <param name="namespaceURI"></param>
        /// <param name="localName"></param>
        /// <returns></returns>
        public virtual extern Node RemoveNamedItemNS(string namespaceURI, string localName);

        /// <summary>
        /// The number of attributes in the node.
        /// </summary>
        public readonly int Length;

        public virtual extern IEnumerator<Node> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}