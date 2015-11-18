namespace Bridge.Html5
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum Cursor
    {
        /// <summary>
        /// The browser determines the cursor to display based on the current context.
        /// E.g. equivalent to text when hovering text.
        /// </summary>
        Auto,

        /// <summary>
        /// Default cursor, typically an arrow.
        /// </summary>
        Default,

        /// <summary>
        /// No cursor is rendered.
        /// </summary>
        None,

        /// <summary>
        /// A context menu is available under the cursor. Only IE 10 and up have implemented this on Windows
        /// </summary>
        [Name("context-menu")]
        ContextMenu,

        /// <summary>
        /// Indicating help is available.
        /// </summary>
        Help,

        /// <summary>
        /// E.g. used when hovering over links, typically a hand.
        /// </summary>
        Pointer,

        /// <summary>
        /// The program is busy in the background but the user can still interact with the interface (unlike for wait).
        /// </summary>
        Progress,

        /// <summary>
        /// The program is busy (sometimes an hourglass or a watch).
        /// </summary>
        Wait,

        /// <summary>
        /// Indicating that cells can be selected.
        /// </summary>
        Cell,

        /// <summary>
        /// Cross cursor, often used to indicate selection in a bitmap.
        /// </summary>
        CrossHair,

        /// <summary>
        /// Indicating text can be selected, typically an I-beam.
        /// </summary>
        Text,

        /// <summary>
        /// Indicating that vertical text can be selected, typically a sideways I-beam.
        /// </summary>
        [Name("vertical-text")]
        VerticalText,

        /// <summary>
        /// Indicating an alias or shortcut is to be created.
        /// </summary>
        Alias,

        /// <summary>
        /// Indicating that something can be copied.
        /// </summary>
        Copy,

        /// <summary>
        /// The hovered object may be moved.
        /// </summary>
        Move,

        /// <summary>
        /// Cursor showing that a drop is not allowed at the current location.
        /// </summary>
        [Name("no-drop")]
        NoDrop,

        /// <summary>
        /// Cursor showing that something cannot be done.
        /// </summary>
        [Name("not-allowed")]
        NotAllowed,

        /// <summary>
        /// Cursor showing that something can be scrolled in any direction (panned).
        /// </summary>
        [Name("all-scroll")]
        AllScroll,

        /// <summary>
        /// The item/column can be resized horizontally. Often rendered as arrows pointing left and right with a vertical bar separating.
        /// </summary>
        [Name("col-resize")]
        ColResize,

        /// <summary>
        /// The item/row can be resized vertically. Often rendered as arrows pointing up and down with a horizontal bar separating them.
        /// </summary>
        [Name("row-resize")]
        RowResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("n-resize")]
        NorthResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("e-resize")]
        EastResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("s-resize")]
        SouthResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("w-resize")]
        WestResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("ne-resize")]
        NorthEastResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("nw-resize")]
        NorthWestResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("se-resize")]
        SouthEastResize,

        /// <summary>
        /// Some edge is to be moved.
        /// </summary>
        [Name("sw-resize")]
        SouthWestResize,

        /// <summary>
        /// Indicates a bidirectional resize cursor.
        /// </summary>
        [Name("ew-resize")]
        EastWestResize,

        /// <summary>
        /// Indicates a bidirectional resize cursor.
        /// </summary>
        [Name("ns-resize")]
        NorthSouthResize,

        /// <summary>
        /// Indicates a bidirectional resize cursor.
        /// </summary>
        [Name("nesw-resize")]
        NorthEastSouthWestResize,

        /// <summary>
        /// Indicates a bidirectional resize cursor.
        /// </summary>
        [Name("nwse-resize")]
        NorthWestSouthEastResize,

        /// <summary>
        /// Indicates that something can be zoomed (magnified) in or out.
        /// </summary>
        [Name("zoom-in")]
        ZoomIn,

        /// <summary>
        /// Indicates that something can be zoomed (magnified) in or out.
        /// </summary>
        [Name("zoom-out")]
        ZoomOut,

        /// <summary>
        /// Indicates that something can be grabbed (dragged to be moved).
        /// </summary>
        Grab,

        /// <summary>
        /// Indicates that something can be grabbed (dragged to be moved).
        /// </summary>
        Grabbing
    }
}
