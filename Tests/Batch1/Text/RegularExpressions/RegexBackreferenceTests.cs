using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Backreferences - {0}")]
    public class RegexBackreferenceTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnNumberedBackrefTest()
        {
            const string pattern = @"(\w)\1";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 1, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 1, 0, 3, 1, "l");

            // Match #1:
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 1, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 1, 0, 8, 1, "l");

            // Match #2:
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 1, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 1, 0, 16, 1, "b");

            // Match #3:
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 1, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 1, 0, 25, 1, "s");

            // Match #4:
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 1, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 1, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefTest()
        {
            const string pattern = @"(?<char>\w)\k<char>";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 1, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 1, 0, 3, 1, "l");

            // Match #1:
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 1, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 1, 0, 8, 1, "l");

            // Match #2:
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 1, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 1, 0, 16, 1, "b");

            // Match #3:
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 1, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 1, 0, 25, 1, "s");

            // Match #4:
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 1, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 1, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefWithNumberAsNameTest()
        {
            const string pattern = @"(?<2>\w)\k<2>";
            const string text = @"trellis llama webbing dresser swagger";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 3, 2, "ll", 2, true);

            ValidateGroup(ms[0], 0, 3, 2, true, "ll", 1);
            ValidateCapture(ms[0], 0, 0, 3, 2, "ll");

            ValidateGroup(ms[0], 2, 3, 1, true, "l", 1);
            ValidateCapture(ms[0], 2, 0, 3, 1, "l");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 2, "ll", 2, true);

            ValidateGroup(ms[1], 0, 8, 2, true, "ll", 1);
            ValidateCapture(ms[1], 0, 0, 8, 2, "ll");

            ValidateGroup(ms[1], 2, 8, 1, true, "l", 1);
            ValidateCapture(ms[1], 2, 0, 8, 1, "l");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 16, 2, "bb", 2, true);

            ValidateGroup(ms[2], 0, 16, 2, true, "bb", 1);
            ValidateCapture(ms[2], 0, 0, 16, 2, "bb");

            ValidateGroup(ms[2], 2, 16, 1, true, "b", 1);
            ValidateCapture(ms[2], 2, 0, 16, 1, "b");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 25, 2, "ss", 2, true);

            ValidateGroup(ms[3], 0, 25, 2, true, "ss", 1);
            ValidateCapture(ms[3], 0, 0, 25, 2, "ss");

            ValidateGroup(ms[3], 2, 25, 1, true, "s", 1);
            ValidateCapture(ms[3], 2, 0, 25, 1, "s");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 33, 2, "gg", 2, true);

            ValidateGroup(ms[4], 0, 33, 2, true, "gg", 1);
            ValidateCapture(ms[4], 0, 0, 33, 2, "gg");

            ValidateGroup(ms[4], 2, 33, 1, true, "g", 1);
            ValidateCapture(ms[4], 2, 0, 33, 1, "g");
        }

        [Test]
        public void MsdnNamedBackrefWithRedefinedGroupTest()
        {
            const string pattern = @"(?<1>a)(?<1>\1b)*";
            const string text = "aababb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "aababb", 2, true);

            ValidateGroup(m, 0, 0, 6, true, "aababb", 1);
            ValidateCapture(m, 0, 0, 0, 6, "aababb");

            ValidateGroup(m, 1, 3, 3, true, "abb", 3);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 2, "ab");
            ValidateCapture(m, 1, 2, 3, 3, "abb");
        }

        [Test]
        public void MsdnNamedBackrefWithEmptyCaptureTest1()
        {
            const string pattern = @"\b([A-Z]{2})(\d{2})?([A-Z]{2})\b";
            const string text = @"AA22ZZ";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "AA22ZZ", 4, true);

            ValidateGroup(m, 0, 0, 6, true, "AA22ZZ", 1);
            ValidateCapture(m, 0, 0, 0, 6, "AA22ZZ");

            ValidateGroup(m, 1, 0, 2, true, "AA", 1);
            ValidateCapture(m, 1, 0, 0, 2, "AA");

            ValidateGroup(m, 2, 2, 2, true, "22", 1);
            ValidateCapture(m, 2, 0, 2, 2, "22");

            ValidateGroup(m, 3, 4, 2, true, "ZZ", 1);
            ValidateCapture(m, 3, 0, 4, 2, "ZZ");
        }

        [Test]
        public void MsdnNamedBackrefWithEmptyCaptureTest2()
        {
            const string pattern = @"\b([A-Z]{2})(\d{2})?([A-Z]{2})\b";
            const string text = @"AABB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "AABB", 4, true);

            ValidateGroup(m, 0, 0, 4, true, "AABB", 1);
            ValidateCapture(m, 0, 0, 0, 4, "AABB");

            ValidateGroup(m, 1, 0, 2, true, "AA", 1);
            ValidateCapture(m, 1, 0, 0, 2, "AA");

            ValidateGroup(m, 2, 0, 0, false, "", 0);

            ValidateGroup(m, 3, 2, 2, true, "BB", 1);
            ValidateCapture(m, 3, 0, 2, 2, "BB");
        }

        #endregion MSDN

        [Test]
        public void NamedBackrefToUnreachableGroupTest()
        {
            const string pattern = @"(a)\2(b)";
            const string text = "abb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void NamedBackrefToSelfGroupTest()
        {
            const string pattern = @"(?<gr1>a\k<gr1>)";
            const string text = "aaa";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void NamedBackrefToParentGroupTest()
        {
            const string pattern = @"(?<parent>a(?<child>b\k<parent>))";
            const string text = "aabb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void NumberedBackrefTest()
        {
            const string pattern = @"((abc)def)\2";
            const string text = "abcdefabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 9, "abcdefabc", 3, true);

            ValidateGroup(m, 0, 0, 9, true, "abcdefabc", 1);
            ValidateCapture(m, 0, 0, 0, 9, "abcdefabc");

            ValidateGroup(m, 1, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 1, 0, 0, 6, "abcdef");

            ValidateGroup(m, 2, 0, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 0, 3, "abc");
        }

        [Test]
        public void NumberedBackrefInGroupTest()
        {
            const string pattern = @"((abc)def)(\2)";
            const string text = "abcdefabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 9, "abcdefabc", 4, true);

            ValidateGroup(m, 0, 0, 9, true, "abcdefabc", 1);
            ValidateCapture(m, 0, 0, 0, 9, "abcdefabc");

            ValidateGroup(m, 1, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 1, 0, 0, 6, "abcdef");

            ValidateGroup(m, 2, 0, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 0, 3, "abc");

            ValidateGroup(m, 3, 6, 3, true, "abc", 1);
            ValidateCapture(m, 3, 0, 6, 3, "abc");
        }

        [Test]
        public void NamedBackrefInGroupTest()
        {
            const string pattern = @"((?<name>abc)def)(\k<name>)";
            const string text = "abcdefabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 9, "abcdefabc", 4, true);

            ValidateGroup(m, 0, 0, 9, true, "abcdefabc", 1);
            ValidateCapture(m, 0, 0, 0, 9, "abcdefabc");

            ValidateGroup(m, 1, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 1, 0, 0, 6, "abcdef");

            ValidateGroup(m, 2, 6, 3, true, "abc", 1);
            ValidateCapture(m, 2, 0, 6, 3, "abc");

            ValidateGroup(m, 3, 0, 3, true, "abc", 1);
            ValidateCapture(m, 3, 0, 0, 3, "abc");
        }

        [Test]
        public void NumberedBackrefRecursiveGroupTest()
        {
            const string pattern = @"(a)(?<1>\1b)+";
            const string text = "aababbabbb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 10, "aababbabbb", 2, true);

            ValidateGroup(m, 0, 0, 10, true, "aababbabbb", 1);
            ValidateCapture(m, 0, 0, 0, 10, "aababbabbb");

            ValidateGroup(m, 1, 6, 4, true, "abbb", 4);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 2, "ab");
            ValidateCapture(m, 1, 2, 3, 3, "abb");
            ValidateCapture(m, 1, 3, 6, 4, "abbb");
        }

        [Test]
        public void NamedBackrefRecursiveGroupTest()
        {
            const string pattern = @"(?<gr>a)(?<gr>\k<gr>b)+";
            const string text = "aababbabbb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 10, "aababbabbb", 2, true);

            ValidateGroup(m, 0, 0, 10, true, "aababbabbb", 1);
            ValidateCapture(m, 0, 0, 0, 10, "aababbabbb");

            ValidateGroup(m, 1, 6, 4, true, "abbb", 4);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 2, "ab");
            ValidateCapture(m, 1, 2, 3, 3, "abb");
            ValidateCapture(m, 1, 3, 6, 4, "abbb");
        }

        [Test]
        public void ComplexBackrefTest1()
        {
            const string pattern = @"((a)(\2b))((\1)(\2))(\3(\4))";
            const string text = "aabaabaabaaba";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 13, "aabaabaabaaba", 9, true);

            ValidateGroup(m, 0, 0, 13, true, "aabaabaabaaba", 1);
            ValidateCapture(m, 0, 0, 0, 13, "aabaabaabaaba");

            ValidateGroup(m, 1, 0, 3, true, "aab", 1);
            ValidateCapture(m, 1, 0, 0, 3, "aab");

            ValidateGroup(m, 2, 0, 1, true, "a", 1);
            ValidateCapture(m, 2, 0, 0, 1, "a");

            ValidateGroup(m, 3, 1, 2, true, "ab", 1);
            ValidateCapture(m, 3, 0, 1, 2, "ab");

            ValidateGroup(m, 4, 3, 4, true, "aaba", 1);
            ValidateCapture(m, 4, 0, 3, 4, "aaba");

            ValidateGroup(m, 5, 3, 3, true, "aab", 1);
            ValidateCapture(m, 5, 0, 3, 3, "aab");

            ValidateGroup(m, 6, 6, 1, true, "a", 1);
            ValidateCapture(m, 6, 0, 6, 1, "a");

            ValidateGroup(m, 7, 7, 6, true, "abaaba", 1);
            ValidateCapture(m, 7, 0, 7, 6, "abaaba");

            ValidateGroup(m, 8, 9, 4, true, "aaba", 1);
            ValidateCapture(m, 8, 0, 9, 4, "aaba");
        }
    }
}