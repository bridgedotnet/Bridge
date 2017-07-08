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
        [Test(ExpectedCount = 5)]
        public static void DateTimeToUniversalTimeWorks()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15, DateTimeKind.Utc);
            var d2 = d1.ToLocalTime();
            var d3 = d2.ToUniversalTime();
            var d4 = d3.ToUniversalTime();

            // 2011-10-05T20:48:15.0000000Z

            Assert.AreEqual("2011-10-05T14:48:15.0000000Z", d3.ToString("O"));

            // Bridge[#2524]
            Assert.AreEqual(d3.ToString("O"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("o"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("O"), d4.ToString("o"));
        }

        [Test(ExpectedCount = 4)]
        public static void DateTimeToLocalTimeWorks()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15);
            var d2 = d1.ToUniversalTime();
            var d3 = d2.ToLocalTime();
            var d4 = d3.ToLocalTime();

            // Bridge["2524"]
            Assert.AreEqual(d3.ToString("O"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("o"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("O"), d4.ToString("o"));
        }
    }
}