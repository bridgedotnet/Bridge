using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLBodyElement interface provides special properties (beyond those of the regular HTMLElement interface they also inherit) for manipulating body elements.
    /// </summary>
    [External]
    [Name("HTMLBodyElement")]
    public sealed class HTMLBodyElement : HTMLElement<HTMLBodyElement>
    {
        [Template("document.createElement(\"body\")")]
        public extern HTMLBodyElement();

        /// <summary>
        /// Color of active hyperlinks.
        /// </summary>
        public string ALink;

        /// <summary>
        /// Color of active hyperlinks.
        /// </summary>
        public string Background;

        /// <summary>
        /// Background color for the document.
        /// </summary>
        public string BgColor;

        /// <summary>
        /// Color of unvisited links.
        /// </summary>
        public string Link;

        /// <summary>
        /// Reflects the onafterprint HTML attribute value for a function to call after the user has printed the document.
        /// </summary>
        [Name("onafterprint")]
        public Action<Event> OnAfterPrint;

        /// <summary>
        /// Reflects the onbeforeprint HTML attribute value for a function to call when the user has requested printing the document.
        /// </summary>
        [Name("onbeforeprint")]
        public Action<Event> OnBeforePrint;

        /// <summary>
        /// Reflects the onbeforeunload HTML attribute value for a function to call when the document is about to be unloaded.
        /// </summary>
        [Name("onbeforeunload")]
        public Action<Event> OnBeforeUnload;

        /// <summary>
        /// Exposes the window.onblur event handler to call when the window loses focus. Note: This handler is triggered when the event reaches the window, not the body element. Use addEventListener() to attach an event listener to the body element.
        /// </summary>
        [Name("onblur")]
        public new Action<Event> OnBlur;

        /// <summary>
        /// Exposes the window.onerror event handler to call when the document fails to load properly. Note: This handler is triggered when the event reaches the window, not the body element. Use addEventListener() to attach an event listener to the body element.
        /// </summary>
        [Name("onerror")]
        public new ErrorEventHandler OnError;

        /// <summary>
        /// Exposes the window.onfocus event handler to call when the window gains focus. Note: This handler is triggered when the event reaches the window, not the body element. Use addEventListener() to attach an event listener to the body element.
        /// </summary>
        [Name("onfocus")]
        public new Action<Event> OnFocus;

        /// <summary>
        /// Reflects the onhashchange HTML attribute value for a function to call when the fragment identifier in the address of the document changes.
        /// </summary>
        [Name("onhashchange")]
        public Action<Event> OnHashChange;

        /// <summary>
        /// Exposes the window.onload event handler to call when the window gains focus. Note: This handler is triggered when the event reaches the window, not the body element. Use addEventListener() to attach an event listener to the body element.
        /// </summary>
        [Name("onload")]
        public new Action<Event> OnLoad;

        /// <summary>
        /// Reflects the onmessage HTML attribute value for a function to call when the document receives a message.
        /// </summary>
        [Name("onmessage")]
        public Action<Event> OnMessage;

        /// <summary>
        /// Reflects the onoffline HTML attribute value for a function to call when network communication fails.
        /// </summary>
        [Name("onoffline")]
        public Action<Event> OnOffline;

        /// <summary>
        /// Reflects the ononline HTML attribute value for a function to call when network communication is restored.
        /// </summary>
        [Name("ononline")]
        public Action<Event> OnOnline;

        /// <summary>
        /// Reflects the onpopstate HTML attribute value for a function to call when the user has navigated session history.
        /// </summary>
        [Name("onpopstate")]
        public Action<Event> OnPopState;

        /// <summary>
        /// Reflects the onresize HTML attribute value for a function to call when the document has been resized.
        /// </summary>
        [Name("onresize")]
        public Action<Event> OnResize;

        /// <summary>
        /// Reflects the onstorage HTML attribute value for a function to call when the storage area has changed.
        /// </summary>
        [Name("onstorage")]
        public Action<Event> OnStorage;

        /// <summary>
        /// Reflects the onunload HTML attribute value for a function to call when when the document is going away.
        /// </summary>
        [Name("onunload")]
        public Action<Event> OnUnload;

        /// <summary>
        /// Foreground color of text.
        /// </summary>
        public string Text;

        /// <summary>
        /// Color of visited links.
        /// </summary>
        public string VLink;
    }
}