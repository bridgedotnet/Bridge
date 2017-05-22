namespace Bridge.Html5
{
    [External]
    [Name("DocumentFragment")]
    public class DocumentFragment : Node
    {
        /// <summary>
        /// Returns a live HTMLCollection containing all objects of type Node that are children of the DocumentFragment object.
        /// </summary>
        public readonly HTMLCollection Children;

        /// <summary>
        /// Returns the Element that is the first child of the DocumentFragment object, or null if there is none.
        /// </summary>
        public readonly HTMLElement FirstElementChild;

        /// <summary>
        /// Returns the Element that is the last child of the DocumentFragment object, or null if there is none.
        /// </summary>
        public readonly HTMLElement LastElementChild;

        /// <summary>
        /// Returns an unsigned long giving the amount of children that the DocumentFragment has.
        /// </summary>
        public readonly int ChildElementCount;

        /// <summary>
        /// Returns the first Element node within the DocumentFragment, in document order, that matches the specified selectors.
        /// </summary>
        /// <param name="selectors">String containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public virtual extern Element QuerySelector(string selectors);

        /// <summary>
        /// Returns the first Element node within the DocumentFragment, in document order, that matches the specified selectors.
        /// </summary>
        /// <param name="selectors">selectors is a string containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public virtual extern T QuerySelector<T>(string selectors) where T : Element;

        /// <summary>
        /// Returns a NodeList of all the Element nodes within the DocumentFragment that match the specified selectors.
        /// </summary>
        /// <param name="selectors">String containing one or more CSS selectors separated by commas.</param>
        /// <returns></returns>
        public virtual extern NodeList QuerySelectorAll(string selectors);

        /// <summary>
        /// Returns the first Element node within the DocumentFragment, in document order, that matches the specified ID.
        /// </summary>
        /// <param name="elementId"></param>
        /// <returns></returns>
        public virtual extern HTMLElement GetElementById(string elementId);

        /// <summary>
        /// Returns the first Element node within the DocumentFragment, in document order, that matches the specified ID.
        /// </summary>
        /// <param name="id">id is a case-sensitive string representing the unique ID of the element being sought.</param>
        /// <returns>element is a reference to an Element object, or null if an element with the specified ID is not in the document.</returns>
        public virtual extern T GetElementById<T>(string id) where T : HTMLElement;
    }
}