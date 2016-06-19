namespace Bridge.Html5
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [Name("HashChangeEvent")]
    public class HashChangeEvent : Event
    {
        private HashChangeEvent()
        {
        }

        /// <summary>
        /// The new URL to which the window is navigating.
        /// </summary>
        public readonly string NewURL;

        /// <summary>
        /// The previous URL from which the window was navigated.
        /// </summary>
        public readonly string OldURL;
    }

    /// <summary>
    /// A generic version of the HashChangeEvent class. The type parameter is a type of CurrentTarget.
    /// </summary>
    /// <typeparam name="TCurrentTarget">The CurrentTarget type</typeparam>
    [External]
    [Name("HashChangeEvent")]
    public class HashChangeEvent<TCurrentTarget> : Event<TCurrentTarget> where TCurrentTarget : HTMLElement { }
}
