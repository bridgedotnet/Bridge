namespace Bridge.Html5
{
    /// <summary>
    /// Selection is the class of the object returned by window.getSelection() and other methods. It represents the text selection in the greater page, possibly spanning multiple elements, when the user drags over static text and other parts of the page. For information about text selection in an individual text editing element, see Input, TextArea and document.activeElement which typically return the parent object returned from window.getSelection().
    /// </summary>
    [External]
    [Name("Selection")]
    public class Selection
    {
        extern Selection();

        /// <summary>
        /// Returns the Node in which the selection begins.
        /// </summary>
        public readonly Node AnchorNode;

        /// <summary>
        /// Returns the number of characters that the selection's anchor is offset within the anchorNode.
        /// </summary>
        public readonly int AnchorOffset;

        /// <summary>
        /// Returns the Node in which the selection ends.
        /// </summary>
        public readonly Node FocusNode;

        /// <summary>
        /// Returns a number representing the offset of the selection's anchor within the focusNode. If focusNode is a text node, this is the number of characters within focusNode preceding the focus. If focusNode is an element, this is the number of child nodes of the focusNode preceding the focus.
        /// </summary>
        public readonly int FocusOffset;

        /// <summary>
        /// Returns a Boolean indicating whether the selection's start and end points are at the same position.
        /// </summary>
        public readonly bool IsCollapsed;

        /// <summary>
        /// Returns the number of ranges in the selection.
        /// </summary>
        public readonly int RangeCount;

        /// <summary>
        /// Returns a range object representing one of the ranges currently selected.
        /// </summary>
        /// <param name="index">The zero-based index of the range to return. A negative number or a number greater than or equal to rangeCount will result in an error.</param>
        /// <returns>The range object that will be returned.</returns>
        public virtual extern Range GetRangeAt(int index);

        /// <summary>
        /// Collapses the current selection to a single point. The document is not modified. If the content is focused and editable, the caret will blink there.
        /// </summary>
        /// <param name="parentNode">The caret location will be within this node.</param>
        /// <param name="offset">0 - Collapses the selection from the anchor to the beginning of parentNode's text. 1 - Collapses the selection from the anchor to the end of parentNode's text.</param>
        public virtual extern void Collapse(Node parentNode, byte offset);

        /// <summary>
        /// Moves the focus of the selection to a specified point. The anchor of the selection does not move. The selection will be from the anchor to the new focus regardless of direction.
        /// </summary>
        /// <param name="parentNode">The node within which the focus will be moved.</param>
        /// <param name="offset">The offset position within parentNode where the focus will be moved to.</param>
        public virtual extern void Extend(Node parentNode, byte offset);

        /// <summary>
        /// Applies a change to the current selection or cursor position, using simple textual commands.
        /// </summary>
        /// <param name="alter">The type of change to apply. Specify "move" to move the current cursor position or "extend" to extend the current selection.</param>
        /// <param name="direction">The direction in which to adjust the current selection. You can specify "forward" or "backward" to adjust in the appropriate direction based on the language at the selection point. If you want to adjust in a specific direction, you can specify "left" or "right".</param>
        /// <param name="granularity">The distance to adjust the current selection or cursor position. </param>
        public virtual extern void Modify(SelectionAlter alter, SelectionDirection direction, SelectionGranularity granularity);

        /// <summary>
        /// Collapses the selection to the start of the first range in the selection.  If the content of the selection is focused and editable, the caret will blink there.
        /// </summary>
        public virtual extern void CollapseToStart();

        /// <summary>
        /// Collapses the selection to the end of the last range in the selection.  If the content the selection is in is focused and editable, the caret will blink there.
        /// </summary>
        public virtual extern void CollapseToEnd();

        /// <summary>
        /// Adds all the children of the specified node to the selection. Previous selection is lost.
        /// </summary>
        /// <param name="parentNode">All children of parentNode will be selected. parentNode itself is not part of the selection.</param>
        public virtual extern void SelectAllChildren(Node parentNode);

        /// <summary>
        /// Adds a Range to a Selection.
        /// </summary>
        /// <param name="range">A Range object that will be added to the Selection.</param>
        public virtual extern void AddRange(Range range);

        /// <summary>
        /// Removes a range from the selection.
        /// </summary>
        /// <param name="range">A range object that will be removed to the selection.</param>
        public virtual extern void RemoveRange(Range range);

        /// <summary>
        /// Removes all ranges from the selection, leaving the anchorNode and focusNode properties equal to null and leaving nothing selected.
        /// </summary>
        public virtual extern void RemoveAllRanges();

        /// <summary>
        /// Deletes the actual text being represented by a selection object from the document's DOM.
        /// </summary>
        public virtual extern void DeleteFromDocument();

        /// <summary>
        /// Modifies the cursor Bidi level after a change in keyboard direction.
        /// </summary>
        /// <param name="langRTL">true if the new language is right-to-left or false if the new language is left-to-right.</param>
        public virtual extern void SelectionLanguageChange(bool langRTL);

        /// <summary>
        /// Indicates if the node is part of the selection.
        /// </summary>
        /// <param name="node">The node that is being looked for whether it is part of the selection</param>
        /// <param name="partlyContained">When true , containsNode returns true when a part of the node is part of the selection. When false , containsNode only returns true when the entire node is part of the selection.</param>
        /// <returns></returns>
        public virtual extern bool ContainsNode(Node node, bool partlyContained);
    }
}