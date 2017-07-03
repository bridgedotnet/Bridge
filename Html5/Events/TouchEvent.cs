// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/TouchEvent

namespace Bridge.Html5
{
    [External]
    [Name("TouchEvent")]
    public class TouchEvent : UIEvent
    {
        /// <summary>
        /// A Boolean value indicating whether or not the alt key was down when the touch event was fired.
        /// </summary>
        public readonly bool AltKey;

        /// <summary>
        /// A <see cref="TouchList"/> of all the <see cref="Touch"/> objects representing individual points of contact whose states changed between the previous touch event and this one.
        /// </summary>
        public readonly TouchList ChangedTouches;

        /// <summary>
        /// A Boolean value indicating whether or not the control key was down when the touch event was fired.
        /// </summary>
        public readonly bool CtrlKey;

        /// <summary>
        /// A Boolean value indicating whether or not the meta key was down when the touch event was fired.
        /// </summary>
        public readonly bool MetaKey;

        /// <summary>
        /// A Boolean value indicating whether or not the shift key was down when the touch event was fired.
        /// </summary>
        public readonly bool ShiftKey;

        /// <summary>
        /// A <see cref="TouchList"/> of all the <see cref="Touch"/> objects that are both currently in contact with the touch surface and were also started on the same element that is the target of the event.
        /// </summary>
        public readonly TouchList TargetTouches;

        /// <summary>
        /// A <see cref="TouchList"/> of all the <see cref="Touch"/> objects representing all current points of contact with the surface, regardless of target or changed status.
        /// </summary>
        public readonly TouchList Touches;
    }

    /// <summary>
    /// A generic version of the TouchEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class TouchEvent<TCurrentTarget> : TouchEvent where TCurrentTarget : HTMLElement
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