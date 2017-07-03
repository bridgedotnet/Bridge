namespace Bridge.Html5
{
    /// <summary>
    /// The DOM WheelEvent represents events that occur due to the user moving a mouse wheel or similar input device.
    /// </summary>
    [External]
    [Name("WheelEvent")]
    public class WheelEvent : Event
    {
        internal WheelEvent()
        {
        }

        /// <summary>
        /// Horizontal scroll amount. Read only.
        /// </summary>
        public readonly double DeltaX;

        /// <summary>
        /// Vertical scroll amount. Read only.
        /// </summary>
        public readonly double DeltaY;

        /// <summary>
        /// Scroll amount for the z-axis. Read only.
        /// </summary>
        public readonly double DeltaZ;

        /// <summary>
        /// Unit of delta values.
        /// </summary>
        public readonly DeltaMode DeltaMode;
    }

    /// <summary>
    /// Unit of delta values.
    /// </summary>
    [External]
    public enum DeltaMode
    {
        /// <summary>
        /// The delta values are specified in pixels.
        /// </summary>
        Pixel = 0,

        /// <summary>
        /// The delta values are specified in lines.
        /// </summary>
        Line = 1,

        /// <summary>
        /// The delta values are specified in pages.
        /// </summary>
        Page = 2
    }

    /// <summary>
    /// A generic version of the WheelEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class WheelEvent<TCurrentTarget> : WheelEvent where TCurrentTarget : HTMLElement
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