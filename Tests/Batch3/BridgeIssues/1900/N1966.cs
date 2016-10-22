using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1966 - {0}")]
    public class Bridge1966
    {
        [Test]
        public void TestCase()
        {
            Assert.AreEqual(Double.PositiveInfinity.GetHashCode(), Double.PositiveInfinity.GetHashCode());
            Assert.AreEqual(Double.NegativeInfinity.GetHashCode(), Double.NegativeInfinity.GetHashCode());
            Assert.AreEqual(0x7FF00000, Double.PositiveInfinity.GetHashCode());
            Assert.AreEqual(0xFFF00000, Double.NegativeInfinity.GetHashCode());
        }
    }
}