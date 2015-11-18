namespace Bridge.Html5
{
    /// <summary>
    /// The CSS animation-timing-function property specifies how a CSS animation should progress over the duration of each cycle.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum TimingFunction
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        ///
        /// </summary>
        Ease,

        /// <summary>
        ///
        /// </summary>
        [Name("ease-in")]
        EaseIn,

        /// <summary>
        ///
        /// </summary>
        [Name("ease-out")]
        EaseOut,

        /// <summary>
        ///
        /// </summary>
        [Name("ease-in-out")]
        EaseInOut,

        /// <summary>
        ///
        /// </summary>
        Linear,

        /// <summary>
        ///
        /// </summary>
        [Name("step-start")]
        StepStart,

        /// <summary>
        ///
        /// </summary>
        [Name("step-end")]
        StepEnd
    }
}
