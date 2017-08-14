﻿using Bridge.Test.NUnit;
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