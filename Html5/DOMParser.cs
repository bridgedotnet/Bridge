using System.Collections;
using System.Collections.Generic;

namespace Bridge.Html5
{
    /// <summary>
    /// DOMParser can parse XML or HTML source stored in a string into a DOM Document.
    /// </summary>
    [External]
    [Name("DOMParser")]
    public class DOMParser
    {
        /// <summary>
        /// Constructs a new DOMParser object.
        /// </summary>
        public extern DOMParser();

        /// <summary>
        /// Builds an XMLDocument object from the specified string.
        /// </summary>
        /// <param name="xmlString">String that specifies the contents of the XML file to parse.</param>
        /// <param name="mimeType">String that specifies the content type of the string to parse. Can be one of the following values <see cref="DOMParser.SupportedType"/>.
        /// If type does not match a value in the <see cref="DOMParser.SupportedType"/>, an exception is thrown.
        /// </param>
        /// <returns>Document object contained the parsed content if successful. If not successful, returns a Document describing the error.</returns>
        public extern DocumentInstance ParseFromString(string xmlString, string mimeType);


        /// <summary>
        /// Supported MIME types
        /// </summary>
        [External]
        public static class SupportedType
        {
            /// <summary>
            /// text/html
            /// </summary>
            [InlineConst]
            public const string TextHtml = "text/html";

            /// <summary>
            /// text/xml
            /// </summary>
            [InlineConst]
            public const string TextXml = "text/xml";

            /// <summary>
            /// application/xml
            /// </summary>
            [InlineConst]
            public const string ApplicationXml = "application/xml";


            /// <summary>
            /// application/xhtml+xml
            /// </summary>
            [InlineConst]
            public const string ApplicationXhtmlXml = "application/xhtml+xml";

            /// <summary>
            /// image/svg+xml
            /// </summary>
            [InlineConst]
            public const string ImageSvgXml = "image/svg+xml";
        };
    }
}
