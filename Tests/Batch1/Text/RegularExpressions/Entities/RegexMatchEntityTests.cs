using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Match Entity - {0}")]
    public class RegexMatchEntityTests : RegexTestBase
    {
        #region Test data

        private const string Pattern = @"((?:\w)+[\s\.])+";
        private const string Text = @"This is a sentance. This is another sentance.";

        private static Match GetTestDataMatch(int matchIndex = 1)
        {
            var rgx = new Regex(Pattern);
            var m = rgx.Match(Text);
            for (int i = 1; i < matchIndex; i++)
            {
                m = rgx.Match(Text, m.Index + m.Length);
            }

            return m;
        }

        [Test]
        public void CaseDataTest()
        {
            var m1 = GetTestDataMatch();

            ValidateMatch(m1, 0, 19, "This is a sentance.", 2, true);

            ValidateGroup(m1, 0, 0, 19, true, "This is a sentance.", 1);
            ValidateCapture(m1, 0, 0, 0, 19, "This is a sentance.");

            ValidateGroup(m1, 1, 10, 9, true, "sentance.", 4);
            ValidateCapture(m1, 1, 0, 0, 5, "This ");
            ValidateCapture(m1, 1, 1, 5, 3, "is ");
            ValidateCapture(m1, 1, 2, 8, 2, "a ");
            ValidateCapture(m1, 1, 3, 10, 9, "sentance.");

            var m2 = GetTestDataMatch(2);

            ValidateMatch(m2, 20, 25, "This is another sentance.", 2, true);

            ValidateGroup(m2, 0, 20, 25, true, "This is another sentance.", 1);
            ValidateCapture(m2, 0, 0, 20, 25, "This is another sentance.");

            ValidateGroup(m2, 1, 36, 9, true, "sentance.", 4);
            ValidateCapture(m2, 1, 0, 20, 5, "This ");
            ValidateCapture(m2, 1, 1, 25, 3, "is ");
            ValidateCapture(m2, 1, 2, 28, 8, "another ");
            ValidateCapture(m2, 1, 3, 36, 9, "sentance.");
        }

        #endregion Test data

        [Test]
        public void MatchEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var m = rx.Match(tstText);

            ValidateMatch(m, 0, 0, "", 1, true);
        }

        [Test]
        public void MatchEmptyFieldsTest()
        {
            var m = Match.Empty;
            ValidateMatchNotFound(m);
        }

        [Test]
        public void MatchNextMatchTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);

            var actual = match1.NextMatch();
            MatchesAreEqual(match2, actual, "Matches[1]");

            actual = actual.NextMatch();
            MatchesAreEqual(Match.Empty, actual, "Matches[1] is Empty");

            actual = Match.Empty.NextMatch();
            MatchesAreEqual(Match.Empty, actual, "Empty.NextMatch()");
        }

        [Test]
        public void MatchNextMatchWithEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var m = rx.Match(tstText);
            ValidateMatch(m, 0, 0, "", 1, true);

            for (int i = 1; i < tstText.Length + 1; i++)
            {
                m = m.NextMatch();
                ValidateMatch(m, i, 0, "", 1, true);
            }

            m = m.NextMatch();
            ValidateMatchNotFound(m);
        }

        [Test]
        public void MatchResultTest()
        {
            var expected = new[] { "(decisively)", "(whatever time it was)" };
            var actual = new List<string>();

            string pattern = "--(.+?)--";
            string replacement = "($1)";
            string input = "He said--decisively--that the time--whatever time it was--had come.";
            foreach (Match match in Regex.Matches(input, pattern))
            {
                string result = match.Result(replacement);
                actual.Add(result);
            }

            ValidateCollection(expected, actual.ToArray(), "Result");
        }

        [Test]
        public void MatchSearchGroupByNameTest()
        {
            var groupNames = new[] { "groupName1", "groupName2", "groupName3" };

            var pattern = @"(?<" + groupNames[0] + @">\d+)(?'" + groupNames[1] + @"'ZZ)(?<" + groupNames[2] + @">\s+)";
            var tstText = @"Number123ZZ   ";

            var rx = new Regex(pattern);
            var m = rx.Match(tstText);

            for (int i = 1; i < 4; i++)
            {
                var groupName = groupNames[i - 1];
                var g = m.Groups[groupName];
                ValidateGroup(m, i, g.Index, g.Length, g.Success, g.Value, g.Captures.Count);
            }
        }
    }
}