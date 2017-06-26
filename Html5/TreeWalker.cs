namespace Bridge.Html5
{
    /// <summary>
    /// The TreeWalker object represents the nodes of a document subtree and a position within them.
    /// A TreeWalker can be created using the Document.createTreeWalker() method.
    /// </summary>
    [External]
    [Name("TreeWalker")]
    public class TreeWalker
    {
        extern internal TreeWalker();

        /// <summary>
        /// Returns a Node representing the root node as specified when the TreeWalker was created.
        /// </summary>
        public readonly Node Root;

        /// <summary>
        /// Returns an unsigned long being a bitmask made of constants describing the types of Node that must to be presented. Non-matching nodes are skipped, but their children may be included, if relevant.
        /// </summary>
        public readonly NodeFilter WhatToShow;

        /// <summary>
        /// Returns a NodeFilter used to select the relevant nodes.
        /// </summary>
        public readonly INodeFilter Filter;

        /// <summary>
        /// the Node on which the TreeWalker is currently pointing at.
        /// </summary>
        public Node CurrentNode;

        /// <summary>
        /// Moves the current Node to the first visible ancestor node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node ParentNode();

        /// <summary>
        /// Moves the current Node to the first visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node FirstChild();

        /// <summary>
        /// Moves the current Node to the last visible child of the current node, and returns the found child. It also moves the current node to this child. If no such child exists, returns null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node LastChild();

        /// <summary>
        /// Moves the current Node to its previous sibling, if any, and returns the found sibling. I there is no such node, return null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node PreviousSibling();

        /// <summary>
        /// Moves the current Node to its next sibling, if any, and returns the found sibling. I there is no such node, return null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node NextSibling();

        /// <summary>
        /// Moves the current Node to the previous visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists,or if it is before that the root node defined at the object construction, returns null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node PreviousNode();

        /// <summary>
        /// Moves the current Node to the next visible node in the document order, and returns the found node. It also moves the current node to this one. If no such node exists, returns null and the current node is not changed.
        /// </summary>
        /// <returns></returns>
        public virtual extern Node NextNode();
    }
}