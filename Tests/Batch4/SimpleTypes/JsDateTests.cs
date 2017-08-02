using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "Date - {0}")]
    public class DateTests
    {
        // #SPI
        // May fail depending on timezone and DST
        [Test]
        public void ParseWorks_SPI_1624()
        {
            // #1624
            var utc = Date.UTC(2017, 7, 12);
            var local = (new Date(2017, 7, 12)).ValueOf();
            var offset = utc - local;

            var d1 = Date.Parse("Aug 12, 2012");
            var d2 = Date.Parse("1970-01-01");
            var d3 = Date.Parse("March 7, 2014");
            var d4 = Date.Parse("Wed, 09 Aug 1995 00:00:00 GMT");
            var d5 = Date.Parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");

            Assert.AreEqual(1344729600000d - offset, d1);
            Assert.AreEqual(0d, d2);
            Assert.AreEqual(1394150400000d - offset, d3);
            Assert.AreEqual(807926400000d, d4);
            Assert.AreEqual(14400000d, d5);
        }
    }
}