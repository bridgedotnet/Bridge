namespace Bridge.Html5
{
    /// <summary>
    /// The animation-direction CSS property indicates whether the animation should play in reverse on alternate cycles.
    /// </summary>
    [External]
    [Enum(Emit.StringNameLowerCase)]
    [Name("String")]
    public enum AnimationDirection
    {
        /// <summary>
        ///
        /// </summary>
        None,

        /// <summary>
        /// The animation should play forward each cycle. In other words, each time the animation cycles, the animation will reset to the beginning state and start over again. This is the default animation direction setting.
        /// </summary>
        Normal,

        /// <summary>
        /// The animation should reverse direction each cycle. When playing in reverse, the animation steps are performed backward. In addition, timing functions are also reversed; for example, an ease-in animation is replaced with an ease-out animation when played in reverse. The count to determine if it is an even or an odd iteration starts at one.
        /// </summary>
        Reverse,

        /// <summary>
        /// The animation plays backward each cycle. Each time the animation cycles, the animation resets to the end state and start over again.
        /// </summary>
        Alternate,

        /// <summary>
        /// The animation plays backward on the first play-through, then forward on the next, then continues to alternate. The count to determinate if it is an even or an odd iteration starts at one.
        /// </summary>
        [Name("alternate-reverse")]
        AlternateReverse
    }
}
