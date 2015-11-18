namespace Bridge.Html5
{
    /// <summary>
    /// The background-blend-mode CSS property describes how a background should blend with the element's background that is below it and the element's background color. Background elements should be blended while content appearance should be kept unchanged.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum BackgroundBlendMode
    {
        /// <summary>
        /// Multiplies the complements of the backdrop and source color values, then complements the result.
        /// </summary>
        Screen,

        /// <summary>
        /// Multiplies or screens the colors, depending on the backdrop color value.
        /// </summary>
        Overlay,

        /// <summary>
        /// Selects the darker of the backdrop and source colors.
        /// </summary>
        Darken,

        /// <summary>
        /// Selects the lighter of the backdrop and source colors.
        /// </summary>
        Lighten,

        /// <summary>
        /// Brightens the backdrop color to reflect the source color
        /// </summary>
        [Name("color-dodge")]
        ColorDodge,

        /// <summary>
        /// Darkens the backdrop color to reflect the source color.
        /// </summary>
        [Name("color-burn")]
        ColorBurn,

        /// <summary>
        /// Multiplies or screens the colors, depending on the source color value.
        /// </summary>
        [Name("hard-light")]
        HardLight,

        /// <summary>
        /// Darkens or lightens the colors, depending on the source color value.
        /// </summary>
        [Name("soft-light")]
        SoftLight,

        /// <summary>
        /// Subtracts the darker of the two constituent colors from the lighter color.
        /// </summary>
        Difference,

        /// <summary>
        /// Produces an effect similar to that of the Difference mode but lower in contrast.
        /// </summary>
        Exclusion,

        /// <summary>
        /// Creates a color with the hue of the source color and the saturation and luminosity of the backdrop color.
        /// </summary>
        Hue,

        /// <summary>
        /// Creates a color with the saturation of the source color and the hue and luminosity of the backdrop color.
        /// </summary>
        Saturation,

        /// <summary>
        /// Creates a color with the hue and saturation of the source color and the luminosity of the backdrop color.
        /// </summary>
        Color,

        /// <summary>
        /// Creates a color with the luminosity of the source color and the hue and saturation of the backdrop color.
        /// </summary>
        Luminosity,

        /// <summary>
        /// This is the default attribute which specifies no blending.
        /// </summary>
        Normal
    }
}
