// PositionOptions WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/PositionOptions

namespace Bridge.Html5
{
    /// <summary>
    /// The PositionOptions interface describes the options to use when calling the geolocation backend. The user agent itself doesn't create such an object itself: it is the calling script that create it and use it as a parameter of Geolocation.getCurrentPosition() and Geolocation.watchPosition().
    /// </summary>
    [External]
    [Name("Object")]
    public class GeolocationPositionOptions
    {
        public extern GeolocationPositionOptions();

        /// <summary>
        /// Boolean property that indicates the application would like to receive the best possible results. If true and if the device is able to provide a more accurate position, it will do so. Note that this can result in slower response times or increased power consumption (with a GPS chip on a mobile device for example). On the other hand, if false (the default value), the device can take the liberty to save resources by responding more quickly and/or using less power.
        /// </summary>
        public bool EnableHighAccuracy;

        /// <summary>
        /// Positive long value representing the maximum length of time (in milliseconds) the device is allowed to take in order to return a position. The default value is Infinity, meaning that getCurrentPosition() won't return until the position is available.
        /// </summary>
        public int Timeout;

        /// <summary>
        /// Positive long value indicating the maximum age in milliseconds of a possible cached position that is acceptable to return. If set to 0, it means that the device cannot use a cached position and must attempt to retrieve the real current position. If set to Infinity the device must return a cached position regardless of its age.
        /// </summary>
        public int MaximumAge;
    }
}