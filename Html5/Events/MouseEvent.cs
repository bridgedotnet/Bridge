// Event WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/event

namespace Bridge.Html5
{
    [External]
    [Name("MouseEvent")]
    public class MouseEvent : UIEvent
    {
        internal MouseEvent()
        {
        }

        public MouseEvent(string type)
        {
        }

        public MouseEvent(string type, MouseEventInit eventInit)
        {
        }

        /// <summary>
        /// Indicates whether the ALT key was pressed when the event fired.
        /// </summary>
        public readonly bool AltKey;

        /// <summary>
        /// Indicates which mouse button caused the event.
        /// This property returns an integer value indicating the button that changed state.
        ///
        ///        0 for standard "click"; this is usually the left button for a right-handed mouse and right button for a left-handed mouse.
        ///        1 for middle button; this is usually a click on the scroll wheel's button.
        ///        2 for right button; this is usually a right-click on a right-handed mouse and left-click on a left-handed mouse.
        ///
        /// Note: This convention is not followed in Internet Explorer prior to version 9: See QuirksMode for details (http://www.quirksmode.org/js/events_properties.html#button).
        ///
        /// Notes
        ///
        /// Because mouse clicks are frequently intercepted by the user interface, it may be difficult to detect buttons other than those for a standard mouse click (usually the left button) in some circumstances.
        ///
        /// Users may change the configuration of buttons on their pointing device so that if an event's button property is zero, it may not have been caused by the button that is physically left–most on the pointing device; however, it should behave as if the left button was clicked in the standard button layout.
        /// </summary>
        public readonly int Button;

        /// <summary>
        /// The buttons being pressed when the mouse event was fired
        /// Each button that can be pressed is representd by a given number (see below). If more than one button is pressed, the value of the buttons is combined to produce a new number. For example, if the right button (2) and the wheel button (4) are pressed, the value is equal to 2|4, which is 6.
        /// A number representing one or more buttons. For more than one button pressed, the values are combined.
        ///
        /// 1  : Left button
        /// 2  : Right button
        /// 4  : Wheel button
        /// 8  : 4th button (typically the "Browser Back" button)
        /// 16 : 5th button (typically the "Browser Forward" button)
        /// </summary>
        public readonly int Buttons;

        /// <summary>
        /// Returns the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally.
        /// </summary>
        public readonly int ClientX;

        /// <summary>
        /// Returns the vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically.
        /// </summary>
        public readonly int ClientY;

        /// <summary>
        /// Indicates whether the CTRL key was pressed when the event fired.
        /// </summary>
        public readonly bool CtrlKey;

        /// <summary>
        /// Returns additional numerical information about the event, depending on the type of event.
        /// For mouse events, such as click, dblclick, mousedown, or mouseup, the detail property indicates how many times the mouse has been clicked in the same location for this event.
        /// For a dblclick event the value of detail is always 2.
        /// </summary>
        public new readonly int Detail;

        /// <summary>
        /// Indicates whether the "meta" key was pressed when the event fired.
        /// Note: On the Macintosh, this is the Command key. On Microsoft Windows, this is the Windows key.
        /// </summary>
        public readonly bool MetaKey;

        /// <summary>
        /// Returns the horizontal coordinate of the event within the screen as a whole.
        /// </summary>
        public readonly int ScreenX;

        /// <summary>
        /// Returns the vertical coordinate of the event within the screen as a whole.
        /// </summary>
        public readonly int ScreenY;

        /// <summary>
        /// Indicates whether the SHIFT key was pressed when the event fired.
        /// </summary>
        public readonly bool ShiftKey;

        /// <summary>
        /// The secondary target for the event, if there is one.
        /// </summary>
        public readonly HTMLElement RelatedTarget;

        /// <summary>
        /// The X coordinate of the mouse pointer relative to the position of the last mousemove event.
        /// </summary>
        public readonly int MovementX;

        /// <summary>
        /// The Y coordinate of the mouse pointer relative to the position of the last mousemove event.
        /// </summary>
        public readonly int MovementY;

