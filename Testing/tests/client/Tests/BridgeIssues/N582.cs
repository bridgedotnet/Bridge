using System;
using Bridge;
using Bridge.QUnit;

namespace ClientTestLibrary
{
    // Bridge[#582]
    [FileName("testBridgeIssues.js")]
    internal class Bridge582
    {
        public static void TestAddTimeSpan(Assert assert)
        {
            assert.Expect(6);

            DateTime today = new DateTime(2006, 1, 1);
            TimeSpan duration = new TimeSpan(36, 0, 0, 0);
            DateTime answer = today.Add(duration);

            assert.Equal(answer.Year, 2006, "Bridge582 TestAddTimeSpan Year");
            assert.Equal(answer.Month, 2, "Bridge582 TestAddTimeSpan Month");
            assert.Equal(answer.Day, 6, "Bridge582 TestAddTimeSpan Day");
            assert.Equal(answer.Hour, 0, "Bridge582 TestAddTimeSpan Hours");
            assert.Equal(answer.Minute, 0, "Bridge582 TestAddTimeSpan Minutes");
            assert.Equal(answer.Second, 0, "Bridge582 TestAddTimeSpan Seconds");
        }

        public static void TestAddTicks(Assert assert)
        {
            assert.Expect(6);

            DateTime dt = new DateTime(2001, 1, 1);
            dt = dt.AddTicks(20000000);

            assert.Equal(dt.Year, 2001, "Bridge582 TestAddTicks Year");
            assert.Equal(dt.Month, 1, "Bridge582 TestAddTicks Month");
            assert.Equal(dt.Day, 1, "Bridge582 TestAddTicks Day");
            assert.Equal(dt.Hour, 0, "Bridge582 TestAddTicks Hour");
            assert.Equal(dt.Minute, 0, "Bridge582 TestAddTicks Minute");
            assert.Equal(dt.Second, 2, "Bridge582 TestAddTicks Second");
        }

        public static void TestTicks(Assert assert)
        {
            assert.Expect(7);

            DateTime centuryBegin = new DateTime(2001, 1, 1);
            DateTime currentDate = new DateTime(2007, 12, 14, 15, 23);
            long elapsedTicks = currentDate.Ticks - centuryBegin.Ticks;
            TimeSpan elapsedSpan = new TimeSpan(elapsedTicks);

            assert.Equal(elapsedTicks, 2193385800000000, "Bridge582 TestTicks ticks");
            assert.Equal(elapsedSpan.TotalSeconds, 219338580, "Bridge582 TestTicks seconds");
            assert.Equal(elapsedSpan.TotalMinutes, 3655643, "Bridge582 TestTicks minutes");
            assert.Equal(elapsedSpan.Days, 2538, "Bridge582 TestTicks days");
            assert.Equal(elapsedSpan.Hours, 15, "Bridge582 TestTicks hours");
            assert.Equal(elapsedSpan.Minutes, 23, "Bridge582 TestTicks minutes");
            assert.Equal(elapsedSpan.Seconds, 0, "Bridge582 TestTicks minutes");
        }

        public static void TestSubtractTimeSpan(Assert assert)
        {
            assert.Expect(4);

            DateTime date1 = new DateTime(DateTime.Utc(1996, 6, 3, 22, 15, 0));
            DateTime date2 = new DateTime(DateTime.Utc(1996, 12, 6, 13, 2, 0));
            DateTime date3 = new DateTime(DateTime.Utc(1996, 10, 12, 8, 42, 0));

            TimeSpan diff1 = date2.Subtract(date1);
            assert.Ok(diff1.Equals(new TimeSpan(185, 14, 47, 0)), "Bridge582 TestSubtractTimeSpan diff1");

            DateTime date4 = date3.Subtract(diff1);
            assert.Ok(date4.Equals(new DateTime(DateTime.Utc(1996, 4, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date4");

            TimeSpan diff2 = date2 - date3;
            assert.Ok(diff2.Equals(new TimeSpan(55, 4, 20, 0)), "Bridge582 TestSubtractTimeSpan diff2");

            DateTime date5 = date1 - diff2;
            assert.Ok(date5.Equals(new DateTime(DateTime.Utc(1996, 4, 9, 17, 55, 0))), "Bridge582 TestSubtractTimeSpan date5");
        }

        public static void TestTimeOfDay(Assert assert)
        {
            assert.Expect(6);

            var date = new DateTime(2013, 9, 14, 9, 28, 0);
            assert.Ok(date.Date.Equals(new DateTime(2013, 9, 14)), "Bridge582 TestTimeOfDay Date 2013, 9, 14, 9, 28, 0");
            assert.Ok(date.TimeOfDay.Equals(new TimeSpan(9, 28, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2013, 9, 14, 9, 28, 0");

            date = new DateTime(2011, 5, 28, 10, 35, 0);
            assert.Ok(date.Date.Equals(new DateTime(2011, 5, 28)), "Bridge582 TestTimeOfDay Date 2011, 5, 28, 10, 35, 0");
            assert.Ok(date.TimeOfDay.Equals(new TimeSpan(10, 35, 0)), "Bridge582 TestTimeOfDay TimeOfDay 2011, 5, 28, 10, 35, 0");

            date = new DateTime(1979, 12, 25, 14, 30, 0);
            assert.Ok(date.Date.Equals(new DateTime(1979, 12, 25)), "Bridge582 TestTimeOfDay Date 1979, 12, 25, 14, 30, 0");
            assert.Ok(date.TimeOfDay.Equals(new TimeSpan(14, 30, 0)), "Bridge582 TestTimeOfDay TimeOfDay 1979, 12, 25, 14, 30, 0");    
        }
    }
}