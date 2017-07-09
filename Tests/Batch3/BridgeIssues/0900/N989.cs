using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#989]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#989 - {0}")]
    public class Bridge989
    {
        [Test(ExpectedCount = 1)]
        public static void DateTimeToISOStringWorks()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15, DateTimeKind.Utc);
            var d2 = d1.ToLocalTime();
            var d3 = d2.ToUniversalTime();

            Assert.AreEqual("2011-10-05T14:48:15.0000000Z", d3.ToString("O"));
        }

        [Test(ExpectedCount = 1)]
        public static void DateToISOStringWorks()
        {
            var d1 = new Date("05 October 2011 14:48 UTC");

            Assert.AreEqual("2011-10-05T14:48:00.000Z", d1.ToISOString());
        }
    }
}