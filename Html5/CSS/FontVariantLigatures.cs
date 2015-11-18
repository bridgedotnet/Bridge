namespace Bridge.Html5
{
    /// <summary>
    ///  font-variant-ligatures is a CSS property to control ligatures in text.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FontVariantLigatures
    {
        /// <summary>
        ///
        /// </summary>
        Inherit,

        /// <summary>
        /// A value of ‘normal’ specifies that common default features are enabled, as described in detail in the next section. For OpenType fonts, common ligatures and contextual forms are on by default, discretionary and historical ligatures are not.
        /// </summary>
        Normal,

        /// <summary>
        /// Specifies that all types of ligatures and contextual forms covered by this property are explicitly disabled. In situations where ligatures are not considered necessary, this may improve the speed of text rendering.
        /// </summary>
        None,

        /// <summary>
        /// Enables display of common ligatures (OpenType features: liga, clig). For OpenType fonts, common ligatures are enabled by default.
        /// </summary>
        [Name("common-ligatures")]
        CommonLigatures,

        /// <summary>
        /// Disables display of common ligatures (OpenType features: liga, clig).
        /// </summary>
        [Name("no-common-ligatures")]
        NoCommonLigatures,

        /// <summary>
        /// Enables display of discretionary ligatures (OpenType feature: dlig). Which ligatures are discretionary or optional is decided by the type designer, so authors will need to refer to the documentation of a given font to understand which ligatures are considered discretionary.
        /// </summary>
        [Name("discretionary-ligatures")]
        DiscretionaryLigatures,

        /// <summary>
        /// Disables display of discretionary ligatures (OpenType feature: dlig).
        /// </summary>
        [Name("no-discretionary-ligatures")]
        NoDiscretionaryLigatures,

        /// <summary>
        /// Enables display of historical ligatures (OpenType feature: hlig).
        /// </summary>
        [Name("historical-ligatures")]
        HistoricalLigatures,

        /// <summary>
        /// Disables display of historical ligatures (OpenType feature: hlig).
        /// </summary>
        [Name("no-historical-ligatures")]
        NoHistoricalLigatures,

        /// <summary>
        /// Enables display of contextual alternates (OpenType feature: calt). Although not strictly a ligature feature, like ligatures this feature is commonly used to harmonize the shapes of glyphs with the surrounding context. For OpenType fonts, this feature is on by default.
        /// </summary>
        Contextual,

        /// <summary>
        /// Disables display of contextual alternates (OpenType feature: calt).
        /// </summary>
        [Name("no-contextual")]
        NoContextual
    }
}
