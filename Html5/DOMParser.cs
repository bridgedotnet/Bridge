namespace Bridge.Html5
{
    [External]
    [Name("DOMParser")]
    class DOMParser
    {
        public extern DocumentInstance ParseFromString(string str, string mimeType);
    }
}
