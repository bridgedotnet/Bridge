using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1085 - {0}")]
    public class Bridge1085
    {
        [Test]
        public static void TestInlineArrayExpand()
        {
            string[] part1 = { "Hello", "World" };
            string[] part2 = { "Part", "Two" };
            string[] merged = { };
            merged.Push("Lets", "Beginn");
            merged.Push(part1);
            merged.Push(part2);

            Assert.AreEqual(new[] { "Lets", "Beginn", "Hello", "World", "Part", "Two" }, merged);
        }
    }
}