using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1385 - " + Constants.BATCH_NAME + " {0}")]
    public class Bridge1385
    {
        [Test]
        public static void TestIsTypedArrayForByte()
        {
            object value = new byte[3];
            Assert.True(value is byte[]);
        }
    }
}