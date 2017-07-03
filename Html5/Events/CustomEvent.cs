namespace Bridge.Html5
{
    /// <summary>
    /// The DOM CustomEvent are events initialized by an application for any purpose.
    /// </summary>
    [External]
    [Name("CustomEvent")]
    public class CustomEvent : Event
    {
        internal CustomEvent()
        {
        }

        public CustomEvent(string type, CustomEventInit eventInitDict)
        {
        }

        /// <summary>
        /// The data passed when initializing the event.
        /// </summary>
        public readonly object Detail;

        /// <summary>
        ///
        /// </summary>
        /// <param name="type"></param>
        /// <param name="canBubble"></param>
        /// <param name="cancelable"></param>
        /// <param name="detail"></param>
        public virtual extern void InitCustomEvent(string type, bool canBubble, bool cancelable, object detail);
    }

    [External]
    [Name("Object")]
    public class CustomEventInit : EventInit
    {
        /// <summary>
        /// The data passed when initializing the event.
        /// </summary>
        public object Detail;
    }

    /// <summary>
    /// A generic version of the CustomEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class CustomEvent<TCurrentTarget> : CustomEvent where TCurrentTarget : HTMLElement
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