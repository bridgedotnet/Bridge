using System;
using System.Globalization;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_CULTUREINFO)]
    [TestFixture]
    public class CultureInfoTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var culture = CultureInfo.InvariantCulture;
            Assert.AreEqual("Bridge.CultureInfo", typeof(CultureInfo).GetClassName());
            Assert.True(culture is CultureInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var culture = CultureInfo.InvariantCulture;
            Assert.AreEqual(null, culture.GetFormat(typeof(int)));
            Assert.AreEqual(culture.NumberFormat, culture.GetFormat(typeof(NumberFormatInfo)));
            Assert.AreEqual(culture.DateTimeFormat, culture.GetFormat(typeof(DateTimeFormatInfo)));
        }

        [Test]
        public void InvariantWorks()
        {
            var culture = CultureInfo.InvariantCulture;
            Assert.AreEqual("iv", culture.Name);
            Assert.AreEqual(DateTimeFormatInfo.InvariantInfo, culture.DateTimeFormat);
            Assert.AreEqual(NumberFormatInfo.InvariantInfo, culture.NumberFormat);
        }
    }
}
