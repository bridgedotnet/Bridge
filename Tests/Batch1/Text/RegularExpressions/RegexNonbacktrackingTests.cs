using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Nonbacktracking - {0}")]
    public class RegexNonbacktrackingTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnNonBacktrackingTest1()
        {
            string[] inputs = { "cccd.", "aaad", "aaaa" };
            string[] expected = { "cccd", "aaad", "aaaa" };

            const string pattern = @"(\w)\1+.\b";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNonBacktrackingTest2()
        {
            string[] inputs = { "cccd.", "aaad", "aaaa" };
            string[] expected = { "cccd", "aaad", null };

            const string pattern = @"(?>(\w)\1+).\b";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        #endregion MSDN

        [Test]
        public void NonBacktrackingTest1()
        {
            const string pattern = @"f*(?>fa+)(a*)bc";
            const string text = "faaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "faaaabc", 2, true);

            ValidateGroup(m, 0, 0, 7, true, "faaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 7, "faaaabc");

            ValidateGroup(m, 1, 5, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 5, 0, "");
        }

        [Test]
        public void NonBacktrackingTest2()
        {
            string[] inputs = { "abcc", "abc" };
            string[] expected = { "abcc", "abc" };

            const string pattern = @"a(bc|b)c";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void NonBacktrackingTest3()
        {
            string[] inputs = { "abcc", "abc" };
            string[] expected = { "abcc", null };

            const string pattern = @"a(?>bc|b)c";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void NonBacktrackingTest4()
        {
            const string pattern = @"a(?>bc|b)c";
            const string text = "abcabcc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 3, 4, "abcc", 1, true);

            ValidateGroup(m, 0, 3, 4, true, "abcc", 1);
            ValidateCapture(m, 0, 0, 3, 4, "abcc");
        }

        [Test]
        public void NonBacktrackingTest5()
        {
            const string pattern = @"a(?>bc|b)c";
            const string text = "abccabcc";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "abcc", 1, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "abcc", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "abcc");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 4, 4, "abcc", 1, true);

            ValidateGroup(ms[1], 0, 4, 4, true, "abcc", 1);
            ValidateCapture(ms[1], 0, 0, 4, 4, "abcc");
        }

        [Test]
        public void NonBacktrackingWithOffsetTest()
        {
            const string pattern = @"a(?>bc|b)c";
            const string text = "abcabcc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 3, 4, "abcc", 1, true);

            ValidateGroup(m, 0, 3, 4, true, "abcc", 1);
            ValidateCapture(m, 0, 0, 3, 4, "abcc");
        }
    }
}