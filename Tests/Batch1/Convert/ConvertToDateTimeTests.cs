// The source is licensed to the .NET Foundation under the MIT license:
// https://github.com/dotnet/corefx/blob/master/src/System.Runtime.Extensions/tests/System/Convert.ToDateTime.cs
// https://github.com/dotnet/corefx/blob/master/LICENSE

using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;
using System;
using System.Globalization;

namespace Bridge.ClientTest.ConvertTests
{
    [Category(Constants.MODULE_CONVERT)]
    [TestFixture(TestNameFormat = "Convert.ToDateTime - {0}")]
    public class ConvertToDateTimeTests : ConvertTestBase<DateTime>
    {
        private static readonly DateTimeFormatInfo s_dateTimeFormatInfo = new DateTimeFormatInfo();

        private void DateTimeAssert(DateTime expected, DateTime actual, string message)
        {
            DateHelper.AssertDate(expected, actual, message);
        }

        [Test]
        public void FromString()
        {
            DateTime[] expectedValues = {
                new DateTime(1999, 12, 31, 23, 59, 59),
                new DateTime(100, 1, 1, 0, 0, 0),
                new DateTime(2216, 2, 29, 0, 0, 0),
                new DateTime(1, 1, 1, 0, 0, 0)
            };

            if (Utilities.BrowserHelper.IsPhantomJs())
            {
                // AppVeyor Chutzpah engine adjustment
                expectedValues[1] = new DateTime(1950, 2, 2, 4, 10, 50);
            }

            var dateTimeFormat = CultureInfo.CurrentCulture.DateTimeFormat;
            string pattern = dateTimeFormat.LongDatePattern + ' ' + dateTimeFormat.LongTimePattern;
            string[] testValues = new string[expectedValues.Length];

            for (int i = 0; i < expectedValues.Length; i++)
            {
                testValues[i] = expectedValues[i].ToString(pattern, dateTimeFormat);
            }

            VerifyFromString(Convert.ToDateTime, Convert.ToDateTime, testValues, expectedValues, DateTimeAssert);
            VerifyFromObject(Convert.ToDateTime, Convert.ToDateTime, testValues, expectedValues, DateTimeAssert);

            string[] formatExceptionValues =
            {
                "null",
                "201-5-14T00:00:00" // Regression test for case which was throwing IndexOutOfRangeException
            };

            VerifyFromStringThrows<FormatException>(Convert.ToDateTime, Convert.ToDateTime, formatExceptionValues);
        }

        [Test]
        public void FromStringWithCustomFormatProvider()
        {
            string[] testValues = { "1999/12/31 11:59:59 PM", "2005/01/01 12:00:00 AM", "1492/02/29 12:00:00 AM", "1930/01/01 12:00:00 AM" };
            DateTime[] expectedValues = { new DateTime(1999, 12, 31, 23, 59, 59), new DateTime(2005, 1, 1, 0, 0, 0), new DateTime(1492, 2, 29, 0, 0, 0), new DateTime(1930, 1, 1, 0, 0, 0) };
            Assert.AreEqual(expectedValues.Length, testValues.Length);

            for (int i = 0; i < testValues.Length; i++)
            {
                DateTime result = Convert.ToDateTime(testValues[i], s_dateTimeFormatInfo);
                Assert.AreEqual(expectedValues[i], result);
                result = Convert.ToDateTime((object)testValues[i], s_dateTimeFormatInfo);
                Assert.AreEqual(expectedValues[i], result);
            }

            //#348
            //string minDateExpected;
            //if (Utilities.BrowserHelper.IsFirefox())
            //{
            //    minDateExpected = "Mon Jan 01 0001";
            //}
            //else
            //{
            //    minDateExpected = "Mon Jan 01 1";
            //}

            //var minDate = Convert.ToDateTime(null);
            //Assert.AreEqual(minDateExpected, minDate.ToDateString());
        }

        [Test]
        public void FromDateTime()
        {
            DateTime[] expectedValues = { new DateTime(1999, 12, 31, 23, 59, 59), new DateTime(100, 1, 1, 0, 0, 0), new DateTime(1492, 2, 29, 0, 0, 0), new DateTime(1, 1, 1, 0, 0, 0) };
            for (int i = 0; i < expectedValues.Length; i++)
            {
                DateTime result = Convert.ToDateTime(expectedValues[i]);
                Assert.AreEqual(expectedValues[i], result);
            }
        }

        [Test]
        public void FromObject()
        {
            Assert.Throws(() => Convert.ToDateTime(new object()), err => err is InvalidCastException);
            Assert.Throws(() => Convert.ToDateTime(new object(), s_dateTimeFormatInfo), err => err is InvalidCastException);
        }

        [Test]
        public void FromBoolean()
        {
            Assert.Throws(() => Convert.ToDateTime(false), err => err is InvalidCastException);
        }

        [Test]
        public void FromChar()
        {
            Assert.Throws(() => Convert.ToDateTime('a'), err => err is InvalidCastException);
        }

        [Test]
        public void FromInt16()
        {
            Assert.Throws(() => Convert.ToDateTime((short)5), err => err is InvalidCastException);
        }

        [Test]
        public void FromInt32()
        {
            Assert.Throws(() => Convert.ToDateTime(5), err => err is InvalidCastException);
        }

        [Test]
        public void FromInt64()
        {
            Assert.Throws(() => Convert.ToDateTime((long)5), err => err is InvalidCastException);
        }

        [Test]
        public void FromUInt16()
        {
            Assert.Throws(() => Convert.ToDateTime((ushort)5), err => err is InvalidCastException);
        }

        [Test]
        public void FromUInt32()
        {
            Assert.Throws(() => Convert.ToDateTime((uint)5), err => err is InvalidCastException);
        }

        [Test]
        public void FromUInt64()
        {
            Assert.Throws(() => Convert.ToDateTime((ulong)5), err => err is InvalidCastException);
        }

        [Test]
        public void FromSingle()
        {
            Assert.Throws(() => Convert.ToDateTime(1.0f), err => err is InvalidCastException);
        }

        [Test]
        public void FromDouble()
        {
            Assert.Throws(() => Convert.ToDateTime(1.1), err => err is InvalidCastException);
        }

        [Test]
        public void FromDecimal()
        {
            Assert.Throws(() => Convert.ToDateTime(1.0m), err => err is InvalidCastException);
        }
    }
}