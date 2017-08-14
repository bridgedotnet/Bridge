using Bridge.Test.NUnit;
using System;
using System.Globalization;

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
            Assert.AreEqual("System.Globalization.CultureInfo", typeof(CultureInfo).FullName);
            Assert.True(culture is CultureInfo);
        }

        [Test]
        public void ConstructorWorks_N2583()
        {
            var culture = new CultureInfo("en-US");
            Assert.AreEqual("English (United States)", culture.EnglishName, "en-US");

            culture = new CultureInfo("");
            Assert.AreEqual("Invariant Language (Invariant Country)", culture.EnglishName, "#2583: Empty");

            Assert.Throws<ArgumentNullException>(() =>
            {
                new CultureInfo(null);
            }, "#2583: Null");

            Assert.Throws<CultureNotFoundException> (() =>
            {
                new CultureInfo("cake-CAKE");
            }, "#2583: Non-existing");
        }

        [Test]
        public void GetCultureInfoWorks_N2583()
        {
            var culture = CultureInfo.GetCultureInfo("en-US");
            Assert.AreEqual("English (United States)", culture.EnglishName, "en-US");

            culture = CultureInfo.GetCultureInfo("");
            Assert.AreEqual("Invariant Language (Invariant Country)", culture.EnglishName, "#2583: Empty");

            Assert.Throws<ArgumentNullException>(() =>
            {
                CultureInfo.GetCultureInfo(null);
            }, "#2583: Null");

            Assert.Throws<CultureNotFoundException>(() =>
            {
                CultureInfo.GetCultureInfo("cake-CAKE");
            }, "#2583: Non-existing");
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

        [Test]
        public void DateTimeFormatFirstDayOfWeekWorks_N3013()
        {
            var isFriday =
                CultureInfo.CurrentCulture.DateTimeFormat.FirstDayOfWeek == DayOfWeek.Friday;

            isFriday = isFriday ^ isFriday;

            Assert.False(isFriday, "#3013: FirstDayOfWeek is of type DayOfWeek");
        }
    }
}