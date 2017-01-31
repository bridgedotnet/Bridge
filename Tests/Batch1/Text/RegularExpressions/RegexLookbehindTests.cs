using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Lookbehind - {0}")]
    public class RegexLookbehindTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnPositiveLookbehindTest()
        {
            const string pattern = @"(?<=\b20)\d{2}\b";
            const string text = "2010 1999 1861 2140 2009";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 2, 2, "10", 1, true);

            ValidateGroup(ms[0], 0, 2, 2, true, "10", 1);
            ValidateCapture(ms[0], 0, 0, 2, 2, "10");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 22, 2, "09", 1, true);

            ValidateGroup(ms[1], 0, 22, 2, true, "09", 1);
            ValidateCapture(ms[1], 0, 0, 22, 2, "09");
        }

        [Test]
        public void MsdnNegativeLookbehindTest()
        {
            var inputs = new[]
            {
                "Monday February 1, 2010",
                "Wednesday February 3, 2010",
                "Saturday February 6, 2010",
                "Sunday February 7, 2010",
                "Monday, February 8, 2010"
            };
            var expected = new[]
            {
                "February 1, 2010",
                "February 3, 2010",
                null,
                null,
                "February 8, 2010"
            };

            const string pattern = @"(?<!(Saturday|Sunday) )\b\w+ \d{1,2}, \d{4}\b";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        #endregion MSDN

        [Test]
        public void PositiveLookbehindTest1()
        {
            const string pattern = @"abc(?<=bc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void PositiveLookbehindTest2()
        {
            const string pattern = @"abc(?<=bx)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void PositiveLookbehindTest3()
        {
            const string pattern = @"bc(?<=abc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 5, "bcdef", 1, true);

            ValidateGroup(m, 0, 1, 5, true, "bcdef", 1);
            ValidateCapture(m, 0, 0, 1, 5, "bcdef");
        }

        [Test]
        public void PositiveLookbehindWithMatchOffsetTest()
        {
            const string pattern = @"bc(?<=abc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text, 1);

            ValidateMatch(m, 1, 5, "bcdef", 1, true);

            ValidateGroup(m, 0, 1, 5, true, "bcdef", 1);
            ValidateCapture(m, 0, 0, 1, 5, "bcdef");
        }

        [Test]
        public void NegativeLookbehindTest1()
        {
            const string pattern = @"abc(?<!bc)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void NegativeLookbehindTest2()
        {
            const string pattern = @"abc(?<!bx)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void PositiveLookbehindWithGroupTest()
        {
            const string pattern = @"(abc)(?<=(b)c)(def)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

            ValidateGroup(m, 1, 0, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 0, 3, "abc");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 3, 3, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 3, 3, "def");
        }

        [Test]
        public void NegativeLookbehindWithGroupTest()
        {
            const string pattern = @"(abc)(?<!(b)x)(def)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

            ValidateGroup(m, 1, 0, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 0, 3, "abc");

            ValidateGroup(m, 2, 0, 0, false, "", 0);

            ValidateGroup(m, 3, 3, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 3, 3, "def");
        }

        [Test]
        public void PositiveLookbehindWithOffsetTest()
        {
            const string pattern = @"(?<=cd)(.)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 1, "e", 2, true);

            ValidateGroup(m, 0, 4, 1, true, "e", 1);
            ValidateCapture(m, 0, 0, 4, 1, "e");

            ValidateGroup(m, 1, 4, 1, true, "e", 1);
            ValidateCapture(m, 1, 0, 4, 1, "e");
        }

        [Test]
        public void NegativeLookbehindWithOffsetTest()
        {
            const string pattern = @"(?<!cd)(.)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "a", 2, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "a");

            ValidateGroup(ms[0], 1, 0, 1, true, "a", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "b", 2, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "b", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "b");

            ValidateGroup(ms[1], 1, 1, 1, true, "b", 1);
            ValidateCapture(ms[1], 1, 0, 1, 1, "b");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 2, 1, "c", 2, true);

            ValidateGroup(ms[2], 0, 2, 1, true, "c", 1);
            ValidateCapture(ms[2], 0, 0, 2, 1, "c");

            ValidateGroup(ms[2], 1, 2, 1, true, "c", 1);
            ValidateCapture(ms[2], 1, 0, 2, 1, "c");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 3, 1, "d", 2, true);

            ValidateGroup(ms[3], 0, 3, 1, true, "d", 1);
            ValidateCapture(ms[3], 0, 0, 3, 1, "d");

            ValidateGroup(ms[3], 1, 3, 1, true, "d", 1);
            ValidateCapture(ms[3], 1, 0, 3, 1, "d");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 5, 1, "f", 2, true);

            ValidateGroup(ms[4], 0, 5, 1, true, "f", 1);
            ValidateCapture(ms[4], 0, 0, 5, 1, "f");

            ValidateGroup(ms[4], 1, 5, 1, true, "f", 1);
            ValidateCapture(ms[4], 1, 0, 5, 1, "f");
        }
    }
}