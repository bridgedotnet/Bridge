using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#782]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#782 - {0}")]
    public class Bridge782
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            object o = new {};
            Assert.True(o["__foo"] == null, "Bridge782");
        }
    }
}