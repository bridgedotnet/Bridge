using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#786]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#786 - {0}")]
    public class Bridge786
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.AreEqual("true", Get(true), "Bridge786 true");
            Assert.AreEqual("false", Get(false), "Bridge786 false");
        }

        private static string Get(bool throws)
        {
            return throws ? "true" : "false";
        }
    }
}