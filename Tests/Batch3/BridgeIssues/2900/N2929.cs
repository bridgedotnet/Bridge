using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#2929]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2929 - {0}")]
    public class Bridge2929
    {
        [Test(ExpectedCount = 2)]
        public static void DateTimeToUniversalTimeWorks()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15);
            var d2 = d1.ToUniversalTime();

            // 2011-10-05T20:48:15.0000000Z

            Assert.AreEqual("2011-10-05T20:48:15.0000000Z", d2.ToString("O"));

            // Bridge[#2524]
            var d3 = d2.ToUniversalTime();
            Assert.AreEqual("2011-10-05T20:48:15.0000000Z", d3.ToString("O"));
        }

        [Test(ExpectedCount = 1)]
        public static void DateTimeToLocalTimeWorks()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15);
            var d2 = d1.ToUniversalTime();
            var d3 = d2.ToLocalTime();
            var d4 = d3.ToLocalTime();

            // Bridge["2524"]
            Assert.AreEqual(d4.ToString("O"), d3.ToString("O"));
        }
    }
}