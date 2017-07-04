// Event WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/event

namespace Bridge.Html5
{
    /// <summary>
    /// The Event interface represents any event of the DOM. It contains common properties and methods to any event.
    /// </summary>
    [External]
    [Namespace(false)]
    public class Event
    {
        internal Event()
        {
        }

        public Event(string type)
        {
        }

        public Event(string type, EventInit eventInit)
        {
        }

        /// <summary>
        /// Indicates whether the given event bubbles up through the DOM or not.
        /// Only certain events can bubble. Events that do bubble have this property set to true. You can use this property to check if an event is allowed to bubble or not.
        /// </summary>
        public readonly bool Bubbles;

        /// <summary>
        /// Indicates whether the event is cancelable or not.
        /// Whether an event can be canceled or not is something that's determined when that event is initialized.
        /// To cancel an event, call the preventDefault() method on the event. This keeps the implementation from executing the default action that is associated with the event.
        /// </summary>
        public readonly bool Cancelable;

        /// <summary>
        /// Identifies the current target for the event, as the event traverses the DOM. It always refers to the element the event handler has been attached to as opposed to event.target which identifies the element on which the event occurred.
        /// On Internet Explorer 6 through 8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, there is no equivalent to event.currentTarget and this is the global object.
        /// </summary>
        public readonly EventTarget CurrentTarget;

        /// <summary>
        /// Returns a boolean indicating whether or not event.preventDefault() was called on the event.
        /// </summary>
        public readonly bool DefaultPrevented;

        /// <summary>
        /// Indicates which phase of the event flow is currently being evaluated.
        /// Returns an integer value represented by 4 constants:
        /// Event.NONE = 0
        /// Event.CAPTURING_PHASE = 1
        /// Event.AT_TARGET = 2
        /// Event.BUBBLING_PHASE = 3
        /// </summary>
        public readonly int EventPhase;

        /// <summary>
        /// This property of event objects is the object the event was dispatched on. It is different than event.currentTarget when the event handler is called in bubbling or capturing phase of the event.
        /// On IE6-8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, the event object is not passed as an argument to the event handler function but is the window.event object. This object has an srcElement property which has the same semantics than event.target.
        /// </summary>
        public readonly EventTarget Target;

        /// <summary>
        /// Returns the time (in milliseconds since the epoch) at which the event was created.
        /// This property only works if the event system supports it for the particular event.
        /// </summary>
        public readonly int TimeStamp;

        /// <summary>
        /// Returns a string containing the type of event.
        /// </summary>
        public readonly string Type;

        /// <summary>
        /// Indicates whether or not the event was initiated by the browser (after a user click for instance) or by a script (using an event creation method, like event.initEvent)
        /// </summary>
        public readonly bool IsTrusted;

        /// <summary>
        /// Cancels the event if it is cancelable, without stopping further propagation of the event.
        /// </summary>
        public virtual extern void PreventDefault();

        /// <summary>
        /// Prevents other listeners of the same event to be called.
        /// If several listeners are attached to the same element for the same event type, they are called in order in which they have been added. If during one such call, event.stopImmediatePropagation() is called, no remaining listeners will be called.
        /// </summary>
        public virtual extern void StopImmediatePropagation();

        /// <summary>
        /// Prevents further propagation of the current event.
        /// </summary>
        public virtual extern void StopPropagation();
    }

    /// <summary>
    /// A generic version of the Event class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class Event<TCurrentTarget> : Event where TCurrentTarget : HTMLElement
    {
        /// <summary>
        /// Identifies the current target for the event, as the event traverses the DOM. It always refers to the element the event handler has been attached to as opposed to event.target which identifies the element on which the event occurred.
        /// On Internet Explorer 6 through 8, the event model is different. Event listeners are attached with the non-standard element.attachEvent method. In this model, there is no equivalent to event.currentTarget and this is the global object.
        /// </summary>
        public new readonly TCurrentTarget CurrentTarget;
    }

    [External]
    [Name("Object")]
    public class EventInit
    {
        /// <summary>
        /// Indicates whether the given event bubbles up through the DOM or not.
        /// Only certain events can bubble. Events that do bubble have this property set to true. You can use this property to check if an event is allowed to bubble or not.
        /// </summary>
        public bool Bubbles;

        /// <summary>
        /// Indicates whether the event is cancelable or not.
        /// Whether an event can be canceled or not is something that's determined when that event is initialized.
        /// To cancel an event, call the preventDefault() method on the event. This keeps the implementation from executing the default action that is associated with the event.
        /// </summary>
        public bool Cancelable;
    }

    [External]
    public static class EventsExtension
    {
        [Template("Bridge.is({0}, MouseEvent)")]
        public static extern bool IsMouseEvent(this Event e);

        [Template("Bridge.is({0}, FocusEvent)")]
        public static extern bool IsFocusEvent(this Event e);

        [Template("Bridge.is({0}, UIEvent)")]
        public static extern bool IsUIEvent(this Event e);

        [Template("Bridge.is({0}, KeyboardEvent)")]
        public static extern bool IsKeyboardEvent(this Event e);
    }
}