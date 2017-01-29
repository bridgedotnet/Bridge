using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1385 - {0}")]
    public class Bridge1385
    {
        [Test]
        public static void TestIsTypedArray()
        {
            object value = Script.Write<byte[]>("new Uint8Array(3)");
            Assert.True(value is byte[]);
        }
    }
}