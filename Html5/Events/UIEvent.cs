// Event WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/event

namespace Bridge.Html5
{
    [External]
    [Name("UIEvent")]
    public class UIEvent : Event
    {
        extern internal UIEvent();

        public extern UIEvent(string type);

        public extern UIEvent(string type, UIEventInit eventInit);

        /// <summary>
        /// Returns additional numerical information about the event, depending on the type of event.
        /// For mouse events, such as click, dblclick, mousedown, or mouseup, the detail property indicates how many times the mouse has been clicked in the same location for this event.
        /// For a dblclick event the value of detail is always 2.
        /// </summary>
        public readonly int Detail;

        /// <summary>
        /// Indicates which phase of the event flow is currently being evaluated.
        /// Returns an integer value represented by 4 constants:
        /// Event.NONE = 0
        /// Event.CAPTURING_PHASE = 1
        /// Event.AT_TARGET = 2
        /// Event.BUBBLING_PHASE = 3
        /// </summary>
        public new readonly int EventPhase;

        /// <summary>
        /// Returns the horizontal coordinate of the event relative to the current layer.
        /// LayerX takes scrolling of the page into account, and returns a value relative to the whole of the document, unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.
        /// </summary>
        public readonly int LayerX;

        /// <summary>
        /// Returns the vertical coordinate of the event relative to the current layer.
        /// LayerY takes scrolling of the page into account, and returns a value relative to the whole of the document, unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.
        /// </summary>
        public readonly int LayerY;

        /// <summary>
        /// Returns the horizontal coordinate of the event relative to whole document.
        /// </summary>
        public readonly int PageX;

        /// <summary>
        /// Returns the vertical coordinate of the event relative to the whole document.
        /// </summary>
        public readonly int PageY;

        /// <summary>
        /// A view which generated the event.
        /// </summary>
        public readonly WindowInstance View;

        /// <summary>
        ///
        /// </summary>
        public string ReturnValue;
    }

    [External]
    [Name("Object")]
    public class UIEventInit : EventInit
    {
        /// <summary>
        /// Detail about the event, depending on the type of event
        /// </summary>
        public int Detail;

        /// <summary>
        /// A view which generated the event.
        /// </summary>
        public WindowInstance View;
    }

    /// <summary>
    /// A generic version of the UIEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Name("UIEvent")]
    [IgnoreGeneric]
    public class UIEvent<TCurrentTarget> : Event<TCurrentTarget> where TCurrentTarget : HTMLElement { }
}