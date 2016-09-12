using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1802 - {0}")]
    public class Bridge1802
    {
        public static int @new()
        {
            return 1;
        }

        [Test]
        public void TestReservedWordsAsMethodName()
        {
            Assert.AreEqual(1, @new());
            Assert.AreEqual(1, Bridge1802.@new());
        }
    }
}