using Bridge.Test;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "UInt64Tests - {0}")]
    public class UInt64Tests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(ulong)0 is ulong);
            Assert.False((object)0.5 is ulong);
            Assert.AreEqual("System.UInt64", typeof(ulong).FullName);
            Assert.False(typeof(ulong).IsClass);
            Assert.True(typeof(IComparable<ulong>).IsAssignableFrom(typeof(ulong)));
            Assert.True(typeof(IEquatable<ulong>).IsAssignableFrom(typeof(ulong)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(ulong)));
            object l = (ulong)0;
            Assert.True(l is ulong);
            Assert.True(l is IComparable<ulong>);
            Assert.True(l is IEquatable<ulong>);
            Assert.True(l is IFormattable);

            var interfaces = typeof(ulong).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<ulong>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<ulong>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            long i1 = -1, i2 = 0, i3 = 234, i4 = 9223372036854775000;
            long? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

            unchecked
            {
                Assert.True((ulong)i1 > 1e18, "-1 unchecked");
                Assert.AreEqual(0UL, (ulong)i2, "0 unchecked");
                Assert.AreEqual(234UL, (ulong)i3, "234 unchecked");
                Assert.AreEqual(9223372036854775000UL, (ulong)i4, "9223372036854775000 unchecked");

                Assert.True((ulong?)ni1 > 1e18, "nullable -1 unchecked");
                Assert.AreEqual(0UL, (ulong?)ni2, "nullable 0 unchecked");
                Assert.AreEqual(234UL, (ulong?)ni3, "nullable 234 unchecked");
                Assert.AreEqual(9223372036854775000UL, (ulong?)ni4, "nullable 9223372036854775000 unchecked");
                Assert.AreEqual(null, (ulong?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ulong)i1;
                }, "-1 checked");
                Assert.AreEqual(0UL, (ulong)i2, "0 checked");
                Assert.AreEqual(234UL, (ulong)i3, "234 checked");
                Assert.AreEqual(9223372036854775000UL, (ulong)i4, "9223372036854775000 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ulong?)ni1;
                }, "nullable -1 checked");
                Assert.AreEqual(0UL, (ulong?)ni2, "nullable 0 checked");
                Assert.AreEqual(234UL, (ulong?)ni3, "nullable 234 checked");
                Assert.AreEqual(9223372036854775000UL, (ulong?)ni4, "nullable 9223372036854775000 checked");
                Assert.AreEqual(null, (ulong?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreEqual(0UL, GetDefaultValue<ulong>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreEqual(0UL, new ulong());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreEqual(0UL, Activator.CreateInstance<ulong>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(0UL, ulong.MinValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((ulong)0x123).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((ulong)0x123).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((ulong)0x123).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((ulong)0x123)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((ulong)0x123).LocaleFormat("x"), "123");
        //}

        [Test]
        public void CastingOfLargeValuesToUInt64Works_SPI_1591()
        {
            double d1 = 5e9 + 0.5, d2 = -d1;
            Assert.AreEqual(5000000000UL, (ulong)d1, "Positive");
            // #1591
            Assert.True((ulong)d2 > int.MaxValue, "Negative");
        }

        [Test]
        public void DivisionOfLargeUInt64Works()
        {
            ulong v1 = 50000000000L, v2 = 3;
            Assert.AreEqual(16666666666UL, v1 / v2);
        }

        [Test]
        public void TryParseWorks()
        {
            ulong numberResult;
            bool result = ulong.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.AreEqual(23445UL, numberResult);

            result = ulong.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);

            result = ulong.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);

            result = ulong.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);

            result = ulong.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);

            result = ulong.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);

            result = ulong.TryParse("100000000000000000000", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0UL, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(23445UL, ulong.Parse("23445"));
            Assert.Throws<FormatException>(() => ulong.Parse(""));
            Assert.Throws<ArgumentNullException>(() => ulong.Parse(null));
            Assert.Throws<FormatException>(() => ulong.Parse("notanumber"));
            Assert.Throws<OverflowException>(() => ulong.Parse("-1"));
            Assert.Throws<FormatException>(() => ulong.Parse("2.5"));
            Assert.Throws<OverflowException>(() => ulong.Parse("100000000000000000000"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((ulong)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((ulong)123).ToString(10));
            Assert.AreEqual("123", ((ulong)0x123).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((ulong)0).GetHashCode(), ((ulong)0).GetHashCode());
            Assert.AreEqual(((ulong)1).GetHashCode(), ((ulong)1).GetHashCode());
            Assert.AreNotEqual(((ulong)1).GetHashCode(), ((ulong)0).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((ulong)0).Equals((object)(ulong)0));
            Assert.False(((ulong)1).Equals((object)(ulong)0));
            Assert.False(((ulong)0).Equals((object)(ulong)1));
            Assert.True(((ulong)1).Equals((object)(ulong)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((ulong)0).Equals((ulong)0));
            Assert.False(((ulong)1).Equals((ulong)0));
            Assert.False(((ulong)0).Equals((ulong)1));
            Assert.True(((ulong)1).Equals((ulong)1));

            Assert.True(((IEquatable<ulong>)((ulong)0)).Equals((ulong)0));
            Assert.False(((IEquatable<ulong>)((ulong)1)).Equals((ulong)0));
            Assert.False(((IEquatable<ulong>)((ulong)0)).Equals((ulong)1));
            Assert.True(((IEquatable<ulong>)((ulong)1)).Equals((ulong)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((ulong)0).CompareTo((ulong)0) == 0);
            Assert.True(((ulong)1).CompareTo((ulong)0) > 0);
            Assert.True(((ulong)0).CompareTo((ulong)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<ulong>)((ulong)0)).CompareTo((ulong)0) == 0);
            Assert.True(((IComparable<ulong>)((ulong)1)).CompareTo((ulong)0) > 0);
            Assert.True(((IComparable<ulong>)((ulong)0)).CompareTo((ulong)1) < 0);
        }
    }
}
