namespace Bridge.Html5
{
    /// <summary>
    /// The transform-style CSS property determines if the children of the element are positioned in the 3D-space or are flattened in the plane of the element.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TransformStyle
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// Indicates that the children of the element should be positioned in the 3D-space.
        /// </summary>
        [Name("preserve-3d")]
        Preserve3D,

        /// <summary>
        /// Indicates that the children of the element are lying in the plane of the element itself.
        /// </summary>
        Flat
    }
}
