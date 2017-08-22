namespace Bridge.Html5
{
    /// <summary>
    /// The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
    /// </summary>
    [External]
    [Name("HTMLTemplateElement")]
    public sealed class HTMLTemplateElement : HTMLElement<HTMLTemplateElement>
    {
        [Template("document.createElement(\"template\")")]
        public extern HTMLTemplateElement();

        /// <summary>
        /// The content IDL attribute must return the template element's template contents.
        /// </summary>
        public DocumentFragment Content;
    }
}