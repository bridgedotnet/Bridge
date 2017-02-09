using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#788]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#788 - {0}")]
    public class Bridge788
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.True(Validation.Url("http://127.0.0.1"));
            Assert.False(Validation.Url("http://127.0.1"));
        }
    }
}