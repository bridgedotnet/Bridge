using Bridge;

namespace System.Text
{
    [External]
    [Reflectable]
    public class EncodingInfo : IBridgeClass
    {
        internal extern EncodingInfo(int codePage, string name, string displayName);

        public extern int CodePage { get; }


        public extern string Name { get; }


        public extern string DisplayName { get; }


        public extern Encoding GetEncoding();
    }
}