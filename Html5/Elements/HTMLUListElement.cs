namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLUListElement interface provides special properties (beyond those defined on the regular HTMLElement interface it also has available to it by inheritance) for manipulating unordered list elements.
    /// The HTML unordered list element (&lt;ul&gt;) represents an unordered list of items, namely a collection of items that do not have a numerical ordering, and their order in the list is meaningless. Typically, unordered-list items are displayed with a bullet, which can be of several forms, like a dot, a circle or a squared. The bullet style is not defined in the HTML description of the page, but in its associated CSS, using the list-style-type property.
    /// </summary>
    [External]
    [Name("HTMLUListElement")]
    public sealed class HTMLUListElement : HTMLElement<HTMLUListElement>
    {
        [Template("document.createElement(\"ul\")")]
        public extern HTMLUListElement();
    }
}