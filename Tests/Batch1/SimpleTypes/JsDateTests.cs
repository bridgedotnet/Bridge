using Bridge.Html5;
using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_HTML5)]
    [TestFixture(TestNameFormat = "Date - {0}")]
    public class DateTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1608_1609()
        {
            Assert.AreEqual("Date", typeof(Date).FullName);
            //Assert.True(typeof(Date).IsClass);
            Assert.True(typeof(IComparable<Date>).IsAssignableFrom(typeof(Date)));
            Assert.True(typeof(IEquatable<Date>).IsAssignableFrom(typeof(Date)));
            object o = new Date();
            Assert.True(o is Date);
            Assert.True(o is IComparable<Date>);
            Assert.True(o is IEquatable<Date>);

            var interfaces = typeof(Date).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<Date>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<Date>)));
        }

        [Test]
        public void DefaultConstructorReturnsTodaysDate()
        {
            var dt = new Date();
            Assert.True(dt.GetFullYear() > 2011);
        }

        [Test]
        public void CreatingInstanceReturnsTodaysDate_SPI_1604()
        {
            var fullYear = Activator.CreateInstance<Date>().GetFullYear();
            Assert.True(fullYear > 2011, fullYear + " > 2011");
        }

        [Test]
        public void MillisecondSinceEpochConstructorWorks()
        {
            var dt = new Date(1440d * 60 * 500 * 1000);
            Assert.AreEqual(1971, dt.GetFullYear());
        }

        [Test]
        public void StringConstructorWorks()
        {
            var dt = new Date("Aug 12, 2012");
            Assert.AreEqual(2012, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void YMDConstructorWorks()
        {
            var dt = new Date(2011, 7, 12);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void YMDHConstructorWorks()
        {
            var dt = new Date(2011, 7, 12, 13);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
        }

        [Test]
        public void YMDHNConstructorWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
            Assert.AreEqual(42, dt.GetMinutes());
        }

        [Test]
        public void YMDHNSConstructorWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56);
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
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(12, dt.GetDate());
            Assert.AreEqual(13, dt.GetHours());
            Assert.AreEqual(42, dt.GetMinutes());
            Assert.AreEqual(56, dt.GetSeconds());
            Assert.AreEqual(345, dt.GetMilliseconds());
        }

        // #SPI
        [Test]
        public void NowWorks_SPI_1624()
        {
            // #1624
            var d1 = new Date(Date.Now());
            var d2 = DateTime.Today;

            Assert.AreEqual(d1.GetFullYear(), d2.Year);
        }

        // Not JS API
        //[Test]
        //public void UtcNowWorks()
        //{
        //    var utc = Date.UtcNow;
        //    var local = Date.Now;
        //    Assert.True(Math.Abs(new Date(local.GetUTCFullYear(), local.GetUTCMonth(), local.GetUTCDate(), local.GetUTCHours(), local.GetUTCMinutes(), local.GetUTCSeconds(), local.GetUTCMilliseconds()) - utc) < 1000);
        //}

        // Not JS API
        //[Test]
        //public void ToUniversalWorks()
        //{
        //    var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
        //    var utc = dt.ToUniversalTime();
        //    Assert.AreEqual(dt.GetUTCFullYear(), utc.GetFullYear());
        //    Assert.AreEqual(dt.GetUTCMonth(), utc.GetMonth());
        //    Assert.AreEqual(dt.GetUTCDate(), utc.GetDate());
        //    Assert.AreEqual(dt.GetUTCHours(), utc.GetHours());
        //    Assert.AreEqual(dt.GetUTCMinutes(), utc.GetMinutes());
        //    Assert.AreEqual(dt.GetUTCSeconds(), utc.GetSeconds());
        //    Assert.AreEqual(dt.GetUTCMilliseconds(), utc.GetMilliseconds());
        //}

        // Not JS API
        //[Test]
        //public void ToLocalWorks()
        //{
        //    var utc = new Date(2011, 7, 12, 13, 42, 56, 345);
        //    var dt = utc.ToLocalTime();
        //    Assert.AreEqual(dt.GetUTCFullYear(), utc.GetFullYear());
        //    Assert.AreEqual(dt.GetUTCMonth(), utc.GetMonth());
        //    Assert.AreEqual(dt.GetUTCDate(), utc.GetDate());
        //    Assert.AreEqual(dt.GetUTCHours(), utc.GetHours());
        //    Assert.AreEqual(dt.GetUTCMinutes(), utc.GetMinutes());
        //    Assert.AreEqual(dt.GetUTCSeconds(), utc.GetSeconds());
        //    Assert.AreEqual(dt.GetUTCMilliseconds(), utc.GetMilliseconds());
        //}

        // Not JS API
        //[Test]
        //public void TodayWorks()
        //{
        //    var dt = Date.Today;
        //    Assert.True(dt.GetFullYear() > 2011);
        //    Assert.AreEqual(dt.GetHours(), 0);
        //    Assert.AreEqual(dt.GetMinutes(), 0);
        //    Assert.AreEqual(dt.GetSeconds(), 0);
        //    Assert.AreEqual(dt.GetMilliseconds(), 0);
        //}

        // Not JS API
        //[Test]
        //public void FormatWorks()
        //{
        //    var dt = new Date(2011, 7, 12, 13);
        //    Assert.AreEqual(dt.Format("yyyy-MM-dd"), "2011-08-12");
        //}

        // Not JS API
        //[Test]
        //public void ToStringWithFormatWorks()
        //{
        //    var dt = new Date(2011, 7, 12);
        //    Assert.AreEqual(dt.ToString("yyyy-MM-dd"), "2011-08-12");
        //}

        // Not JS API
        //[Test]
        //public void ToStringWithFormatAndProviderWorks()
        //{
        //    var dt = new Date(2011, 7, 12);
        //    Assert.AreEqual(dt.ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), "2011-08-12");
        //}

        // Not JS API
        //[Test]
        //public void IFormattableToStringWorks()
        //{
        //    var dt = new Date(2011, 7, 12);
        //    Assert.AreEqual(((IFormattable)dt).ToString("yyyy-MM-dd", CultureInfo.InvariantCulture), "2011-08-12");
        //}

        // Not JS API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    var dt = new Date(2011, 7, 12, 13);
        //    Assert.AreEqual(dt.Format("yyyy-MM-dd"), "2011-08-12");
        //}

        [Test]
        public void GetFullYearWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.GetFullYear());
        }

        [Test]
        public void GetMonthWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(7, dt.GetMonth());
        }

        [Test]
        public void GetDateWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void GetHoursWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(13, dt.GetHours());
        }

        [Test]
        public void GetMinutesWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(42, dt.GetMinutes());
        }

        [Test]
        public void GetSecondsWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(56, dt.GetSeconds());
        }

        [Test]
        public void GetMillisecondsWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(345, dt.GetMilliseconds());
        }

        [Test]
        public void GetDayWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(5, dt.GetDay());
        }

        [Test]
        public void GetTimeWorks()
        {
            var dt = new Date(1970, 0, 2);
            dt = AddTimezoneMinutesOffset(dt);
            Assert.AreEqual(1440 * 60 * 1000, dt.GetTime());
        }

        [Test]
        public void ValueOfWorks_SPI_1624()
        {
            var dt = new Date(1970, 0, 2);
            dt = AddTimezoneMinutesOffset(dt);
            Assert.AreEqual(1440 * 60 * 1000, dt.ValueOf());
        }

        [Test]
        public void GetTimezoneOffsetWorks()
        {
            var dt = new Date(0);
            Assert.AreEqual((double)(new Date(1970, 0, 1).ValueOf()) / 60000, dt.GetTimezoneOffset());
        }

        [Test]
        public void GetUtcFullYearWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(2011, dt.GetUTCFullYear());
        }

        [Test]
        public void GetUtcMonthWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(7, dt.GetUTCMonth());
        }

        [Test]
        public void GetUtcDateWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(12, dt.GetUTCDate());
        }

        [Test]
        public void GetUtcHoursWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            dt = AddTimezoneMinutesOffset(dt);
            Assert.AreEqual(13, dt.GetUTCHours());
        }

        [Test]
        public void GetUtcMinutesWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(42, dt.GetUTCMinutes());
        }

        [Test]
        public void GetUtcSecondsWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(56, dt.GetUTCSeconds());
        }

        [Test]
        public void GetUtcMillisecondsWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(345, dt.GetUTCMilliseconds());
        }

        [Test]
        public void GetUtcDayWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(5, dt.GetUTCDay());
        }

        // #SPI
        [Test]
        public void ParseWorks_SPI_1624()
        {
            // #1624
            var utc = Date.UTC(2017, 7, 12);
            var local = (new Date(2017, 7, 12)).ValueOf();
            var offset = utc - local;

            //var d1 = Date.Parse("Aug 12, 2012");
            //var d2 = Date.Parse("1970-01-01");
            //var d3 = Date.Parse("March 7, 2014");
            var d4 = Date.Parse("Wed, 09 Aug 1995 00:00:00 GMT");
            var d5 = Date.Parse("Thu, 01 Jan 1970 00:00:00 GMT-0400");

            // May fail depending on timezone and DST
            //Assert.AreEqual(1344729600000d - offset, d1);
            //Assert.AreEqual(0d, d2);
            //Assert.AreEqual(1394150400000d - offset, d3);
            Assert.AreEqual(807926400000d, d4);
            Assert.AreEqual(14400000d, d5);
        }

        [Test]
        public void ToLocaleDateStringIsWorking_1624()
        {
            var d1 = new Date(Date.UTC(2012, 11, 12, 3, 0, 0));

            // Tough to test because varies by timezone/location
            // Just testing that a string is generated
            Assert.True(!string.IsNullOrEmpty(d1.ToLocaleDateString()));

            //var d2 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

            //// formats below assume the local time zone of the locale;
            //// America/Los_Angeles for the US

            //// US English uses month-day-year order
            //Assert.AreEqual("12/19/2012", d2.ToLocaleDateString("en-US")); // "12/19/2012"

            //// British English uses day-month-year order
            //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString("en-GB")); // "20/12/2012"

            //// Korean uses year-month-day order
            //Assert.AreEqual("2012. 12. 20.", d2.ToLocaleDateString("ko-KR")); // "2012. 12. 20."

            //// for Japanese, applications may want to use the Japanese calendar,
            //// where 2012 was the year 24 of the Heisei era
            //Assert.AreEqual("24/12/20", d2.ToLocaleDateString("ja-JP-u-ca-japanese")); // "24/12/20"

            //// when requesting a language that may not be supported, such as
            //// Balinese, include a fallback language, in this case Indonesian
            //Assert.AreEqual("20/12/2012", d2.ToLocaleDateString(new string[] { "ban", "id" })); // "20/12/2012"

            //var d3 = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

            //// request a weekday along with a long date
            //var options = new Date.ToLocaleStringOptions
            //{
            //    Weekday = "long",
            //    Year = "numeric",
            //    Month = "long",
            //    Day = "numeric"
            //};

            //Assert.AreEqual("Donnerstag, 20. Dezember 2012", d3.ToLocaleDateString("de-DE", options)); // "Donnerstag, 20. Dezember 2012"

            //// an application may want to use UTC and make that visible
            //options.TimeZone = "UTC";
            //options.TimeZoneName = "short";

            //Assert.AreEqual("Thursday, December 20, 2012, GMT", d3.ToLocaleDateString("en-US", options)); // "Thursday, December 20, 2012, GMT"
        }


        // Not JS API
        //[Test]
        //public void ParseExactWorks()
        //{
        //    var dt = Date.ParseExact("2012-12-08", "yyyy-dd-MM");
        //    Assert.AreEqual(dt.GetFullYear(), 2012);
        //    Assert.AreEqual(dt.GetMonth(), 7);
        //    Assert.AreEqual(dt.GetDate(), 12);
        //}

        // Not JS API
        //[Test]
        //public void ParseExactWithCultureWorks()
        //{
        //    var dt = Date.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
        //    Assert.AreEqual(dt.GetFullYear(), 2012);
        //    Assert.AreEqual(dt.GetMonth(), 7);
        //    Assert.AreEqual(dt.GetDate(), 12);
        //}

        // Not JS API
        //[Test]
        //public void ParseExactUtcWorks()
        //{
        //    var dt = Date.ParseExactUtc("2012-12-08", "yyyy-dd-MM");
        //    Assert.AreEqual(dt.GetUTCFullYear(), 2012);
        //    Assert.AreEqual(dt.GetUTCMonth(), 7);
        //    Assert.AreEqual(dt.GetUTCDate(), 12);
        //}

        // Not JS API
        //[Test]
        //public void ParseExactUtcWithCultureWorks()
        //{
        //    var dt = Date.ParseExactUtc("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
        //    Assert.AreEqual(dt.GetUTCFullYear(), 2012);
        //    Assert.AreEqual(dt.GetUTCMonth(), 7);
        //    Assert.AreEqual(dt.GetUTCDate(), 12);
        //}

        [Test]
        public void ToDateStringWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            var s = dt.ToDateString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        }

        [Test]
        public void ToTimeStringWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            var s = dt.ToTimeString();
            Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        }

        [Test]
        public void ToUtcStringWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            var s = dt.ToUTCString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") >= 0);
        }

        [Test]
        public void ToLocaleDateStringWorks_SPI_1624()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            var s = dt.ToLocaleDateString();
            Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        }

        [Test]
        public void DateUTCIsWorking_SPI_1624()
        {
            var d = new Date();
            var year = 2017;
            var month = 1;
            var day = 12;
            var hour = 4;
            var minute = 36;
            var second = 55;
            var millisecond = 255;

            d.SetUTCFullYear(year); // 2017
            d.SetUTCMonth(month); // 1
            d.SetUTCDate(day); // 12
            d.SetUTCHours(hour); // 4
            d.SetUTCMinutes(minute); // 36
            d.SetUTCSeconds(second); // 55
            d.SetUTCMilliseconds(millisecond); // 255

            var utc1 = Date.UTC(year, month); // 1485907200000
            var utc2 = Date.UTC(year, month, day); // 1486857600000
            var utc3 = Date.UTC(year, month, day, hour); // 1486872000000
            var utc4 = Date.UTC(year, month, day, hour, minute); // 1486874160000
            var utc5 = Date.UTC(year, month, day, hour, minute, second); // 1486874215000
            var utc6 = Date.UTC(year, month, day, hour, minute, second, millisecond); // 1486874215255

            Assert.AreEqual(1485907200000d, utc1);
            Assert.AreEqual(1486857600000d, utc2);
            Assert.AreEqual(1486872000000d, utc3);
            Assert.AreEqual(1486874160000d, utc4);
            Assert.AreEqual(1486874215000d, utc5);
            Assert.AreEqual(1486874215255d, utc6);
        }

        [Test]
        public void ToLocaleTimeStringWorks()
        {
            var dt = new Date(2011, 7, 12, 13, 42);
            var s = dt.ToLocaleTimeString();
            Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        }

        private void AssertDateUtc(Date dt, int year, int month, int day, int hours, int minutes, int seconds, int milliseconds)
        {
            Assert.AreEqual(year, dt.GetUTCFullYear());
            Assert.AreEqual(month, dt.GetUTCMonth());
            Assert.AreEqual(day, dt.GetUTCDate());
            Assert.AreEqual(hours, dt.GetUTCHours());
            Assert.AreEqual(minutes, dt.GetUTCMinutes());
            Assert.AreEqual(seconds, dt.GetUTCSeconds());
            Assert.AreEqual(milliseconds, dt.GetUTCMilliseconds());
        }

        // Not JS API
        //[Test]
        //public void FromUtcYMDWorks()
        //{
        //    AssertDateUtc(Date.FromUtc(2011, 7, 12), 2011, 7, 12, 0, 0, 0, 0);
        //}

        // Not JS API
        //[Test]
        //public void FromUtcYMDHWorks()
        //{
        //    AssertDateUtc(Date.FromUtc(2011, 7, 12, 13), 2011, 7, 12, 13, 0, 0, 0);
        //}

        // Not JS API
        //[Test]
        //public void FromUtcYMDHNWorks()
        //{
        //    AssertDateUtc(Date.FromUtc(2011, 7, 12, 13, 42), 2011, 7, 12, 13, 42, 0, 0);
        //}

        // Not JS API
        //[Test]
        //public void FromUtcYMDHNSWorks()
        //{
        //    AssertDateUtc(Date.FromUtc(2011, 7, 12, 13, 42, 56), 2011, 7, 12, 13, 42, 56, 0);
        //}

        // Not JS API
        //[Test]
        //public void FromUtcYMDHNSUWorks()
        //{
        //    AssertDateUtc(Date.FromUtc(2011, 7, 12, 13, 42, 56, 345), 2011, 7, 12, 13, 42, 56, 345);
        //}

        [Test]
        public void SubtractingDatesWorks()
        {
            Assert.AreEqual(1440 * 60 * 1000, new Date(2011, 7, 12) - new Date(2011, 7, 11));
        }

        // Not JS API
        //[Test]
        //public void SubtractMethodReturningTimeSpanWorks()
        //{
        //    Assert.AreEqual(new Date(2011, 6, 12).Subtract(new Date(2011, 6, 11)), new TimeSpan(1, 0, 0, 0));
        //    Assert.AreEqual(new Date(2011, 6, 12, 15, 0, 0).Subtract(new Date(2011, 6, 11, 13, 0, 0)), new TimeSpan(1, 2, 0, 0));
        //}

        [Test]
        public void DateEqualityWorks()
        {
            Assert.True(new Date(2011, 7, 12) == new Date(2011, 7, 12));
            Assert.False(new Date(2011, 7, 12) == new Date(2011, 7, 13));
            Assert.AreStrictEqual(false, new Date(2011, 7, 12) == (Date)null);
            Assert.AreStrictEqual(false, (Date)null == new Date(2011, 7, 12));
            Assert.AreStrictEqual(true, (Date)null == (Date)null);
        }

        [Test]
        public void DateInequalityWorks()
        {
            Assert.False(new Date(2011, 7, 12) != new Date(2011, 7, 12));
            Assert.True(new Date(2011, 7, 12) != new Date(2011, 7, 13));
            Assert.AreStrictEqual(true, new Date(2011, 7, 12) != (Date)null);
            Assert.AreStrictEqual(true, (Date)null != new Date(2011, 7, 12));
            Assert.AreStrictEqual(false, (Date)null != (Date)null);
        }

        [Test]
        public void DateLessThanWorks()
        {
            Assert.True(new Date(2011, 7, 11) < new Date(2011, 7, 12));
            Assert.False(new Date(2011, 7, 12) < new Date(2011, 7, 12));
            Assert.False(new Date(2011, 7, 13) < new Date(2011, 7, 12));
        }

        [Test]
        public void DateLessEqualWorks()
        {
            Assert.True(new Date(2011, 7, 11) <= new Date(2011, 7, 12));
            Assert.True(new Date(2011, 7, 12) <= new Date(2011, 7, 12));
            Assert.False(new Date(2011, 7, 13) <= new Date(2011, 7, 12));
        }

        [Test]
        public void DateGreaterThanWorks()
        {
            Assert.False(new Date(2011, 7, 11) > new Date(2011, 7, 12));
            Assert.False(new Date(2011, 7, 12) > new Date(2011, 7, 12));
            Assert.True(new Date(2011, 7, 13) > new Date(2011, 7, 12));
        }

        [Test]
        public void DateGreaterEqualWorks()
        {
            Assert.False(new Date(2011, 7, 11) >= new Date(2011, 7, 12));
            Assert.True(new Date(2011, 7, 12) >= new Date(2011, 7, 12));
            Assert.True(new Date(2011, 7, 13) >= new Date(2011, 7, 12));
        }

        [Test]
        public void SetFullYearWithOneParameterWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetFullYear(2021);
            Assert.AreEqual(2021, dt.GetFullYear());
        }

        [Test]
        public void SetFullYearWithTwoParametersWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetFullYear(2021, 7);
            Assert.AreEqual(2021, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
        }

        [Test]
        public void SetFullYearWithThreeParametersWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetFullYear(2021, 7, 13);
            Assert.AreEqual(2021, dt.GetFullYear());
            Assert.AreEqual(7, dt.GetMonth());
            Assert.AreEqual(13, dt.GetDate());
        }

        [Test]
        public void SetMonthWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetMonth(3);
            Assert.AreEqual(3, dt.GetMonth());
        }

        [Test]
        public void SetDateWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetDate(12);
            Assert.AreEqual(12, dt.GetDate());
        }

        [Test]
        public void SetHoursWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetHours(11);
            Assert.AreEqual(11, dt.GetHours());
        }

        [Test]
        public void SetMinutesWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetMinutes(34);
            Assert.AreEqual(34, dt.GetMinutes());
        }

        [Test]
        public void SetSecondsWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetSeconds(23);
            Assert.AreEqual(23, dt.GetSeconds());
        }

        [Test]
        public void SetMillisecondsWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetMilliseconds(435);
            Assert.AreEqual(435, dt.GetMilliseconds());
        }

        [Test]
        public void SetTimeWorks()
        {
            var dt = new Date();
            dt.SetTime(3498302349234L);
            Assert.AreEqual(3498302349234d, dt.GetTime());
        }

        [Test]
        public void SetTimeAsDoubleWorks()
        {
            var dt = new Date();
            dt.SetTime(3498302349234d);
            Assert.AreEqual(3498302349234d, dt.GetTime());
        }

        [Test]
        public void SetUtcFullYearWithOneParameterWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCFullYear(2021);
            Assert.AreEqual(2021, dt.GetUTCFullYear());
        }

        [Test]
        public void SetUtcFullYearWithTwoParametersWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCFullYear(2021, 7);
            Assert.AreEqual(2021, dt.GetUTCFullYear());
            Assert.AreEqual(7, dt.GetUTCMonth());
        }

        [Test]
        public void SetUtcFullYearWithThreeParametersWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCFullYear(2021, 7, 13);
            Assert.AreEqual(2021, dt.GetUTCFullYear());
            Assert.AreEqual(7, dt.GetUTCMonth());
            Assert.AreEqual(13, dt.GetUTCDate());
        }

        [Test]
        public void SetUtcMonthWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt = AddTimezoneMinutesOffset(dt);

            dt.SetUTCMonth(3);
            Assert.AreEqual(3, dt.GetUTCMonth());
        }

        [Test]
        public void SetUtcDateWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCDate(12);
            Assert.AreEqual(12, dt.GetUTCDate());
        }

        [Test]
        public void SetUtcHoursWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCHours(11);
            Assert.AreEqual(11, dt.GetUTCHours());
        }

        [Test]
        public void SetUtcMinutesWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCMinutes(34);
            Assert.AreEqual(34, dt.GetUTCMinutes());
        }

        [Test]
        public void SetUtcSecondsWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCSeconds(23);
            Assert.AreEqual(23, dt.GetUTCSeconds());
        }

        [Test]
        public void SetUtcMillisecondsWorks()
        {
            var dt = new Date(2000, 0, 1);
            dt.SetUTCMilliseconds(435);
            Assert.AreEqual(435, dt.GetUTCMilliseconds());
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(new Date(0).GetHashCode(), new Date(0).GetHashCode());
            Assert.AreEqual(new Date(1).GetHashCode(), new Date(1).GetHashCode());
            Assert.AreNotEqual(new Date(1).GetHashCode(), new Date(0).GetHashCode());
            Assert.True((long)new Date(3000, 1, 1).GetHashCode() < 0xffffffffL);
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(new Date(0).Equals((object)new Date(0)));
            Assert.False(new Date(1).Equals((object)new Date(0)));
            Assert.False(new Date(0).Equals((object)new Date(1)));
            Assert.True(new Date(1).Equals((object)new Date(1)));
        }

        // Not JS API
        //[Test]
        //public void IEquatableEqualsWorks()
        //{
        //    Assert.True(new Date(0).Equals(new Date(0)));
        //    Assert.False(new Date(1).Equals(new Date(0)));
        //    Assert.False(new Date(0).Equals(new Date(1)));
        //    Assert.True(new Date(1).Equals(new Date(1)));

        //    Assert.True(((IEquatable<Date>)new Date(0)).Equals(new Date(0)));
        //    Assert.False(((IEquatable<Date>)new Date(1)).Equals(new Date(0)));
        //    Assert.False(((IEquatable<Date>)new Date(0)).Equals(new Date(1)));
        //    Assert.True(((IEquatable<Date>)new Date(1)).Equals(new Date(1)));
        //}

        // Not JS API
        //[Test]
        //public void CompareToWorks()
        //{
        //    Assert.True(new Date(0).CompareTo(new Date(0)) == 0);
        //    Assert.True(new Date(1).CompareTo(new Date(0)) > 0);
        //    Assert.True(new Date(0).CompareTo(new Date(1)) < 0);
        //    Assert.True(new Date(0).CompareTo(null) > 0);
        //}

        // Not JS API
        //[Test]
        //public void IComparableCompareToWorks()
        //{
        //    Assert.True(((IComparable<Date>)new Date(0)).CompareTo(new Date(0)) == 0);
        //    Assert.True(((IComparable<Date>)new Date(1)).CompareTo(new Date(0)) > 0);
        //    Assert.True(((IComparable<Date>)new Date(0)).CompareTo(new Date(1)) < 0);
        //    Assert.True(((IComparable<Date>)new Date(0)).CompareTo(null) > 0);
        //}

        private static Date AddTimezoneMinutesOffset(Date dt)
        {
            return new Date(dt.GetTime() - dt.GetTimezoneOffset() * 60000);
        }
    }
}