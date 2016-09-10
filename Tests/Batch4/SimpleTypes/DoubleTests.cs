using Bridge.Test;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "DoubleTests - {0}")]
    public class DoubleTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(double)0.5 is double);
            Assert.AreEqual("System.Double", typeof(double).FullName);
            Assert.False(typeof(double).IsClass);
            Assert.True(typeof(IComparable<double>).IsAssignableFrom(typeof(double)));
            Assert.True(typeof(IEquatable<double>).IsAssignableFrom(typeof(double)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(double)));
            object d = (double)0;
            Assert.True((object)d is double);
            Assert.True((object)d is IComparable<double>);
            Assert.True((object)d is IEquatable<double>);
            Assert.True((object)d is IFormattable);

            var interfaces = typeof(double).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<double>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<double>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
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
            Assert.AreStrictEqual(0, Activator.CreateInstance<double>());
        }

        [Test]
        public void ConstantsWork()
        {
            double zero = 0;
            Assert.True(double.MinValue < (double)(object)-1.7e+308, "MinValue should be correct");
            Assert.True(double.MaxValue > (double)(object)1.7e+308, "MaxValue should be correct");
            // Not C# API
            //Assert.AreEqual(double.JsMinValue, 5e-324, "MinValue should be correct");
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
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", (291.0).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", (291.0).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)(291.0)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual((291.0).LocaleFormat("x"), "123");
        //}

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
        public void IsPositiveInfinityWorks_SPI_1600()
        {
            double inf = 1.0 / 0.0;

            // #1600
            Assert.True(double.IsPositiveInfinity(inf));
            Assert.False(double.IsPositiveInfinity(-inf));
            Assert.False(double.IsPositiveInfinity(0.0));
            Assert.False(double.IsPositiveInfinity(Double.NaN));
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
        public void EqualsWorks()
        {
            Assert.True(((double)0).Equals((object)(double)0));
            Assert.False(((double)1).Equals((object)(double)0));
            Assert.False(((double)0).Equals((object)(double)0.5));
            Assert.True(((double)1).Equals((object)(double)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((double)0).Equals((double)0));
            Assert.False(((double)1).Equals((double)0));
            Assert.False(((double)0).Equals((double)0.5));
            Assert.True(((double)1).Equals((double)1));

            Assert.True(((IEquatable<double>)((double)0)).Equals((double)0));
            Assert.False(((IEquatable<double>)((double)1)).Equals((double)0));
            Assert.False(((IEquatable<double>)((double)0)).Equals((double)0.5));
            Assert.True(((IEquatable<double>)((double)1)).Equals((double)1));
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
    }
}
