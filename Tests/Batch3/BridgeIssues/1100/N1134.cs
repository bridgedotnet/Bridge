using Bridge.Html5;
using Bridge.Test.NUnit;
using JSON = Bridge.JSON;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1134 - {0}")]
    public class Bridge1134
    {
        [Test]
        public static void TestJsonArrayParse()
        {
            var o = JSON.Deserialize<int[]>("[1]");
            Assert.True(o != null);
            Assert.AreEqual(1, o.Length);
            Assert.AreEqual(1, o[0]);
        }
    }
}