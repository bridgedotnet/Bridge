// Screen WebAPI by Mozilla Contributors is licensed under CC-BY-SA 2.5.
// https://developer.mozilla.org/en-US/docs/Web/API/Window.screen

namespace Bridge.Html5
{
    /// <summary>
    /// The screen object is a special object for inspecting properties of the screen on which the current window is being rendered.
    /// </summary>
    [External]
    [Name("Screen")]
    public class Screen
    {
        extern Screen();

        /// <summary>
        /// Specifies the y-coordinate of the first pixel that is not allocated to permanent or semipermanent user interface features.
        /// </summary>
        public readonly int AvailTop;

        /// <summary>
        /// Returns the first available pixel available from the left side of the screen.
        /// </summary>
        public readonly int AvailLeft;

        /// <summary>
        /// Specifies the height of the screen, in pixels, minus permanent or semipermanent user interface features displayed by the operating system, such as the Taskbar on Windows.
        /// </summary>
        public readonly int AvailHeight;

        /// <summary>
        /// Returns the amount of horizontal space in pixels available to the window.
        /// </summary>
        public readonly int AvailWidth;

        /// <summary>
        /// Returns the color depth of the screen.
        /// </summary>
        public readonly int ColotDepth;

        /// <summary>
        /// Returns the height of the screen in pixels.
        /// </summary>
        public readonly int Height;

        /// <summary>
        /// Returns the distance in pixels from the left side of the main screen to the left side of the current screen.
        /// </summary>
        public readonly int Left;

        /// <summary>
        /// Gets the bit depth of the screen.
        /// </summary>
        public readonly int PixelDepth;

        /// <summary>
        /// Returns the distance in pixels from the top side of the current screen.
        /// </summary>
        public readonly int Top;

        /// <summary>
        /// Returns the width of the screen.
        /// </summary>
        public readonly int Width;
    }
}