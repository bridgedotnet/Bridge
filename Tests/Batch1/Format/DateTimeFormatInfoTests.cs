using Bridge.Test.NUnit;

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
        public void InvariantWorks_SPI_1562()
        {
            var format = DateTimeFormatInfo.InvariantInfo;
            Assert.AreEqual("AM", format.AMDesignator);
            Assert.AreEqual("PM", format.PMDesignator);

            Assert.AreEqual("/", format.DateSeparator);
            Assert.AreEqual(":", format.TimeSeparator);

            // Not C# API
            //Assert.AreEqual(format.GMTDateTimePattern, "ddd, dd MMM yyyy HH:mm:Bridge 'GMT'");
            // #1562
            Assert.AreEqual("yyyy'-'MM'-'dd HH':'mm':'ss'Z'", format.UniversalSortableDateTimePattern);
            Assert.AreEqual("yyyy'-'MM'-'dd'T'HH':'mm':'ss", format.SortableDateTimePattern);
            Assert.AreEqual("dddd, dd MMMM yyyy HH:mm:ss", format.FullDateTimePattern);

            Assert.AreEqual("dddd, dd MMMM yyyy", format.LongDatePattern);
            Assert.AreEqual("MM/dd/yyyy", format.ShortDatePattern);

            Assert.AreEqual("HH:mm:ss", format.LongTimePattern);
            Assert.AreEqual("HH:mm", format.ShortTimePattern);

            Assert.AreEqual(0, format.FirstDayOfWeek);
            Assert.AreEqual(new[] { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" }, format.DayNames);
            // Not C# API
            //Assert.AreEqual(format.ShortDayNames, new[] { "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" });
            Assert.AreEqual(new[] { "Su", "Mo", "Tu", "We", "Th", "Fr", "Sa" }, format.ShortestDayNames);

            Assert.AreEqual(new[] {
              "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
              "November", "December", ""
            }, format.MonthNames);
            Assert.AreEqual(new[] { "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "" },
                format.AbbreviatedMonthNames);
        }
    }
}