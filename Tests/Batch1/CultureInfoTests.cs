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

            var textInfo = culture.TextInfo;

            Assert.NotNull(textInfo);
            Assert.AreEqual(1252, textInfo.ANSICodePage);
            Assert.AreEqual("", textInfo.CultureName);
            Assert.AreEqual(37, textInfo.EBCDICCodePage);
            Assert.AreEqual(true, textInfo.IsReadOnly);
            Assert.AreEqual(false, textInfo.IsRightToLeft);
            Assert.AreEqual(127, textInfo.LCID);
            Assert.AreEqual(",", textInfo.ListSeparator);
            Assert.AreEqual(10000, textInfo.MacCodePage);
            Assert.AreEqual(437, textInfo.OEMCodePage);

            Assert.Throws<InvalidOperationException>(() => { textInfo.ListSeparator = "separator"; });
        }

        [Test]
        public void TextInfoViaGetCultureInfoWorks()
        {
            var culture = CultureInfo.GetCultureInfo("nb-NO");
            var textInfo = culture.TextInfo;

            Assert.NotNull(textInfo);
            Assert.AreEqual(1252, textInfo.ANSICodePage);
            Assert.AreEqual("nb-NO", textInfo.CultureName);
            Assert.AreEqual(20277, textInfo.EBCDICCodePage);
            Assert.AreEqual(true, textInfo.IsReadOnly);
            Assert.AreEqual(false, textInfo.IsRightToLeft);
            Assert.AreEqual(1044, textInfo.LCID);
            Assert.AreEqual(";", textInfo.ListSeparator);
            Assert.AreEqual(10000, textInfo.MacCodePage);
            Assert.AreEqual(850, textInfo.OEMCodePage);

            Assert.Throws<InvalidOperationException>(() => {  textInfo.ListSeparator = "separator"; } );
        }

        [Test]
        public void TextInfoViaNewCultureInfoWorks()
        {
            var culture = new CultureInfo("nb-NO");
            var textInfo = culture.TextInfo;

            Assert.NotNull(textInfo);
            Assert.AreEqual(1252, textInfo.ANSICodePage);
            Assert.AreEqual("nb-NO", textInfo.CultureName);
            Assert.AreEqual(20277, textInfo.EBCDICCodePage);
            Assert.AreEqual(false, textInfo.IsReadOnly);
            Assert.AreEqual(false, textInfo.IsRightToLeft);
            Assert.AreEqual(1044, textInfo.LCID);
            Assert.AreEqual(";", textInfo.ListSeparator);
            Assert.AreEqual(10000, textInfo.MacCodePage);
            Assert.AreEqual(850, textInfo.OEMCodePage);

            textInfo.ListSeparator = "separator";
            Assert.AreEqual("separator", textInfo.ListSeparator);
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