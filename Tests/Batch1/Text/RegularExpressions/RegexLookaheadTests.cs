using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Lookahead - {0}")]
    public class RegexLookaheadTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnPositiveLookaheadTest()
        {
            string[] inputs =
            {
                "The dog is a Malamute.",
                "The island has beautiful birds.",
                "The pitch missed home plate.",
                "Sunday is a weekend day."
            };
            var expected = new[]
            {
                "dog",
                null,
                null,
                "Sunday"
            };

            const string pattern = @"\b\w+(?=\sis\b)";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNegativeLookaheadTest()
        {
            const string pattern = @"\b(?!un)\w+\b";
            const string text = "unite one unethical ethics use untie ultimate";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 6, 3, "one", 1, true);

            ValidateGroup(ms[0], 0, 6, 3, true, "one", 1);
            ValidateCapture(ms[0], 0, 0, 6, 3, "one");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 20, 6, "ethics", 1, true);

            ValidateGroup(ms[1], 0, 20, 6, true, "ethics", 1);
            ValidateCapture(ms[1], 0, 0, 20, 6, "ethics");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 27, 3, "use", 1, true);

            ValidateGroup(ms[2], 0, 27, 3, true, "use", 1);
            ValidateCapture(ms[2], 0, 0, 27, 3, "use");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 37, 8, "ultimate", 1, true);

            ValidateGroup(ms[3], 0, 37, 8, true, "ultimate", 1);
            ValidateCapture(ms[3], 0, 0, 37, 8, "ultimate");
        }

        #endregion MSDN

        [Test]
        public void PositiveLookaheadTest1()
        {
            const string pattern = @"abc(?=def)de";
            const string text = "abcde";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void PositiveLookaheadTest2()
        {
            const string pattern = @"abc(?=de)def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void NegativeLookaheadTest1()
        {
            const string pattern = @"ab(?![\\d\\D])";
            const string text = "ab";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "ab", 1, true);

            ValidateGroup(m, 0, 0, 2, true, "ab", 1);
            ValidateCapture(m, 0, 0, 0, 2, "ab");
        }

        [Test]
        public void NegativeLookaheadTest2()
        {
            const string pattern = @"ab(?!\D)";
            const string text = "abc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void PositiveLookaheadWithGroupTest()
        {
            const string pattern = @"(ab)(?=(d)e)(def)";
            const string text = "abdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "abdef", 4, true);

            ValidateGroup(m, 0, 0, 5, true, "abdef", 1);
            ValidateCapture(m, 0, 0, 0, 5, "abdef");

            ValidateGroup(m, 1, 0, 2, true, "ab", 1);
            ValidateCapture(m, 1, 0, 0, 2, "ab");

            ValidateGroup(m, 2, 2, 1, true, "d", 1);
            ValidateCapture(m, 2, 0, 2, 1, "d");

            ValidateGroup(m, 3, 2, 3, true, "def", 1);
            ValidateCapture(m, 3, 0, 2, 3, "def");
        }

        [Test]
        public void NegativeLookaheadWithGroupTest()
        {
            const string pattern = @"(abc)(?!(d)x)(def)";
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
        public void PositiveLookaheadWithOffsetTest()
        {
            const string pattern = @"(?=cd)(.{3})";
            const string text = "abcdefgh";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 2, 3, "cde", 2, true);

            ValidateGroup(m, 0, 2, 3, true, "cde", 1);
            ValidateCapture(m, 0, 0, 2, 3, "cde");

            ValidateGroup(m, 1, 2, 3, true, "cde", 1);
            ValidateCapture(m, 1, 0, 2, 3, "cde");
        }

        [Test]
        public void NegativeLookaheadWithOffsetTest()
        {
            const string pattern = @"(?!cd)(.)";
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
            ValidateMatch(ms[2], 3, 1, "d", 2, true);

            ValidateGroup(ms[2], 0, 3, 1, true, "d", 1);
            ValidateCapture(ms[2], 0, 0, 3, 1, "d");

            ValidateGroup(ms[2], 1, 3, 1, true, "d", 1);
            ValidateCapture(ms[2], 1, 0, 3, 1, "d");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 4, 1, "e", 2, true);

            ValidateGroup(ms[3], 0, 4, 1, true, "e", 1);
            ValidateCapture(ms[3], 0, 0, 4, 1, "e");

            ValidateGroup(ms[3], 1, 4, 1, true, "e", 1);
            ValidateCapture(ms[3], 1, 0, 4, 1, "e");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 5, 1, "f", 2, true);

            ValidateGroup(ms[4], 0, 5, 1, true, "f", 1);
            ValidateCapture(ms[4], 0, 0, 5, 1, "f");

            ValidateGroup(ms[4], 1, 5, 1, true, "f", 1);
            ValidateCapture(ms[4], 1, 0, 5, 1, "f");
        }

        [Test]
        public void PositiveLookaheadGroupCombineTest()
        {
            const string pattern = @"(abc)(?=def)(def)";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 3, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");

            ValidateGroup(m, 1, 0, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 0, 3, "abc");

            ValidateGroup(m, 2, 3, 3, true, "def", 1);
            ValidateCapture(m, 2, 0, 3, 3, "def");
        }
    }
}