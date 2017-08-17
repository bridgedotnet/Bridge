namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLVideoElement interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of HTMLMediaElement and HTMLElement.
    /// The HTML &lt;video&gt; element is used to embed video content. It may contain several video sources, represented using the src attribute or the &lt;source&gt; element; the browser will choose the most suitable one.
    /// The list of supported media formats vary from one browser to the other.
    /// </summary>
    [External]
    [Name("HTMLVideoElement")]
    public sealed class HTMLVideoElement : HTMLMediaElement<HTMLVideoElement>
    {
        [Template("document.createElement(\"video\")")]
        public extern HTMLVideoElement();

        /// <summary>
        /// Reflects the height HTML attribute, which specifies the height of the display area, in CSS pixels.
        /// </summary>
        public int Height;

        /// <summary>
        /// Reflects the poster HTML attribute, which specifies an image to show while no video data is available.
        /// </summary>
        public string Poster;

        /// <summary>
        /// Returns an unsigned long containing the intrinsic height of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is HAVE_NOTHING, the value is 0.
        /// </summary>
        public readonly int VideoHeight;

        /// <summary>
        /// Returns an unsigned long containing the intrinsic width of the resource in CSS pixels, taking into account the dimensions, aspect ratio, clean aperture, resolution, and so forth, as defined for the format used by the resource. If the element's ready state is HAVE_NOTHING, the value is 0.
        /// </summary>
        public readonly int VideoWidth;

        /// <summary>
        /// Reflects the width HTML attribute, which specifies the width of the display area, in CSS pixels.
        /// </summary>
        public int Width;
    }
}