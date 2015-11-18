namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLHeadElement interface contains the descriptive information, or metadata, for a document. This object inherits all of the properties and methods described in the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLHeadElement")]
    public class HeadElement : Element<HeadElement>
    {
        [Template("document.createElement('head')")]
        public HeadElement()
        {
        }
    }
}
