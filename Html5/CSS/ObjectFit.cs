namespace Bridge.Html5
{
    /// <summary>
    /// The ‘object-fit’ property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum ObjectFit
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The replaced content is sized to fill the element's content box: the object's concrete object size is the element's used width and height.
        /// </summary>
        Fill,

        /// <summary>
        /// The replaced content is sized to maintain its aspect ratio while fitting within the element's content box: its concrete object size is resolved as a contain constraint against the element's used width and height.
        /// </summary>
        Contain,

        /// <summary>
        /// The replaced content is sized to maintain its aspect ratio while filling the element's entire content box: its concrete object size is resolved as a cover constraint against the element's used width and height.
        /// </summary>
        Cover,

        /// <summary>
        /// The replaced content is not resized to fit inside the element's content box: determine the object's concrete object size using the default sizing algorithm with no specified size, and a default object size equal to the replaced element's used width and height.
        /// </summary>
        None,

        /// <summary>
        /// The replaced content is not resized to fit inside the element's content box: determine the object's concrete object size using the default sizing algorithm with no specified size, and a default object size equal to the replaced element's used width and height.
        /// </summary>
        [Name("scale-down")]
        ScaleDown
    }
}
