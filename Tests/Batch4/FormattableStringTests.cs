// #1622
using Bridge.Test.NUnit;
using System;
using System.Globalization;
using System.Runtime.CompilerServices;

namespace Bridge.ClientTest.Batch4
{
    [TestFixture(TestNameFormat = "FormattableStringTests - {0}")]
    public class FormattableStringTests
    {
        private class MyFormattable : IFormattable
        {
            public string ToString(string format, IFormatProvider formatProvider)
            {
                return "Formatted: " + (!string.IsNullOrEmpty(format) ? format + ", " : "") + formatProvider.GetType().Name;
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
        public void ToStringWithFormatProviderWorks_SPI_1651()
        {
            var s = FormattableStringFactory.Create("x = {0}, y = {0:FMT}", new MyFormattable());
            // #1651
            Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", s.ToString(new MyFormatProvider()));
        }

        [Test]
        public void IFormattableToStringWorks_SPI_1633_1651()
        {
            IFormattable s = FormattableStringFactory.Create("x = {0}, y = {0:FMT}", new MyFormattable());
            // #1633
            // #1651
            Assert.AreEqual("x = Formatted: MyFormatProvider, y = Formatted: FMT, MyFormatProvider", s.ToString(null, new MyFormatProvider()));
        }
    }
}