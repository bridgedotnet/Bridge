namespace Bridge.Html5
{
    /// <summary>
    /// The border style CSS property sets the line style of the border of a box.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BorderStyle
    {
        /// <summary>
        /// Like for the hidden keyword, displays no border. In that case, except if a background image is set, the calculated values of border-bottom-width will be 0, even if specified otherwise through the property. In case of table cell and border collapsing, the none value has the lowest priority: it means that if any other conflicting border is set, it will be displayed.
        /// </summary>
        None,

        /// <summary>
        /// Like for the none keyword, displays no border. In that case, except if a background image is set, the calculated values of border-bottom-width will be 0, even if specified otherwise through the property. In case of table cell and border collapsing, the hidden value has the highest priority: it means that if any other conflicting border is set, it won't be displayed.
        /// </summary>
        Hidden,

        /// <summary>
        /// Displays a series of rounded dots. The spacing of the dots are not defined by the specification and are implementation-specific. The radius of the dots is half the calculated border-bottom-width.
        /// </summary>
        Dotted,

        /// <summary>
        /// Displays a series of short square-ended dashes or line segments. The exact size and length of the segments are not defined by the specification and are implementation-specific.
        /// </summary>
        Dashed,

        /// <summary>
        /// Displays a single, straight, solid line.
        /// </summary>
        Solid,

        /// <summary>
        /// Displays two straight lines that add up to the pixel amount defined as border-width or border-bottom-width.
        /// </summary>
        Double,

        /// <summary>
        /// Displays a border leading to a carved effect. It is the opposite of ridge.
        /// </summary>
        Groove,

        /// <summary>
        /// Displays a border with a 3D effect, like if it is coming out of the page. It is the opposite of groove.
        /// </summary>
        Ridge,

        /// <summary>
        /// Displays a border that makes the box appear embedded. It is the opposite of outset. When applied to a table cell with border-collapse set to collapsed, this value behaves like groove.
        /// </summary>
        Inset,

        /// <summary>
        /// Displays a border that makes the box appear in 3D, embossed. It is the opposite of inset. When applied to a table cell with border-collapse set to collapsed, this value behaves like ridge.
        /// </summary>
        Outset,

        /// <summary>
        ///
        /// </summary>
        Inherit
    }
}
