namespace Bridge.Html5
{
    /// <summary>
    /// The HTMLIFrameElement interface provides special properties and methods (beyond those of the HTMLElement interface it also has available to it by inheritance) for manipulating the layout and presentation of inline frame elements.
    /// </summary>
    [External]
    [Name("HTMLIFrameElement")]
    public sealed class HTMLIFrameElement : HTMLElement<HTMLIFrameElement>
    {
        [Template("document.createElement(\"iframe\")")]
        public extern HTMLIFrameElement();

        /// <summary>
        /// Indicates whether or not the inline frame is willing to be placed into full screen mode. See Using full-screen mode for details.
        /// </summary>
        [Name("allowfullscreen")]
        public bool AllowFullScreen;

        /// <summary>
        /// The active document in the inline frame's nested browsing context.
        /// </summary>
        public readonly DocumentInstance ContentDocument;

        /// <summary>
        /// The window proxy for the nested browsing context.
        /// </summary>
        public readonly WindowInstance ContentWindow;

        /// <summary>
        /// Indicates whether to create borders between frames.
        /// </summary>
        [Name("frameborder")]
        public string FrameBorder;

        /// <summary>
        /// Reflects the height HTML attribute, indicating the height of the frame.
        /// </summary>
        public int Height;

        /// <summary>
        /// URI of a long description of the frame.
        /// </summary>
        public string LongDesc;

        /// <summary>
        /// Height of the frame margin.
        /// </summary>
        public int MarginHeight;

        /// <summary>
        /// Width of the frame margin.
        /// </summary>
        public int MarginWidth;

        /// <summary>
        /// Reflects the name HTML attribute, containing a name by which to refer to the frame.
        /// </summary>
        public string Name;

        /// <summary>
        /// Reflects the sandbox HTML attribute, indicating extra restrictions on the behavior of the nested content.
        /// </summary>
        public DOMSettableTokenList Sandbox;

        /// <summary>
        /// Indicates whether the browser should provide scrollbars for the frame.
        /// </summary>
        public string Scrolling;

        /// <summary>
        /// Reflects the seamless HTML attribute, indicating that the inline frame should be rendered seamlessly within the parent document.
        /// </summary>
        public bool Seamless;

        /// <summary>
        /// Reflects the src HTML attribute, containing the address of the content to be embedded.
        /// </summary>
        public string Src;

        /// <summary>
        /// The content to display in the frame.
        /// </summary>
        public string SrcDoc;

        /// <summary>
        /// Reflects the width HTML attribute, indicating the width of the frame.
        /// </summary>
        public int Width;
    }
}