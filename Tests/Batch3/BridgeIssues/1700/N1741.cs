using System;
using System.Collections;
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
            Assert.AreEqual(10, 10.GetHashCode());
            Assert.AreNotEqual(10.GetHashCode(), 100.GetHashCode());
            Assert.AreNotEqual(100.1.GetHashCode(), 100.2.GetHashCode());
        }
    }
}