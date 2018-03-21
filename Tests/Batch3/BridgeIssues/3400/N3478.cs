using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{/*
    /// <summary>
    /// 
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3478 - {0}")]
    public class Bridge3478
    {
        /// <summary>
        /// A simple class to encapsulate a time zone offset.
        /// </summary>
        public class TZ_Offset
        {
            public int Hr;
            public int Mn;

            public TZ_Offset(int h, int m = 0)
            {
                Hr = h;
                Mn = m;
            }

            public int ToMinutes()
            {
                return (60 * Hr) + Mn;
            }

            public string NiceTS(DateTime refDate)
            {
                return refDate.Year + "-" + refDate.Month + "-" + refDate.Day + " " +
                    refDate.Hour + ":" + refDate.Minute +
                    " @TZ: " + Hr + ":" + Math.Abs(Mn).ToString("D2") + "h";
            }
        }

        /// <summary>
        /// All time zones available (according to https://en.wikipedia.org/wiki/List_of_UTC_time_offsets)
        /// </summary>
        public static List<TZ_Offset> WorldTZList = new List<TZ_Offset>
        {
            new TZ_Offset(-12),
            new TZ_Offset(-11),
            new TZ_Offset(-10),
            new TZ_Offset(-9, -30),
            new TZ_Offset(-9),
            new TZ_Offset(-8),
            new TZ_Offset(-7),
            new TZ_Offset(-6),
            new TZ_Offset(-5),
            new TZ_Offset(-4),
            new TZ_Offset(-3, -30),
            new TZ_Offset(-3),
            new TZ_Offset(-2),
            new TZ_Offset(-1),
            new TZ_Offset(1),
            new TZ_Offset(2),
            new TZ_Offset(3),
            new TZ_Offset(3, 30),
            new TZ_Offset(4),
            new TZ_Offset(4, 30),
            new TZ_Offset(5),
            new TZ_Offset(5, 30),
            new TZ_Offset(5, 45),
            new TZ_Offset(6),
            new TZ_Offset(6, 30),
            new TZ_Offset(7),
            new TZ_Offset(8),
            new TZ_Offset(8, 30),
            new TZ_Offset(8, 45),
            new TZ_Offset(9),
            new TZ_Offset(9, 30),
            new TZ_Offset(10),
            new TZ_Offset(10, 30),
            new TZ_Offset(11),
            new TZ_Offset(12),
            new TZ_Offset(12, 45),
            new TZ_Offset(13),
            new TZ_Offset(14)
        };

        /// <summary>
        /// This is an implementation of math to compare whether the builtin
        /// timespan result of the subtraction of two dates will equal to
        /// the "hardcoded" or "custom" calculation, which is validated against
        /// a native .NET/C# application.
        /// </summary>
        /// <param name="date0"></param>
        /// <param name="date1"></param>
        /// <returns></returns>
        public static bool CompareDateMath(DateTime date0, DateTime date1)
        {
            var utcOffset = date0 - date1;

            // Manually calculate the time difference to ensure it is working
            // and matches the result.
            var deltaHr = 0;
            var deltaMn = 0;
            if (date1.Day != date0.Day)
            {
                if (date1.Day + 1 == date0.Day || date1.Month + 1 == date0.Month || date1.Year + 1 == date0.Year)
                {
                    deltaHr = (24 + date0.Hour) - date1.Hour;
                }
                else if (date1.Day - 1 == date0.Day || date1.Month - 1 == date0.Month || date1.Year - 1 == date0.Year)
                {
                    deltaHr = date0.Hour - (24 + date1.Hour);
                }
            }
            else
            {
                deltaHr = date0.Hour - date1.Hour;
            }

            if (deltaHr != 0)
            {
                if (deltaHr > 0)
                {
                    if (date1.Minute > date0.Minute)
                    {
                        deltaHr--;
                        deltaMn = date1.Minute - date0.Minute;
                    }
                    else if (date1.Minute < date0.Minute)
                    {
                        deltaMn = date1.Minute + (60 - date0.Minute);
                    }
                }
                else // deltaHr < 0
                {
                    if (date1.Minute > date0.Minute)
                    {
                        deltaMn = date0.Minute - date1.Minute;
                    }
                    else if (date1.Minute < date0.Minute)
                    {
                        deltaHr++;
                        deltaMn = date0.Minute - (60 + date1.Minute);
                    }
                }
            }
            else
            {
                // A -00:30 or +00:30 time zone
                if (date1.Minute != date0.Minute)
                {
                    // If negative, then it is a -0:30 time zone.
                    deltaMn = date0.Minute - date1.Minute;
                }
            }

            // The effective test. Only makes sense if our current time zone is not GMT.
            return utcOffset.Minutes == deltaMn && utcOffset.Hours == deltaHr;
        }

        /// <summary>
        /// 
        /// </summary>
        [Test]
        public static void TestDateTimeTzMath()
        {
            var now = DateTime.Now;
            var unow = DateTime.UtcNow;
            Assert.True(CompareDateMath(now, unow), "Date time's Now and UtcNow-based math is correct.");

            now = DateTime.Today.AddMinutes(30);
            unow = now.AddMinutes(-120);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date (based on today and yesterday) math is correct.");

            now = DateTime.Today.AddMinutes((60 * 22));
            unow = now.AddMinutes(120);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date (based on today and tomorrow) math is correct.");

            now = DateTime.Today.AddMinutes((-60));
            unow = now.AddMinutes(120);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date (based on yesterday and today) math is correct.");

            now = DateTime.Today.AddMinutes(30);
            unow = now.AddMinutes(-150);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date +half hour (based on today and yesterday) math is correct.");

            now = DateTime.Today.AddMinutes((60 * 22));
            unow = now.AddMinutes(150);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date +half hour (based on today and tomorrow) math is correct.");

            now = DateTime.Today.AddMinutes((-60));
            unow = now.AddMinutes(150);
            Assert.True(CompareDateMath(now, unow), "Arbitrary date +half hour (based on yesterday and today) math is correct.");

            var dateTimeSamples = new List<DateTime>();
            var days = new int[3] { 1, 15, 31 };

            // For every month, add dates for first day, 15th and last day of month, for
            // midnight, 1:30am, 1:15pm and 11:45pm.
            for (var month = 1; month <= 12; month++)
            {
                foreach (var day in days)
                {

                    if (day == 31)
                    {
                        if (month == 12)
                        {
                            now = new DateTime(DateTime.Now.Year + 1, 1, 1).AddDays(-1);
                        }
                        else
                        {
                            now = new DateTime(DateTime.Now.Year, month + 1, 1).AddDays(-1);
                        }
                    }
                    else
                    {
                        now = new DateTime(DateTime.Now.Year, month, day);
                    }

                    dateTimeSamples.Add(new DateTime(DateTime.Now.Year, month, now.Day));
                    dateTimeSamples.Add(new DateTime(DateTime.Now.Year, month, now.Day, 1, 30, 0));
                    dateTimeSamples.Add(new DateTime(DateTime.Now.Year, month, now.Day, 13, 15, 0));
                    dateTimeSamples.Add(new DateTime(DateTime.Now.Year, month, now.Day, 23, 45, 0));
                }
            }

            // For every available world time zone, check if a given date - its time zone offset results in the time zone offset itself.
            foreach (var tz in WorldTZList)
            {
                foreach (var refDate in dateTimeSamples)
                {
                    now = refDate;
                    unow = refDate.AddMinutes(tz.ToMinutes());

                    Assert.True(CompareDateMath(now, unow), tz.NiceTS(now) + " hardcoded math matches DateTime math result.");
                }
            }
        }
    }*/
}