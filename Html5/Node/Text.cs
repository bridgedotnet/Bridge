namespace Bridge.Html5
{
    /// <summary>
    /// The Text interface represents the textual content of Element or Attr.  If an element has no markup within its content, it has a single child implementing Text that contains the element's text.  However, if the element contains markup, it is parsed into information items and Text nodes that form its children.
    /// New documents have a single Text node for each block of text. Over time, more Text nodes may be created as the document's content changes.  The Node.normalize() method merges adjacent Text objects back into a single node for each block of text.
    /// </summary>
    [External]
    [Name("Text")]
    public class Text : CharacterData
    {
        [Template("document.createTextNode('')")]
        public extern Text();

        [Template("document.createTextNode({data})")]
        public extern Text(string data);

        /// <summary>
        /// Returns a DOMString containing the text of all Text nodes logically adjacent to this Node, concatenated in document order.
        /// </summary>
        public readonly string WholeText;

        /// <summary>
        /// Breaks the node into two nodes at a specified offset.
        /// </summary>
        /// <param name="offset"></param>
        /// <returns></returns>
        public virtual extern Text SplitText(int offset);
    }
}