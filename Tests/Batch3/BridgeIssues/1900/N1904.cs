using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1904 - {0}")]
    public class Bridge1904
    {
        [Test]
        public void TestDateTimeConstructorConvertsValueToMs()
        {
            var d1 = DateTime.Now;
            var tickValue = d1.Ticks;
            var d2 = new DateTime(tickValue);

            Assert.True(d1 == d2, "d1 (" + d1.ToString() + ") == d2(" + d2.ToString() + ")");
        }
    }
}