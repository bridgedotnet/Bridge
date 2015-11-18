namespace Bridge.Html5
{
    /// <summary>
    /// The CSS mask-type properties defines if a SVG &lt;mask&gt; element is a luminance or an alpha mask.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum MaskType
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Is a keyword indicating that the associated &lt;mask&gt; is a luminance mask, that is that its relative luminance values must be used when applying it.
        /// </summary>
        Luminance,

        /// <summary>
        /// Is a keyword indicating that the associated &lt;mask&gt; is an alpha mask, that is that its alpha channel values must be used when applying it.
        /// </summary>
        Alpha
    }
}
