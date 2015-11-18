namespace Bridge.Html5
{
    /// <summary>
    ///
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum DominantBaseline
    {
        /// <summary>
        /// If this property occurs on a block or inline-block element, then the user agent behavior depends on the value of the 'script' property. If the value of the script property is 'auto', the 'auto' value is equivalent to 'alphabetic' for horizontal 'writing-mode' values and 'central' for vertical 'writing-mode' values. If the value of the script property is other than 'auto', the 'auto' value is equivalent to 'use-script'
        /// </summary>
        Auto,

        /// <summary>
        /// The dominant baseline-identifier is set using the computed value of the 'script' property. The 'writing-mode' value, whether horizontal or vertical is used to select the baseline-table that correspond to that baseline-identifier.
        /// </summary>
        [Name("use-script")]
        UseScript,

        /// <summary>
        /// The dominant baseline-identifier, the baseline-table and the baseline-table font-size remain the same as that of the parent.
        /// </summary>
        [Name("no-change")]
        NoChange,

        /// <summary>
        /// The dominant baseline-identifier and the baseline table remain the same, but the baseline-table font-size is changed to the value of the 'font-size' property on this element. This re-scales the baseline table for the current 'font-size'.
        /// </summary>
        [Name("reset-size")]
        ResetSize,

        /// <summary>
        /// The dominant baseline-identifier is set to the 'alphabetic' baseline.
        /// </summary>
        Alphabetic,

        /// <summary>
        /// The dominant baseline-identifier is set to the 'hanging' baseline.
        /// </summary>
        Hanging,

        /// <summary>
        /// The dominant baseline-identifier is set to the 'ideographic' baseline.
        /// </summary>
        Ideographic,

        /// <summary>
        /// The dominant baseline-identifier is set to the 'mathematical' baseline.
        /// </summary>
        Mathematical,

        /// <summary>
        /// The dominant baseline-identifier is set to be 'central'. The derived baseline-table is constructed from the defined baselines in a baseline-table in the nominal font.
        /// </summary>
        Central,

        /// <summary>
        /// The dominant baseline-identifier is set to be 'middle'. The derived baseline-table is constructed from the defined baselines in a baseline-table in the nominal font.
        /// </summary>
        Middle,

        /// <summary>
        /// The dominant baseline-identifier is set to be 'text-after-edge'. The derived baseline-table is constructed from the defined baselines in a baseline-table in the nominal font.
        /// </summary>
        [Name("text-after-edge")]
        TextAfterEdge,

        /// <summary>
        /// The dominant baseline-identifier is set to be 'text-before-edge'. The derived baseline-table is constructed from the defined baselines in a baseline-table in the nominal font.
        /// </summary>
        [Name("text-before-edge")]
        TextBeforeEdge
    }
}
