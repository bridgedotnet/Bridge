namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLBRElement interface represents a HTML line break element.
    /// </summary>
    [External]
    [Name("HTMLBRElement")]
    public class BRElement : Element<BRElement>
    {
        [Template("document.createElement('br')")]
        public BRElement()
        {
        }

        /// <summary>
        /// Indicates flow of text around floating objects.
        /// </summary>
        public string Clear;
    }
}
