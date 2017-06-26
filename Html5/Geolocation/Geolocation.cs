// Geolocation WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation

using System;

namespace Bridge.Html5
{
    /// <summary>
    /// The Geolocation interface represents an object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app offer customized results based on the user's location.
    /// An object with this interface is obtained using the NavigatorGeolocation.geolocation property implemented by the Navigator object.
    ///
    /// Note: For security reasons, when a web page tries to access location information, the user is notified and asked to grant permission. Be aware that each browser has its own policies and methods for requesting this permission.
    /// </summary>
    [External]
    [Name("Object")]
    public class Geolocation
    {
        extern Geolocation();

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        public virtual extern void GetCurrentPosition(Delegate success);

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        public virtual extern void GetCurrentPosition(Action<GeolocationPosition> success);

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as its sole input parameter.</param>
        public virtual extern void GetCurrentPosition(Delegate success, Delegate error);

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as its sole input parameter.</param>
        public virtual extern void GetCurrentPosition(Action<GeolocationPosition> success, Action<GeolocationPositionError> error);

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as its sole input parameter.</param>
        /// <param name="options">An optional PositionOptions object.</param>
        public virtual extern void GetCurrentPosition(Delegate success, Delegate error, GeolocationPositionOptions options);

        /// <summary>
        /// Determines the device's current location and gives back a Position object with the data.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as its sole input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as its sole input parameter.</param>
        /// <param name="options">An optional PositionOptions object.</param>
        public virtual extern void GetCurrentPosition(Action<GeolocationPosition> success, Action<GeolocationPositionError> error, GeolocationPositionOptions options);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Delegate success);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Action<GeolocationPosition> success);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as an input parameter.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Delegate success, Delegate error);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as an input parameter.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Action<GeolocationPosition> success, Action<GeolocationPositionError> error);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as an input parameter.</param>
        /// <param name="options">An optional PositionOptions object.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Delegate success, Delegate error, GeolocationPositionOptions options);

        /// <summary>
        /// The Geolocation.watchPosition() method is used to register a handler function that will be called automatically each time the position of the device changes. You can also, optionally, specify an error handling callback function.
        /// </summary>
        /// <param name="success">A callback function that takes a Position object as an input parameter.</param>
        /// <param name="error">An optional callback function that takes a PositionError object as an input parameter.</param>
        /// <param name="options">An optional PositionOptions object.</param>
        /// <returns>This method returns a watch ID value than can be used to unregister the handler by passing it to the Geolocation.clearWatch() method.</returns>
        public virtual extern object WatchPosition(Action<GeolocationPosition> success, Action<GeolocationPositionError> error, GeolocationPositionOptions options);

        /// <summary>
        /// Removes the particular handler previously installed using watchPosition().
        /// </summary>
        /// <param name="id">The ID number returned by the Geolocation.watchPosition() method when installing the handler you wish to remove.</param>
        public virtual extern void ClearWatch(object id);
    }
}