namespace Bridge.Html5
{
    /// <summary>
    /// A Node is an interface from which a number of DOM types inherit, and allows these various types to be treated (or tested) similarly.
    /// </summary>
    [External]
    [Name("Node")]
    public class Node : EventTarget
    {
        protected extern internal Node();

        /// <summary>
        /// Returns a DOMString representing the base URL. The concept of base URL changes from one language to another; in HTML, it corresponds to the protocol, the domain name and the directory structure, that is all until the last '/'.
        /// </summary>
        public readonly string BaseURI;

        /// <summary>
        /// Returns a live NodeList containing all the children of this node. NodeList being live means that if the children of the Node change, the NodeList object is automatically updated.
        /// </summary>
        public readonly NodeList ChildNodes;

        /// <summary>
        /// Returns a Node representing the first direct child node of the node, or null if the node has no child.
        /// </summary>
        public readonly Node FirstChild;

        /// <summary>
        /// Returns a Node representing the last direct child node of the node, or null if the node has no child.
        /// </summary>
        public readonly Node LastChild;

        /// <summary>
        /// Returns a Node representing the next node in the tree, or null if there isn't such node.
        /// </summary>
        public readonly Node NextSibling;

        /// <summary>
        /// Returns a DOMString containing the name of the Node. The structure of the name will differ with the name type. E.g. An HTMLElement will contain the name of the corresponding tag, like 'audio' for an HTMLAudioElement, a Text node will have the '#text' string, or a Document node will have the '#document' string.
        /// </summary>
        public readonly string NodeName;

        /// <summary>
        /// Returns an unsigned short representing the type of the node.
        /// </summary>
        public readonly NodeType NodeType;

        /// <summary>
        /// Is a DOMString representing the value of an object. For most Node type, this returns null and any set operation is ignored. For nodes of type TEXT_NODE (Text objects), COMMENT_NODE (Comment objects), and PROCESSING_INSTRUCTION_NODE (ProcessingInstruction objects), the value corresponds to the text data contained in the object.
        /// </summary>
        public string NodeValue;

        /// <summary>
        /// Returns the Document that this node belongs to. If no document is associated with it, returns null.
        /// </summary>
        public readonly DocumentInstance OwnerDocument;

        /// <summary>
        /// Returns a Node that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns null.
        /// </summary>
        public readonly Node ParentNode;

        /// <summary>
        /// Returns an Element that is the parent of this node. If the node has no parent, or if that parent is not an Element, this property returns null.
        /// </summary>
        public readonly HTMLElement ParentElement;

        /// <summary>
        /// Returns a Node representing the previous node in the tree, or null if there isn't such node.
        /// </summary>
        public readonly HTMLElement PreviousSibling;

        /// <summary>
        /// Is a DOMString representing the textual content of an element and all its descendants.
        /// </summary>
        public string TextContent;

        /// <summary>
        /// Adds a node to the end of the list of children of a specified parent node. If the node already exists it is removed from current parent node, then added to new parent node.
        /// </summary>
        /// <param name="child">child is the node to append underneath element. Also returned.</param>
        /// <returns></returns>
        public virtual extern Node AppendChild(Node child);

        /// <summary>
        /// Returns a duplicate of the node on which this method was called.
        /// </summary>
        /// <returns>The new node that will be a clone of this node</returns>
        public virtual extern Node CloneNode();

        /// <summary>
        /// Returns a duplicate of the node on which this method was called.
        /// </summary>
        /// <param name="deep">true if the children of the node should also be cloned, or false to clone only the specified node.</param>
        /// <returns>The new node that will be a clone of this node</returns>
        public virtual extern Node CloneNode(bool deep);

        /// <summary>
        /// Compares the position of the current node against another node in any other document.
        /// </summary>
        /// <param name="node">is the node that's being compared against.</param>
        /// <returns>The return value is computed as the relationship that otherNode has with node.</returns>
        public extern virtual DocumentPosition CompareDocumentPosition(Node node);

        /// <summary>
        /// Indicates whether a node is a descendant of a given node.
        /// </summary>
        /// <param name="node">is the node that's being compared against.</param>
        /// <returns>The return value is true if otherNode is a descendant of node, or node itself. Otherwise the return value is false.</returns>
        public virtual extern bool Contains(Node node);

        /// <summary>
        ///  returns a Boolean value indicating whether the current Node has child nodes or not.
        /// </summary>
        /// <returns>Boolean value indicating whether the current Node has child nodes or not</returns>
        public virtual extern bool HasChildNodes();

        /// <summary>
        /// Inserts the specified node before a reference element as a child of the current node.
        /// </summary>
        /// <param name="newElement">The node to insert.</param>
        /// <param name="referenceElement">The node before which newElement is inserted.</param>
        /// <returns>The node being inserted, that is newElement</returns>
        public virtual extern Node InsertBefore(Node newElement, Node referenceElement);

        /// <summary>
        /// Accepts a namespace URI as an argument and returns true if the namespace is the default namespace on the given node or false if not.
        /// </summary>
        /// <param name="namespaceURI">string representing the namespace against which the element will be checked.</param>
        /// <returns>holds the return value true or false.</returns>
        public virtual extern bool IsDefaultNamespace(string namespaceURI);

        /// <summary>
        /// Tests whether two nodes are equal.
        /// </summary>
        /// <param name="node">The node to compare equality with.</param>
        /// <returns></returns>
        public virtual extern bool IsEqualNode(Node node);

        /// <summary>
        /// Clean up all the text nodes under this element (merge adjacent, remove empty).
        /// </summary>
        public virtual extern void Normalize();

        /// <summary>
        /// Removes a child node from the DOM. Returns removed node.
        /// </summary>
        /// <param name="child">child node to be removed from the DOM.</param>
        /// <returns>Reference to the removed child node</returns>
        public virtual extern Node RemoveChild(Node child);

        /// <summary>
        /// Replaces one child node of the specified element with another.
        /// </summary>
        /// <param name="newChild">new node to replace oldChild. If it already exists in the DOM, it is first removed.</param>
        /// <param name="oldChild">the existing child to be replaced.</param>
        /// <returns>the replaced node. This is the same node as oldChild.</returns>
        public virtual extern Node ReplaceChild(Node newChild, Node oldChild);
    }
}