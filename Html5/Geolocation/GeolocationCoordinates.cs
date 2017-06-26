// Coordinates WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Coordinates

namespace Bridge.Html5
{
    /// <summary>
    /// The Coordinates interface represents the position and attitude of the device on Earth, as well as the accuracy with which these data are computed.
    /// </summary>
    [External]
    [Name("Object")]
    public class GeolocationCoordinates
    {
        extern GeolocationCoordinates();

        /// <summary>
        /// Returns a double representing the latitude of the position in decimal degrees.
        /// </summary>
        public readonly double Latitude;

        /// <summary>
        /// Returns a double representing the longitude of the position in decimal degrees.
        /// </summary>
        public readonly double Longitude;

        /// <summary>
        /// Returns a double representing the altitude of the position in meters, relative to sea level. This value can be null.
        /// </summary>
        public readonly double? Altitude;

        /// <summary>
        /// Returns a double representing the accuracy of the latitude and longitude properties expressed in meters.
        /// </summary>
        public readonly double Accuracy;

        /// <summary>
        /// Returns a double representing the accuracy of the altitude expressed in meters. This value can be null.
        /// </summary>
        public readonly double? AltitudeAccuracy;

        /// <summary>
        /// Returns a double representing the direction in which the device is traveling. This value, specified in degrees, indicates how far off from heading due north the device is. 0 degrees represents true true north, and the direction is determined clockwise (which means that east is 90 degrees and west is 270 degrees). If speed is 0, heading is NaN. If the device is not able to provide heading information, this value is null.
        /// </summary>
        public readonly double? Heading;

        /// <summary>
        /// Returns a double representing the velocity of the device in meters per second. This value can be null.
        /// </summary>
        public readonly double? Speed;
    }
}