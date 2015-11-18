namespace Bridge.Html5
{
    /// <summary>
    /// The AnimationEvent interface represents events providing information related to animations.
    /// </summary>
    [External]
    [Name("AnimationEvent")]
    public class AnimationEvent : Event
    {
        private AnimationEvent()
        {
        }

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
}
