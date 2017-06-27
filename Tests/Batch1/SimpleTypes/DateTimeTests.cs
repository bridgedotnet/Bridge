using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "DateTime - {0}")]
    public class JsDateTimeTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1607_1608_1609()
        {
            Assert.AreEqual("System.DateTime", typeof(DateTime).FullName, "#2064");
            Assert.False(typeof(DateTime).IsClass);
            // #1607 #1608 #1609
            Assert.True(typeof(IComparable<DateTime>).IsAssignableFrom(typeof(DateTime)));
            Assert.True(typeof(IEquatable<DateTime>).IsAssignableFrom(typeof(DateTime)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(DateTime)));

            object d = new DateTime();
            Assert.True(d is DateTime);
            // #1609
            Assert.True(d is IComparable<DateTime>);
            // #1608
            Assert.True(d is IEquatable<DateTime>);

            Assert.True(d is IFormattable);

            var interfaces = typeof(DateTime).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<DateTime>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<DateTime>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        private void AssertDate(DateTime dt, int? year = null, int? month = null, int? day = null, int? hour = null, int? minute = null, int? second = null, int? ms = null)
        {
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

        [Test]
        public void DefaultConstructorWorks_SPI_1606()
        {
            var dt = new DateTime();
            // #1606
            AssertDate(dt, 1, 1, 1);
        }

        [Test]
        public void DefaultValueWorks_SPI_1606()
        {
            var dt = default(DateTime);
            // #1606
            AssertDate(dt, 1, 1, 1);
        }

        [Test]
        public void CreatingInstanceReturnsDateWithZeroValue_SPI_1606()
        {
            var dt = Activator.CreateInstance<DateTime>();
            // #1606
            AssertDate(dt, 1, 1, 1);
        }

        [Test]
        public void MillisecondSinceEpochConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000);
            Assert.AreEqual(1, dt.AddDays(1).Year);
        }

        [Test]
        public void LongConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000);
            Assert.AreEqual(1, dt.Year);

            var dt1 = new DateTime(0);
            AssertDate(dt, 1, 1, 1);

            var dt2 = new DateTime(1000000000000000000);
            AssertDate(dt2, 3169, 11, 16);
        }

        [Test]
        public void StringConstructorWorks()
        {
            var dt = new DateTime("Aug 12, 2012");
            AssertDate(dt, 2012, 8, 12);
        }

        [Test]
        public void YMDConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            AssertDate(dt, 2011, 7, 12);
        }

        [Test]
        public void YMDHConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            AssertDate(dt, 2011, 7, 12, 13);
        }

        [Test]
        public void YMDHNConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            AssertDate(dt, 2011, 7, 12, 13, 42);
        }

        [Test]
        public void YMDHNSConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56);
            AssertDate(dt, 2011, 7, 12, 13, 42, 56);
        }

        [Test]
        public void YMDHNSUConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            AssertDate(dt, 2011, 7, 12, 13, 42, 56, 345);
        }

        [Test]
        public void MinWorks()
        {
            var dt = DateTime.MinValue;
            AssertDate(dt, 1, 1, 1);
        }

        [Test]
        public void MaxWorks()
        {
            var dt = DateTime.MaxValue;
            AssertDate(dt, 9999, 12, 31);
        }

        [Test]
        public void NowWorks()
        {
            var dt = DateTime.Now;
            var year = dt.GetFullYear();
            Assert.True(year > 2016, year + " > 2016");
        }

        [Test]
        public void UtcNowWorks()
        {
            var utc= DateTime.UtcNow;
            var local = DateTime.Now;
            Assert.True(
                Math.Abs(
                    (new DateTime(local.GetUtcFullYear(), local.GetUtcMonth(), local.GetUtcDate(), local.GetUtcHours(), local.GetUtcMinutes(), local.GetUtcSeconds(), local.GetUtcMilliseconds())
                    - utc).TotalMinutes
                ) < 1000);
        }

        [Test]
        public void ToUniversalWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var UTC = dt.ToUniversalTime();
            Assert.AreEqual(UTC.Year, dt.GetUtcFullYear());
            Assert.AreEqual(UTC.Month, dt.GetUtcMonth());
            Assert.AreEqual(UTC.Day, dt.GetUtcDate());
            Assert.AreEqual(UTC.Hour, dt.GetUtcHours());
            Assert.AreEqual(UTC.Minute, dt.GetUtcMinutes());
            Assert.AreEqual(UTC.Second, dt.GetUtcSeconds());
            Assert.AreEqual(UTC.Millisecond, dt.GetUtcMilliseconds());
        }

        [Test]
        public void ToLocalWorks()
        {
            var UTC = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var dt = UTC.ToLocalTime();
            Assert.AreEqual(UTC.Year, dt.GetUtcFullYear());
            Assert.AreEqual(UTC.Month, dt.GetUtcMonth());
            Assert.AreEqual(UTC.Day, dt.GetUtcDate());
            Assert.AreEqual(UTC.Hour, dt.GetUtcHours());
            Assert.AreEqual(UTC.Minute, dt.GetUtcMinutes());
            Assert.AreEqual(UTC.Second, dt.GetUtcSeconds());
            Assert.AreEqual(UTC.Millisecond, dt.GetUtcMilliseconds());
        }

        [Test]
        public void TodayWorks()
        {
            var dt = DateTime.Today;
            Assert.True(dt.Year > 2011);
            Assert.AreEqual(0, dt.Hour);
            Assert.AreEqual(0, dt.Minute);
            Assert.AreEqual(0, dt.Second);
            Assert.AreEqual(0, dt.Millisecond);
        }

        [Test]
        public void FormatWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual("2011-07-12", dt.Format("yyyy-MM-dd"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual("2011-07-12", dt.ToString("yyyy-MM-dd"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual("2011-07-12", dt.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual(dt.ToString("yyyy-MM-dd"), "2011-07-12");
            Assert.AreEqual(((IFormattable)dt).ToString("yyyy-MM-dd", CultureInfo.CurrentCulture), "2011-07-12");
        }

        // Not C# API
        [Test]
        public void LocaleFormatWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual("2011-07-12", dt.Format("yyyy-MM-dd"));
        }

        [Test]
        public void GetFullYearWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.Year);
        }

        [Test]
        public void GetMonthWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(7, dt.Month);
        }

        [Test]
        public void GetDateWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(12, dt.Day);
        }

        [Test]
        public void GetHoursWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(13, dt.Hour);
        }

        [Test]
        public void GetMinutesWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(42, dt.Minute);
        }

        [Test]
        public void GetSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(56, dt.Second);
        }

        [Test]
        public void GetMillisecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(345, dt.Millisecond);
        }

        [Test]
        public void GetDayWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2, dt.DayOfWeek);
        }

        [Test]
        public void GetTimeWorks()
        {
            var dt = new DateTime(DateTime.Utc(1000, 1, 2));
            Assert.AreEqual((-30610137600000).ToString(), dt.GetTime().ToString());
        }

        [Test]
        public void ValueOfWorks()
        {
            var dt = new DateTime(DateTime.Utc(1000, 1, 2));
            Assert.AreEqual((-30610137600000).ToString(), dt.ValueOf().ToString());
        }

        [Test]
        public void TicksWorks()
        {
            var dt = new DateTime(1000, 1, 2);
            Assert.AreEqual(315254592000000000.ToString(), dt.Ticks.ToString());
        }

        // Not C# API
        //[Test]
        //public void GetTimezoneOffsetWorks()
        //{
        //    var zdt = new DateTime(1000, 1, 1);
        //    //Script.Write("zdt.setFullYear(1);");
        //    var dt = new DateTime(0);
        //    // UTC +3
        //    Assert.AreEqual((-180).ToString(), dt.GetTimezoneOffset().ToString());

        //    //var off = (long)(zdt.ValueOf());
        //    //Assert.AreEqual((off / 60000).ToString(), dt.GetTimezoneOffset().ToString());
        //}

        [Test]
        public void GetUTCFullYearWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(2011, dt.GetUtcFullYear());
        }

        [Test]
        public void GetUtcMonthWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(7, dt.GetUtcMonth());
        }

        [Test]
        public void GetUTCDateWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(12, dt.GetUtcDate());
        }

        [Test]
        public void GetUTCHoursWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(13, dt.GetUtcHours());
        }

        [Test]
        public void GetUTCMinutesWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(42, dt.GetUtcMinutes());
        }

        [Test]
        public void GetUTCSecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(56, dt.GetUtcSeconds());
        }

        [Test]
        public void GetUTCMillisecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(345, dt.GetUtcMilliseconds());
        }

        [Test]
        public void GetUTCDayWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(2, dt.GetUtcDay());
        }

        [Test]
        public void ParseWorks()
        {
            var dt = DateTime.Parse("Aug 12, 2012");
            AssertDate(dt, 2012, 8, 12);
        }

        [Test]
        public void ParseExactWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM");
            AssertDate(dt, 2012, 8, 12);
        }

        [Test]
        public void ParseExactReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM"); });
        }

        [Test]
        public void ParseExactWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
            AssertDate(dt, 2012, 8, 12);
        }

        [Test]
        public void ParseExactWithCultureReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", CultureInfo.InvariantCulture); });
        }

        [Test]
        public void ParseExactUTCWorks()
        {
            //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM");
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", true);
            Assert.AreEqual(2012, dt.GetUtcFullYear());
            Assert.AreEqual(8, dt.GetUtcMonth());
            Assert.AreEqual(12, dt.GetUtcDate());
        }

        [Test]
        public void ParseExactUtcReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", true); });
        }

        [Test]
        public void ParseExactUTCWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture, true);
            //var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
            Assert.AreEqual(2012, dt.GetUtcFullYear());
            Assert.AreEqual(8, dt.GetUtcMonth());
            Assert.AreEqual(12, dt.GetUtcDate());
        }

        [Test]
        public void ParseExactUtcWithCultureReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", CultureInfo.InvariantCulture, true); });
        }

        [Test]
        public void ToDateStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            var s = dt.ToDateString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        }

        [Test]
        public void ToTimeStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            var s = dt.ToTimeString();
            Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        }

        [Test]
        public void ToUTCStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            var s = dt.ToUtcString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") >= 0);
        }

        [Test]
        public void ToLocaleDateStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            var s = dt.ToLocaleDateString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        }

        [Test]
        public void ToLocaleTimeStringWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            var s = dt.ToLocaleTimeString();
            Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        }

        private void AssertDateUTC(DateTime dt, int year, int month, int day, int hours, int minutes, int seconds, int milliseconds)
        {
            Assert.AreEqual(year, dt.GetUtcFullYear());
            Assert.AreEqual(month, dt.GetUtcMonth());
            Assert.AreEqual(day, dt.GetUtcDate());
            Assert.AreEqual(hours, dt.GetUtcHours());
            Assert.AreEqual(minutes, dt.GetUtcMinutes());
            Assert.AreEqual(seconds, dt.GetUtcSeconds());
            Assert.AreEqual(milliseconds, dt.GetUtcMilliseconds());
        }

        // Not C# API
        //[Test]
        //public void FromUtcYMDWorks()
        //{
        //    AssertDateUtc(DateTime.FromUtc(2011, 7, 12), 2011, 7, 12, 0, 0, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void FromUtcYMDHWorks()
        //{
        //    AssertDateUtc(DateTime.FromUtc(2011, 7, 12, 13), 2011, 7, 12, 13, 0, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void FromUtcYMDHNWorks()
        //{
        //    AssertDateUtc(DateTime.FromUtc(2011, 7, 12, 13, 42), 2011, 7, 12, 13, 42, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void FromUtcYMDHNSWorks()
        //{
        //    AssertDateUtc(DateTime.FromUtc(2011, 7, 12, 13, 42, 56), 2011, 7, 12, 13, 42, 56, 0);
        //}

        // Not C# API
        //[Test]
        //public void FromUtcYMDHNSUWorks()
        //{
        //    AssertDateUtc(DateTime.FromUtc(2011, 7, 12, 13, 42, 56, 345), 2011, 7, 12, 13, 42, 56, 345);
        //}

        [Test]
        public void UtcYMDWorks()
        {
            AssertDateUTC(new DateTime(DateTime.Utc(2011, 7, 12)), 2011, 7, 12, 0, 0, 0, 0);
        }

        [Test]
        public void UtcYMDHWorks()
        {
            AssertDateUTC(new DateTime(DateTime.Utc(2011, 7, 12, 13)), 2011, 7, 12, 13, 0, 0, 0);
        }

        [Test]
        public void UtcYMDHNWorks()
        {
            AssertDateUTC(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42)), 2011, 7, 12, 13, 42, 0, 0);
        }

        [Test]
        public void UtcYMDHNSWorks()
        {
            AssertDateUTC(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56)), 2011, 7, 12, 13, 42, 56, 0);
        }

        [Test]
        public void UtcYMDHNSUWorks()
        {
            AssertDateUTC(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345)), 2011, 7, 12, 13, 42, 56, 345);
        }
        [Test]
        public void SubtractingDatesWorks()
        {
            TimeSpan ts = new DateTime(2011, 7, 12) - new DateTime(2011, 7, 11);
            Assert.AreEqual(1440 * 60 * 1000, ts.TotalMilliseconds);
        }

        [Test]
        public void SubtractMethodReturningTimeSpanWorks()
        {
            Assert.AreDeepEqual(new TimeSpan(1, 0, 0, 0), new DateTime(2011, 6, 12).Subtract(new DateTime(2011, 6, 11)));
            Assert.AreDeepEqual(new TimeSpan(1, 2, 0, 0), new DateTime(2011, 6, 12, 15, 0, 0).Subtract(new DateTime(2011, 6, 11, 13, 0, 0)));
        }

        // Not C# API
        //[Test]
        //public void AreEqualWorks()
        //{
        //    Assert.True(DateTime.AreEqual(new DateTime(2011, 7, 12), new DateTime(2011, 7, 12)));
        //    Assert.False(DateTime.AreEqual(new DateTime(2011, 7, 12), new DateTime(2011, 7, 13)));
        //    Assert.AreStrictEqual(DateTime.AreEqual(new DateTime(2011, 7, 12), (DateTime?)null), false);
        //    Assert.AreStrictEqual(DateTime.AreEqual((DateTime?)null, new DateTime(2011, 7, 12)), false);
        //    Assert.AreStrictEqual(DateTime.AreEqual((DateTime?)null, (DateTime?)null), true);
        //}

        // Not C# API
        //[Test]
        //public void AreNotEqualWorks()
        //{
        //    Assert.False(DateTime.AreNotEqual(new DateTime(2011, 7, 12), new DateTime(2011, 7, 12)));
        //    Assert.True(DateTime.AreNotEqual(new DateTime(2011, 7, 12), new DateTime(2011, 7, 13)));
        //    Assert.AreStrictEqual(DateTime.AreNotEqual(new DateTime(2011, 7, 12), (DateTime?)null), true);
        //    Assert.AreStrictEqual(DateTime.AreNotEqual((DateTime?)null, new DateTime(2011, 7, 12)), true);
        //    Assert.AreStrictEqual(DateTime.AreNotEqual((DateTime?)null, (DateTime?)null), false);
        //}

        [Test]
        public void DateEqualityWorks()
        {
            Assert.True(new DateTime(2011, 7, 12) == new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 12) == new DateTime(2011, 7, 13));

            // Removed because DateTime is non-nullable value type
            // After move of Date.cs class to Bridge.Html5 namespace,
            // these tests started failing. Possibly due to moving explicit operator.
            // Related to Issue #2366
            // Assert.AreStrictEqual(false, new DateTime(2011, 7, 12) == (DateTime)null);
            // Assert.AreStrictEqual(false, (DateTime)null == new DateTime(2011, 7, 12));
            // Assert.AreStrictEqual(true, (DateTime)null == (DateTime)null);
        }

        [Test]
        public void DateInequalityWorks()
        {
            Assert.False(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 13));

            // Removed because DateTime is non-nullable value type
            // After move of Date.cs class to Bridge.Html5 namespace,
            // these tests started failing. Possibly due to moving explicit operator.
            // Related to Issue #2366
            // Assert.AreStrictEqual(true, new DateTime(2011, 7, 12) != (DateTime)null);
            // Assert.AreStrictEqual(true, (DateTime)null != new DateTime(2011, 7, 12));
            // Assert.AreStrictEqual(false, (DateTime)null != (DateTime)null);
        }

        [Test]
        public void DateLessThanWorks()
        {
            Assert.True(new DateTime(2011, 7, 11) < new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 12) < new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 13) < new DateTime(2011, 7, 12));
        }

        [Test]
        public void DateLessEqualWorks()
        {
            Assert.True(new DateTime(2011, 7, 11) <= new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 12) <= new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 13) <= new DateTime(2011, 7, 12));
        }

        [Test]
        public void DateGreaterThanWorks()
        {
            Assert.False(new DateTime(2011, 7, 11) > new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 12) > new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 13) > new DateTime(2011, 7, 12));
        }

        [Test]
        public void DateGreaterEqualWorks()
        {
            Assert.False(new DateTime(2011, 7, 11) >= new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 12) >= new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 13) >= new DateTime(2011, 7, 12));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(new DateTime(0).GetHashCode(), new DateTime(0).GetHashCode());
            Assert.AreEqual(new DateTime(10000).GetHashCode(), new DateTime(10000).GetHashCode());
            Assert.AreNotEqual(new DateTime(10000).GetHashCode(), new DateTime(0).GetHashCode());
            Assert.True((long)new DateTime(3000, 1, 1).GetHashCode() < 0xffffffffL);
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(new DateTime(0).Equals((object)new DateTime(0)));
            Assert.False(new DateTime(10000).Equals((object)new DateTime(0)));
            Assert.False(new DateTime(0).Equals((object)new DateTime(10000)));
            Assert.True(new DateTime(10000).Equals((object)new DateTime(10000)));
        }

        [Test]
        public void IEquatableEqualsWorks_SPI_1608()
        {
            Assert.True(new DateTime(0).Equals(new DateTime(0)));
            Assert.False(new DateTime(10000).Equals(new DateTime(0)));
            Assert.False(new DateTime(0).Equals(new DateTime(10000)));
            Assert.True(new DateTime(10000).Equals(new DateTime(10000)));

            Assert.True(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(10000)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(10000)));
            Assert.True(((IEquatable<DateTime>)new DateTime(10000)).Equals(new DateTime(10000)));
        }

        [Test]
        public void StaticEqualsWorks()
        {
            Assert.True(DateTime.Equals(new DateTime(0), new DateTime(0)));
            Assert.False(DateTime.Equals(new DateTime(10000), new DateTime(0)));
            Assert.False(DateTime.Equals(new DateTime(0), new DateTime(10000)));
            Assert.True(DateTime.Equals(new DateTime(10000), new DateTime(10000)));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(new DateTime(0).CompareTo(new DateTime(0)) == 0);
            Assert.True(new DateTime(10000).CompareTo(new DateTime(0)) > 0);
            Assert.True(new DateTime(0).CompareTo(new DateTime(10000)) < 0);
        }

        [Test]
        public void StaticCompareWorks()
        {
            Assert.True(DateTime.Compare(new DateTime(0), new DateTime(0)) == 0);
            Assert.True(DateTime.Compare(new DateTime(10000), new DateTime(0)) > 0);
            Assert.True(DateTime.Compare(new DateTime(0), new DateTime(10000)) < 0);
        }

        [Test]
        public void IComparableCompareToWorks_SPI_1609()
        {
            // #1609
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(0)) == 0);
            Assert.True(((IComparable<DateTime>)new DateTime(10000)).CompareTo(new DateTime(0)) > 0);
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(10000)) < 0);
        }

        [Test]
        public void DatePropertyWorks()
        {
            var dt = new DateTime(2012, 8, 12, 13, 14, 15, 16);
            Assert.AreEqual(new DateTime(2012, 8, 12), dt.Date);
        }

        [Test]
        public void DayPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(12, dt.Day);
        }

        [Test]
        public void DayOfWeekPropertyWorks()
        {
            var dt = new DateTime(2011, 8, 12, 13, 42, 56, 345);
            Assert.AreEqual(DayOfWeek.Friday, dt.DayOfWeek);
        }

        [Test]
        public void DayOfYearPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(193, dt.DayOfYear);
        }

        [Test]
        public void HourPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(13, dt.Hour);
        }

        [Test]
        public void MillisecondPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(345, dt.Millisecond);
        }

        [Test]
        public void MinutePropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(42, dt.Minute);
        }

        [Test]
        public void MonthPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(7, dt.Month);
        }

        [Test]
        public void SecondPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(56, dt.Second);
        }

        [Test]
        public void YearPropertyWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.Year);
        }

        [Test]
        public void AddDaysWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddDays(2.5);
            Assert.AreEqual(new DateTime(2011, 7, 14, 14, 42, 56, 345), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddHoursWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddHours(2.5);
            Assert.AreEqual(new DateTime(2011, 7, 12, 5, 12, 56, 345), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddMillisecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddMilliseconds(250.4);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 595), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddMinutesWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddMinutes(2.5);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 45, 26, 345), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddMonthsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddMonths(6);
            Assert.AreEqual(new DateTime(2012, 1, 12, 2, 42, 56, 345), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test(Name = "#2542 - {0}")]
        public void AddMonthsEdgeCasesWorks()
        {
            var dt = new DateTime(2017, 3, 31, 16, 10, 10);
            Assert.AreEqual(new DateTime(2017, 3, 31, 16, 10, 10), dt);

            var actual = dt.AddMonths(1);
            Assert.AreEqual(new DateTime(2017, 4, 30, 16, 10, 10), actual);
            actual = dt.AddMonths(2);
            Assert.AreEqual(new DateTime(2017, 5, 31, 16, 10, 10), actual);
            actual = dt.AddMonths(3);
            Assert.AreEqual(new DateTime(2017, 6, 30, 16, 10, 10), actual);
            actual = dt.AddMonths(12);
            Assert.AreEqual(new DateTime(2018, 3, 31, 16, 10, 10), actual);

            dt = new DateTime(2020, 2, 29, 16, 10, 10);
            Assert.AreEqual(new DateTime(2020, 2, 29, 16, 10, 10), dt);

            actual = dt.AddMonths(1);
            Assert.AreEqual(new DateTime(2020, 3, 29, 16, 10, 10), actual);
            actual = dt.AddMonths(2);
            Assert.AreEqual(new DateTime(2020, 4, 29, 16, 10, 10), actual);
            actual = dt.AddMonths(12);
            Assert.AreEqual(new DateTime(2021, 2, 28, 16, 10, 10), actual);
        }

        [Test]
        public void AddSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddSeconds(2.5);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 58, 845), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddYearsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddYears(3);
            Assert.AreEqual(new DateTime(2014, 7, 12, 2, 42, 56, 345), actual);
            Assert.AreEqual(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void DaysInMonthWorks()
        {
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 1));
            Assert.AreEqual(28, DateTime.DaysInMonth(2013, 2));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 3));
            Assert.AreEqual(30, DateTime.DaysInMonth(2013, 4));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 5));
            Assert.AreEqual(30, DateTime.DaysInMonth(2013, 6));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 7));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 8));
            Assert.AreEqual(30, DateTime.DaysInMonth(2013, 9));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 10));
            Assert.AreEqual(30, DateTime.DaysInMonth(2013, 11));
            Assert.AreEqual(31, DateTime.DaysInMonth(2013, 12));
            Assert.AreEqual(28, DateTime.DaysInMonth(2003, 2));
            Assert.AreEqual(29, DateTime.DaysInMonth(2004, 2));
        }

        [Test]
        public void IsLeapYearWorks()
        {
            Assert.True(DateTime.IsLeapYear(2004));
            Assert.True(DateTime.IsLeapYear(2000));
            Assert.False(DateTime.IsLeapYear(2003));
        }

        [Test(ExpectedCount = 1)]
        public static void DateTimes()
        {
            // TEST
            // [#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = DateTime.Parse(str);
            var bridgeDate1 = new DateTime(str);

            Assert.AreDeepEqual(bridgeDate1, bridgeDate, "[#83] C# bridgeDate = bridgeDate1");

            // TEST
            // [#83] by JavaScript code. This is to check the same issue as above and just to check another way of calling QUnit from JavaScript
            //Script.Write<dynamic>("var str = \"2015-03-24T10:48:09.1500225+03:00\";");
            //Script.Write<dynamic>("var bridgeDate2 = Bridge.Date.parse(str);");
            //Script.Write<dynamic>("var jsDate = new Date(Date.parse(str));");
            //Script.Write<dynamic>("var format = \"yyyy-MM-dd hh:mm:ss\";");

            //Script.Write<dynamic>("assert.deepEqual(Bridge.Date.format(bridgeDate2, format), Bridge.Date.format(jsDate, format), \"[#83] js\");");
        }

        [Test(ExpectedCount = 11)]
        public void CreateUnixTimestampAndConvertBackToDateTime()
        {
            var now = DateTime.Now;
            var unixNow = (long)now.Subtract(new DateTime(1970, 1, 1)).Ticks;
            var parsedUnixNow = new DateTime(1970, 1, 1).AddTicks(unixNow);

            Assert.True(now.Year == parsedUnixNow.Year, "[#1901] Year is the same");
            Assert.True(now.Month == parsedUnixNow.Month, "[#1901] Month is the same");
            Assert.True(now.Day == parsedUnixNow.Day, "[#1901] Day is the same");
            Assert.True(now.Hour == parsedUnixNow.Hour, "[#1901] Hour is the same");
            Assert.True(now.Minute == parsedUnixNow.Minute, "[#1901] Minute is the same");
            Assert.True(now.Second == parsedUnixNow.Second, "[#1901] Second is the same");
            Assert.True(now.Millisecond == parsedUnixNow.Millisecond, "[#1901] Millisecond is the same");
            Assert.True(now.Ticks == parsedUnixNow.Ticks, "[#1901] Ticks is the same");

            Assert.True(now == parsedUnixNow, "[#1901] DateTime == is true");
            Assert.True(now.Equals(parsedUnixNow), "[#1901] DateTime .Equals is true");

            // Compare the DateTimes as strings
            var result1 = now.ToString();
            var result2 = parsedUnixNow.ToString();

            Assert.True(result1 == result2, "[#1901] DateTime to Timestamp back to DateTime is different");
        }

        [Test(Name = "#2149 - {0}")]
        public void ToShortDateStringWorks()
        {
            DateTime date = new DateTime(2009, 6, 1, 8, 42, 50);
            var r = date.ToShortDateString();

            Assert.AreEqual("06/01/2009", r, "Invariant culture");

            var defaultCulture = CultureInfo.CurrentCulture;

            try
            {
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");

                date = new DateTime(2009, 6, 1, 8, 42, 50);
                r = date.ToShortDateString();

                Assert.AreEqual("01.06.2009", r, "ru-RU culture");
            }
            finally
            {
                CultureInfo.CurrentCulture = defaultCulture;
            }
        }

        [Test(Name = "#2149 - {0}")]
        public void ToShortTimeStringWorks()
        {
            DateTime date = new DateTime(2001, 5, 16, 3, 2, 15);
            var r = date.ToShortTimeString();

            Assert.AreEqual("03:02", r, "Invariant culture");

            var defaultCulture = CultureInfo.CurrentCulture;

            try
            {
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");

                r = date.ToShortTimeString();

                Assert.AreEqual("3:02", r, "ru-RU culture");
            }
            finally
            {
                CultureInfo.CurrentCulture = defaultCulture;
            }
        }
    }
}