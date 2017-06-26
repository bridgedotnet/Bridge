// PositionError WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/PositionError

namespace Bridge.Html5
{
    /// <summary>
    /// The PositionError interface represents the reason of an error occuring when using the geolocating device.
    /// </summary>
    [External]
    [Name("Object")]
    public class GeolocationPositionError
    {
        extern GeolocationPositionError();

        /// <summary>
        /// Returns an unsigned short representing the error code.
        /// </summary>
        public readonly GeolocationErrorCode Code;

        /// <summary>
        /// Returns a human-readable DOMString describing the details of the error.
        /// </summary>
        public readonly string Message;
    }

    [External]
    public enum GeolocationErrorCode
    {
        /// <summary>
        /// The acquisition of the geolocation information failed because the page didn't have the permission to do it.
        /// </summary>
        PermissionDenied = 1,

        /// <summary>
        /// The acquisition of the geolocation failed because one or several internal source of position returned an internal error.
        /// </summary>
        PositionUnavailable = 2,

        /// <summary>
        /// The time allowed to acquire the geolocation, defined by PositionOptions.timeout information was reached before the information was obtained.
        /// </summary>
        Timeout = 3
    }
}