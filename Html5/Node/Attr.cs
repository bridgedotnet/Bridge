namespace Bridge.Html5
{
    /// <summary>
    /// This type represents a DOM element's attribute as an object. In most DOM methods, you will probably directly retrieve the attribute as a string (e.g., Element.getAttribute(), but certain functions (e.g., Element.getAttributeNode()) or means of iterating give Attr types.
    /// </summary>
    [External]
    [Name("Attr")]
    public class Attr : Node
    {
        protected extern internal Attr();

        /// <summary>
        /// Indicates whether the attribute is an "ID attribute". An "ID attribute" being an attribute which value is expected to be unique across a DOM Document. In HTML DOM, "id" is the only ID attribute, but XML documents could define others. Whether or not an attribute is unique is often determined by a DTD or other schema description.
        /// </summary>
        public readonly bool IsId;

        /// <summary>
        /// The attribute's name.
        /// </summary>
        public readonly string Name;

        /// <summary>
        /// The attribute's value.
        /// </summary>
        public string Value;
    }
}