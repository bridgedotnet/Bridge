using Bridge.Test;
using System;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "RegexGroupCollection Entity - {0}")]
    public class RegexGroupCollectionTests : RegexTestBase
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
        public void GroupCollectionFieldsTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            Assert.AreEqual(2, groups.Count, "Groups.Count");
            Assert.AreEqual(true, groups.IsReadOnly, "Groups.IsReadOnly");
            Assert.AreEqual(false, groups.IsSynchronized, "Groups.IsSynchronized");
            Assert.AreEqual(m, groups.SyncRoot, "Groups.SyncRoot");
        }

        [Test]
        public void GroupCollectionForeachTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var i = 0;
            foreach (var groupObj in groups)
            {
                var group = groupObj as Group;
                GroupsAreEqual(groups[i], group, "Groups[" + i + "]");
                ++i;
            }
        }

        [Test]
        public void GroupCollectionEnumeratorTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var en = groups.GetEnumerator();

            Assert.True(en.MoveNext(), "First call - MoveNext()");

            int i = 0;
            do
            {
                var group = en.Current as Group;
                GroupsAreEqual(groups[i], group, "Groups[" + i + "]");
                ++i;
            } while (en.MoveNext());

            Assert.AreEqual(groups.Count, i, "Groups.Count");
        }

        [Test]
        public void GroupCollectionCopyToTest()
        {
            var m = GetTestDataMatch();
            var groups = m.Groups;

            var dstArray = new Group[groups.Count];
            groups.CopyTo(dstArray, 0);

            for (int i = 0; i < groups.Count; i++)
            {
                GroupsAreEqual(groups[i], dstArray[i], "Groups[" + i + "]");
            }

            Assert.Throws(() => { groups.CopyTo(null, 0); },
                err => err.GetType().FullName == typeof(ArgumentNullException).FullName,
                "Exception: Array is not null.");
            Assert.Throws(() => { groups.CopyTo(dstArray, 1); },
                err => err.GetType().FullName == typeof(IndexOutOfRangeException).FullName,
                "Exception: Out of range.");
        }
    }
}