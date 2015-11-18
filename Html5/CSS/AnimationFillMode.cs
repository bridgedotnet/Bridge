namespace Bridge.Html5
{
    /// <summary>
    /// The animation-fill-mode CSS property specifies how a CSS animation should apply styles to its target before and after it is executing.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum AnimationFillMode
    {
        /// <summary>
        /// The animation will not apply any styles to the target before or after it is executing.
        /// </summary>
        None,

        /// <summary>
        /// The target will retain the computed values set by the last keyframe encountered during execution. The last keyframe encountered depends on the value of animation-direction and animation-iteration-count
        /// </summary>
        Forwards,

        /// <summary>
        /// The animation will apply the values defined in the first relevant keyframe as soon as it is applied to the target, and retain this during the animation-delay period. The first relevant keyframe depends of the value of animation-direction
        /// </summary>
        Backwards,

        /// <summary>
        /// The animation will follow the rules for both forwards and backwards, thus extending the animation properties in both directions.
        /// </summary>
        Both
    }
}
