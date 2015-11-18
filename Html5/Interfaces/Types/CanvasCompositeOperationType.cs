namespace Bridge.Html5
{
    public partial class CanvasTypes
    {
        /// <summary>
        /// Indicates the desired type of compositing operation among the existing ones.
        /// See example effects in https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation
        /// </summary>
        [External]
        [Enum(Emit.StringNameLowerCase)]
        [Name("String")]
        public enum CanvasCompositeOperationType
        {
            /// <summary>
            /// Default. Draws new shapes on top of the existing canvas content.
            /// </summary>
            [Name("source-over")]
            SourceOver,

            /// <summary>
            /// The new shape is drawn only where both the new shape and the destination canvas overlap. Everything else is made transparent.
            /// </summary>
            SourceIn,

            /// <summary>
            /// The new shape is drawn where it doesn't overlap the existing canvas content.
            /// </summary>
            SourceOut,

            /// <summary>
            /// The new shape is only drawn where it overlaps the existing canvas content.
            /// </summary>
            SourceAtop,

            /// <summary>
            /// New shapes are drawn behind the existing canvas content.
            /// </summary>
            DestinationOver,

            /// <summary>
            /// The existing canvas content is kept where both the new shape and existing canvas content overlap. Everything else is made transparent.
            /// </summary>
            DestinationIn,

            /// <summary>
            /// The existing content is kept where it doesn't overlap the new shape.
            /// </summary>
            DestinationOut,

            /// <summary>
            /// The existing canvas is only kept where it overlaps the new shape. The new shape is drawn behind the canvas content.
            /// </summary>
            DestinationAtop,

            /// <summary>
            /// Where both shapes overlap the color is determined by adding color values.
            /// </summary>
            Lighter,

            /// <summary>
            /// Only the existing canvas is present.
            /// </summary>
            Copy,

            /// <summary>
            /// Shapes are made transparent where both overlap and drawn normal everywhere else.
            /// </summary>
            XOr,

            /// <summary>
            /// The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Multiply,

            /// <summary>
            /// The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Screen,

            /// <summary>
            /// A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Overlay,

            /// <summary>
            /// Retains the darkest pixels of both layers.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Darken,

            /// <summary>
            /// Retains the lightest pixels of both layers.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Lighten,

            /// <summary>
            /// Divides the bottom layer by the inverted top layer.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            [Name("color-dodge")]
            ColorDodge,

            /// <summary>
            /// Divides the inverted bottom layer by the top layer, and then inverts the result.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            [Name("color-burn")]
            ColorBurn,

            /// <summary>
            /// A combination of multiply and screen like overlay, but with top and bottom layer swapped.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            [Name("hard-light")]
            HardLight,

            /// <summary>
            /// A softer version of hard-light. Pure black or white does not result in pure black or white.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            [Name("soft-light")]
            SoftLight,

            /// <summary>
            /// Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Difference,

            /// <summary>
            /// Like difference, but with lower contrast.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Exclusion,

            /// <summary>
            /// Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Hue,

            /// <summary>
            /// Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Saturation,

            /// <summary>
            /// Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Color,

            /// <summary>
            /// Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
            /// </summary>
            /// <remarks>Does not work on all browsers</remarks>
            Luminosity,

            // FIXME: emit bare null instead of "null"
            /// <summary>
            /// Clear the value, to revert back to browser's default.
            /// </summary>
            [Template("null")]
            Null
        }
    }
}
