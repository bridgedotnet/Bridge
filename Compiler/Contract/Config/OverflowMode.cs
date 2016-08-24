namespace Bridge.Contract
{
    /// <summary>
    /// bridge.json setting `overflowMode` to control whether an integer arithmetic statement
    /// that results in a value that is outside the range of the data type,
    /// and that is not in the scope of a `checked` or `unchecked` keyword, causes a run-time exception.
    /// </summary>
    public enum OverflowMode
    {
        /// <summary>
        /// Does not cause a run-time exception.
        /// Value outside of data range is clipped.
        /// </summary>
        Unchecked = 0,

        /// <summary>
        /// Causes a run-time exception. The default setting.
        /// </summary>
        Checked = 1,

        /// <summary>
        /// Does not cause a run-time exception.
        /// Value outside of data range is NOT clipped.
        /// </summary>
        Javascript = 2
    }
}