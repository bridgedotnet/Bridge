using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#952]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#952 - {0}")]
    public class Bridge952
    {
        [Test(ExpectedCount = 2)]
        public static void TestDoubleMinValue()
        {
            Assert.AreEqual(-1.7976931348623157e+308, double.MinValue, "Compare value");
            Assert.AreEqual("-1.79769313486232E+308", double.MinValue.ToString(), "Compare by ToString()");
        }
    }
}