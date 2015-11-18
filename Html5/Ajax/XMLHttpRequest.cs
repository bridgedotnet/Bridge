using System;

namespace Bridge.Html5
{
    /// <summary>
    /// XMLHttpRequest is a JavaScript object that was designed by Microsoft and adopted by Mozilla, Apple, and Google. It's now being standardized in the W3C. It provides an easy way to retrieve data from a URL without having to do a full page refresh. A Web page can update just a part of the page without disrupting what the user is doing.  XMLHttpRequest is used heavily in AJAX programming.
    /// Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML, and it supports protocols other than HTTP (including file and ftp).
    /// </summary>
    [External]
    [Name("XMLHttpRequest")]
    public class XMLHttpRequest : XMLHttpRequestEventTarget
    {
        /// <summary>
        /// A JavaScript function object that is called whenever the readyState attribute changes. The callback is called from the user interface thread.
        /// </summary>
        [Name("onreadystatechange")]
        public Action OnReadyStateChange;

        /// <summary>
        /// The state of the request
        /// </summary>
        public readonly AjaxReadyState ReadyState;

        /// <summary>
        /// The response entity body according to responseType, as an ArrayBuffer, Blob, Document, JavaScript object (for "json"), or string. This is null if the request is not complete or was not successful.
        /// </summary>
        public readonly object Response;

        /// <summary>
        /// The response to the request as text, or null if the request was unsuccessful or has not yet been sent.
        /// </summary>
        public readonly string ResponseText;

        /// <summary>
        /// Is an enumerated value that defines the response type. For possible values refer to
        /// enum Bridge.Html5.XMLHttpRequestResponseType.
        /// </summary>
        public XMLHttpRequestResponseType ResponseType;

        /// <summary>
        /// The response to the request as a DOM Document object, or null if the request was unsuccessful, has not yet been sent, or cannot be parsed as XML or HTML. The response is parsed as if it were a text/xml stream. When the responseType is set to "document" and the request has been made asynchronously, the response is parsed as a text/html stream.
        /// </summary>
        public readonly DocumentInstance ResponseXML;

        /// <summary>
        /// The status of the response to the request. This is the HTTP result code (for example, status is 200 for a successful request).
        /// </summary>
        public readonly ushort Status;

        /// <summary>
        /// The response string returned by the HTTP server. Unlike status, this includes the entire text of the response message ("200 OK", for example).
        /// </summary>
        public readonly string StatusText;

        /// <summary>
        /// The number of milliseconds a request can take before automatically being terminated. A value of 0 (which is the default) means there is no timeout.
        /// </summary>
        public int Timeout;

        /// <summary>
        /// The upload process can be tracked by adding an event listener to upload.
        /// </summary>
        public readonly XMLHttpRequestUpload Upload;

        /// <summary>
        /// Indicates whether or not cross-site Access-Control requests should be made using credentials such as cookies or authorization headers. The default is false.
        /// </summary>
        public bool WithCredentials;

        /// <summary>
        /// Aborts the request if it has already been sent.
        /// </summary>
        public virtual void Abort()
        {
        }

        /// <summary>
        /// Returns all the response headers as a string, or null if no response has been received. Note: For multipart requests, this returns the headers from the current part of the request, not from the original channel.
        /// </summary>
        /// <returns></returns>
        public virtual string GetAllResponseHeaders()
        {
            return null;
        }

        /// <summary>
        /// Returns the string containing the text of the specified header, or null if either the response has not yet been received or the header doesn't exist in the response.
        /// </summary>
        /// <param name="header"></param>
        /// <returns></returns>
        public virtual string GetResponseHeader(string header)
        {
            return null;
        }

        /// <summary>
        /// Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest()instead.
        /// </summary>
        /// <param name="method">The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.</param>
        /// <param name="url">The URL to send the request to.</param>
        public virtual void Open(string method, string url)
        {
        }

        /// <summary>
        /// Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest()instead.
        /// </summary>
        /// <param name="method">The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.</param>
        /// <param name="url">The URL to send the request to.</param>
        /// <param name="async">An optional boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send()method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.</param>
        public virtual void Open(string method, string url, bool async)
        {
        }

        /// <summary>
        /// Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest()instead.
        /// </summary>
        /// <param name="method">The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.</param>
        /// <param name="url">The URL to send the request to.</param>
        /// <param name="async">An optional boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send()method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.</param>
        /// <param name="user">The optional user name to use for authentication purposes; by default, this is an empty string.</param>
        public virtual void Open(string method, string url, bool async, string user)
        {
        }

        /// <summary>
        /// Initializes a request. This method is to be used from JavaScript code; to initialize a request from native code, use openRequest()instead.
        /// </summary>
        /// <param name="method">The HTTP method to use, such as "GET", "POST", "PUT", "DELETE", etc. Ignored for non-HTTP(S) URLs.</param>
        /// <param name="url">The URL to send the request to.</param>
        /// <param name="async">An optional boolean parameter, defaulting to true, indicating whether or not to perform the operation asynchronously. If this value is false, the send()method does not return until the response is received. If true, notification of a completed transaction is provided using event listeners. This must be true if the multipart attribute is true, or an exception will be thrown.</param>
        /// <param name="user">The optional user name to use for authentication purposes; by default, this is an empty string.</param>
        /// <param name="password">The optional password to use for authentication purposes; by default, this is an empty string.</param>
        public virtual void Open(string method, string url, bool async, string user, string password)
        {
        }

        /// <summary>
        /// Overrides the MIME type returned by the server. This may be used, for example, to force a stream to be treated and parsed as text/xml, even if the server does not report it as such. This method must be called before send().
        /// </summary>
        /// <param name="mimetype"></param>
        public virtual void OverrideMimeType(string mimetype)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        public virtual void Send()
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(ArrayBuffer data)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(ArrayBufferView data)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(Blob data)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(DocumentInstance data)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(string data)
        {
        }

        /// <summary>
        /// Sends the request. If the request is asynchronous (which is the default), this method returns as soon as the request is sent. If the request is synchronous, this method doesn't return until the response has arrived.
        /// </summary>
        /// <param name="data"></param>
        public virtual void Send(FormData data)
        {
        }

        /// <summary>
        /// Sets the value of an HTTP request header. You must call setRequestHeader() after open(), but before send(). If this method is called several times with the same header, the values are merged into one single request header.
        /// </summary>
        /// <param name="header">The name of the header whose value is to be set.</param>
        /// <param name="value">The value to set as the body of the header.</param>
        public virtual void SetRequestHeader(string header, string value)
        {
        }
    }
}
