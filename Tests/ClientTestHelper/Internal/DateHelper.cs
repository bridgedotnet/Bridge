namespace Bridge.ClientTestHelper
{
    using Bridge.Test.NUnit;
    using System;

    public static class DateHelper
    {
        public static void AssertDate(DateTime dt, DateTimeKind kind, long ticks, int? year = null, int? month = null, int? day = null, int? hour = null, int? minute = null, int? second = null, int? ms = null)
        {
            Assert.AreEqual(kind, dt.Kind, "Kind");
            Assert.AreEqual(ticks.ToString(), dt.Ticks.ToString(), "Ticks");

            if (year.HasValue)
            {
                Assert.AreEqual(year.Value, dt.Year, "Year");
            }

            if (month.HasValue)
            {
                Assert.AreEqual(month.Value, dt.Month, "Month");
            }

            if (day.HasValue)
            {
                Assert.AreEqual(day.Value, dt.Day, "Day");
            }

            if (hour.HasValue)
            {
                Assert.AreEqual(hour.Value, dt.Hour, "Hour");
            }

            if (minute.HasValue)
            {
                Assert.AreEqual(minute.Value, dt.Minute, "Minute");
            }

            if (second.HasValue)
            {
                Assert.AreEqual(second.Value, dt.Second, "Second");
            }

            if (ms.HasValue)
            {
                Assert.AreEqual(ms.Value, dt.Millisecond, "Millisecond");
            }
        }

        public static void AssertDate(DateTime expected, DateTime actual)
        {
            Assert.AreEqual(expected.Kind, actual.Kind, "Kind");
            Assert.AreEqual(expected.Ticks.ToString(), actual.Ticks.ToString(), "Ticks");

            Assert.AreEqual(expected.Year, actual.Year, "Year");
            Assert.AreEqual(expected.Month, actual.Month, "Month");
            Assert.AreEqual(expected.Day, actual.Day, "Day");
            Assert.AreEqual(expected.Hour, actual.Hour, "Hour");
            Assert.AreEqual(expected.Minute, actual.Minute, "Minute");
            Assert.AreEqual(expected.Second, actual.Second, "Second");
            Assert.AreEqual(expected.Millisecond, actual.Millisecond, "Millisecond");
        }
    }
}