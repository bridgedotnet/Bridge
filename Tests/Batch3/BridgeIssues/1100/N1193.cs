using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1193 - {0}")]
    public class Bridge1193
    {
        [Test]
        public static void TestAssemblyVersionMarker()
        {
            Assert.AreEqual("1.2.3.4", ClientTestHelper.Internal.N1193.ClientTestHelperAssemblyVersion);
        }
    }
}