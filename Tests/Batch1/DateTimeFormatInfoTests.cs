using System;
using System.Globalization;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "DateTimeFormatInfo - {0}")]
    public class DateTimeFormatInfoTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual("Bridge.DateTimeFormatInfo", typeof(DateTimeFormatInfo).GetClassName());
            Assert.True(format is DateTimeFormatInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual(null, format.GetFormat(typeof(int)));
            Assert.AreEqual(format, format.GetFormat(typeof(DateTimeFormatInfo)));
        }

        [Test]
        public void InvariantWorks()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual("AM", format.AMDesignator);
            Assert.AreEqual("PM", format.PMDesignator);

            Assert.AreEqual("/", format.DateSeparator);
            Assert.AreEqual(":", format.TimeSeparator);

            Assert.AreEqual("yyyy'-'MM'-'dd'T'HH':'mm':'ss", format.SortableDateTimePattern);

            Assert.AreEqual("dddd, MMMM dd, yyyy", format.LongDatePattern);
            Assert.AreEqual("M/d/yyyy", format.ShortDatePattern);

            Assert.AreEqual("h:mm:ss tt", format.LongTimePattern);
            Assert.AreEqual("h:mm tt", format.ShortTimePattern);

            Assert.AreEqual(0, format.FirstDayOfWeek);
            Assert.AreDeepEqual(new[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }, format.DayNames);

            Assert.AreDeepEqual(new[] {
              "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
              "November", "December", ""
            }, format.MonthNames);
        }
    }
}
