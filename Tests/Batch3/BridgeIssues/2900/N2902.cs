using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2902 - {0}")]
    public class Bridge2902
    {
        [Test]
        public static void TestStringBuilderIndexerGet()
        {
            int nAlphabeticChars = 0;
            int nWhitespace = 0;
            int nPunctuation = 0;
            StringBuilder sb = new StringBuilder("This is a simple sentence.");

            for (int ctr = 0; ctr < sb.Length; ctr++)
            {
                char ch = sb[ctr];
                if (Char.IsLetter(ch)) { nAlphabeticChars++; continue; }
                if (Char.IsWhiteSpace(ch)) { nWhitespace++; continue; }
                if (Char.IsPunctuation(ch)) nPunctuation++;
            }

            Assert.AreEqual("This is a simple sentence.", sb.ToString());
            Assert.AreEqual(21, nAlphabeticChars);
            Assert.AreEqual(4, nWhitespace);
            Assert.AreEqual(1, nPunctuation);

            Assert.Throws<IndexOutOfRangeException>(() => { Console.WriteLine(sb[100]); });
        }

        [Test]
        public static void TestStringBuilderIndexerSet()
        {
            StringBuilder sb = new StringBuilder("ABC");
            sb[0] = '1';
            sb[1] = '2';
            sb[2] = '3';

            Assert.AreEqual("123", sb.ToString());
            Assert.Throws<ArgumentOutOfRangeException>(() => { sb[3] = '4'; });
        }
    }
}