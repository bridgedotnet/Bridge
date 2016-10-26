using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1964 - {0}")]
    public class Bridge1964
    {
        private static string GetCharCode(string s, bool isLast = true)
        {
            if (s == null)
            {
                return "null";
            }

            if (s.Length < 1)
            {
                return "empty";
            }

            var i = isLast ? s.Length - 1 : 0;

            return s[i].ToString("X");
        }

        [Test]
        public void TestStringIsNullOrWhiteSpaceCase()
        {
            var p = new string[]
                {
                    null,
                    "",
                    ((char)0x0009).ToString(), // Horizontal Tab
                    ((char)0x000A).ToString(), // Line Feed
                    ((char)0x000B).ToString(), // Vertical Tab
                    ((char)0x000C).ToString(), // Form Feed
                    ((char)0x000D).ToString(), // Carriage Return
                    ((char)0x0020).ToString(), // Space
                    ((char)0x0085).ToString(), // Horizontal ellipsis
                    ((char)0x00A0).ToString(), // NO-BREAK SPACE As a space, but often not adjusted
                    ((char)0x1680).ToString(), // OGHAM SPACE MARK Unspecified; usually not really a space but a dash
                    ((char)0x2000).ToString(), // EN QUAD 1 en (= 1/2 em)
                    ((char)0x2001).ToString(), // EM QUAD 1 em (nominally, the height of the font)
                    ((char)0x2002).ToString(), // EN SPACE 1 en (= 1/2 em)
                    ((char)0x2003).ToString(), // EM SPACE 1 em
                    ((char)0x2004).ToString(), // THREE-PER-EM SPACE 1/3 em
                    ((char)0x2005).ToString(), // FOUR-PER-EM SPACE 1/4 em
                    ((char)0x2006).ToString(), // SIX-PER-EM SPACE 1/6 em
                    ((char)0x2007).ToString(), // FIGURE SPACE “Tabular width”, the width of digits
                    ((char)0x2008).ToString(), // PUNCTUATION SPACE The width of a period “.”
                    ((char)0x2009).ToString(), // THIN SPACE 1/5 em (or sometimes 1/6 em)
                    ((char)0x200A).ToString(), // HAIR SPACE Narrower than THIN SPACE
                    ((char)0x202F).ToString(), // NARROW NO-BREAK SPACE Narrower than NO-BREAK SPACE (or SPACE)
                    ((char)0x205F).ToString(), // MEDIUM MATHEMATICAL SPACE 4/18 em
                    ((char)0x3000).ToString()  // IDEOGRAPHIC SPACE The width of ideographic (CJK) characters.
                };

            string s;
            string c;

            for (int i = 0; i < p.Length; i++)
            {
                s = p[i];
                c = GetCharCode(s);
                Assert.True(String.IsNullOrWhiteSpace(s), "White-spaces table 1. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = " " + p[i];
                c = GetCharCode(s);
                Assert.True(String.IsNullOrWhiteSpace(s), "White-spaces table 2. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = p[i] + " ";
                c = GetCharCode(s, false);
                Assert.True(String.IsNullOrWhiteSpace(s), "White-spaces table 3. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = "a" + p[i];
                c = GetCharCode(s);
                Assert.False(String.IsNullOrWhiteSpace(s), "Non white-spaces table 1. Index:" + i + " Char code:" + c);
            }

            for (int i = 0; i < p.Length; i++)
            {
                s = p[i] + "b";
                c = GetCharCode(s, false);
                Assert.False(String.IsNullOrWhiteSpace(s), "Non white-spaces table 2. Index:" + i + " Char code:" + c);
            }
        }
    }
}