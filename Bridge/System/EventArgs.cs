using Bridge;

namespace System
{
    /// <summary>
    /// System.EventArgs is the base class for classes containing event data.
    /// </summary>
    [External]
    [Name("System.Object")]
    public class EventArgs
    {
        /// <summary>
        /// Represents an event with no event data.
        /// </summary>
        [Template("{}")]
        public static readonly EventArgs Empty;

        /// <summary>
        /// Initializes a new instance of the System.EventArgs class.
        /// </summary>
        [Template("{}")]
        public extern EventArgs();
    }
}