        /// <summary>
        /// Returns the current state of the specified modifier key.
        /// </summary>
        /// <param name="keyArg">A string identifying the modifier key whose value you wish to determine. This may be an implementation-defined value or one of: "Alt", "AltGraph", "CapsLock", "Control", "Fn", "Meta", "NumLock", "ScrollLock", "Shift", "SymbolLock", or "OS". Note that IE9 uses "Scroll" for "ScrollLock" and "Win" for "OS". If you use these older draft's name, Gecko's getModifierState() always returns false.</param>
        /// <returns>true if the specified modifier key is engaged; otherwise false.</returns>
        public virtual extern bool GetModifierState(string keyArg);

        /// <summary>
        /// Intializes the value of a mouse event once it's been created (normally using document.createEvent method).
        /// </summary>
        /// <param name="type">the string to set the event's type to. Possible types for mouse events include: click, mousedown, mouseup, mouseover, mousemove, mouseout.</param>
        /// <param name="canBubble">whether or not the event can bubble.</param>
        /// <param name="cancelable">whether or not the event's default action can be prevented.</param>
        /// <param name="view">the Event's AbstractView. You should pass the window object here. </param>
        /// <param name="detail">the Event's mouse click count.</param>
        /// <param name="screenX">the Event's screen x coordinate.</param>
        /// <param name="screenY">the Event's screen y coordinate. </param>
        /// <param name="clientX">the Event's client x coordinate.</param>
        /// <param name="clientY">the Event's client y coordinate. </param>
        /// <param name="ctrlKey">whether or not control key was depressed during the Event. </param>
        /// <param name="altKey">whether or not alt key was depressed during the Event.</param>
        /// <param name="shiftKey">whether or not shift key was depressed during the Event.</param>
        /// <param name="metaKey">whether or not meta key was depressed during the Event.</param>
        /// <param name="button">the Event's mouse event.button.</param>
        /// <param name="relatedTarget">the Event's related EventTarget. Only used with some event types (e.g. mouseover and mouseout). In other cases, pass null.</param>
        public virtual extern void InitMouseEvent(string type, bool canBubble, bool cancelable, WindowInstance view, int detail, int screenX, int screenY, int clientX, int clientY, bool ctrlKey, bool altKey, bool shiftKey, bool metaKey, short button, HTMLElement relatedTarget);
    }

    [External]
    [Name("Object")]
    public class MouseEventInit : KeyboardEventInit
    {
        /// <summary>
        /// Indicates which mouse button caused the event.
        /// </summary>
        public int Button;

        /// <summary>
        /// The buttons being pressed when the mouse event was fired
        /// </summary>
        public int Buttons;

        /// <summary>
        /// Returns the horizontal coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientX value of 0, regardless of whether the page is scrolled horizontally.
        /// </summary>
        public int ClientX;

        /// <summary>
        /// Returns the vertical coordinate within the application's client area at which the event occurred (as opposed to the coordinates within the page). For example, clicking in the top-left corner of the client area will always result in a mouse event with a clientY value of 0, regardless of whether the page is scrolled vertically.
        /// </summary>
        public int ClientY;

        /// <summary>
        /// Returns additional numerical information about the event, depending on the type of event.
        /// </summary>
        public new int Detail;

        /// <summary>
        /// The secondary target for the event, if there is one.
        /// </summary>
        public HTMLElement RelatedTarget;

        /// <summary>
        /// Returns the horizontal coordinate of the event within the screen as a whole.
        /// </summary>
        public int ScreenX;

        /// <summary>
        /// Returns the vertical coordinate of the event within the screen as a whole.
        /// </summary>
        public int ScreenY;
    }

    /// <summary>
    /// A generic version of the MouseEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class MouseEvent<TCurrentTarget> : MouseEvent where TCurrentTarget : HTMLElement
    {
        /// <summary>
        /// Identifies the current target for the event, as the event traverses the DOM. It always refers to the element the event handler has been attached to as opposed to event.target which identifies the element on which the event occurred.
        /// On Internet Explorer 6 through 8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, there is no equivalent to event.currentTarget and this is the global object.
        /// </summary>
        public new readonly TCurrentTarget CurrentTarget;

        /// <summary>
        /// This property of event objects is the object the event was dispatched on. It is different than event.currentTarget when the event handler is called in bubbling or capturing phase of the event.
        /// On IE6-8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, the event object is not passed as an argument to the event handler function but is the window.event object. This object has an srcElement property which has the same semantics than event.target.
        /// </summary>
        public new readonly TCurrentTarget Target;
    }
}