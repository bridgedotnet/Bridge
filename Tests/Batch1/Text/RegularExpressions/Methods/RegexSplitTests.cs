using Bridge.Test.NUnit;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Methods
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.Split - {0}")]
    public class RegexSplitTests
    {
        private void ValidateResult(string[] expected, string[] actual)
        {
            Assert.AreEqual(expected.Length, actual.Length, "Length");
            for (int i = 0; i < actual.Length; i++)
            {
                Assert.AreEqual(expected[i], actual[i], "Result at " + i);
            }
        }

        [Test]
        public void SplitTest1()
        {
            var expected = new[] { "plum", "", "pear" };

            Regex regex = new Regex("-"); // Split on hyphens.
            string[] substrings = regex.Split("plum--pear");

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitTest2()
        {
            var expected = new[] { "", "ABCDE", "FGHIJKL", "MNOPQ", "" };

            string pattern = @"\d+";
            Regex rgx = new Regex(pattern);
            string input = "123ABCDE456FGHIJKL789MNOPQ012";
            string[] substrings = rgx.Split(input);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitTest3()
        {
            var expected = new[] { "plum", "-", "pear" };

            Regex regex = new Regex("(-)"); // Split on hyphens.
            string[] substrings = regex.Split("plum-pear");

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitTest4()
        {
            var expected = new[] { "07", "/", "14", "/", "2007" };

            string input = @"07/14/2007";
            string pattern = @"(-)|(/)";
            Regex regex = new Regex(pattern);
            string[] substrings = regex.Split(input);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitTest5()
        {
            var expected = new[] { "", "c", "h", "a", "r", "a", "c", "t", "e", "r", "s", "" };

            string input = "characters";
            Regex regex = new Regex("");
            string[] substrings = regex.Split(input);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountTest1()
        {
            var expected = new[] { "", "ABCDE", "FGHIJKL789MNOPQ012" };

            string pattern = @"\d+";
            Regex rgx = new Regex(pattern);
            string input = "123ABCDE456FGHIJKL789MNOPQ012";
            string[] substrings = rgx.Split(input, 3);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountTest2()
        {
            var expected = new[] { "apple", "-", "apricot", "-", "plum", "-", "pear-banana" };

            string pattern = "(-)";
            string input = "apple-apricot-plum-pear-banana";
            Regex regex = new Regex(pattern); // Split on hyphens.
            string[] substrings = regex.Split(input, 4);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountTest3()
        {
            var expected = new[] { "07", "/", "14/2007" };

            string input = @"07/14/2007";
            string pattern = @"(-)|(/)";
            Regex regex = new Regex(pattern);
            string[] substrings = regex.Split(input, 2);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountTest4()
        {
            var expected = new[] { "", "c", "h", "a", "r", "a", "c", "t", "e", "rs" };

            string input = "characters";
            Regex regex = new Regex("");
            string[] substrings = regex.Split(input, input.Length);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountAndStartAtTest1()
        {
            var expected = new[] { "", "ABCDE", "FGHIJ789KLMNO012PQRST" };

            string pattern = @"\d+";
            Regex rgx = new Regex(pattern);
            string input = "123ABCDE456FGHIJ789KLMNO012PQRST";
            Match m = rgx.Match(input);
            if (m.Success)
            {
                int startAt = m.Index;
                string[] substrings = rgx.Split(input, 3, startAt);

                ValidateResult(expected, substrings);
            }
        }

        [Test]
        public void SplitWithCountAndStartAtTest2()
        {
            var expected = new[] { "apple-apricot-plum", "-", "pear", "-", "pomegranate", "-", "pineapple-peach" };

            string pattern = @"(-)";
            string input = "apple-apricot-plum-pear-pomegranate-pineapple-peach";

            Regex regex = new Regex(pattern);
            string[] substrings = regex.Split(input, 4, 15); // Split on hyphens from 15th character on

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountAndStartAtTest3()
        {
            var expected = new[] { "apple|apricot|plum", "|", "pear", "|", "pomegranate", "|", "pineapple|peach" };

            string pattern = "(-)|([|])"; // possible delimiters found in string
            string input = "apple|apricot|plum|pear|pomegranate|pineapple|peach";
            Regex regex = new Regex(pattern);
            string[] substrings = regex.Split(input, 4, 15); // Split on delimiters from 15th character on

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitWithCountAndStartAtTest4()
        {
            var expected = new[] { "ch", "a", "r", "a", "c", "t", "e", "r", "s", "" };

            string input = "characters";
            Regex regex = new Regex("");
            string[] substrings = regex.Split(input, input.Length, input.IndexOf("a"));

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticTest1()
        {
            var expected = new[] { "plum", "", "pear" };

            string[] substrings = Regex.Split("plum--pear", "-");

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticTest2()
        {
            var expected = new[] { "", "ABCDE", "FGHIJKL", "MNOPQ", "" };

            string pattern = @"\d+";
            string input = "123ABCDE456FGHIJKL789MNOPQ012";
            string[] substrings = Regex.Split(input, pattern);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticTest3()
        {
            var expected = new[] { "plum", "-", "pear" };

            string[] substrings = Regex.Split("plum-pear", "(-)");

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticTest4()
        {
            var expected = new[] { "07", "/", "14", "/", "2007" };

            string input = @"07/14/2007";
            string pattern = @"(-)|(/)";
            string[] substrings = Regex.Split(input, pattern);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticTest5()
        {
            var expected = new[] { "", "c", "h", "a", "r", "a", "c", "t", "e", "r", "s", "" };

            string input = "characters";
            string[] substrings = Regex.Split(input, "");

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticWithOptionsTest()
        {
            var expected = new[] { "", "1234", "5678", "9012", "" };

            string pattern = "[a-z]+";
            string input = "Abc1234Def5678Ghi9012Jklm";
            string[] substrings = Regex.Split(input, pattern, RegexOptions.IgnoreCase);

            ValidateResult(expected, substrings);
        }

        [Test]
        public void SplitStaticWithOptionsAndTimeout()
        {
            var expected = new[] { "", "1234", "5678", "9012", "" };

            string pattern = "[a-z]+";
            string input = "Abc1234Def5678Ghi9012Jklm";
            string[] substrings = Regex.Split(input, pattern, RegexOptions.IgnoreCase, TimeSpan.FromMilliseconds(500));

            ValidateResult(expected, substrings);
        }
    }
}