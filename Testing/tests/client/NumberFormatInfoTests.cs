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
            Assert.AreEqual(typeof(NumberFormatInfo).GetClassName(), "Bridge.NumberFormatInfo");
            Assert.True(format is NumberFormatInfo);
        }

        [Test]
        public void GetFormatWorks()
        {
            var format = NumberFormatInfo.InvariantInfo;
            Assert.AreEqual(format.GetFormat(typeof(int)), null);
            Assert.AreEqual(format.GetFormat(typeof(NumberFormatInfo)), format);
        }

        [Test]
        public void InvariantWorks()
        {
            var format = NumberFormatInfo.InvariantInfo;
            Assert.AreEqual(format.NaNSymbol, "NaN");
            Assert.AreEqual(format.NegativeSign, "-");
            Assert.AreEqual(format.PositiveSign, "+");
            Assert.AreEqual(format.NegativeInfinitySymbol, "-Infinity");
            Assert.AreEqual(format.PositiveInfinitySymbol, "Infinity");

            Assert.AreEqual(format.PercentSymbol, "%");
            Assert.AreDeepEqual(format.PercentGroupSizes, new[] { 3 });
            Assert.AreEqual(format.PercentDecimalDigits, 2);
            Assert.AreEqual(format.PercentDecimalSeparator, ".");
            Assert.AreEqual(format.PercentGroupSeparator, ",");
            Assert.AreEqual(format.PercentPositivePattern, 0);
            Assert.AreEqual(format.PercentNegativePattern, 0);

            Assert.AreEqual(format.CurrencySymbol, "¤");
            Assert.AreDeepEqual(format.CurrencyGroupSizes, new[] { 3 });
            Assert.AreEqual(format.CurrencyDecimalDigits, 2);
            Assert.AreEqual(format.CurrencyDecimalSeparator, ".");
            Assert.AreEqual(format.CurrencyGroupSeparator, ",");
            Assert.AreEqual(format.CurrencyNegativePattern, 0);
            Assert.AreEqual(format.CurrencyPositivePattern, 0);

            Assert.AreDeepEqual(format.NumberGroupSizes, new[] { 3 });
            Assert.AreEqual(format.NumberDecimalDigits, 2);
            Assert.AreEqual(format.NumberDecimalSeparator, ".");
            Assert.AreEqual(format.NumberGroupSeparator, ",");
        }
    }
}
