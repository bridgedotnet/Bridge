namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLPreElement interface expose specific properties and methods (beyond those defined by regular HTMLElement interface it also has available to it by inheritance) for manipulating block of preformatted text.
    /// </summary>
    [External]
    [Name("HTMLPreElement")]
    public class PreElement : Element<OptionElement>
    {
        [Template("document.createElement('pre')")]
        public PreElement()
        {
        }
    }
}
