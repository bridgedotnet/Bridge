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
            var d1 = new DateTime(2011, 10, 5, 14, 48);
            var d2 = d1.ToUniversalTime();

            // This is required to change d1 to UTC without changing time
            d1 = d1.AddMonths(d1.Month - d2.Month);
            d1 = d1.AddDays(d1.Day - d2.Day);
            d1 = d1.AddHours(d1.Hour - d2.Hour);
            d1 = d1.AddMinutes(d1.Minute - d2.Minute);

            Assert.AreEqual("2011-10-05T14:48:00.000Z", d1.ToISOString());
        }

        [Test(ExpectedCount = 1)]
        public static void DateToISOStringWorks()
        {
            var d1 = new Date("05 October 2011 14:48 UTC");

            Assert.AreEqual("2011-10-05T14:48:00.000Z", d1.ToISOString());
        }
    }
}