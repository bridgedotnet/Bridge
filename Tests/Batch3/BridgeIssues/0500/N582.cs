using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#582]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#582 - {0}")]
    public class Bridge582
    {
        [Test(ExpectedCount = 6)]
        public static void TestAddTimeSpan()
        {
            DateTime today = new DateTime(2006, 1, 1);
            TimeSpan duration = new TimeSpan(36, 0, 0, 0);
            DateTime answer = today.Add(duration);

            Assert.AreEqual(2006, answer.Year, "Bridge582 TestAddTimeSpan Year");
            Assert.AreEqual(2, answer.Month, "Bridge582 TestAddTimeSpan Month");
            Assert.AreEqual(6, answer.Day, "Bridge582 TestAddTimeSpan Day");
            Assert.AreEqual(0, answer.Hour, "Bridge582 TestAddTimeSpan Hours");
            Assert.AreEqual(0, answer.Minute, "Bridge582 TestAddTimeSpan Minutes");
            Assert.AreEqual(0, answer.Second, "Bridge582 TestAddTimeSpan Seconds");
        }

        [Test(ExpectedCount = 6)]
        public static void TestAddTicks()
        {
            DateTime dt = new DateTime(2001, 1, 1);
            dt = dt.AddTicks(20000000);

            Assert.AreEqual(2001, dt.Year, "Bridge582 TestAddTicks Year");
            Assert.AreEqual(1, dt.Month, "Bridge582 TestAddTicks Month");
            Assert.AreEqual(1, dt.Day, "Bridge582 TestAddTicks Day");
            Assert.AreEqual(0, dt.Hour, "Bridge582 TestAddTicks Hour");
            Assert.AreEqual(0, dt.Minute, "Bridge582 TestAddTicks Minute");
            Assert.AreEqual(2, dt.Second, "Bridge582 TestAddTicks Second");
        }

        [Test(ExpectedCount = 7)]
        public static void TestTicks()
        {
            DateTime centuryBegin = new DateTime(2001, 1, 1);
            DateTime currentDate = new DateTime(2007, 12, 14, 15, 23);
            long elapsedTicks = currentDate.Ticks - centuryBegin.Ticks;
            TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);

            Assert.AreEqual(2193385800000000, elapsedTicks, "Bridge582 TestTicks ticks");
            Assert.AreEqual(219338580, elapsedSpan.TotalSeconds, "Bridge582 TestTicks seconds");
            Assert.AreEqual(3655643, elapsedSpan.TotalMinutes, "Bridge582 TestTicks minutes");
            Assert.AreEqual(2538, elapsedSpan.Days, "Bridge582 TestTicks days");
            Assert.AreEqual(15, elapsedSpan.Hours, "Bridge582 TestTicks hours");
            Assert.AreEqual(23, elapsedSpan.Minutes, "Bridge582 TestTicks minutes");
            Assert.AreEqual(0, elapsedSpan.Seconds, "Bridge582 TestTicks minutes");
        }

        [Test]
        public static void TestSubtractTimeSpan()
        {
            DateTime date1 = new DateTime(1996, 6, 3, 22, 15, 0);
            DateTime date2 = new DateTime(1996, 12, 6, 13, 2, 0);
            DateTime date3 = new DateTime(1996, 10, 12, 8, 42, 0);

            TimeSpan diff1 = date2.Subtract(date1);

            Assert.AreEqual(diff1.Days, 185, "Days is 185");
            Assert.AreEqual(diff1.Hours, 15, "Hours is 15");
            Assert.AreEqual(diff1.Minutes, 47, "Minutes is 47");
            Assert.AreEqual(diff1.Seconds, 0, "Seconds is 0");
            Assert.AreEqual(diff1.Milliseconds, 0, "Milliseconds is 0");

            TimeSpan ts1 = new TimeSpan(185, 15, 47, 0);

            Assert.AreEqual(ts1.Days, 185, "Days is 185");
            Assert.AreEqual(ts1.Hours, 15, "Hours is 15");
            Assert.AreEqual(ts1.Minutes, 47, "Minutes is 47");
            Assert.AreEqual(ts1.Seconds, 0, "Seconds is 0");
            Assert.AreEqual(ts1.Milliseconds, 0, "Milliseconds is 0");

            Assert.True(diff1.Equals(ts1), "Bridge582 TestSubtractTimeSpan diff1");

            DateTime date4 = date3.Subtract(diff1);
            Assert.True(date4.Equals(new DateTime(1996, 4, 9, 16, 55, 0)), "Bridge582 TestSubtractTimeSpan date4");

            TimeSpan diff2 = date2 - date3;
            Assert.True(diff2.Equals(new TimeSpan(55, 5, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

            DateTime date5 = date1 - diff2;
            Assert.True(date5.Equals(new DateTime(1996, 4, 9, 16, 55, 0)), "Bridge582 TestSubtractTimeSpan date5");
        }

        [Test(ExpectedCount = 6)]
        public static void TestTimeOfDay()
        {
            var date = new DateTime(2013, 9, 14, 9, 28, 0);
            Assert.True(date.Date.Equals(new DateTime(2013, 9, 14)), "Bridge582 TestTimeOfDay Date 2013, 9, 14, 9, 28, 0");
            Assert.True(date.TimeOfDay.Equals(new TimeSpan(9, 28, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2013, 9, 14, 9, 28, 0");

            date = new DateTime(2011, 5, 28, 10, 35, 0);
            Assert.True(date.Date.Equals(new DateTime(2011, 5, 28)), "Bridge582 TestTimeOfDay Date 2011, 5, 28, 10, 35, 0");
            Assert.True(date.TimeOfDay.Equals(new TimeSpan(10, 35, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2011, 5, 28, 10, 35, 0");

            date = new DateTime(1979, 12, 25, 14, 30, 0);
            Assert.True(date.Date.Equals(new DateTime(1979, 12, 25)), "Bridge582 TestTimeOfDay Date 1979, 12, 25, 14, 30, 0");
            Assert.True(date.TimeOfDay.Equals(new TimeSpan(14, 30, 0)), "Bridge582 TestTimeOfDay TimeOfDay 1979, 12, 25, 14, 30, 0");
        }
    }
}