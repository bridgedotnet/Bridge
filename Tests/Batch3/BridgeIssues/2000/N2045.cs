using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2045 - {0}")]
    public class Bridge2045
    {
        [Test]
        public static void TestDoubleEscapingInterpolation()
        {
            string s = $"Hello \"World!\"";
            Assert.AreEqual("Hello \"World!\"", s);
        }
    }
}