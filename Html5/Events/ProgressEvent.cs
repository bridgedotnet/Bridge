namespace Bridge.Html5
{
    /// <summary>
    /// The ProgressEvent interface represents events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;style&gt; or &lt;link&gt;).
    /// </summary>
    [External]
    [Name("ProgressEvent")]
    public class ProgressEvent : Event
    {
        internal ProgressEvent()
        {
        }

        /// <summary>
        /// Is a Boolean flag indicating if the total work to be done, and the amount of work already done, by the underlying process is calculable. In other words, it tells if the progress is measurable or not.
        /// </summary>
        public readonly bool LengthComputable;

        /// <summary>
        /// Is an unsigned long long representing the amount of work already performed by the underlying process. The ratio of work done can be calculated with the property and ProgressEvent.total. When downloading a resource using HTTP, this only represent the part of the content itself, not headers and other overhead.
        /// </summary>
        public readonly int Loaded;

        /// <summary>
        /// Is an unsigned long long representing the total amount of work that the underlying process is in the progress of performing. When downloading a resource using HTTP, this only represent the content itself, not headers and other overhead.
        /// </summary>
        public readonly int Total;
    }

    /// <summary>
    /// A generic version of the ProgressEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Namespace(false)]
    [IgnoreGeneric]
    public class ProgressEvent<TCurrentTarget> : ProgressEvent where TCurrentTarget : EventTarget
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