using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3138 - {0}")]
    public class Bridge3138
    {
        [Test]
        public static void DateTimeGreaterThanAndLessThanOperators()
        {
            var d1 = DateTime.Now;
            var d2 = DateTime.Now.AddMilliseconds(100);
            var d3 = DateTime.Now.AddMilliseconds(-100);

            Assert.True(d1 < d2);
            Assert.False(d1 > d2);
            Assert.True(d1 <= d2);
            Assert.False(d1 >= d2);
            Assert.False(d1 < d3);
            Assert.True(d1 > d3);
            Assert.False(d1 <= d3);
            Assert.True(d1 >= d3);
        }
    }
}