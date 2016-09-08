using Bridge.Test;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "RegexCaptureCollection Entity - {0}")]
    public class RegexCaptureCollectionTests : RegexTestBase
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
        public void CaptureCollectionFieldsTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            Assert.AreEqual(4, captures.Count, "Captures.Count");
            Assert.AreEqual(true, captures.IsReadOnly, "Captures.IsReadOnly");
            Assert.AreEqual(false, captures.IsSynchronized, "Captures.IsSynchronized");
            Assert.AreEqual(group, captures.SyncRoot, "Captures.SyncRoot");
        }

        [Test]
        public void CaptureCollectionForeachTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var i = 0;
            foreach (var captureObj in captures)
            {
                var capture = captureObj as Capture;
                CapturesAreEqual(captures[i], capture, "Captures[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void CaptureCollectionEnumeratorTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var en = captures.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var capture = en.Current as Capture;
                CapturesAreEqual(captures[i], capture, "Captures[" + i + "]");
                ++i;
            } while (en.MoveNext());

            Assert.AreEqual(captures.Count, i, "Captures.Count");
        }

        [Test]
        public void CaptureCollectionCopyToTest()
        {
            var m = GetTestDataMatch();
            var group = m.Groups[1];
            var captures = group.Captures;

            var dstArray = new Capture[captures.Count];
            captures.CopyTo(dstArray, 0);

            for (int i = 0; i < captures.Count; i++)
            {
                CapturesAreEqual(captures[i], dstArray[i], "Captures[" + i + "]");
            }

            Assert.Throws(() => { captures.CopyTo(null, 0); },
                err => err.GetType().FullName == typeof(ArgumentNullException).FullName,
                "Exception: Array is not null.");
            Assert.Throws(() => { captures.CopyTo(dstArray, 1); },
                err => err.GetType().FullName == typeof(IndexOutOfRangeException).FullName,
                "Exception: Out of range.");
        }
    }
}