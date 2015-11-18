namespace Bridge.Html5
{
    /// <summary>
    /// The DOM WheelEvent represents events that occur due to the user moving a mouse wheel or similar input device.
    /// </summary>
    [External]
    [Name("WheelEvent")]
    public class WheelEvent : Event
    {
        private WheelEvent()
        {
        }

        /// <summary>
        /// Horizontal scroll amount. Read only.
        /// </summary>
        public readonly double DeltaX;

        /// <summary>
        /// Vertical scroll amount. Read only.
        /// </summary>
        public readonly double DeltaY;

        /// <summary>
        /// Scroll amount for the z-axis. Read only.
        /// </summary>
        public readonly double DeltaZ;

        /// <summary>
        /// Unit of delta values.
        /// </summary>
        public readonly DeltaMode DeltaMode;
    }

    /// <summary>
    /// Unit of delta values.
    /// </summary>
    [External]
    public enum DeltaMode
    {
        /// <summary>
        /// The delta values are specified in pixels.
        /// </summary>
        Pixel = 0,

        /// <summary>
        /// The delta values are specified in lines.
        /// </summary>
        Line = 1,

        /// <summary>
        /// The delta values are specified in pages.
        /// </summary>
        Page = 2
    }
}
