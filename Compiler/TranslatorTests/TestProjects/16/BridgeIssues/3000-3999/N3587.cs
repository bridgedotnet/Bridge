using Bridge;

namespace Test.BridgeIssues.N3587
{
    /// <summary>
    /// #3587 - Ensure that metadata file does not contain syntax errors in
    /// case a class referencing the GlobalMethods attribute is present.
    /// </summary>
    public class N3587
    {
        /// <summary>
        /// Simple class just referencing the attribute. It is expected the
        /// metadata for the file to be valid.
        /// The error that incurred in this test case was because it had an
        /// invalid "td:" field, without any value (not null nor empty).
        /// </summary>
        [Reflectable]
        [GlobalMethods]
        public static class Global
        {
            public class Test
            {
            }
        }
    }
}
