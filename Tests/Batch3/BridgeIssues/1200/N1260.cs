using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1260 - {0}")]
    public class Bridge1260
    {
        [Test(ExpectedCount = 3)]
        public static void TestStringTrim()
        {
            var s1 = "[Click me]";
            Assert.AreEqual("Click me", s1.Trim('[', ']'));

            var s2 = "^Click me^";
            Assert.AreEqual("Click me", s2.Trim('^'));

            var s3 = "\\Click me\\";
            Assert.AreEqual("Click me", s3.Trim('\\'));
        }

        [Test(ExpectedCount = 3)]
        public static void TestStringTrimStart()
        {
            var s1 = "[Click me]";
            Assert.AreEqual("Click me]", s1.TrimStart('[', ']'));

            var s2 = "^Click me^";
            Assert.AreEqual("Click me^", s2.TrimStart('^'));

            var s3 = "\\Click me\\";
            Assert.AreEqual("Click me\\", s3.TrimStart('\\'));
        }

        [Test(ExpectedCount = 3)]
        public static void TestStringTrimEnd()
        {
            var s1 = "[Click me]";
            Assert.AreEqual("[Click me", s1.TrimEnd('[', ']'));

            var s2 = "^Click me^";
            Assert.AreEqual("^Click me", s2.TrimEnd('^'));

            var s3 = "\\Click me\\";
            Assert.AreEqual("\\Click me", s3.TrimEnd('\\'));
        }
    }
}