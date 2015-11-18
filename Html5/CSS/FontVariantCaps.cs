namespace Bridge.Html5
{
    /// <summary>
    /// The font-variant-caps property allows the selection of alternate glyphs used for small or petite capitals or for titling. These glyphs are specifically designed to blend well with the surrounding normal glyphs, to maintain the weight and readability which suffers when text is simply resized to fit this purpose.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FontVariantCaps
    {
        /// <summary>
        ///
        /// </summary>
        Inherited,

        /// <summary>
        /// None of the features are enabled.
        /// </summary>
        Normal,

        /// <summary>
        /// Enables display of small capitals (OpenType feature: smcp). Small-caps glyphs typically use the form of uppercase letters but are reduced to the size of lowercase letters.
        /// </summary>
        [Name("small-caps")]
        SmallCaps,

        /// <summary>
        /// Enables display of small capitals for both upper and lowercase letters (OpenType features: c2sc, smcp).
        /// </summary>
        [Name("all-small-caps")]
        AllSmallCaps,

        /// <summary>
        /// Enables display of petite capitals (OpenType feature: pcap).
        /// </summary>
        [Name("petite-caps")]
        PetiteCaps,

        /// <summary>
        /// Enables display of petite capitals for both upper and lowercase letters (OpenType features: c2pc, pcap).
        /// </summary>
        [Name("all-petite-caps")]
        AllPetiteCaps,

        /// <summary>
        /// Enables display of mixture of small capitals for uppercase letters with normal lowercase letters (OpenType feature: unic).
        /// </summary>
        Unicase,

        /// <summary>
        /// Enables display of titling capitals (OpenType feature: titl). Uppercase letter glyphs are often designed for use with lowercase letters. When used in all uppercase titling sequences they can appear too strong.
        /// </summary>
        [Name("titling-caps")]
        TitlingCaps
    }
}
