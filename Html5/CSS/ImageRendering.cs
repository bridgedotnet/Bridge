namespace Bridge.Html5
{
    /// <summary>
    /// The image-rendering CSS property provides a hint to the user agent about how to handle its image rendering.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ImageRendering
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Default value, the image should be scaled with an algorithm that maximizes the appearance of the image. In particular, scaling algorithms that "smooth" colors are acceptable, such as bilinear interpolation. This is intended for images such as photos. Since version 1.9 (Firefox 3.0), Gecko uses bilinear resampling (high quality).
        /// </summary>
        Auto,

        /// <summary>
        ///
        /// </summary>
        [Name("crisp-edges")]
        CrispEdges,

        /// <summary>
        /// When scaling the image up, the "nearest neighbor" or similar algorithm must be used, so that the image appears to be simply composed of very large pixels. When scaling down, this is the same as 'auto'.
        /// </summary>
        Pixelated
    }
}
