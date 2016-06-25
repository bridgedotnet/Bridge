namespace Bridge.Html5
{
    /// <summary>
    /// These events are defined in official Web specifications, and should be common across browsers. Each event is listed along with the interface representing the object sent to recipients of the event (so you can find information about what data is provided with each event) as well as a link to the specification or specifications that define the event.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum EventType
    {
        /// <summary>
        /// UIEvent - DOM L3
        /// The loading of a resource has been aborted.
        /// </summary>
        Abort,

        /// <summary>
        /// Event - HTML5
        /// The associated document has started printing or the print preview has been closed.
        /// </summary>
        AfterPrint,

        /// <summary>
        /// AnimationEvent - CSS Animations
        /// A CSS animation has completed.
        /// </summary>
        AnimationEnd,

        /// <summary>
        /// AnimationEvent - CSS Animations
        /// A CSS animation is repeated.
        /// </summary>
        AnimationIteration,

        /// <summary>
        /// AnimationEvent - CSS Animations
        /// A CSS animation has started.
        /// </summary>
        AnimationStart,

        /// <summary>
        /// Event - HTML5
        /// The associated document is about to be printed or previewed for printing.
        /// </summary>
        BeforePrint,

        /// <summary>
        /// BeforeUnloadEvent - HTML5
        /// The beforeunload event is fired when the window, the document and its resources are about to be unloaded.
        /// </summary>
        BeforeUnload,

        /// <summary>
        /// IndexedDB
        /// An open connection to a database is blocking a versionchange transaction on the same database.
        /// </summary>
        Blocked,

        /// <summary>
        /// FocusEvent - DOM L3
        /// An element has lost focus (does not bubble).
        /// </summary>
        Blur,

        /// <summary>
        /// Event - Offline
        /// The resources listed in the manifest have been downloaded, and the application is now cached.
        /// </summary>
        Cached,

        /// <summary>
        /// Event - HTML5
        /// The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
        /// </summary>
        CanPlay,

        /// <summary>
        /// Event - HTML5
        /// The user agent can play the media, and estimates that enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
        /// </summary>
        CanPlayThrough,

        /// <summary>
        /// Event - DOM L2, HTML5
        /// An element loses focus and its value changed since gaining focus.
        /// </summary>
        Change,

        /// <summary>
        /// Event - Offline
        /// The user agent is checking for an update, or attempting to download the cache manifest for the first time.
        /// </summary>
        Checking,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device button has been pressed and released on an element.
        /// </summary>
        Click,

        /// <summary>
        /// Event - WebSocket
        /// A WebSocket connection has been closed.
        /// </summary>
        Close,

        /// <summary>
        /// IndexedDB
        /// The complete handler is executed when a transaction successfully completed.
        /// </summary>
        Complete,

        /// <summary>
        /// CompositionEven - DOM L3
        /// The composition of a passage of text has been completed or canceled.
        /// </summary>
        CompositionEnd,

        /// <summary>
        /// CompositionEven - DOM L3
        /// The composition of a passage of text is prepared (similar to keydown for a keyboard input, but works with other inputs such as speech recognition).
        /// </summary>
        CompositionStart,

        /// <summary>
        /// CompositionEven - DOM L3
        /// A character is added to a passage of text being composed.
        /// </summary>
        CompositionUpdate,

        /// <summary>
        /// MouseEvent - HTML5
        /// The right button of the mouse is clicked (before the context menu is displayed).
        /// </summary>
        ContextMenu,

        /// <summary>
        /// ClipboardEvent - Clipboard
        /// The text selection has been added to the clipboard.
        /// </summary>
        Copy,

        /// <summary>
        /// ClipboardEvent - Clipboard
        /// The text selection has been removed from the document and added to the clipboard.
        /// </summary>
        Cut,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device button is clicked twice on an element.
        /// </summary>
        DblClick,

        /// <summary>
        /// DeviceLightEvent - Ambient Light Events
        /// Fresh data is available from a light sensor.
        /// </summary>
        DeviceLight,

        /// <summary>
        /// DeviceMotionEvent -	Device Orientation Events
        /// Fresh data is available from a motion sensor.
        /// </summary>
        DeviceMotion,

        /// <summary>
        /// DeviceOrientationEvent - Device Orientation Events
        /// Fresh data is available from an orientation sensor.
        /// </summary>
        DeviceOrientation,

        /// <summary>
        /// DeviceProximityEvent - Proximity Events
        /// Fresh data is available from a proximity sensor (indicates an approximated distance between the device and a nearby object).
        /// </summary>
        DeviceProximity,

        /// <summary>
        /// Event - Battery status
        /// The dischargingTime attribute has been updated.
        /// </summary>
        DischargingTimeChange,

        /// <summary>
        /// Event - HTML5
        /// The document has finished loading (but not its dependent resources).
        /// </summary>
        [Name(false)]
        DOMContentLoaded,

        /// <summary>
        /// Event - Offline
        /// The user agent has found an update and is fetching it, or is downloading the resources listed by the cache manifest for the first time.
        /// </summary>
        Downloading,

        /// <summary>
        /// DragEvent - HTML5
        /// An element or text selection is being dragged (every 350ms).
        /// </summary>
        Drag,

        /// <summary>
        /// DragEvent - HTML5
        /// A drag operation is being ended (by releasing a mouse button or hitting the escape key).
        /// </summary>
        DragEnd,

        /// <summary>
        /// DragEvent - HTML5
        /// A dragged element or text selection enters a valid drop target.
        /// </summary>
        DragEnter,

        /// <summary>
        /// DragEvent - HTML5
        /// A dragged element or text selection leaves a valid drop target
        /// </summary>
        DragLeave,

        /// <summary>
        /// DragEvent - HTML5
        /// An element or text selection is being dragged over a valid drop target (every 350ms).
        /// </summary>
        DragOver,

        /// <summary>
        /// DragEvent - HTML5
        /// The user starts dragging an element or text selection.
        /// </summary>
        DragStart,

        /// <summary>
        /// DragEvent - HTML5
        /// An element is dropped on a valid drop target.
        /// </summary>
        Drop,

        /// <summary>
        /// Event - HTML5 media
        /// The duration attribute has been updated.
        /// </summary>
        DurationChange,

        /// <summary>
        /// Event - HTML5 media
        /// The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.
        /// </summary>
        Emptied,

        /// <summary>
        /// Event - HTML5 media
        /// Playback has stopped because the end of the media was reached.
        /// </summary>
        Ended,

        /// <summary>
        /// TimeEvent - SVG
        /// A SMIL animation element ends.
        /// </summary>
        [Name("endEvent")]
        EndEvent,

        /// <summary>
        /// UIEvent - DOM L3
        /// A resource failed to load.
        ///
        /// ProgressEvent - Progress and XMLHttpRequest
        /// Progression has failed.
        ///
        /// Event - Offline
        /// An error occurred while downloading the cache manifest or updating the content of the application.
        ///
        /// Event - WebSocket
        /// A WebSocket connection has been closed with prejudice (some data couldn't be sent for example).
        ///
        /// Event - Server Sent Events
        /// An event source connection has been failed.
        ///
        /// Event - IndexedDB
        /// A request caused an error and failed.
        /// </summary>
        Error,

        /// <summary>
        /// FocusEvent - DOM L3
        /// An element has received focus (does not bubble).
        /// </summary>
        Focus,

        /// <summary>
        /// FocusEvent - DOM L3
        /// An element is about to receive focus (bubbles).
        /// </summary>
        FocusIn,

        /// <summary>
        /// FocusEvent - DOM L3
        /// An element is about to lose focus (bubbles).
        /// </summary>
        FocusOut,

        /// <summary>
        /// Event - Full Screen
        /// An element was turned to fullscreen mode or back to normal mode.
        /// </summary>
        FullScreenChange,

        /// <summary>
        /// Event - Full Screen
        /// It was impossible to switch to fullscreen mode for technical reasons or because the permission was denied.
        /// </summary>
        FullScreenError,

        /// <summary>
        /// GamepadEvent - Gamepad
        /// A gamepad has been connected.
        /// </summary>
        GamepadConnected,

        /// <summary>
        /// GamepadEvent - Gamepad
        /// A gamepad has been disconnected.
        /// </summary>
        GamepadDisconnected,

        /// <summary>
        /// HashChangeEvent - HTML5
        /// The fragment identifier of the URL has changed (the part of the URL after the #).
        /// </summary>
        HashChange,

        /// <summary>
        /// Event - HTML5
        /// The value of an element changes or the content of an element with the attribute contenteditable is modified.
        /// </summary>
        Input,

        /// <summary>
        /// Event - HTML5
        /// A submittable element has been checked and doesn't satisfy its constraints.
        /// </summary>
        Invalid,

        /// <summary>
        /// KeyboardEvent - DOM L3
        /// A key is pressed down.
        /// </summary>
        KeyDown,

        /// <summary>
        /// KeyboardEvent - DOM L3
        /// A key is pressed down and that key normally produces a character value (use input instead).
        /// </summary>
        KeyPress,

        /// <summary>
        /// KeyboardEvent - DOM L3
        /// A key is released.
        /// </summary>
        KeyUp,

        /// <summary>
        /// Event - Battery status
        /// The level attribute has been updated.
        /// </summary>
        LevelChange,

        /// <summary>
        /// UIEvent - DOM L3
        /// A resource and its dependent resources have finished loading.
        ///
        /// ProgressEvent - Progress and XMLHttpRequest
        /// Progression has been successful.
        /// </summary>
        Load,

        /// <summary>
        /// Event - HTML5 media
        /// The first frame of the media has finished loading.
        /// </summary>
        LoadedData,

        /// <summary>
        /// Event - HTML5 media
        /// The metadata has been loaded.
        /// </summary>
        LoadedMetaData,

        /// <summary>
        /// ProgressEvent - Progress and XMLHttpRequest
        /// Progress has stopped (after "error", "abort" or "load" have been dispatched).
        /// </summary>
        LoadEnd,

        /// <summary>
        /// ProgressEvent - Progress and XMLHttpRequest
        /// Progress has begun.
        /// </summary>
        LoadStart,

        /// <summary>
        /// MessageEvent - WebSocket
        /// A message is received through a WebSocket.
        ///
        /// MessageEvent - Web Workers
        /// A message is received from a Web Worker.
        ///
        /// MessageEvent - Web Messaging
        /// A message is received from a child (i)frame or a parent window.
        ///
        /// MessageEvent - Server Sent Events
        /// A message is received through an event source.
        /// </summary>
        Message,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device button (usually a mouse) is pressed on an element.
        /// </summary>
        MouseDown,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device is moved onto the element that has the listener attached.
        /// </summary>
        MouseEnter,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device is moved off the element that has the listener attached.
        /// </summary>
        MouseLeave,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device is moved over an element.
        /// </summary>
        MouseMove,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device is moved off the element that has the listener attached or off one of its children.
        /// </summary>
        MouseOut,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device is moved onto the element that has the listener attached or onto one of its children.
        /// </summary>
        MouseOver,

        /// <summary>
        /// MouseEvent - DOM L3
        /// A pointing device button is released over an element.
        /// </summary>
        MouseUp,
        MozFullScreenError,

        /// <summary>
        /// Event - Offline
        /// The manifest hadn't changed.
        /// </summary>
        NoUpdate,

        /// <summary>
        /// Event - Offline
        /// The manifest was found to have become a 404 or 410 page, so the application cache is being deleted.
        /// </summary>
        Obsolete,

        /// <summary>
        /// Event - HTML5 offline
        /// The browser has lost access to the network.
        /// </summary>
        Offline,

        /// <summary>
        /// Event - HTML5 offline
        /// The browser has gained access to the network (but particular websites might be unreachable).
        /// </summary>
        Online,

        /// <summary>
        /// Event - WebSocket
        /// A WebSocket connection has been established.
        ///
        /// Event - Server Sent Events
        /// An event source connection has been established.
        /// </summary>
        Open,

        /// <summary>
        /// Event - Screen Orientation
        /// The orientation of the device (portrait/landscape) has changed
        /// </summary>
        OrientationChange,

        /// <summary>
        /// PageTransitionEvent - HTML5
        /// A session history entry is being traversed from.
        /// </summary>
        PageHide,

        /// <summary>
        /// PageTransitionEvent - HTML5
        /// A session history entry is being traversed to.
        /// </summary>
        PageShow,

        /// <summary>
        /// ClipboardEvent - Clipboard
        /// Data has been transfered from the system clipboard to the document.
        /// </summary>
        Paste,

        /// <summary>
        /// Event - HTML5 media
        /// Playback has been paused.
        /// </summary>
        Pause,

        /// <summary>
        /// Event - Pointer Lock
        /// The pointer was locked or released.
        /// </summary>
        PointerLockChange,

        /// <summary>
        /// Event - Pointer Lock
        /// It was impossible to lock the pointer for technical reasons or because the permission was denied.
        /// </summary>
        PointerLockError,

        /// <summary>
        /// Event - HTML5 media
        /// Playback has begun.
        /// </summary>
        Play,

        /// <summary>
        /// Event - HTML5 media
        /// Playback is ready to start after having been paused or delayed due to lack of data.
        /// </summary>
        Playing,

        /// <summary>
        /// PopStateEvent - HTML5
        /// A session history entry is being navigated to (in certain cases).
        /// </summary>
        PopState,

        /// <summary>
        /// ProgressEvent - Progress and XMLHttpRequest
        /// In progress.
        ///
        /// ProgressEvent - Offline
        /// The user agent is downloading resources listed by the manifest.
        /// </summary>
        Progress,

        /// <summary>
        /// Event - HTML5 media
        /// The playback rate has changed.
        /// </summary>
        RateChange,

        /// <summary>
        /// Event - HTML5 and XMLHttpRequest
        /// The readyState attribute of a document has changed.
        /// </summary>
        ReadyStateChange,

        /// <summary>
        /// TimeEvent - SVG
        /// A SMIL animation element is repeated.
        /// </summary>
        [Name("repeatEvent")]
        RepeatEvent,

        /// <summary>
        /// Event - DOM L2, HTML5
        /// A form is reset.
        /// </summary>
        Reset,

        /// <summary>
        /// UIEvent - DOM L3
        /// The document view has been resized.
        /// </summary>
        Resize,

        /// <summary>
        /// UIEvent - DOM L3
        /// The document view or an element has been scrolled.
        /// </summary>
        Scroll,

        /// <summary>
        /// Event - HTML5 media
        /// A seek operation completed.
        /// </summary>
        Seeked,

        /// <summary>
        /// Event - HTML5 media
        /// A seek operation began.
        /// </summary>
        Seeking,

        /// <summary>
        /// UIEvent - DOM L3
        /// Some text is being selected.
        /// </summary>
        Select,

        /// <summary>
        /// MouseEvent - HTML5
        /// A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute
        /// </summary>
        Show,

        /// <summary>
        /// Event - HTML5 media
        /// The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
        /// </summary>
        Stalled,

        /// <summary>
        /// StorageEvent - Web Storage
        /// A storage area (localStorage or sessionStorage) has changed.
        /// </summary>
        Storage,

        /// <summary>
        /// Event - DOM L2, HTML5
        /// A form is submitted.
        /// </summary>
        Submit,

        /// <summary>
        /// Event - IndexedDB
        /// A request successfully completed.
        /// </summary>
        Success,

        /// <summary>
        /// Event - HTML5 media
        /// Media data loading has been suspended.
        /// </summary>
        Suspend,

        /// <summary>
        /// SVGEvent - SVG
        /// Page loading has been stopped before the SVG was loaded.
        /// </summary>
        [Name("SVGAbort")]
        SVGAbort,

        /// <summary>
        /// SVGEvent - SVG
        /// An error has occurred before the SVG was loaded.
        /// </summary>
        [Name("SVGError")]
        SVGError,

        /// <summary>
        /// SVGEvent - SVG
        /// An SVG document has been loaded and parsed.
        /// </summary>
        [Name("SVGLoad")]
        SVGLoad,

        /// <summary>
        /// SVGEvent - SVG
        /// An SVG document is being resized.
        /// </summary>
        [Name("SVGResize")]
        SVGResize,

        /// <summary>
        /// SVGEvent - SVG
        /// An SVG document is being scrolled.
        /// </summary>
        [Name("SVGScroll")]
        SVGScroll,

        /// <summary>
        /// SVGEvent - SVG
        /// An SVG document has been removed from a window or frame.
        /// </summary>
        [Name("SVGUnload")]
        SVGUnload,

        /// <summary>
        /// SVGZoomEvent - SVG
        /// An SVG document is being zoomed.
        /// </summary>
        [Name("SVGZoom")]
        SVGZoom,

        /// <summary>
        /// ProgressEvent - XMLHttpRequest
        ///
        /// </summary>
        Timeout,

        /// <summary>
        /// Event - HTML5 media
        /// The time indicated by the currentTime attribute has been updated.
        /// </summary>
        TimeUpdate,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point has been disrupted in an implementation-specific manners (too many touch points for example).
        /// </summary>
        TouchCancel,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point is removed from the touch surface.
        /// </summary>
        TouchEnd,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point is moved onto the interactive area of an element.
        /// </summary>
        TouchEnter,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point is moved off the interactive area of an element.
        /// </summary>
        TouchLeave,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point is moved along the touch surface.
        /// </summary>
        TouchMove,

        /// <summary>
        /// TouchEvent - Touch Events
        /// A touch point is placed on the touch surface.
        /// </summary>
        TouchStart,

        /// <summary>
        /// TransitionEvent - CSS Transitions
        /// A CSS transition has completed.
        /// </summary>
        TransitionEnd,

        /// <summary>
        /// UIEvent - DOM L3
        /// The document or a dependent resource is being unloaded.
        /// </summary>
        Unload,

        /// <summary>
        /// Event - Offline
        /// The resources listed in the manifest have been newly redownloaded, and the script can use swapCache() to switch to the new cache.
        /// </summary>
        UpdateReady,

        /// <summary>
        ///  - IndexedDB
        /// An attempt was made to open a database with a version number higher than its current version. A versionchange transaction has been created.
        /// </summary>
        UpgradeNeeded,

        /// <summary>
        /// SensorEvent - Sensor
        /// Fresh data is available from a proximity sensor (indicates whether the nearby object is near the device or not).
        /// </summary>
        UserProximity,

        /// <summary>
        /// Event - IndexedDB
        /// A versionchange transaction completed.
        /// </summary>
        VersionChange,

        /// <summary>
        /// Event - Page visibility
        /// The content of a tab has become visible or has been hidden.
        /// </summary>
        VisibilityChange,

        /// <summary>
        /// Event - HTML5 media
        /// The volume has changed.
        /// </summary>
        VolumeChange,

        /// <summary>
        /// Event - HTML5 media
        /// Playback has stopped because of a temporary lack of data.
        /// </summary>
        Waiting,

        /// <summary>
        /// Triggered when there is an error getting into full screen mode.
        /// </summary>
        WebKitFullScreenError,

        /// <summary>
        /// WheelEvent - DOM L3
        /// A wheel button of a pointing device is rotated in any direction.
        /// </summary>
        Wheel
    }
}
