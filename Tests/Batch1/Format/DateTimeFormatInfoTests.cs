using Bridge.Test;

using System.Globalization;

namespace Bridge.ClientTest.Format
{
    [Category(Constants.MODULE_DATETIME)]
    [TestFixture(TestNameFormat = "DateTimeFormatInfo - {0}")]
    public class DateTimeFormatInfoTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual("System.Globalization.DateTimeFormatInfo", typeof(DateTimeFormatInfo).FullName);
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

            Assert.AreEqual("dddd, dd MMMM yyyy HH:mm:ss", format.FullDateTimePattern);
            Assert.AreEqual("yyyy MMMM", format.YearMonthPattern);

            Assert.AreEqual("yyyy'-'MM'-'dd'T'HH':'mm':'ss", format.SortableDateTimePattern);

            Assert.AreEqual("dddd, dd MMMM yyyy", format.LongDatePattern);
            Assert.AreEqual("MM/dd/yyyy", format.ShortDatePattern);

            Assert.AreEqual("HH:mm:ss", format.LongTimePattern);
            Assert.AreEqual("HH:mm", format.ShortTimePattern);

            Assert.AreEqual(0, format.FirstDayOfWeek);
            Assert.AreDeepEqual(new[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }, format.DayNames);

            Assert.AreDeepEqual(new[] {
              "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
              "November", "December", ""
            }, format.MonthNames);
        }
    }
}