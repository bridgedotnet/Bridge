using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Quantifiers - {0}")]
    public class RegexQuantifiersTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnZeroOrMoreTimesTest()
        {
            string[] inputs = { ".0", "19.9", "219.9", "500", "700." };
            string[] expected = { ".0", "19.9", "219.9", null, null };

            const string pattern = @"\d*\.\d";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnOneOrMoreTimesTest()
        {
            string[] inputs = { "been", "bent", "bf", "beee", "aabe" };
            string[] expected = { "bee", "be", null, "beee", "be" };

            const string pattern = @"be+";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnZeroOrOneTimeTest()
        {
            string[] inputs = { "rain", "ran", "raiin" };
            string[] expected = { "rain", "ran", null };

            const string pattern = @"rai?n";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNTimesTest1()
        {
            string[] inputs = { "1,043.6", ",876", ",543", "9,876,543,210" };
            string[] expected = { ",043", ",876", ",543", ",876" };

            const string pattern = @",\d{3}";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNTimesTest2()
        {
            string[] inputs = { "1,043.6", ",876", ",543", "9,876,543,210" };
            string[] expected = { null, ",876", ",543", ",210" };

            const string pattern = @",\d{3}$";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNOrMoreTimesTest()
        {
            string[] inputs = { "166", "29", "1930", "1" };
            string[] expected = { "166", "29", "1930", null };

            const string pattern = @"\d{2,}";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnNToMTimesTest()
        {
            string[] inputs = { "166", "17668", "193024", "12" };
            string[] expected = { "166", "17668", "19302", null };

            const string pattern = @"\d{3,5}";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyZeroOrMoreTimesTest()
        {
            string[] inputs = { ".0", "19.9", "219.9", "500", "700." };
            string[] expected = { ".0", "19.9", "219.9", null, null };

            const string pattern = @"\d*?\.\d";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyOneOrMoreTimesTest()
        {
            string[] inputs = { "been", "bent", "bf", "beee", "aabe" };
            string[] expected = { "be", "be", null, "be", "be" };

            const string pattern = @"be+?";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyZeroOrOneTimeTest()
        {
            string[] inputs = { "rain", "ran", "raiin" };
            string[] expected = { "rain", "ran", null };

            const string pattern = @"rai??n";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyNTimesTest()
        {
            string[] inputs = { "1,043.6", ",876", ",543", "9,876,543,210", "123" };
            string[] expected = { ",043", ",876", ",543", ",876", null };

            const string pattern = @",\d{3}?";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyNOrMoreTimesTest()
        {
            string[] inputs = { "166", "29", "1930", "1" };
            string[] expected = { "16", "29", "19", null };

            const string pattern = @"\d{2,}?";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        [Test]
        public void MsdnLazyNToMTimesTest()
        {
            string[] inputs = { "166", "17668", "193024", "12" };
            string[] expected = { "166", "176", "193", null };

            const string pattern = @"\d{3,5}?";
            var rgx = new Regex(pattern);

            ValidateMatchResults(rgx, inputs, expected);
        }

        #endregion MSDN

        [Test]
        public void ZeroOrMoreTimesTest()
        {
            const string pattern = @"(a*)(abc)";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 0, 2, true, "aa", 1);
            ValidateCapture(m, 1, 0, 0, 2, "aa");

            ValidateGroup(m, 2, 2, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 2, 3, "abc");
        }

        [Test]
        public void OneOrMoreTimesTest1()
        {
            const string pattern = @"(a+)(abc)";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 0, 2, true, "aa", 1);
            ValidateCapture(m, 1, 0, 0, 2, "aa");

            ValidateGroup(m, 2, 2, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 2, 3, "abc");
        }

        [Test]
        public void OneOrMoreTimesTest2()
        {
            const string pattern = @"(a+)(abc)";
            const string text = "abc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void OneOrMoreTimesTest3()
        {
            const string pattern = @"(a+)(a{2}bc)";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 4, true, "aabc", 1);
            ValidateCapture(m, 2, 0, 1, 4, "aabc");
        }

        [Test]
        public void ZeroOrOneTimeTest()
        {
            const string pattern = @"(a?)(abc)";
            const string text = "abc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "abc", 3, true);

            ValidateGroup(m, 0, 0, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 0, 3, "abc");

            ValidateGroup(m, 1, 0, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 0, 0, "");

            ValidateGroup(m, 2, 0, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 0, 3, "abc");
        }

        [Test]
        public void LazyZeroOrMoreTimesTest1()
        {
            const string pattern = @"(a*?)((?:aa)*bc)";
            const string text = "aaaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "aaaaabc", 3, true);

            ValidateGroup(m, 0, 0, 7, true, "aaaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 7, "aaaaabc");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 6, true, "aaaabc", 1);
            ValidateCapture(m, 2, 0, 1, 6, "aaaabc");
        }

        [Test]
        public void LazyZeroOrMoreTimesTest2()
        {
            const string pattern = @"(a*?)((?:aa)*bc)";
            const string text = "aaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "aaaabc", 3, true);

            ValidateGroup(m, 0, 0, 6, true, "aaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 6, "aaaabc");

            ValidateGroup(m, 1, 0, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 0, 0, "");

            ValidateGroup(m, 2, 0, 6, true, "aaaabc", 1);
            ValidateCapture(m, 2, 0, 0, 6, "aaaabc");
        }

        [Test]
        public void LazyOneOrMoreTimesTest1()
        {
            const string pattern = @"(a+?)((?:aa)*bc)";
            const string text = "aaaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "aaaaabc", 3, true);

            ValidateGroup(m, 0, 0, 7, true, "aaaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 7, "aaaaabc");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 6, true, "aaaabc", 1);
            ValidateCapture(m, 2, 0, 1, 6, "aaaabc");
        }

        [Test]
        public void LazyOneOrMoreTimesTest2()
        {
            const string pattern = @"(a+?)((?:aa)*bc)";
            const string text = "aaaaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "aaaaaabc", 3, true);

            ValidateGroup(m, 0, 0, 8, true, "aaaaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 8, "aaaaaabc");

            ValidateGroup(m, 1, 0, 2, true, "aa", 1);
            ValidateCapture(m, 1, 0, 0, 2, "aa");

            ValidateGroup(m, 2, 2, 6, true, "aaaabc", 1);
            ValidateCapture(m, 2, 0, 2, 6, "aaaabc");
        }

        [Test]
        public void LazyZeroOrOneTimeTest1()
        {
            const string pattern = @"(a??)((?:aa)*bc)";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 4, true, "aabc", 1);
            ValidateCapture(m, 2, 0, 1, 4, "aabc");
        }

        [Test]
        public void LazyZeroOrOneTimeTest2()
        {
            const string pattern = @"(a??)((?:aa)*bc)";
            const string text = "aaaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "aaaabc", 3, true);

            ValidateGroup(m, 0, 0, 6, true, "aaaabc", 1);
            ValidateCapture(m, 0, 0, 0, 6, "aaaabc");

            ValidateGroup(m, 1, 0, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 0, 0, "");

            ValidateGroup(m, 2, 0, 6, true, "aaaabc", 1);
            ValidateCapture(m, 2, 0, 0, 6, "aaaabc");
        }
    }
}