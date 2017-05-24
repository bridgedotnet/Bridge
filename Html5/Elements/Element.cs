using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The Element interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements. Specific behaviors are described in interfaces which inherit from Element but add additional functionality. For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements.
    ///
    /// Languages outside the realm of the Web platform, like XUL through the XULElement interface, also implement it.
    /// </summary>
    [External]
    [Name("Element")]
    public class Element : Node
    {
        [Template("document.createElement('div')")]
        public Element()
        {
        }

        [Template("document.createElement({0})")]
        public Element(ElementType type)
        {
        }

        [Template("document.createElement({0})")]
        public Element(string tagName)
        {
        }

        /// <summary>
        /// Collection of all attribute nodes registered to the specified node.
        /// </summary>
        public readonly NamedNodeMap Attributes;

        /// <summary>
        /// The number of child nodes that are elements.
        /// </summary>
        public readonly int ChildElementCount;

        /// <summary>
        /// All child elements of an element as a collection.
        /// </summary>
        public readonly HTMLCollection Children;

        /// <summary>
        /// Token list of class attribute
        /// </summary>
        public readonly DOMTokenList ClassList;

        /// <summary>
        /// gets and sets the value of the class attribute of the specified element.
        /// </summary>
        public string ClassName;

        /// <summary>
        /// The Element.clientHeight read-only property returns the inner height of an element in pixels, including padding but not the horizontal scrollbar height, border, or margin.
        /// </summary>
        public readonly int ClientHeight;

        /// <summary>
        /// The width of the left border of an element in pixels. It includes the width of the vertical scrollbar if the text direction of the element is right–to–left and if there is an overflow causing a left vertical scrollbar to be rendered. clientLeft does not include the left margin or the left padding. clientLeft is read-only.
        /// </summary>
        public readonly int ClientLeft;

        /// <summary>
        /// The width of the top border of an element in pixels. It does not include the top margin or padding. clientTop is read-only.
        /// </summary>
        public readonly int ClientTop;

        /// <summary>
        /// The Element.clientWidth property is the inner width of an element in pixels. It includes padding but not the vertical scrollbar (if present, if rendered), border or margin.
        /// </summary>
        public readonly int ClientWidth;

        /// <summary>
        /// The ParentNode.firstElementChild read-only property returns the object's first child Element, or null if there are no child elements.
        /// </summary>
        public readonly HTMLElement FirstElementChild;

        /// <summary>
        /// The hidden global attribute is a Boolean attribute indicating that the element is not yet, or is no longer, relevant.
        /// </summary>
        public bool Hidden;

        /// <summary>
        /// Gets or sets the element's identifier (attribute id).
        /// </summary>
        public string Id;

        /// <summary>
        /// The innerHTML sets or gets the HTML syntax describing the element's descendants.
        /// </summary>
        public string InnerHTML;

        /// <summary>
        /// The ParentNode.lastElementChild read-only method returns the object's last child Element or null if there are no child elements.
        /// </summary>
        public readonly HTMLElement LastElementChild;

        /// <summary>
        /// Returns the Element immediately prior to this ChildNode in its parent's children list, or null if there is no Element in the list prior to this ChildNode.
        /// </summary>
        public readonly HTMLElement PreviousElementSibling;

        /// <summary>
        /// Returns the Element immediately following this ChildNode in its parent's children list, or null if there is no Element in the list following this ChildNode.
        /// </summary>
        public readonly HTMLElement NextElementSibling;

        /// <summary>
        /// The outerHTML attribute of the element DOM interface gets the serialized HTML fragment describing the element including its descendants. It can be set to replace the element with nodes parsed from the given string.
        /// </summary>
        public readonly string OuterHTML;

        /// <summary>
        /// The Element.scrollHeight read-only attribute is a measurement of the height of an element's content including content not visible on the screen due to overflow. The scrollHeight value is equal to the minimum clientHeight the element would require in order to fit all the content in the viewpoint without using a vertical scrollbar. It includes the element padding but not its margin.
        /// </summary>
        public readonly int ScrollHeight;

        /// <summary>
        /// The Element.scrollLeft property gets or sets the number of pixels that an element's content is scrolled to the left.
        /// </summary>
        public int ScrollLeft;

        /// <summary>
        /// The Element.scrollTop property gets or sets the number of pixels that the content of an element is scrolled upward. An element's scrollTop is a measurement of the distance of an element's top to its topmost visible content. When an element content does not generate a vertical scrollbar, then its scrollTop value defaults to 0.
        /// </summary>
        public int ScrollTop;

        /// <summary>
        /// The Element.scrollWidth read–only property returns either the width in pixels of the content of an element or the width of the element itself, whichever is greater. If the element is wider than its content area (for example, if there are scroll bars for scrolling through the content), the scrollWidth is larger than the clientWidth.
        /// </summary>
        public readonly int ScrollWidth;

        /// <summary>
        /// Returns the name of the element.
        /// </summary>
        public readonly string TagName;

        /// <summary>
        /// Returns the event handling code for the wheel event.
        /// </summary>
        [Name("onwheel")]
        public Delegate OnWheel;

        /// <summary>
        /// Returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or "" (the empty string)
        /// </summary>
        /// <param name="attributeName">name of the attribute whose value you want to get.</param>
        /// <returns>string containing the value of attributeName.</returns>
        ///
        public virtual extern string GetAttribute(string attributeName);

        /// <summary>
        ///  returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or "" (the empty string);
        /// </summary>
        /// <param name="namespace">The namespace in which to look for the specified attribute.</param>
        /// <param name="attributeName"></param>
        /// <returns>The string value of the specified attribute. If the attribute doesn't exist, the result is null.</returns>
        public virtual extern string GetAttributeNS(string @namespace, string attributeName);

        /// <summary>
        /// The Element.getBoundingClientRect() method returns a text rectangle object that encloses a group of text rectangles.
        /// </summary>
        /// <returns></returns>
        public virtual extern ClientRect GetBoundingClientRect();

        /// <summary>
        /// The Element.getClientRects() method returns a collection of rectangles that indicate the bounding rectangles for each box in a client.
        /// </summary>
        /// <returns></returns>
        public virtual extern ClientRectList GetClientRects();

        /// <summary>
        /// Returns an array-like object of all child elements which have all of the given class names.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual extern HTMLCollection GetElementsByClassName(string name);

        /// <summary>
        /// Retrieve a set of all descendant elements, of a particular tag name, from the current element.
        /// </summary>
        /// <param name="tagName"></param>
        /// <returns></returns>
        public virtual extern HTMLCollection GetElementsByTagName(string tagName);

        /// <summary>
        /// Retrieve a set of all descendant elements, of a particular tag name and namespace, from the current element.
        /// </summary>
        /// <param name="namespaceURI">namespace URI of elements to look for</param>
        /// <param name="localName">local name of elements to look for or the special value "*", which matches all elements </param>
        /// <returns></returns>
        public virtual extern HTMLCollection GetElementsByTagNameNS(string namespaceURI, string localName);

        /// <summary>
        /// Check if the element has the specified attribute, or not.
        /// </summary>
        /// <param name="attName">string representing the name of the attribute.</param>
        /// <returns>holds the return value true or false.</returns>
        public virtual extern bool HasAttribute(string attName);

        /// <summary>
        /// Check if the element has the specified attribute, in the specified namespace, or not.
        /// </summary>
        /// <param name="namespace">string specifying the namespace of the attribute.</param>
        /// <param name="localName">name of the attribute.</param>
        /// <returns></returns>
        public virtual extern bool HasAttributeNS(string @namespace, string localName);

        /// <summary>
        /// Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.
        /// </summary>
        /// <param name="selectors">selectors is a group of selectors to match on.</param>
        /// <returns></returns>
        public virtual extern Element QuerySelector(string selectors);

        /// <summary>
        /// Returns a non-live NodeList of all elements descended from the element on which it is invoked that match the specified group of CSS selectors.
        /// </summary>
        /// <param name="selectors">selectors is a group of selectors to match on.</param>
        /// <returns></returns>
        public virtual extern NodeList QuerySelectorAll(string selectors);

        /// <summary>
        /// The ChildNode.remove method removes the object from the tree it belongs to.
        /// </summary>
        public virtual extern void Remove();

        /// <summary>
        /// Removes an attribute from the specified element.
        /// </summary>
        /// <param name="attrName">String that names the attribute to be removed from element.</param>
        public virtual extern void RemoveAttribute(string attrName);

        /// <summary>
        /// Remove the attribute with the specified name and namespace, from the current node.
        /// </summary>
        /// <param name="namespaceURI">String that contains the namespace of the attribute.</param>
        /// <param name="attrName">String that names the attribute to be removed from the current node.</param>
        public virtual extern void RemoveAttributeNS(string namespaceURI, string attrName);

        /// <summary>
        /// Scrolls the page until the element gets into the view.
        /// </summary>
        /// <param name="alignWithTop">If true, the scrolled element is aligned with the top of the scroll area. If false, it is aligned with the bottom.</param>
        public virtual extern void ScrollIntoView(bool alignWithTop);

        /// <summary>
        /// Adds a new attribute or changes the value of an existing attribute on the specified element.
        /// </summary>
        /// <param name="name">the name of the attribute as a string.</param>
        /// <param name="value">the desired new value of the attribute.</param>
        public virtual extern void SetAttribute(string name, string value);

        /// <summary>
        /// Adds a new attribute or changes the value of an attribute with the given namespace and name.
        /// </summary>
        /// <param name="namespaceURI">String specifying the namespace of the attribute.</param>
        /// <param name="name">string identifying the attribute to be set.</param>
        /// <param name="value">the desired string value of the new attribute.</param>
        public virtual extern void SetAttributeNS(string namespaceURI, string name, string value);

        /// <summary>
        /// Call this method during the handling of a mousedown event to retarget all mouse events to this element until the mouse button is released or document.releaseCapture() is called.
        /// </summary>
        public virtual extern void SetCapture();

        /// <summary>
        /// Call this method during the handling of a mousedown event to retarget all mouse events to this element until the mouse button is released or document.releaseCapture() is called.
        /// </summary>
        /// <param name="retargetToElement">If true, all events are targeted directly to this element; if false, events can also fire at descendants of this element.</param>
        public virtual extern void SetCapture(bool retargetToElement);

        /// <summary>
        /// Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on and thus it does not corrupt the existing elements inside the element. This, and avoiding the extra step of serialization make it much faster than direct innerHTML manipulation.
        /// </summary>
        /// <param name="position">The position relative to the element</param>
        /// <param name="text">String to be parsed as HTML or XML and inserted into the tree.</param>
        public virtual extern void InsertAdjacentHTML(InsertPosition position, string text);
    }
}