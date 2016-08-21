using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1527 - {0}")]
    public class Bridge1527
    {
        private static string hello = "test";
        public const string SomeLiteral = "this.hello";

        [Script("return 1 + " + SomeLiteral + " + 2;")]
        public static string GetValue() { return null; }

        [Test]
        public void TestScriptAttributeWithReference()
        {
            var h = Bridge1527.hello;
            Assert.AreEqual("1test2", Bridge1527.GetValue());
        }
    }
}