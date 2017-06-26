namespace Bridge.Html5
{
    /// <summary>
    /// The HTML Mark Element represents a &lt;mark&gt; element and derives from the HTMLElement interface, but without implementing any additional properties or methods.
    /// </summary>
    [External] // Note no [Name] attribute as a mark element is identified simply as a HTMLElement and not as a more specialised variation (such as HTMLSpanElement or HTMLDivElement)
    [Name("HTMLElement")]
    public sealed class HTMLMarkElement : HTMLElement<HTMLMarkElement>
    {
        [Template("document.createElement('mark')")]
        public extern HTMLMarkElement();
    }
}