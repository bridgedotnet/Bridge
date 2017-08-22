using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLFormElement interface provides methods to create and modify &lt;form&gt; elements; it inherits from properties and methods of the HTMLElement interface.
    /// </summary>
    [External]
    [Name("HTMLFormElement")]
    public sealed class HTMLFormElement : HTMLElement<HTMLFormElement>, IEnumerable<HTMLElement>
    {
        [Template("document.createElement(\"form\")")]
        public extern HTMLFormElement();

        /// <summary>
        /// Reflects the accept-charset HTML attribute, containing a list of character encodings that the server accepts.
        /// </summary>
        public string AcceptCharset;

        /// <summary>
        /// Reflects the action HTML attribute, containing the URI of a program that processes the information submitted by the form.
        /// </summary>
        public string Action;

        /// <summary>
        /// Reflects the autocomplete HTML attribute, containing a string that indicates whether the controls in this form can have their values automatically populated by the browser.
        /// </summary>
        [Name("autocomplete")]
        public Union<string, AutoComplete> AutoComplete;

        /// <summary>
        /// All the form controls belonging to this form element.
        /// </summary>
        public readonly FormControlsCollection Elements;

        /// <summary>
        /// The HTMLFormElement.enctype property represents the content type of the form element.
        /// </summary>
        public string Encoding;

        /// <summary>
        /// Reflects the enctype HTML attribute, indicating the type of content that is used to transmit the form to the server. Only specified values can be set.
        /// </summary>
        public string Enctype;

        /// <summary>
        /// The number of controls in the form.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Reflects the method HTML attribute, indicating the HTTP method used to submit the form. Only specified values can be set.
        /// </summary>
        public string Method;

        /// <summary>
        /// Reflects the name HTML attribute, containing the name of the form.
        /// </summary>
        public string Name;

        /// <summary>
        /// Reflects the novalidate HTML attribute, indicating that the form should not be validated.
        /// </summary>
        public bool NoValidate;

        /// <summary>
        /// Reflects the target HTML attribute, indicating where to display the results received from submitting the form.
        /// </summary>
        public string Target;

        /// <summary>
        /// Returns true if all controls that are subject to constraint validation satisfy their constraints, or false if some controls do not satisfy their constraints. Fires an event named invalid at any control that does not satisfy its constraints; such controls are considered invalid if the event is not canceled.
        /// </summary>
        public extern bool CheckValidity();

        /// <summary>
        /// Submits the form to the server.
        /// </summary>
        public extern void Submit();

        /// <summary>
        /// Resets the forms to its initial state.
        /// </summary>
        public extern void Reset();

        /// <summary>
        /// Gets the item in the elements collection at the specified index, or null if there is no item at that index. You can also specify the index in array-style brackets or parentheses after the form object name, without calling this method explicitly.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        public HTMLElement this[int index]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets the item or list of items in elements collection whose name or id match the specified name, or null if no items match. You can also specify the name in array-style brackets or parentheses after the form object name, without calling this method explicitly.
        /// </summary>
        /// <param name="name">The name to match the Elements' name and id</param>
        /// <returns>An Element or an HTMLCollection</returns>
        public new Union<HTMLElement, HTMLCollection> this[string name]
        {
            get
            {
                return null;
            }
        }

        /// <summary>
        /// Gets the item in the elements collection at the specified index, or null if there is no item at that index. You can also specify the index in array-style brackets or parentheses after the form object name, without calling this method explicitly.
        /// </summary>
        /// <param name="index"></param>
        /// <returns></returns>
        [Name("item")]
        public extern HTMLElement GetItem(int index);

        /// <summary>
        /// Gets the item or list of items in elements collection whose name or id match the specified name, or null if no items match. You can also specify the name in array-style brackets or parentheses after the form object name, without calling this method explicitly.
        /// </summary>
        /// <param name="name">The name to match the Elements' name and id</param>
        /// <returns>An Element or an HTMLCollection</returns>
        public extern Union<HTMLElement, HTMLCollection> NamedItem(string name);

        public extern IEnumerator<HTMLElement> GetEnumerator();

        extern IEnumerator IEnumerable.GetEnumerator();
    }
}