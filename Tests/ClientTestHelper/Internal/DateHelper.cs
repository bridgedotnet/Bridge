namespace Bridge.ClientTestHelper
{
    using Bridge.Test.NUnit;
    using System;

    public static class DateHelper
    {
        public static void AssertDate(DateTime dt, DateTimeKind kind, long ticks, int? year = null, int? month = null, int? day = null, int? hour = null, int? minute = null, int? second = null, int? ms = null, string message = null)
        {
            Assert.AreEqual(kind, dt.Kind, message + "Kind");
            Assert.AreEqual(ticks.ToString(), dt.Ticks.ToString(), message + "Ticks");

            if (year.HasValue)
            {
                Assert.AreEqual(year.Value, dt.Year, message + "Year");
            }

            if (month.HasValue)
            {
                Assert.AreEqual(month.Value, dt.Month, message + "Month");
            }

            if (day.HasValue)
            {
                Assert.AreEqual(day.Value, dt.Day, message + "Day");
            }

            if (hour.HasValue)
            {
                Assert.AreEqual(hour.Value, dt.Hour, message + "Hour");
            }

            if (minute.HasValue)
            {
                Assert.AreEqual(minute.Value, dt.Minute, message + "Minute");
            }

            if (second.HasValue)
            {
                Assert.AreEqual(second.Value, dt.Second, message + "Second");
            }

            if (ms.HasValue)
            {
                Assert.AreEqual(ms.Value, dt.Millisecond, message + "Millisecond");
            }
        }

        public static void AssertDate(DateTime expected, DateTime actual, string message = null)
        {
            Assert.AreEqual(expected.Kind, actual.Kind, message + "Kind");
            Assert.AreEqual(expected.Ticks.ToString(), actual.Ticks.ToString(), message + "Ticks");

            Assert.AreEqual(expected.Year, actual.Year, message + "Year");
            Assert.AreEqual(expected.Month, actual.Month, message + "Month");
            Assert.AreEqual(expected.Day, actual.Day, message + "Day");
            Assert.AreEqual(expected.Hour, actual.Hour, message + "Hour");
            Assert.AreEqual(expected.Minute, actual.Minute, message + "Minute");
            Assert.AreEqual(expected.Second, actual.Second, message + "Second");
            Assert.AreEqual(expected.Millisecond, actual.Millisecond, message + "Millisecond");
        }

        public static string GetOffsetString(int adjustment = 0)
        {
            var minutes = GetOffsetMinutes() + adjustment;

            var b = minutes < 0 ? "+" : "-";
            minutes = Math.Abs(minutes);

            var offset = minutes != 0
                ? (b + (minutes / 60).ToString("00") + ":" + (minutes % 60).ToString("00"))
                : "Z";

            return offset;
        }

        public static int GetOffsetMinutes()
        {
#if BRIDGE
            dynamic d = new DateTime();

            return d.getTimezoneOffset();
#else
            return -(int)TimeZoneInfo.Local.GetUtcOffset(DateTime.Now).TotalMinutes;
#endif
        }
    }
}