using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// Ensures DateTime.AddSeconds() wont change the current day as long as
    /// the time addition does not switch to a different day.
    /// </summary>
    [TestFixture(TestNameFormat = "#3621 - {0}")]
    public class Bridge3621
    {
        /// <summary>
        /// Creates a DateTime object, then incrementing one of the time units
        /// to it; By the provided time, it shouldn't switch to the next day
        /// thus the 'Date' component of the object should be equal across the
        /// two copies.
        /// </summary>
        [Test]
        public static void TestDateFromDateTime()
        {
            DateTime first = new DateTime(2018, 5, 5, 1, 1, 1, 1, DateTimeKind.Utc);

            DateTime second = first.AddSeconds(1);
            Assert.AreEqual(first.Date, second.Date, "DateTime's 'Date' is not affected by adding seconds, as long as the change do not switch the current day/month/year.");

            second = first.AddMinutes(1);
            Assert.AreEqual(first.Date, second.Date, "DateTime's 'Date' is not affected by adding minutes.");

            second = first.AddHours(1);
            Assert.AreEqual(first.Date, second.Date, "DateTime's 'Date' is not affected by adding hours.");

            second = first.AddMilliseconds(100);
            Assert.AreEqual(first.Date, second.Date, "DateTime's 'Date' is not affected by adding milisseconds.");

            second = first.AddTicks(250);
            Assert.AreEqual(first.Date, second.Date, "DateTime's 'Date' is not affected by adding to the tick count.");
        }
    }
}