using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;
using System;
using System.Globalization;
using System.Linq;

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

        [Test]
        public void DefaultConstructorWorks_SPI_1606()
        {
            var dt = new DateTime();
            // #1606
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 0, 1, 1, 1);
        }

        [Test]
        public void DefaultValueWorks_SPI_1606()
        {
            var dt = default(DateTime);
            // #1606
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 0, 1, 1, 1);
        }

        [Test]
        public void CreatingInstanceReturnsDateWithZeroValue_SPI_1606()
        {
            var dt = Activator.CreateInstance<DateTime>();
            // #1606
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 0, 1, 1, 1);
        }

        [Test]
        public void MillisecondSinceEpochConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000, DateTimeKind.Utc);
            Assert.AreEqual(1, dt.AddDays(1).Year);
        }

        [Test]
        public void LongConstructorWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000);
            Assert.AreEqual(1, dt.Year);

            var dt1 = new DateTime(0);
            DateHelper.AssertDate(dt1, DateTimeKind.Unspecified, 0, 1, 1, 1);

            var dt2 = new DateTime(1000000000000000000);
            DateHelper.AssertDate(dt2, DateTimeKind.Unspecified, 1000000000000000000, 3169, 11, 16);
        }

        [Test]
        public void LongConstructorUtcWorks()
        {
            var dt = new DateTime(1440L * 60 * 500 * 1000, DateTimeKind.Local);
            Assert.AreEqual(1, dt.Year);

            var dt1 = new DateTime(0, DateTimeKind.Local);
            DateHelper.AssertDate(dt1, DateTimeKind.Local, 0, 1, 1, 1);

            var dt2 = new DateTime(1000000000000000000, DateTimeKind.Local);
            DateHelper.AssertDate(dt2, DateTimeKind.Local, 1000000000000000000, 3169, 11, 16);

            var dt3 = new DateTime(1440L * 60 * 500 * 1000, DateTimeKind.Utc);
            Assert.AreEqual(1, dt3.Year);

            var dt4 = new DateTime(0, DateTimeKind.Utc);
            DateHelper.AssertDate(dt4, DateTimeKind.Utc, 0, 1, 1, 1);

            var dt5 = new DateTime(1000000000000000000, DateTimeKind.Utc);
            DateHelper.AssertDate(dt5, DateTimeKind.Utc, 1000000000000000000, 3169, 11, 16);
        }

        [Test]
        public void YMDConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634460256000000000, 2011, 7, 12);
        }

        [Test]
        public void YMDHConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 0, 0);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634460724000000000, 2011, 7, 12, 13);
        }

        [Test]
        public void YMDHConstructorUtcWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 0, 0, DateTimeKind.Local);
            DateHelper.AssertDate(dt, DateTimeKind.Local, 634460724000000000, 2011, 7, 12, 13);

            var dt1 = new DateTime(2011, 7, 12, 13, 0, 0, DateTimeKind.Utc);
            DateHelper.AssertDate(dt1, DateTimeKind.Utc, 634460724000000000, 2011, 7, 12, 13);
        }

        [Test]
        public void YMDHNConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 0, 0);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634460749200000000, 2011, 7, 12, 13, 42);
        }

        [Test]
        public void YMDHNConstructorUtcWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 0, 0, DateTimeKind.Local);
            DateHelper.AssertDate(dt, DateTimeKind.Local, 634460749200000000, 2011, 7, 12, 13, 42);

            var dt1 = new DateTime(2011, 7, 12, 13, 42, 0, 0, DateTimeKind.Utc);
            DateHelper.AssertDate(dt1, DateTimeKind.Utc, 634460749200000000, 2011, 7, 12, 13, 42);
        }

        [Test]
        public void YMDHNSConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634460749760000000, 2011, 7, 12, 13, 42, 56);
        }

        [Test]
        public void YMDHNSConstructorUtcWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, DateTimeKind.Local);
            DateHelper.AssertDate(dt, DateTimeKind.Local, 634460749760000000, 2011, 7, 12, 13, 42, 56);

            var dt1 = new DateTime(2011, 7, 12, 13, 42, 56, DateTimeKind.Utc);
            DateHelper.AssertDate(dt1, DateTimeKind.Utc, 634460749760000000, 2011, 7, 12, 13, 42, 56);
        }

        [Test]
        public void YMDHNSUConstructorWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634460749763450000, 2011, 7, 12, 13, 42, 56, 345);
        }

        [Test]
        public void YMDHNSUConstructorUtcWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Local);
            DateHelper.AssertDate(dt, DateTimeKind.Local, 634460749763450000, 2011, 7, 12, 13, 42, 56, 345);

            var dt1 = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            DateHelper.AssertDate(dt1, DateTimeKind.Utc, 634460749763450000, 2011, 7, 12, 13, 42, 56, 345);
        }

        [Test]
        public void MinWorks()
        {
            var dt = DateTime.MinValue;
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 0, 1, 1, 1);
        }

        [Test]
        public void MaxWorks()
        {
            var dt = DateTime.MaxValue;
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 3155378975999999999, 9999, 12, 31);
        }

        [Test]
        public void NowWorks()
        {
            var dt = DateTime.Now;
            var year = dt.Year;
            var kind = dt.Kind;
            var ticks = dt.Ticks;

            Assert.True(year > 2016, year + " > 2016");
            Assert.AreEqual(DateTimeKind.Local, kind, kind + " = Local");
            Assert.True(ticks > 636353025520231775, ticks + " > 636353025520231775");
        }

        [Test]
        public void UtcNowWorks()
        {
            var utcNow = DateTime.UtcNow;
            var localNowToUtc = DateTime.Now.ToUniversalTime();

            var utcString = utcNow.ToString("o");
            var utcFromLocalString = localNowToUtc.ToString("o");

            var useSimpleEqual = utcString == utcFromLocalString;

            if (!useSimpleEqual)
            {
                // Some browsers may get result diff of 10000 ticks
                // So allow tick diff be different not more than 10000 ticks in string representations
                try
                {
                    var utcParts = utcString.Split('.');
                    var utcFromLocalParts = utcFromLocalString.Split('.');

                    if (utcParts[0] != utcFromLocalParts[0] || utcParts.Length != utcFromLocalParts.Length)
                    {
                        useSimpleEqual = true;
                    }
                    else
                    {
                        var utcTicksString = utcParts[1];
                        var utcFromLocalTicksString = utcFromLocalParts[1];

                        if (utcTicksString.Length == utcFromLocalTicksString.Length
                            && utcTicksString.Last() == 'Z'
                            && utcFromLocalTicksString.Last() == 'Z')
                        {
                            var utcTicks = int.Parse(utcTicksString.Remove(utcTicksString.Length - 1));
                            var utcFromLocalTicks = int.Parse(utcFromLocalTicksString.Remove(utcFromLocalTicksString.Length - 1));

                            var utcTicksDiff = utcTicks - utcFromLocalTicks;

                            var message = string.Format("String representaions should equal {0} vs {1}; (Abs(Diff({2}, {3})) = {4}) <= 10000",
                                utcString, utcFromLocalString, utcTicks, utcFromLocalTicks, utcTicksDiff);

                            Assert.True(Math.Abs(utcTicksDiff) <= 10000, message);
                        }
                        else
                        {
                            useSimpleEqual = true;
                        }
                    }
                }
                catch
                {
                    useSimpleEqual = true;
                }

            }

            if (useSimpleEqual)
            {
                Assert.AreEqual(utcString, utcFromLocalString, "String representaions should equal");
            }

            var fromLocal = new DateTime(localNowToUtc.Year, localNowToUtc.Month, localNowToUtc.Day, localNowToUtc.Hour, localNowToUtc.Minute, localNowToUtc.Second, localNowToUtc.Millisecond);
            var tickDiff = fromLocal.Ticks - utcNow.Ticks;

            Assert.True(Math.Abs(tickDiff) <= 10000, "Tick diff: Abs(" + tickDiff + ") <= 10000");

            var dateDiff = fromLocal - utcNow;
            var minutes = dateDiff.TotalMinutes;

            Assert.True(Math.Abs(minutes) < 1000, "Date diff in minutes: Abs(" + minutes + ") < 1000");

            var year = utcNow.Year;
            var kind = utcNow.Kind;
            var ticks = utcNow.Ticks;

            Assert.True(year > 2016, year + " > 2016");
            Assert.AreEqual(DateTimeKind.Utc, kind, kind + " = Utc");
            Assert.True(ticks > 636352945138088328, ticks + " > 636352945138088328");
        }

        [Test]
        public void ToUniversalWorksDoesNotDoubleCompute()
        {
            var d = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var d1 = d.ToUniversalTime();
            var d2 = d1.ToUniversalTime();

            DateHelper.AssertDate(d2, d1);
        }

        [Test(Name = "#2929 #2524 - {0}", ExpectedCount = 5)]
        public void ToUniversalTimeWorks_N2929_N2524()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15, DateTimeKind.Utc);
            var d2 = d1.ToLocalTime();
            var d3 = d2.ToUniversalTime();
            var d4 = d3.ToUniversalTime();

            // 2011-10-05T20:48:15.0000000Z
            Assert.AreEqual("2011-10-05T14:48:15.0000000Z", d3.ToString("O"));

            // #2524
            Assert.AreEqual(d3.ToString("O"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("o"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("O"), d4.ToString("o"));
        }

        [Test]
        public void ToLocalWorksDoesNotDoubleCompute()
        {
            var d = new DateTime(2011, 7, 12, 13, 42, 56, 345);
            var d1 = d.ToLocalTime();
            var d2 = d1.ToLocalTime();

            DateHelper.AssertDate(d2, d1);
        }

        [Test(Name = "#2929 #2524 - {0}", ExpectedCount = 4)]
        public void ToLocalTimeWorks_N2929_N2524()
        {
            var d1 = new DateTime(2011, 10, 5, 14, 48, 15);
            var d2 = d1.ToUniversalTime();
            var d3 = d2.ToLocalTime();
            var d4 = d3.ToLocalTime();

            // #2524
            Assert.AreEqual(d3.ToString("O"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("o"));
            Assert.AreEqual(d3.ToString("o"), d4.ToString("O"));
            Assert.AreEqual(d3.ToString("O"), d4.ToString("o"));
        }

        [Test]
        public void TodayWorks()
        {
            var dt = DateTime.Today;

            Assert.True(dt.Year > 2016, dt.Year + " > 2016");
            Assert.AreEqual(0, dt.Hour);
            Assert.AreEqual(0, dt.Minute);
            Assert.AreEqual(0, dt.Second);
            Assert.AreEqual(0, dt.Millisecond);
            Assert.AreEqual(DateTimeKind.Local, dt.Kind, dt.Kind + " = Local");
            Assert.True(dt.Ticks >= 636352416000000000, dt.Ticks + " >= 636352416000000000");
        }

        [Test]
        public void FormatWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual("2011-07-12", dt.ToString("yyyy-MM-dd"));
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
            Assert.AreEqual(dt.ToString("yyyy-MM-dd"), "2011-07-12");
            Assert.AreEqual(((IFormattable)dt).ToString("yyyy-MM-dd", CultureInfo.CurrentCulture), "2011-07-12");
        }

        // Not C# API
        [Test]
        public void LocaleFormatWorks()
        {
            var dt = new DateTime(2011, 7, 12);
            Assert.AreEqual("2011-07-12", dt.ToString("yyyy-MM-dd"));
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

        // Not C# API

        //[Test]
        //public void GetTimeWorks()
        //{
        //    var dt = new DateTime(1000, 1, 2, 0, 0, 0, DateTimeKind.Utc);
        //    Assert.AreEqual((-30610137600000).ToString(), (dt.Ticks / 10000).ToString());
        //}

        // Not C# API
        //[Test]
        //public void ValueOfWorks()
        //{
        //    var dt = new DateTime(1000, 1, 2, 0, 0, 0, DateTimeKind.Utc);
        //    Assert.AreEqual((-30610137600000).ToString(), (dt.Ticks / 10000).ToString());
        //}

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
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(2011, dt.Year);
        }

        [Test]
        public void GetUtcMonthWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(7, dt.Month);
        }

        [Test]
        public void GetUTCDateWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(12, dt.Day);
        }

        [Test]
        public void GetUTCHoursWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(13, dt.Hour);
        }

        [Test]
        public void GetUTCMinutesWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(42, dt.Minute);
        }

        [Test]
        public void GetUTCSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(56, dt.Second);
        }

        [Test]
        public void GetUTCMillisecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(345, dt.Millisecond);
        }

        [Test]
        public void GetUTCDayWorks()
        {
            var dt = new DateTime(2011, 7, 12, 13, 42, 56, 345, DateTimeKind.Utc);
            Assert.AreEqual(12, dt.Day);
        }

        [Test]
        public void ParseWorks()
        {
            var dt = DateTime.Parse("Aug 12, 2012");
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634803264000000000, 2012, 8, 12);
        }

        [Test]
        public void ParseExactWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", null);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634803264000000000, 2012, 8, 12);
        }

        [Test]
        public void ParseExactReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", null); });
        }

        [Test]
        public void ParseExactWithCultureWorks()
        {
            var dt = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture);
            DateHelper.AssertDate(dt, DateTimeKind.Unspecified, 634803264000000000, 2012, 8, 12);
        }

        [Test]
        public void ParseExactWithCultureReturnsNullIfTheInputIsInvalid()
        {
            Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", CultureInfo.InvariantCulture); });
        }

        // The test is restructured to run correctly within any TimeZone
        // And commented out due to DST problem
        //[Test]
        //public void ParseExactWithLocalKindsWithFormatK()
        //{
        //    var format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss.FFFFFFFK";

        //    var baseOffsetHours = 8;
        //    var firstTestZone = (DateHelper.GetOffsetMinutes() / 60) + baseOffsetHours;
        //    var testShift = 4 - firstTestZone;

        //    // This iterates offsets through -04:00 to +04:00 (including 00:00 which is replaced by 'Z')
        //    for (int i = 0; i < 8; i++)
        //    {
        //        var testId = "d" + (i + 1) + ": ";

        //        CommonHelper.Safe(() =>
        //        {
        //            var s1 = "2008-05-01T07:34:42" + DateHelper.GetOffsetString((baseOffsetHours - i + testShift) * 60);
        //            var d1 = DateTime.ParseExact(s1, format, null);

        //            Assert.True(true, testId + "input " + s1);
        //            DateHelper.AssertDate(new DateTime(2008, 5, 1, 15 - i + 1 + testShift, 34, 42, DateTimeKind.Local), d1, testId);
        //        }, testId);
        //    }

        //    // This iterates offsets through -04:00 to +04:00 (including 00:00 which is replaced by 'Z')
        //    for (int i = 0; i < 8; i++)
        //    {
        //        var testId = "m" + (i + 1) + ": ";

        //        CommonHelper.Safe(() =>
        //        {
        //            var s2 = "2008-09-15T09:30:41.7752486" + DateHelper.GetOffsetString((baseOffsetHours - i + testShift) * 60);
        //            var d2 = DateTime.ParseExact(s2, format, null);

        //            Assert.True(true, testId + "input " + s2);
        //            DateHelper.AssertDate(new DateTime(2008, 9, 15, 17 - i + 1 + testShift, 30, 41, 775, DateTimeKind.Local), d2, testId);
        //        }, testId);
        //    }
        //}

        // The test is restructured to run correctly within any TimeZone
        // And commented out due to DST problem
        //[Test]
        //public void ParseExactWithNoZNorOffsetWithFormatK()
        //{
        //    var s = "2008-09-15T09:30:41.7752486";

        //    var format = "yyyy'-'MM'-'dd'T'HH':'mm':'ss.FFFFFFFK";

        //    CommonHelper.Safe(() =>
        //    {
        //        var d = DateTime.ParseExact(s, format, null);
        //        var l = d.ToString();

        //        DateHelper.AssertDate(new DateTime(2008, 9, 15, 9, 30, 41, 775, DateTimeKind.Unspecified), d, l + ": ");
        //    }, s + ": ");
        //}

        // Not C# API
        //[Test]
        //public void ParseExactUTCWorks()
        //{
        //    var d1 = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", true);
        //    var d2 = DateTime.SpecifyKind(d1, DateTimeKind.Utc);
        //    var utc = new DateTime(2012, 8, 12, 0, 0, 0, DateTimeKind.Utc);

        //    DateHelper.AssertDate(utc, d2);
        //}

        // Not C# API
        //[Test]
        //public void ParseExactUtcReturnsNullIfTheInputIsInvalid()
        //{
        //    Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", true); });
        //}

        // Not C# API
        //[Test]
        //public void ParseExactUTCWithCultureWorks()
        //{
        //    var d1 = DateTime.ParseExact("2012-12-08", "yyyy-dd-MM", CultureInfo.InvariantCulture, true);
        //    var d2 = DateTime.SpecifyKind(d1, DateTimeKind.Utc);
        //    var utc = new DateTime(2012, 8, 12, 0, 0, 0, DateTimeKind.Utc);

        //    DateHelper.AssertDate(utc, d2);
        //}

        // Not Supported in 16.0.0
        //[Test]
        //public void ParseWithLocalKinds()
        //{
        //    var s1 = "2008-05-01T07:34:42-5:00";
        //    var s2 = "2008-05-01 7:34:42Z";
        //    var s3 = "Thu, 01 May 2008 07:34:42 GMT";

        //    CommonHelper.Safe(() =>
        //    {
        //        var d1 = DateTime.Parse(s1);
        //        DateHelper.AssertDate(new DateTime(2008, 5, 1, 16, 34, 42, DateTimeKind.Local), d1, "d1: ");
        //    }, "d1: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d2 = DateTime.Parse(s2);
        //        DateHelper.AssertDate(new DateTime(2008, 5, 1, 11, 34, 42, DateTimeKind.Local), d2, "d2: ");
        //    }, "d2: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d3 = DateTime.Parse(s3);
        //        DateHelper.AssertDate(new DateTime(2008, 5, 1, 11, 34, 42, DateTimeKind.Local), d3, "d3: ");
        //    }, "d3: ");
        //}

        // Not Supported in 16.0.0
        //[Test]
        //public void ParseWithDifferentKinds()
        //{
        //    var s1 = "2008-09-15T09:30:41.7752486-07:00";
        //    var s2 = "2008-09-15T09:30:41.7752486Z";
        //    var s3 = "2008-09-15T09:30:41.7752486";
        //    var s4 = "2008-09-15T09:30:41.7752486-04:00";
        //    var s5 = "Mon, 15 Sep 2008 09:30:41 GMT";

        //    CommonHelper.Safe(() =>
        //    {
        //        var d1 = DateTime.Parse(s1);
        //        DateHelper.AssertDate(new DateTime(633571074417752486, DateTimeKind.Local), d1, "d1: ");
        //    }, "d1: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d2 = DateTime.Parse(s2);
        //        DateHelper.AssertDate(new DateTime(633570822417752486, DateTimeKind.Local), d2, "d2: ");
        //    }, "d2: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d3 = DateTime.Parse(s3);
        //        DateHelper.AssertDate(new DateTime(633570678417752486, DateTimeKind.Unspecified), d3, "d3: ");
        //    }, "d3: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d4 = DateTime.Parse(s4);
        //        DateHelper.AssertDate(new DateTime(633570966417752486, DateTimeKind.Local), d4, "d4: ");
        //    }, "d4: ");

        //    CommonHelper.Safe(() =>
        //    {
        //        var d5 = DateTime.Parse(s5);
        //        DateHelper.AssertDate(new DateTime(633570822410000000, DateTimeKind.Local), d5, "d5: ");
        //    }, "d5: ");
        //}

        // Not C# API
        //[Test]
        //public void ParseExactUtcWithCultureReturnsNullIfTheInputIsInvalid()
        //{
        //    Assert.Throws<FormatException>(() => { var dt = DateTime.ParseExact("X", "yyyy-dd-MM", CultureInfo.InvariantCulture, true); });
        //}

        // Not C# API
        //[Test]
        //public void ToDateStringWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13, 42, 0);
        //    var s = dt.ToDateString();
        //    Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        //}

        // Not C# API
        //[Test]
        //public void ToTimeStringWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13, 42, 0);
        //    var s = dt.ToTimeString();
        //    Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        //}

        // Not C# API
        //[Test]
        //public void ToUTCStringWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13, 42, 0);
        //    var s = dt.ToUtcString();
        //    Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") >= 0);
        //}

        // Not C# API
        //[Test]
        //public void ToLocaleDateStringWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13, 42, 0);
        //    var s = dt.ToLocaleDateString();
        //    Assert.True(s.IndexOf("2011") >= 0 && s.IndexOf("42") < 0);
        //}

        // Not C# API
        //[Test]
        //public void ToLocaleTimeStringWorks()
        //{
        //    var dt = new DateTime(2011, 7, 12, 13, 42, 0);
        //    var s = dt.ToLocaleTimeString();
        //    Assert.True(s.IndexOf("2011") < 0 && s.IndexOf("42") >= 0);
        //}

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

        // Not C# API
        //[Test]
        //public void UtcYMDWorks()
        //{
        //    AssertDateUTC(new DateTime(2011, 7, 12)), 2011, 7, 12, 0, 0, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void UtcYMDHWorks()
        //{
        //    AssertDateUTC(new DateTime(2011, 7, 12, 13, 0, 0)), 2011, 7, 12, 13, 0, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void UtcYMDHNWorks()
        //{
        //    AssertDateUTC(new DateTime(2011, 7, 12, 13, 42, 0)), 2011, 7, 12, 13, 42, 0, 0);
        //}

        // Not C# API
        //[Test]
        //public void UtcYMDHNSWorks()
        //{
        //    AssertDateUTC(new DateTime(2011, 7, 12, 13, 42, 56)), 2011, 7, 12, 13, 42, 56, 0);
        //}

        // Not C# API
        //[Test]
        //public void UtcYMDHNSUWorks()
        //{
        //    AssertDateUTC(new DateTime(2011, 7, 12, 13, 42, 56, 345)), 2011, 7, 12, 13, 42, 56, 345);
        //}

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

            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) == new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) == new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local) == new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc) == new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc));

            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) == new DateTime(2011, 7, 12, 1, 2, 3, 5, DateTimeKind.Unspecified));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) == new DateTime(2011, 7, 12, 1, 2, 6, 4, DateTimeKind.Local));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local) == new DateTime(2011, 7, 12, 1, 7, 3, 4, DateTimeKind.Local));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc) == new DateTime(2011, 7, 12, 8, 2, 3, 4, DateTimeKind.Utc));

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

            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) != new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) != new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local) != new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local));
            Assert.False(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc) != new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc));

            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) != new DateTime(2011, 7, 12, 1, 2, 3, 5, DateTimeKind.Unspecified));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Unspecified) != new DateTime(2011, 7, 12, 1, 2, 6, 4, DateTimeKind.Local));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Local) != new DateTime(2011, 7, 12, 1, 7, 3, 4, DateTimeKind.Local));
            Assert.True(new DateTime(2011, 7, 12, 1, 2, 3, 4, DateTimeKind.Utc) != new DateTime(2011, 7, 12, 8, 2, 3, 4, DateTimeKind.Utc));

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

        [Test(Name = "#2967 - {0}")]
        public void AddDaysForDSTWorks_N2967()
        {
            // This should be tested in time zone where daylight time change in April
            // Like AEST – Australian Eastern Standard Time / Eastern Standard Time (Standard Time)
            var x = new DateTime(2017, 04, 1);
            Assert.AreEqual(new DateTime(2017, 4, 1), x);
            x = x.AddDays(1);
            Assert.AreEqual(new DateTime(2017, 4, 2), x);
            x = x.AddDays(1);
            Assert.AreEqual(new DateTime(2017, 4, 3), x);

            var y = new DateTime(2017, 05, 1);
            Assert.AreEqual(new DateTime(2017, 5, 1), y);
            y = y.AddDays(1);
            Assert.AreEqual(new DateTime(2017, 5, 2), y);
            y = y.AddDays(1);
            Assert.AreEqual(new DateTime(2017, 5, 3), y);
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
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 45, 26, 345), actual);
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddMonthsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddMonths(6);
            DateHelper.AssertDate(new DateTime(2012, 1, 12, 2, 42, 56, 345), actual);
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test(Name = "#2542 - {0}")]
        public void AddMonthsEdgeCasesWorks()
        {
            var dt = new DateTime(2017, 3, 31, 16, 10, 10);
            DateHelper.AssertDate(new DateTime(2017, 3, 31, 16, 10, 10), dt);

            var actual = dt.AddMonths(1);
            DateHelper.AssertDate(new DateTime(2017, 4, 30, 16, 10, 10), actual);
            actual = dt.AddMonths(2);
            DateHelper.AssertDate(new DateTime(2017, 5, 31, 16, 10, 10), actual);
            actual = dt.AddMonths(3);
            DateHelper.AssertDate(new DateTime(2017, 6, 30, 16, 10, 10), actual);
            actual = dt.AddMonths(12);
            DateHelper.AssertDate(new DateTime(2018, 3, 31, 16, 10, 10), actual);

            dt = new DateTime(2020, 2, 29, 16, 10, 10);
            DateHelper.AssertDate(new DateTime(2020, 2, 29, 16, 10, 10), dt);

            actual = dt.AddMonths(1);
            DateHelper.AssertDate(new DateTime(2020, 3, 29, 16, 10, 10), actual);
            actual = dt.AddMonths(2);
            DateHelper.AssertDate(new DateTime(2020, 4, 29, 16, 10, 10), actual);
            actual = dt.AddMonths(12);
            DateHelper.AssertDate(new DateTime(2021, 2, 28, 16, 10, 10), actual);
        }

        [Test]
        public void AddSecondsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddSeconds(2.5);
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 42, 58, 845), actual);
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test]
        public void AddYearsWorks()
        {
            var dt = new DateTime(2011, 7, 12, 2, 42, 56, 345);
            var actual = dt.AddYears(3);

            DateHelper.AssertDate(new DateTime(2014, 7, 12, 2, 42, 56, 345), actual);
            DateHelper.AssertDate(new DateTime(2011, 7, 12, 2, 42, 56, 345), dt);
        }

        [Test(Name = "#2963 - {0}")]
        public void AddYearsWorks_N2963()
        {
            var d = new DateTime(2017, 1, 2);

            bool b = false;
            var d1 = d.AddYears(b ? -1 : 1);
            DateHelper.AssertDate(new DateTime(2018, 1, 2), d1);

            b = true;
            var d2 = d.AddYears(b ? -1 : 1);
            DateHelper.AssertDate(new DateTime(2016, 1, 2), d2);
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

        [Test]
        public void SpecifyKindWorks()
        {
            var d = new DateTime(2017, 1, 2, 3, 0, 0);
            var t = d.Ticks;

            Assert.AreEqual(DateTimeKind.Unspecified, d.Kind, "Unspecified Kind");

            var d1 = DateTime.SpecifyKind(d, DateTimeKind.Local);

            Assert.AreEqual(DateTimeKind.Unspecified, d.Kind, "1. Kind not changed");
            Assert.AreEqual(t, d.Ticks, "1 Ticks not changed");
            Assert.AreEqual(DateTimeKind.Local, d1.Kind, "1 Local Kind");
            Assert.AreEqual(t, d1.Ticks, "1 Local Ticks");

            var d2 = DateTime.SpecifyKind(d, DateTimeKind.Utc);

            Assert.AreEqual(DateTimeKind.Unspecified, d.Kind, "2. Kind not changed");
            Assert.AreEqual(t, d.Ticks, "2 Ticks not changed");
            Assert.AreEqual(DateTimeKind.Utc, d2.Kind, "2 Utc Kind");
            Assert.AreEqual(t, d2.Ticks, "2 Utc Ticks");

            var d3 = DateTime.SpecifyKind(d, DateTimeKind.Local);

            Assert.AreEqual(DateTimeKind.Unspecified, d.Kind, "3. Kind not changed");
            Assert.AreEqual(t, d.Ticks, "3 Ticks not changed");
            Assert.AreEqual(DateTimeKind.Local, d3.Kind, "3 Local Kind");
            Assert.AreEqual(t, d3.Ticks, "3 Local Ticks");

            var d4 = DateTime.SpecifyKind(d, DateTimeKind.Unspecified);

            Assert.AreEqual(DateTimeKind.Unspecified, d.Kind, "4. Kind not changed");
            Assert.AreEqual(t, d.Ticks, "4 Ticks not changed");
            Assert.AreEqual(DateTimeKind.Unspecified, d4.Kind, "4 Unspecified Kind");
            Assert.AreEqual(t, d4.Ticks, "4 Unspecified Ticks");
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