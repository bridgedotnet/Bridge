namespace Bridge.Html5
{
    [External]
    [Name("ClientRect")]
    public class ClientRect
    {
        public extern ClientRect();

        /// <summary>
        /// Y-coordinate, relative to the viewport origin, of the bottom of the rectangle box. Read only.
        /// </summary>
        public readonly double Bottom;

        /// <summary>
        /// X-coordinate, relative to the viewport origin, of the left of the rectangle box. Read only.
        /// </summary>
        public readonly double Left;

        /// <summary>
        /// X-coordinate, relative to the viewport origin, of the right of the rectangle box. Read only.
        /// </summary>
        public readonly double Right;

        /// <summary>
        /// Y-coordinate, relative to the viewport origin, of the top of the rectangle box. Read only.
        /// </summary>
        public readonly double Top;

        /// <summary>
        /// Width of the rectangle box (This is identical to right minus left). Read only.
        /// </summary>
        public readonly double Width;

        /// <summary>
        /// Height of the rectangle box (This is identical to bottom minus top). Read only.
        /// </summary>
        public readonly double Height;
    }
}