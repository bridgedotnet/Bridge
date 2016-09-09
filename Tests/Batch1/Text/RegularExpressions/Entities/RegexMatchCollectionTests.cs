using Bridge.Test;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "RegexMatchCollection Entity - {0}")]
    public class RegexMatchCollectionTests : RegexTestBase
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

        private static MatchCollection GetTestDataMatches()
        {
            var rgx = new Regex(Pattern);
            var m = rgx.Matches(Text);
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
        public void MatchCollectionFieldsTest()
        {
            var matches = GetTestDataMatches();

            Assert.AreEqual(2, matches.Count, "Matches.Count");
            Assert.AreEqual(true, matches.IsReadOnly, "Matches.IsReadOnly");
            Assert.AreEqual(false, matches.IsSynchronized, "Matches.IsSynchronized");
            Assert.AreEqual(matches, matches.SyncRoot, "Matches.SyncRoot");
        }

        [Test]
        public void MatchCollectionItemsTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();

            Assert.AreEqual(expected.Length, matches.Count);
            for (int i = 0; i < expected.Length; i++)
            {
                MatchesAreEqual(expected[i], matches[i], "Matches[" + i + "]");
            }
        }

        [Test]
        public void MatchCollectionForeachTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();
            var i = 0;
            foreach (var matchObj in matches)
            {
                var match = matchObj as Match;
                MatchesAreEqual(expected[i], match, "Matches[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void MatchCollectionEnumeratorTest()
        {
            var match1 = GetTestDataMatch();
            var match2 = GetTestDataMatch(2);
            var expected = new[] { match1, match2 };

            var matches = GetTestDataMatches();

            var en = matches.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var match = en.Current as Match;
                MatchesAreEqual(expected[i], match, "Matches[" + i + "]");
                ++i;
            } while (en.MoveNext());

            Assert.AreEqual(expected.Length, i, "Matches.Count");
        }

        [Test]
        public void MatchCollectionCopyToTest()
        {
            var matches = GetTestDataMatches();
            var dstArray = new Match[matches.Count];
            matches.CopyTo(dstArray, 0);

            for (int i = 0; i < matches.Count; i++)
            {
                MatchesAreEqual(matches[i], dstArray[i], "Matches[" + i + "]");
            }

            Assert.Throws(() => { matches.CopyTo(null, 0); },
                err => err.GetType().FullName == typeof(ArgumentNullException).FullName,
                "Exception: Array is not null.");
            Assert.Throws(() => { matches.CopyTo(dstArray, 1); },
                err => err.GetType().FullName == typeof(IndexOutOfRangeException).FullName,
                "Exception: Out of range.");
        }

        [Test]
        public void MatchCollectionWithEmptyPatternTest()
        {
            var pattern = @"";
            var tstText = @"characters";

            var rx = new Regex(pattern);
            var matches = rx.Matches(tstText);

            Assert.AreEqual(tstText.Length + 1, matches.Count);
            for (int i = 0; i < matches.Count; i++)
            {
                Assert.AreEqual(i, matches[i].Index, "Matches[" + i + "].Index");
                Assert.AreEqual(0, matches[i].Length, "Matches[" + i + "].Length");
            }
        }
    }
}