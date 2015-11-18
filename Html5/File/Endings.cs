namespace Bridge.Html5
{
    /// <summary>
    /// Specifies how strings containing \n are to be written out.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    public enum Endings
    {
        /// <summary>
        /// Endings unchanged
        /// </summary>
        Transparent,

        /// <summary>
        /// Endings changed to match host OS filesystem convention
        /// </summary>
        Native
    }
}
