// Window WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Window

using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The window object represents a window containing a DOM document; the document property points to the DOM document loaded in that window.
    /// </summary>
    [External]
    [Name("Window")]
    public class WindowInstance
    {
        #region Properties

        [Template("arguments")]
        public object Arguments;

        /// <summary>
        /// This read-only property indicates whether the referenced window is closed or not.
        /// </summary>
        public readonly bool Closed;

        /// <summary>
        /// Gets the arguments passed to the window (if it's a dialog box) at the time window.showModalDialog() was called.
        /// </summary>
        public readonly object DialogArguments;

        /// <summary>
        /// Returns a reference to the document that the window contains.
        /// </summary>
        public readonly DocumentInstance Document;

        /// <summary>
        /// Returns the element (such as &lt;iframe&gt; or &lt;object&gt;) in which the window is embedded, or null if the window is top-level.
        /// </summary>
        public readonly HTMLIFrameElement FrameElement;

        /// <summary>
        /// Returns the window itself, which is an array-like object, listing the direct sub-frames of the current window.
        /// </summary>
        public readonly WindowInstance[] Frames;

        /// <summary>
        /// Returns a reference to the history objectt, which provides an interface for manipulating the browser session history (pages visited in the tab or frame that the current page is loaded in).
        /// </summary>
        public readonly History History;

        /// <summary>
        /// Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar.
        /// </summary>
        public readonly int InnerHeight;

        /// <summary>
        /// Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar.
        /// </summary>
        public readonly int InnerWidth;

        /// <summary>
        /// Returns the number of frames in the window.
        /// </summary>
        public readonly int Length;

        /// <summary>
        /// The Window.location read-only property returns a Location object with information about the current location of the document.
        /// </summary>
        public readonly Location Location;

        /// <summary>
        /// Returns the locationbar object, whose visibility can be checked.
        /// </summary>
        public readonly BarProp Locationbar;

        /// <summary>
        /// Returns a reference to the local storage object used to store data that may only be accessed by the origin that created it.
        /// </summary>
        public readonly Storage LocalStorage;

        /// <summary>
        /// Returns the menubar object, whose visibility can be toggled in the window.
        /// </summary>
        public readonly BarProp Menubar;

        /// <summary>
        /// Gets/sets the name of the window.
        /// The name of the window is used primarily for setting targets for hyperlinks and forms. Windows do not need to have names.
        /// </summary>
        public string Name;

        /// <summary>
        /// The Window.navigator read-only property returns a reference to the Navigator object, which can be queried for information about the application running the script.
        /// </summary>
        public readonly Navigator Navigator;

        /// <summary>
        /// Returns a reference to the window that opened this current window.
        /// </summary>
        public readonly WindowInstance Opener;

        /// <summary>
        /// Gets the height of the outside of the browser window.
        /// </summary>
        public readonly int OuterHeight;

        /// <summary>
        /// Gets the width of the outside of the browser window.
        /// </summary>
        public readonly int OuterWidth;

        /// <summary>
        /// An alias for window.scrollX.
        /// </summary>
        public readonly int PageXOffset;

        /// <summary>
        /// An alias for window.scrollY.
        /// </summary>
        public readonly int PageYOffset;

        /// <summary>
        /// Returns a reference to the parent of the current window or subframe.
        /// </summary>
        public readonly WindowInstance Parent;

        /// <summary>
        /// Provides a hosting area for performance related attributes.
        /// </summary>
        public readonly Performance Performance;

        /// <summary>
        /// The return value to be returned to the function that called window.showModalDialog() to display the window as a modal dialog.
        /// </summary>
        public readonly object ReturnValue;

        /// <summary>
        /// Returns a reference to the screen object associated with the window.
        /// The screen object is a special object for inspecting properties of the screen on which the current window is being rendered.
        /// </summary>
        public readonly Screen Screen;

        /// <summary>
        /// Returns the horizontal distance of the left border of the user's browser from the left side of the screen.
        /// </summary>
        public readonly int ScreenX;

        /// <summary>
        /// Returns the vertical distance of the top border of the user's browser from the top side of the screen.
        /// </summary>
        public readonly int ScreenY;

        /// <summary>
        /// Returns the scrollbars object, whose visibility can be toggled in the window.
        /// </summary>
        public readonly BarProp Scrollbars;

        /// <summary>
        /// Returns the number of pixels that the document has already been scrolled horizontally.
        /// </summary>
        public readonly int ScrollX;

        /// <summary>
        /// Returns the number of pixels that the document has already been scrolled vertically.
        /// </summary>
        public readonly int ScrollY;

        /// <summary>
        /// Returns an object reference to the window object itself.
        /// </summary>
        public readonly WindowInstance Self;

        /// <summary>
        /// A storage object for storing data within a single page session.
        /// </summary>
        public readonly Storage SessionStorage;

        /// <summary>
        /// Gets/sets the text in the statusbar at the bottom of the browser.
        /// </summary>
        public string Status;

        /// <summary>
        /// Returns the statusbar object, whose visibility can be toggled in the window.
        /// </summary>
        public readonly BarProp Statusbar;

        /// <summary>
        /// Returns a reference to the topmost window in the window hierarchy. This property is read only.
        /// </summary>
        public readonly WindowInstance Top;

        #endregion Properties

        #region Methods

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(string type, Delegate listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(string type, Action listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(EventType type, Delegate listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(EventType type, Action listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(string type, Action<Event> listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(EventType type, Action<Event> listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(string type, Delegate listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(string type, Action listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(EventType type, Delegate listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(EventType type, Action listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(string type, Action<Event> listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(EventType type, Action<Event> listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(string type, IEventListener listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        public virtual extern void AddEventListener(EventType type, IEventListener listener);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(string type, IEventListener listener, bool useCapture);

        /// <summary>
        /// The method registers the specified listener on the EventTarget it's called on. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events.
        /// </summary>
        /// <param name="type">A string representing the event type to listen for.</param>
        /// <param name="listener">The object that receives a notification when an event of the specified type occurs. This must be an object implementing the EventListener interface, or simply a JavaScript function.</param>
        /// <param name="useCapture"></param>
        public virtual extern void AddEventListener(EventType type, IEventListener listener, bool useCapture);

        /// <summary>
        /// The Window.alert() method displays an alert dialog with the optional specified content and an OK button.
        /// </summary>
        /// <param name="message">message is an optional string of text you want to display in the alert dialog, or, alternatively, an object that is converted into a string and displayed.</param>
        public virtual extern void Alert(string message);

        /// <summary>
        /// The Window.atob()decodes a string of data which has been encoded using base-64 encoding. You can use the window.btoa() method to encode and transmit data which may otherwise cause communication problems, then transmit it and use the window.atob() method to decode the data again. For example, you can encode, transmit, and decode control characters such as ASCII values 0 through 31.
        /// </summary>
        /// <param name="encodedData">encoded string</param>
        /// <returns></returns>
        public virtual extern string Atob(string encodedData);

        /// <summary>
        /// Returns the window to the previous item in the history.
        /// </summary>
        public virtual extern void Back();

        /// <summary>
        /// Shifts focus away from the window.
        /// </summary>
        public virtual extern void Blur();

        /// <summary>
        /// Creates a base-64 encoded ASCII string from a "string" of binary data.
        /// You can use this method to encode data which may otherwise cause communication problems, transmit it, then use the window.atob method to decode the data again. For example, you can encode control characters such as ASCII values 0 through 31.
        /// </summary>
        /// <param name="stringToEncode">String to encode</param>
        /// <returns></returns>
        public virtual extern string Btoa(string stringToEncode);

        /// <summary>
        /// Cancels an animation frame request previously scheduled through a call to window.requestAnimationFrame().
        /// </summary>
        /// <param name="requestID">The ID value returned by the call to window.requestAnimationFrame() that requested the callback.</param>
        public virtual extern void CancelAnimationFrame(int requestID);

        /// <summary>
        /// Cancels repeated action which was set up using setInterval.
        /// </summary>
        /// <param name="intervalID">intervalID is the identifier of the repeated action you want to cancel. This ID is returned from setInterval().</param>
        public virtual extern void ClearInterval(int intervalID);

        /// <summary>
        /// Clears the delay set by window.setTimeout().
        /// </summary>
        /// <param name="timeoutID">timeoutID is the ID of the timeout you wish to clear, as returned by window.setTimeout().</param>
        public virtual extern void ClearTimeout(int timeoutID);

        /// <summary>
        /// Closes the current window, or a referenced window.
        /// This method is only allowed to be called for windows that were opened by a script using the window.open method. If the window was not opened by a script, the following error appears in the JavaScript Console: Scripts may not close windows that were not opened by script.
        /// </summary>
        public virtual extern void Close();

        /// <summary>
        /// The Window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel.
        /// </summary>
        /// <param name="message">message is the optional string to be displayed in the dialog.</param>
        /// <returns>result is a boolean value indicating whether OK or Cancel was selected (true means OK).</returns>
        public virtual extern bool Confirm(string message);

        /// <summary>
        /// The Window.confirm() method displays a modal dialog with an optional message and two buttons, OK and Cancel.
        /// </summary>
        /// <returns>result is a boolean value indicating whether OK or Cancel was selected (true means OK).</returns>
        public virtual extern bool Confirm();

        /// <summary>
        /// Dispatches the specified event to the current element.
        /// To create an event object use the createEvent method in Firefox, Opera, Google Chrome, Safari and Internet Explorer from version 9. After the new event is created, initialize it first (for details, see the page for the createEvent method). When the event is initialized, it is ready for dispatching.
        /// </summary>
        /// <param name="e">Required. Reference to an event object to be dispatched.</param>
        /// <returns>Boolean that indicates whether the default action of the event was not canceled.</returns>
        public virtual extern bool DispatchEvent(Event e);

        /// <summary>
        /// Prints messages to the (native) console.
        /// </summary>
        /// <param name="message">message is the string message to log.</param>
        public virtual extern void Dump(string message);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">Boolean value. If true, specifies a case-sensitive search.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">Boolean value. If true, specifies a case-sensitive search.</param>
        /// <param name="backwards">Boolean. If true, specifies a backward search.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive, bool backwards);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">Boolean value. If true, specifies a case-sensitive search.</param>
        /// <param name="backwards">Boolean. If true, specifies a backward search.</param>
        /// <param name="wrapAround">Boolean. If true, specifies a wrap around search.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive, bool backwards, bool wrapAround);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">The text string for which to search.</param>
        /// <param name="backwards">Boolean. If true, specifies a backward search.</param>
        /// <param name="wrapAround">Boolean. If true, specifies a wrap around search.</param>
        /// <param name="wholeWord">Boolean. If true, specifies a whole word search. </param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive, bool backwards, bool wrapAround, bool wholeWord);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">Boolean value. If true, specifies a case-sensitive search.</param>
        /// <param name="backwards">Boolean. If true, specifies a backward search.</param>
        /// <param name="wrapAround">Boolean. If true, specifies a wrap around search.</param>
        /// <param name="wholeWord">Boolean. If true, specifies a whole word search. </param>
        /// <param name="searchInFrames">Boolean. If true, specifies a search in frames.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive, bool backwards, bool wrapAround, bool wholeWord, bool searchInFrames);

        /// <summary>
        /// Finds a string in a window.
        /// </summary>
        /// <param name="str">The text string for which to search.</param>
        /// <param name="caseSensitive">Boolean value. If true, specifies a case-sensitive search.</param>
        /// <param name="backwards">Boolean. If true, specifies a backward search.</param>
        /// <param name="wrapAround">Boolean. If true, specifies a wrap around search.</param>
        /// <param name="wholeWord">Boolean. If true, specifies a whole word search. </param>
        /// <param name="searchInFrames">Boolean. If true, specifies a search in frames.</param>
        /// <param name="showDialog">Boolean. If true, specifies a show Dialog.</param>
        /// <returns>true if the string is found; otherwise, false.</returns>
        public virtual extern bool Find(string str, bool caseSensitive, bool backwards, bool wrapAround, bool wholeWord, bool searchInFrames, bool showDialog);

        /// <summary>
        /// Makes a request to bring the window to the front. It may fail due to user settings and the window isn't guaranteed to be frontmost before this method returns.
        /// </summary>
        public virtual extern void Focus();

        /// <summary>
        /// Moves the window one document forward in the history.
        /// </summary>
        public virtual extern void Forward();

        /// <summary>
        /// The Window.getComputedStyle() method gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain
        /// </summary>
        /// <param name="el">The Element for which to get the computed style.</param>
        /// <returns>The returned style is a CSSStyleDeclaration object.</returns>
        public virtual extern CSSStyleDeclaration GetComputedStyle(HTMLElement el);

        /// <summary>
        /// The Window.getComputedStyle() method gives the values of all the CSS properties of an element after applying the active stylesheets and resolving any basic computation those values may contain
        /// </summary>
        /// <param name="el">The Element for which to get the computed style.</param>
        /// <param name="pseudoElt">A string specifying the pseudo-element to match. Must be omitted (or null) for regular elements.</param>
        /// <returns>The returned style is a CSSStyleDeclaration object.</returns>
        public virtual extern CSSStyleDeclaration GetComputedStyle(HTMLElement el, string pseudoElt);

        /// <summary>
        /// getDefaultComputedStyle() gives the default computed values of all the CSS properties of an element, ignoring author styling.  That is, only user-agent and user styles are taken into account.
        /// </summary>
        /// <param name="el">The Element for which to get the computed style.</param>
        /// <returns>The returned style is a CSSStyleDeclaration object.</returns>
        public virtual extern CSSStyleDeclaration GetDefaultComputedStyle(HTMLElement el);

        /// <summary>
        /// getDefaultComputedStyle() gives the default computed values of all the CSS properties of an element, ignoring author styling.  That is, only user-agent and user styles are taken into account.
        /// </summary>
        /// <param name="el">The Element for which to get the computed style.</param>
        /// <param name="pseudoElt">A string specifying the pseudo-element to match. Must be null (or not specified) for regular elements.</param>
        /// <returns>The returned style is a CSSStyleDeclaration object.</returns>
        public virtual extern CSSStyleDeclaration GetDefaultComputedStyle(HTMLElement el, string pseudoElt);

        /// <summary>
        /// Returns a selection object representing the range of text selected by the user.
        /// </summary>
        /// <returns>selection is a Selection object. When cast to string, either by adding empty quotes "" or using .toString, this object is the text selected.</returns>
        public virtual extern Selection GetSelection();

        /// <summary>
        /// Returns the window to the home page.
        /// </summary>
        public virtual extern void Home();

        /// <summary>
        /// Returns a new MediaQueryList object representing the parsed results of the specified media query string.
        /// </summary>
        /// <param name="mediaQueryString">string representing the media query for which to return a new MediaQueryList object.</param>
        /// <returns></returns>
        public virtual extern MediaQueryList MatchMedia(string mediaQueryString);

        /// <summary>
        /// Moves the current window by a specified amount.
        /// </summary>
        /// <param name="deltaX">the amount of pixels to move the window horizontally.</param>
        /// <param name="deltaY">the amount of pixels to move the window vertically.</param>
        public virtual extern void MoveBy(int deltaX, int deltaY);

        /// <summary>
        /// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.
        /// </summary>
        /// <param name="callback">A parameter specifying a function to call when it's time to update your animation for the next repaint. The callback has one single argument, a DOMHighResTimeStamp, which indicates the current time for when requestAnimationFrame starts to fire callbacks.</param>
        /// <returns>requestID is a long integer value that uniquely identifies the entry in the callback list. This is a non-zero value, but you may not make any other assumptions about its value. You can pass this value to window.cancelAnimationFrame() to cancel the refresh callback request.</returns>
        public virtual extern int RequestAnimationFrame(Delegate callback);

        /// <summary>
        /// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint. The method takes as an argument a callback to be invoked before the repaint.
        /// </summary>
        /// <param name="callback">A parameter specifying a function to call when it's time to update your animation for the next repaint. The callback has one single argument, a DOMHighResTimeStamp, which indicates the current time for when requestAnimationFrame starts to fire callbacks.</param>
        /// <returns>requestID is a long integer value that uniquely identifies the entry in the callback list. This is a non-zero value, but you may not make any other assumptions about its value. You can pass this value to window.cancelAnimationFrame() to cancel the refresh callback request.</returns>
        public virtual extern int RequestAnimationFrame(Action<double> callback);

        /// <summary>
        /// The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.
        /// </summary>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance Open();

        /// <summary>
        /// The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance Open(string url);

        /// <summary>
        /// The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <param name="name">A string name for the new window. The name can be used as the target of links and forms using the target attribute of an &lt;a&gt; or &lt;form&gt; element. The name should not contain any blank space. Note that strWindowName does not specify the title of the new window.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance Open(string url, string name);

        /// <summary>
        /// The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <param name="name">A string name for the new window. The name can be used as the target of links and forms using the target attribute of an &lt;a&gt; or &lt;form&gt; element. The name should not contain any blank space. Note that strWindowName does not specify the title of the new window.</param>
        /// <param name="features">Optional parameter listing the features (size, position, scrollbars, etc.) of the new window. The string must not contain any blank space, each feature name and value must be separated by a comma.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance Open(string url, string name, string features);

        /// <summary>
        /// window.openDialog is an extension to window.open. It behaves the same, except that it can optionally take one or more parameters past windowFeatures, and windowFeatures itself is treated a little differently.
        /// </summary>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance OpenDialog();

        /// <summary>
        /// window.openDialog is an extension to window.open. It behaves the same, except that it can optionally take one or more parameters past windowFeatures, and windowFeatures itself is treated a little differently.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance OpenDialog(string url);

        /// <summary>
        /// window.openDialog is an extension to window.open. It behaves the same, except that it can optionally take one or more parameters past windowFeatures, and windowFeatures itself is treated a little differently.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <param name="name">A string name for the new window. The name can be used as the target of links and forms using the target attribute of an &lt;a&gt; or &lt;form&gt; element. The name should not contain any blank space. Note that strWindowName does not specify the title of the new window.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance OpenDialog(string url, string name);

        /// <summary>
        /// window.openDialog is an extension to window.open. It behaves the same, except that it can optionally take one or more parameters past windowFeatures, and windowFeatures itself is treated a little differently.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <param name="name">A string name for the new window. The name can be used as the target of links and forms using the target attribute of an &lt;a&gt; or &lt;form&gt; element. The name should not contain any blank space. Note that strWindowName does not specify the title of the new window.</param>
        /// <param name="features">Optional parameter listing the features (size, position, scrollbars, etc.) of the new window. The string must not contain any blank space, each feature name and value must be separated by a comma.</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance OpenDialog(string url, string name, string features);

        /// <summary>
        /// window.openDialog is an extension to window.open. It behaves the same, except that it can optionally take one or more parameters past windowFeatures, and windowFeatures itself is treated a little differently.
        /// </summary>
        /// <param name="url">The URL to be loaded in the newly opened window. strUrl can be an HTML document on the web, image file or any resource supported by the browser.</param>
        /// <param name="name">A string name for the new window. The name can be used as the target of links and forms using the target attribute of an &lt;a&gt; or &lt;form&gt; element. The name should not contain any blank space. Note that strWindowName does not specify the title of the new window.</param>
        /// <param name="features">Optional parameter listing the features (size, position, scrollbars, etc.) of the new window. The string must not contain any blank space, each feature name and value must be separated by a comma.</param>
        /// <param name="args">The arguments to be passed to the new window (optional).</param>
        /// <returns>A reference to the newly created window. If the call failed, it will be null. The reference can be used to access properties and methods of the new window provided it complies with Same origin policy security requirements.</returns>
        public virtual extern WindowInstance OpenDialog(string url, string name, string features, params object[] args);

        /// <summary>
        /// The window.postMessage method safely enables cross-origin communication.
        /// </summary>
        /// <param name="message">Data to be sent to the other window.</param>
        /// <param name="targetOrigin">Specifies what the origin of otherWindow must be for the event to be dispatched, either as the literal string "*" (indicating no preference) or as a URI.</param>
        public virtual extern void PostMessage(object message, string targetOrigin);

        /// <summary>
        /// The window.postMessage method safely enables cross-origin communication.
        /// </summary>
        /// <param name="message">Data to be sent to the other window.</param>
        /// <param name="targetOrigin">Specifies what the origin of otherWindow must be for the event to be dispatched, either as the literal string "*" (indicating no preference) or as a URI.</param>
        /// <param name="transfer">Is a sequence of Transferable objects that are transferred with the message.</param>
        public virtual extern void PostMessage(object message, string targetOrigin, object[] transfer);

        /// <summary>
        /// Opens the Print Dialog to print the current document.
        /// </summary>
        public virtual extern void Print();

        /// <summary>
        /// The Window.prompt() displays a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <returns>string containing the text entered by the user, or the value null.</returns>
        public virtual extern string Prompt();

        /// <summary>
        /// The Window.prompt() displays a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <param name="message">string of text to display to the user. This parameter is optional and can be omitted if there is nothing to show in the prompt window.</param>
        /// <returns>string containing the text entered by the user, or the value null.</returns>
        public virtual extern string Prompt(string message);

        /// <summary>
        /// The Window.prompt() displays a dialog with an optional message prompting the user to input some text.
        /// </summary>
        /// <param name="message">string of text to display to the user. This parameter is optional and can be omitted if there is nothing to show in the prompt window.</param>
        /// <param name="value">string containing the default value displayed in the text input field. It is an optional parameter. Note that in Internet Explorer 7 and 8, if you do not provide this parameter, the string "undefined" is the default value.</param>
        /// <returns>string containing the text entered by the user, or the value null.</returns>
        public virtual extern string Prompt(string message, string value);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(EventType type, IEventListener listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(EventType type, IEventListener listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(string type, IEventListener listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(string type, IEventListener listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(EventType type, Delegate listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(EventType type, Action listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(EventType type, Delegate listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(EventType type, Action listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(string type, Delegate listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(string type, Action listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(string type, Delegate listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(string type, Action listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(EventType type, Action<Event> listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(EventType type, Action<Event> listener, bool capture);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        public virtual extern void RemoveEventListener(string type, Action<Event> listener);

        /// <summary>
        /// Removes the event listener previously registered with EventTarget.addEventListener.
        /// </summary>
        /// <param name="type">A string representing the event type being removed.</param>
        /// <param name="listener">The listener parameter indicates the EventListener function to be removed.</param>
        /// <param name="capture">Specifies whether the EventListener being removed was registered as a capturing listener or not. If not specified, useCapture defaults to false.</param>
        public virtual extern void RemoveEventListener(string type, Action<Event> listener, bool capture);

        /// <summary>
        /// Resizes the current window by a certain amount.
        /// </summary>
        /// <param name="xDelta">the number of pixels to grow the window horizontally.</param>
        /// <param name="yDelta">the number of pixels to grow the window vertically.</param>
        public virtual extern void ResizeBy(int xDelta, int yDelta);

        /// <summary>
        /// Dynamically resizes window.
        /// </summary>
        /// <param name="width">integer representing the new outerWidth in pixels (including scroll bars, title bars, etc).</param>
        /// <param name="height">integer value representing the new outerHeight in pixels (including scroll bars, title bars, etc).</param>
        public virtual extern void ResizeTo(int width, int height);

        /// <summary>
        /// Scrolls the window to a particular place in the document.
        /// </summary>
        /// <param name="xcoord">the pixel along the horizontal axis of the document that you want displayed in the upper left.</param>
        /// <param name="ycoord">the pixel along the vertical axis of the document that you want displayed in the upper left.</param>
        public virtual extern void Scroll(int xcoord, int ycoord);

        /// <summary>
        /// Scrolls the document in the window by the given amount.
        /// </summary>
        /// <param name="x">X is the offset in pixels to scroll horizontally.</param>
        /// <param name="y">Y is the offset in pixels to scroll vertically.</param>
        public virtual extern void ScrollBy(int x, int y);

        /// <summary>
        /// Scrolls the document by the given number of lines.
        /// </summary>
        /// <param name="lines">the number of lines to scroll the document by.</param>
        public virtual extern void ScrollByLines(int lines);

        /// <summary>
        /// Scrolls the current document by the specified number of pages.
        /// </summary>
        /// <param name="pages">the number of pages to scroll.</param>
        public virtual extern void ScrollByPages(int pages);

        /// <summary>
        /// Scrolls to a particular set of coordinates in the document.
        /// </summary>
        /// <param name="x">the pixel along the horizontal axis of the document that you want displayed in the upper left.</param>
        /// <param name="y">the pixel along the vertical axis of the document that you want displayed in the upper left.</param>
        public virtual extern void ScrollTo(int x, int y);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Delegate handler);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Action handler);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Delegate handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Action handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <param name="arguments"></param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Action handler, int delay, params object[] arguments);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(string handler);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(string handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <param name="arguments"></param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(string handler, int delay, params object[] arguments);

        /// <summary>
        /// Calls a function or executes a code snippet repeatedly, with a fixed time delay between each call to that function.
        /// </summary>
        /// <param name="handler">the function you want to be called repeatedly.</param>
        /// <param name="delay">the number of milliseconds (thousandths of a second) that the setInterval() function should wait before each call to func.</param>
        /// <param name="arguments"></param>
        /// <returns>a unique interval ID you can pass to clearInterval().</returns>
        public virtual extern int SetInterval(Delegate handler, int delay, params object[] arguments);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Delegate handler);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Action handler);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Delegate handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Action handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <param name="arguments"></param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Action handler, int delay, params object[] arguments);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(string handler);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(string handler, int delay);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <param name="arguments"></param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(string handler, int delay, params object[] arguments);

        /// <summary>
        /// Calls a function or executes a code snippet after a specified delay.
        /// </summary>
        /// <param name="handler"> the function you want to execute after delay milliseconds.</param>
        /// <param name="delay"> the number of milliseconds (thousandths of a second) that the function call should be delayed by. The actual delay may be longer;</param>
        /// <param name="arguments"></param>
        /// <returns> the numerical ID of the timeout, which can be used later with window.clearTimeout().</returns>
        public virtual extern int SetTimeout(Delegate handler, int delay, params object[] arguments);

        /// <summary>
        /// The Window.showModalDialog() creates and displays a modal dialog box containing a specified HTML document.
        /// </summary>
        /// <param name="uri"> the URI of the document to display in the dialog box.</param>
        /// <returns> a variant, indicating the returnValue property as set by the window of the document specified by uri.</returns>
        public virtual extern object ShowModalDialog(string uri);

        /// <summary>
        /// The Window.showModalDialog() creates and displays a modal dialog box containing a specified HTML document.
        /// </summary>
        /// <param name="uri"> the URI of the document to display in the dialog box.</param>
        /// <param name="arguments">an optional variant that contains values that should be passed to the dialog box; these are made available in the window object's window.dialogArguments property.</param>
        /// <returns> a variant, indicating the returnValue property as set by the window of the document specified by uri.</returns>
        public virtual extern object ShowModalDialog(string uri, object arguments);

        /// <summary>
        /// The Window.showModalDialog() creates and displays a modal dialog box containing a specified HTML document.
        /// </summary>
        /// <param name="uri"> the URI of the document to display in the dialog box.</param>
        /// <param name="arguments">an optional variant that contains values that should be passed to the dialog box; these are made available in the window object's window.dialogArguments property.</param>
        /// <param name="options">an optional string that specifies window ornamentation for the dialog box, using one or more semicolon delimited values:</param>
        /// <returns> a variant, indicating the returnValue property as set by the window of the document specified by uri.</returns>
        public virtual extern object ShowModalDialog(string uri, object arguments, string options);

        /// <summary>
        /// Sizes the window according to its content.
        /// </summary>
        public virtual extern void SizeToContent();

        /// <summary>
        /// This method stops window loading.
        /// </summary>
        public virtual extern void Stop();

        /// <summary>
        /// Updates the state of commands of the current chrome window (UI).
        /// </summary>
        /// <param name="commandName">a particular string which describes what kind of update event this is (e.g. whether we are in bold right now).</param>
        public virtual extern void UpdateCommands(string commandName);

        /// <summary>
        /// An event handler property for abort events on the window
        /// </summary>
        [Name("onabort")]
        public Action<Event> OnAbort;

        /// <summary>
        /// An event handler property for before-unload events on the window
        /// </summary>
        [Name("onbeforeunload")]
        public Action<Event> OnBeforeUnload;

        /// <summary>
        /// An event handler property for blur events on the window
        /// </summary>
        [Name("onblur")]
        public Action<Event> OnBlur;

        /// <summary>
        /// An event handler property for change events on the window
        /// </summary>
        [Name("onchange")]
        public Action<Event> OnChange;

        /// <summary>
        /// An event handler property for click events on the window
        /// </summary>
        [Name("onclick")]
        public Action<MouseEvent> OnClick;

        /// <summary>
        /// An event handler property for handling the window close event
        /// </summary>
        [Name("onclose")]
        public Action<Event> OnClose;

        /// <summary>
        /// An event handler property for right-click events on the window
        /// </summary>
        [Name("oncontextmenu")]
        public Action<Event> OnContextMenu;

        /// <summary>
        /// An event handler property for any ambient light levels changes
        /// </summary>
        [Name("ondevicelight")]
        public Action<Event> OnDeviceLight;

        /// <summary>
        /// FIXME: NeedsContents
        /// </summary>
        [Name("ondevicemotion")]
        public Action<Event> OnDeviceMotion;

        /// <summary>
        /// An event handler property for any device orientation changes
        /// </summary>
        [Name("ondeviceorientation")]
        public Action<Event> OnDeviceOrientation;

        /// <summary>
        /// An event handler property for device proximity event
        /// </summary>
        [Name("ondeviceproximity")]
        public Action<Event> OnDeviceProximity;

        /// <summary>
        /// An event handler property for drag and drop events on the window
        /// </summary>
        [Name("ondragdrop")]
        public Action<Event> OnDragDrop;

        /// <summary>
        /// An event handler property for errors raised on the window
        /// </summary>
        [Name("onerror")]
        public ErrorEventHandler OnError;

        /// <summary>
        /// An event handler property for focus events on the window
        /// </summary>
        [Name("onfocus")]
        public Action<Event> OnFocus;

        /// <summary>
        /// An event handler property for hash change events on the window; called when the part of the URL after the hash mark ("#") changes
        /// </summary>
        [Name("onhashchange")]
        public Action<Event> OnHashChange;

        /// <summary>
        /// An event handler property for keydown events on the window
        /// </summary>
        [Name("onkeydown")]
        public Action<KeyboardEvent> OnKeyDown;

        /// <summary>
        /// An event handler property for keypress events on the window
        /// </summary>
        [Name("onkeypress")]
        public Action<KeyboardEvent> OnKeyPress;

        /// <summary>
        /// An event handler property for keyup events on the window
        /// </summary>
        [Name("onkeyup")]
        public Action<KeyboardEvent> OnKeyUp;

        /// <summary>
        /// An event handler property for window loading
        /// </summary>
        [Name("onload")]
        public Action<Event> OnLoad;

        /// <summary>
        /// An event handler property for mousedown events on the window
        /// </summary>
        [Name("onmousedown")]
        public Action<MouseEvent> OnMouseDown;

        /// <summary>
        /// An event handler property for mousemove events on the window
        /// </summary>
        [Name("onmousemove")]
        public Action<MouseEvent> OnMouseMove;

        /// <summary>
        /// An event handler property for mouseout events on the window
        /// </summary>
        [Name("onmouseout")]
        public Action<MouseEvent> OnMouseOut;

        /// <summary>
        /// An event handler property for mouseover events on the window
        /// </summary>
        [Name("onmouseover")]
        public Action<MouseEvent> OnMouseOver;

        /// <summary>
        /// An event handler property for mouseup events on the window
        /// </summary>
        [Name("onmouseup")]
        public Action<MouseEvent> OnMouseUp;

        /// <summary>
        /// An event handler property for paint events on the window
        /// </summary>
        [Name("onpaint")]
        public Action<Event> OnPaint;

        /// <summary>
        /// An event handler property for popstate events, which are fired when navigating to a session history entry representing a state object
        /// </summary>
        [Name("onpopstate")]
        public Action<Event> OnPopState;

        /// <summary>
        /// An event handler property for reset events on the window
        /// </summary>
        [Name("onreset")]
        public Action<Event> OnReset;

        /// <summary>
        /// An event handler property for window resizing
        /// </summary>
        [Name("onresize")]
        public Action<Event> OnResize;

        /// <summary>
        /// An event handler property for window scrolling
        /// </summary>
        [Name("onscroll")]
        public Action<Event> OnScroll;

        /// <summary>
        /// An event handler property for window selection
        /// </summary>
        [Name("onselect")]
        public Action<Event> OnSelect;

        /// <summary>
        /// An event handler property for submits on window forms
        /// </summary>
        [Name("onsubmit")]
        public Action<Event> OnSubmit;

        /// <summary>
        /// An event handler property for unload events on the window
        /// </summary>
        [Name("onunload")]
        public Action<Event> OnUnload;

        /// <summary>
        /// An event handler property for user proximity events
        /// </summary>
        [Name("onuserproximity")]
        public Action<Event> OnUserProximity;

        /// <summary>
        /// An event handler property for pageshow events on the window
        /// </summary>
        [Name("onpageshow")]
        public Action<Event> OnPageShow;

        /// <summary>
        /// An event handler property for pagehide events on the window
        /// </summary>
        [Name("onpagehide")]
        public Action<Event> OnPageHide;

        #endregion Methods
    }
}