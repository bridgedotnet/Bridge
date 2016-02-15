using System;
using System.Globalization;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest
{
    [Category(Constants.MODULE_NUMBERFORMATINFO)]
    [TestFixture]
    public class NumberFormatInfoTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            var format = NumberFormatInfo.InvariantInfo;
            Assert.AreEqual("Bridge.NumberFormatInfo", typeof(NumberFormatInfo).GetClassName());
            Assert.True(format is NumberFormatInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var format = NumberFormatInfo.InvariantInfo;
            Assert.AreEqual(null, format.GetFormat(typeof(int)));
            Assert.AreEqual(format, format.GetFormat(typeof(NumberFormatInfo)));
        }

        [Test]
        public void InvariantWorks()
        {
            var format = NumberFormatInfo.InvariantInfo;
            Assert.AreEqual("NaN", format.NaNSymbol);
            Assert.AreEqual("-", format.NegativeSign);
            Assert.AreEqual("+", format.PositiveSign);
            Assert.AreEqual("-Infinity", format.NegativeInfinitySymbol);
            Assert.AreEqual("Infinity", format.PositiveInfinitySymbol);

            Assert.AreEqual("%", format.PercentSymbol);
            Assert.AreDeepEqual(new[] { 3 }, format.PercentGroupSizes);
            Assert.AreEqual(2, format.PercentDecimalDigits);
            Assert.AreEqual(".", format.PercentDecimalSeparator);
            Assert.AreEqual(",", format.PercentGroupSeparator);
            Assert.AreEqual(0, format.PercentPositivePattern);
            Assert.AreEqual(0, format.PercentNegativePattern);

            Assert.AreEqual("¤", format.CurrencySymbol);
            Assert.AreDeepEqual(new[] { 3 }, format.CurrencyGroupSizes);
            Assert.AreEqual(2, format.CurrencyDecimalDigits);
            Assert.AreEqual(".", format.CurrencyDecimalSeparator);
            Assert.AreEqual(",", format.CurrencyGroupSeparator);
            Assert.AreEqual(0, format.CurrencyNegativePattern);
            Assert.AreEqual(0, format.CurrencyPositivePattern);

            Assert.AreDeepEqual(new[] { 3 }, format.NumberGroupSizes);
            Assert.AreEqual(2, format.NumberDecimalDigits);
            Assert.AreEqual(".", format.NumberDecimalSeparator);
            Assert.AreEqual(",", format.NumberGroupSeparator);
        }
    }
}
