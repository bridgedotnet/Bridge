using Bridge.Test.NUnit;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: BalancingGroups - {0}")]
    public class RegexBalancingGroupsTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnBalancingGroupTest1()
        {
            const string pattern = @"^[^<>]*(((?'Open'<)[^<>]*)+((?'Close-Open'>)[^<>]*)+)*(?(Open)(?!)|)$";
            const string text = "<abc><mno<xyz>>";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 15, "<abc><mno<xyz>>", 6, true);

            ValidateGroup(m, 0, 0, 15, true, "<abc><mno<xyz>>", 1);
            ValidateCapture(m, 0, 0, 0, 15, "<abc><mno<xyz>>");

            ValidateGroup(m, 1, 5, 10, true, "<mno<xyz>>", 2);
            ValidateCapture(m, 1, 0, 0, 5, "<abc>");
            ValidateCapture(m, 1, 1, 5, 10, "<mno<xyz>>");

            ValidateGroup(m, 2, 9, 4, true, "<xyz", 3);
            ValidateCapture(m, 2, 0, 0, 4, "<abc");
            ValidateCapture(m, 2, 1, 5, 4, "<mno");
            ValidateCapture(m, 2, 2, 9, 4, "<xyz");

            ValidateGroup(m, 3, 14, 1, true, ">", 3);
            ValidateCapture(m, 3, 0, 4, 1, ">");
            ValidateCapture(m, 3, 1, 13, 1, ">");
            ValidateCapture(m, 3, 2, 14, 1, ">");

            ValidateGroup(m, 4, 0, 0, false, "", 0);

            ValidateGroup(m, 5, 6, 8, true, "mno<xyz>", 3);
            ValidateCapture(m, 5, 0, 1, 3, "abc");
            ValidateCapture(m, 5, 1, 10, 3, "xyz");
            ValidateCapture(m, 5, 2, 6, 8, "mno<xyz>");
        }

        [Test]
        public void MsdnBalancingGroupTest2()
        {
            const string pattern = @"(((?'Open'\()[^\(\)]*)+((?'Close-Open'\))[^\(\)]*)+)*(?(Open)(?!)|)$";
            const string text = "3+2^((1-3)*(3-1))";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 4, 13, "((1-3)*(3-1))", 6, true);

            ValidateGroup(ms[0], 0, 4, 13, true, "((1-3)*(3-1))", 1);
            ValidateCapture(ms[0], 0, 0, 4, 13, "((1-3)*(3-1))");

            ValidateGroup(ms[0], 1, 11, 6, true, "(3-1))", 2);
            ValidateCapture(ms[0], 1, 0, 4, 7, "((1-3)*");
            ValidateCapture(ms[0], 1, 1, 11, 6, "(3-1))");

            ValidateGroup(ms[0], 2, 11, 4, true, "(3-1", 3);
            ValidateCapture(ms[0], 2, 0, 4, 1, "(");
            ValidateCapture(ms[0], 2, 1, 5, 4, "(1-3");
            ValidateCapture(ms[0], 2, 2, 11, 4, "(3-1");

            ValidateGroup(ms[0], 3, 16, 1, true, ")", 3);
            ValidateCapture(ms[0], 3, 0, 9, 2, ")*");
            ValidateCapture(ms[0], 3, 1, 15, 1, ")");
            ValidateCapture(ms[0], 3, 2, 16, 1, ")");

            ValidateGroup(ms[0], 4, 0, 0, false, "", 0);

            ValidateGroup(ms[0], 5, 5, 11, true, "(1-3)*(3-1)", 3);
            ValidateCapture(ms[0], 5, 0, 6, 3, "1-3");
            ValidateCapture(ms[0], 5, 1, 12, 3, "3-1");
            ValidateCapture(ms[0], 5, 2, 5, 11, "(1-3)*(3-1)");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 17, 0, "", 6, true);

            ValidateGroup(ms[1], 0, 17, 0, true, "", 1);
            ValidateCapture(ms[1], 0, 0, 17, 0, "");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 3, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 4, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 5, 0, 0, false, "", 0);
        }

        #endregion MSDN

        [Test]
        public void BalancingGroupTest()
        {
            const string pattern = @"(?<g1>a)b(?<g2-g1>c)?";
            const string text = "abc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "abc", 3, true);

            ValidateGroup(m, 0, 0, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 0, 3, "abc");

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");
        }

        [Test]
        public void BalancingGroupWithoutName1Test()
        {
            const string pattern = @"(?<g1>a)+b(?<-g1>c)?";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 2, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 1, 1, true, "a", 2);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 1, "a");
        }

        [Test]
        public void BalancingGroupWithQuantifierTest()
        {
            const string pattern = @"(?<g1>a)+b(?<g2-g1>c)?";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 1, 1, true, "a", 2);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 1, "a");

            ValidateGroup(m, 2, 3, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 3, 1, "b");
        }

        [Test]
        public void BalancingGroupWithEmptyIntervalTest()
        {
            const string pattern = @"(?<g1>a)+(?<g2-g1>c)";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void BalancingGroupStackApproachTest()
        {
            const string pattern = @"(?:[^{}]|(?<Open>{)|(?<Content-Open>}))+(?(Open)(?!)|)";
            const string text = "0 {1 2 {3} {4 5 {6}} 7} 8";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 25, "0 {1 2 {3} {4 5 {6}} 7} 8", 3, true);

            ValidateGroup(m, 0, 0, 25, true, "0 {1 2 {3} {4 5 {6}} 7} 8", 1);
            ValidateCapture(m, 0, 0, 0, 25, "0 {1 2 {3} {4 5 {6}} 7} 8");

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 3, 19, true, "1 2 {3} {4 5 {6}} 7", 4);
            ValidateCapture(m, 2, 0, 8, 1, "3");
            ValidateCapture(m, 2, 1, 17, 1, "6");
            ValidateCapture(m, 2, 2, 12, 7, "4 5 {6}");
            ValidateCapture(m, 2, 3, 3, 19, "1 2 {3} {4 5 {6}} 7");
        }

        [Test]
        public void BalancingGroupWithNumberReferenceTest1()
        {
            const string pattern = @"(a)+b(?<-1>c)?";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 2, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 1, 1, true, "a", 2);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 1, "a");
        }

        [Test]
        public void BalancingGroupWithNumberReferenceTest2()
        {
            const string pattern = @"(a)+b(?<5-1>c)?";
            const string text = "aaabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "aaabc", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "aaabc", 1);
            ValidateCapture(m, 0, 0, 0, 5, "aaabc");

            ValidateGroup(m, 1, 1, 1, true, "a", 2);
            ValidateCapture(m, 1, 0, 0, 1, "a");
            ValidateCapture(m, 1, 1, 1, 1, "a");

            ValidateGroup(m, 5, 3, 1, true, "b", 1);
            ValidateCapture(m, 5, 0, 3, 1, "b");
        }

        [Test]
        public void BalancingGroupIncorrectReferenceTest1()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?<gr1>a)b(?<gr2-gr55>c)";
                const string text = "abc";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }

        [Test]
        public void BalancingGroupIncorrectReferenceTest2()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"(?<gr1>a)b(?<gr2-55>c)";
                const string text = "abc";
                var rgx = new Regex(pattern);
                rgx.Match(text);
            });
        }
    }
}