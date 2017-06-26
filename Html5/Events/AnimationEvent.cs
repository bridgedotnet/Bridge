namespace Bridge.Html5
{
    /// <summary>
    /// The AnimationEvent interface represents events providing information related to animations.
    /// </summary>
    [External]
    [Name("AnimationEvent")]
    public class AnimationEvent : Event
    {
        extern internal AnimationEvent();

        /// <summary>
        /// Is a DOMString containing the value of the animation-name CSS property associated with the transition.
        /// </summary>
        public readonly string AnimationName;

        /// <summary>
        /// Is a float giving the amount of time the animation has been running, in seconds, when this event fired, excluding any time the animation was paused. For an "animationstart" event, elapsedTime is 0.0 unless there was a negative value for animation-delay, in which case the event will be fired with elapsedTime containing  (-1 * delay).
        /// </summary>
        public readonly float ElapsedTime;

        /// <summary>
        /// Is a DOMString, starting with '::', containing the name of the pseudo-element the animation runs on. If the animation doesn't run on a pseudo-element but on the element, an empty string: ''.
        /// </summary>
        public readonly string PseudoElement;
    }

    /// <summary>
    /// A generic version of the AnimationEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Name("AnimationEvent")]
    [IgnoreGeneric]
    public class AnimationEvent<TCurrentTarget> : AnimationEvent where TCurrentTarget : HTMLElement
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