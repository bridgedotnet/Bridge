//// Location WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Location

namespace Bridge.Html5
{
    [External]
    [Name("Location")]
    public class Location
    {
        extern Location();

        /// <summary>
        /// String containing the whole URL.
        /// </summary>
        public string Href;

        /// <summary>
        /// String containing the protocol scheme of the URL, including the final ':'.
        /// </summary>
        public string Protocol;

        /// <summary>
        /// String containing the host, that is the hostname, a ':', and the port of the URL.
        /// </summary>
        public string Host;

        /// <summary>
        /// String containing the domain of the URL.
        /// </summary>
        [Name("hostname")]
        public string HostName;

        /// <summary>
        /// String containing the port number of the URL.
        /// </summary>
        public string Port;

        /// <summary>
        /// String containing an initial '/' followed by the path of the URL.
        /// </summary>
        [Name("pathname")]
        public string PathName;

        /// <summary>
        /// String containing a '?' followed by the parameters of the URL.
        /// </summary>
        public string Search;

        /// <summary>
        /// String containing a '#' followed by the fragment identifier of the URL.
        /// </summary>
        public string Hash;

        /// <summary>
        /// String containing the username specified before the domain name.
        /// </summary>
        public string Username;

        /// <summary>
        /// String containing the password specified before the domain name.
        /// </summary>
        public string Password;

        /// <summary>
        /// String containing the canonical form of the origin of the specific location.
        /// </summary>
        public readonly string Origin;

        /// <summary>
        /// The Location.assign()method causes the window to load and display the document at the URL specified.
        /// If the assignment can't happen because of a security violation, a DOMException of the SECURITY_ERROR type is thrown. This happens if the origin of the script calling the method is different from the origin of the page originally described by the Location object, mostly when the script is hosted on a different domain.
        /// If the provided URL is not valid, a DOMException of the SYNTAX_ERROR type is thrown.
        /// </summary>
        /// <param name="url">String containing the URL of the page to navigate to.</param>
        public virtual extern void Assign(string url);

        /// <summary>
        /// The Location.reload()method Reloads the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache.
        /// If the assignment can't happen because of a security violation, a DOMException of the SECURITY_ERROR type is thrown. This happens if the origin of the script calling the method is different from the origin of the page originally described by the Location object, mostly when the script is hosted on a different domain.
        /// </summary>
        public virtual extern void Reload();

        /// <summary>
        /// The Location.reload()method Reloads the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache.
        /// If the assignment can't happen because of a security violation, a DOMException of the SECURITY_ERROR type is thrown. This happens if the origin of the script calling the method is different from the origin of the page originally described by the Location object, mostly when the script is hosted on a different domain.
        /// </summary>
        /// <param name="forcedReload">Boolean flag, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache.</param>
        public virtual extern void Reload(bool forcedReload);

        /// <summary>
        /// The Location.replace()method replaces the current resource with the one at the provided URL. The difference from the assign() method is that after using replace() the current page will not be saved in session History, meaning the user won't be able to use the back button to navigate to it.
        /// </summary>
        /// <param name="url">String containing the URL of the page to navigate to.</param>
        public virtual extern void Replace(string url);
    }
}