namespace Bridge.Html5
{
    /// <summary>
    /// The font-kerning property allows contextual adjustment of inter-glyph spacing, i.e. the spaces between the characters in text. This property controls <bold>metric kerning</bold> - that utilizes adjustment data contained in the font.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum FontKerning
    {
        /// <summary>
        /// Specifies kerning is not applied
        /// </summary>
        None,

        /// <summary>
        /// Specifies kerning is applied. Fonts that do not include kerning data are unaffected by this setting.
        /// </summary>
        Normal,

        /// <summary>
        /// Used to specify kerning is at the discretion of the user agent.
        /// </summary>
        Auto
    }
}
