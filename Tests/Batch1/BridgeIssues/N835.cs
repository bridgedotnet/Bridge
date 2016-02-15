using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#835]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#835 - {0}")]
    public class Bridge835
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var arr = new Dot[10, 10];
            Assert.AreNotEqual(null, arr, "Bridge835");
        }

        public struct Dot
        {
        }
    }
}