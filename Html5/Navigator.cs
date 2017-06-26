//// Location WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator

namespace Bridge.Html5
{
    /// <summary>
    ///  The Navigator interface represents the state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.
    /// A Navigator object can be retrieved using the read-only Window.navigator property.
    /// </summary>
    [External]
    [Namespace(false)]
    public class Navigator
    {
        extern Navigator();

        /// <summary>
        /// Returns a DOMString with the official name of the browser. Do not rely on this property to return the correct value.
        /// </summary>
        public readonly string AppName;

        /// <summary>
        /// Returns the version of the browser as a DOMString. Do not rely on this property to return the correct value.
        /// </summary>
        public readonly string AppVersion;

        /// <summary>
        /// Returns a Geolocation object allowing accessing the location of the device.
        /// </summary>
        public readonly Geolocation Geolocation;

        /// <summary>
        /// Returns a DOMString representing the language version of the browser.
        /// </summary>
        public readonly string Language;

        /// <summary>
        /// Returns a Boolean indicating whether the browser is working online.
        /// </summary>
        public readonly bool OnLine;

        /// <summary>
        /// Returns a string that represents the current operating system.
        /// </summary>
        public readonly string Oscpu;

        /// <summary>
        /// Returns a string representing the platform of the browser.
        /// </summary>
        public readonly string Platform;

        /// <summary>
        /// Returns the product name of the current browser (e.g., "Gecko").
        /// </summary>
        public readonly string Product;

        /// <summary>
        /// Returns the user agent string for the current browser.
        /// </summary>
        public readonly string UserAgent;

        /// <summary>
        /// Returns an array: the first value is null, and the others are all Gamepad objects, one for each gamepad connected to the device. So if no gamepads are connected, the method will just return null.
        /// </summary>
        public extern Gamepad[] GetGamepads();
    }
}