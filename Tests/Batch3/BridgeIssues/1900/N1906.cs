using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1906 - {0}")]
    public class Bridge1906
    {
        [Test]
        public void TestIsOperatorInaccuracy()
        {
#pragma warning disable 183
            Assert.True(true is object);
            Assert.True("string" is object);
#pragma warning restore 183
        }
    }
}