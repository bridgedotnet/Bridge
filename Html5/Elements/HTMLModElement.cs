using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLModElement interface provides special properties (beyond the regular methods and properties available through the HTMLElement interface they also have available to them by inheritance) for manipulating modification elements, that is &lt;del&gt; and &lt;ins&gt;.
    /// </summary>
    [External]
    [Name("HTMLModElement")]
    public class HTMLModElement : HTMLElement<HTMLModElement>
    {
        [Template("document.createElement({0})")]
        public HTMLModElement(ModElementType type)
        {
        }

        /// <summary>
        /// Reflects the cite HTML attribute, containing a URI of a resource explaining the change.
        /// </summary>
        public string Cite;

        /// <summary>
        /// Reflects the datetime HTML attribute, containing a date-and-time string representing a timestamp for the change.
        /// </summary>
        public string DateTime;
    }

    /// <summary>
    /// The types of ModElement
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ModElementType
    {
        /// <summary>
        /// The HTML &lt;ins&gt; Element (or HTML Inserted Text) HTML represents a range of text that has been added to a document.
        /// </summary>
        Ins,

        /// <summary>
        /// The HTML &lt;del&gt; element (or HTML Deleted Text Element) represents a range of text that has been deleted from a document. This element is often (but need not be) rendered with strike-through text.
        /// </summary>
        Del
    }
}