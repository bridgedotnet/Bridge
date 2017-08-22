namespace Bridge.Html5
{
    /// <summary>
    /// HTML &lt;select&gt; elements share all of the properties and methods of other HTML elements described in the element section. They also have the specialized interface HTMLSelectElement.
    /// </summary>
    [External]
    [Name("HTMLSelectElement")]
    public sealed class HTMLSelectElement : HTMLElement<HTMLSelectElement>
    {
        [Template("document.createElement(\"select\")")]
        public extern HTMLSelectElement();

        /// <summary>
        /// Reflects the autofocus HTML attribute, which indicates whether the control should have input focus when the page loads, unless the user overrides it, for example by typing in a different control. Only one form-associated element in a document can have this attribute specified.
        /// </summary>
        [Name("autofocus")]
        public bool AutoFocus;

        /// <summary>
        /// Reflects the disabled HTML attribute, which indicates whether the control is disabled. If it is disabled, it does not accept clicks.
        /// </summary>
        public bool Disabled;

        /// <summary>
        /// The form that this element is associated with. If this element is a descendant of a form element, then this attribute is the ID of that form element. If the element is not a descendant of a form element, then:
        /// HTML5 The attribute can be the ID of any form element in the same document.
        /// HTML 4 The attribute is null.
        /// </summary>
        public readonly HTMLFormElement Form;

        /// <summary>
        /// A list of label elements associated with this select element.
        /// </summary>
        public readonly NodeList Labels;

        /// <summary>
        /// The number of &lt;option&gt; elements in this select element.
        /// </summary>
        public int Length;

        /// <summary>
        /// Reflects the multiple HTML attribute, whichindicates whether multiple items can be selected.
        /// </summary>
        public bool Multiple;

        /// <summary>
        /// Reflects the name HTML attribute, containing the name of this control used by servers and DOM search functions.
        /// </summary>
        public string Name;

        /// <summary>
        /// The set of &lt;option&gt; elements contained by this element. Read only.
        /// </summary>
        public readonly OptionsCollection Options;

        /// <summary>
        /// Reflects the required HTML attribute, which indicates whether the user is required to select a value before submitting the form.
        /// </summary>
        public bool Required;

        /// <summary>
        /// The index of the first selected &lt;option&gt; element. The value -1 is returned if no element is selected.
        /// </summary>
        public int SelectedIndex;

        /// <summary>
        /// The set of options that are selected.
        /// </summary>
        public OptionsCollection SelectedOptions;

        /// <summary>
        /// Reflects the size HTML attribute, which contains the number of visible items in the control. The default is 1, HTML5 unless multiple is true, in which case it is 4.
        /// </summary>
        public int Size;

        /// <summary>
        /// Reflects the src HTML attribute, which specifies a URI for the location of an image to display on the graphical submit button, if the value of type is image; otherwise it is ignored.
        /// </summary>
        public string Src;

        /// <summary>
        /// The form control's type. When multiple is true, it returns select-multiple; otherwise, it returns select-one. Read only.
        /// </summary>
        public string Type;

        /// <summary>
        /// A localized message that describes the validation constraints that the control does not satisfy (if any). This attribute is the empty string if the control is not a candidate for constraint validation (willValidate is false), or it satisfies its constraints. Read only.
        /// </summary>
        public readonly string ValidationMessage;

        /// <summary>
        /// The validity states that this control is in. Read only.
        /// </summary>
        public readonly ValidityState Validity;

        /// <summary>
        /// The value of this form control, that is, of the first selected option.
        /// </summary>
        public string Value;

        /// <summary>
        /// Indicates whether the button is a candidate for constraint validation. It is false if any conditions bar it from constraint validation. Read only.
        /// </summary>
        public readonly bool WillValidate;

        /// <summary>
        /// Adds an element to the collection of option elements for this select element.
        /// <param name="element">An item to add to the collection of options.</param>
        /// </summary>
        public extern void Add(HTMLElement element);

        /// <summary>
        /// Adds an element to the collection of option elements for this select element.
        /// <param name="element">An item to add to the collection of options.</param>
        /// <param name="beforeElement">An item that the new item should be inserted before. If this parameter is null, the new element is appended to the end of the collection.</param>
        /// </summary>
        public extern void Add(HTMLElement element, HTMLElement beforeElement);

        /// <summary>
        /// Adds an element to the collection of option elements for this select element.
        /// <param name="element">An item to add to the collection of options.</param>
        /// <param name="beforeIndex">An index of an item that the new item should be inserted before. If the index does not exist, the new element is appended to the end of the collection.</param>
        /// </summary>
        public extern void Add(HTMLElement element, int beforeIndex);

        /// <summary>
        /// Checks whether the element has any constraints and whether it satisfies them. If the element fails its constraints, the browser fires a cancelable invalid event at the element (and returns false).
        /// </summary>
        /// <returns>A false value if the select element is a candidate for constraint evaluation and it does not satisfy its constraints. Returns true if the element is not constrained, or if it satisfies its constraints.</returns>
        public extern bool CheckValidity();

        /// <summary>
        /// Gets an item from the options collection for this select element. You can also access an item by specifying the index in array-style brackets or parentheses, without calling this method explicitly.
        /// <param name="index">The zero-based index into the collection of the option to get.</param>
        /// <returns>The node at the specified index, or null if such a node does not exist in the collection.</returns>
        /// </summary>
        [Name("item")]
        public extern HTMLOptionElement GetItem(int index);

        /// <summary>
        /// Gets the item in the options collection with the specified name. The name string can match either the id or the name attribute of an option node. You can also access an item by specifying the name in array-style brackets or parentheses, without calling this method explicitly.
        /// </summary>
        /// <param name="name">The name of the option to get.</param>
        /// <returns>
        ///     - An OptionElement, if there is exactly one match.
        ///     - null if there are no matches.
        ///     - An OptionsCollection in tree order of nodes whose name or id attributes match the specified name.</returns>
        public extern Union<HTMLOptionElement, OptionsCollection> NamedItem(string name);

        /// <summary>
        /// Removes the element at the specified index from the options collection for this select element.
        /// <param name="index">The zero-based index of the option element to remove from the collection.</param>
        /// </summary>
        public extern void Remove(int index);

        /// <summary>
        /// Sets the custom validity message for the selection element to the specified message. Use the empty string to indicate that the element does not have a custom validity error.
        /// </summary>
        /// <param name="error">The string to use for the custom validity message.</param>
        public extern void SetCustomValidity(string error);
    }
}