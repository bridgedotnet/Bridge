using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1741 - {0}")]
    public class Bridge1741
    {
        [Test]
        public void TestNumbersHashCode()
        {
            Assert.AreEqual(10, 10.GetHashCode(), "10/10");
            Assert.AreNotEqual(10.GetHashCode(), 100.GetHashCode(), "10/100");

            Assert.AreEqual(100.1.GetHashCode(), 100.1.GetHashCode(), "100.1/100.1");
            Assert.AreNotEqual(100.1.GetHashCode(), 100.2.GetHashCode(), "100.1/100.2");
        }
    }
}