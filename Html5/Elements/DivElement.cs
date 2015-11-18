namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLDivElement interface provides special properties (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating div elements.
    /// </summary>
    [External]
    [Name("HTMLDivElement")]
    public class DivElement : Element<DivElement>
    {
        [Template("document.createElement('div')")]
        public DivElement()
        {
        }
    }
}
