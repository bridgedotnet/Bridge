namespace Bridge.Html5
{
    /// <summary>
    /// The ProgressEvent interface represents events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an &lt;img&gt;, &lt;audio&gt;, &lt;video&gt;, &lt;style&gt; or &lt;link&gt;).
    /// </summary>
    [External]
    [Name("ProgressEvent")]
    public class ProgressEvent : Event
    {
        private ProgressEvent()
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
    [Name("ProgressEvent")]
    public class ProgressEvent<TCurrentTarget> : Event<TCurrentTarget> where TCurrentTarget : HTMLElement { }
}
