namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLObjectElement interface provides special properties and methods (beyond those on the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of &lt;object&gt; element, representing external resources.
    /// The HTML &lt;object&gt; Element (or HTML Embedded Object Element) represents an external resource, which can be treated as an image, a nested browsing context, or a resource to be handled by a plugin.
    /// </summary>
    [External]
    [Name("HTMLObjectElement")]
    public sealed class HTMLObjectElement : HTMLElement<HTMLObjectElement>
    {
        [Template("document.createElement(\"object\")")]
        public extern HTMLObjectElement();

        /// <summary>
        /// The active document of the object element's nested browsing context, if any; otherwise null.
        /// </summary>
        public readonly DocumentInstance ContentDocument;

        /// <summary>
        /// The window proxy of the object element's nested browsing context, if any; otherwise null.
        /// </summary>
        public readonly WindowInstance ContentWindow;

        /// <summary>
        /// Reflects the data HTML attribute, specifying the address of a resource's data.
        /// </summary>
        public string Data;

        /// <summary>
        /// The object element's form owner, or null if there isn't one.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// Reflects the height HTML attribute, specifying the displayed height of the resource in CSS pixels.
        /// </summary>
        public int Height;

        /// <summary>
        /// Reflects the name HTML attribute, specifying the name of of a browsing context.
        /// </summary>
        public string Name;

        /// <summary>
        /// The position of the element in the tabbing navigation order for the current document.
        /// </summary>
        public new int TabIndex;

        /// <summary>
        /// Reflects the type HTML attribute, specifying the MIME type of the resource.
        /// </summary>
        public string Type;

        /// <summary>
        /// Reflects the typemustmatch HTML attribute, indicating if the resource specified by data must only be played if it matches the type attribute.
        /// </summary>
        public bool TypeMustMatch;

        /// <summary>
        /// Reflects the usemap HTML attribute, specifying a &lt;map&gt; element to use.
        /// </summary>
        public string useMap;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This is the empty string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity states that this element is in.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// Reflects the width HTML attribute, specifying the displayed width of the resource in CSS pixels.
        /// </summary>
        public int Width;

        /// <summary>
        /// Indicates whether the element is a candidate for constraint validation. Always false for HTMLObjectElement objects.
        /// </summary>
        public bool WillValidate;

        /// <summary>
        /// Always returns true, because object objects are never candidates for constraint validation.
        /// </summary>
        /// <returns>Always returns true</returns>
        public bool CheckValidity()
        {
            return true;
        }

        /// <summary>
        /// Sets a custom validity message for the element. If this message is not the empty string, then the element is suffering from a custom validity error, and does not validate.
        /// </summary>
        /// <param name="error">The custom validity message</param>
        public extern void SetCustomValidity(string error);
    }
}