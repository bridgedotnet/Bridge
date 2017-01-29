using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Methods
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.Matches - {0}")]
    public class RegexMatchesTests : RegexTestBase
    {
        [Test]
        public void MatchesTest()
        {
            var expectedMatchValues = new[] { "writes", "notes" };
            var expectedMatchIndexes = new[] { 4, 17 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\b\w+es\b";
            string sentence = "Who writes these notes?";

            Regex rgx = new Regex(pattern);

            foreach (Match match in rgx.Matches(sentence))
            {
                actualMatchValues.Add(match.Value);
                actualMatchIndexes.Add(match.Index);
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }

        [Test]
        public void MatchesAtPositionTest()
        {
            var expectedMatchValues = new[] { "writes", "notes", "uses" };
            var expectedMatchIndexes = new[] { 4, 17, 27 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\b\w+es\b";
            string sentence = "Who writes these notes and uses our paper?";

            Regex rgx = new Regex(pattern);

            Match match = rgx.Match(sentence);
            actualMatchValues.Add(match.Value);
            actualMatchIndexes.Add(match.Index);

            foreach (Match m in rgx.Matches(sentence, match.Index + match.Length))
            {
                actualMatchValues.Add(m.Value);
                actualMatchIndexes.Add(m.Index);
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }

        [Test]
        public void MatchesStaticTest()
        {
            var expectedMatchValues = new[] { "writes", "notes" };
            var expectedMatchIndexes = new[] { 4, 17 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\b\w+es\b";
            string sentence = "Who writes these notes?";

            foreach (Match match in Regex.Matches(sentence, pattern))
            {
                actualMatchValues.Add(match.Value);
                actualMatchIndexes.Add(match.Index);
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }

        [Test]
        public void MatchesStaticWithOptionsTest()
        {
            var expectedMatchValues1 = new[] { "notes" };
            var expectedMatchIndexes1 = new[] { 11 };

            var expectedMatchValues2 = new[] { "NOTES", "notes" };
            var expectedMatchIndexes2 = new[] { 0, 11 };

            var actualMatchValues1 = new List<string>();
            var actualMatchIndexes1 = new List<int>();

            var actualMatchValues2 = new List<string>();
            var actualMatchIndexes2 = new List<int>();

            string pattern = @"\b\w+es\b";
            string sentence = "NOTES: Any notes or comments are optional.";
            foreach (Match match in Regex.Matches(sentence, pattern, RegexOptions.None))
            {
                actualMatchValues1.Add(match.Value);
                actualMatchIndexes1.Add(match.Index);
            }

            foreach (Match match in Regex.Matches(sentence, pattern, RegexOptions.IgnoreCase))
            {
                actualMatchValues2.Add(match.Value);
                actualMatchIndexes2.Add(match.Index);
            }

            ValidateCollection(expectedMatchValues1, actualMatchValues1.ToArray(), "MatchValues1");
            ValidateCollection(expectedMatchIndexes1, actualMatchIndexes1.ToArray(), "MatchIndexes1");

            ValidateCollection(expectedMatchValues2, actualMatchValues2.ToArray(), "MatchValues2");
            ValidateCollection(expectedMatchIndexes2, actualMatchIndexes2.ToArray(), "MatchIndexes2");
        }

        [Test]
        public void MatchesStaticWithOptionsAndTimeoutTest()
        {
            var expectedMatchValues1 = new[] { "notes" };
            var expectedMatchIndexes1 = new[] { 11 };

            var expectedMatchValues2 = new[] { "NOTES", "notes" };
            var expectedMatchIndexes2 = new[] { 0, 11 };

            var actualMatchValues1 = new List<string>();
            var actualMatchIndexes1 = new List<int>();

            var actualMatchValues2 = new List<string>();
            var actualMatchIndexes2 = new List<int>();

            string pattern = @"\b\w+es\b";
            string sentence = "NOTES: Any notes or comments are optional.";
            foreach (Match match in Regex.Matches(sentence, pattern, RegexOptions.None, TimeSpan.FromSeconds(1)))
            {
                actualMatchValues1.Add(match.Value);
                actualMatchIndexes1.Add(match.Index);
            }

            foreach (Match match in Regex.Matches(sentence, pattern, RegexOptions.IgnoreCase, TimeSpan.FromSeconds(1)))
            {
                actualMatchValues2.Add(match.Value);
                actualMatchIndexes2.Add(match.Index);
            }

            ValidateCollection(expectedMatchValues1, actualMatchValues1.ToArray(), "MatchValues1");
            ValidateCollection(expectedMatchIndexes1, actualMatchIndexes1.ToArray(), "MatchIndexes1");

            ValidateCollection(expectedMatchValues2, actualMatchValues2.ToArray(), "MatchValues2");
            ValidateCollection(expectedMatchIndexes2, actualMatchIndexes2.ToArray(), "MatchIndexes2");
        }
    }
}