namespace System.Text.RegularExpressions
{
    /// <summary>
    /// Represents the results from a single successful subexpression capture.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class Capture
    {
        internal extern Capture(string text, int i, int l);

        /// <summary>
        /// The position in the original string where the first character of the captured substring is found.
        /// </summary>
        public extern int Index
        {
            [Bridge.Template("getIndex()")]
            get;
        }

        /// <summary>
        /// Gets the length of the captured substring.
        /// </summary>
        public extern int Length
        {
            [Bridge.Template("getLength()")]
            get;
        }

        /// <summary>
        /// Gets the captured substring from the input string.
        /// </summary>
        public extern string Value
        {
            [Bridge.Template("getValue()")]
            get;
        }

        /// <summary>
        /// Retrieves the captured substring from the input string by calling the Value property. (Overrides Object.ToString().)
        /// </summary>
        public extern override string ToString();
    }
}