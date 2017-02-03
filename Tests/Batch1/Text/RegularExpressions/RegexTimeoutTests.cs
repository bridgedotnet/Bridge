using Bridge.Test.NUnit;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex Timeouts - {0}")]
    public class RegexTimeoutTests : RegexTestBase
    {
        private static readonly string Pattern = "([0-9a-zA-Z]{1})+";
        private static readonly TimeSpan ShortTimeoutMs = TimeSpan.FromMilliseconds(1);
        private static readonly TimeSpan LongTimeoutMs = TimeSpan.FromMilliseconds(3000);
        private static readonly string ShortText;
        private static readonly string LongText;

        static RegexTimeoutTests()
        {
            LongText = string.Empty;
            for (int i = 0; i < 10000; i++)
            {
                LongText += "TestStringForTimeout";
            }

            ShortText = string.Empty;
            for (int i = 0; i < 100; i++)
            {
                ShortText += "TestStringWithNoTimeout";
            }
        }

        [Test]
        public void RegexTimeoutValidationWorks()
        {
            var rgx = new Regex("fakePattern");
            Assert.AreEqual(TimeSpan.FromMilliseconds(-1), rgx.MatchTimeout, "Default Timeout #1");

            rgx = new Regex("fakePattern", RegexOptions.None);
            Assert.AreEqual(TimeSpan.FromMilliseconds(-1), rgx.MatchTimeout, "Default Timeout #2");

            rgx = new Regex("fakePattern", RegexOptions.None, TimeSpan.FromSeconds(123));
            Assert.AreEqual(TimeSpan.FromSeconds(123), rgx.MatchTimeout, "Specified Timeout");

            Assert.Throws<ArgumentOutOfRangeException>(() => new Regex("fakePattern", RegexOptions.None, TimeSpan.FromMilliseconds(-5)));
        }

        [Test]
        public void RegexIsMatchWorksWithShortTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, ShortTimeoutMs);
            Assert.Throws<RegexMatchTimeoutException>(() => { rgx.IsMatch(LongText); });
        }

        [Test]
        public void RegexIsMatchWorksWithLongTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, LongTimeoutMs);
            rgx.IsMatch(ShortText);
            Assert.True(rgx != null);
        }

        [Test]
        public void RegexMatchWorksWithShortTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, ShortTimeoutMs);
            Assert.Throws<RegexMatchTimeoutException>(() => { rgx.Match(LongText); });
        }

        [Test]
        public void RegexMatchWorksWithLongTimeout()
        {
            var rgx = new Regex(Pattern, RegexOptions.None, LongTimeoutMs);
            rgx.Match(ShortText);
            Assert.True(rgx != null);
        }

        [Test]
        public void RegexNextMatchWorksWithShortTimeout()
        {
            var rgx = new Regex("%%|" + Pattern, RegexOptions.None, ShortTimeoutMs);

            Assert.Throws<RegexMatchTimeoutException>(() =>
            {
                var result = rgx.Match("%%" + LongText);
                result.NextMatch();
            });
        }

        [Test]
        public void RegexNextMatchWorksWithLongTimeout()
        {
            var rgx = new Regex("%%| " + Pattern, RegexOptions.None, LongTimeoutMs);

            var result = rgx.Match("%%" + ShortText);
            result.NextMatch();

            Assert.True(rgx != null);
        }

        [Test]
        public void RegexReplaceWorksWithShortTimeout()
        {
            Assert.Throws<RegexMatchTimeoutException>(() =>
            {
                Regex.Replace(LongText, Pattern, "fakeReplacement", RegexOptions.None, ShortTimeoutMs);
            });
        }

        [Test]
        public void RegexReplaceWorksWithLongTimeout()
        {
            Regex.Replace(ShortText, Pattern, "fakeReplacement", RegexOptions.None, LongTimeoutMs);
            Assert.True(true);
        }

        [Test]
        public void RegexReplaceEvaluatorWorksWithShortTimeout()
        {
            Assert.Throws<RegexMatchTimeoutException>(() =>
            {
                Regex.Replace(LongText, Pattern, m => "fakeReplacement", RegexOptions.None, ShortTimeoutMs);
            });
        }

        [Test]
        public void RegexReplaceEvaluatorWorksWithLongTimeout()
        {
            Regex.Replace(ShortText, Pattern, m => "fakeReplacement", RegexOptions.None, LongTimeoutMs);
            Assert.True(true);
        }

        [Test]
        public void RegexSplitWorksWithShortTimeout()
        {
            Assert.Throws<RegexMatchTimeoutException>(() =>
            {
                Regex.Split(LongText, Pattern, RegexOptions.None, ShortTimeoutMs);
            });
        }

        [Test]
        public void RegexSplitWorksWithLongTimeout()
        {
            Regex.Split(ShortText, Pattern, RegexOptions.None, LongTimeoutMs);
            Assert.True(true);
        }
    }
}