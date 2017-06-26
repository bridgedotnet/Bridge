// Performance WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Performance

namespace Bridge.Html5
{
    [External]
    [Name("Performance")]
    public class Performance
    {
        extern Performance();

        /// <summary>
        /// Returns a DOMHighResTimeStamp representing the amount of miliseconds elapsed since the start of the navigation, as give by PerformanceTiming.navigationStart to the call of the method.
        /// </summary>
        /// <returns></returns>
        public virtual extern double Now();

        /// <summary>
        /// Is a PerformanceTiming object containing latency-related performance information.
        /// </summary>
        public readonly PerformanceTiming Timing;

        /// <summary>
        /// Is a PerformanceNavigation object representing the type of navigation that occurs in the given browsing context, like the amount of redirections needed to fetch the resource.
        /// </summary>
        public readonly PerformanceNavigation Navigation;
    }

    /// <summary>
    /// The PerformanceTiming interface represents timing-related performance information for the given page.
    /// An object of this type can be obtained by calling the Performance.timing read-only attribute.
    /// </summary>
    [External]
    [Name("PerformanceTiming")]
    public class PerformanceTiming
    {
        extern PerformanceTiming();

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, right after the prompt for unload terminates on the previous document in the same browsing context. If there is no previous document, this value will be the same as PerformanceTiming.fetchStart.
        /// </summary>
        public readonly int NavigationStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, the unload event has been thrown. If there is no previous document, or if the previous document, or one of the needed redirects, is not of the same origin, the value returned is 0.
        /// </summary>
        public readonly int UnloadEventStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, the unload event handler finishes. If there is no previous document, or if the previous document, or one of the needed redirects, is not of the same origin, the value returned is 0.
        /// </summary>
        public readonly int UnloadEventEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, the first HTTP redirect starts. If there is no redirect, or if one of the redirect is not of the same origin, the value returned is 0.
        /// </summary>
        public readonly int RedirectStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, the last HTTP redirect is completed, that is when the last byte of the HTTP response has been received. If there is no redirect, or if one of the redirect is not of the same origin, the value returned is 0.
        /// </summary>
        public readonly int RedirectEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, the browser is ready to fetch the document using an HTTP request. This moment is before the check to any application cache.
        /// </summary>
        public readonly int FetchStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, where the domain lookup starts. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as PerformanceTiming.fetchStart.
        /// </summary>
        public readonly int DomainLookupStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, where the domain lookup is finished. If a persistent connection is used, or the information is stored in a cache or a local resource, the value will be the same as PerformanceTiming.fetchStart.
        /// </summary>
        public readonly int DomainLookupEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, where the request to open a connection is sent to the network. If the transport layer reports an error and the connection establishment is started again, the last connection establisment start time is given. If a persistent connection is used, the value will be the same as PerformanceTiming.fetchStart.
        /// </summary>
        public readonly int ConnectStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, where the connection is opened network. If the transport layer reports an error and the connection establishment is started again, the last connection establisment end time is given. If a persistent connection is used, the value will be the same as PerformanceTiming.fetchStart. A connection is considered as opened when all secure connection handshake, or SOCKS authentication, is terminated.
        /// </summary>
        public readonly int ConnectEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, where the secure connection handshake starts. If no such connection is requested, it returns 0.
        /// </summary>
        public readonly int SecureConnectionStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the browser sent the request to obtain the actual document, from the server or from a cache. If the transport layer fails after the start of the request and the connection is reopened, this property will be set to the time corresponding to the new request.
        /// </summary>
        public readonly int RequestStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the browser received the first byte of the response, from the server from a cache, of from a local resource.
        /// </summary>
        public readonly int ResponseStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the browser received the last byte of the response, or when the connection is closed if this happened first, from the server from a cache, of from a local resource.
        /// </summary>
        public readonly int ResponseEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the parser started its work, that is when its Document.readyState changes to 'loading' and the corresponding readystatechange event is thrown.
        /// </summary>
        public readonly int DomLoading;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the parser finished its work on the main document, that is when its Document.readyState changes to 'interactive' and the corresponding readystatechange event is thrown.
        /// </summary>
        public readonly int DomInteractive;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, right before the parser sent the DOMContentLoaded event, that is right after all the scripts that need to be executed right after parsing has been executed.
        /// </summary>
        public readonly int DomContentLoadedEventStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, right after all the scripts that need to be executed as soon as possible, in order or not, has been executed.
        /// </summary>
        public readonly int DomContentLoadedEventEnd;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the parser finished its work on the main document, that is when its Document.readyState changes to 'complete' and the corresponding readystatechange event is thrown.
        /// </summary>
        public readonly int DomComplete;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the load event was sent for the current document. If this event has not yet been sent, it returns 0.
        /// </summary>
        public readonly int LoadEventStart;

        /// <summary>
        /// Is an int representing the moment, in miliseconds since the UNIX epoch, when the load event handler terminated, that is when the load event is completed. If this event has not yet been sent, or is not yet completed, it returns 0.
        /// </summary>
        public readonly int LoadEventEnd;
    }

    /// <summary>
    /// The PerformanceNavigation interface represents information about how the navigation to the current document was done.
    /// An object of this type can be obtained by calling the Performance.navigation read-only attribute.
    /// </summary>
    [External]
    [Name("PerformanceNavigation")]
    public class PerformanceNavigation
    {
        extern PerformanceNavigation();

        /// <summary>
        /// Is an  short containing a constant describing how the navigation to this page was done.
        /// </summary>
        public readonly PerformanceNavigationType Type;

        /// <summary>
        /// Is an  short representing the number of REDIRECTs done before reaching the page.
        /// </summary>
        public readonly int RedirectCount;
    }

    /// <summary>
    /// A constant describing how the navigation to this page was done.
    /// </summary>
    [External]
    public enum PerformanceNavigationType
    {
        /// <summary>
        /// The page was accessed by following a link, a bookmark, a form submission, a script, or typing the URL in the address bar.
        /// </summary>
        Navigate = 0,

        /// <summary>
        /// The page was accessed by clicking the Reload button or via the Location.reload() method.
        /// </summary>
        Reload = 1,

        /// <summary>
        /// The page was accessed by navigating into the history.
        /// </summary>
        BackForward = 2,

        /// <summary>
        /// Any other way.
        /// </summary>
        Reserved = 255
    }
}