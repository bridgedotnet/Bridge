using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1096 - {0}")]
    public class Bridge1096
    {
        [Test]
        public static void TestClippingIssues()
        {
            int v = 1;
            uint result = (uint)v * 8;
            Assert.AreEqual(8, result);

            int a = 1, b = 4;
            var res = (int)System.Math.Ceiling(a / 1.0) * b;
            Assert.AreEqual(4, res);
        }
    }
}