using System;
using Bridge.Test.NUnit;
using System.Globalization;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3170 - {0}")]
    public class Bridge3170
    {
        [Test]
        public void TestDateTimeParseExactZ()
        {
            var dateString = "2017-08-31T22:00:00Z";
            var dateTime = DateTime.ParseExact(dateString, "yyyy-MM-ddTHH:mm:ssZ", CultureInfo.InvariantCulture);
            var utc_date = dateTime.ToUniversalTime();

            Assert.AreEqual(2017, utc_date.Year);
            Assert.AreEqual(8, utc_date.Month);
            Assert.AreEqual(31, utc_date.Day);
            Assert.AreEqual(22, utc_date.Hour);
            Assert.AreEqual(0, utc_date.Minute);
            Assert.AreEqual(0, utc_date.Second);
        }
    }
}