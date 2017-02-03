using Bridge.Test.NUnit;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Methods
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.Replace - {0}")]
    public class RegexReplaceTests
    {
        #region Instance methods

        [Test]
        public void ReplaceTest1()
        {
            string expected = "This is text with far too much whitespace.";

            string input = "This is   text with   far  too   much   whitespace.";
            string pattern = "\\s+";
            string replacement = " ";
            Regex rgx = new Regex(pattern);
            string result = rgx.Replace(input, replacement);

            Assert.AreEqual(expected, result);
        }

        //TODO: uncomment when unicode categories are implemented.
        //[Test]
        //public void ReplaceTest2()
        //{
        //    string expected = "17.43  2 16.33  0.98  0.43   43   12  17";

        //    string pattern = @"(\p{Sc}\s?)?(\d+\.?((?<=\.)\d+)?)(?(1)|\s?\p{Sc})?";
        //    string input = "$17.43  €2 16.33  £0.98  0.43   £43   12€  17";
        //    string replacement = "$2";
        //    Regex rgx = new Regex(pattern);
        //    string result = rgx.Replace(input, replacement);

        //    Assert.AreEqual(expected, result);
        //}

        [Test]
        public void ReplaceAtPositionTest()
        {
            string expected = "abcdefghijkklmm";

            string str = "aabccdeefgghiijkklmm";
            string pattern = "(\\w)\\1";
            string replacement = "$1";
            Regex rgx = new Regex(pattern);

            string result = rgx.Replace(str, replacement, 5);
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void ReplaceAtPositionAndLengthTest()
        {
            var expected = "Instantiating a New Type\n\n" +
                           "Generally, there are two ways that an\n\n" +
                           "instance of a class or structure can\n\n" +
                           "be instantiated. ";

            string input = "Instantiating a New Type\n" +
                           "Generally, there are two ways that an\n" +
                           "instance of a class or structure can\n" +
                           "be instantiated. ";
            string pattern = "^.*$";
            string replacement = "\n$&";
            Regex rgx = new Regex(pattern, RegexOptions.Multiline);

            Match match = rgx.Match(input);

            var result = rgx.Replace(input, replacement, -1, match.Index + match.Length + 1);
            Assert.AreEqual(expected, result);
        }

        private static string CapText(Match m)
        {
            // Get the matched string.
            string x = m.ToString();
            // If the first char is lower case...
            if (char.IsLower(x[0]))
            {
                // Capitalize it.
                return char.ToUpper(x[0]) + x.Substring(1, x.Length - 1);
            }
            return x;
        }

        [Test]
        public void ReplaceWithEvaluatorTest()
        {
            string expected = "Four Score And Seven Years Ago";
            string text = "four score and seven years ago";
            Regex rx = new Regex(@"\w+");
            string result = rx.Replace(text, CapText);
            Assert.AreEqual(expected, result);
        }

        private static string ReverseLetter(Match match)
        {
            return Regex.Replace(match.Value, "([ie])([ie])", "$2$1", RegexOptions.IgnoreCase);
        }

        [Test]
        public void ReplaceWithEvaluatorAndCountTest()
        {
            string expected = "decieve releive acheive belief fierce receive";
            string input = "deceive relieve achieve belief fierce receive";
            string pattern = @"\w*(ie|ei)\w*";
            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);

            string result = rgx.Replace(input, ReverseLetter, input.Split(' ').Length / 2);
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void ReplaceWithEvaluatorAndCountAtPostitionTest()
        {
            string expected = "deceive releive acheive belief fierce receive";
            string input = "deceive relieve achieve belief fierce receive";
            string pattern = @"\w*(ie|ei)\w*";
            Regex rgx = new Regex(pattern, RegexOptions.IgnoreCase);

            string result = rgx.Replace(input, ReverseLetter, input.Split(' ').Length / 2 - 1, 7);
            Assert.AreEqual(expected, result);
        }

        #endregion Instance methods

        #region Static methods

        [Test]
        public void ReplaceStaticTest1()
        {
            string expected = "This is text with far too much whitespace.";

            string input = "This is   text with   far  too   much   whitespace.";
            string pattern = "\\s+";
            string replacement = " ";
            string result = Regex.Replace(input, pattern, replacement);

            Assert.AreEqual(expected, result);
        }

        [Test]
        public void ReplaceStaticTest2()
        {
            string pattern = @"\\\\MyMachine(?:\.\w+)*\\([cde])\$";
            string replacement = "$1:";
            string[] uncPaths =
            {
                @"\\MyMachine.domain1.mycompany.com\c$\ThingsToDo.txt",
                @"\\MyMachine\c$\ThingsToDo.txt",
                @"\\MyMachine\d$\documents\mydocument.docx"
            };
            string[] expected =
                 {
                @"c:\ThingsToDo.txt",
                @"c:\ThingsToDo.txt",
                @"d:\documents\mydocument.docx"
            };

            for (int i = 0; i < uncPaths.Length; i++)
            {
                string uncPath = uncPaths[i];
                var result = Regex.Replace(uncPath, pattern, replacement);
                Assert.AreEqual(expected[i], result, "Result at #" + i);
            }
        }

        [Test]
        public void ReplaceStaticWithOptionsTest()
        {
            string pattern = @"\\\\MyMachine(?:\.\w+)*\\([cde])\$";
            string replacement = "$1:";
            string[] uncPaths =
            {
                @"\\MyMachine.domain1.mycompany.com\C$\ThingsToDo.txt",
                @"\\MyMachine\c$\ThingsToDo.txt",
                @"\\MyMachine\D$\documents\mydocument.docx"
            };
            string[] expected =
                 {
                @"C:\ThingsToDo.txt",
                @"c:\ThingsToDo.txt",
                @"D:\documents\mydocument.docx"
            };

            for (int i = 0; i < uncPaths.Length; i++)
            {
                string uncPath = uncPaths[i];
                var result = Regex.Replace(uncPath, pattern, replacement, RegexOptions.IgnoreCase);
                Assert.AreEqual(expected[i], result, "Result at #" + i);
            }
        }

        [Test]
        public void ReplaceStaticWithOptionsAndTimeoutTest()
        {
            string pattern = @"\\\\MyMachine(?:\.\w+)*\\([cde])\$";
            string replacement = "$1:";
            string[] uncPaths =
            {
                @"\\MyMachine.domain1.mycompany.com\C$\ThingsToDo.txt",
                @"\\MyMachine\c$\ThingsToDo.txt",
                @"\\MyMachine\D$\documents\mydocument.docx"
            };
            string[] expected =
                 {
                @"C:\ThingsToDo.txt",
                @"c:\ThingsToDo.txt",
                @"D:\documents\mydocument.docx"
            };

            for (int i = 0; i < uncPaths.Length; i++)
            {
                string uncPath = uncPaths[i];
                var result = Regex.Replace(uncPath, pattern, replacement, RegexOptions.IgnoreCase, TimeSpan.FromSeconds(1));
                Assert.AreEqual(expected[i], result, "Result at #" + i);
            }
        }

        private static string WordScrambler(Match match)
        {
            // Adjusted logic here. Will just reverse the value string.

            var value = match.Value;
            char[] letters = new char[value.Length];
            for (int i = 0; i < value.Length; i++)
            {
                letters[i] = value[value.Length - i - 1];
            }

            return new string(letters);
        }

        [Test]
        public void ReplaceStaticWithEvaluatorTest()
        {
            string expected = "rettel lacitebahpla gnissim kcal esaeler tnahcnep kcals cillyrca yrdnual esaec";
            string words = "letter alphabetical missing lack release penchant slack acryllic laundry cease";

            string pattern = @"\w+";
            MatchEvaluator evaluator = WordScrambler;

            var result = Regex.Replace(words, pattern, evaluator);
            Assert.AreEqual(expected, result);
        }

        [Test]
        public void ReplaceStaticWithEvaluatorAndOptionsTest()
        {
            string expected1 = "LETTER lacitebahpla gnissim kcal esaeler tnahcnep kcals cillyrca yrdnual esaec";
            string expected2 = "RETTEL lacitebahpla gnissim kcal esaeler tnahcnep kcals cillyrca yrdnual esaec";
            string words = "LETTER alphabetical missing lack release penchant slack acryllic laundry cease";

            string pattern = @"[a-z]+";
            MatchEvaluator evaluator = WordScrambler;

            var result1 = Regex.Replace(words, pattern, evaluator, RegexOptions.None);
            Assert.AreEqual(expected1, result1);

            var result2 = Regex.Replace(words, pattern, evaluator, RegexOptions.IgnoreCase);
            Assert.AreEqual(expected2, result2);
        }

        [Test]
        public void ReplaceStaticWithEvaluatorAndOptionsAndTimoutTest()
        {
            string expected = "RETTEL lacitebahpla gnissim kcal esaeler tnahcnep kcals cillyrca yrdnual esaec";
            string words = "LETTER alphabetical missing lack release penchant slack acryllic laundry cease";

            string pattern = @"[a-z]+";
            MatchEvaluator evaluator = WordScrambler;

            var result = Regex.Replace(words, pattern, evaluator, RegexOptions.IgnoreCase, TimeSpan.FromSeconds(1));
            Assert.AreEqual(expected, result);
        }

        #endregion Static methods
    }
}