using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;

namespace Bridge.ClientTest.Text.RegularExpressions.Entities
{
    [Category(Constants.MODULE_REGEX)]
    [TestFixture(TestNameFormat = "Regex Entity - {0}")]
    public class RegexEntityTests : RegexTestBase
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
        public void GetGroupNamesTest()
        {
            var rgx = new Regex("");
            var names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0" }, names, "EmptyRegex");

            rgx = new Regex("()");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1" }, names, "EmptyGroup");

            rgx = new Regex("(group1)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1" }, names, "Group1");

            rgx = new Regex("(group1)(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1", "2" }, names, "Group2");

            rgx = new Regex("(group1())(group2)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1", "2", "3" }, names, "Group3");

            rgx = new Regex("(?<name1>)");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1" }, names, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1", "name2" }, names, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "name1", "inner1", "name2" }, names, "NameGroup3");

            rgx = new Regex("(?<test>)()");
            names = rgx.GetGroupNames();
            ValidateCollection(new[] { "0", "1", "test" }, names, "NameGroupAndNoname1");
        }

        [Test]
        public void GetGroupNumbersTest()
        {
            var rgx = new Regex("");
            var numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0 }, numbers, "EmptyRegex");

            rgx = new Regex("()");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "EmptyGroup");

            rgx = new Regex("(group1)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "Group1");

            rgx = new Regex("(group1)(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2 }, numbers, "Group2");

            rgx = new Regex("(group1())(group2)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2, 3 }, numbers, "Group3");

            rgx = new Regex("(?<name1>)");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1 }, numbers, "NameGroup1");

            rgx = new Regex("(?<name1>)(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2 }, numbers, "NameGroup2");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2, 3 }, numbers, "NameGroup3");

            rgx = new Regex("(?<test>)()");
            numbers = rgx.GetGroupNumbers();
            ValidateCollection(new[] { 0, 1, 2 }, numbers, "NameGroupAndNoname1");
        }

        [Test]
        public void GroupNameFromNumberTest()
        {
            var rgx = new Regex("");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "EmptyRegex.GroupNameFromNumber(0)");

            rgx = new Regex("()");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "EmptyGroup.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "EmptyGroup.GroupNameFromNumber(1)");

            rgx = new Regex("(group1)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group1.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group1.GroupNameFromNumber(1)");

            rgx = new Regex("(group1)(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group2.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group2.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group2.GroupNameFromNumber(2)");

            rgx = new Regex("(group1())(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group3.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group3.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group3.GroupNameFromNumber(2)");
            Assert.AreEqual("3", rgx.GroupNameFromNumber(3), "Group3.GroupNameFromNumber(3)");

            rgx = new Regex("(?<name1>)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup1.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup1.GroupNameFromNumber(1)");

            rgx = new Regex("(?<name1>)(?'name2')");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup2.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup2.GroupNameFromNumber(1)");
            Assert.AreEqual("name2", rgx.GroupNameFromNumber(2), "NameGroup2.GroupNameFromNumber(2)");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroup3.GroupNameFromNumber(0)");
            Assert.AreEqual("name1", rgx.GroupNameFromNumber(1), "NameGroup3.GroupNameFromNumber(1)");
            Assert.AreEqual("inner1", rgx.GroupNameFromNumber(2), "NameGroup3.GroupNameFromNumber(2)");
            Assert.AreEqual("name2", rgx.GroupNameFromNumber(3), "NameGroup3.GroupNameFromNumber(3)");

            Assert.AreEqual("", rgx.GroupNameFromNumber(999), "NameGroup3.GroupNameFromNumber(999)");

            rgx = new Regex("(?<test>)()");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "NameGroupAndNoname1.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "NameGroupAndNoname1.GroupNameFromNumber(1)");
            Assert.AreEqual("test", rgx.GroupNameFromNumber(2), "NameGroupAndNoname1.GroupNameFromNumber(2)");
        }

        [Test]
        public void GroupNumberFromNameTest()
        {
            var rgx = new Regex("");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "EmptyRegex.GroupNumberFromName(\"0\")");

            rgx = new Regex("()");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "EmptyGroup.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "EmptyGroup.GroupNumberFromName(\"1\")");

            rgx = new Regex("(group1)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "Group1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "Group1.GroupNumberFromName(\"1\")");

            rgx = new Regex("(group1)(group2)");
            Assert.AreEqual("0", rgx.GroupNameFromNumber(0), "Group2.GroupNameFromNumber(0)");
            Assert.AreEqual("1", rgx.GroupNameFromNumber(1), "Group2.GroupNameFromNumber(1)");
            Assert.AreEqual("2", rgx.GroupNameFromNumber(2), "Group2.GroupNameFromNumber(2)");

            rgx = new Regex("(group1())(group2)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "Group3.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "Group3.GroupNumberFromName(\"1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("2"), "Group3.GroupNumberFromName(\"2\")");
            Assert.AreEqual(3, rgx.GroupNumberFromName("3"), "Group3.GroupNumberFromName(\"3\")");

            rgx = new Regex("(?<name1>)");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup1.GroupNumberFromName(\"name1\")");

            rgx = new Regex("(?<name1>)(?'name2')");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup2.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup2.GroupNumberFromName(\"name1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("name2"), "NameGroup2.GroupNumberFromName(\"name2\")");

            rgx = new Regex("(?<name1>(?'inner1'))(?'name2')");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroup3.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("name1"), "NameGroup3.GroupNumberFromName(\"name1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("inner1"), "NameGroup3.GroupNumberFromName(\"inner1\")");
            Assert.AreEqual(3, rgx.GroupNumberFromName("name2"), "NameGroup3.GroupNumberFromName(\"name2\")");

            Assert.AreEqual(-1, rgx.GroupNumberFromName("Fake"), "NameGroup3.GroupNumberFromName(\"Fake\")");

            rgx = new Regex("(?<test>)()");
            Assert.AreEqual(0, rgx.GroupNumberFromName("0"), "NameGroupAndNoname1.GroupNumberFromName(\"0\")");
            Assert.AreEqual(1, rgx.GroupNumberFromName("1"), "NameGroupAndNoname1.GroupNumberFromName(\"1\")");
            Assert.AreEqual(2, rgx.GroupNumberFromName("test"), "NameGroupAndNoname1.GroupNumberFromName(\"test\")");
        }

        [Test]
        public void SupportedOptionsTest()
        {
            var supportedOptions = new Dictionary<RegexOptions, bool>
            {
                {RegexOptions.None, true},
                {RegexOptions.IgnoreCase, true},
                {RegexOptions.Multiline, true},
                {RegexOptions.ExplicitCapture, true},
                {(RegexOptions) 0x0008, false},
                {RegexOptions.Singleline, true},
                {RegexOptions.IgnorePatternWhitespace, true},
                {(RegexOptions) 0x0040, false},
                {(RegexOptions) 0x0100, false},
                {(RegexOptions) 0x0200, false}
            };

            foreach (var supportedOption in supportedOptions)
            {
                if (supportedOption.Value)
                {
                    var rgx = new Regex(Pattern, supportedOption.Key);
                }
                else
                {
                    Assert.Throws<NotSupportedException>(() => new Regex(Pattern, supportedOption.Key));
                }
            }
        }

        [Test]
        public void MatchNamedGroupTest()
        {
            const string pattern = @"(?<test>A)(B)";
            const string text = @"AB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "AB", 3, true);

            ValidateGroup(m, 0, 0, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 0, 2, "AB");

            ValidateGroup(m, 1, 1, 1, true, "B", 1);
            ValidateCapture(m, 1, 0, 1, 1, "B");

            ValidateGroup(m, 2, 0, 1, true, "A", 1);
            ValidateCapture(m, 2, 0, 0, 1, "A");

            GroupsAreEqual(m.Groups[2], m.Groups["test"], "Named Group is correct");
        }

        [Test]
        public void MatchInnerNamedGroupTest1()
        {
            const string pattern = @"((?<test>A)(B))";
            const string text = @"AB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 2, "AB", 4, true);

            ValidateGroup(m, 0, 0, 2, true, "AB", 1);
            ValidateCapture(m, 0, 0, 0, 2, "AB");

            ValidateGroup(m, 1, 0, 2, true, "AB", 1);
            ValidateCapture(m, 1, 0, 0, 2, "AB");

            ValidateGroup(m, 2, 1, 1, true, "B", 1);
            ValidateCapture(m, 2, 0, 1, 1, "B");

            ValidateGroup(m, 3, 0, 1, true, "A", 1);
            ValidateCapture(m, 3, 0, 0, 1, "A");

            GroupsAreEqual(m.Groups[3], m.Groups["test"], "Named Group is correct");
        }

        [Test]
        public void MatchInnerNamedGroupTest2()
        {
            const string pattern = @"(?<outer>(C)(?<inner1>(?<inner2>A)+)(B))";
            const string text = @"CAAAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "CAAAB", 6, true);

            ValidateGroup(m, 0, 0, 5, true, "CAAAB", 1);
            ValidateCapture(m, 0, 0, 0, 5, "CAAAB");

            ValidateGroup(m, 1, 0, 1, true, "C", 1);
            ValidateCapture(m, 1, 0, 0, 1, "C");

            ValidateGroup(m, 2, 4, 1, true, "B", 1);
            ValidateCapture(m, 2, 0, 4, 1, "B");

            ValidateGroup(m, 3, 0, 5, true, "CAAAB", 1);
            ValidateCapture(m, 3, 0, 0, 5, "CAAAB");

            ValidateGroup(m, 4, 1, 3, true, "AAA", 1);
            ValidateCapture(m, 4, 0, 1, 3, "AAA");

            ValidateGroup(m, 5, 3, 1, true, "A", 3);
            ValidateCapture(m, 5, 0, 1, 1, "A");
            ValidateCapture(m, 5, 1, 2, 1, "A");
            ValidateCapture(m, 5, 2, 3, 1, "A");

            GroupsAreEqual(m.Groups[4], m.Groups["inner1"], "Named Group is correct");
        }

        [Test]
        public void GroupOrderingTest()
        {
            const string pattern = @"(C)(?<group1>A)+(B)";
            const string text = @"CAAAB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "CAAAB", 4, true);

            var expected = new List<string>();

            ValidateGroup(m, 0, 0, 5, true, "CAAAB", 1);
            ValidateCapture(m, 0, 0, 0, 5, "CAAAB");
            expected.Add("CAAAB");

            ValidateGroup(m, 1, 0, 1, true, "C", 1);
            ValidateCapture(m, 1, 0, 0, 1, "C");
            expected.Add("C");

            ValidateGroup(m, 2, 4, 1, true, "B", 1);
            ValidateCapture(m, 2, 0, 4, 1, "B");
            expected.Add("B");

            ValidateGroup(m, 3, 3, 1, true, "A", 3);
            ValidateCapture(m, 3, 0, 1, 1, "A");
            ValidateCapture(m, 3, 1, 2, 1, "A");
            ValidateCapture(m, 3, 2, 3, 1, "A");
            expected.Add("A");

            var i = 0;
            foreach (Group group in m.Groups)
            {
                Assert.AreEqual(expected[i], group.Value, "Group[" + i + "].Value is correct");
                ++i;
            }
        }

        [Test]
        public void RepeatingGroupTest()
        {
            const string pattern = @"((A(\d)*A)x(B(\d)*B)+)";
            const string text = @"A123AxBBB";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 8, "A123AxBB", 6, true);

            ValidateGroup(m, 0, 0, 8, true, "A123AxBB", 1);
            ValidateCapture(m, 0, 0, 0, 8, "A123AxBB");

            ValidateGroup(m, 1, 0, 8, true, "A123AxBB", 1);
            ValidateCapture(m, 1, 0, 0, 8, "A123AxBB");

            ValidateGroup(m, 2, 0, 5, true, "A123A", 1);
            ValidateCapture(m, 2, 0, 0, 5, "A123A");

            ValidateGroup(m, 3, 3, 1, true, "3", 3);
            ValidateCapture(m, 3, 0, 1, 1, "1");
            ValidateCapture(m, 3, 1, 2, 1, "2");
            ValidateCapture(m, 3, 2, 3, 1, "3");

            ValidateGroup(m, 4, 6, 2, true, "BB", 1);
            ValidateCapture(m, 4, 0, 6, 2, "BB");

            ValidateGroup(m, 5, 0, 0, false, "", 0);
        }

        [Test]
        public void ZeroResultTest()
        {
            // Case 1:
            var pattern = @"()";
            var text = @"ABC";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 2, true);

            ValidateGroup(m, 0, 0, 0, true, "", 1);
            ValidateCapture(m, 0, 0, 0, 0, "");

            ValidateGroup(m, 1, 0, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 0, 0, "");

            // Case 2:
            pattern = @"(B?)";
            text = @"ABC";
            rgx = new Regex(pattern);
            m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 2, true);

            ValidateGroup(m, 0, 0, 0, true, "", 1);
            ValidateCapture(m, 0, 0, 0, 0, "");

            ValidateGroup(m, 1, 0, 0, true, "", 1);
            ValidateCapture(m, 1, 0, 0, 0, "");

            // Case 3:
            pattern = @"(B)?";
            text = @"ABC";
            rgx = new Regex(pattern);
            m = rgx.Match(text);

            ValidateMatch(m, 0, 0, "", 2, true);

            ValidateGroup(m, 0, 0, 0, true, "", 1);
            ValidateCapture(m, 0, 0, 0, 0, "");

            ValidateGroup(m, 1, 0, 0, false, "", 0);
        }

        [Test]
        public void NonCapturingGroupsTest()
        {
            const string pattern = @"(?:Q(?<noncapInner>A)Z)(B)(?:C)";
            const string text = @"QAZBC";
            var rgx = new Regex(pattern);
            var m = rgx.Match(text);

            ValidateMatch(m, 0, 5, "QAZBC", 3, true);

            ValidateGroup(m, 0, 0, 5, true, "QAZBC", 1);
            ValidateCapture(m, 0, 0, 0, 5, "QAZBC");

            ValidateGroup(m, 1, 3, 1, true, "B", 1);
            ValidateCapture(m, 1, 0, 3, 1, "B");

            ValidateGroup(m, 2, 1, 1, true, "A", 1);
            ValidateCapture(m, 2, 0, 1, 1, "A");
        }
    }
}