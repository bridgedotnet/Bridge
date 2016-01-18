using Bridge;
using Bridge.Test;

using System;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#546]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#546 - {0}")]
    public class Bridge546
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var date = new DateTime(2015, 1, 1, 0, 0, 0, 0);

            var i = 1;
            var d = date.AddMinutes(10 + 20 * i);

            Assert.AreEqual(d.Minute, 30, "Bridge546 30 minutes");
        }

        [Test(ExpectedCount = 5)]
        public static void TestRelated()
        {
            var date = new DateTime(2015, 1, 1, 0, 0, 0, 0);
            var span1 = new TimeSpan(0, 15, 0);
            var span2 = new TimeSpan(0, 7, 0);
            var i = 1;

            var d1 = date - span1 - span2;
            Assert.AreEqual(d1.Minute, 38, "Bridge546 d1");

            var d2 = date + span1 + span2;
            Assert.AreEqual(d2.Minute, 22, "Bridge546 d2");

            var d3 = date.AddDays(10 + 20 * i);
            Assert.AreEqual(d3.Day, 31, "Bridge546 d3");

            var d4 = date.AddHours(10 + 20 * i);
            Assert.AreEqual(d4.Hour, 6, "Bridge546 d4");

            var d5 = date.AddSeconds(12 + 20 * i);
            Assert.AreEqual(d5.Second, 32, "Bridge546 d5");
        }
    }
}
