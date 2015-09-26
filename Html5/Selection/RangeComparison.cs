using Bridge;

namespace Bridge.Html5
{
    /// <summary>
    ///
    /// </summary>
    [Ignore]
    [Enum(Emit.Value)]
    [Name("Number")]
    public enum RangeComparison
    {
        /// <summary>
        /// compares the start boundary-point of sourceRange to the start boundary-point of Range.
        /// </summary>
        StartToStart = 0,

        /// <summary>
        /// compares the start boundary-point of sourceRange to the end boundary-point of Range.
        /// </summary>
        StartToEnd = 1,

        /// <summary>
        /// compares the end boundary-point of sourceRange to the end boundary-point of Range.
        /// </summary>
        EndToEnd = 2,

        /// <summary>
        ///  compares the end boundary-point of sourceRange to the start boundary-point of Range.
        /// </summary>
        EndToStart = 3
    }
}
