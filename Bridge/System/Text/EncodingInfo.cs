using Bridge;

namespace System.Text
{
    /// <summary>
    /// Provides basic information about an encoding.
    /// </summary>
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

        /// <summary>
        /// Gets the code page identifier of the encoding.
        /// </summary>
        public int CodePage
        {
            get;
        }

        /// <summary>
        /// Gets the name registered with the Internet Assigned Numbers Authority (IANA) for the encoding.
        /// </summary>
        public string Name
        {
            get;
        }

        /// <summary>
        /// Gets the human-readable description of the encoding.
        /// </summary>
        public string DisplayName
        {
            get;
        }

        /// <summary>
        /// Returns a Encoding object that corresponds to the current EncodingInfo object.
        /// </summary>
        /// <returns>A Encoding object that corresponds to the current EncodingInfo object.</returns>
        public Encoding GetEncoding()
        {
            return System.Text.Encoding.GetEncoding(this.CodePage);
        }

        /// <summary>
        /// Returns the hash code for the current EncodingInfo object.
        /// </summary>
        /// <returns>A 32-bit signed integer hash code.</returns>
        public override int GetHashCode()
        {
            return this.CodePage;
        }

        /// <summary>
        /// Gets a value indicating whether the specified object is equal to the current EncodingInfo object.
        /// </summary>
        /// <param name="o">An object to compare to the current EncodingInfo object.</param>
        /// <returns>true if value is a EncodingInfo object and is equal to the current EncodingInfo object; otherwise, false.</returns>
        public override bool Equals(object o)
        {
            var that = o as EncodingInfo;
            return this.CodePage == that?.CodePage;
        }
    }
}