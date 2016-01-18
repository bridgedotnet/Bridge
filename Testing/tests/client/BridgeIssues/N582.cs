using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
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

            Assert.AreEqual(answer.Year, 2006, "Bridge582 TestAddTimeSpan Year");
            Assert.AreEqual(answer.Month, 2, "Bridge582 TestAddTimeSpan Month");
            Assert.AreEqual(answer.Day, 6, "Bridge582 TestAddTimeSpan Day");
            Assert.AreEqual(answer.Hour, 0, "Bridge582 TestAddTimeSpan Hours");
            Assert.AreEqual(answer.Minute, 0, "Bridge582 TestAddTimeSpan Minutes");
            Assert.AreEqual(answer.Second, 0, "Bridge582 TestAddTimeSpan Seconds");
        }

        [Test(ExpectedCount = 6)]
        public static void TestAddTicks()
        {
            DateTime dt = new DateTime(2001, 1, 1);
            dt = dt.AddTicks(20000000);

            Assert.AreEqual(dt.Year, 2001, "Bridge582 TestAddTicks Year");
            Assert.AreEqual(dt.Month, 1, "Bridge582 TestAddTicks Month");
            Assert.AreEqual(dt.Day, 1, "Bridge582 TestAddTicks Day");
            Assert.AreEqual(dt.Hour, 0, "Bridge582 TestAddTicks Hour");
            Assert.AreEqual(dt.Minute, 0, "Bridge582 TestAddTicks Minute");
            Assert.AreEqual(dt.Second, 2, "Bridge582 TestAddTicks Second");
        }

        [Test(ExpectedCount = 7)]
        public static void TestTicks()
        {
            DateTime centuryBegin = new DateTime(2001, 1, 1);
            DateTime currentDate = new DateTime(2007, 12, 14, 15, 23);
            long elapsedTicks = currentDate.Ticks - centuryBegin.Ticks;
            TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);

            Assert.AreEqual(elapsedTicks, 2193385800000000, "Bridge582 TestTicks ticks");
            Assert.AreEqual(elapsedSpan.TotalSeconds, 219338580, "Bridge582 TestTicks seconds");
            Assert.AreEqual(elapsedSpan.TotalMinutes, 3655643, "Bridge582 TestTicks minutes");
            Assert.AreEqual(elapsedSpan.Days, 2538, "Bridge582 TestTicks days");
            Assert.AreEqual(elapsedSpan.Hours, 15, "Bridge582 TestTicks hours");
            Assert.AreEqual(elapsedSpan.Minutes, 23, "Bridge582 TestTicks minutes");
            Assert.AreEqual(elapsedSpan.Seconds, 0, "Bridge582 TestTicks minutes");
        }

        [Test(ExpectedCount = 4)]
        public static void TestSubtractTimeSpan()
        {
            DateTime date1 = new DateTime(DateTime.Utc(1996, 6, 3, 22, 15, 0));
            DateTime date2 = new DateTime(DateTime.Utc(1996, 12, 6, 13, 2, 0));
            DateTime date3 = new DateTime(DateTime.Utc(1996, 10, 12, 8, 42, 0));

            TimeSpan diff1 = date2.Subtract(date1);
            Assert.True(diff1.Equals(new TimeSpan(185, 14, 47, 0)), "Bridge582 TestSubtractTimeSpan diff1");

            DateTime date4 = date3.Subtract(diff1);
            Assert.True(date4.Equals(new DateTime(DateTime.Utc(1996, 4, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date4");

            TimeSpan diff2 = date2 - date3;
            Assert.True(diff2.Equals(new TimeSpan(55, 4, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

            DateTime date5 = date1 - diff2;
            Assert.True(date5.Equals(new DateTime(DateTime.Utc(1996, 4, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date5");
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