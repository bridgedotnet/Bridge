using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1249 - {0}")]
    public class Bridge1249
    {
        private enum b : byte
        {
            a,
            b
        }

        [Test(ExpectedCount = 2)]
        public static void TestEnumOverflow()
        {
            b v1 = (b)byte.MaxValue;
            b v2 = (b)byte.MaxValue;
            Assert.AreEqual(0, ++v1);
            Assert.AreEqual("a", (++v2).ToString());
        }
    }
}