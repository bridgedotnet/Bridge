using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_FLOAT)]
    [TestFixture(TestNameFormat = "Float - {0}")]
    public class SingleTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(float)0.5 is float);
            Assert.AreEqual("System.Single", typeof(float).FullName);
            Assert.False(typeof(float).IsClass);
            Assert.True(typeof(IComparable<float>).IsAssignableFrom(typeof(float)));
            Assert.True(typeof(IEquatable<float>).IsAssignableFrom(typeof(float)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(float)));
            object f = (float)0;
            Assert.True(f is float);
            Assert.True(f is IComparable<float>);
            Assert.True(f is IEquatable<float>);
            Assert.True(f is IFormattable);

            var interfaces = typeof(float).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<float>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<float>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<float>());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<float>());
        }

        [Test]
        public void ConstantsWork()
        {
            double zero = 0;
            Assert.True((float)(object)float.MinValue < -3.4e38 && (float)(object)float.MinValue > -3.5e38, "MinValue should be correct");
            Assert.True((float)(object)float.MaxValue > 3.4e38 && (float)(object)float.MaxValue < 3.5e38, "MaxValue should be correct");
            Assert.AreEqual(1.401298e-45, float.Epsilon, "Epsilon should be correct");
            Assert.True(float.IsNaN(float.NaN), "NaN should be correct");
            Assert.AreStrictEqual(1 / zero, float.PositiveInfinity, "PositiveInfinity should be correct");
            Assert.AreStrictEqual(-1 / zero, float.NegativeInfinity, "NegativeInfinity should be correct");
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new float());
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((float)291.0).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((float)291.0).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((float)291.0).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((float)291.0)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((float)291.0).LocaleFormat("x"), "123");
        //}

        [Test]
        public void ToStringWorks()
        {
            Assert.AreEqual("123", ((float)123.0).ToString());
        }

        [Test]
        public void ToExponentialWorks()
        {
            Assert.AreEqual("1.23e+2", ((float)123.0).ToExponential());
        }

        [Test]
        public void ToExponentialWithFractionalDigitsWorks()
        {
            Assert.AreEqual("1.2e+2", ((float)123.0).ToExponential(1));
        }

        [Test]
        public void ToFixed()
        {
            Assert.AreEqual("123", ((float)123.0).ToFixed());
        }

        [Test]
        public void ToFixedWithFractionalDigitsWorks()
        {
            Assert.AreEqual("123.0", ((float)123.0).ToFixed(1));
        }

        [Test]
        public void ToPrecisionWorks()
        {
            Assert.AreEqual("12345", ((float)12345.0).ToPrecision());
        }

        [Test]
        public void ToPrecisionWithPrecisionWorks()
        {
            Assert.AreEqual("1.2e+4", ((float)12345.0).ToPrecision(2));
        }

        [Test]
        public void IsPositiveInfinityWorks_SPI_1600()
        {
            float inf = 1.0f / 0.0f;
            // #1600
            Assert.True(float.IsPositiveInfinity(inf));

            Assert.False(float.IsPositiveInfinity(-inf));
            Assert.False(float.IsPositiveInfinity(0.0f));
            Assert.False(float.IsPositiveInfinity(Single.NaN));
        }

        [Test]
        public void IsNegativeInfinityWorks()
        {
            float inf = 1.0f / 0.0f;
            Assert.False(float.IsNegativeInfinity(inf));
            Assert.True(float.IsNegativeInfinity(-inf));
            Assert.False(float.IsNegativeInfinity(0.0f));
            Assert.False(float.IsNegativeInfinity(Single.NaN));
        }

        [Test]
        public void IsInfinityWorks()
        {
            float inf = 1.0f / 0.0f;
            Assert.True(float.IsInfinity(inf));
            Assert.True(float.IsInfinity(-inf));
            Assert.False(float.IsInfinity(0.0f));
            Assert.False(float.IsInfinity(Single.NaN));
        }

        [Test]
        public void IsFiniteWorks()
        {
            float zero = 0, one = 1;
            Assert.True(float.IsFinite(one));
            Assert.False(float.IsFinite(one / zero));
            Assert.False(float.IsFinite(zero / zero));
        }

        [Test]
        public void IsNaNWorks()
        {
            float zero = 0, one = 1;
            Assert.False(float.IsNaN(one));
            Assert.False(float.IsNaN(one / zero));
            Assert.True(float.IsNaN(zero / zero));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((float)0).GetHashCode(), ((float)0).GetHashCode());
            Assert.AreEqual(((float)1).GetHashCode(), ((float)1).GetHashCode());
            Assert.AreNotEqual(((float)1).GetHashCode(), ((float)0).GetHashCode());
            Assert.AreNotEqual(((float)0.5).GetHashCode(), ((float)0).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((float)0).Equals((object)(float)0));
            Assert.False(((float)1).Equals((object)(float)0));
            Assert.False(((float)0).Equals((object)(float)0.5));
            Assert.True(((float)1).Equals((object)(float)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((float)0).Equals((float)0));
            Assert.False(((float)1).Equals((float)0));
            Assert.False(((float)0).Equals((float)0.5));
            Assert.True(((float)1).Equals((float)1));

            Assert.True(((IEquatable<float>)((float)0)).Equals((float)0));
            Assert.False(((IEquatable<float>)((float)1)).Equals((float)0));
            Assert.False(((IEquatable<float>)((float)0)).Equals((float)0.5));
            Assert.True(((IEquatable<float>)((float)1)).Equals((float)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((float)0).CompareTo((float)0) == 0);
            Assert.True(((float)1).CompareTo((float)0) > 0);
            Assert.True(((float)0).CompareTo((float)0.5) < 0);
            Assert.True(((float)1).CompareTo((float)1) == 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<float>)((float)0)).CompareTo((float)0) == 0);
            Assert.True(((IComparable<float>)((float)1)).CompareTo((float)0) > 0);
            Assert.True(((IComparable<float>)((float)0)).CompareTo((float)0.5) < 0);
            Assert.True(((IComparable<float>)((float)1)).CompareTo((float)1) == 0);
        }
    }
}