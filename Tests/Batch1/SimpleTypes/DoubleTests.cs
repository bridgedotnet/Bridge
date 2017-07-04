using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_DOUBLE)]
    [TestFixture(TestNameFormat = "Double - {0}")]
    public class DoubleTests
    {
        private CultureInfo defaultCulture;

        [SetUp]
        public void SaveCurrentCulture()
        {
            defaultCulture = CultureInfo.CurrentCulture;
        }

        [TearDown]
        public void RestoreCulture()
        {
            CultureInfo.CurrentCulture = defaultCulture;
        }

        private void SetRuCulture()
        {
            CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(double)0.5 is double);
            Assert.AreEqual("System.Double", typeof(double).FullName);
            object d = (double)0;
            Assert.True((object)d is double);
            Assert.True((object)d is IFormattable);
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<double>());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreEqual(0, Activator.CreateInstance<double>());
        }

        [Test]
        public void ConstantsWork()
        {
            double zero = 0;
            Assert.True(double.MaxValue > (double)(object)1.7e+308, "MaxValue should be correct");
            Assert.AreEqual(4.94065645841247E-324, double.Epsilon, "MinValue should be correct");
            Assert.True(double.IsNaN(double.NaN), "NaN should be correct");
            Assert.AreStrictEqual(1 / zero, double.PositiveInfinity, "PositiveInfinity should be correct");
            Assert.AreStrictEqual(-1 / zero, double.NegativeInfinity, "NegativeInfinity should be correct");
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new double());
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", (291.0).Format("x"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", 291.0.ToString("x"));
        }

        [Test]
        public void ToStringWorks()
        {
            Assert.AreEqual("123", (123.0).ToString());
        }

        [Test]
        public void ToExponentialWorks()
        {
            Assert.AreEqual("1.23e+2", (123.0).ToExponential());
        }

        [Test]
        public void ToExponentialWithFractionalDigitsWorks()
        {
            Assert.AreEqual("1.2e+2", (123.0).ToExponential(1));
        }

        [Test]
        public void ToFixed()
        {
            Assert.AreEqual("123", (123.0).ToFixed());
        }

        [Test]
        public void ToFixedWithFractionalDigitsWorks()
        {
            Assert.AreEqual("123.0", (123.0).ToFixed(1));
        }

        [Test]
        public void ToPrecisionWorks()
        {
            Assert.AreEqual("12345", (12345.0).ToPrecision());
        }

        [Test]
        public void ToPrecisionWithPrecisionWorks()
        {
            Assert.AreEqual("1.2e+4", (12345.0).ToPrecision(2));
        }

        [Test]
        public void IsPositiveInfinityWorks()
        {
            double inf = 1.0 / 0.0;
            Assert.False(double.IsPositiveInfinity(-inf), "-inf");
            Assert.False(double.IsPositiveInfinity(0.0), "0.0");
            Assert.False(double.IsPositiveInfinity(Double.NaN), "Double.NaN");
        }

        [Test]
        public void IsNegativeInfinityWorks()
        {
            double inf = 1.0 / 0.0;
            Assert.False(double.IsNegativeInfinity(inf));
            Assert.True(double.IsNegativeInfinity(-inf));
            Assert.False(double.IsNegativeInfinity(0.0));
            Assert.False(double.IsNegativeInfinity(Double.NaN));
        }

        [Test]
        public void IsInfinityWorks()
        {
            double inf = 1.0 / 0.0;
            Assert.True(double.IsInfinity(inf));
            Assert.True(double.IsInfinity(-inf));
            Assert.False(double.IsInfinity(0.0));
            Assert.False(double.IsInfinity(Double.NaN));
        }

        [Test]
        public void IsFiniteWorks()
        {
            double zero = 0, one = 1;
            Assert.True(double.IsFinite(one));
            Assert.False(double.IsFinite(one / zero));
            Assert.False(double.IsFinite(zero / zero));
        }

        [Test]
        public void IsNaNWorks()
        {
            double zero = 0, one = 1;
            Assert.False(double.IsNaN(one));
            Assert.False(double.IsNaN(one / zero));
            Assert.True(double.IsNaN(zero / zero));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((double)0).GetHashCode(), ((double)0).GetHashCode());
            Assert.AreEqual(((double)1).GetHashCode(), ((double)1).GetHashCode());
            Assert.AreNotEqual(((double)1).GetHashCode(), ((double)0).GetHashCode());
            Assert.AreNotEqual(((double)0.5).GetHashCode(), ((double)0).GetHashCode());
        }

        [Test]
        public void ObjectEqualsWorks()
        {
            Assert.True(((double)0).Equals((object)(double)0));
            Assert.False(((double)1).Equals((object)(double)0));
            Assert.False(((double)0).Equals((object)(double)0.5));
            Assert.True(((double)1).Equals((object)(double)1));
        }

        [Test]
        public void DoubleEqualsWorks()
        {
            Assert.True(((double)0).Equals((double)0));
            Assert.False(((double)1).Equals((double)0));
            Assert.False(((double)0).Equals((double)0.5));
            Assert.True(((double)1).Equals((double)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((double)0).CompareTo((double)0) == 0);
            Assert.True(((double)1).CompareTo((double)0) > 0);
            Assert.True(((double)0).CompareTo((double)0.5) < 0);
            Assert.True(((double)1).CompareTo((double)1) == 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<double>)((double)0)).CompareTo((double)0) == 0);
            Assert.True(((IComparable<double>)((double)1)).CompareTo((double)0) > 0);
            Assert.True(((IComparable<double>)((double)0)).CompareTo((double)0.5) < 0);
            Assert.True(((IComparable<double>)((double)1)).CompareTo((double)1) == 0);
        }

        [Test]
        public void ParseCurrentCultureWorks()
        {
            Assert.AreEqual(10.0, double.Parse("10.0"), "1");
            Assert.AreEqual(1010.0, double.Parse("  10,10  "), "2");
            Assert.AreEqual(10210.0, double.Parse("10,2,10"), "3");
            Assert.AreEqual(1011111.0, double.Parse("10,1,1,1,1,1"), "4");
            Assert.AreEqual(1000.0, double.Parse("10,00"), "5");
            Assert.AreEqual(10102.5, double.Parse("10,10,2.5"), "6");
            Assert.AreEqual(double.NaN, double.Parse(CultureInfo.CurrentCulture.NumberFormat.NaNSymbol), "7" + CultureInfo.CurrentCulture.NumberFormat.NaNSymbol);
            Assert.AreEqual(double.NegativeInfinity, double.Parse(CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol), "8" + CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol);
            Assert.AreEqual(double.PositiveInfinity, double.Parse(CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol), "9" + CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol);
            Assert.AreEqual(-123.0, double.Parse("-123"), "10");
            Assert.AreEqual(123.0, double.Parse("123"), "11");
            Assert.AreEqual(123.0, double.Parse("  123  "), "12");
            Assert.AreEqual(0.0, double.Parse("0"), "13");
            Assert.AreEqual(567.89, double.Parse("567.89"), "14");
            Assert.AreEqual(-567.89, double.Parse("-567.89"), "15");
            Assert.AreEqual(1E23, double.Parse("1E23"), "16");
        }

        [Test]
        public void ParseCurrentCultureThrows()
        {
            Assert.Throws<FormatException>(() => { double.Parse(""); }, "1");
            Assert.Throws<FormatException>(() => { double.Parse("b"); }, "2");
            Assert.Throws<FormatException>(() => { double.Parse("10a"); }, "3");
            Assert.Throws<FormatException>(() => { double.Parse("a10"); }, "4");
            Assert.Throws<FormatException>(() => { double.Parse("10.2.10"); }, "5");
            Assert.Throws<FormatException>(() => { double.Parse("10,2.5,0"); }, "6");
            Assert.Throws<FormatException>(() => { double.Parse("10,2.5,0.0"); }, "7");
            Assert.Throws<FormatException>(() => { double.Parse("1e10e"); }, "8");
            Assert.Throws<ArgumentNullException>(() => { double.Parse(null); }, "9");
            Assert.Throws<FormatException>(() => { double.Parse(" "); }, "10");
            Assert.Throws<FormatException>(() => { double.Parse("Garbage"); }, "11");
            Assert.Throws<FormatException>(() => { double.Parse("(123)"); }, "12");
            Assert.Throws<FormatException>(() => { double.Parse("$1000"); }, "13");
        }

        [Test]
        public void ParseRuCultureWorks()
        {
            SetRuCulture();

            Assert.AreEqual(10.0, double.Parse("10,0"), "1");
            Assert.AreEqual(10.1, double.Parse("  10,10  "), "2");
            Assert.AreEqual(10.0, double.Parse("10,00"), "3");
            //Assert.AreEqual(double.NaN, double.Parse(CultureInfo.CurrentCulture.NumberFormat.NaNSymbol), "4" + CultureInfo.CurrentCulture.NumberFormat.NaNSymbol);
            Assert.AreEqual(double.NegativeInfinity, double.Parse(CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol), "5" + CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol);
            Assert.AreEqual(double.PositiveInfinity, double.Parse(CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol), "6" + CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol);
            Assert.AreEqual(-123.0, double.Parse("-123"), "7");
            Assert.AreEqual(123.0, double.Parse("123"), "8");
            Assert.AreEqual(123.0, double.Parse("  123  "), "9");
            Assert.AreEqual(0.0, double.Parse("0"), "10");
            Assert.AreEqual(567.89, double.Parse("567,89"), "11");
            Assert.AreEqual(-567.89, double.Parse("-567,89"), "12");
            Assert.AreEqual(1E23, double.Parse("1E23"), "13");
        }

        [Test]
        public void ParseRuCultureThrows()
        {
            SetRuCulture();

            Assert.Throws<FormatException>(() => { double.Parse(""); }, "1");
            Assert.Throws<FormatException>(() => { double.Parse("b"); }, "2");
            Assert.Throws<FormatException>(() => { double.Parse("10a"); }, "3");
            Assert.Throws<FormatException>(() => { double.Parse("a10"); }, "4");
            Assert.Throws<FormatException>(() => { double.Parse("10.2.10"); }, "5");
            Assert.Throws<FormatException>(() => { double.Parse("10,2.5,0"); }, "6");
            Assert.Throws<FormatException>(() => { double.Parse("10,2.5,0.0"); }, "7");
            Assert.Throws<FormatException>(() => { double.Parse("1e10e"); }, "8");
            Assert.Throws<FormatException>(() => { double.Parse("  10.10  "); }, "9");
            Assert.Throws<FormatException>(() => { double.Parse("10,2,10"); }, "10");
            Assert.Throws<FormatException>(() => { double.Parse("10,1,1,1,1,1"); }, "11");
            Assert.Throws<FormatException>(() => { double.Parse("10,10,2.5"); }, "12");
            Assert.Throws<ArgumentNullException>(() => { double.Parse(null); }, "13");
            Assert.Throws<FormatException>(() => { double.Parse(" "); }, "14");
            Assert.Throws<FormatException>(() => { double.Parse("Garbage"); }, "15");
            Assert.Throws<FormatException>(() => { double.Parse("(123)"); }, "16");
            Assert.Throws<FormatException>(() => { double.Parse("$1000"); }, "17");
        }

        [Test]
        public void TryParseCurrentCultureWorks()
        {
            AssertTryParse(true, 10.0, "10", "t1");
            AssertTryParse(true, 1010.0, "  10,10  ", "t2");
            AssertTryParse(true, 10210.0, "10,2,10", "t3");
            AssertTryParse(true, 1011111.0, "10,1,1,1,1,1", "t4");
            AssertTryParse(true, 1000.0, "10,00", "t5");
            AssertTryParse(true, 10102.5, "10,10,2.5", "t6");
            AssertTryParse(true, double.NaN, CultureInfo.CurrentCulture.NumberFormat.NaNSymbol, "t7" + CultureInfo.CurrentCulture.NumberFormat.NaNSymbol);
            AssertTryParse(true, double.NegativeInfinity, CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol, "t8" + CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol);
            AssertTryParse(true, double.PositiveInfinity, CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol, "t9" + CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol);
            AssertTryParse(true, -123.0, "-123", "t10");
            AssertTryParse(true, 123.0, "123", "t11");
            AssertTryParse(true, 123.0, "  123  ", "t12");
            AssertTryParse(true, 0.0, "0", "t13");
            AssertTryParse(true, 567.89, "567.89", "t14");
            AssertTryParse(true, -567.89, "-567.89", "t15");
            AssertTryParse(true, 1E23, "1E23", "t16");

            AssertTryParse(false, 0.0, "", "f1");
            AssertTryParse(false, 0.0, "b", "f2");
            AssertTryParse(false, 0.0, "10a", "f3");
            AssertTryParse(false, 0.0, "a10", "f4");
            AssertTryParse(false, 0.0, "10.2.10", "f5");
            AssertTryParse(false, 0.0, "10,2.5,0", "f6");
            AssertTryParse(false, 0.0, "10,2.5,0.0", "f7");
            AssertTryParse(false, 0.0, "1e10e", "f8");
            AssertTryParse(false, 0.0, null, "f9");
            AssertTryParse(false, 0.0, " ", "f10");
            AssertTryParse(false, 0.0, "Garbage", "f11");
            AssertTryParse(false, 0.0, "(123)", "f12");
            AssertTryParse(false, 0.0, "$1000", "f13");
        }

        [Test]
        public void TryParseRuCultureWorks()
        {
            SetRuCulture();

            AssertTryParse(true, 10.0, "10", "t1");
            AssertTryParse(true, 10.1, "  10,10  ", "t2");
            AssertTryParse(true, 10.0, "10,00", "t3");
            AssertTryParse(true, double.NegativeInfinity, CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol, "t5" + CultureInfo.CurrentCulture.NumberFormat.NegativeInfinitySymbol);
            AssertTryParse(true, double.PositiveInfinity, CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol, "t6" + CultureInfo.CurrentCulture.NumberFormat.PositiveInfinitySymbol);
            AssertTryParse(true, -123.0, "-123", "t7");
            AssertTryParse(true, 123.0, "123", "t8");
            AssertTryParse(true, 123.0, "  123  ", "t9");
            AssertTryParse(true, 0.0, "0", "t10");
            AssertTryParse(true, 567.89, "567,89", "t11");
            AssertTryParse(true, -567.89, "-567,89", "t12");
            AssertTryParse(true, 1E23, "1E23", "t13");

            AssertTryParse(false, 0.0, CultureInfo.CurrentCulture.NumberFormat.NaNSymbol, "t4" + CultureInfo.CurrentCulture.NumberFormat.NaNSymbol);
            AssertTryParse(false, 0.0, "", "f1");
            AssertTryParse(false, 0.0, "b", "f2");
            AssertTryParse(false, 0.0, "10a", "f3");
            AssertTryParse(false, 0.0, "a10", "f4");
            AssertTryParse(false, 0.0, "10.2.10", "f5");
            AssertTryParse(false, 0.0, "10,2.5,0", "f6");
            AssertTryParse(false, 0.0, "10,2.5,0.0", "f7");
            AssertTryParse(false, 0.0, "1e10e", "f8");
            AssertTryParse(false, 0.0, "  10.10  ", "f9");
            AssertTryParse(false, 0.0, "10,2,10", "f10");
            AssertTryParse(false, 0.0, "10,1,1,1,1,1", "f11");
            AssertTryParse(false, 0.0, "10,10,2.5", "f12");
            AssertTryParse(false, 0.0, null, "f13");
            AssertTryParse(false, 0.0, " ", "f14");
            AssertTryParse(false, 0.0, "Garbage", "f15");
            AssertTryParse(false, 0.0, "(123)", "f16");
            AssertTryParse(false, 0.0, "$1000", "f17");
        }

        private void AssertTryParse(bool r, double expected, string s, string message)
        {
            double d;
            var b = double.TryParse(s, out d);

            Assert.AreEqual(r, b, message);
            Assert.AreEqual(expected, d, message);
        }
    }
}