namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLDivElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating div elements.
    /// </summary>
    [External]
    [Name("HTMLDivElement")]
    public sealed class HTMLDivElement : HTMLElement<HTMLDivElement>
    {
        [Template("document.createElement(\"div\")")]
        public extern HTMLDivElement();
    }
}