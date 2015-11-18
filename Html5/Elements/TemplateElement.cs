namespace Bridge.Html5
{
    /// <summary>
    /// The template element is used to declare fragments of HTML that can be cloned and inserted in the document by script.
    /// </summary>
    [External]
    [Name("HTMLTemplateElement")]
    public class TemplateElement : Element<TemplateElement>
    {
        [Template("document.createElement('template')")]
        public TemplateElement()
        {
        }

        /// <summary>
        /// The content IDL attribute must return the template element's template contents.
        /// </summary>
        public DocumentFragment Content;
    }
}
