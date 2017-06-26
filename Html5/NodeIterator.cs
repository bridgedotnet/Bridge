namespace Bridge.Html5
{
    /// <summary>
    /// The NodeIterator interface represents an iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.
    /// A NodeIterator can be created using the Document.createNodeIterator() method
    /// </summary>
    [External]
    [Name("NodeIterator")]
    public class NodeIterator
    {
        extern internal NodeIterator();

        /// <summary>
        /// Returns a Node representing the root node as specified when the NodeIterator was created.
        /// </summary>
        public readonly Node Root;

        /// <summary>
        /// Returns an unsigned long being a bitmask made of constants describing the types of Node that must to be presented. Non-matching nodes are skipped, but their children may be included, if relevant.
        /// </summary>
        public readonly NodeFilter WhatToShow;

        public readonly INodeFilter Filter;

        /// <summary>
        /// Returns the Node to which the iterator is anchored.
        /// </summary>
        public readonly Node ReferenceNode;

        /// <summary>
        /// Returns a Boolean flag that indicates whether the NodeFilter is anchored before, the flag being true, or after, the flag being false, the anchor node.
        /// </summary>
        public readonly bool PointerBeforeReferenceNode;

        /// <summary>
        /// This operation is a no-op. It doesn't do anything. Previously it was telling the engine that the NodeIterator was no more used, but this is now useless.
        /// </summary>
        public virtual extern void Detach();

        /// <summary>
        /// Returns the previous Node in the document, or null if there are none.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node PreviousNode();

        /// <summary>
        /// Returns the next Node in the document, or null if there are none.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node NextNode();
    }
}