namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLFormControlsCollection interface represents a collection of HTML form control elements. It provides one additional method besides the properties and methods inherited from HTMLCollection.
    /// This interface is used by the HTMLFormElement interface's elements property, and the HTMLFieldSetElement interface's elements property.
    /// </summary>
    [External]
    [Name("HTMLFormControlsCollection")]
    public class FormControlsCollection : HTMLCollection
    {
        extern internal FormControlsCollection();

        /// <summary>
        /// Gets the node or list of nodes in the collection whose name or id match the specified name, or null if no nodes match.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public extern new virtual Union<ElementList, HTMLElement> this[string name] { get; }

        /// <summary>
        /// Gets the node or list of nodes in the collection whose name or id match the specified name, or null if no nodes match.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual extern Union<ElementList, HTMLElement> NamedItem(string name);
    }
}