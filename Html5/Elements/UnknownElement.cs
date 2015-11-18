namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLUnknownElement interface represents an invalid HTML element and derives from the HTMLElement interface, but without implementing any additional properties or methods.
    /// Obsolete or non-standard HTML elements implementing this interface: &lt;bgsound&gt;, &lt;blink&gt;, &lt;isindex&gt;, &lt;multicol&gt;, &lt;nextid&gt;, &lt;rb&gt;, &lt;spacer&gt;
    /// </summary>
    [External]
    [Name("HTMLUnknownElement")]
    public class UnknownElement : Element<UnknownElement>
    {
        [Template("document.createElement({0})")]
        public UnknownElement(string tagName)
        {
        }
    }
}
