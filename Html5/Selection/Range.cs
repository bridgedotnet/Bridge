namespace Bridge.Html5
{
    /// <summary>
    /// The Range interface represents a fragment of a document that can contain nodes and parts of text nodes in a given document.
    /// A range can be created using the createRange method of the Document object. Range objects can also be retrieved by using the getRangeAt method of the Selection object. There also is the Range() constructor available.
    /// </summary>
    [External]
    [Name("Range")]
    public partial class Range
    {
        public extern Range();

        /// <summary>
        /// Returns a Boolean indicating whether the range's start and end points are at the same position.
        /// </summary>
        public readonly bool Collapsed;

        /// <summary>
        /// Returns the deepest Node that contains the startContainer and endContainer nodes.
        /// </summary>
        public readonly Node CommonAncestorContainer;

        /// <summary>
        /// Returns the Node within which the Range ends.
        /// </summary>
        public readonly Node EndContainer;

        /// <summary>
        /// Returns a number representing where in the endContainer the Range ends.
        /// </summary>
        public readonly int EndOffset;

        /// <summary>
        /// Returns the Node within which the Range starts.
        /// </summary>
        public readonly Node StartContainer;

        /// <summary>
        /// Returns a number representing where in the startContainer the Range starts.
        /// </summary>
        public readonly int StartOffset;

        /// <summary>
        /// Sets the start position of a Range.
        /// </summary>
        /// <param name="startNode">The Node where the Range should start.</param>
        /// <param name="startOffset">An integer greater than or equal to zero representing the offset for the start of the Range from the start of startNode.</param>
        public virtual extern void SetStart(Node startNode, int startOffset);

        /// <summary>
        /// Sets the end position of a Range.
        /// </summary>
        /// <param name="endNode">The Node where the Range should end.</param>
        /// <param name="endOffset">An integer greater than or equal to zero representing the offset for the end of the Range from the start of endNode.</param>
        public virtual extern void SetEnd(Node endNode, int endOffset);

        /// <summary>
        /// Sets the start position of a Range relative to another Node.
        /// </summary>
        /// <param name="referenceNode">The Node before which the Range should start.</param>
        public virtual extern void SetStartBefore(Node referenceNode);

        /// <summary>
        /// Sets the start position of a Range relative to another Node.
        /// </summary>
        /// <param name="referenceNode">The Node to start the Range after.</param>
        public virtual extern void SetStartAfter(Node referenceNode);

        /// <summary>
        /// Sets the end position of a Range relative to another Node.
        /// </summary>
        /// <param name="referenceNode">The Node to end the Range before.</param>
        public virtual extern void SetEndBefore(Node referenceNode);

        /// <summary>
        /// Sets the end position of a Range relative to another Node.
        /// </summary>
        /// <param name="referenceNode">The Node to end the Range after.</param>
        public virtual extern void SetEndAfter(Node referenceNode);

        /// <summary>
        /// Sets the Range to contain the Node and its contents.
        /// </summary>
        /// <param name="referenceNode">The Node to select within a Range.</param>
        public virtual extern void SelectNode(Node referenceNode);

        /// <summary>
        /// Sets the Range to contain the contents of a Node.
        /// </summary>
        /// <param name="referenceNode">The Node whose contents will be selected within a Range.</param>
        public virtual extern void SelectNodeContents(Node referenceNode);

        /// <summary>
        /// Collapses the Range to one of its boundary points.
        /// </summary>
        public virtual extern void Collapse();

        /// <summary>
        /// Collapses the Range to one of its boundary points.
        /// </summary>
        /// <param name="toStart">A boolean value: true collapses the Range to its start, false to its end. If omitted, it defaults to false .</param>
        public virtual extern void Collapse(bool toStart);

        /// <summary>
        /// Returns a DocumentFragment copying the nodes of a Range.
        /// </summary>
        /// <returns></returns>
        public virtual extern DocumentFragment CloneContents();

        /// <summary>
        /// Removes the contents of a Range from the Document.
        /// </summary>
        public virtual extern void DeleteContents();

        /// <summary>
        /// Moves contents of a Range from the document tree into a DocumentFragment.
        /// </summary>
        /// <returns></returns>
        public virtual extern DocumentFragment ExtractContents();

        /// <summary>
        /// Insert a Node at the start of a Range.
        /// </summary>
        /// <param name="newNode">The Node to insert at the start of the range.</param>
        public virtual extern void InsertNode(Node newNode);

        /// <summary>
        /// Moves content of a Range into a new Node.
        /// </summary>
        /// <param name="newParent">A Node to split based on the range.</param>
        public virtual extern void SurroundContents(Node newParent);

        /// <summary>
        /// Compares the boundary points of the Range with another one.
        /// </summary>
        /// <param name="how">A constant describing the comparison method</param>
        /// <param name="sourceRange">A Range to compare boundary points with the range.</param>
        /// <returns>A number, -1, 0, or 1, indicating whether the corresponding boundary-point of the Range is respectively before, equal to, or after the corresponding boundary-point of sourceRange.</returns>
        public virtual extern int CompareBoundaryPoints(RangeComparison how, Range sourceRange);

        /// <summary>
        /// Returns a Range object with boundary points identical to the cloned Range.
        /// </summary>
        /// <returns></returns>
        public virtual extern Range CloneRange();

        /// <summary>
        /// Releases the Range from use to improve performance.
        /// </summary>
        public virtual extern void Detach();

        /// <summary>
        /// Returns -1, 0, or 1 indicating whether the point occurs before, inside, or after the Range.
        /// </summary>
        /// <param name="referenceNode">The Node to compare with the Range.</param>
        /// <param name="offset">An integer greater than or equal to zero representing the offset inside the referenceNode.</param>
        /// <returns>returns -1, 0, or 1 depending on whether the referenceNode is before, the same as, or after the Range.</returns>
        public virtual extern int ComparePoint(Node referenceNode, int offset);

        /// <summary>
        /// Returns a DocumentFragment created from a given string of code.
        /// </summary>
        /// <param name="tagString">Text that contains text and tags to be converted to a document fragment.</param>
        /// <returns></returns>
        public virtual extern DocumentFragment CreateContextualFragment(string tagString);

        /// <summary>
        /// Returns a ClientRect object which bounds the entire contents of the Range; this would be the union of all the rectangles returned by range.getClientRects().
        /// </summary>
        /// <returns></returns>
        public virtual extern ClientRect GetBoundingClientRect();

        /// <summary>
        /// Returns a list of ClientRect objects that aggregates the results of Element.getClientRects() for all the elements in the Range.
        /// </summary>
        /// <returns></returns>
        public virtual extern ClientRectList GetClientRects();

        /// <summary>
        /// Returns a boolean indicating whether the given node intersects the Range.
        /// </summary>
        /// <param name="referenceNode">The Node to compare with the Range.</param>
        /// <returns></returns>
        public virtual extern bool IntersectsNode(Node referenceNode);

        /// <summary>
        /// Returns a boolean indicating whether the given point is in the Range.
        /// </summary>
        /// <param name="referenceNode">The Node to compare with the Range.</param>
        /// <param name="offset">The offset into Node of the point to compare with the Range.</param>
        /// <returns></returns>
        public virtual extern bool IsPointInRange(Node referenceNode, int offset);
    }
}