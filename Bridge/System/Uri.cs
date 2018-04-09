namespace System
{
    /// <summary>
    /// Provides an object representation of a uniform resource identifier (URI) and easy access to the parts of the URI.
    /// </summary>
    [Bridge.Convention(Member = Bridge.ConventionMember.Field | Bridge.ConventionMember.Method, Notation = Bridge.Notation.CamelCase)]
    [Bridge.External]
    [Bridge.Reflectable]
    public class Uri
    {
        public extern Uri(string uriString);

        public extern string AbsoluteUri
        {
            [Bridge.Template("getAbsoluteUri()")]
            get;
        }

        [Bridge.Template("System.Uri.equals({uri1}, {uri2})")]
        public static extern bool operator ==(Uri uri1, Uri uri2);

        [Bridge.Template("System.Uri.notEquals({uri1}, {uri2})")]
        public static extern bool operator !=(Uri uri1, Uri uri2);
    }
}