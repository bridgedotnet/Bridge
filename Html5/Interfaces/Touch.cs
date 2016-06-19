// The documentation for this class (on <summary> tags) was extracted from:
// https://developer.mozilla.org/en-US/docs/Web/API/Touch

namespace Bridge.Html5
{
    [External]
    [Name("Touch")]
    public class Touch
    {
        /// <summary>
        /// Returns a unique identifier for this <see cref="Touch"/> object. A given touch point (say, by a finger) will have the same identifier for the duration of its movement around the surface. This lets you ensure that you're tracking the same touch all the time.
        /// </summary>
        public readonly int Identifier;

        /// <summary>
        /// Returns the X coordinate of the touch point relative to the left edge of the screen.
        /// </summary>
        public readonly int ScreenX;

        /// <summary>
        /// Returns the Y coordinate of the touch point relative to the top edge of the screen.
        /// </summary>
        public readonly int ScreenY;

        /// <summary>
        /// Returns the X coordinate of the touch point relative to the left edge of the browser viewport, not including any scroll offset.
        /// </summary>
        public readonly int ClientX;

        /// <summary>
        /// Returns the Y coordinate of the touch point relative to the top edge of the browser viewport, not including any scroll offset.
        /// </summary>
        public readonly int ClientY;

        /// <summary>
        /// Returns the X coordinate of the touch point relative to the left edge of the document. Unlike clientX, this value includes the horizontal scroll offset, if any.
        /// </summary>
        public readonly int PageX;

        /// <summary>
        /// Returns the Y coordinate of the touch point relative to the top of the document. Unlike clientY, this value includes the vertical scroll offset, if any.
        /// </summary>
        public readonly int PageY;

        /// <summary>
        /// Returns the <see cref="Bridge.Html5.HTMLElement"/> on which the touch point started when it was first placed on the surface, even if the touch point has since moved outside the interactive area of that element or even been removed from the document.
        /// </summary>
        public readonly HTMLElement Target;

        /// <summary>
        /// Returns the X radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as screenX.
        /// </summary>
        public readonly int RadiusX;

        /// <summary>
        /// Returns the Y radius of the ellipse that most closely circumscribes the area of contact with the screen. The value is in pixels of the same scale as screenY.
        /// </summary>
        public readonly int RadiusY;

        /// <summary>
        /// Returns the angle (in degrees) that the ellipse described by radiusX and radiusY must be rotated, clockwise, to most accurately cover the area of contact between the user and the surface.
        /// </summary>
        public readonly int RotationAngle;

        /// <summary>
        /// Returns the amount of pressure being applied to the surface by the user, as a float between 0.0 (no pressure) and 1.0 (maximum pressure).
        /// </summary>
        public readonly float Force;
    }
}
