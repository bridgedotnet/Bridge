using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    public sealed class Bridge537A
    {
        public int Id;
    }

    // Bridge[#537]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#537 - {0}")]
    public class Bridge537
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.AreEqual(2, Bridge537B.TestB1(), "Bridge537 TestB1");

            Assert.AreEqual(1, Bridge537B.TestB2(), "Bridge537 TestB2");
        }
    }
}