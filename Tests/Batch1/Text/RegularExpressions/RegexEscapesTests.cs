using System;
using Bridge.Test;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Escapes - {0}")]
    public class RegexEscapesTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnBellCharTest()
        {
            const string pattern = @"\a";
            const string text = "Error!\a";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 6, 1, "\u0007", 1, true);

            ValidateGroup(m, 0, 6, 1, true, "\u0007", 1);
            ValidateCapture(m, 0, 0, 6, 1, "\u0007");
        }

        [Test]
        public void MsdnBackspaceCharTest()
        {
            const string pattern = @"[\b]{3,}";
            const string text = "\b\b\b\b";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "\b\b\b\b", 1, true);

            ValidateGroup(m, 0, 0, 4, true, "\b\b\b\b", 1);
            ValidateCapture(m, 0, 0, 0, 4, "\b\b\b\b");
        }

        [Test]
        public void MsdnTabCharTest()
        {
            const string pattern = @"(\w+)\t";
            const string text = "item1\titem2\t";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 6, "item1\t", 2, true);

            ValidateGroup(ms[0], 0, 0, 6, true, "item1\t", 1);
            ValidateCapture(ms[0], 0, 0, 0, 6, "item1\t");

            ValidateGroup(ms[0], 1, 0, 5, true, "item1", 1);
            ValidateCapture(ms[0], 1, 0, 0, 5, "item1");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 6, 6, "item2\t", 2, true);

            ValidateGroup(ms[1], 0, 6, 6, true, "item2\t", 1);
            ValidateCapture(ms[1], 0, 0, 6, 6, "item2\t");

            ValidateGroup(ms[1], 1, 6, 5, true, "item2", 1);
            ValidateCapture(ms[1], 1, 0, 6, 5, "item2");
        }

        [Test]
        public void MsdnCarriageRetCharTest()
        {
            const string pattern = @"\r\n(\w+)";
            const string text = "\r\nThese are\ntwo lines.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "\r\nThese", 2, true);

            ValidateGroup(m, 0, 0, 7, true, "\r\nThese", 1);
            ValidateCapture(m, 0, 0, 0, 7, "\r\nThese");

            ValidateGroup(m, 1, 2, 5, true, "These", 1);
            ValidateCapture(m, 1, 0, 2, 5, "These");
        }

        [Test]
        public void MsdnVerticalTabCharTest()
        {
            const string pattern = @"[\v]{2,}";
            const string text = "\v\v\v";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "\v\v\v", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "\v\v\v", 1);
            ValidateCapture(m, 0, 0, 0, 3, "\v\v\v");
        }

        [Test]
        public void MsdnFormFeedCharTest()
        {
            const string pattern = @"[\f]{2,}";
            const string text = "\f\f\f";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "\u000C\u000C\u000C", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "\u000C\u000C\u000C", 1);
            ValidateCapture(m, 0, 0, 0, 3, "\u000C\u000C\u000C");
        }

        [Test]
        public void MsdnNewLineCharTest()
        {
            const string pattern = @"\r\n(\w+)";
            const string text = "\r\nThese are\ntwo lines.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "\r\nThese", 2, true);

            ValidateGroup(m, 0, 0, 7, true, "\r\nThese", 1);
            ValidateCapture(m, 0, 0, 0, 7, "\r\nThese");

            ValidateGroup(m, 1, 2, 5, true, "These", 1);
            ValidateCapture(m, 1, 0, 2, 5, "These");
        }

        [Test]
        public void MsdnEscapeCharTest()
        {
            const string pattern = @"\e";
            const string text = "\x001B";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 1, "\x001B", 1, true);

            ValidateGroup(m, 0, 0, 1, true, "\x001B", 1);
            ValidateCapture(m, 0, 0, 0, 1, "\x001B");
        }

        [Test]
        public void MsdnOctalEscapeTest()
        {
            const string pattern = @"\w\040\w";
            const string text = "a bc d";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "a b", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "a b", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "a b");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 3, "c d", 1, true);

            ValidateGroup(ms[1], 0, 3, 3, true, "c d", 1);
            ValidateCapture(ms[1], 0, 0, 3, 3, "c d");
        }

        [Test]
        public void MsdnHexEscapeTest()
        {
            const string pattern = @"\w\x20\w";
            const string text = "a bc d";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "a b", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "a b", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "a b");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 3, "c d", 1, true);

            ValidateGroup(ms[1], 0, 3, 3, true, "c d", 1);
            ValidateCapture(ms[1], 0, 0, 3, 3, "c d");
        }

        [Test]
        public void MsdnAsciiEscapeTest()
        {
            const string pattern = @"\cC";
            const string text = "Test\u0003";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 1, "\u0003", 1, true);

            ValidateGroup(m, 0, 4, 1, true, "\u0003", 1);
            ValidateCapture(m, 0, 0, 4, 1, "\u0003");
        }

        [Test]
        public void MsdnUnicodeEscapeTest()
        {
            const string pattern = @"\w\u0020\w";
            const string text = "a bc d";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "a b", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "a b", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "a b");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 3, "c d", 1, true);

            ValidateGroup(ms[1], 0, 3, 3, true, "c d", 1);
            ValidateCapture(ms[1], 0, 0, 3, 3, "c d");
        }

        [Test]
        public void MsdnSpecialEscapesTest()
        {
            const string pattern = @"\d+[\+-x\*]\d+";
            const string text = "(2+2) * 3*9";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 1, 3, "2+2", 1, true);

            ValidateGroup(ms[0], 0, 1, 3, true, "2+2", 1);
            ValidateCapture(ms[0], 0, 0, 1, 3, "2+2");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 3, "3*9", 1, true);

            ValidateGroup(ms[1], 0, 8, 3, true, "3*9", 1);
            ValidateCapture(ms[1], 0, 0, 8, 3, "3*9");
        }

        [Test]
        public void MsdnCharEscapesExampleTest()
        {
            const string pattern = @"\G(.+)[\t\u007c](.+)\r?\n";
            const string text = "Mumbai, India|13,922,125\t\nShanghai, China\t13,831,900\nKarachi, Pakistan|12,991,000\nDelhi, India\t12,259,230\nIstanbul, Turkey|11,372,613\n";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 26, "Mumbai, India|13,922,125\t\n", 3, true);

            ValidateGroup(ms[0], 0, 0, 26, true, "Mumbai, India|13,922,125\t\n", 1);
            ValidateCapture(ms[0], 0, 0, 0, 26, "Mumbai, India|13,922,125\t\n");

            ValidateGroup(ms[0], 1, 0, 13, true, "Mumbai, India", 1);
            ValidateCapture(ms[0], 1, 0, 0, 13, "Mumbai, India");

            ValidateGroup(ms[0], 2, 14, 11, true, "13,922,125\t", 1);
            ValidateCapture(ms[0], 2, 0, 14, 11, "13,922,125\t");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 26, 27, "Shanghai, China\t13,831,900\n", 3, true);

            ValidateGroup(ms[1], 0, 26, 27, true, "Shanghai, China\t13,831,900\n", 1);
            ValidateCapture(ms[1], 0, 0, 26, 27, "Shanghai, China\t13,831,900\n");

            ValidateGroup(ms[1], 1, 26, 15, true, "Shanghai, China", 1);
            ValidateCapture(ms[1], 1, 0, 26, 15, "Shanghai, China");

            ValidateGroup(ms[1], 2, 42, 10, true, "13,831,900", 1);
            ValidateCapture(ms[1], 2, 0, 42, 10, "13,831,900");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 53, 29, "Karachi, Pakistan|12,991,000\n", 3, true);

            ValidateGroup(ms[2], 0, 53, 29, true, "Karachi, Pakistan|12,991,000\n", 1);
            ValidateCapture(ms[2], 0, 0, 53, 29, "Karachi, Pakistan|12,991,000\n");

            ValidateGroup(ms[2], 1, 53, 17, true, "Karachi, Pakistan", 1);
            ValidateCapture(ms[2], 1, 0, 53, 17, "Karachi, Pakistan");

            ValidateGroup(ms[2], 2, 71, 10, true, "12,991,000", 1);
            ValidateCapture(ms[2], 2, 0, 71, 10, "12,991,000");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 82, 24, "Delhi, India\t12,259,230\n", 3, true);

            ValidateGroup(ms[3], 0, 82, 24, true, "Delhi, India\t12,259,230\n", 1);
            ValidateCapture(ms[3], 0, 0, 82, 24, "Delhi, India\t12,259,230\n");

            ValidateGroup(ms[3], 1, 82, 12, true, "Delhi, India", 1);
            ValidateCapture(ms[3], 1, 0, 82, 12, "Delhi, India");

            ValidateGroup(ms[3], 2, 95, 10, true, "12,259,230", 1);
            ValidateCapture(ms[3], 2, 0, 95, 10, "12,259,230");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 106, 28, "Istanbul, Turkey|11,372,613\n", 3, true);

            ValidateGroup(ms[4], 0, 106, 28, true, "Istanbul, Turkey|11,372,613\n", 1);
            ValidateCapture(ms[4], 0, 0, 106, 28, "Istanbul, Turkey|11,372,613\n");

            ValidateGroup(ms[4], 1, 106, 16, true, "Istanbul, Turkey", 1);
            ValidateCapture(ms[4], 1, 0, 106, 16, "Istanbul, Turkey");

            ValidateGroup(ms[4], 2, 123, 10, true, "11,372,613", 1);
            ValidateCapture(ms[4], 2, 0, 123, 10, "11,372,613");
        }

        #endregion MSDN

        [Test]
        public void CharEscapesTest()
        {
            //NOTE: \b is excluded as it somehow affects the expected result.

            const string pattern = @"(\a|\t|\r|\v|\f|\n|\e|\115|\x4e|\cC|\u004b)+";
            const string text = "\a, \t, \r, \v, \f, \n, \u001B, N, M, \u0003, K";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(11, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "\a", 2, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "\a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "\a");

            ValidateGroup(ms[0], 1, 0, 1, true, "\a", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "\a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "\t", 2, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "\t", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "\t");

            ValidateGroup(ms[1], 1, 3, 1, true, "\t", 1);
            ValidateCapture(ms[1], 1, 0, 3, 1, "\t");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 6, 1, "\r", 2, true);

            ValidateGroup(ms[2], 0, 6, 1, true, "\r", 1);
            ValidateCapture(ms[2], 0, 0, 6, 1, "\r");

            ValidateGroup(ms[2], 1, 6, 1, true, "\r", 1);
            ValidateCapture(ms[2], 1, 0, 6, 1, "\r");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 9, 1, "\v", 2, true);

            ValidateGroup(ms[3], 0, 9, 1, true, "\v", 1);
            ValidateCapture(ms[3], 0, 0, 9, 1, "\v");

            ValidateGroup(ms[3], 1, 9, 1, true, "\v", 1);
            ValidateCapture(ms[3], 1, 0, 9, 1, "\v");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 12, 1, "\f", 2, true);

            ValidateGroup(ms[4], 0, 12, 1, true, "\f", 1);
            ValidateCapture(ms[4], 0, 0, 12, 1, "\f");

            ValidateGroup(ms[4], 1, 12, 1, true, "\f", 1);
            ValidateCapture(ms[4], 1, 0, 12, 1, "\f");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 15, 1, "\n", 2, true);

            ValidateGroup(ms[5], 0, 15, 1, true, "\n", 1);
            ValidateCapture(ms[5], 0, 0, 15, 1, "\n");

            ValidateGroup(ms[5], 1, 15, 1, true, "\n", 1);
            ValidateCapture(ms[5], 1, 0, 15, 1, "\n");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 18, 1, "\u001B", 2, true);

            ValidateGroup(ms[6], 0, 18, 1, true, "\u001B", 1);
            ValidateCapture(ms[6], 0, 0, 18, 1, "\u001B");

            ValidateGroup(ms[6], 1, 18, 1, true, "\u001B", 1);
            ValidateCapture(ms[6], 1, 0, 18, 1, "\u001B");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 21, 1, "N", 2, true);

            ValidateGroup(ms[7], 0, 21, 1, true, "N", 1);
            ValidateCapture(ms[7], 0, 0, 21, 1, "N");

            ValidateGroup(ms[7], 1, 21, 1, true, "N", 1);
            ValidateCapture(ms[7], 1, 0, 21, 1, "N");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 24, 1, "M", 2, true);

            ValidateGroup(ms[8], 0, 24, 1, true, "M", 1);
            ValidateCapture(ms[8], 0, 0, 24, 1, "M");

            ValidateGroup(ms[8], 1, 24, 1, true, "M", 1);
            ValidateCapture(ms[8], 1, 0, 24, 1, "M");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 27, 1, "\u0003", 2, true);

            ValidateGroup(ms[9], 0, 27, 1, true, "\u0003", 1);
            ValidateCapture(ms[9], 0, 0, 27, 1, "\u0003");

            ValidateGroup(ms[9], 1, 27, 1, true, "\u0003", 1);
            ValidateCapture(ms[9], 1, 0, 27, 1, "\u0003");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 30, 1, "K", 2, true);

            ValidateGroup(ms[10], 0, 30, 1, true, "K", 1);
            ValidateCapture(ms[10], 0, 0, 30, 1, "K");

            ValidateGroup(ms[10], 1, 30, 1, true, "K", 1);
            ValidateCapture(ms[10], 1, 0, 30, 1, "K");
        }

        [Test]
        public void RangeWithCharEscapesTest()
        {
            const string pattern = @"([\a\b\t\r\v\f\n\e\115\x4e\cC\u004b])+";
            const string text = "\a, \b, \t, \r, \v, \f, \n, \u001B, N, M, \u0003, K";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(12, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "\a", 2, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "\a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "\a");

            ValidateGroup(ms[0], 1, 0, 1, true, "\a", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "\a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "\b", 2, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "\b", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "\b");

            ValidateGroup(ms[1], 1, 3, 1, true, "\b", 1);
            ValidateCapture(ms[1], 1, 0, 3, 1, "\b");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 6, 1, "\t", 2, true);

            ValidateGroup(ms[2], 0, 6, 1, true, "\t", 1);
            ValidateCapture(ms[2], 0, 0, 6, 1, "\t");

            ValidateGroup(ms[2], 1, 6, 1, true, "\t", 1);
            ValidateCapture(ms[2], 1, 0, 6, 1, "\t");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 9, 1, "\r", 2, true);

            ValidateGroup(ms[3], 0, 9, 1, true, "\r", 1);
            ValidateCapture(ms[3], 0, 0, 9, 1, "\r");

            ValidateGroup(ms[3], 1, 9, 1, true, "\r", 1);
            ValidateCapture(ms[3], 1, 0, 9, 1, "\r");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 12, 1, "\v", 2, true);

            ValidateGroup(ms[4], 0, 12, 1, true, "\v", 1);
            ValidateCapture(ms[4], 0, 0, 12, 1, "\v");

            ValidateGroup(ms[4], 1, 12, 1, true, "\v", 1);
            ValidateCapture(ms[4], 1, 0, 12, 1, "\v");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 15, 1, "\f", 2, true);

            ValidateGroup(ms[5], 0, 15, 1, true, "\f", 1);
            ValidateCapture(ms[5], 0, 0, 15, 1, "\f");

            ValidateGroup(ms[5], 1, 15, 1, true, "\f", 1);
            ValidateCapture(ms[5], 1, 0, 15, 1, "\f");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 18, 1, "\n", 2, true);

            ValidateGroup(ms[6], 0, 18, 1, true, "\n", 1);
            ValidateCapture(ms[6], 0, 0, 18, 1, "\n");

            ValidateGroup(ms[6], 1, 18, 1, true, "\n", 1);
            ValidateCapture(ms[6], 1, 0, 18, 1, "\n");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 21, 1, "\u001B", 2, true);

            ValidateGroup(ms[7], 0, 21, 1, true, "\u001B", 1);
            ValidateCapture(ms[7], 0, 0, 21, 1, "\u001B");

            ValidateGroup(ms[7], 1, 21, 1, true, "\u001B", 1);
            ValidateCapture(ms[7], 1, 0, 21, 1, "\u001B");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 24, 1, "N", 2, true);

            ValidateGroup(ms[8], 0, 24, 1, true, "N", 1);
            ValidateCapture(ms[8], 0, 0, 24, 1, "N");

            ValidateGroup(ms[8], 1, 24, 1, true, "N", 1);
            ValidateCapture(ms[8], 1, 0, 24, 1, "N");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 27, 1, "M", 2, true);

            ValidateGroup(ms[9], 0, 27, 1, true, "M", 1);
            ValidateCapture(ms[9], 0, 0, 27, 1, "M");

            ValidateGroup(ms[9], 1, 27, 1, true, "M", 1);
            ValidateCapture(ms[9], 1, 0, 27, 1, "M");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 30, 1, "\u0003", 2, true);

            ValidateGroup(ms[10], 0, 30, 1, true, "\u0003", 1);
            ValidateCapture(ms[10], 0, 0, 30, 1, "\u0003");

            ValidateGroup(ms[10], 1, 30, 1, true, "\u0003", 1);
            ValidateCapture(ms[10], 1, 0, 30, 1, "\u0003");

            // Match #11:
            Assert.NotNull(ms[11], "Match[11] is not null.");
            ValidateMatch(ms[11], 33, 1, "K", 2, true);

            ValidateGroup(ms[11], 0, 33, 1, true, "K", 1);
            ValidateCapture(ms[11], 0, 0, 33, 1, "K");

            ValidateGroup(ms[11], 1, 33, 1, true, "K", 1);
            ValidateCapture(ms[11], 1, 0, 33, 1, "K");
        }

        [Test]
        public void ControlCharsTestUpperTest()
        {
            const string pattern = @"[\c@\cA\cB\cC\cD\cE\cF\cG\cH\cI\cJ\cK\cL\cM\cN\cO\cP\cQ\cR\cS\cT\cU\cV\cW\cX\cY\cZ\c[\c\\c]\c^\c_]";
            const string text = "\u0000, \u0001, \u0002, \u0003, \u0004, \u0005, \u0006, \u0007, \u0008, \u0009, \u000A, \u000B, \u000C, \u000D, \u000E, \u000F, \u0010, \u0011, \u0012, \u0013, \u0014, \u0015, \u0016, \u0017, \u0018, \u0019, \u001A, \u001B, \u001C, \u001D, \u001E, \u001F";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(32, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "\u0000", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "\u0000", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "\u0000");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "\u0001", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "\u0001", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "\u0001");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 6, 1, "\u0002", 1, true);

            ValidateGroup(ms[2], 0, 6, 1, true, "\u0002", 1);
            ValidateCapture(ms[2], 0, 0, 6, 1, "\u0002");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 9, 1, "\u0003", 1, true);

            ValidateGroup(ms[3], 0, 9, 1, true, "\u0003", 1);
            ValidateCapture(ms[3], 0, 0, 9, 1, "\u0003");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 12, 1, "\u0004", 1, true);

            ValidateGroup(ms[4], 0, 12, 1, true, "\u0004", 1);
            ValidateCapture(ms[4], 0, 0, 12, 1, "\u0004");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 15, 1, "\u0005", 1, true);

            ValidateGroup(ms[5], 0, 15, 1, true, "\u0005", 1);
            ValidateCapture(ms[5], 0, 0, 15, 1, "\u0005");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 18, 1, "\u0006", 1, true);

            ValidateGroup(ms[6], 0, 18, 1, true, "\u0006", 1);
            ValidateCapture(ms[6], 0, 0, 18, 1, "\u0006");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 21, 1, "\u0007", 1, true);

            ValidateGroup(ms[7], 0, 21, 1, true, "\u0007", 1);
            ValidateCapture(ms[7], 0, 0, 21, 1, "\u0007");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 24, 1, "\u0008", 1, true);

            ValidateGroup(ms[8], 0, 24, 1, true, "\u0008", 1);
            ValidateCapture(ms[8], 0, 0, 24, 1, "\u0008");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 27, 1, "\u0009", 1, true);

            ValidateGroup(ms[9], 0, 27, 1, true, "\u0009", 1);
            ValidateCapture(ms[9], 0, 0, 27, 1, "\u0009");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 30, 1, "\u000A", 1, true);

            ValidateGroup(ms[10], 0, 30, 1, true, "\u000A", 1);
            ValidateCapture(ms[10], 0, 0, 30, 1, "\u000A");

            // Match #11:
            Assert.NotNull(ms[11], "Match[11] is not null.");
            ValidateMatch(ms[11], 33, 1, "\u000B", 1, true);

            ValidateGroup(ms[11], 0, 33, 1, true, "\u000B", 1);
            ValidateCapture(ms[11], 0, 0, 33, 1, "\u000B");

            // Match #12:
            Assert.NotNull(ms[12], "Match[12] is not null.");
            ValidateMatch(ms[12], 36, 1, "\u000C", 1, true);

            ValidateGroup(ms[12], 0, 36, 1, true, "\u000C", 1);
            ValidateCapture(ms[12], 0, 0, 36, 1, "\u000C");

            // Match #13:
            Assert.NotNull(ms[13], "Match[13] is not null.");
            ValidateMatch(ms[13], 39, 1, "\u000D", 1, true);

            ValidateGroup(ms[13], 0, 39, 1, true, "\u000D", 1);
            ValidateCapture(ms[13], 0, 0, 39, 1, "\u000D");

            // Match #14:
            Assert.NotNull(ms[14], "Match[14] is not null.");
            ValidateMatch(ms[14], 42, 1, "\u000E", 1, true);

            ValidateGroup(ms[14], 0, 42, 1, true, "\u000E", 1);
            ValidateCapture(ms[14], 0, 0, 42, 1, "\u000E");

            // Match #15:
            Assert.NotNull(ms[15], "Match[15] is not null.");
            ValidateMatch(ms[15], 45, 1, "\u000F", 1, true);

            ValidateGroup(ms[15], 0, 45, 1, true, "\u000F", 1);
            ValidateCapture(ms[15], 0, 0, 45, 1, "\u000F");

            // Match #16:
            Assert.NotNull(ms[16], "Match[16] is not null.");
            ValidateMatch(ms[16], 48, 1, "\u0010", 1, true);

            ValidateGroup(ms[16], 0, 48, 1, true, "\u0010", 1);
            ValidateCapture(ms[16], 0, 0, 48, 1, "\u0010");

            // Match #17:
            Assert.NotNull(ms[17], "Match[17] is not null.");
            ValidateMatch(ms[17], 51, 1, "\u0011", 1, true);

            ValidateGroup(ms[17], 0, 51, 1, true, "\u0011", 1);
            ValidateCapture(ms[17], 0, 0, 51, 1, "\u0011");

            // Match #18:
            Assert.NotNull(ms[18], "Match[18] is not null.");
            ValidateMatch(ms[18], 54, 1, "\u0012", 1, true);

            ValidateGroup(ms[18], 0, 54, 1, true, "\u0012", 1);
            ValidateCapture(ms[18], 0, 0, 54, 1, "\u0012");

            // Match #19:
            Assert.NotNull(ms[19], "Match[19] is not null.");
            ValidateMatch(ms[19], 57, 1, "\u0013", 1, true);

            ValidateGroup(ms[19], 0, 57, 1, true, "\u0013", 1);
            ValidateCapture(ms[19], 0, 0, 57, 1, "\u0013");

            // Match #20:
            Assert.NotNull(ms[20], "Match[20] is not null.");
            ValidateMatch(ms[20], 60, 1, "\u0014", 1, true);

            ValidateGroup(ms[20], 0, 60, 1, true, "\u0014", 1);
            ValidateCapture(ms[20], 0, 0, 60, 1, "\u0014");

            // Match #21:
            Assert.NotNull(ms[21], "Match[21] is not null.");
            ValidateMatch(ms[21], 63, 1, "\u0015", 1, true);

            ValidateGroup(ms[21], 0, 63, 1, true, "\u0015", 1);
            ValidateCapture(ms[21], 0, 0, 63, 1, "\u0015");

            // Match #22:
            Assert.NotNull(ms[22], "Match[22] is not null.");
            ValidateMatch(ms[22], 66, 1, "\u0016", 1, true);

            ValidateGroup(ms[22], 0, 66, 1, true, "\u0016", 1);
            ValidateCapture(ms[22], 0, 0, 66, 1, "\u0016");

            // Match #23:
            Assert.NotNull(ms[23], "Match[23] is not null.");
            ValidateMatch(ms[23], 69, 1, "\u0017", 1, true);

            ValidateGroup(ms[23], 0, 69, 1, true, "\u0017", 1);
            ValidateCapture(ms[23], 0, 0, 69, 1, "\u0017");

            // Match #24:
            Assert.NotNull(ms[24], "Match[24] is not null.");
            ValidateMatch(ms[24], 72, 1, "\u0018", 1, true);

            ValidateGroup(ms[24], 0, 72, 1, true, "\u0018", 1);
            ValidateCapture(ms[24], 0, 0, 72, 1, "\u0018");

            // Match #25:
            Assert.NotNull(ms[25], "Match[25] is not null.");
            ValidateMatch(ms[25], 75, 1, "\u0019", 1, true);

            ValidateGroup(ms[25], 0, 75, 1, true, "\u0019", 1);
            ValidateCapture(ms[25], 0, 0, 75, 1, "\u0019");

            // Match #26:
            Assert.NotNull(ms[26], "Match[26] is not null.");
            ValidateMatch(ms[26], 78, 1, "\u001A", 1, true);

            ValidateGroup(ms[26], 0, 78, 1, true, "\u001A", 1);
            ValidateCapture(ms[26], 0, 0, 78, 1, "\u001A");

            // Match #27:
            Assert.NotNull(ms[27], "Match[27] is not null.");
            ValidateMatch(ms[27], 81, 1, "\u001B", 1, true);

            ValidateGroup(ms[27], 0, 81, 1, true, "\u001B", 1);
            ValidateCapture(ms[27], 0, 0, 81, 1, "\u001B");

            // Match #28:
            Assert.NotNull(ms[28], "Match[28] is not null.");
            ValidateMatch(ms[28], 84, 1, "\u001C", 1, true);

            ValidateGroup(ms[28], 0, 84, 1, true, "\u001C", 1);
            ValidateCapture(ms[28], 0, 0, 84, 1, "\u001C");

            // Match #29:
            Assert.NotNull(ms[29], "Match[29] is not null.");
            ValidateMatch(ms[29], 87, 1, "\u001D", 1, true);

            ValidateGroup(ms[29], 0, 87, 1, true, "\u001D", 1);
            ValidateCapture(ms[29], 0, 0, 87, 1, "\u001D");

            // Match #30:
            Assert.NotNull(ms[30], "Match[30] is not null.");
            ValidateMatch(ms[30], 90, 1, "\u001E", 1, true);

            ValidateGroup(ms[30], 0, 90, 1, true, "\u001E", 1);
            ValidateCapture(ms[30], 0, 0, 90, 1, "\u001E");

            // Match #31:
            Assert.NotNull(ms[31], "Match[31] is not null.");
            ValidateMatch(ms[31], 93, 1, "\u001F", 1, true);

            ValidateGroup(ms[31], 0, 93, 1, true, "\u001F", 1);
            ValidateCapture(ms[31], 0, 0, 93, 1, "\u001F");
        }

        [Test]
        public void ControlCharsTestLowerTest()
        {
            const string pattern = @"[\c@\ca\cb\cc\cd\ce\cf\cg\ch\ci\cj\ck\cl\cm\cn\co\cp\cq\cr\cs\ct\cu\cv\cw\cx\cy\cz\c[\c\\c]\c^\c_]";
            const string text = "\u0000, \u0001, \u0002, \u0003, \u0004, \u0005, \u0006, \u0007, \u0008, \u0009, \u000A, \u000B, \u000C, \u000D, \u000E, \u000F, \u0010, \u0011, \u0012, \u0013, \u0014, \u0015, \u0016, \u0017, \u0018, \u0019, \u001A, \u001B, \u001C, \u001D, \u001E, \u001F";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(32, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "\u0000", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "\u0000", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "\u0000");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "\u0001", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "\u0001", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "\u0001");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 6, 1, "\u0002", 1, true);

            ValidateGroup(ms[2], 0, 6, 1, true, "\u0002", 1);
            ValidateCapture(ms[2], 0, 0, 6, 1, "\u0002");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 9, 1, "\u0003", 1, true);

            ValidateGroup(ms[3], 0, 9, 1, true, "\u0003", 1);
            ValidateCapture(ms[3], 0, 0, 9, 1, "\u0003");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 12, 1, "\u0004", 1, true);

            ValidateGroup(ms[4], 0, 12, 1, true, "\u0004", 1);
            ValidateCapture(ms[4], 0, 0, 12, 1, "\u0004");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 15, 1, "\u0005", 1, true);

            ValidateGroup(ms[5], 0, 15, 1, true, "\u0005", 1);
            ValidateCapture(ms[5], 0, 0, 15, 1, "\u0005");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 18, 1, "\u0006", 1, true);

            ValidateGroup(ms[6], 0, 18, 1, true, "\u0006", 1);
            ValidateCapture(ms[6], 0, 0, 18, 1, "\u0006");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 21, 1, "\u0007", 1, true);

            ValidateGroup(ms[7], 0, 21, 1, true, "\u0007", 1);
            ValidateCapture(ms[7], 0, 0, 21, 1, "\u0007");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 24, 1, "\u0008", 1, true);

            ValidateGroup(ms[8], 0, 24, 1, true, "\u0008", 1);
            ValidateCapture(ms[8], 0, 0, 24, 1, "\u0008");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 27, 1, "\u0009", 1, true);

            ValidateGroup(ms[9], 0, 27, 1, true, "\u0009", 1);
            ValidateCapture(ms[9], 0, 0, 27, 1, "\u0009");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 30, 1, "\u000A", 1, true);

            ValidateGroup(ms[10], 0, 30, 1, true, "\u000A", 1);
            ValidateCapture(ms[10], 0, 0, 30, 1, "\u000A");

            // Match #11:
            Assert.NotNull(ms[11], "Match[11] is not null.");
            ValidateMatch(ms[11], 33, 1, "\u000B", 1, true);

            ValidateGroup(ms[11], 0, 33, 1, true, "\u000B", 1);
            ValidateCapture(ms[11], 0, 0, 33, 1, "\u000B");

            // Match #12:
            Assert.NotNull(ms[12], "Match[12] is not null.");
            ValidateMatch(ms[12], 36, 1, "\u000C", 1, true);

            ValidateGroup(ms[12], 0, 36, 1, true, "\u000C", 1);
            ValidateCapture(ms[12], 0, 0, 36, 1, "\u000C");

            // Match #13:
            Assert.NotNull(ms[13], "Match[13] is not null.");
            ValidateMatch(ms[13], 39, 1, "\u000D", 1, true);

            ValidateGroup(ms[13], 0, 39, 1, true, "\u000D", 1);
            ValidateCapture(ms[13], 0, 0, 39, 1, "\u000D");

            // Match #14:
            Assert.NotNull(ms[14], "Match[14] is not null.");
            ValidateMatch(ms[14], 42, 1, "\u000E", 1, true);

            ValidateGroup(ms[14], 0, 42, 1, true, "\u000E", 1);
            ValidateCapture(ms[14], 0, 0, 42, 1, "\u000E");

            // Match #15:
            Assert.NotNull(ms[15], "Match[15] is not null.");
            ValidateMatch(ms[15], 45, 1, "\u000F", 1, true);

            ValidateGroup(ms[15], 0, 45, 1, true, "\u000F", 1);
            ValidateCapture(ms[15], 0, 0, 45, 1, "\u000F");

            // Match #16:
            Assert.NotNull(ms[16], "Match[16] is not null.");
            ValidateMatch(ms[16], 48, 1, "\u0010", 1, true);

            ValidateGroup(ms[16], 0, 48, 1, true, "\u0010", 1);
            ValidateCapture(ms[16], 0, 0, 48, 1, "\u0010");

            // Match #17:
            Assert.NotNull(ms[17], "Match[17] is not null.");
            ValidateMatch(ms[17], 51, 1, "\u0011", 1, true);

            ValidateGroup(ms[17], 0, 51, 1, true, "\u0011", 1);
            ValidateCapture(ms[17], 0, 0, 51, 1, "\u0011");

            // Match #18:
            Assert.NotNull(ms[18], "Match[18] is not null.");
            ValidateMatch(ms[18], 54, 1, "\u0012", 1, true);

            ValidateGroup(ms[18], 0, 54, 1, true, "\u0012", 1);
            ValidateCapture(ms[18], 0, 0, 54, 1, "\u0012");

            // Match #19:
            Assert.NotNull(ms[19], "Match[19] is not null.");
            ValidateMatch(ms[19], 57, 1, "\u0013", 1, true);

            ValidateGroup(ms[19], 0, 57, 1, true, "\u0013", 1);
            ValidateCapture(ms[19], 0, 0, 57, 1, "\u0013");

            // Match #20:
            Assert.NotNull(ms[20], "Match[20] is not null.");
            ValidateMatch(ms[20], 60, 1, "\u0014", 1, true);

            ValidateGroup(ms[20], 0, 60, 1, true, "\u0014", 1);
            ValidateCapture(ms[20], 0, 0, 60, 1, "\u0014");

            // Match #21:
            Assert.NotNull(ms[21], "Match[21] is not null.");
            ValidateMatch(ms[21], 63, 1, "\u0015", 1, true);

            ValidateGroup(ms[21], 0, 63, 1, true, "\u0015", 1);
            ValidateCapture(ms[21], 0, 0, 63, 1, "\u0015");

            // Match #22:
            Assert.NotNull(ms[22], "Match[22] is not null.");
            ValidateMatch(ms[22], 66, 1, "\u0016", 1, true);

            ValidateGroup(ms[22], 0, 66, 1, true, "\u0016", 1);
            ValidateCapture(ms[22], 0, 0, 66, 1, "\u0016");

            // Match #23:
            Assert.NotNull(ms[23], "Match[23] is not null.");
            ValidateMatch(ms[23], 69, 1, "\u0017", 1, true);

            ValidateGroup(ms[23], 0, 69, 1, true, "\u0017", 1);
            ValidateCapture(ms[23], 0, 0, 69, 1, "\u0017");

            // Match #24:
            Assert.NotNull(ms[24], "Match[24] is not null.");
            ValidateMatch(ms[24], 72, 1, "\u0018", 1, true);

            ValidateGroup(ms[24], 0, 72, 1, true, "\u0018", 1);
            ValidateCapture(ms[24], 0, 0, 72, 1, "\u0018");

            // Match #25:
            Assert.NotNull(ms[25], "Match[25] is not null.");
            ValidateMatch(ms[25], 75, 1, "\u0019", 1, true);

            ValidateGroup(ms[25], 0, 75, 1, true, "\u0019", 1);
            ValidateCapture(ms[25], 0, 0, 75, 1, "\u0019");

            // Match #26:
            Assert.NotNull(ms[26], "Match[26] is not null.");
            ValidateMatch(ms[26], 78, 1, "\u001A", 1, true);

            ValidateGroup(ms[26], 0, 78, 1, true, "\u001A", 1);
            ValidateCapture(ms[26], 0, 0, 78, 1, "\u001A");

            // Match #27:
            Assert.NotNull(ms[27], "Match[27] is not null.");
            ValidateMatch(ms[27], 81, 1, "\u001B", 1, true);

            ValidateGroup(ms[27], 0, 81, 1, true, "\u001B", 1);
            ValidateCapture(ms[27], 0, 0, 81, 1, "\u001B");

            // Match #28:
            Assert.NotNull(ms[28], "Match[28] is not null.");
            ValidateMatch(ms[28], 84, 1, "\u001C", 1, true);

            ValidateGroup(ms[28], 0, 84, 1, true, "\u001C", 1);
            ValidateCapture(ms[28], 0, 0, 84, 1, "\u001C");

            // Match #29:
            Assert.NotNull(ms[29], "Match[29] is not null.");
            ValidateMatch(ms[29], 87, 1, "\u001D", 1, true);

            ValidateGroup(ms[29], 0, 87, 1, true, "\u001D", 1);
            ValidateCapture(ms[29], 0, 0, 87, 1, "\u001D");

            // Match #30:
            Assert.NotNull(ms[30], "Match[30] is not null.");
            ValidateMatch(ms[30], 90, 1, "\u001E", 1, true);

            ValidateGroup(ms[30], 0, 90, 1, true, "\u001E", 1);
            ValidateCapture(ms[30], 0, 0, 90, 1, "\u001E");

            // Match #31:
            Assert.NotNull(ms[31], "Match[31] is not null.");
            ValidateMatch(ms[31], 93, 1, "\u001F", 1, true);

            ValidateGroup(ms[31], 0, 93, 1, true, "\u001F", 1);
            ValidateCapture(ms[31], 0, 0, 93, 1, "\u001F");
        }

        [Test]
        public void BasicLatinEscapeTest()
        {
            for (int i = 0; i < 128; i++)
            {
                var ch = (char)i;
                if (ch >= '0' && ch <= '9')
                {
                    // Skip numbers - as they will be treated like references.
                    continue;
                }

                var str = ch.ToString();
                var escapedStr = @"\" + str;

                try
                {
                    var unescapedStr = Regex.Unescape(escapedStr);
                    if (unescapedStr != str)
                    {
                        continue;
                    }
                }
                catch (ArgumentException)
                {
                    continue;
                }
                
                // Test regex with the escapedStr as pattern:
                var rgx = new Regex(escapedStr);
                var m = rgx.Match(str);
                Assert.AreEqual(str, m.Value);
            }
        }

        [Test]
        public void OctalEscapeTest()
        {
            for (int i = 0; i < 256; i++)
            {
                var octalStr = Convert.ToString(i, 8);
                var escapedStr = @"\" + octalStr;

                var unescapedStr = Regex.Unescape(escapedStr);
                var unescapedCh = unescapedStr[0];
                var unescapedCode = (int) unescapedCh;

                Assert.AreEqual(i, unescapedCode);
            }
        }
    }
}