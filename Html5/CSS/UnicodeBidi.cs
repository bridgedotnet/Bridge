namespace Bridge.Html5
{
    /// <summary>
    /// The unicode-bidi CSS property together with the direction property relates to the handling of bidirectional text in a document.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum UnicodeBidi
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// The element does not offer a additional level of embedding with respect to the bidirectional algorithm. For inline elements implicit reordering works across element boundaries.
        /// </summary>
        Normal,

        /// <summary>
        /// If the element is inline, this value opens an additional level of embedding with respect to the bidirectional algorithm. The direction of this embedding level is given by the direction property.
        /// </summary>
        Embed,

        /// <summary>
        /// For inline elements this creates an override. For block container elements this creates an override for inline-level descendants not within another block container element. This means that inside the element, reordering is strictly in sequence according to the direction property; the implicit part of the bidirectional algorithm is ignored.
        /// </summary>
        [Name("bidi-override")]
        BidiOverride,

        /// <summary>
        /// This keyword indicates that the element's container directionality should be calculated without considering the content of this element. The element is therefore isolated from its siblings. When applying its bidirectional-resolution algorithm, its container element treats it as one or several U+FFFC Object Replacement Character, i.e. like an image.
        /// </summary>
        Isolate,

        /// <summary>
        /// This keyword applies the isolation behavior of the isolate keyword to the surrounding content and the override behavior of the bidi-override keyword to the inner content.
        /// </summary>
        [Name("isolate-override")]
        IsolateOverride,

        /// <summary>
        /// This keyword makes the elements directionality calculated without considering its parent bidirectional state or the value of the direction property. The directionality is calculated using the P2 and P3 rules of the Unicode Bidirectional Algorithm.
        /// This value allows to display data which has already formatted using a tool following the Unicode Bidirectional Algorithm.
        /// </summary>
        PlainText
    }
}
