using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The Element interface represents an object of a Document. This interface describes methods and properties common to all kinds of elements.
    /// Specific behaviors are described in interfaces which inherit from Element but add additional functionality.
    /// For example, the HTMLElement interface is the base interface for HTML elements, while the SVGElement interface is the basis for all SVG elements.
    /// </summary>
    [External]
    [Name("HTMLElement")]
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
        /// Returns the Element immediately prior to this ChildNode in its parent's children list, or null if there is no Element in the list prior to this ChildNode.
        /// </summary>
        public readonly Element PreviousElementSibling;

        /// <summary>
        /// Returns the Element immediately following this ChildNode in its parent's children list, or null if there is no Element in the list following this ChildNode.
        /// </summary>
        public readonly Element NextElementSibling;

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
        public readonly Element FirstElementChild;

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
        public readonly Element LastElementChild;

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
        public readonly int ScrollLeft;

        /// <summary>
        /// The Element.scrollTop property gets or sets the number of pixels that the content of an element is scrolled upward. An element's scrollTop is a measurement of the distance of an element's top to its topmost visible content. When an element content does not generate a vertical scrollbar, then its scrollTop value defaults to 0.
        /// </summary>
        public readonly int ScrollTop;

        /// <summary>
        /// The Element.scrollWidth read–only property returns either the width in pixels of the content of an element or the width of the element itself, whichever is greater. If the element is wider than its content area (for example, if there are scroll bars for scrolling through the content), the scrollWidth is larger than the clientWidth.
        /// </summary>
        public readonly int ScrollWidth;

        /// <summary>
        /// Returns the name of the element.
        /// </summary>
        public readonly string TagName;

        /// <summary>
        /// The oncopy property returns the onCopy event handler code on the current element.
        /// </summary>
        [Name("oncopy")]
        public Delegate OnCopy;

        /// <summary>
        /// Returns the event handling code for the cut event.
        /// </summary>
        [Name("oncut")]
        public Delegate OnCut;

        /// <summary>
        /// Returns the event handling code for the paste event.
        /// </summary>
        [Name("onpaste")]
        public Delegate OnPaste;

        /// <summary>
        /// Returns the event handling code for the wheel event.
        /// </summary>
        [Name("onwheel")]
        public Delegate OnWheel;

        /// <summary>
        /// Dispatches the specified event to the current element.
        /// To create an event object use the createEvent method in Firefox, Opera, Google Chrome, Safari and Internet Explorer from version 9. After the new event is created, initialize it first (for details, see the page for the createEvent method). When the event is initialized, it is ready for dispatching.
        /// </summary>
        /// <param name="e">Required. Reference to an event object to be dispatched.</param>
        /// <returns>Boolean that indicates whether the default action of the event was not canceled.</returns>
        public new virtual bool DispatchEvent(Event e)
        {
            return false;
        }

        /// <summary>
        /// Returns the value of a specified attribute on the element. If the given attribute does not exist, the value returned will either be null or "" (the empty string)
        /// </summary>
        /// <param name="attributeName">name of the attribute whose value you want to get.</param>
        /// <returns>string containing the value of attributeName.</returns>
        ///
        public virtual string GetAttribute(string attributeName)
        {
            return null;
        }

        /// <summary>
        ///  returns the string value of the attribute with the specified namespace and name. If the named attribute does not exist, the value returned will either be null or "" (the empty string);
        /// </summary>
        /// <param name="namespace">The namespace in which to look for the specified attribute.</param>
        /// <param name="attributeName"></param>
        /// <returns>The string value of the specified attribute. If the attribute doesn't exist, the result is null.</returns>
        public virtual string GetAttributeNS(string @namespace, string attributeName)
        {
            return null;
        }

        /// <summary>
        /// The Element.getBoundingClientRect() method returns a text rectangle object that encloses a group of text rectangles.
        /// </summary>
        /// <returns></returns>
        public virtual ClientRect GetBoundingClientRect()
        {
            return null;
        }

        /// <summary>
        /// The Element.getClientRects() method returns a collection of rectangles that indicate the bounding rectangles for each box in a client.
        /// </summary>
        /// <returns></returns>
        public virtual ClientRectList GetClientRects()
        {
            return null;
        }

        /// <summary>
        /// Returns an array-like object of all child elements which have all of the given class names.
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public virtual HTMLCollection GetElementsByClassName(string name)
        {
            return null;
        }

        /// <summary>
        /// Retrieve a set of all descendant elements, of a particular tag name, from the current element.
        /// </summary>
        /// <param name="tagName"></param>
        /// <returns></returns>
        public virtual HTMLCollection GetElementsByTagName(string tagName)
        {
            return null;
        }

        /// <summary>
        /// Retrieve a set of all descendant elements, of a particular tag name and namespace, from the current element.
        /// </summary>
        /// <param name="namespaceURI">namespace URI of elements to look for</param>
        /// <param name="localName">local name of elements to look for or the special value "*", which matches all elements </param>
        /// <returns></returns>
        public virtual HTMLCollection GetElementsByTagNameNS(string namespaceURI, string localName)
        {
            return null;
        }

        /// <summary>
        /// Check if the element has the specified attribute, or not.
        /// </summary>
        /// <param name="attName">string representing the name of the attribute.</param>
        /// <returns>holds the return value true or false.</returns>
        public virtual bool HasAttribute(string attName)
        {
            return false;
        }

        /// <summary>
        /// Check if the element has the specified attribute, in the specified namespace, or not.
        /// </summary>
        /// <param name="namespace">string specifying the namespace of the attribute.</param>
        /// <param name="localName">name of the attribute.</param>
        /// <returns></returns>
        public virtual bool HasAttributeNS(string @namespace, string localName)
        {
            return false;
        }

        /// <summary>
        /// Returns the first element that is a descendant of the element on which it is invoked that matches the specified group of selectors.
        /// </summary>
        /// <param name="selectors">selectors is a group of selectors to match on.</param>
        /// <returns></returns>
        public virtual Node QuerySelector(string selectors)
        {
            return null;
        }

        /// <summary>
        /// Returns a non-live NodeList of all elements descended from the element on which it is invoked that match the specified group of CSS selectors.
        /// </summary>
        /// <param name="selectors">selectors is a group of selectors to match on.</param>
        /// <returns></returns>
        public virtual NodeList QuerySelectorAll(string selectors)
        {
            return null;
        }

        /// <summary>
        /// The ChildNode.remove method removes the object from the tree it belongs to.
        /// </summary>
        public virtual void Remove()
        {
        }

        /// <summary>
        /// Removes an attribute from the specified element.
        /// </summary>
        /// <param name="attrName">String that names the attribute to be removed from element.</param>
        public virtual void RemoveAttribute(string attrName)
        {
        }

        /// <summary>
        /// Remove the attribute with the specified name and namespace, from the current node.
        /// </summary>
        /// <param name="namespaceURI">String that contains the namespace of the attribute.</param>
        /// <param name="attrName">String that names the attribute to be removed from the current node.</param>
        public virtual void RemoveAttributeNS(string namespaceURI, string attrName)
        {
        }

        /// <summary>
        /// Scrolls the page until the element gets into the view.
        /// </summary>
        /// <param name="alignWithTop">If true, the scrolled element is aligned with the top of the scroll area. If false, it is aligned with the bottom.</param>
        public virtual void ScrollIntoView(bool alignWithTop)
        {
        }

        /// <summary>
        /// Adds a new attribute or changes the value of an existing attribute on the specified element.
        /// </summary>
        /// <param name="name">the name of the attribute as a string.</param>
        /// <param name="value">the desired new value of the attribute.</param>
        public virtual void SetAttribute(string name, string value)
        {
        }

        /// <summary>
        /// Adds a new attribute or changes the value of an attribute with the given namespace and name.
        /// </summary>
        /// <param name="namespaceURI">String specifying the namespace of the attribute.</param>
        /// <param name="name">string identifying the attribute to be set.</param>
        /// <param name="value">the desired string value of the new attribute.</param>
        public virtual void SetAttributeNS(string namespaceURI, string name, string value)
        {
        }

        /// <summary>
        /// Call this method during the handling of a mousedown event to retarget all mouse events to this element until the mouse button is released or document.releaseCapture() is called.
        /// </summary>
        public virtual void SetCapture()
        {
        }

        /// <summary>
        /// Call this method during the handling of a mousedown event to retarget all mouse events to this element until the mouse button is released or document.releaseCapture() is called.
        /// </summary>
        /// <param name="retargetToElement">If true, all events are targeted directly to this element; if false, events can also fire at descendants of this element.</param>
        public virtual void SetCapture(bool retargetToElement)
        {
        }

        /// <summary>
        /// Parses the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position. It does not reparse the element it is being used on and thus it does not corrupt the existing elements inside the element. This, and avoiding the extra step of serialization make it much faster than direct innerHTML manipulation.
        /// </summary>
        /// <param name="position">The position relative to the element</param>
        /// <param name="text">String to be parsed as HTML or XML and inserted into the tree.</param>
        public virtual void InsertAdjacentHTML(InsertPosition position, string text)
        {
        }

        /// <summary>
        /// The access key assigned to the element.
        /// </summary>
        public string AccessKey;

        /// <summary>
        /// A string that represents the element's assigned access key.
        /// </summary>
        public readonly string AccessKeyLabel;

        /// <summary>
        /// Gets/sets whether or not the element is editable.
        /// </summary>
        public ContentEditable ContentEditable;

        /// <summary>
        /// Indicates whether or not the content of the element can be edited.
        /// </summary>
        public readonly bool IsContentEditable;

        /// <summary>
        /// Allows access to read and write custom data attributes (data-*) of the element.
        /// </summary>
        public readonly DOMStringMap Dataset;

        /// <summary>
        /// The HTMLElement.dir attribute gets or sets the text writing directionality of the content of the current element.
        /// </summary>
        public TextDirection Dir;

        /// <summary>
        /// Gets/sets the language of an element's attributes, text, and element contents.
        /// </summary>
        public string Lang;

        /// <summary>
        /// The height of an element, relative to the layout.
        /// </summary>
        public readonly int OffsetHeight;

        /// <summary>
        /// The distance from this element's left border to its offsetParent's left border.
        /// </summary>
        public readonly int OffsetLeft;

        /// <summary>
        /// The element from which all offset calculations are currently computed.
        /// </summary>
        public readonly Element OffsetParent;

        /// <summary>
        /// The distance from this element's top border to its offsetParent's top border.
        /// </summary>
        public readonly int OffsetTop;

        /// <summary>
        /// The width of an element, relative to the layout.
        /// </summary>
        public readonly int OffsetWidth;

        /// <summary>
        /// An object representing the declarations of an element's style attributes.
        /// </summary>
        public readonly CSSStyleDeclaration Style;

        /// <summary>
        /// Gets/sets the position of the element in the tabbing order.
        /// </summary>
        public int TabIndex;

        /// <summary>
        /// A string that appears in a popup box when mouse is over the element.
        /// </summary>
        public string Title;

        /// <summary>
        ///  EventHandler representing the code to be called when the abort event is raised.
        /// </summary>
        [Name("onabort")]
        public Action<Event> OnAbort;

        /// <summary>
        /// EventHandler representing the code to be called when the blur event is raised.
        /// </summary>
        [Name("onblur")]
        public Action<Event> OnBlur;

        /// <summary>
        /// OnErrorEventHandler representing the code to be called when the error event is raised.
        /// </summary>
        [Name("onerror")]
        public ErrorEventHandler OnError;

        /// <summary>
        /// EventHandler representing the code to be called when the focus event is raised.
        /// </summary>
        [Name("onfocus")]
        public Action<Event> OnFocus;

        /// <summary>
        /// EventHandler representing the code to be called when the cancel event is raised.
        /// </summary>
        [Name("oncancel")]
        public Action<Event> OnCancel;

        /// <summary>
        /// EventHandler representing the code to be called when the canplay event is raised
        /// </summary>
        [Name("oncanplay")]
        public Action<Event> OnCanPlay;

        /// <summary>
        /// EventHandler representing the code to be called when the canplaythrough event is raised.
        /// </summary>
        [Name("oncanplaythrough")]
        public Action<Event> OnCanPlayThrough;

        /// <summary>
        /// EventHandler representing the code to be called when the change event is raised.
        /// </summary>
        [Name("onchange")]
        public Action<Event> OnChange;

        /// <summary>
        /// EventHandler representing the code to be called when the click event is raised.
        /// </summary>
        [Name("onclick")]
        public Action<Event> OnClick;

        /// <summary>
        /// EventHandler representing the code to be called when the close event is raised.
        /// </summary>
        [Name("onclose")]
        public Action<Event> OnClose;

        /// <summary>
        /// EventHandler representing the code to be called when the contextmenu event is raised.
        /// </summary>
        [Name("oncontextmenu")]
        public Action<Event> OnContextMenu;

        /// <summary>
        /// EventHandler representing the code to be called when the cuechange event is raised.
        /// </summary>
        [Name("oncuechange")]
        public Action<Event> OnCueChange;

        /// <summary>
        /// EventHandler representing the code to be called when the dblclick event is raised.
        /// </summary>
        [Name("ondblclick")]
        public Action<Event> OnDblClick;

        /// <summary>
        /// EventHandler representing the code to be called when the drag event is raised.
        /// </summary>
        [Name("ondrag")]
        public Action<Event> OnDrag;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragend event is raised
        /// </summary>
        [Name("ondragend")]
        public Action<Event> OnDragEnd;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragenter event is raised
        /// </summary>
        [Name("ondragenter")]
        public Action<Event> OnDragEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragexit event is raised
        /// </summary>
        [Name("ondragexit")]
        public Action<Event> OnDragExit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragleave event is raised
        /// </summary>
        [Name("ondragleave")]
        public Action<Event> OnDragLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragover event is raised
        /// </summary>
        [Name("ondragover")]
        public Action<Event> OnDragOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragstart event is raised
        /// </summary>
        [Name("ondragstart")]
        public Action<Event> OnDragStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the drop event is raised
        /// </summary>
        [Name("ondrop")]
        public Action<Event> OnDrop;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the durationchange event is raised
        /// </summary>
        [Name("ondurationchange")]
        public Action<Event> OnDurationChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the emptied event is raised
        /// </summary>
        [Name("onemptied")]
        public Action<Event> OnEmptied;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ended event is raised
        /// </summary>
        [Name("onended")]
        public Action<Event> OnEnded;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the input event is raised
        /// </summary>
        [Name("oninput")]
        public Action<Event> OnInput;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the invalid event is raised
        /// </summary>
        [Name("oninvalid")]
        public Action<Event> OnInvalid;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keydown event is raised
        /// </summary>
        [Name("onkeydown")]
        public Action<Event> OnKeyDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keypress event is raised
        /// </summary>
        [Name("onkeypress")]
        public Action<Event> OnKeyPress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keyup event is raised
        /// </summary>
        [Name("onkeyup")]
        public Action<Event> OnKeyUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the load event is raised
        /// </summary>
        [Name("onload")]
        public Action<Event> OnLoad;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadeddata event is raised
        /// </summary>
        [Name("onloadeddata")]
        public Action<Event> OnLoadedData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadedmetadata event is raised
        /// </summary>
        [Name("onloadedmetadata")]
        public Action<Event> OnLoadedMetaData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadstart event is raised
        /// </summary>
        [Name("onloadstart")]
        public Action<Event> OnLoadStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousedown event is raised
        /// </summary>
        [Name("onmousedown")]
        public Action<Event> OnMouseDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseenter event is raised
        /// </summary>
        [Name("onmouseenter")]
        public Action<Event> OnMouseEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseleave event is raised
        /// </summary>
        [Name("onmouseleave")]
        public Action<Event> OnMouseLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousemove event is raised
        /// </summary>
        [Name("onmousemove")]
        public Action<Event> OnMouseMove;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseout event is raised
        /// </summary>
        [Name("onmouseout")]
        public Action<Event> OnMouseOut;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseover event is raised
        /// </summary>
        [Name("onmouseover")]
        public Action<Event> OnMouseOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseup event is raised
        /// </summary>
        [Name("onmouseup")]
        public Action<Event> OnMouseUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousewheel event is raised
        /// </summary>
        [Name("onmousewheel")]
        public Action<Event> OnMouseWheel;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the pause event is raised
        /// </summary>
        [Name("onpause")]
        public Action<Event> OnPause;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the play event is raised
        /// </summary>
        [Name("onplay")]
        public Action<Event> OnPlay;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the playing event is raised
        /// </summary>
        [Name("onplaying")]
        public Action<Event> OnPlaying;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the progress event is raised
        /// </summary>
        [Name("onprogress")]
        public Action<Event> OnProgress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ratechange event is raised
        /// </summary>
        [Name("onratechange")]
        public Action<Event> OnRateChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the reset event is raised
        /// </summary>
        [Name("onreset")]
        public Action<Event> OnReset;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the scroll event is raised
        /// </summary>
        [Name("onscroll")]
        public Action<Event> OnScroll;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeked event is raised
        /// </summary>
        [Name("onseeked")]
        public Action<Event> OnSeeked;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeking event is raised
        /// </summary>
        [Name("onseeking")]
        public Action<Event> OnSeeking;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the select event is raised
        /// </summary>
        [Name("onselect")]
        public Action<Event> OnSelect;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the show event is raised
        /// </summary>
        [Name("onshow")]
        public Action<Event> OnShow;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the sort event is raised
        /// </summary>
        [Name("onsort")]
        public Action<Event> OnSort;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the stalled event is raised
        /// </summary>
        [Name("onstalled")]
        public Action<Event> OnStalled;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the submit event is raised
        /// </summary>
        [Name("onsubmit")]
        public Action<Event> OnSubmit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the suspend event is raised
        /// </summary>
        [Name("onsuspend")]
        public Action<Event> OnSuspend;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the timeupdate event is raised
        /// </summary>
        [Name("ontimeupdate")]
        public Action<Event> OnTimeUpdate;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the volumechange event is raised
        /// </summary>
        [Name("onvolumechange")]
        public Action<Event> OnVolumeChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the waiting event is raised
        /// </summary>
        [Name("onwaiting")]
        public Action<Event> OnWaiting;

        /// <summary>
        /// Returns the event handling code for the touchstart event.
        /// </summary>
        [Name("onTouchStart")]
        public Action<Event> OnTouchStart;

        /// <summary>
        /// Returns the event handling code for the touchend event.
        /// </summary>
        [Name("onTouchEnd")]
        public Action<Event> OnTouchEnd;

        /// <summary>
        /// Returns the event handling code for the touchmove event.
        /// </summary>
        [Name("onTouchMove")]
        public Action<Event> OnTouchMove;

        /// <summary>
        /// Returns the event handling code for the touchenter event.
        /// </summary>
        [Name("onTouchEnter")]
        public Action<Event> OnTouchEnter;

        /// <summary>
        /// Returns the event handling code for the touchleave event.
        /// </summary>
        [Name("onTouchLeave")]
        public Action<Event> OnTouchLeave;

        /// <summary>
        /// Returns the event handling code for the touchcancel event.
        /// </summary>
        [Name("onTouchCancel")]
        public Action<Event> OnTouchCancel;

        /// <summary>
        /// Removes keyboard focus from the currently focused element.
        /// </summary>
        public virtual void Blur()
        {
        }

        /// <summary>
        /// Sends a mouse click event to the element.
        /// </summary>
        public virtual void Click()
        {
        }

        /// <summary>
        /// Makes the element the current keyboard focus.
        /// </summary>
        public virtual void Focus()
        {
        }
    }

    /// <summary>
    /// A generic version of the Element class. The type parameter is a type of Events' CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type of all Element's events</typeparam>
    public class Element<TCurrentTarget> : Element where TCurrentTarget : Element
    {
        /// <summary>
        ///  EventHandler representing the code to be called when the abort event is raised.
        /// </summary>
        [Name("onabort")]
        public new Action<Event<TCurrentTarget>> OnAbort;

        /// <summary>
        /// EventHandler representing the code to be called when the blur event is raised.
        /// </summary>
        [Name("onblur")]
        public new Action<Event<TCurrentTarget>> OnBlur;

        /// <summary>
        /// EventHandler representing the code to be called when the focus event is raised.
        /// </summary>
        [Name("onfocus")]
        public new Action<Event<TCurrentTarget>> OnFocus;

        /// <summary>
        /// EventHandler representing the code to be called when the cancel event is raised.
        /// </summary>
        [Name("oncancel")]
        public new Action<Event<TCurrentTarget>> OnCancel;

        /// <summary>
        /// EventHandler representing the code to be called when the canplay event is raised
        /// </summary>
        [Name("oncanplay")]
        public new Action<Event<TCurrentTarget>> OnCanPlay;

        /// <summary>
        /// EventHandler representing the code to be called when the canplaythrough event is raised.
        /// </summary>
        [Name("oncanplaythrough")]
        public new Action<Event<TCurrentTarget>> OnCanPlayThrough;

        /// <summary>
        /// EventHandler representing the code to be called when the change event is raised.
        /// </summary>
        [Name("onchange")]
        public new Action<Event<TCurrentTarget>> OnChange;

        /// <summary>
        /// EventHandler representing the code to be called when the click event is raised.
        /// </summary>
        [Name("onclick")]
        public new Action<Event<TCurrentTarget>> OnClick;

        /// <summary>
        /// EventHandler representing the code to be called when the close event is raised.
        /// </summary>
        [Name("onclose")]
        public new Action<Event<TCurrentTarget>> OnClose;

        /// <summary>
        /// EventHandler representing the code to be called when the contextmenu event is raised.
        /// </summary>
        [Name("oncontextmenu")]
        public new Action<Event<TCurrentTarget>> OnContextMenu;

        /// <summary>
        /// EventHandler representing the code to be called when the cuechange event is raised.
        /// </summary>
        [Name("oncuechange")]
        public new Action<Event<TCurrentTarget>> OnCueChange;

        /// <summary>
        /// EventHandler representing the code to be called when the dblclick event is raised.
        /// </summary>
        [Name("ondblclick")]
        public new Action<Event<TCurrentTarget>> OnDblClick;

        /// <summary>
        /// EventHandler representing the code to be called when the drag event is raised.
        /// </summary>
        [Name("ondrag")]
        public new Action<Event<TCurrentTarget>> OnDrag;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragend event is raised
        /// </summary>
        [Name("ondragend")]
        public new Action<Event<TCurrentTarget>> OnDragEnd;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragenter event is raised
        /// </summary>
        [Name("ondragenter")]
        public new Action<Event<TCurrentTarget>> OnDragEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragexit event is raised
        /// </summary>
        [Name("ondragexit")]
        public new Action<Event<TCurrentTarget>> OnDragExit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragleave event is raised
        /// </summary>
        [Name("ondragleave")]
        public new Action<Event<TCurrentTarget>> OnDragLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragover event is raised
        /// </summary>
        [Name("ondragover")]
        public new Action<Event<TCurrentTarget>> OnDragOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the dragstart event is raised
        /// </summary>
        [Name("ondragstart")]
        public new Action<Event<TCurrentTarget>> OnDragStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the drop event is raised
        /// </summary>
        [Name("ondrop")]
        public new Action<Event<TCurrentTarget>> OnDrop;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the durationchange event is raised
        /// </summary>
        [Name("ondurationchange")]
        public new Action<Event<TCurrentTarget>> OnDurationChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the emptied event is raised
        /// </summary>
        [Name("onemptied")]
        public new Action<Event<TCurrentTarget>> OnEmptied;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ended event is raised
        /// </summary>
        [Name("onended")]
        public new Action<Event<TCurrentTarget>> OnEnded;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the input event is raised
        /// </summary>
        [Name("oninput")]
        public new Action<Event<TCurrentTarget>> OnInput;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the invalid event is raised
        /// </summary>
        [Name("oninvalid")]
        public new Action<Event<TCurrentTarget>> OnInvalid;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keydown event is raised
        /// </summary>
        [Name("onkeydown")]
        public new Action<Event<TCurrentTarget>> OnKeyDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keypress event is raised
        /// </summary>
        [Name("onkeypress")]
        public new Action<Event<TCurrentTarget>> OnKeyPress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keyup event is raised
        /// </summary>
        [Name("onkeyup")]
        public new Action<Event<TCurrentTarget>> OnKeyUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the load event is raised
        /// </summary>
        [Name("onload")]
        public new Action<Event<TCurrentTarget>> OnLoad;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadeddata event is raised
        /// </summary>
        [Name("onloadeddata")]
        public new Action<Event<TCurrentTarget>> OnLoadedData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadedmetadata event is raised
        /// </summary>
        [Name("onloadedmetadata")]
        public new Action<Event<TCurrentTarget>> OnLoadedMetaData;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the loadstart event is raised
        /// </summary>
        [Name("onloadstart")]
        public new Action<Event<TCurrentTarget>> OnLoadStart;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousedown event is raised
        /// </summary>
        [Name("onmousedown")]
        public new Action<Event<TCurrentTarget>> OnMouseDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseenter event is raised
        /// </summary>
        [Name("onmouseenter")]
        public new Action<Event<TCurrentTarget>> OnMouseEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseleave event is raised
        /// </summary>
        [Name("onmouseleave")]
        public new Action<Event<TCurrentTarget>> OnMouseLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousemove event is raised
        /// </summary>
        [Name("onmousemove")]
        public new Action<Event<TCurrentTarget>> OnMouseMove;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseout event is raised
        /// </summary>
        [Name("onmouseout")]
        public new Action<Event<TCurrentTarget>> OnMouseOut;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseover event is raised
        /// </summary>
        [Name("onmouseover")]
        public new Action<Event<TCurrentTarget>> OnMouseOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseup event is raised
        /// </summary>
        [Name("onmouseup")]
        public new Action<Event<TCurrentTarget>> OnMouseUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousewheel event is raised
        /// </summary>
        [Name("onmousewheel")]
        public new Action<Event<TCurrentTarget>> OnMouseWheel;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the pause event is raised
        /// </summary>
        [Name("onpause")]
        public new Action<Event<TCurrentTarget>> OnPause;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the play event is raised
        /// </summary>
        [Name("onplay")]
        public new Action<Event<TCurrentTarget>> OnPlay;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the playing event is raised
        /// </summary>
        [Name("onplaying")]
        public new Action<Event<TCurrentTarget>> OnPlaying;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the progress event is raised
        /// </summary>
        [Name("onprogress")]
        public new Action<Event<TCurrentTarget>> OnProgress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the ratechange event is raised
        /// </summary>
        [Name("onratechange")]
        public new Action<Event<TCurrentTarget>> OnRateChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the reset event is raised
        /// </summary>
        [Name("onreset")]
        public new Action<Event<TCurrentTarget>> OnReset;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the scroll event is raised
        /// </summary>
        [Name("onscroll")]
        public new Action<Event<TCurrentTarget>> OnScroll;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeked event is raised
        /// </summary>
        [Name("onseeked")]
        public new Action<Event<TCurrentTarget>> OnSeeked;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the seeking event is raised
        /// </summary>
        [Name("onseeking")]
        public new Action<Event<TCurrentTarget>> OnSeeking;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the select event is raised
        /// </summary>
        [Name("onselect")]
        public new Action<Event<TCurrentTarget>> OnSelect;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the show event is raised
        /// </summary>
        [Name("onshow")]
        public new Action<Event<TCurrentTarget>> OnShow;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the sort event is raised
        /// </summary>
        [Name("onsort")]
        public new Action<Event<TCurrentTarget>> OnSort;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the stalled event is raised
        /// </summary>
        [Name("onstalled")]
        public new Action<Event<TCurrentTarget>> OnStalled;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the submit event is raised
        /// </summary>
        [Name("onsubmit")]
        public new Action<Event<TCurrentTarget>> OnSubmit;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the suspend event is raised
        /// </summary>
        [Name("onsuspend")]
        public new Action<Event<TCurrentTarget>> OnSuspend;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the timeupdate event is raised
        /// </summary>
        [Name("ontimeupdate")]
        public new Action<Event<TCurrentTarget>> OnTimeUpdate;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the volumechange event is raised
        /// </summary>
        [Name("onvolumechange")]
        public new Action<Event<TCurrentTarget>> OnVolumeChange;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the waiting event is raised
        /// </summary>
        [Name("onwaiting")]
        public new Action<Event<TCurrentTarget>> OnWaiting;

        /// <summary>
        /// Returns the event handling code for the touchstart event.
        /// </summary>
        [Name("onTouchStart")]
        public new Action<Event<TCurrentTarget>> OnTouchStart;

        /// <summary>
        /// Returns the event handling code for the touchend event.
        /// </summary>
        [Name("onTouchEnd")]
        public new Action<Event<TCurrentTarget>> OnTouchEnd;

        /// <summary>
        /// Returns the event handling code for the touchmove event.
        /// </summary>
        [Name("onTouchMove")]
        public new Action<Event<TCurrentTarget>> OnTouchMove;

        /// <summary>
        /// Returns the event handling code for the touchenter event.
        /// </summary>
        [Name("onTouchEnter")]
        public new Action<Event<TCurrentTarget>> OnTouchEnter;

        /// <summary>
        /// Returns the event handling code for the touchleave event.
        /// </summary>
        [Name("onTouchLeave")]
        public new Action<Event<TCurrentTarget>> OnTouchLeave;

        /// <summary>
        /// Returns the event handling code for the touchcancel event.
        /// </summary>
        [Name("onTouchCancel")]
        public new Action<Event<TCurrentTarget>> OnTouchCancel;
    }
}
