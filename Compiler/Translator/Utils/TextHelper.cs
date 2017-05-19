using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text.RegularExpressions;
using Bridge.Contract;

namespace Bridge.Translator
{
    public class TextHelper
    {
        public static string NormilizeEols(string text, UnicodeNewline newLine)
        {
            if (string.IsNullOrEmpty(text))
            {
                return text;
            }

            var eol = GetString(newLine);

            text = Regex.Replace(text, @"\r\n|\n\r|\n|\r", eol);

            return text;
        }

        public static string GetString(UnicodeNewline newLine)
        {
            switch (newLine)
            {
                case UnicodeNewline.Unknown:
                case UnicodeNewline.LF:
                    return "\n";
                case UnicodeNewline.CRLF:
                    return "\r\n";
                case UnicodeNewline.CR:
                    return "\r";
                case UnicodeNewline.NEL:
                    return "\u0085";
                case UnicodeNewline.VT:
                    return "\u000B";
                case UnicodeNewline.FF:
                    return "\u000C";
                case UnicodeNewline.LS:
                    return "\u2028";
                case UnicodeNewline.PS:
                    return "\u2029";
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}
