namespace Bridge.Html5
{
    /// <summary>
    /// The CSS all shorthand property resets all properties, but unicode-bidi and direction to their initial or inherited value.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum All
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// This keyword indicates to change all the properties applying to the element or the element to their initial value. unicode-bidi and direction values are not affected.
        /// </summary>
        Initial,

        /// <summary>
        /// This keyword indicates to change all the properties applying to the element or the element to their parent value if they are inheritable or to their initail value if not. unicode-bidi and direction values are not affected.
        /// </summary>
        Unset,

        /// <summary>
        /// This keyword indicates to change all the properties applying to the element or the element to their parent value. unicode-bidi and direction values are not affected.
        /// </summary>
        Inherit
    }
}
