namespace Bridge.Html5
{
    /// <summary>
    /// The state of the XMLHttpRequest
    /// </summary>
    [External]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum AjaxReadyState
    {
        /// <summary>
        /// open() has not been called yet.
        /// </summary>
        Unsent = 0,

        /// <summary>
        /// send() has not been called yet.
        /// </summary>
        Opened = 1,

        /// <summary>
        /// send() has been called, and headers and status are available.
        /// </summary>
        HeadersReceived = 2,

        /// <summary>
        /// Downloading; responseText holds partial data.
        /// </summary>
        Loading = 3,

        /// <summary>
        /// The operation is complete.
        /// </summary>
        Done = 4
    }
}
