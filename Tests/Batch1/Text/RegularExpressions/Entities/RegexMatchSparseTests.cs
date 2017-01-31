using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "MatchSparse Entity - {0}")]
    public class RegexMatchSparseTests : RegexTestBase
    {
        [Test]
        public void GroupOrderingTest1()
        {
            const string pattern = @"(a)(b)(?<name>c)(d)";
            const string text = @"abcd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 5, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 3, 3, 1, true, "d", 1);
            ValidateCapture(m, 3, 0, 3, 1, "d");

            ValidateGroup(m, 4, 2, 1, true, "c", 1);
            ValidateCapture(m, 4, 0, 2, 1, "c");
        }

        [Test]
        public void GroupOrderingTest2()
        {
            const string pattern = @"(a)(b)(?<4>c)(?<name>d)(e)";
            const string text = @"abcde";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "abcde", 6, true);

            ValidateGroup(m, 0, 0, 5, true, "abcde", 1);
            ValidateCapture(m, 0, 0, 0, 5, "abcde");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 3, 4, 1, true, "e", 1);
            ValidateCapture(m, 3, 0, 4, 1, "e");

            ValidateGroup(m, 4, 2, 1, true, "c", 1);
            ValidateCapture(m, 4, 0, 2, 1, "c");

            ValidateGroup(m, 5, 3, 1, true, "d", 1);
            ValidateCapture(m, 5, 0, 3, 1, "d");
        }

        [Test]
        public void GroupOrderingTest3()
        {
            const string pattern = @"(a)(b)(?<5>c)(?<name>d)(e)";
            const string text = @"abcde";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "abcde", 6, true);

            ValidateGroup(m, 0, 0, 5, true, "abcde", 1);
            ValidateCapture(m, 0, 0, 0, 5, "abcde");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 3, 4, 1, true, "e", 1);
            ValidateCapture(m, 3, 0, 4, 1, "e");

            ValidateGroup(m, 4, 3, 1, true, "d", 1);
            ValidateCapture(m, 4, 0, 3, 1, "d");

            ValidateGroup(m, 5, 2, 1, true, "c", 1);
            ValidateCapture(m, 5, 0, 2, 1, "c");
        }

        [Test]
        public void SparseOrderingTest()
        {
            const string pattern = @"(?<60>n)(?<50>a)(b)(?<3>c)(?<name>d)(?<70>e)(f)";
            const string text = @"nabcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "nabcdef", 8, true);

            ValidateGroup(m, 0, 0, 7, true, "nabcdef", 1);
            ValidateCapture(m, 0, 0, 0, 7, "nabcdef");

            ValidateGroup(m, 1, 2, 1, true, "b", 1);
            ValidateCapture(m, 1, 0, 2, 1, "b");

            ValidateGroup(m, 2, 6, 1, true, "f", 1);
            ValidateCapture(m, 2, 0, 6, 1, "f");

            ValidateGroup(m, 3, 3, 1, true, "c", 1);
            ValidateCapture(m, 3, 0, 3, 1, "c");

            ValidateGroup(m, 4, 4, 1, true, "d", 1);
            ValidateCapture(m, 4, 0, 4, 1, "d");

            ValidateGroup(m, 50, 1, 1, true, "a", 1);
            ValidateCapture(m, 50, 0, 1, 1, "a");

            ValidateGroup(m, 60, 0, 1, true, "n", 1);
            ValidateCapture(m, 60, 0, 0, 1, "n");

            ValidateGroup(m, 70, 5, 1, true, "e", 1);
            ValidateCapture(m, 70, 0, 5, 1, "e");
        }

        [Test]
        public void GroupCapturesMergeTest()
        {
            const string pattern = @"(a)(b)(?<2>c)(?<name>d)(e)";
            const string text = @"abcde";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "abcde", 5, true);

            ValidateGroup(m, 0, 0, 5, true, "abcde", 1);
            ValidateCapture(m, 0, 0, 0, 5, "abcde");

            ValidateGroup(m, 1, 0, 1, true, "a", 1);
            ValidateCapture(m, 1, 0, 0, 1, "a");

            ValidateGroup(m, 2, 2, 1, true, "c", 2);
            ValidateCapture(m, 2, 0, 1, 1, "b");
            ValidateCapture(m, 2, 1, 2, 1, "c");

            ValidateGroup(m, 3, 4, 1, true, "e", 1);
            ValidateCapture(m, 3, 0, 4, 1, "e");

            ValidateGroup(m, 4, 3, 1, true, "d", 1);
            ValidateCapture(m, 4, 0, 3, 1, "d");
        }
    }
}