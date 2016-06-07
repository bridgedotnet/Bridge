using Bridge;

namespace System
{
    /// <summary>
    /// Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
    /// </summary>
    [External]
    public class Uri
    {
        public extern Uri(string uriString);

        public extern string AbsoluteUri
        {
            get;
        }
    }
}