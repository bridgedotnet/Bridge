using Bridge.Test.NUnit;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1579 - {0}")]
    public class Bridge1579
    {
        [Test]
        public void TestNullableDecimalToFloatDouble()
        {
            decimal? x1 = 0;

            Assert.AreEqual((float)(x1 + 10.5m), 10.5);
            Assert.AreEqual((double)(x1 + 10.5m), 10.5);
        }
    }
}