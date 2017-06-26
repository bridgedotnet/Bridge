namespace Bridge.Html5
{
    /// <summary>
    /// The DocumentType interface represents a Node containing a doctype.
    /// </summary>
    [External]
    [Name("DocumentType")]
    public class DocumentType : Node
    {
        extern internal DocumentType();

        public readonly string Name;

        public readonly string PublicId;

        public readonly string SystemId;

        /// <summary>
        /// Returns the Element immediately prior to this ChildNode in its parent's children list, or null if there is no Element in the list prior to this ChildNode.
        /// </summary>
        public readonly HTMLElement PreviousElementSibling;

        /// <summary>
        /// Returns the Element immediately following this ChildNode in its parent's children list, or null if there is no Element in the list following this ChildNode.
        /// </summary>
        public readonly HTMLElement NextElementSibling;

        /// <summary>
        /// Removes the object from its parent children list.
        /// </summary>
        public virtual extern void Remove();
    }
}