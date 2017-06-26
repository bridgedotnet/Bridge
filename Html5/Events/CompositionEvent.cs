namespace Bridge.Html5
{
    /// <summary>
    /// The DOM CompositionEvent represents events that occur due to the user indirectly entering text.
    /// </summary>
    [External]
    [Name("CompositionEvent")]
    public class CompositionEvent : UIEvent
    {
        extern internal CompositionEvent();

        /// <summary>
        /// For compositionstart events, this is the currently selected text that will be replaced by the string being composed. This value doesn't change even if content changes the selection range; rather, it indicates the string that was selected when composition started.
        /// For compositionupdate, this is the string as it stands currently as editing is ongoing.
        /// For compositionend events, this is the string as committed to the editor.
        /// </summary>
        public readonly string Data;

        /// <summary>
        /// The locale of current input method (for example, the keyboard layout locale if the composition is associated with IME).
        /// </summary>
        public readonly string Locale;
    }

    /// <summary>
    /// A generic version of the CompositionEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Name("CompositionEvent")]
    [IgnoreGeneric]
    public class CompositionEvent<TCurrentTarget> : CompositionEvent where TCurrentTarget : HTMLElement
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