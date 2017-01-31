using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "RegexOptions - {0}")]
    public class RegexOptionsTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnIgnoreCaseOptionTest()
        {
            const string pattern = @"\bthe\w*\b";
            const string text = @"The man then told them about that event.";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "The", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "The", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "The");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 4, "then", 1, true);

            ValidateGroup(ms[1], 0, 8, 4, true, "then", 1);
            ValidateCapture(ms[1], 0, 0, 8, 4, "then");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 18, 4, "them", 1, true);

            ValidateGroup(ms[2], 0, 18, 4, true, "them", 1);
            ValidateCapture(ms[2], 0, 0, 18, 4, "them");
        }

        [Test]
        public void MsdnMultilineOptionTest1()
        {
            const string pattern = @"^(\w+)\s(\d+)$";
            const string text = "Joe 164\n" +
                                "Sam 208\n" +
                                "Allison 211\n" +
                                "Gwen 171\n";

            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);

            ValidateGroup(m, 2, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnMultilineOptionTest2()
        {
            const string pattern = @"^(\w+)\s(\d+)\r*$";
            const string text = "Joe 164\n" +
                                "Sam 208\n" +
                                "Allison 211\n" +
                                "Gwen 171\n";

            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 7, "Joe 164", 3, true);

            ValidateGroup(ms[0], 0, 0, 7, true, "Joe 164", 1);
            ValidateCapture(ms[0], 0, 0, 0, 7, "Joe 164");

            ValidateGroup(ms[0], 1, 0, 3, true, "Joe", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "Joe");

            ValidateGroup(ms[0], 2, 4, 3, true, "164", 1);
            ValidateCapture(ms[0], 2, 0, 4, 3, "164");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 7, "Sam 208", 3, true);

            ValidateGroup(ms[1], 0, 8, 7, true, "Sam 208", 1);
            ValidateCapture(ms[1], 0, 0, 8, 7, "Sam 208");

            ValidateGroup(ms[1], 1, 8, 3, true, "Sam", 1);
            ValidateCapture(ms[1], 1, 0, 8, 3, "Sam");

            ValidateGroup(ms[1], 2, 12, 3, true, "208", 1);
            ValidateCapture(ms[1], 2, 0, 12, 3, "208");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 16, 11, "Allison 211", 3, true);

            ValidateGroup(ms[2], 0, 16, 11, true, "Allison 211", 1);
            ValidateCapture(ms[2], 0, 0, 16, 11, "Allison 211");

            ValidateGroup(ms[2], 1, 16, 7, true, "Allison", 1);
            ValidateCapture(ms[2], 1, 0, 16, 7, "Allison");

            ValidateGroup(ms[2], 2, 24, 3, true, "211", 1);
            ValidateCapture(ms[2], 2, 0, 24, 3, "211");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 28, 8, "Gwen 171", 3, true);

            ValidateGroup(ms[3], 0, 28, 8, true, "Gwen 171", 1);
            ValidateCapture(ms[3], 0, 0, 28, 8, "Gwen 171");

            ValidateGroup(ms[3], 1, 28, 4, true, "Gwen", 1);
            ValidateCapture(ms[3], 1, 0, 28, 4, "Gwen");

            ValidateGroup(ms[3], 2, 33, 3, true, "171", 1);
            ValidateCapture(ms[3], 2, 0, 33, 3, "171");
        }

        [Test]
        public void MsdnSinglelineOptionTest()
        {
            const string pattern = @"^.+";
            const string text = "This is one line and\r\nthis is the second.";
            var rgx = new Regex(pattern, RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 41, "This is one line and\r\nthis is the second.", 1, true);

            ValidateGroup(m, 0, 0, 41, true, "This is one line and\r\nthis is the second.", 1);
            ValidateCapture(m, 0, 0, 0, 41, "This is one line and\r\nthis is the second.");
        }

        [Test]
        public void MsdnIgnoreWhitespaceOptionTest()
        {
            const string pattern = @" \b \(? ( (?:\w+) ,?\s? )+  [\.!?] \)? # Matches an entire sentence.";
            const string text = "This is the first sentence. Is it the beginning of a literary masterpiece? I think not. Instead, it is a nonsensical paragraph.";
            var rgx = new Regex(pattern, RegexOptions.IgnorePatternWhitespace);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 27, "This is the first sentence.", 2, true);

            ValidateGroup(ms[0], 0, 0, 27, true, "This is the first sentence.", 1);
            ValidateCapture(ms[0], 0, 0, 0, 27, "This is the first sentence.");

            ValidateGroup(ms[0], 1, 18, 8, true, "sentence", 5);
            ValidateCapture(ms[0], 1, 0, 0, 5, "This ");
            ValidateCapture(ms[0], 1, 1, 5, 3, "is ");
            ValidateCapture(ms[0], 1, 2, 8, 4, "the ");
            ValidateCapture(ms[0], 1, 3, 12, 6, "first ");
            ValidateCapture(ms[0], 1, 4, 18, 8, "sentence");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 28, 46, "Is it the beginning of a literary masterpiece?", 2, true);

            ValidateGroup(ms[1], 0, 28, 46, true, "Is it the beginning of a literary masterpiece?", 1);
            ValidateCapture(ms[1], 0, 0, 28, 46, "Is it the beginning of a literary masterpiece?");

            ValidateGroup(ms[1], 1, 62, 11, true, "masterpiece", 8);
            ValidateCapture(ms[1], 1, 0, 28, 3, "Is ");
            ValidateCapture(ms[1], 1, 1, 31, 3, "it ");
            ValidateCapture(ms[1], 1, 2, 34, 4, "the ");
            ValidateCapture(ms[1], 1, 3, 38, 10, "beginning ");
            ValidateCapture(ms[1], 1, 4, 48, 3, "of ");
            ValidateCapture(ms[1], 1, 5, 51, 2, "a ");
            ValidateCapture(ms[1], 1, 6, 53, 9, "literary ");
            ValidateCapture(ms[1], 1, 7, 62, 11, "masterpiece");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 75, 12, "I think not.", 2, true);

            ValidateGroup(ms[2], 0, 75, 12, true, "I think not.", 1);
            ValidateCapture(ms[2], 0, 0, 75, 12, "I think not.");

            ValidateGroup(ms[2], 1, 83, 3, true, "not", 3);
            ValidateCapture(ms[2], 1, 0, 75, 2, "I ");
            ValidateCapture(ms[2], 1, 1, 77, 6, "think ");
            ValidateCapture(ms[2], 1, 2, 83, 3, "not");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 88, 39, "Instead, it is a nonsensical paragraph.", 2, true);

            ValidateGroup(ms[3], 0, 88, 39, true, "Instead, it is a nonsensical paragraph.", 1);
            ValidateCapture(ms[3], 0, 0, 88, 39, "Instead, it is a nonsensical paragraph.");

            ValidateGroup(ms[3], 1, 117, 9, true, "paragraph", 6);
            ValidateCapture(ms[3], 1, 0, 88, 9, "Instead, ");
            ValidateCapture(ms[3], 1, 1, 97, 3, "it ");
            ValidateCapture(ms[3], 1, 2, 100, 3, "is ");
            ValidateCapture(ms[3], 1, 3, 103, 2, "a ");
            ValidateCapture(ms[3], 1, 4, 105, 12, "nonsensical ");
            ValidateCapture(ms[3], 1, 5, 117, 9, "paragraph");
        }

        [Test]
        public void MsdnExplicitCaptureOptionTest1()
        {
            const string pattern = @"\b\(?((?>\w+),?\s?)+[\.!?]\)?";
            const string text = "This is the first sentence. Is it the beginning of a literary masterpiece? I think not. Instead, it is a nonsensical paragraph.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 27, "This is the first sentence.", 2, true);

            ValidateGroup(ms[0], 0, 0, 27, true, "This is the first sentence.", 1);
            ValidateCapture(ms[0], 0, 0, 0, 27, "This is the first sentence.");

            ValidateGroup(ms[0], 1, 18, 8, true, "sentence", 5);
            ValidateCapture(ms[0], 1, 0, 0, 5, "This ");
            ValidateCapture(ms[0], 1, 1, 5, 3, "is ");
            ValidateCapture(ms[0], 1, 2, 8, 4, "the ");
            ValidateCapture(ms[0], 1, 3, 12, 6, "first ");
            ValidateCapture(ms[0], 1, 4, 18, 8, "sentence");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 28, 46, "Is it the beginning of a literary masterpiece?", 2, true);

            ValidateGroup(ms[1], 0, 28, 46, true, "Is it the beginning of a literary masterpiece?", 1);
            ValidateCapture(ms[1], 0, 0, 28, 46, "Is it the beginning of a literary masterpiece?");

            ValidateGroup(ms[1], 1, 62, 11, true, "masterpiece", 8);
            ValidateCapture(ms[1], 1, 0, 28, 3, "Is ");
            ValidateCapture(ms[1], 1, 1, 31, 3, "it ");
            ValidateCapture(ms[1], 1, 2, 34, 4, "the ");
            ValidateCapture(ms[1], 1, 3, 38, 10, "beginning ");
            ValidateCapture(ms[1], 1, 4, 48, 3, "of ");
            ValidateCapture(ms[1], 1, 5, 51, 2, "a ");
            ValidateCapture(ms[1], 1, 6, 53, 9, "literary ");
            ValidateCapture(ms[1], 1, 7, 62, 11, "masterpiece");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 75, 12, "I think not.", 2, true);

            ValidateGroup(ms[2], 0, 75, 12, true, "I think not.", 1);
            ValidateCapture(ms[2], 0, 0, 75, 12, "I think not.");

            ValidateGroup(ms[2], 1, 83, 3, true, "not", 3);
            ValidateCapture(ms[2], 1, 0, 75, 2, "I ");
            ValidateCapture(ms[2], 1, 1, 77, 6, "think ");
            ValidateCapture(ms[2], 1, 2, 83, 3, "not");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 88, 39, "Instead, it is a nonsensical paragraph.", 2, true);

            ValidateGroup(ms[3], 0, 88, 39, true, "Instead, it is a nonsensical paragraph.", 1);
            ValidateCapture(ms[3], 0, 0, 88, 39, "Instead, it is a nonsensical paragraph.");

            ValidateGroup(ms[3], 1, 117, 9, true, "paragraph", 6);
            ValidateCapture(ms[3], 1, 0, 88, 9, "Instead, ");
            ValidateCapture(ms[3], 1, 1, 97, 3, "it ");
            ValidateCapture(ms[3], 1, 2, 100, 3, "is ");
            ValidateCapture(ms[3], 1, 3, 103, 2, "a ");
            ValidateCapture(ms[3], 1, 4, 105, 12, "nonsensical ");
            ValidateCapture(ms[3], 1, 5, 117, 9, "paragraph");
        }

        [Test]
        public void MsdnExplicitCaptureOptionTest2()
        {
            const string pattern = @"\b\(?((?>\w+),?\s?)+[\.!?]\)?";
            const string text = "This is the first sentence. Is it the beginning of a literary masterpiece? I think not. Instead, it is a nonsensical paragraph.";
            var rgx = new Regex(pattern, RegexOptions.ExplicitCapture);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 27, "This is the first sentence.", 1, true);

            ValidateGroup(ms[0], 0, 0, 27, true, "This is the first sentence.", 1);
            ValidateCapture(ms[0], 0, 0, 0, 27, "This is the first sentence.");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 28, 46, "Is it the beginning of a literary masterpiece?", 1, true);

            ValidateGroup(ms[1], 0, 28, 46, true, "Is it the beginning of a literary masterpiece?", 1);
            ValidateCapture(ms[1], 0, 0, 28, 46, "Is it the beginning of a literary masterpiece?");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 75, 12, "I think not.", 1, true);

            ValidateGroup(ms[2], 0, 75, 12, true, "I think not.", 1);
            ValidateCapture(ms[2], 0, 0, 75, 12, "I think not.");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 88, 39, "Instead, it is a nonsensical paragraph.", 1, true);

            ValidateGroup(ms[3], 0, 88, 39, true, "Instead, it is a nonsensical paragraph.", 1);
            ValidateCapture(ms[3], 0, 0, 88, 39, "Instead, it is a nonsensical paragraph.");
        }

        #endregion MSDN

        [Test]
        public void IgnoreCaseOptionTest1()
        {
            const string pattern = @"ABcd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void IgnoreCaseOptionTest2()
        {
            const string pattern = @"ABcd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 1, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");
        }

        [Test]
        public void IgnoreCaseOptionTest3()
        {
            const string pattern = @"[AB]+cd";
            const string text = @"abcd";
            var rgx = new Regex(pattern, RegexOptions.IgnoreCase);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 1, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");
        }

        [Test]
        public void DefaultLineOptionsTest1()
        {
            const string pattern = @"^.*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 16, "The first line.\r", 1, true);

            ValidateGroup(m, 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(m, 0, 0, 0, 16, "The first line.\r");
        }

        [Test]
        public void DefaultLineOptionsTest2()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 35, 15, "The third line.", 1, true);

            ValidateGroup(m, 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(m, 0, 0, 35, 15, "The third line.");
        }

        [Test]
        public void MultilineOptionTest1()
        {
            const string pattern = @".*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(6, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 16, "The first line.\r", 1, true);

            ValidateGroup(ms[0], 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 16, "The first line.\r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 16, 0, "", 1, true);

            ValidateGroup(ms[1], 0, 16, 0, true, "", 1);
            ValidateCapture(ms[1], 0, 0, 16, 0, "");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 17, 17, "The second line.\r", 1, true);

            ValidateGroup(ms[2], 0, 17, 17, true, "The second line.\r", 1);
            ValidateCapture(ms[2], 0, 0, 17, 17, "The second line.\r");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 34, 0, "", 1, true);

            ValidateGroup(ms[3], 0, 34, 0, true, "", 1);
            ValidateCapture(ms[3], 0, 0, 34, 0, "");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 35, 15, "The third line.", 1, true);

            ValidateGroup(ms[4], 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(ms[4], 0, 0, 35, 15, "The third line.");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 50, 0, "", 1, true);

            ValidateGroup(ms[5], 0, 50, 0, true, "", 1);
            ValidateCapture(ms[5], 0, 0, 50, 0, "");
        }

        [Test]
        public void MultilineOptionTest2()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 16, "The first line.\r", 1, true);

            ValidateGroup(ms[0], 0, 0, 16, true, "The first line.\r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 16, "The first line.\r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 17, 17, "The second line.\r", 1, true);

            ValidateGroup(ms[1], 0, 17, 17, true, "The second line.\r", 1);
            ValidateCapture(ms[1], 0, 0, 17, 17, "The second line.\r");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 35, 15, "The third line.", 1, true);

            ValidateGroup(ms[2], 0, 35, 15, true, "The third line.", 1);
            ValidateCapture(ms[2], 0, 0, 35, 15, "The third line.");
        }

        [Test]
        public void SinglelineOptionTest()
        {
            const string pattern = @"^.*";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.", 1, true);

            ValidateGroup(m, 0, 0, 50, true, "The first line.\r\nThe second line.\r\nThe third line.", 1);
            ValidateCapture(m, 0, 0, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.");
        }

        [Test]
        public void SinglelineDotCharTest()
        {
            const string pattern = @"[.]+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 49, 1, ".", 1, true);

            ValidateGroup(m, 0, 49, 1, true, ".", 1);
            ValidateCapture(m, 0, 0, 49, 1, ".");
        }

        [Test]
        public void MultilineAndSinglelineOptionsTest()
        {
            const string pattern = @".+$";
            const string text = "The first line.\r\nThe second line.\r\nThe third line.";
            var rgx = new Regex(pattern, RegexOptions.Multiline | RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.", 1, true);

            ValidateGroup(m, 0, 0, 50, true, "The first line.\r\nThe second line.\r\nThe third line.", 1);
            ValidateCapture(m, 0, 0, 0, 50, "The first line.\r\nThe second line.\r\nThe third line.");
        }
    }
}