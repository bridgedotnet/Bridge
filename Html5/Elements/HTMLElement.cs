using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLElement interface represents any HTML element. Some elements directly implement this interface, others implement it via an interface that inherits it.
    /// </summary>
    [External]
    [Name("HTMLElement")]
    public class HTMLElement : Element
    {
        [Template("document.createElement(\"div\")")]
        public extern HTMLElement();

        [Template("document.createElement({0})")]
        public extern HTMLElement(ElementType type);

        [Template("document.createElement({0})")]
        public extern HTMLElement(string tagName);

        #region Properties

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
        public readonly HTMLElement OffsetParent;

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

        #endregion Properties

        #region Event handlers

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

        #endregion Event handlers

        #region Methods

        /// <summary>
        /// Removes keyboard focus from the currently focused element.
        /// </summary>
        public virtual extern void Blur();

        /// <summary>
        /// Sends a mouse click event to the element.
        /// </summary>
        public virtual extern void Click();

        /// <summary>
        /// Makes the element the current keyboard focus.
        /// </summary>
        public virtual extern void Focus();

        #endregion Methods

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
        public Action<MouseEvent> OnClick;

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
        public Action<MouseEvent> OnDblClick;

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
        public Action<KeyboardEvent> OnKeyDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keypress event is raised
        /// </summary>
        [Name("onkeypress")]
        public Action<KeyboardEvent> OnKeyPress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keyup event is raised
        /// </summary>
        [Name("onkeyup")]
        public Action<KeyboardEvent> OnKeyUp;

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
        public Action<MouseEvent> OnMouseDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseenter event is raised
        /// </summary>
        [Name("onmouseenter")]
        public Action<MouseEvent> OnMouseEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseleave event is raised
        /// </summary>
        [Name("onmouseleave")]
        public Action<MouseEvent> OnMouseLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousemove event is raised
        /// </summary>
        [Name("onmousemove")]
        public Action<MouseEvent> OnMouseMove;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseout event is raised
        /// </summary>
        [Name("onmouseout")]
        public Action<MouseEvent> OnMouseOut;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseover event is raised
        /// </summary>
        [Name("onmouseover")]
        public Action<MouseEvent> OnMouseOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseup event is raised
        /// </summary>
        [Name("onmouseup")]
        public Action<MouseEvent> OnMouseUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousewheel event is raised
        /// </summary>
        [Name("onmousewheel")]
        public Action<MouseEvent> OnMouseWheel;

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
        public Action<ProgressEvent> OnProgress;

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
        [Name("ontouchstart")]
        public Action<TouchEvent> OnTouchStart;

        /// <summary>
        /// Returns the event handling code for the touchend event.
        /// </summary>
        [Name("ontouchend")]
        public Action<TouchEvent> OnTouchEnd;

        /// <summary>
        /// Returns the event handling code for the touchmove event.
        /// </summary>
        [Name("ontouchmove")]
        public Action<TouchEvent> OnTouchMove;

        /// <summary>
        /// Returns the event handling code for the touchenter event.
        /// </summary>
        [Name("ontouchenter")]
        public Action<TouchEvent> OnTouchEnter;

        /// <summary>
        /// Returns the event handling code for the touchleave event.
        /// </summary>
        [Name("ontouchleave")]
        public Action<TouchEvent> OnTouchLeave;

        /// <summary>
        /// Returns the event handling code for the touchcancel event.
        /// </summary>
        [Name("ontouchcancel")]
        public Action<TouchEvent> OnTouchCancel;
    }

    /// <summary>
    /// A generic version of the Element class. The type parameter is a type of Events' CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type of all Element's events</typeparam>
    [External]
    [IgnoreGeneric]
    [Namespace(false)]
    public class HTMLElement<TCurrentTarget> : HTMLElement where TCurrentTarget : HTMLElement
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
        public new Action<MouseEvent<TCurrentTarget>> OnClick;

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
        public new Action<MouseEvent<TCurrentTarget>> OnDblClick;

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
        public new Action<KeyboardEvent<TCurrentTarget>> OnKeyDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keypress event is raised
        /// </summary>
        [Name("onkeypress")]
        public new Action<KeyboardEvent<TCurrentTarget>> OnKeyPress;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the keyup event is raised
        /// </summary>
        [Name("onkeyup")]
        public new Action<KeyboardEvent<TCurrentTarget>> OnKeyUp;

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
        public new Action<MouseEvent<TCurrentTarget>> OnMouseDown;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseenter event is raised
        /// </summary>
        [Name("onmouseenter")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseEnter;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseleave event is raised
        /// </summary>
        [Name("onmouseleave")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseLeave;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousemove event is raised
        /// </summary>
        [Name("onmousemove")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseMove;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseout event is raised
        /// </summary>
        [Name("onmouseout")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseOut;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseover event is raised
        /// </summary>
        [Name("onmouseover")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseOver;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mouseup event is raised
        /// </summary>
        [Name("onmouseup")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseUp;

        /// <summary>
        /// Is an EventHandler representing the code to be called when the mousewheel event is raised
        /// </summary>
        [Name("onmousewheel")]
        public new Action<MouseEvent<TCurrentTarget>> OnMouseWheel;

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
        public new Action<ProgressEvent<TCurrentTarget>> OnProgress;

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
        [Name("ontouchstart")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchStart;

        /// <summary>
        /// Returns the event handling code for the touchend event.
        /// </summary>
        [Name("ontouchend")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchEnd;

        /// <summary>
        /// Returns the event handling code for the touchmove event.
        /// </summary>
        [Name("ontouchmove")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchMove;

        /// <summary>
        /// Returns the event handling code for the touchenter event.
        /// </summary>
        [Name("ontouchenter")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchEnter;

        /// <summary>
        /// Returns the event handling code for the touchleave event.
        /// </summary>
        [Name("ontouchleave")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchLeave;

        /// <summary>
        /// Returns the event handling code for the touchcancel event.
        /// </summary>
        [Name("ontouchcancel")]
        public new Action<TouchEvent<TCurrentTarget>> OnTouchCancel;
    }
}