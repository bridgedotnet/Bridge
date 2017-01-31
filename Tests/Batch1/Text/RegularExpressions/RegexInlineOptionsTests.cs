using Bridge.Test.NUnit;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex IMNSX - {0}")]
    public class RegexInlineOptionsTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnInlineOptionsTest()
        {
            const string pattern = @"\b((?# case sensitive comparison)D\w+)\s(?ixn)((?#case insensitive comparison)d\w+)\b";
            const string text = "double dare double Double a Drooling dog The Dreaded Deep";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 28, 12, "Drooling dog", 2, true);

            ValidateGroup(ms[0], 0, 28, 12, true, "Drooling dog", 1);
            ValidateCapture(ms[0], 0, 0, 28, 12, "Drooling dog");

            ValidateGroup(ms[0], 1, 28, 8, true, "Drooling", 1);
            ValidateCapture(ms[0], 1, 0, 28, 8, "Drooling");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 45, 12, "Dreaded Deep", 2, true);

            ValidateGroup(ms[1], 0, 45, 12, true, "Dreaded Deep", 1);
            ValidateCapture(ms[1], 0, 0, 45, 12, "Dreaded Deep");

            ValidateGroup(ms[1], 1, 45, 7, true, "Dreaded", 1);
            ValidateCapture(ms[1], 1, 0, 45, 7, "Dreaded");
        }

        [Test]
        public void MsdnIgnoreCaseTest()
        {
            const string pattern = @"\b(?i:t)he\w*\b";
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
        public void MsdnMultilineInlineOptionTest()
        {
            const string pattern = @"(?m)^(\w+)\s(\d+)\r*$";
            const string text = "Joe 164\n" +
                                "Sam 208\n" +
                                "Allison 211\n" +
                                "Gwen 171\n";

            var rgx = new Regex(pattern);
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
        public void MsdnSinglelineInlineOptionTest()
        {
            const string pattern = @"(?s)^.+";
            const string text = "This is one line and\r\nthis is the second.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 41, "This is one line and\r\nthis is the second.", 1, true);

            ValidateGroup(m, 0, 0, 41, true, "This is one line and\r\nthis is the second.", 1);
            ValidateCapture(m, 0, 0, 0, 41, "This is one line and\r\nthis is the second.");
        }

        [Test]
        public void MsdnIngoreWhitespaceInlineOptionTest1()
        {
            const string pattern = @"\b(D\w+)(?x) \s (d\w+) \b";
            const string text = "double dare double Double a Drooling dog The Dreaded Deep";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 28, 12, "Drooling dog", 3, true);

            ValidateGroup(m, 0, 28, 12, true, "Drooling dog", 1);
            ValidateCapture(m, 0, 0, 28, 12, "Drooling dog");

            ValidateGroup(m, 1, 28, 8, true, "Drooling", 1);
            ValidateCapture(m, 1, 0, 28, 8, "Drooling");

            ValidateGroup(m, 2, 37, 3, true, "dog", 1);
            ValidateCapture(m, 2, 0, 37, 3, "dog");
        }

        [Test]
        public void MsdnIngoreWhitespaceInlineOptionTest2()
        {
            const string pattern = @"\{\d+(,-*\d+)*(\:\w{1,4}?)*\}(?x) # Looks for a composite format item.";
            const string text = "{0,-3:F}";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "{0,-3:F}", 3, true);

            ValidateGroup(m, 0, 0, 8, true, "{0,-3:F}", 1);
            ValidateCapture(m, 0, 0, 0, 8, "{0,-3:F}");

            ValidateGroup(m, 1, 2, 3, true, ",-3", 1);
            ValidateCapture(m, 1, 0, 2, 3, ",-3");

            ValidateGroup(m, 2, 5, 2, true, ":F", 1);
            ValidateCapture(m, 2, 0, 5, 2, ":F");
        }

        [Test]
        public void MsdnIngoreWhitespaceInlineOptionTest3()
        {
            const string pattern = @"(?x)\b \(? ( (?:\w+) ,?\s? )+  [\.!?] \)? # Matches an entire sentence.";
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
        public void MsdnExplicitCaptureInlineOptionTest1()
        {
            const string pattern = @"(?n)\b\(?((?>\w+),?\s?)+[\.!?]\)?";
            const string text = "This is the first sentence. Is it the beginning of a literary masterpiece? I think not. Instead, it is a nonsensical paragraph.";
            var rgx = new Regex(pattern);
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

        [Test]
        public void MsdnExplicitCaptureInlineOptionTest2()
        {
            const string pattern = @"\b\(?(?n:(?>\w+),?\s?)+[\.!?]\)?";
            const string text = "This is the first sentence. Is it the beginning of a literary masterpiece? I think not. Instead, it is a nonsensical paragraph.";
            var rgx = new Regex(pattern);
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
        public void IgnoreCaseInlineOptionTest1()
        {
            var rgx = new Regex("(?i)Case Is Ignored");
            var res = rgx.IsMatch("case is ignored");
            Assert.True(res);
        }

        [Test]
        public void IgnoreCaseInlineOptionTest2()
        {
            var rgx = new Regex("Case Is (?i)Ignored Partially");
            var res = rgx.IsMatch("Case Is ignored partially");
            Assert.True(res);
        }

        [Test]
        public void IgnoreCaseInlineOptionTest3()
        {
            var rgx = new Regex("(?-i)Case Sensitive", RegexOptions.IgnoreCase);
            var res = rgx.IsMatch("case sensitive");
            Assert.False(res);
        }

        [Test]
        public void IgnoreCaseInlineOptionTest4()
        {
            var rgx = new Regex("Case Sensitive (?-i)Partially", RegexOptions.IgnoreCase);
            var res = rgx.IsMatch("case sensitive Partially");
            Assert.True(res);
        }

        [Test]
        public void IgnoreCaseInlineOptionTest5()
        {
            var rgx = new Regex("Case Sensitive (?-i)Partially", RegexOptions.IgnoreCase);
            var res = rgx.IsMatch("case sensitive partially");
            Assert.False(res);
        }

        [Test]
        public void MultilineInlineOptionTest1()
        {
            const string pattern = @"(?-m)^abc$";
            const string text = "abc\nabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void MultilineInlineOptionTest2()
        {
            const string pattern = @"(?m)^abc$";
            const string text = "abc\nabc";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "abc", 1, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "abc", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "abc");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 4, 3, "abc", 1, true);

            ValidateGroup(ms[1], 0, 4, 3, true, "abc", 1);
            ValidateCapture(ms[1], 0, 0, 4, 3, "abc");
        }

        [Test]
        public void MultilineInlineOptionTest3()
        {
            const string pattern = @"(?m)^abc(?-m)$";
            const string text = "abc\nabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 3, "abc", 1, true);

            ValidateGroup(m, 0, 4, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 4, 3, "abc");
        }

        [Test]
        public void MultilineInlineOptionTest4()
        {
            const string pattern = @"^abc(?-m)$";
            const string text = "abc\nabc";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 3, "abc", 1, true);

            ValidateGroup(m, 0, 4, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 4, 3, "abc");
        }

        [Test]
        public void MultilineInlineOptionTest5()
        {
            const string pattern = @"(?m:^ab(c(?-m)$))";
            const string text = "abc\nabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 4, 3, "abc", 2, true);

            ValidateGroup(m, 0, 4, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 4, 3, "abc");

            ValidateGroup(m, 1, 6, 1, true, "c", 1);
            ValidateCapture(m, 1, 0, 6, 1, "c");
        }

        [Test]
        public void MultilineInlineOptionTest6()
        {
            const string pattern = @"(?m:^(.*)$)";
            const string text = "abc\r\ndef\r\nhij";
            var rgx = new Regex(pattern, RegexOptions.Multiline);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "abc\r", 2, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "abc\r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "abc\r");

            ValidateGroup(ms[0], 1, 0, 4, true, "abc\r", 1);
            ValidateCapture(ms[0], 1, 0, 0, 4, "abc\r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 4, "def\r", 2, true);

            ValidateGroup(ms[1], 0, 5, 4, true, "def\r", 1);
            ValidateCapture(ms[1], 0, 0, 5, 4, "def\r");

            ValidateGroup(ms[1], 1, 5, 4, true, "def\r", 1);
            ValidateCapture(ms[1], 1, 0, 5, 4, "def\r");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 10, 3, "hij", 2, true);

            ValidateGroup(ms[2], 0, 10, 3, true, "hij", 1);
            ValidateCapture(ms[2], 0, 0, 10, 3, "hij");

            ValidateGroup(ms[2], 1, 10, 3, true, "hij", 1);
            ValidateCapture(ms[2], 1, 0, 10, 3, "hij");
        }

        [Test]
        public void MultilineInlineOptionTest7()
        {
            const string pattern = @"(?m:^(.*)(?-m)$)";
            const string text = "abc\r\nabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 5, 3, "abc", 2, true);

            ValidateGroup(m, 0, 5, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 5, 3, "abc");

            ValidateGroup(m, 1, 5, 3, true, "abc", 1);
            ValidateCapture(m, 1, 0, 5, 3, "abc");
        }

        [Test]
        public void SinglelineInlineOptionTest1()
        {
            const string pattern = @"(?s).+";
            const string text = "abc\r\nabc";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "abc\r\nabc", 1, true);

            ValidateGroup(m, 0, 0, 8, true, "abc\r\nabc", 1);
            ValidateCapture(m, 0, 0, 0, 8, "abc\r\nabc");
        }

        [Test]
        public void SinglelineInlineOptionTest2()
        {
            const string pattern = @"(?s).+def(?-s)(.+hij)?";
            const string text = "abc\r\ndef\r\nhij";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "abc\r\ndef", 2, true);

            ValidateGroup(m, 0, 0, 8, true, "abc\r\ndef", 1);
            ValidateCapture(m, 0, 0, 0, 8, "abc\r\ndef");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void SinglelineInlineOptionTest3()
        {
            const string pattern = @"abc(.+)((?-s:.+))(.+)xyz";
            const string text = "abc\r\n123\r\nxyz";
            var rgx = new Regex(pattern, RegexOptions.Singleline);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 13, "abc\r\n123\r\nxyz", 4, true);

            ValidateGroup(m, 0, 0, 13, true, "abc\r\n123\r\nxyz", 1);
            ValidateCapture(m, 0, 0, 0, 13, "abc\r\n123\r\nxyz");

            ValidateGroup(m, 1, 3, 5, true, "\r\n123", 1);
            ValidateCapture(m, 1, 0, 3, 5, "\r\n123");

            ValidateGroup(m, 2, 8, 1, true, "\r", 1);
            ValidateCapture(m, 2, 0, 8, 1, "\r");

            ValidateGroup(m, 3, 9, 1, true, "\n", 1);
            ValidateCapture(m, 3, 0, 9, 1, "\n");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest1()
        {
            const string pattern = @"(?x)abc def";
            const string text = "abc def";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest2()
        {
            const string pattern = @"(?x)abc def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest3()
        {
            const string pattern = @"(?x)abc def(?-x) hij";
            const string text = "abcdef hij";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 10, "abcdef hij", 1, true);

            ValidateGroup(m, 0, 0, 10, true, "abcdef hij", 1);
            ValidateCapture(m, 0, 0, 0, 10, "abcdef hij");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest4()
        {
            const string pattern = "(?-x)abc\tdef";
            const string text = "abc\tdef";
            var rgx = new Regex(pattern, RegexOptions.IgnorePatternWhitespace);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 7, "abc\tdef", 1, true);

            ValidateGroup(m, 0, 0, 7, true, "abc\tdef", 1);
            ValidateCapture(m, 0, 0, 0, 7, "abc\tdef");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest5()
        {
            const string pattern = @"(?x)[abc ]{3}";
            const string text = "ab ";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "ab ", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "ab ", 1);
            ValidateCapture(m, 0, 0, 0, 3, "ab ");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest6()
        {
            const string pattern = @"(?x)abc\ \sdef";
            const string text = "abc  def";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "abc  def", 1, true);

            ValidateGroup(m, 0, 0, 8, true, "abc  def", 1);
            ValidateCapture(m, 0, 0, 0, 8, "abc  def");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest7()
        {
            const string pattern = @"(?x)abc#def";
            const string text = "abcdef";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "abc", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 0, 3, "abc");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest8()
        {
            const string pattern = @"abc(?x: def) hij";
            const string text = "abcdef hij";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 10, "abcdef hij", 1, true);

            ValidateGroup(m, 0, 0, 10, true, "abcdef hij", 1);
            ValidateCapture(m, 0, 0, 0, 10, "abcdef hij");
        }

        [Test]
        public void IngoreWhitespaceInlineOptionTest9()
        {
            const string pattern = "(?x)abc #CommentToEOL\ndef";
            const string text = "abcdef";
            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "abcdef", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "abcdef", 1);
            ValidateCapture(m, 0, 0, 0, 6, "abcdef");
        }

        [Test]
        public void InlineCommentTest1()
        {
            const string pattern = "abc(?# comment )";
            const string text = "abc";
            var rgx = new Regex(pattern, RegexOptions.None);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 3, "abc", 1, true);

            ValidateGroup(m, 0, 0, 3, true, "abc", 1);
            ValidateCapture(m, 0, 0, 0, 3, "abc");
        }

        [Test]
        public void ExplicitCaptureInlineOptionTest1()
        {
            const string pattern = @"(?n)(a)(?<name1>b)(c)(?<55>d)";
            const string text = "abcd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 3, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");

            ValidateGroup(m, 1, 1, 1, true, "b", 1);
            ValidateCapture(m, 1, 0, 1, 1, "b");

            ValidateGroup(m, 55, 3, 1, true, "d", 1);
            ValidateCapture(m, 55, 0, 3, 1, "d");
        }

        [Test]
        public void ExplicitCaptureInlineOptionTest2()
        {
            const string pattern = @"(?n)(a)(?<name1>b)(?-n)(c)(?<55>d)";
            const string text = "abcd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 4, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");

            ValidateGroup(m, 1, 2, 1, true, "c", 1);
            ValidateCapture(m, 1, 0, 2, 1, "c");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 55, 3, 1, true, "d", 1);
            ValidateCapture(m, 55, 0, 3, 1, "d");
        }

        [Test]
        public void ExplicitCaptureInlineOptionTest3()
        {
            const string pattern = @"(?n:a)(?<name1>b)(c)(?<55>d)";
            const string text = "abcd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 4, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");

            ValidateGroup(m, 1, 2, 1, true, "c", 1);
            ValidateCapture(m, 1, 0, 2, 1, "c");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 55, 3, 1, true, "d", 1);
            ValidateCapture(m, 55, 0, 3, 1, "d");
        }

        [Test]
        public void ExplicitCaptureInlineOptionTest4()
        {
            const string pattern = @"(?n:(a)(?<name1>b)(?-n:(c))(?<55>d))";
            const string text = "abcd";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 4, "abcd", 4, true);

            ValidateGroup(m, 0, 0, 4, true, "abcd", 1);
            ValidateCapture(m, 0, 0, 0, 4, "abcd");

            ValidateGroup(m, 1, 2, 1, true, "c", 1);
            ValidateCapture(m, 1, 0, 2, 1, "c");

            ValidateGroup(m, 2, 1, 1, true, "b", 1);
            ValidateCapture(m, 2, 0, 1, 1, "b");

            ValidateGroup(m, 55, 3, 1, true, "d", 1);
            ValidateCapture(m, 55, 0, 3, 1, "d");
        }
    }
}