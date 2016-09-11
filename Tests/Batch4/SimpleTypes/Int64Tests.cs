using Bridge.Test;
using System;
using System.Globalization;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "Int64Tests - {0}")]
    public class Int64Tests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(long)0 is long);
            Assert.False((object)0.5 is long);
            Assert.False((object)1e100 is long);
            Assert.AreEqual("System.Int64", typeof(long).FullName);
            Assert.False(typeof(long).IsClass);
            Assert.True(typeof(IComparable<long>).IsAssignableFrom(typeof(long)));
            Assert.True(typeof(IEquatable<long>).IsAssignableFrom(typeof(long)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(long)));
            object l = (long)0;
            Assert.True(l is long);
            Assert.True(l is IComparable<long>);
            Assert.True(l is IEquatable<long>);
            Assert.True(l is IFormattable);

            var interfaces = typeof(long).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<long>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<long>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            ulong i3 = 5754, i4 = 9223372036854775000, i5 = 16223372036854776000;
            ulong? ni3 = 5754, ni4 = 9223372036854775000, ni5 = 16223372036854776000, ni6 = null;

            unchecked
            {
                Assert.AreEqual(5754L, (long)i3, "5754 unchecked");
                Assert.AreEqual(9223372036854775000L, (long)i4, "9223372036854775000 unchecked");
                Assert.True((long)i5 < 0, "16223372036854776000 unchecked");

                Assert.AreEqual(5754L, (long?)ni3, "nullable 5754 unchecked");
                Assert.AreEqual(9223372036854775000L, (long?)ni4, "nullable 9223372036854775000 unchecked");
                Assert.True((long?)ni5 < 0, "nullable 16223372036854776000 unchecked");
                Assert.AreEqual(null, (long?)ni6, "null unchecked");
            }

            checked
            {
                Assert.AreEqual(5754L, (long)i3, "5754 checked");
                Assert.AreEqual(9223372036854775000L, (long)i4, "9223372036854775000 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (long)i5;
                }, "16223372036854776000 checked");

                Assert.AreEqual(5754L, (long?)ni3, "nullable 5754 checked");
                Assert.AreEqual(9223372036854775000L, (long?)ni4, "nullable 9223372036854775000 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (long?)ni5;
                }, "nullable 16223372036854776000 checked");
                Assert.AreEqual(null, (long?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreEqual(0L, GetDefaultValue<long>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreEqual(0L, new long());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreEqual(0L, Activator.CreateInstance<long>());
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((long)0x123).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((long)0x123).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((long)0x123).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((long)0x123)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((long)0x123).LocaleFormat("x"), "123");
        //}

        [Test]
        public void TryParseWorks()
        {
            long numberResult;
            bool result = long.TryParse("57574", out numberResult);
            Assert.True(result);
            Assert.AreEqual(57574L, numberResult);

            result = long.TryParse("-14", out numberResult);
            Assert.True(result);
            Assert.AreEqual(-14L, numberResult);

            result = long.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);

            result = long.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);

            result = long.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);

            result = long.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);

            result = long.TryParse("-10000000000000000000", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);

            result = long.TryParse("10000000000000000000", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0L, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(13453634535L, long.Parse("13453634535"));
            Assert.AreEqual(-234253069384953L, long.Parse("-234253069384953"));
            Assert.Throws<FormatException>(() => long.Parse(""));
            Assert.Throws<ArgumentNullException>(() => long.Parse(null));
            Assert.Throws<FormatException>(() => long.Parse("notanumber"));
            Assert.Throws<FormatException>(() => long.Parse("2.5"));
            Assert.Throws<OverflowException>(() => long.Parse("-10000000000000000000"));
            Assert.Throws<OverflowException>(() => long.Parse("10000000000000000000"));
        }

        [Test]
        public void CastingOfLargeDoublesToInt64Works()
        {
            double d1 = 5e9 + 0.5, d2 = -d1;
            Assert.AreEqual(5000000000L, (long)d1, "Positive");
            Assert.AreEqual(-5000000000L, (long)d2, "Negative");
        }

        [Test]
        public void DivisionOfLargeInt64Works()
        {
            long v1 = 50000000000L, v2 = -v1, v3 = 3;
            Assert.AreEqual(16666666666L, v1 / v3, "Positive");
            Assert.AreEqual(-16666666666L, v2 / v3, "Negative");
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((long)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((long)123).ToString(10));
            Assert.AreEqual("123", ((long)0x123).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((long)0).GetHashCode(), ((long)0).GetHashCode());
            Assert.AreEqual(((long)1).GetHashCode(), ((long)1).GetHashCode());
            Assert.AreNotEqual(((long)1).GetHashCode(), ((long)0).GetHashCode());
            Assert.True((long)0x100000000L.GetHashCode() <= 0xffffffffL);
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((long)0).Equals((object)(long)0));
            Assert.False(((long)1).Equals((object)(long)0));
            Assert.False(((long)0).Equals((object)(long)1));
            Assert.True(((long)1).Equals((object)(long)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((long)0).Equals((long)0));
            Assert.False(((long)1).Equals((long)0));
            Assert.False(((long)0).Equals((long)1));
            Assert.True(((long)1).Equals((long)1));

            Assert.True(((IEquatable<long>)((long)0)).Equals((long)0));
            Assert.False(((IEquatable<long>)((long)1)).Equals((long)0));
            Assert.False(((IEquatable<long>)((long)0)).Equals((long)1));
            Assert.True(((IEquatable<long>)((long)1)).Equals((long)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((long)0).CompareTo((long)0) == 0);
            Assert.True(((long)1).CompareTo((long)0) > 0);
            Assert.True(((long)0).CompareTo((long)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<long>)((long)0)).CompareTo((long)0) == 0);
            Assert.True(((IComparable<long>)((long)1)).CompareTo((long)0) > 0);
            Assert.True(((IComparable<long>)((long)0)).CompareTo((long)1) < 0);
        }
    }
}
