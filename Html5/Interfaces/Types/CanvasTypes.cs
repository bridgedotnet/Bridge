namespace Bridge.Html5
{
    [External]
    [Name("Object")]
    public partial class CanvasTypes
    {
        /// <summary>
        /// There are three possible values for this property and those are: butt, round and square.
        /// By default this property is set to butt.
        /// </summary>
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasLineCapType
        {
            /// <summary>
            /// Default. The ends of lines are squared off at the endpoints.
            /// </summary>
            Butt,

            /// <summary>
            /// The ends of lines are rounded.
            /// </summary>
            Round,

            /// <summary>
            /// The ends of lines are squared off by adding a box with an equal width and half the height
            /// of the line's thickness.
            /// </summary>
            Square,

            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        /// <summary>
        /// There are three possible values for this property: round, bevel and miter.
        /// By default this property is set to miter.
        /// Note that the lineJoin setting has no effect if the two connected segments have the same direction,
        /// because no joining area will be added in this case.
        /// </summary>
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasLineJoinType
        {
            /// <summary>
            /// Rounds off the corners of a shape by filling an additional sector of disc centered at the
            /// common endpoint of connected segments.
            /// The radius for these rounded corners is equal to the line width.
            /// </summary>
            Round,

            /// <summary>
            /// Fills an additional triangular area between the common endpoint of connected segments,
            /// and the separate outside rectangular corners of each segment.
            /// </summary>
            Bevel,

            /// <summary>
            /// Default. Connected segments are joined by extending their outside edges to connect at a single point,
            /// with the effect of filling an additional lozenge-shaped area.
            /// This setting is effected by the miterLimit property.
            /// </summary>
            Miter,

            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        // This is different from CSS' TextAlign in regards of valid options list
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasTextAlign
        {
            /// <summary>
            /// The text is left-aligned.
            /// </summary>
            Left,

            /// <summary>
            /// The text is right-aligned.
            /// </summary>
            Right,

            /// <summary>
            /// The text is centered.
            /// </summary>
            Center,

            /// <summary>
            /// Default. The text is aligned at the normal start of the line (left-aligned for left-to-right locales,
            /// right-aligned for right-to-left locales).
            /// </summary>
            Start,

            /// <summary>
            /// The text is aligned at the normal end of the line (right-aligned for left-to-right locales,
            /// left-aligned for right-to-left locales).
            /// </summary>
            End,

            // FIXME: emit bare null instead of "null"
            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasTextBaselineAlign
        {
            /// <summary>
            /// The text baseline is the top of the em square.
            /// </summary>
            Top,

            /// <summary>
            /// The text baseline is the hanging baseline.
            /// </summary>
            Hanging,

            /// <summary>
            /// The text baseline is the middle of the em square.
            /// </summary>
            Middle,

            /// <summary>
            /// Default. The text baseline is the normal alphabetic baseline.
            /// </summary>
            Alphabetic,

            /// <summary>
            /// The text baseline is the ideographic baseline; this is the bottom of the body of the characters,
            /// if the main body of characters protrudes beneath the alphabetic baseline.
            /// </summary>
            Ideographic,

            /// <summary>
            /// The text baseline is the bottom of the bounding box. This differs from the ideographic baseline
            /// in that the ideographic baseline doesn't consider descenders.
            /// </summary>
            Bottom,

            // FIXME: emit bare null instead of "null"
            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        // This is different from CSS' TextDirection in regards to valid options list
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasTextDirection
        {
            /// <summary>
            /// The text direction is left-to-right.
            /// </summary>
            LtR,

            /// <summary>
            /// The text direction is right-to-left.
            /// </summary>
            RtL,

            /// <summary>
            /// Default. The text direction is inherited from the &lt;canvas> element or the Document as appropriate.
            /// </summary>
            Inherit,

            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        // This is different from CSS' BackgroundRepeat in regards to valid options list
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasRepetitionTypes
        {
            /// <summary>
            /// Default. Repeat in both directions.
            /// </summary>
            Repeat,

            /// <summary>
            /// Repeat in horizontal direction only.
            /// </summary>
            [Name("repeat-x")]
            RepeatX,

            /// <summary>
            /// Repeat in vertical direction only.
            /// </summary>
            [Name("repeat-y")]
            Inherit,

            /// <summary>
            /// Do not repeat neither horizontally nor vertically.
            /// </summary>
            [Name("no-repeat")]
            NoRepeat,

            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }

        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasFillRule
        {
            /// <summary>
            /// Default. The non-zero winding rule.
            /// </summary>
            NonZero,

            /// <summary>
            /// The even-odd winding rule.
            /// </summary>
            EvenOdd
        }
    }
}
