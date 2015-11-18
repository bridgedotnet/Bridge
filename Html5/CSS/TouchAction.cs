namespace Bridge.Html5
{
    /// <summary>
    /// Determines whether touch input may trigger default behavior supplied by the user agent, such as panning or zooming.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TouchAction
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The user agent MAY determine any permitted touch behaviors, such as panning and zooming manipulations of the viewport, for touches that begin on the element.
        /// </summary>
        Auto,

        /// <summary>
        /// Touches that begin on the element MUST NOT trigger default touch behaviors.
        /// </summary>
        None,

        /// <summary>
        /// The user agent MAY consider touches that begin on the element only for the purposes of horizontally scrolling the element's nearest ancestor with horizontally scrollable content.
        /// </summary>
        [Name("pan-x")]
        PanX,

        /// <summary>
        /// The user agent MAY consider touches that begin on the element only for the purposes of vertically scrolling the element's nearest ancestor with vertically scrollable content.
        /// </summary>
        [Name("pan-y")]
        PanY
    }
}
