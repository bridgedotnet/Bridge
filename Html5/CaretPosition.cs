namespace Bridge.Html5
{
    /// <summary>
    /// The CaretPosition interface represents the caret postion, an indicator for the text insertion point. You can get a CaretPosition using the document.caretPositionFromPoint method.
    /// </summary>
    [External]
    [Name("CaretPosition")]
    public class CaretPosition
    {
        extern internal CaretPosition();

        /// <summary>
        /// Returns a Node containing the found node at the caret's position.
        /// </summary>
        public readonly Node OffsetNode;

        /// <summary>
        /// Returns a long representing the character offset in the caret position node.
        /// </summary>
        public readonly int Offset;
    }
}