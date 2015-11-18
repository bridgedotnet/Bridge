using System;

namespace Bridge.Html5
{
    /// <summary>
    /// XMLHttpRequestEventTarget is the interface that describes the event handlers you can implement in an object that will handle events for an XMLHttpRequest.
    /// </summary>
    [External]
    [Name("XMLHttpRequestEventTarget")]
    public abstract class XMLHttpRequestEventTarget : EventTarget
    {
        /// <summary>
        /// The function to call when a request is aborted.
        /// </summary>
        [Name("onabort")]
        public Action<Event> OnAbort;

        /// <summary>
        /// The function to call when a request encounters an error.
        /// </summary>
        [Name("onerror")]
        public Action<Event> OnError;

        /// <summary>
        /// The function to call when an HTTP request returns after successfully loading content.
        /// </summary>
        [Name("onload")]
        public Action<Event> OnLoad;

        /// <summary>
        /// A function that gets called when the HTTP request first begins loading data.
        /// </summary>
        [Name("onloadstart")]
        public Action<Event> OnLoadStart;

        /// <summary>
        /// A function that is called periodically with information about the progress of the request.
        /// </summary>
        [Name("onprogress")]
        public Action<Event> OnProgress;

        /// <summary>
        /// A function that is called if the event times out; this only happens if a timeout has been previously established by setting the value of the XMLHttpRequest object's timeout attribute.
        /// </summary>
        [Name("ontimeout")]
        public Action<Event> OnTimeout;

        /// <summary>
        /// A function that is called when the load is completed, even if the request failed.
        /// </summary>
        [Name("onloadend")]
        public Action<Event> OnLoadEnd;
    }
}
