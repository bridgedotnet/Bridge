namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLImageElement interface provides special properties and methods (beyond the regular HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of &lt;img&gt; elements.
    /// </summary>
    [External]
    [Name("HTMLImageElement")]
    public class HTMLImageElement : HTMLElement<HTMLImageElement>
    {
        [Template("new Image()")]
        public HTMLImageElement()
        {
        }

        [Template("new Image({0})")]
        public HTMLImageElement(int width)
        {
        }

        [Template("new Image({0},{1})")]
        public HTMLImageElement(int width, int height)
        {
        }

        /// <summary>
        /// True if the browser has fetched the image, and it is in a supported image type that was decoded without errors.
        /// </summary>
        public readonly bool Complete;

        /// <summary>
        /// The CORS setting for this image element. See CORS settings attributes for details.
        /// </summary>
        public string CrossOrigin;

        /// <summary>
        /// Reflects the height HTML attribute, indicating the rendered height of the image in CSS pixels.
        /// </summary>
        public int Height;

        /// <summary>
        /// Reflects the ismap HTML attribute, indicating that the image is part of a server-side image map.
        /// </summary>
        public bool IsMap;

        /// <summary>
        /// Intrinsic height of the image in CSS pixels, if it is available; otherwise, 0.
        /// </summary>
        public readonly int NaturalHeight;

        /// <summary>
        /// Intrinsic width of the image in CSS pixels, if it is available; otherwise, 0.
        /// </summary>
        public readonly int NaturalWidth;

        /// <summary>
        /// Reflects the src HTML attribute, containing the full URL of the image including base URI.
        /// </summary>
        public string Src;

        /// <summary>
        /// The srcset attribute allows authors to provide a set of images to handle graphical displays of varying dimensions and pixel densities.
        /// </summary>
        public string SrcSet;

        /// <summary>
        /// Reflects the usemap HTML attribute, containing a partial URL of a map element.
        /// </summary>
        public string UseMap;

        /// <summary>
        /// Reflects the width HTML attribute, indicating the rendered width of the image in CSS pixels.
        /// </summary>
        public int Width;

        /// <summary>
        /// The horizontal offset from the nearest layer. (Mimic an old Netscape 4 behavior)
        /// </summary>
        public readonly int X;

        /// <summary>
        /// The vertical offset from the nearest layer. (Mimic an old Netscape 4 behavior)
        /// </summary>
        public readonly int Y;
    }
}