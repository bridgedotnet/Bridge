using Bridge.ClientTest.Batch3.Utilities;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#544]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#544 - {0}")]
    public class Bridge544
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var o = Bridge.Json.Deserialize<bool>("true");
            Assert.AreEqual(true, o, "Bridge544 bool");
        }

        [Test(ExpectedCount = 5)]
        public static void TestRelated()
        {
            var i = Bridge.Json.Deserialize<int>("25");
            Assert.AreEqual(25, i, "Bridge544 int");

            var dbl = Bridge.Json.Deserialize<double>("26.1");
            Assert.AreEqual(26.1d, dbl, "Bridge544 double");

            var d = Bridge.Json.Deserialize<decimal>("27.2");
            DecimalHelper.AssertIsDecimalAndEqualTo(d, 27.2, "Bridge544 decimal");

            var s = Json.Deserialize<string>("\"Some string\"");
            Assert.AreEqual("Some string", s, "Bridge544 string");
        }
    }
}