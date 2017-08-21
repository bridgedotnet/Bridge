using Bridge;

namespace System.Text
{
    [Reflectable]
    [FileName("system\\text\\encoding.js")]
    public sealed class EncodingInfo
    {
        internal EncodingInfo(int codePage, string name, string displayName)
        {
            this.CodePage = codePage;
            this.Name = name;
            this.DisplayName = displayName ?? name;
        }

        public int CodePage
        {
            get;
        }

        public string Name
        {
            get;
        }

        public string DisplayName
        {
            get;
        }

        public Encoding GetEncoding()
        {
            return System.Text.Encoding.GetEncoding(this.CodePage);
        }

        public override int GetHashCode()
        {
            return this.CodePage;
        }

        public override bool Equals(object o)
        {
            var that = o as EncodingInfo;
            return this.CodePage == that?.CodePage;
        }
    }
}