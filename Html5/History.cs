// History WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/History
// https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history

namespace Bridge.Html5
{
    [External]
    [Name("History")]
    public class History
    {
        extern History();

        /// <summary>
        /// Returns an Integer representing the number of elements in the session history, including the currently loaded page. For example, for a page loaded in a new tab this property returns 1.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// Returns an any value representing the state at the top of the history stack. This is a way to look at the state without having to wait for a popstate event.
        /// </summary>
        public readonly object State;

        /// <summary>
        /// Goes to the previous page in session history, the same action as when the user clicks the browser's Back button. Equivalent to history.go(-1).
        /// Note: Calling this method to go back beyond the first page in the session history has no effect and doesn't raise an exception.
        /// </summary>
        public virtual extern void Back();

        /// <summary>
        /// Goes to the next page in session history, the same action as when the user clicks the browser's Forward button; this is equivalent to history.go(1).
        /// Note: Calling this method to go back beyond the last page in the session history has no effect and doesn't raise an exception.
        /// </summary>
        public virtual extern void Forward();

        /// <summary>
        /// Loads a page from the session history, identified by its relative location to the current page, for example -1 for the previous page or 1 for the next page. When integerDelta is out of bounds (e.g. -1 when there are no previously visited pages in the session history), the method doesn't do anything and doesn't raise an exception. Calling go() without parameters or with a non-integer argument has no effect (unlike Internet Explorer, which supports string URLs as the argument).
        /// </summary>
        /// <param name="delta"></param>
        public virtual extern void Go(int delta);

        /// <summary>
        /// Pushes the given data onto the session history stack with the specified title and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.
        /// </summary>
        /// <param name="state">The state object is a JavaScript object which is associated with the new history entry created by pushState(). Whenever the user navigates to the new state, a popstate event is fired, and the state property of the event contains a copy of the history entry's state object.</param>
        /// <param name="title">Firefox currently ignores this parameter, although it may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.</param>
        public virtual extern void PushState(object state, string title);

        /// <summary>
        /// Pushes the given data onto the session history stack with the specified title and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.
        /// </summary>
        /// <param name="state">The state object is a JavaScript object which is associated with the new history entry created by pushState(). Whenever the user navigates to the new state, a popstate event is fired, and the state property of the event contains a copy of the history entry's state object.</param>
        /// <param name="title">Firefox currently ignores this parameter, although it may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.</param>
        /// <param name="url">The new history entry's URL is given by this parameter. Note that the browser won't attempt to load this URL after a call to pushState(), but it might attempt to load the URL later, for instance after the user restarts the browser. The new URL does not need to be absolute; if it's relative, it's resolved relative to the current URL. The new URL must be of the same origin as the current URL; otherwise, pushState() will throw an exception. This parameter is optional; if it isn't specified, it's set to the document's current URL.</param>
        public virtual extern void PushState(object state, string title, string url);

        /// <summary>
        /// Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.
        /// </summary>
        /// <param name="state">The state object is a JavaScript object which is associated with the new history entry created by pushState(). Whenever the user navigates to the new state, a popstate event is fired, and the state property of the event contains a copy of the history entry's state object.</param>
        /// <param name="title">Firefox currently ignores this parameter, although it may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.</param>
        public virtual extern void ReplaceState(object state, string title);

        /// <summary>
        /// Updates the most recent entry on the history stack to have the specified data, title, and, if provided, URL. The data is treated as opaque by the DOM; you may specify any JavaScript object that can be serialized.
        /// </summary>
        /// <param name="state">The state object is a JavaScript object which is associated with the new history entry created by pushState(). Whenever the user navigates to the new state, a popstate event is fired, and the state property of the event contains a copy of the history entry's state object.</param>
        /// <param name="title">Firefox currently ignores this parameter, although it may use it in the future. Passing the empty string here should be safe against future changes to the method. Alternatively, you could pass a short title for the state to which you're moving.</param>
        /// <param name="url">The new history entry's URL is given by this parameter. Note that the browser won't attempt to load this URL after a call to pushState(), but it might attempt to load the URL later, for instance after the user restarts the browser. The new URL does not need to be absolute; if it's relative, it's resolved relative to the current URL. The new URL must be of the same origin as the current URL; otherwise, pushState() will throw an exception. This parameter is optional; if it isn't specified, it's set to the document's current URL.</param>
        public virtual extern void ReplaceState(object state, string title, string url);
    }
}