using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "StringTests - {0}")]
    public class StringTests
    {
        private class MyFormattable : IFormattable
        {
            public string ToString(string format, IFormatProvider formatProvider)
            {
                return "Formatted: " + format + ", " + (formatProvider == null ? "null formatProvider" : formatProvider.GetType().FullName);
            }
        }

        private class MyFormatProvider : IFormatProvider
        {
            public object GetFormat(Type type)
            {
                return CultureInfo.InvariantCulture.GetFormat(type);
            }
        }

        [Test]
        public void FormatWorksWithIFormattable_SPI_1598()
        {
            // #1598
            Assert.AreEqual("Formatted: FMT, null formatProvider", string.Format("{0:FMT}", new MyFormattable()));
        }

        [Test]
        public void FormatWorksWithIFormattableAndFormatProvider_SPI_1598()
        {
            // #1598
            Assert.AreEqual("Formatted: FMT, StringTests+MyFormatProvider", string.Format(new MyFormatProvider(), "{0:FMT}", new MyFormattable()));
        }
    }
}