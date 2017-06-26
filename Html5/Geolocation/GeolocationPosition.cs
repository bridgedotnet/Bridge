// Position WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Position

namespace Bridge.Html5
{
    /// <summary>
    /// The Position interface represents the position of the concerned device at a given time. The position, represented by a Coordinates object, comprehends the 2D position of the device, on a spheroid representing the Earth, but also its altitude and its speed.
    /// </summary>
    [External]
    [Name("Object")]
    public class GeolocationPosition
    {
        extern GeolocationPosition();

        /// <summary>
        /// Returns a GeolocationCoordinates object defining the current location.
        /// </summary>
        public readonly GeolocationCoordinates Coords;

        /// <summary>
        /// Returns a DOMTimeStamp representing the time at which the location was retrieved.
        /// </summary>
        public readonly int Timestamp;
    }
}