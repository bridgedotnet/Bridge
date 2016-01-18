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
            Assert.AreEqual(typeof(CultureInfo).GetClassName(), "Bridge.CultureInfo");
            Assert.True(culture is CultureInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var culture = CultureInfo.InvariantCulture;
            Assert.AreEqual(culture.GetFormat(typeof(int)), null);
            Assert.AreEqual(culture.GetFormat(typeof(NumberFormatInfo)), culture.NumberFormat);
            Assert.AreEqual(culture.GetFormat(typeof(DateTimeFormatInfo)), culture.DateTimeFormat);
        }

        [Test]
        public void InvariantWorks()
        {
            var culture = CultureInfo.InvariantCulture;
            Assert.AreEqual(culture.Name, "iv");
            Assert.AreEqual(culture.DateTimeFormat, DateTimeFormatInfo.InvariantInfo);
            Assert.AreEqual(culture.NumberFormat, NumberFormatInfo.InvariantInfo);
        }
    }
}
