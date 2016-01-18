using System;
using Bridge.Test;
using Bridge.ClientTest;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "DateTime - {0}")]
    public class JsDateTimeTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(DateTime).GetClassName(), "Date");
            object o = new DateTime();
            Assert.True(o is DateTime, "o is DateTime");
        }

        [Test]
        public void DefaultConstructorReturnsTodaysDate()
        {
            var dt = new DateTime();
            Assert.True(dt.GetFullYear() > 2011);
        }

        [Test]
        public void CreatingInstanceReturnsTodaysDate()
        {
            Assert.True(Activator.CreateInstance<DateTime>().GetFullYear() > 2011);
        }

        [Test]
        public void MillisecondSinceEpochConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000);
            Assert.AreEqual(dt.GetFullYear(), 1971);
        }

        [Test]
        public void StringConstructorWorks()
        {
            var dt = new DateTime("Aug 12, 2012");
            Assert.AreEqual(dt.GetFullYear(), 2012);
            Assert.AreEqual(dt.GetMonth(), 8);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void YMDConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual(dt.GetFullYear(), 2011);
            Assert.AreEqual(dt.GetMonth(), 7);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void YMDHConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual(dt.GetFullYear(), 2011);
            Assert.AreEqual(dt.GetMonth(), 7);
            Assert.AreEqual(dt.GetDate(), 12);
            Assert.AreEqual(dt.GetHours(), 13);
        }

        [Test]
        public void YMDHNConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42);
            Assert.AreEqual(dt.GetFullYear(), 2011);
            Assert.AreEqual(dt.GetMonth(), 7);
            Assert.AreEqual(dt.GetDate(), 12);
            Assert.AreEqual(dt.GetHours(), 13);
            Assert.AreEqual(dt.GetMinutes(), 42);
        }

        [Test]
        public void YMDHNSConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56);
            Assert.AreEqual(dt.GetFullYear(), 2011);
            Assert.AreEqual(dt.GetMonth(), 7);
            Assert.AreEqual(dt.GetDate(), 12);
            Assert.AreEqual(dt.GetHours(), 13);
            Assert.AreEqual(dt.GetMinutes(), 42);
            Assert.AreEqual(dt.GetSeconds(), 56);
        }

        [Test]
        public void YMDHNSUConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetFullYear(), 2011);
            Assert.AreEqual(dt.GetMonth(), 7);
            Assert.AreEqual(dt.GetDate(), 12);
            Assert.AreEqual(dt.GetHours(), 13);
            Assert.AreEqual(dt.GetMinutes(), 42);
            Assert.AreEqual(dt.GetSeconds(), 56);
            Assert.AreEqual(dt.GetMilliseconds(), 345);
        }

        [Test]
        public void NowWorks()
        {
            var dt = DateTime.Now;
            Assert.True(dt.GetFullYear() > 2011);
        }

        [Test]
        public void UTCNowWorks()
        {
            var UTC = DateTime.UtcNow;
            var local = DateTime.Now;
            Assert.True(
                Math.Abs(
                    (new DateTime(local.GetUtcFullYear(), local.GetUtcMonth(), local.GetUtcDate(), local.GetUtcHours(), local.GetUtcMinutes(), local.GetUtcSeconds(), local.GetUtcMilliseconds())
                    - UTC).TotalMinutes
                ) < 1000);
        }

        [Test]
        public void ToUniversalWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var UTC = dt.ToUniversalTime();
            Assert.AreEqual(dt.GetUtcFullYear(), UTC.GetFullYear());
            Assert.AreEqual(dt.GetUtcMonth(), UTC.GetMonth());
            Assert.AreEqual(dt.GetUtcDate(), UTC.GetDate());
            Assert.AreEqual(dt.GetUtcHours(), UTC.GetHours());
            Assert.AreEqual(dt.GetUtcMinutes(), UTC.GetMinutes());
            Assert.AreEqual(dt.GetUtcSeconds(), UTC.GetSeconds());
            Assert.AreEqual(dt.GetUtcMilliseconds(), UTC.GetMilliseconds());
        }

        [Test]
        public void ToLocalWorks()
        {
            var UTC = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var dt = UTC.ToLocalTime();
            Assert.AreEqual(dt.GetUtcFullYear(), UTC.GetFullYear());
            Assert.AreEqual(dt.GetUtcMonth(), UTC.GetMonth());
            Assert.AreEqual(dt.GetUtcDate(), UTC.GetDate());
            Assert.AreEqual(dt.GetUtcHours(), UTC.GetHours());
            Assert.AreEqual(dt.GetUtcMinutes(), UTC.GetMinutes());
            Assert.AreEqual(dt.GetUtcSeconds(), UTC.GetSeconds());
            Assert.AreEqual(dt.GetUtcMilliseconds(), UTC.GetMilliseconds());
        }

        [Test]
        public void TodayWorks()
        {
            var dt = DateTime.Today;
            Assert.True(dt.GetFullYear() > 2011);
            Assert.AreEqual(dt.GetHours(), 0);
            Assert.AreEqual(dt.GetMinutes(), 0);
            Assert.AreEqual(dt.GetSeconds(), 0);
            Assert.AreEqual(dt.GetMilliseconds(), 0);
        }

        [Test]
        public void FormatWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual(dt.Format("yyyy-MM-dd"), "2011-07-12");
        }

        //[Test]
        //public void IFormattableToStringWorks() {
        //    var dt = new DateTime(2011, 7, 12, 13);
        //    Assert.AreEqual(dt.ToString("yyyy-MM-dd"), "2011-08-12");
        //    Assert.AreEqual(((IFormattable)dt).ToString("yyyy-MM-dd"), "2011-08-12");
        //}

        [Test]
        public void LocaleFormatWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13);
            Assert.AreEqual(dt.Format("yyyy-MM-dd"), "2011-07-12");
        }

        [Test]
        public void GetFullYearWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetFullYear(), 2011);
        }

        [Test]
        public void GetMonthWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetMonth(), 7);
        }

        [Test]
        public void GetDateWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void GetHoursWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetHours(), 13);
        }

        [Test]
        public void GetMinutesWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetMinutes(), 42);
        }

        [Test]
        public void GetSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetSeconds(), 56);
        }

        [Test]
        public void GetMillisecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetMilliseconds(), 345);
        }

        [Test]
        public void GetDayWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            Assert.AreEqual(dt.GetDay(), 2);
        }

        [Test]
        public void GetTimeWorks()
        {
            var dt = new DateTime(DateTime.Utc(1970, 1, 2));
            Assert.AreEqual(dt.GetTime(), 1440 * 60 * 1000);
        }

        [Test]
        public void ValueOfWorks()
        {
            var dt = new DateTime(DateTime.Utc(1970, 1, 2));
            Assert.AreEqual(dt.ValueOf(), 1440 * 60 * 1000);
        }

        [Test]
        public void GetTimezoneOffsetWorks()
        {
            var dt = new DateTime(0);
            Assert.AreEqual(dt.GetTimezoneOffset(), (int)(new DateTime(1970, 1, 1).ValueOf()) / 60000);
        }

        [Test]
        public void GetUTCFullYearWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcFullYear(), 2011);
        }

        [Test]
        public void GetUtcMonthWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcMonth(), 7);
        }

        [Test]
        public void GetUTCDateWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcDate(), 12);
        }

        [Test]
        public void GetUTCHoursWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcHours(), 13);
        }

        [Test]
        public void GetUTCMinutesWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcMinutes(), 42);
        }

        [Test]
        public void GetUTCSecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcSeconds(), 56);
        }

        [Test]
        public void GetUTCMillisecondsWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcMilliseconds(), 345);
        }

        [Test]
        public void GetUTCDayWorks()
        {
            var dt = new DateTime(DateTime.Utc(2011, 7, 12, 13, 42, 56, 345));
            Assert.AreEqual(dt.GetUtcDay(), 2);
        }

        [Test]
        public void ParseWorks()
        {
            var dt = DateTime.Parse("Aug 12, 2012");
            Assert.AreEqual(dt.GetFullYear(), 2012);
            Assert.AreEqual(dt.GetMonth(), 8);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void ParseExactWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM");
            Assert.AreEqual(dt.GetFullYear(), 2012);
            Assert.AreEqual(dt.GetMonth(), 8);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void ParseExactWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
            Assert.AreEqual(dt.GetFullYear(), 2012);
            Assert.AreEqual(dt.GetMonth(), 8);
            Assert.AreEqual(dt.GetDate(), 12);
        }

        [Test]
        public void ParseExactUTCWorks()
        {
            //var dt = DateTime.ParseExactUTC("2012-12-08", "yyyy-dd-MM");
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", true);
            Assert.AreEqual(dt.GetUtcFullYear(), 2012);
            Assert.AreEqual(dt.GetUtcMonth(), 8);
            Assert.AreEqual(dt.GetUtcDate(), 12);
        }

        [Test]
        public void ParseExactUTCWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture, true);
            //var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
            Assert.AreEqual(dt.GetUtcFullYear(), 2012);
            Assert.AreEqual(dt.GetUtcMonth(), 8);
            Assert.AreEqual(dt.GetUtcDate(), 12);
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
            Assert.AreEqual(dt.GetUtcFullYear(), year);
            Assert.AreEqual(dt.GetUtcMonth(), month);
            Assert.AreEqual(dt.GetUtcDate(), day);
            Assert.AreEqual(dt.GetUtcHours(), hours);
            Assert.AreEqual(dt.GetUtcMinutes(), minutes);
            Assert.AreEqual(dt.GetUtcSeconds(), seconds);
            Assert.AreEqual(dt.GetUtcMilliseconds(), milliseconds);
        }

        [Test]
        public void SubtractingDatesWorks()
        {
            TimeSpan ts = new DateTime(2011, 7, 12) - new DateTime(2011, 7, 11);
            Assert.AreEqual(ts.TotalMilliseconds, 1440 * 60 * 1000);
        }

        [Test]
        public void SubtractMethodReturningTimeSpanWorks()
        {
            Assert.AreDeepEqual(new DateTime(2011, 6, 12).Subtract(new DateTime(2011, 6, 11)), new TimeSpan(1, 0, 0, 0));
            Assert.AreDeepEqual(new DateTime(2011, 6, 12, 15, 0, 0).Subtract(new DateTime(2011, 6, 11, 13, 0, 0)), new TimeSpan(1, 2, 0, 0));
        }

        [Test]
        public void DateEqualityWorks()
        {
            Assert.True(new DateTime(2011, 7, 12) == new DateTime(2011, 7, 12));
            Assert.False(new DateTime(2011, 7, 12) == new DateTime(2011, 7, 13));
            Assert.AreStrictEqual(new DateTime(2011, 7, 12) == (DateTime)null, false);
            Assert.AreStrictEqual((DateTime)null == new DateTime(2011, 7, 12), false);
            Assert.AreStrictEqual((DateTime)null == (DateTime)null, true);
        }

        [Test]
        public void DateInequalityWorks()
        {
            Assert.False(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 12));
            Assert.True(new DateTime(2011, 7, 12) != new DateTime(2011, 7, 13));
            Assert.AreStrictEqual(new DateTime(2011, 7, 12) != (DateTime)null, true);
            Assert.AreStrictEqual((DateTime)null != new DateTime(2011, 7, 12), true);
            Assert.AreStrictEqual((DateTime)null != (DateTime)null, false);
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

        // TODO DateTime.SetFullYear
        //[Test]
        //public void SetFullYearWithOneParameterWorks()
        //{
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetFullYear(2021);
        //    Assert.AreEqual(dt.GetFullYear(), 2021);
        //}

        //[Test]
        //public void SetFullYearWithTwoParametersWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetFullYear(2021, 7);
        //    Assert.AreEqual(dt.GetFullYear(), 2021);
        //    Assert.AreEqual(dt.GetMonth(), 7);
        //}

        //[Test]
        //public void SetFullYearWithThreeParametersWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetFullYear(2021, 7, 13);
        //    Assert.AreEqual(dt.GetFullYear(), 2021);
        //    Assert.AreEqual(dt.GetMonth(), 7);
        //    Assert.AreEqual(dt.GetDate(), 13);
        //}

        //[Test]
        //public void SetMonthWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetMonth(3);
        //    Assert.AreEqual(dt.GetMonth(), 3);
        //}

        //[Test]
        //public void SetDateWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetDate(12);
        //    Assert.AreEqual(dt.GetDate(), 12);
        //}

        //[Test]
        //public void SetHoursWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetHours(11);
        //    Assert.AreEqual(dt.GetHours(), 11);
        //}

        //[Test]
        //public void SetMinutesWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetMinutes(34);
        //    Assert.AreEqual(dt.GetMinutes(), 34);
        //}

        //[Test]
        //public void SetSecondsWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetSeconds(23);
        //    Assert.AreEqual(dt.GetSeconds(), 23);
        //}

        //[Test]
        //public void SetMillisecondsWorks() {
        //    var dt = new DateTime(2000, 0, 1);
        //    dt.SetMilliseconds(435);
        //    Assert.AreEqual(dt.GetMilliseconds(), 435);
        //}

        //[Test]
        //public void SetTimeWorks() {
        //    var dt = new DateTime();
        //    dt.SetTime(3498302349234L);
        //    Assert.AreEqual(dt.GetTime(), 3498302349234L);
        //}

        //[Test]
        //public void SetUTCFullYearWithOneParameterWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCFullYear(2021);
        //    Assert.AreEqual(dt.GetUTCFullYear(), 2021);
        //}

        //[Test]
        //public void SetUTCFullYearWithTwoParametersWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCFullYear(2021, 7);
        //    Assert.AreEqual(dt.GetUTCFullYear(), 2021);
        //    Assert.AreEqual(dt.GetUtcMonth(), 7);
        //}

        //[Test]
        //public void SetUTCFullYearWithThreeParametersWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCFullYear(2021, 7, 13);
        //    Assert.AreEqual(dt.GetUTCFullYear(), 2021);
        //    Assert.AreEqual(dt.GetUtcMonth(), 7);
        //    Assert.AreEqual(dt.GetUTCDate(), 13);
        //}

        //[Test]
        //public void SetUTCMonthWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCMonth(3);
        //    Assert.AreEqual(dt.GetUtcMonth(), 3);
        //}

        //[Test]
        //public void SetUTCDateWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCDate(12);
        //    Assert.AreEqual(dt.GetUTCDate(), 12);
        //}

        //[Test]
        //public void SetUTCHoursWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCHours(11);
        //    Assert.AreEqual(dt.GetUTCHours(), 11);
        //}

        //[Test]
        //public void SetUTCMinutesWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCMinutes(34);
        //    Assert.AreEqual(dt.GetUTCMinutes(), 34);
        //}

        //[Test]
        //public void SetUTCSecondsWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCSeconds(23);
        //    Assert.AreEqual(dt.GetUTCSeconds(), 23);
        //}

        //[Test]
        //public void SetUTCMillisecondsWorks() {
        //    var dt = new DateTime(DateTime.UTC(2000, 0, 1));
        //    dt.SetUTCMilliseconds(435);
        //    Assert.AreEqual(dt.GetUTCMilliseconds(), 435);
        //}

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(new DateTime(0).GetHashCode(), new DateTime(0).GetHashCode());
            Assert.AreEqual(new DateTime(1).GetHashCode(), new DateTime(1).GetHashCode());
            Assert.AreNotEqual(new DateTime(0).GetHashCode(), new DateTime(1).GetHashCode());
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
        public void DateTimeEqualsWorks()
        {
            Assert.True(new DateTime(0).Equals(new DateTime(0)));
            Assert.False(new DateTime(1).Equals(new DateTime(0)));
            Assert.False(new DateTime(0).Equals(new DateTime(1)));
            Assert.True(new DateTime(1).Equals(new DateTime(1)));
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(0)));
            Assert.False(((IEquatable<DateTime>)new DateTime(0)).Equals(new DateTime(1)));
            Assert.True(((IEquatable<DateTime>)new DateTime(1)).Equals(new DateTime(1)));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(new DateTime(0).CompareTo(new DateTime(0)) == 0);
            Assert.True(new DateTime(1).CompareTo(new DateTime(0)) > 0);
            Assert.True(new DateTime(0).CompareTo(new DateTime(1)) < 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(0)) == 0);
            Assert.True(((IComparable<DateTime>)new DateTime(1)).CompareTo(new DateTime(0)) > 0);
            Assert.True(((IComparable<DateTime>)new DateTime(0)).CompareTo(new DateTime(1)) < 0);
        }

        [Test(ExpectedCount = 1)]
        public static void DateTimes()
        {
            // TEST
            // [#83] by C#
            var str = "2015-03-24T10:48:09.1500225+03:00";
            var bridgeDate = DateTime.Parse(str);
            var bridgeDate1 = new DateTime(str);

            Assert.AreDeepEqual(bridgeDate, bridgeDate1, "[#83] C# bridgeDate = bridgeDate1");

            // TEST
            // [#83] by JavaScript code. This is to check the same issue as above and just to check another way of calling QUnit from JavaScript
            //Script.Write<dynamic>("var str = \"2015-03-24T10:48:09.1500225+03:00\";");
            //Script.Write<dynamic>("var bridgeDate2 = Bridge.Date.parse(str);");
            //Script.Write<dynamic>("var jsDate = new Date(Date.parse(str));");
            //Script.Write<dynamic>("var format = \"yyyy-MM-dd hh:mm:ss\";");

            //Script.Write<dynamic>("assert.deepEqual(Bridge.Date.format(bridgeDate2, format), Bridge.Date.format(jsDate, format), \"[#83] js\");");
        }
    }
}
