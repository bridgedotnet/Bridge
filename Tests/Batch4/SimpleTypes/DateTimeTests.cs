using Bridge.Test;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "DateTimeTests - {0}")]
    public class DateTimeTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1607_1608_1609()
        {
            Assert.AreEqual("Date", typeof(DateTime).FullName);
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

        [Test]
        public void DefaultConstructorWorks_SPI_1606()
        {
            var dt = new DateTime();
            // #1606
            Assert.AreEqual(1, dt.Year);
        }

        [Test]
        public void DefaultValueWorks_SPI_1606()
        {
            var dt = default(DateTime);
            // #1606
            Assert.AreEqual(1, dt.Year);
        }

        [Test]
        public void CreatingInstanceReturnsDateWithZeroValue_SPI_1606()
        {
            var dt = Activator.CreateInstance<DateTime>();
            // #1606
            Assert.AreEqual(1, dt.Year);
        }

        [Test]
        public void MillisecondSinceEpochConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000);
            Assert.AreEqual(1971, dt.GetFullYear());
        }

        [Test]
        public void StringConstructorWorks()
        {
            var dt = new DateTime("Aug 12, 2012");
            Assert.AreEqual(2012, dt.GetFullYear());
            Assert.AreEqual(8, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void YMDConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void YMDHConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
        }

        [Test]
        public void YMDHNConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
            Assert.AreEqual(42, dt.GetMinutes());
        }

        [Test]
        public void YMDHNSConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
            Assert.AreEqual(42, dt.GetMinutes());
            Assert.AreEqual(56, dt.GetSeconds());
        }

        [Test]
        public void YMDHNSUConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
            Assert.AreEqual(42, dt.GetMinutes());
            Assert.AreEqual(56, dt.GetSeconds());
            Assert.AreEqual(345, dt.GetMilliseconds());
        }

        [Test]
        public void NowWorks()
        {
            var dt = DateTime.Now;
            Assert.True(dt.GetFullYear() > 2011);
        }

        [Test]
        public void UtcNowWorks()
        {
            var utc = DateTime.UtcNow;
            var local = DateTime.Now;
            var date = new DateTime(local.GetUtcFullYear(), local.GetUtcMonth(), local.GetUtcDate(), local.GetUtcHours(), local.GetUtcMinutes(), local.GetUtcSeconds(), local.GetUtcMilliseconds());
            var diff = date - utc;
            Assert.True(Math.Abs(diff.Seconds) < 1000);
        }

        [Test]
        public void ToUniversalWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var utc = dt.ToUniversalTime();
            Assert.AreEqual(utc.Year, dt.GetUtcFullYear());
            Assert.AreEqual(utc.Month, dt.GetUtcMonth());
            Assert.AreEqual(utc.Day, dt.GetUtcDate());
            Assert.AreEqual(utc.Hour, dt.GetUtcHours());
            Assert.AreEqual(utc.Minute, dt.GetUtcMinutes());
            Assert.AreEqual(utc.Second, dt.GetUtcSeconds());
            Assert.AreEqual(utc.Millisecond, dt.GetUtcMilliseconds());
        }

        [Test]
        public void ToLocalWorks()
        {
            var utc = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var dt = utc.ToLocalTime();
            Assert.AreEqual(utc.Year, dt.GetUtcFullYear());
            Assert.AreEqual(utc.Month, dt.GetUtcMonth());
            Assert.AreEqual(utc.Day, dt.GetUtcDate());
            Assert.AreEqual(utc.Hour, dt.GetUtcHours());
            Assert.AreEqual(utc.Minute, dt.GetUtcMinutes());
            Assert.AreEqual(utc.Second, dt.GetUtcSeconds());
            Assert.AreEqual(utc.Millisecond, dt.GetUtcMilliseconds());
        }

        [Test]
        public void TodayWorks()
        {
            var dt = DateTime.Today;
            Assert.True(dt.GetFullYear() > 2011);
            Assert.AreEqual(0, dt.GetHours());
            Assert.AreEqual(0, dt.GetMinutes());
            Assert.AreEqual(0, dt.GetSeconds());
            Assert.AreEqual(0, dt.GetMilliseconds());
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
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual("2011-07-12", ((IFormattable)dt).Format("yyyy-MM-dd", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13);
        //    Assert.AreEqual(dt.LocaleFormat("yyyy-MM-dd"), "2011-07-12");
        //}

        [Test]
        public void GetFullYearWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.GetFullYear());
        }

        [Test]
        public void GetMonthWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(7, dt.GetMonth());
        }

        [Test]
        public void GetDateWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void GetHoursWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(13, dt.GetHours());
        }

        [Test]
        public void GetMinutesWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(42, dt.GetMinutes());
        }

        [Test]
        public void GetSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(56, dt.GetSeconds());
        }

        [Test]
        public void GetMillisecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(345, dt.GetMilliseconds());
        }

        [Test]
        public void GetDayWorks()
        {
            var dt = new DateTime(2011, 8, 12, 13, 42, 56, 345);
            Assert.AreEqual(5, dt.GetDay());
        }

        [Test]
        public void GetTimeWorks()
        {
            var dt = new DateTime(DateTime.Utc(1970, 1, 2));
            Assert.AreEqual(1440L * 60 * 1000, dt.GetTime());
        }

        [Test]
        public void ValueOfWorks()
        {
            var dt = new DateTime(DateTime.Utc(1970, 1, 2));
            Assert.AreEqual(1440 * 60 * 1000, dt.ValueOf());
        }

        // Not C# API
        //[Test]
        //public void GetTimezoneOffsetWorks()
        //{
        //    var dt = new DateTime(0);
        //    Assert.AreEqual(dt.GetTimezoneOffset(), new DateTime(1970, 1, 1).ValueOf() / 60000);
        //}

        [Test]
        public void GetUtcFullYearWorks()
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
        public void GetUtcDateWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(12, dt.GetUtcDate());
        }

        [Test]
        public void GetUtcHoursWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(13, dt.GetUtcHours());
        }

        [Test]
        public void GetUtcMinutesWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(42, dt.GetUtcMinutes());
        }

        [Test]
        public void GetUtcSecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(56, dt.GetUtcSeconds());
        }

        [Test]
        public void GetUtcMillisecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(345, dt.GetUtcMilliseconds());
        }

        [Test]
        public void GetUtcDayWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 8, 12, 13, 42, 56, 345));
            Assert.AreEqual(5, dt.GetUtcDay());
        }

        [Test]
        public void ParseWorks()
        {
            var dt = DateTime.Parse("Aug 12, 2012");
            Assert.AreEqual(2012, dt.GetFullYear());
            Assert.AreEqual(8, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void ParseExactWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM");
            // Not C# API
            //Assert.True(dt.HasValue);
            Assert.AreEqual(2012, dt.GetFullYear());
            Assert.AreEqual(8, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
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
            // Not C# API
            //Assert.True(dt.HasValue);
            Assert.AreEqual(2012, dt.GetFullYear());
            Assert.AreEqual(8, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void ParseExactWithCultureReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", CultureInfo.InvariantCulture); });
        }

        [Test]
        public void ParseExactUtcWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", true);
            // Not C# API
            //Assert.True(dt.HasValue);
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
        public void ParseExactUtcWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture, true);
            // Not C# API
            //Assert.True(dt.HasValue);
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
        public void ToUtcStringWorks()
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

        private void AssertDateUtc(DateTime dt, int year, int month, int day, int hours, int minutes, int seconds, int milliseconds)
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
            AssertDateUtc(new DateTime(DateTime.Utc(2011, 7, 12)), 2011, 7, 12, 0, 0, 0, 0);
        }

        [Test]
        public void UtcYMDHWorks()
        {
            AssertDateUtc(new DateTime(DateTime.Utc(2011, 7, 12, 13)), 2011, 7, 12, 13, 0, 0, 0);
        }

        [Test]
        public void UtcYMDHNWorks()
        {
            AssertDateUtc(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42)), 2011, 7, 12, 13, 42, 0, 0);
        }

        [Test]
        public void UtcYMDHNSWorks()
        {
            AssertDateUtc(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56)), 2011, 7, 12, 13, 42, 56, 0);
        }

        [Test]
        public void UtcYMDHNSUWorks()
        {
            AssertDateUtc(new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345)), 2011, 7, 12, 13, 42, 56, 345);
        }

        [Test]
        public void SubtractingDatesWorks()
        {
            Assert.AreEqual(1440 * 60 * 1000, (new DateTime(2011, 7, 12) - new DateTime(2011, 7, 11)).TotalMilliseconds);
        }

        [Test]
        public void SubtractMethodReturningTimeSpanWorks()
        {
            Assert.AreEqual(new TimeSpan(1, 0, 0, 0), new DateTime(2011, 7, 12).Subtract(new DateTime(2011, 7, 11)));
            Assert.AreEqual(new TimeSpan(1, 2, 0, 0), new DateTime(2011, 7, 12, 15, 0, 0).Subtract(new DateTime(2011, 7, 11, 13, 0, 0)));
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
            Assert.AreStrictEqual(false, new DateTime(2011, 7, 12) == (DateTime?)null);
            Assert.AreStrictEqual(false, (DateTime?)null == new DateTime(2011, 7, 12));
            Assert.AreStrictEqual(true, (DateTime?)null == (DateTime?)null);
        }

        [Test]
        public void DateInequalityWorks()
        {
            Assert.False(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 13));
            Assert.AreStrictEqual(true, new DateTime(2011, 7, 12) != (DateTime?)null);
            Assert.AreStrictEqual(true, (DateTime?)null != new DateTime(2011, 7, 12));
            Assert.AreStrictEqual(false, (DateTime?)null != (DateTime?)null);
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
        public void ConvertingDateToMutableDateReturnsANewButEqualInstance()
        {
            var dt = new DateTime(2011, 7, 12);
            Date mdt = (Date)dt;
            Assert.False((object)dt == (object)mdt);
            Assert.AreEqual(2011, mdt.GetFullYear());
            Assert.AreEqual(6, mdt.GetMonth());
            Assert.AreEqual(12, mdt.GetDate());
        }

        [Test]
        public void ConvertingMutableDateToDateReturnsANewButEqualInstance()
        {
            var mdt = new Date(2011, 7, 12);
            DateTime dt = (DateTime)mdt;
            Assert.False((object)dt == (object)mdt);
            Assert.AreEqual(2011, mdt.GetFullYear());
            Assert.AreEqual(7, mdt.GetMonth());
            Assert.AreEqual(12, mdt.GetDate());
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(new DateTime(0).GetHashCode(), new DateTime(0).GetHashCode());
            Assert.AreEqual(new DateTime(1).GetHashCode(), new DateTime(1).GetHashCode());
            Assert.AreNotEqual(new DateTime(1).GetHashCode(), new DateTime(0).GetHashCode());
            Assert.True((long)new DateTime(3000, 1, 1).GetHashCode() < 0xffffffffL);
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(new DateTime(0).Equals((object)new DateTime(0)));
            Assert.False(new DateTime(1).Equals((object)new DateTime(0)));
            Assert.False(new DateTime(0).Equals((object)new DateTime(1)));
            Assert.True(new DateTime(1).Equals((object)new DateTime(1)));
        }

        [Test]
        public void IEquatableEqualsWorks_SPI_1608()
        {
            Assert.True(new DateTime(0).Equals(new DateTime(0)));
            Assert.False(new DateTime(1).Equals(new DateTime(0)));
            Assert.False(new DateTime(0).Equals(new DateTime(1)));
            Assert.True(new DateTime(1).Equals(new DateTime(1)));

            Assert.True(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(1)));
            Assert.True(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(1)));
        }

        [Test]
        public void StaticEqualsWorks()
        {
            Assert.True(DateTime.Equals(new DateTime(0), new DateTime(0)));
            Assert.False(DateTime.Equals(new DateTime(1), new DateTime(0)));
            Assert.False(DateTime.Equals(new DateTime(0), new DateTime(1)));
            Assert.True(DateTime.Equals(new DateTime(1), new DateTime(1)));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(new DateTime(0).CompareTo(new DateTime(0)) == 0);
            Assert.True(new DateTime(1).CompareTo(new DateTime(0)) > 0);
            Assert.True(new DateTime(0).CompareTo(new DateTime(1)) < 0);
        }

        [Test]
        public void StaticCompareWorks()
        {
            Assert.True(DateTime.Compare(new DateTime(0), new DateTime(0)) == 0);
            Assert.True(DateTime.Compare(new DateTime(1), new DateTime(0)) > 0);
            Assert.True(DateTime.Compare(new DateTime(0), new DateTime(1)) < 0);
        }

        [Test]
        public void IComparableCompareToWorks_SPI_1609()
        {
            // #1609
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(0)) == 0);
            Assert.True(((IComparable<DateTime>)new DateTime(1)).CompareTo(new DateTime(0)) > 0);
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(1)) < 0);
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
    }
}
