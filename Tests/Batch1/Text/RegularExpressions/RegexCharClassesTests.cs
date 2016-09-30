using Bridge.Test;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex: Char Classes - {0}")]
    public class RegexCharClassesTests : RegexTestBase
    {
        #region MSDN

        [Test]
        public void MsdnCharGroupTest1()
        {
            const string pattern = @"[ae]";
            const string text = "lane";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 1, 1, "a", 1, true);

            ValidateGroup(ms[0], 0, 1, 1, true, "a", 1);
            ValidateCapture(ms[0], 0, 0, 1, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "e", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "e", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "e");
        }

        //TODO: Uncomment when Unicode Categories are supported
        /*
        [Test]
        public void MsdnCharGroupTest2()
        {
            const string pattern = @"gr[ae]y\s\S+?[\s\p{P}]";
            const string text = "The gray wolf jumped over the grey wall.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 4, 10, "gray wolf ", 1, true);

            ValidateGroup(ms[0], 0, 4, 10, true, "gray wolf ", 1);
            ValidateCapture(ms[0], 0, 0, 4, 10, "gray wolf ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 30, 10, "grey wall.", 1, true);

            ValidateGroup(ms[1], 0, 30, 10, true, "grey wall.", 1);
            ValidateCapture(ms[1], 0, 0, 30, 10, "grey wall.");
        }
        */

        [Test]
        public void MsdnCharGroupTest3()
        {
            const string pattern = @"\b[A-Z]\w*\b";
            const string text = "A city Albany Zulu maritime Marseilles";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "A", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "A", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "A");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 7, 6, "Albany", 1, true);

            ValidateGroup(ms[1], 0, 7, 6, true, "Albany", 1);
            ValidateCapture(ms[1], 0, 0, 7, 6, "Albany");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 14, 4, "Zulu", 1, true);

            ValidateGroup(ms[2], 0, 14, 4, true, "Zulu", 1);
            ValidateCapture(ms[2], 0, 0, 14, 4, "Zulu");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 28, 10, "Marseilles", 1, true);

            ValidateGroup(ms[3], 0, 28, 10, true, "Marseilles", 1);
            ValidateCapture(ms[3], 0, 0, 28, 10, "Marseilles");
        }

        [Test]
        public void MsdnNegativeCharGroupTest1()
        {
            const string pattern = @"[^aei]";
            const string text = "reign";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "r", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "r", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "r");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "g", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "g", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "g");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 4, 1, "n", 1, true);

            ValidateGroup(ms[2], 0, 4, 1, true, "n", 1);
            ValidateCapture(ms[2], 0, 0, 4, 1, "n");
        }

        [Test]
        public void MsdnNegativeCharGroupTest2()
        {
            const string pattern = @"\bth[^o]\w+\b";
            const string text = "thought thing though them through thus thorough this";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 8, 5, "thing", 1, true);

            ValidateGroup(ms[0], 0, 8, 5, true, "thing", 1);
            ValidateCapture(ms[0], 0, 0, 8, 5, "thing");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 21, 4, "them", 1, true);

            ValidateGroup(ms[1], 0, 21, 4, true, "them", 1);
            ValidateCapture(ms[1], 0, 0, 21, 4, "them");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 26, 7, "through", 1, true);

            ValidateGroup(ms[2], 0, 26, 7, true, "through", 1);
            ValidateCapture(ms[2], 0, 0, 26, 7, "through");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 34, 4, "thus", 1, true);

            ValidateGroup(ms[3], 0, 34, 4, true, "thus", 1);
            ValidateCapture(ms[3], 0, 0, 34, 4, "thus");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 48, 4, "this", 1, true);

            ValidateGroup(ms[4], 0, 48, 4, true, "this", 1);
            ValidateCapture(ms[4], 0, 0, 48, 4, "this");
        }

        [Test]
        public void MsdnDotCharTest1()
        {
            const string pattern = @"a.e";
            const string text = "water";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 3, "ate", 1, true);

            ValidateGroup(m, 0, 1, 3, true, "ate", 1);
            ValidateCapture(m, 0, 0, 1, 3, "ate");
        }

        [Test]
        public void MsdnDotCharTest2()
        {
            const string pattern = @"^.+";
            const string text = "This is one line and\r\nthis is the second.";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 21, "This is one line and\r", 1, true);

            ValidateGroup(m, 0, 0, 21, true, "This is one line and\r", 1);
            ValidateCapture(m, 0, 0, 0, 21, "This is one line and\r");
        }

        [Test]
        public void MsdnDotCharTest3()
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
        public void MsdnCharRangeInGroupTest()
        {
            const string pattern = @"[A-Z]";
            const string text = "AB123";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "A", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "A", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "A");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "B", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "B", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "B");
        }

        //TODO: Uncomment when Unicode Categories are supported
        /*
        [Test]
        public void MsdnUnicodeCategoryTest1()
        {
            const string pattern = @"\p{Lu}";
            const string text = "City Lights";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "C", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "C", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "C");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 1, "L", 1, true);

            ValidateGroup(ms[1], 0, 5, 1, true, "L", 1);
            ValidateCapture(ms[1], 0, 0, 5, 1, "L");
        }

        [Test]
        public void MsdnUnicodeCategoryTest2()
        {
            const string pattern = @"\p{IsCyrillic}";
            const string text = "ДЖem";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "Д", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "Д", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "Д");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "Ж", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "Ж", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "Ж");
        }

        [Test]
        public void MsdnUnicodeCategoryTest3()
        {
            const string pattern = @"\b(\p{IsGreek}+(\s)?)+\p{Pd}\s(\p{IsBasicLatin}+(\s)?)+";
            const string text = "Κατα Μαθθαίον - The Gospel of Matthew";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 37, "Κατα Μαθθαίον - The Gospel of Matthew", 5, true);

            ValidateGroup(m, 0, 0, 37, true, "Κατα Μαθθαίον - The Gospel of Matthew", 1);
            ValidateCapture(m, 0, 0, 0, 37, "Κατα Μαθθαίον - The Gospel of Matthew");

            ValidateGroup(m, 1, 5, 9, true, "Μαθθαίον ", 2);
            ValidateCapture(m, 1, 0, 0, 5, "Κατα ");
            ValidateCapture(m, 1, 1, 5, 9, "Μαθθαίον ");

            ValidateGroup(m, 2, 13, 1, true, " ", 2);
            ValidateCapture(m, 2, 0, 4, 1, " ");
            ValidateCapture(m, 2, 1, 13, 1, " ");

            ValidateGroup(m, 3, 16, 21, true, "The Gospel of Matthew", 1);
            ValidateCapture(m, 3, 0, 16, 21, "The Gospel of Matthew");

            ValidateGroup(m, 4, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnNegativeUnicodeCategoryTest1()
        {
            const string pattern = @"\P{Lu}";
            const string text = "City";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(3, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 1, 1, "i", 1, true);

            ValidateGroup(ms[0], 0, 1, 1, true, "i", 1);
            ValidateCapture(ms[0], 0, 0, 1, 1, "i");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 2, 1, "t", 1, true);

            ValidateGroup(ms[1], 0, 2, 1, true, "t", 1);
            ValidateCapture(ms[1], 0, 0, 2, 1, "t");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 3, 1, "y", 1, true);

            ValidateGroup(ms[2], 0, 3, 1, true, "y", 1);
            ValidateCapture(ms[2], 0, 0, 3, 1, "y");
        }

        [Test]
        public void MsdnNegativeUnicodeCategoryTest2()
        {
            const string pattern = @"\P{IsCyrillic}";
            const string text = "ДЖem";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 2, 1, "e", 1, true);

            ValidateGroup(ms[0], 0, 2, 1, true, "e", 1);
            ValidateCapture(ms[0], 0, 0, 2, 1, "e");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "m", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "m", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "m");
        }

        [Test]
        public void MsdnNegativeUnicodeCategoryTest3()
        {
            const string pattern = @"(\P{Sc})+";
            const string text = "£1,073,142.68";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 12, "1,073,142.68", 2, true);

            ValidateGroup(m, 0, 1, 12, true, "1,073,142.68", 1);
            ValidateCapture(m, 0, 0, 1, 12, "1,073,142.68");

            ValidateGroup(m, 1, 12, 1, true, "8", 12);
            ValidateCapture(m, 1, 0, 1, 1, "1");
            ValidateCapture(m, 1, 1, 2, 1, ",");
            ValidateCapture(m, 1, 2, 3, 1, "0");
            ValidateCapture(m, 1, 3, 4, 1, "7");
            ValidateCapture(m, 1, 4, 5, 1, "3");
            ValidateCapture(m, 1, 5, 6, 1, ",");
            ValidateCapture(m, 1, 6, 7, 1, "1");
            ValidateCapture(m, 1, 7, 8, 1, "4");
            ValidateCapture(m, 1, 8, 9, 1, "2");
            ValidateCapture(m, 1, 9, 10, 1, ".");
            ValidateCapture(m, 1, 10, 11, 1, "6");
            ValidateCapture(m, 1, 11, 12, 1, "8");
        }

        [Test]
        public void MsdnNegativeUnicodeCategoryTest4()
        {
            const string pattern = @"(\P{Sc})+";
            const string text = "€120";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 3, "120", 2, true);

            ValidateGroup(m, 0, 1, 3, true, "120", 1);
            ValidateCapture(m, 0, 0, 1, 3, "120");

            ValidateGroup(m, 1, 3, 1, true, "0", 3);
            ValidateCapture(m, 1, 0, 1, 1, "1");
            ValidateCapture(m, 1, 1, 2, 1, "2");
            ValidateCapture(m, 1, 2, 3, 1, "0");
        }
        */

        [Test]
        public void MsdnWordCharTest1()
        {
            const string pattern = @"\w";
            const string text = "ID A1.3";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "I", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "I", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "I");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "D", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "D", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "D");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 3, 1, "A", 1, true);

            ValidateGroup(ms[2], 0, 3, 1, true, "A", 1);
            ValidateCapture(ms[2], 0, 0, 3, 1, "A");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 4, 1, "1", 1, true);

            ValidateGroup(ms[3], 0, 4, 1, true, "1", 1);
            ValidateCapture(ms[3], 0, 0, 4, 1, "1");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 6, 1, "3", 1, true);

            ValidateGroup(ms[4], 0, 6, 1, true, "3", 1);
            ValidateCapture(ms[4], 0, 0, 6, 1, "3");
        }

        [Test]
        public void MsdnWordCharTest2()
        {
            const string pattern = @"(\w)\1";
            const string text = "summer";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 2, 2, "mm", 2, true);

            ValidateGroup(m, 0, 2, 2, true, "mm", 1);
            ValidateCapture(m, 0, 0, 2, 2, "mm");

            ValidateGroup(m, 1, 2, 1, true, "m", 1);
            ValidateCapture(m, 1, 0, 2, 1, "m");
        }

        [Test]
        public void MsdnNonWordCharTest1()
        {
            const string pattern = @"\W";
            const string text = "ID A1.3";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 2, 1, " ", 1, true);

            ValidateGroup(ms[0], 0, 2, 1, true, " ", 1);
            ValidateCapture(ms[0], 0, 0, 2, 1, " ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 1, ".", 1, true);

            ValidateGroup(ms[1], 0, 5, 1, true, ".", 1);
            ValidateCapture(ms[1], 0, 0, 5, 1, ".");
        }

        [Test]
        public void MsdnNonWordCharTest2()
        {
            const string pattern = @"\b(\w+)(\W){1,2}";
            const string text = "The old, grey mare slowly walked across the narrow, green pasture.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(11, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "The ", 3, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "The ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "The ");

            ValidateGroup(ms[0], 1, 0, 3, true, "The", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "The");

            ValidateGroup(ms[0], 2, 3, 1, true, " ", 1);
            ValidateCapture(ms[0], 2, 0, 3, 1, " ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 4, 5, "old, ", 3, true);

            ValidateGroup(ms[1], 0, 4, 5, true, "old, ", 1);
            ValidateCapture(ms[1], 0, 0, 4, 5, "old, ");

            ValidateGroup(ms[1], 1, 4, 3, true, "old", 1);
            ValidateCapture(ms[1], 1, 0, 4, 3, "old");

            ValidateGroup(ms[1], 2, 8, 1, true, " ", 2);
            ValidateCapture(ms[1], 2, 0, 7, 1, ",");
            ValidateCapture(ms[1], 2, 1, 8, 1, " ");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 9, 5, "grey ", 3, true);

            ValidateGroup(ms[2], 0, 9, 5, true, "grey ", 1);
            ValidateCapture(ms[2], 0, 0, 9, 5, "grey ");

            ValidateGroup(ms[2], 1, 9, 4, true, "grey", 1);
            ValidateCapture(ms[2], 1, 0, 9, 4, "grey");

            ValidateGroup(ms[2], 2, 13, 1, true, " ", 1);
            ValidateCapture(ms[2], 2, 0, 13, 1, " ");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 14, 5, "mare ", 3, true);

            ValidateGroup(ms[3], 0, 14, 5, true, "mare ", 1);
            ValidateCapture(ms[3], 0, 0, 14, 5, "mare ");

            ValidateGroup(ms[3], 1, 14, 4, true, "mare", 1);
            ValidateCapture(ms[3], 1, 0, 14, 4, "mare");

            ValidateGroup(ms[3], 2, 18, 1, true, " ", 1);
            ValidateCapture(ms[3], 2, 0, 18, 1, " ");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 19, 7, "slowly ", 3, true);

            ValidateGroup(ms[4], 0, 19, 7, true, "slowly ", 1);
            ValidateCapture(ms[4], 0, 0, 19, 7, "slowly ");

            ValidateGroup(ms[4], 1, 19, 6, true, "slowly", 1);
            ValidateCapture(ms[4], 1, 0, 19, 6, "slowly");

            ValidateGroup(ms[4], 2, 25, 1, true, " ", 1);
            ValidateCapture(ms[4], 2, 0, 25, 1, " ");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 26, 7, "walked ", 3, true);

            ValidateGroup(ms[5], 0, 26, 7, true, "walked ", 1);
            ValidateCapture(ms[5], 0, 0, 26, 7, "walked ");

            ValidateGroup(ms[5], 1, 26, 6, true, "walked", 1);
            ValidateCapture(ms[5], 1, 0, 26, 6, "walked");

            ValidateGroup(ms[5], 2, 32, 1, true, " ", 1);
            ValidateCapture(ms[5], 2, 0, 32, 1, " ");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 33, 7, "across ", 3, true);

            ValidateGroup(ms[6], 0, 33, 7, true, "across ", 1);
            ValidateCapture(ms[6], 0, 0, 33, 7, "across ");

            ValidateGroup(ms[6], 1, 33, 6, true, "across", 1);
            ValidateCapture(ms[6], 1, 0, 33, 6, "across");

            ValidateGroup(ms[6], 2, 39, 1, true, " ", 1);
            ValidateCapture(ms[6], 2, 0, 39, 1, " ");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 40, 4, "the ", 3, true);

            ValidateGroup(ms[7], 0, 40, 4, true, "the ", 1);
            ValidateCapture(ms[7], 0, 0, 40, 4, "the ");

            ValidateGroup(ms[7], 1, 40, 3, true, "the", 1);
            ValidateCapture(ms[7], 1, 0, 40, 3, "the");

            ValidateGroup(ms[7], 2, 43, 1, true, " ", 1);
            ValidateCapture(ms[7], 2, 0, 43, 1, " ");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 44, 8, "narrow, ", 3, true);

            ValidateGroup(ms[8], 0, 44, 8, true, "narrow, ", 1);
            ValidateCapture(ms[8], 0, 0, 44, 8, "narrow, ");

            ValidateGroup(ms[8], 1, 44, 6, true, "narrow", 1);
            ValidateCapture(ms[8], 1, 0, 44, 6, "narrow");

            ValidateGroup(ms[8], 2, 51, 1, true, " ", 2);
            ValidateCapture(ms[8], 2, 0, 50, 1, ",");
            ValidateCapture(ms[8], 2, 1, 51, 1, " ");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 52, 6, "green ", 3, true);

            ValidateGroup(ms[9], 0, 52, 6, true, "green ", 1);
            ValidateCapture(ms[9], 0, 0, 52, 6, "green ");

            ValidateGroup(ms[9], 1, 52, 5, true, "green", 1);
            ValidateCapture(ms[9], 1, 0, 52, 5, "green");

            ValidateGroup(ms[9], 2, 57, 1, true, " ", 1);
            ValidateCapture(ms[9], 2, 0, 57, 1, " ");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 58, 8, "pasture.", 3, true);

            ValidateGroup(ms[10], 0, 58, 8, true, "pasture.", 1);
            ValidateCapture(ms[10], 0, 0, 58, 8, "pasture.");

            ValidateGroup(ms[10], 1, 58, 7, true, "pasture", 1);
            ValidateCapture(ms[10], 1, 0, 58, 7, "pasture");

            ValidateGroup(ms[10], 2, 65, 1, true, ".", 1);
            ValidateCapture(ms[10], 2, 0, 65, 1, ".");
        }

        [Test]
        public void MsdnSpaceCharTest1()
        {
            const string pattern = @"\w\s";
            const string text = "ID A1.3";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 1, 2, "D ", 1, true);

            ValidateGroup(m, 0, 1, 2, true, "D ", 1);
            ValidateCapture(m, 0, 0, 1, 2, "D ");
        }

        [Test]
        public void MsdnSpaceCharTest2()
        {
            const string pattern = @"\b\w+(e)?s(\s|$)";
            const string text = "matches stores stops leave leaves";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 8, "matches ", 3, true);

            ValidateGroup(ms[0], 0, 0, 8, true, "matches ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 8, "matches ");

            ValidateGroup(ms[0], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[0], 2, 7, 1, true, " ", 1);
            ValidateCapture(ms[0], 2, 0, 7, 1, " ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 8, 7, "stores ", 3, true);

            ValidateGroup(ms[1], 0, 8, 7, true, "stores ", 1);
            ValidateCapture(ms[1], 0, 0, 8, 7, "stores ");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 14, 1, true, " ", 1);
            ValidateCapture(ms[1], 2, 0, 14, 1, " ");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 15, 6, "stops ", 3, true);

            ValidateGroup(ms[2], 0, 15, 6, true, "stops ", 1);
            ValidateCapture(ms[2], 0, 0, 15, 6, "stops ");

            ValidateGroup(ms[2], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[2], 2, 20, 1, true, " ", 1);
            ValidateCapture(ms[2], 2, 0, 20, 1, " ");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 27, 6, "leaves", 3, true);

            ValidateGroup(ms[3], 0, 27, 6, true, "leaves", 1);
            ValidateCapture(ms[3], 0, 0, 27, 6, "leaves");

            ValidateGroup(ms[3], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[3], 2, 33, 0, true, "", 1);
            ValidateCapture(ms[3], 2, 0, 33, 0, "");
        }

        [Test]
        public void MsdnNonSpaceCharTest1()
        {
            const string pattern = @"\s\S";
            const string text = "int __ctr";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 3, 2, " _", 1, true);

            ValidateGroup(m, 0, 3, 2, true, " _", 1);
            ValidateCapture(m, 0, 0, 3, 2, " _");
        }

        [Test]
        public void MsdnNonSpaceCharTest2()
        {
            const string pattern = @"\b(\S+)\s?";
            const string text = "This is the first sentence of the first paragraph. This is the second sentence.\nThis is the only sentence of the second paragraph.";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(23, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 5, "This ", 2, true);

            ValidateGroup(ms[0], 0, 0, 5, true, "This ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 5, "This ");

            ValidateGroup(ms[0], 1, 0, 4, true, "This", 1);
            ValidateCapture(ms[0], 1, 0, 0, 4, "This");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 3, "is ", 2, true);

            ValidateGroup(ms[1], 0, 5, 3, true, "is ", 1);
            ValidateCapture(ms[1], 0, 0, 5, 3, "is ");

            ValidateGroup(ms[1], 1, 5, 2, true, "is", 1);
            ValidateCapture(ms[1], 1, 0, 5, 2, "is");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 8, 4, "the ", 2, true);

            ValidateGroup(ms[2], 0, 8, 4, true, "the ", 1);
            ValidateCapture(ms[2], 0, 0, 8, 4, "the ");

            ValidateGroup(ms[2], 1, 8, 3, true, "the", 1);
            ValidateCapture(ms[2], 1, 0, 8, 3, "the");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 12, 6, "first ", 2, true);

            ValidateGroup(ms[3], 0, 12, 6, true, "first ", 1);
            ValidateCapture(ms[3], 0, 0, 12, 6, "first ");

            ValidateGroup(ms[3], 1, 12, 5, true, "first", 1);
            ValidateCapture(ms[3], 1, 0, 12, 5, "first");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 18, 9, "sentence ", 2, true);

            ValidateGroup(ms[4], 0, 18, 9, true, "sentence ", 1);
            ValidateCapture(ms[4], 0, 0, 18, 9, "sentence ");

            ValidateGroup(ms[4], 1, 18, 8, true, "sentence", 1);
            ValidateCapture(ms[4], 1, 0, 18, 8, "sentence");

            // Match #5:
            Assert.NotNull(ms[5], "Match[5] is not null.");
            ValidateMatch(ms[5], 27, 3, "of ", 2, true);

            ValidateGroup(ms[5], 0, 27, 3, true, "of ", 1);
            ValidateCapture(ms[5], 0, 0, 27, 3, "of ");

            ValidateGroup(ms[5], 1, 27, 2, true, "of", 1);
            ValidateCapture(ms[5], 1, 0, 27, 2, "of");

            // Match #6:
            Assert.NotNull(ms[6], "Match[6] is not null.");
            ValidateMatch(ms[6], 30, 4, "the ", 2, true);

            ValidateGroup(ms[6], 0, 30, 4, true, "the ", 1);
            ValidateCapture(ms[6], 0, 0, 30, 4, "the ");

            ValidateGroup(ms[6], 1, 30, 3, true, "the", 1);
            ValidateCapture(ms[6], 1, 0, 30, 3, "the");

            // Match #7:
            Assert.NotNull(ms[7], "Match[7] is not null.");
            ValidateMatch(ms[7], 34, 6, "first ", 2, true);

            ValidateGroup(ms[7], 0, 34, 6, true, "first ", 1);
            ValidateCapture(ms[7], 0, 0, 34, 6, "first ");

            ValidateGroup(ms[7], 1, 34, 5, true, "first", 1);
            ValidateCapture(ms[7], 1, 0, 34, 5, "first");

            // Match #8:
            Assert.NotNull(ms[8], "Match[8] is not null.");
            ValidateMatch(ms[8], 40, 11, "paragraph. ", 2, true);

            ValidateGroup(ms[8], 0, 40, 11, true, "paragraph. ", 1);
            ValidateCapture(ms[8], 0, 0, 40, 11, "paragraph. ");

            ValidateGroup(ms[8], 1, 40, 10, true, "paragraph.", 1);
            ValidateCapture(ms[8], 1, 0, 40, 10, "paragraph.");

            // Match #9:
            Assert.NotNull(ms[9], "Match[9] is not null.");
            ValidateMatch(ms[9], 51, 5, "This ", 2, true);

            ValidateGroup(ms[9], 0, 51, 5, true, "This ", 1);
            ValidateCapture(ms[9], 0, 0, 51, 5, "This ");

            ValidateGroup(ms[9], 1, 51, 4, true, "This", 1);
            ValidateCapture(ms[9], 1, 0, 51, 4, "This");

            // Match #10:
            Assert.NotNull(ms[10], "Match[10] is not null.");
            ValidateMatch(ms[10], 56, 3, "is ", 2, true);

            ValidateGroup(ms[10], 0, 56, 3, true, "is ", 1);
            ValidateCapture(ms[10], 0, 0, 56, 3, "is ");

            ValidateGroup(ms[10], 1, 56, 2, true, "is", 1);
            ValidateCapture(ms[10], 1, 0, 56, 2, "is");

            // Match #11:
            Assert.NotNull(ms[11], "Match[11] is not null.");
            ValidateMatch(ms[11], 59, 4, "the ", 2, true);

            ValidateGroup(ms[11], 0, 59, 4, true, "the ", 1);
            ValidateCapture(ms[11], 0, 0, 59, 4, "the ");

            ValidateGroup(ms[11], 1, 59, 3, true, "the", 1);
            ValidateCapture(ms[11], 1, 0, 59, 3, "the");

            // Match #12:
            Assert.NotNull(ms[12], "Match[12] is not null.");
            ValidateMatch(ms[12], 63, 7, "second ", 2, true);

            ValidateGroup(ms[12], 0, 63, 7, true, "second ", 1);
            ValidateCapture(ms[12], 0, 0, 63, 7, "second ");

            ValidateGroup(ms[12], 1, 63, 6, true, "second", 1);
            ValidateCapture(ms[12], 1, 0, 63, 6, "second");

            // Match #13:
            Assert.NotNull(ms[13], "Match[13] is not null.");
            ValidateMatch(ms[13], 70, 10, "sentence.\n", 2, true);

            ValidateGroup(ms[13], 0, 70, 10, true, "sentence.\n", 1);
            ValidateCapture(ms[13], 0, 0, 70, 10, "sentence.\n");

            ValidateGroup(ms[13], 1, 70, 9, true, "sentence.", 1);
            ValidateCapture(ms[13], 1, 0, 70, 9, "sentence.");

            // Match #14:
            Assert.NotNull(ms[14], "Match[14] is not null.");
            ValidateMatch(ms[14], 80, 5, "This ", 2, true);

            ValidateGroup(ms[14], 0, 80, 5, true, "This ", 1);
            ValidateCapture(ms[14], 0, 0, 80, 5, "This ");

            ValidateGroup(ms[14], 1, 80, 4, true, "This", 1);
            ValidateCapture(ms[14], 1, 0, 80, 4, "This");

            // Match #15:
            Assert.NotNull(ms[15], "Match[15] is not null.");
            ValidateMatch(ms[15], 85, 3, "is ", 2, true);

            ValidateGroup(ms[15], 0, 85, 3, true, "is ", 1);
            ValidateCapture(ms[15], 0, 0, 85, 3, "is ");

            ValidateGroup(ms[15], 1, 85, 2, true, "is", 1);
            ValidateCapture(ms[15], 1, 0, 85, 2, "is");

            // Match #16:
            Assert.NotNull(ms[16], "Match[16] is not null.");
            ValidateMatch(ms[16], 88, 4, "the ", 2, true);

            ValidateGroup(ms[16], 0, 88, 4, true, "the ", 1);
            ValidateCapture(ms[16], 0, 0, 88, 4, "the ");

            ValidateGroup(ms[16], 1, 88, 3, true, "the", 1);
            ValidateCapture(ms[16], 1, 0, 88, 3, "the");

            // Match #17:
            Assert.NotNull(ms[17], "Match[17] is not null.");
            ValidateMatch(ms[17], 92, 5, "only ", 2, true);

            ValidateGroup(ms[17], 0, 92, 5, true, "only ", 1);
            ValidateCapture(ms[17], 0, 0, 92, 5, "only ");

            ValidateGroup(ms[17], 1, 92, 4, true, "only", 1);
            ValidateCapture(ms[17], 1, 0, 92, 4, "only");

            // Match #18:
            Assert.NotNull(ms[18], "Match[18] is not null.");
            ValidateMatch(ms[18], 97, 9, "sentence ", 2, true);

            ValidateGroup(ms[18], 0, 97, 9, true, "sentence ", 1);
            ValidateCapture(ms[18], 0, 0, 97, 9, "sentence ");

            ValidateGroup(ms[18], 1, 97, 8, true, "sentence", 1);
            ValidateCapture(ms[18], 1, 0, 97, 8, "sentence");

            // Match #19:
            Assert.NotNull(ms[19], "Match[19] is not null.");
            ValidateMatch(ms[19], 106, 3, "of ", 2, true);

            ValidateGroup(ms[19], 0, 106, 3, true, "of ", 1);
            ValidateCapture(ms[19], 0, 0, 106, 3, "of ");

            ValidateGroup(ms[19], 1, 106, 2, true, "of", 1);
            ValidateCapture(ms[19], 1, 0, 106, 2, "of");

            // Match #20:
            Assert.NotNull(ms[20], "Match[20] is not null.");
            ValidateMatch(ms[20], 109, 4, "the ", 2, true);

            ValidateGroup(ms[20], 0, 109, 4, true, "the ", 1);
            ValidateCapture(ms[20], 0, 0, 109, 4, "the ");

            ValidateGroup(ms[20], 1, 109, 3, true, "the", 1);
            ValidateCapture(ms[20], 1, 0, 109, 3, "the");

            // Match #21:
            Assert.NotNull(ms[21], "Match[21] is not null.");
            ValidateMatch(ms[21], 113, 7, "second ", 2, true);

            ValidateGroup(ms[21], 0, 113, 7, true, "second ", 1);
            ValidateCapture(ms[21], 0, 0, 113, 7, "second ");

            ValidateGroup(ms[21], 1, 113, 6, true, "second", 1);
            ValidateCapture(ms[21], 1, 0, 113, 6, "second");

            // Match #22:
            Assert.NotNull(ms[22], "Match[22] is not null.");
            ValidateMatch(ms[22], 120, 10, "paragraph.", 2, true);

            ValidateGroup(ms[22], 0, 120, 10, true, "paragraph.", 1);
            ValidateCapture(ms[22], 0, 0, 120, 10, "paragraph.");

            ValidateGroup(ms[22], 1, 120, 10, true, "paragraph.", 1);
            ValidateCapture(ms[22], 1, 0, 120, 10, "paragraph.");
        }

        [Test]
        public void MsdnDigitCharTest1()
        {
            const string pattern = @"\d";
            const string text = "4 = IV";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 1, "4", 1, true);

            ValidateGroup(m, 0, 0, 1, true, "4", 1);
            ValidateCapture(m, 0, 0, 0, 1, "4");
        }

        [Test]
        public void MsdnDigitCharTest2()
        {
            const string pattern = @"^(\(?\d{3}\)?[\s-])?\d{3}-\d{4}$";
            const string text = "(212) 111-1111";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 14, "(212) 111-1111", 2, true);

            ValidateGroup(m, 0, 0, 14, true, "(212) 111-1111", 1);
            ValidateCapture(m, 0, 0, 0, 14, "(212) 111-1111");

            ValidateGroup(m, 1, 0, 6, true, "(212) ", 1);
            ValidateCapture(m, 1, 0, 0, 6, "(212) ");
        }

        [Test]
        public void MsdnDigitCharTest3()
        {
            const string pattern = @"^(\(?\d{3}\)?[\s-])?\d{3}-\d{4}$";
            const string text = "01 999-9999";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnNonDigitCharTest1()
        {
            const string pattern = @"\D";
            const string text = "4 = IV";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 1, 1, " ", 1, true);

            ValidateGroup(ms[0], 0, 1, 1, true, " ", 1);
            ValidateCapture(ms[0], 0, 0, 1, 1, " ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 2, 1, "=", 1, true);

            ValidateGroup(ms[1], 0, 2, 1, true, "=", 1);
            ValidateCapture(ms[1], 0, 0, 2, 1, "=");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 3, 1, " ", 1, true);

            ValidateGroup(ms[2], 0, 3, 1, true, " ", 1);
            ValidateCapture(ms[2], 0, 0, 3, 1, " ");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 4, 1, "I", 1, true);

            ValidateGroup(ms[3], 0, 4, 1, true, "I", 1);
            ValidateCapture(ms[3], 0, 0, 4, 1, "I");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 5, 1, "V", 1, true);

            ValidateGroup(ms[4], 0, 5, 1, true, "V", 1);
            ValidateCapture(ms[4], 0, 0, 5, 1, "V");
        }

        [Test]
        public void MsdnNonDigitCharTest2()
        {
            const string pattern = @"^\D\d{1,5}\D*$";
            const string text = "A1039C";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 6, "A1039C", 1, true);

            ValidateGroup(m, 0, 0, 6, true, "A1039C", 1);
            ValidateCapture(m, 0, 0, 0, 6, "A1039C");
        }

        [Test]
        public void MsdnNonDigitCharTest3()
        {
            const string pattern = @"^\D\d{1,5}\D*$";
            const string text = "Y938518";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnSubstactGroupTest1()
        {
            const string pattern = @"^[0-9-[2468]]+$";
            const string text = "123";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnSubstactGroupTest2()
        {
            const string pattern = @"^[0-9-[2468]]+$";
            const string text = "13579753";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "13579753", 1, true);

            ValidateGroup(m, 0, 0, 8, true, "13579753", 1);
            ValidateCapture(m, 0, 0, 0, 8, "13579753");
        }

        [Test]
        public void MsdnSubstactGroupTest3()
        {
            const string pattern = @"^[0-9-[2468]]+$";
            const string text = "3557798";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void MsdnSubstactGroupTest4()
        {
            const string pattern = @"^[0-9-[2468]]+$";
            const string text = "335599901";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 9, "335599901", 1, true);

            ValidateGroup(m, 0, 0, 9, true, "335599901", 1);
            ValidateCapture(m, 0, 0, 0, 9, "335599901");
        }

        #endregion MSDN

        [Test]
        public void CharClassesInCharGroupTest()
        {
            const string pattern = @"([ABC\s]+)";
            const string text = "AC  D AA";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "AC  ", 2, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "AC  ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "AC  ");

            ValidateGroup(ms[0], 1, 0, 4, true, "AC  ", 1);
            ValidateCapture(ms[0], 1, 0, 0, 4, "AC  ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 5, 3, " AA", 2, true);

            ValidateGroup(ms[1], 0, 5, 3, true, " AA", 1);
            ValidateCapture(ms[1], 0, 0, 5, 3, " AA");

            ValidateGroup(ms[1], 1, 5, 3, true, " AA", 1);
            ValidateCapture(ms[1], 1, 0, 5, 3, " AA");
        }

        [Test]
        public void CaretSymbolInCharGroupTest()
        {
            const string pattern = @"([abc^d]+)";
            const string text = "abc d^a";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 3, "abc", 2, true);

            ValidateGroup(ms[0], 0, 0, 3, true, "abc", 1);
            ValidateCapture(ms[0], 0, 0, 0, 3, "abc");

            ValidateGroup(ms[0], 1, 0, 3, true, "abc", 1);
            ValidateCapture(ms[0], 1, 0, 0, 3, "abc");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 4, 3, "d^a", 2, true);

            ValidateGroup(ms[1], 0, 4, 3, true, "d^a", 1);
            ValidateCapture(ms[1], 0, 0, 4, 3, "d^a");

            ValidateGroup(ms[1], 1, 4, 3, true, "d^a", 1);
            ValidateCapture(ms[1], 1, 0, 4, 3, "d^a");
        }

        [Test]
        public void NegativeCharGroupTest()
        {
            const string pattern = @"([^abc]+)";
            const string text = "def aaa fff";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 4, "def ", 2, true);

            ValidateGroup(ms[0], 0, 0, 4, true, "def ", 1);
            ValidateCapture(ms[0], 0, 0, 0, 4, "def ");

            ValidateGroup(ms[0], 1, 0, 4, true, "def ", 1);
            ValidateCapture(ms[0], 1, 0, 0, 4, "def ");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 7, 4, " fff", 2, true);

            ValidateGroup(ms[1], 0, 7, 4, true, " fff", 1);
            ValidateCapture(ms[1], 0, 0, 7, 4, " fff");

            ValidateGroup(ms[1], 1, 7, 4, true, " fff", 1);
            ValidateCapture(ms[1], 1, 0, 7, 4, " fff");
        }

        [Test]
        public void CombiningCharRangesTest()
        {
            const string pattern = @"([e-gda-ce]+)";
            const string text = "fb";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "fb", 2, true);

            ValidateGroup(m, 0, 0, 2, true, "fb", 1);
            ValidateCapture(m, 0, 0, 0, 2, "fb");

            ValidateGroup(m, 1, 0, 2, true, "fb", 1);
            ValidateCapture(m, 1, 0, 0, 2, "fb");
        }

        [Test]
        public void SubstractGroupTest1()
        {
            const string pattern = @"[a-c-[^b-c]]";
            const string text = "b";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 1, "b", 1, true);

            ValidateGroup(m, 0, 0, 1, true, "b", 1);
            ValidateCapture(m, 0, 0, 0, 1, "b");
        }

        [Test]
        public void SubstractGroupTest2()
        {
            const string pattern = @"[a-c-[b-c]]";
            const string text = "b";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void SubstractGroupTest3()
        {
            const string pattern = @"[a-c-[b-c]]";
            const string text = "a";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 1, "a", 1, true);

            ValidateGroup(m, 0, 0, 1, true, "a", 1);
            ValidateCapture(m, 0, 0, 0, 1, "a");
        }

        [Test]
        public void SubstractNegativeGroupTest1()
        {
            const string pattern = @"[^a-f-[a-c]]";
            const string text = "abcdefg";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 6, 1, "g", 1, true);

            ValidateGroup(m, 0, 6, 1, true, "g", 1);
            ValidateCapture(m, 0, 0, 6, 1, "g");
        }

        [Test]
        public void SubstractNegativeGroupTest2()
        {
            const string pattern = @"[^a-f-[^a-c]]";
            const string text = "abcdefg";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 1, false);

            ValidateGroup(m, 0, 0, 0, false, "", 0);
        }

        [Test]
        public void SubstractNegativeGroupTest3()
        {
            const string pattern = @"[^a-f-[^a-g]]";
            const string text = "abcdefg";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 6, 1, "g", 1, true);

            ValidateGroup(m, 0, 6, 1, true, "g", 1);
            ValidateCapture(m, 0, 0, 6, 1, "g");
        }

        [Test]
        public void SubstractNestedGroupsTest1()
        {
            const string pattern = @"[a-z-[d-z-[d-e]]]";
            const string text = "abcdefg";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(5, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "a", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "b", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "b", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "b");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 2, 1, "c", 1, true);

            ValidateGroup(ms[2], 0, 2, 1, true, "c", 1);
            ValidateCapture(ms[2], 0, 0, 2, 1, "c");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 3, 1, "d", 1, true);

            ValidateGroup(ms[3], 0, 3, 1, true, "d", 1);
            ValidateCapture(ms[3], 0, 0, 3, 1, "d");

            // Match #4:
            Assert.NotNull(ms[4], "Match[4] is not null.");
            ValidateMatch(ms[4], 4, 1, "e", 1, true);

            ValidateGroup(ms[4], 0, 4, 1, true, "e", 1);
            ValidateCapture(ms[4], 0, 0, 4, 1, "e");
        }

        [Test]
        public void SubstractNestedGroupsTest2()
        {
            const string pattern = @"[a-e-[^a-c-[^a-[ace]]]]";
            const string text = "abcdefghij";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(4, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "a", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "b", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "b", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "b");

            // Match #2:
            Assert.NotNull(ms[2], "Match[2] is not null.");
            ValidateMatch(ms[2], 2, 1, "c", 1, true);

            ValidateGroup(ms[2], 0, 2, 1, true, "c", 1);
            ValidateCapture(ms[2], 0, 0, 2, 1, "c");

            // Match #3:
            Assert.NotNull(ms[3], "Match[3] is not null.");
            ValidateMatch(ms[3], 3, 1, "d", 1, true);

            ValidateGroup(ms[3], 0, 3, 1, true, "d", 1);
            ValidateCapture(ms[3], 0, 0, 3, 1, "d");
        }

        [Test]
        public void SubstractGroupIsNotLastTest()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"[a-b-[c-d]e]";
                const string text = "abcdefghij";

                var rx = new Regex(pattern);
                rx.Matches(text);
            });
        }

        [Test]
        public void CharClassWithEscapedBracketInGroupTest()
        {
            const string pattern = @"([\(])|([\)])";
            const string text = "()";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "(", 3, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "(", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "(");

            ValidateGroup(ms[0], 1, 0, 1, true, "(", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "(");

            ValidateGroup(ms[0], 2, 0, 0, false, "", 0);

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, ")", 3, true);

            ValidateGroup(ms[1], 0, 1, 1, true, ")", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, ")");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 1, 1, true, ")", 1);
            ValidateCapture(ms[1], 2, 0, 1, 1, ")");
        }

        [Test]
        public void CharClassWithEscapedSquareBracketInGroupTest()
        {
            const string pattern = @"([\[])|([\]])";
            const string text = "[]";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "[", 3, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "[");

            ValidateGroup(ms[0], 1, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "[");

            ValidateGroup(ms[0], 2, 0, 0, false, "", 0);

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "]", 3, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "]", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "]");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 1, 1, true, "]", 1);
            ValidateCapture(ms[1], 2, 0, 1, 1, "]");
        }

        [Test]
        public void CharClassWithUnescapedBracketInGroupTest()
        {
            const string pattern = @"([(])|([)])";
            const string text = "()";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "(", 3, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "(", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "(");

            ValidateGroup(ms[0], 1, 0, 1, true, "(", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "(");

            ValidateGroup(ms[0], 2, 0, 0, false, "", 0);

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, ")", 3, true);

            ValidateGroup(ms[1], 0, 1, 1, true, ")", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, ")");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 1, 1, true, ")", 1);
            ValidateCapture(ms[1], 2, 0, 1, 1, ")");
        }

        [Test]
        public void CharClassWithUnescapedSquareBracketInGroupTest()
        {
            const string pattern = @"([[])|([]])";
            const string text = "[]";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "[", 3, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "[");

            ValidateGroup(ms[0], 1, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 1, 0, 0, 1, "[");

            ValidateGroup(ms[0], 2, 0, 0, false, "", 0);

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "]", 3, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "]", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "]");

            ValidateGroup(ms[1], 1, 0, 0, false, "", 0);

            ValidateGroup(ms[1], 2, 1, 1, true, "]", 1);
            ValidateCapture(ms[1], 2, 0, 1, 1, "]");
        }

        [Test]
        public void EmptyRangeTest()
        {
            Assert.Throws<ArgumentException>(() =>
            {
                const string pattern = @"[]";
                const string text = "abc";

                var rx = new Regex(pattern);
                var m = rx.Matches(text);
            });
        }

        [Test]
        public void ClosingSquareBracketTest1()
        {
            const string pattern = @"[]a]";
            const string text = "abc]";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "a", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "a", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "a");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 3, 1, "]", 1, true);

            ValidateGroup(ms[1], 0, 3, 1, true, "]", 1);
            ValidateCapture(ms[1], 0, 0, 3, 1, "]");
        }

        [Test]
        public void ClosingSquareBracketTest2()
        {
            const string pattern = @"[c]]";
            const string text = "abc]";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 2, 2, "c]", 1, true);

            ValidateGroup(m, 0, 2, 2, true, "c]", 1);
            ValidateCapture(m, 0, 0, 2, 2, "c]");
        }

        [Test]
        public void OpeningSquareBracketTest1()
        {
            const string pattern = @"[[a]";
            const string text = "[abc";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "[", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "[");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "a", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "a", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "a");
        }

        [Test]
        public void OpeningSquareBracketTest2()
        {
            const string pattern = @"[a[]";
            const string text = "[abc";
            var rgx = new Regex(pattern);
            var ms = rgx.Matches(text);

            Assert.AreEqual(2, ms.Count, "Matches count is correct.");

            // Match #0:
            Assert.NotNull(ms[0], "Match[0] is not null.");
            ValidateMatch(ms[0], 0, 1, "[", 1, true);

            ValidateGroup(ms[0], 0, 0, 1, true, "[", 1);
            ValidateCapture(ms[0], 0, 0, 0, 1, "[");

            // Match #1:
            Assert.NotNull(ms[1], "Match[1] is not null.");
            ValidateMatch(ms[1], 1, 1, "a", 1, true);

            ValidateGroup(ms[1], 0, 1, 1, true, "a", 1);
            ValidateCapture(ms[1], 0, 0, 1, 1, "a");
        }
    }
}