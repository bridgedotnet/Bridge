using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Methods
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex.Match - {0}")]
    public class RegexMatchTests : RegexTestBase
    {
        [Test]
        public void MatchTest()
        {
            var expectedGroupValues = new[] { "One", "car", "red", "car", "blue", "car" };
            var expectedCaptureValues = new[] { "One", "car", "red", "car", "blue", "car" };
            var expectedCaptureIndexes = new[] { 0, 4, 8, 12, 16, 21 };

            var actualGroupValues = new List<string>();
            var actualCaptureValues = new List<string>();
            var actualCaptureIndexes = new List<int>();

            string text = "One car red car blue car";
            string pat = @"(\w+)\s+(car)";

            // Instantiate the regular expression object.
            Regex r = new Regex(pat, RegexOptions.IgnoreCase);

            // Match the regular expression pattern against a text string.
            Match m = r.Match(text);
            while (m.Success)
            {
                for (int i = 1; i <= 2; i++)
                {
                    Group g = m.Groups[i];
                    actualGroupValues.Add(g.ToString());

                    CaptureCollection cc = g.Captures;
                    for (int j = 0; j < cc.Count; j++)
                    {
                        Capture c = cc[j];
                        actualCaptureValues.Add(c.ToString());
                        actualCaptureIndexes.Add(c.Index);
                    }
                }
                m = m.NextMatch();
            }

            ValidateCollection(expectedGroupValues, actualGroupValues.ToArray(), "GroupValues");
            ValidateCollection(expectedCaptureValues, actualCaptureValues.ToArray(), "CaptureValues");
            ValidateCollection(expectedCaptureIndexes, actualCaptureIndexes.ToArray(), "CaptureIndexes");
        }

        [Test]
        public void MatchAtPositionTest()
        {
            var expectedGroupValues = new[] { "red", "car", "blue", "car" };
            var expectedCaptureValues = new[] { "red", "car", "blue", "car" };
            var expectedCaptureIndexes = new[] { 8, 12, 16, 21 };

            var actualGroupValues = new List<string>();
            var actualCaptureValues = new List<string>();
            var actualCaptureIndexes = new List<int>();

            string text = "One car red car blue car";
            string pat = @"(\w+)\s+(car)";

            // Instantiate the regular expression object.
            Regex r = new Regex(pat, RegexOptions.IgnoreCase);

            // Match the regular expression pattern against a text string.
            Match m = r.Match(text, 3);
            while (m.Success)
            {
                for (int i = 1; i <= 2; i++)
                {
                    Group g = m.Groups[i];
                    actualGroupValues.Add(g.ToString());

                    CaptureCollection cc = g.Captures;
                    for (int j = 0; j < cc.Count; j++)
                    {
                        Capture c = cc[j];
                        actualCaptureValues.Add(c.ToString());
                        actualCaptureIndexes.Add(c.Index);
                    }
                }
                m = m.NextMatch();
            }

            ValidateCollection(expectedGroupValues, actualGroupValues.ToArray(), "GroupValues");
            ValidateCollection(expectedCaptureValues, actualCaptureValues.ToArray(), "CaptureValues");
            ValidateCollection(expectedCaptureIndexes, actualCaptureIndexes.ToArray(), "CaptureIndexes");
        }

        [Test]
        public void MatchAtPositionAndLengthTest()
        {
            var expectedGroupValues = new[] { "red", "car" };
            var expectedCaptureValues = new[] { "red", "car" };
            var expectedCaptureIndexes = new[] { 8, 12 };

            var actualGroupValues = new List<string>();
            var actualCaptureValues = new List<string>();
            var actualCaptureIndexes = new List<int>();

            string text = "One car red car blue car";
            string pat = @"(\w+)\s+(car)";

            // Instantiate the regular expression object.
            Regex r = new Regex(pat, RegexOptions.IgnoreCase);

            // Match the regular expression pattern against a text string.
            Match m = r.Match(text, 3, 15);
            while (m.Success)
            {
                for (int i = 1; i <= 2; i++)
                {
                    Group g = m.Groups[i];
                    actualGroupValues.Add(g.ToString());

                    CaptureCollection cc = g.Captures;
                    for (int j = 0; j < cc.Count; j++)
                    {
                        Capture c = cc[j];
                        actualCaptureValues.Add(c.ToString());
                        actualCaptureIndexes.Add(c.Index);
                    }
                }
                m = m.NextMatch();
                if (m.Index > 15)
                {
                    break;
                }
            }

            ValidateCollection(expectedGroupValues, actualGroupValues.ToArray(), "GroupValues");
            ValidateCollection(expectedCaptureValues, actualCaptureValues.ToArray(), "CaptureValues");
            ValidateCollection(expectedCaptureIndexes, actualCaptureIndexes.ToArray(), "CaptureIndexes");
        }

        [Test]
        public void MatchStaticTest()
        {
            var expectedMatchValues = new[] { "ablaze", "dozen", "glaze", "jazz", "pizza", "quiz", "whiz", "zealous" };
            var expectedMatchIndexes = new[] { 0, 21, 46, 65, 104, 110, 157, 174 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\b\w*z+\w*\b";
            string input = "ablaze beagle choral dozen elementary fanatic " +
                           "glaze hunger inept jazz kitchen lemon minus " +
                           "night optical pizza quiz restoration stamina " +
                           "train unrest vertical whiz xray yellow zealous";

            Match m = Regex.Match(input, pattern);
            while (m.Success)
            {
                actualMatchValues.Add(m.Value);
                actualMatchIndexes.Add(m.Index);
                m = m.NextMatch();
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }

        [Test]
        public void MatchStaticWithOptionsTest()
        {
            var expectedMatchValues = new[] { "An" };
            var expectedMatchIndexes = new[] { 0 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\ba\w*\b";
            string input = "An extraordinary day dawns with each new day.";

            Match m = Regex.Match(input, pattern, RegexOptions.IgnoreCase);
            while (m.Success)
            {
                actualMatchValues.Add(m.Value);
                actualMatchIndexes.Add(m.Index);
                m = m.NextMatch();
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }

        [Test]
        public void MatchStaticWithOptionsAndTimeoutTest()
        {
            var expectedMatchValues = new[] { "An" };
            var expectedMatchIndexes = new[] { 0 };

            var actualMatchValues = new List<string>();
            var actualMatchIndexes = new List<int>();

            string pattern = @"\ba\w*\b";
            string input = "An extraordinary day dawns with each new day.";

            Match m = Regex.Match(input, pattern, RegexOptions.IgnoreCase, TimeSpan.FromSeconds(1));
            while (m.Success)
            {
                actualMatchValues.Add(m.Value);
                actualMatchIndexes.Add(m.Index);
                m = m.NextMatch();
            }

            ValidateCollection(expectedMatchValues, actualMatchValues.ToArray(), "MatchValues");
            ValidateCollection(expectedMatchIndexes, actualMatchIndexes.ToArray(), "MatchIndexes");
        }
    }
}