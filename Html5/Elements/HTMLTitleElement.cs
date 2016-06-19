namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLTitleElement interface contains the title for a document. This element inherits all of the properties and methods of the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLTitleElement")]
    public class HTMLTitleElement : HTMLElement<HTMLTitleElement>
    {
        [Template("document.createElement('title')")]
        public HTMLTitleElement()
        {
        }

        /// <summary>
        /// The string representing the text of the document's title.
        /// </summary>
        public string Text;
    }
}