using Bridge;

namespace System
{
    /// <summary>
    /// The URIError object represents an error when a global URI handling function was used in a wrong way.
    /// </summary>
    [External]
    [Name("URIError")]
    [Constructor("URIError")]
    public class URIException : Exception
    {
        public extern URIException();

        public extern URIException(string message);
    }
}