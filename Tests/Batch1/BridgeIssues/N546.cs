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

            Assert.AreEqual(30, d.Minute, "Bridge546 30 minutes");
        }

        [Test(ExpectedCount = 5)]
        public static void TestRelated()
        {
            var date = new DateTime(2015, 1, 1, 0, 0, 0, 0);
            var span1 = new TimeSpan(0, 15, 0);
            var span2 = new TimeSpan(0, 7, 0);
            var i = 1;

            var d1 = date - span1 - span2;
            Assert.AreEqual(38, d1.Minute, "Bridge546 d1");

            var d2 = date + span1 + span2;
            Assert.AreEqual(22, d2.Minute, "Bridge546 d2");

            var d3 = date.AddDays(10 + 20 * i);
            Assert.AreEqual(31, d3.Day, "Bridge546 d3");

            var d4 = date.AddHours(10 + 20 * i);
            Assert.AreEqual(6, d4.Hour, "Bridge546 d4");

            var d5 = date.AddSeconds(12 + 20 * i);
            Assert.AreEqual(32, d5.Second, "Bridge546 d5");
        }
    }
}
