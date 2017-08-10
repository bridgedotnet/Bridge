using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT64)]
    [TestFixture(TestNameFormat = "Int64 - {0}")]
    public class Int64Tests
    {
        private void AssertLong(object expected, object actual, string message = "", string checkedType = "System.Int64")
        {
            if (message == null)
            {
                message = "";
            }

            var typeMessage = message + "Type is " + checkedType;
            Assert.AreEqual(checkedType, actual.GetType().FullName, typeMessage);

            Assert.AreEqual(expected.ToString(), actual.ToString(), message);
        }

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
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<long>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<long>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void MinMaxValuesAreCorrect()
        {
            AssertLong("-9223372036854775808", long.MinValue);
            AssertLong("9223372036854775807", long.MaxValue);
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

        [Test]
        public void OverflowWorks()
        {
            long min = long.MinValue;
            long max = long.MaxValue;

            unchecked
            {
                Assert.True((max + 1) == min, "max + 1 unchecked");
                Assert.True((min - 1) == max, "min - 1 unchecked");
                Assert.True(-min == min, "-min unchecked");
            }

            checked
            {
                Assert.Throws(() => { var l = max + 1; }, err => err is OverflowException);
                Assert.Throws(() => { var l = min - 1; }, err => err is OverflowException);
                Assert.Throws(() => { var l = max * min; }, err => err is OverflowException);
                Assert.Throws(() => { var l = max * max; }, err => err is OverflowException);
                Assert.Throws(() => { var l = min * min; }, err => err is OverflowException);
                Assert.Throws(() => { var l = -min; }, err => err is OverflowException);
            }
        }

        [Test]
        public void CombinedTypesOperationsWork()
        {
            byte ub = 1;
            sbyte sb = 2;
            ushort us = 3;
            short ss = 4;
            uint ui = 5;
            int si = 6;
            ulong ul = 7;

            long l1 = (long)byte.MaxValue + 1;
            long l2 = (long)sbyte.MaxValue + 1;
            long l3 = (long)ushort.MaxValue + 1;
            long l4 = (long)short.MaxValue + 1;
            long l5 = (long)uint.MaxValue + 1;
            long l6 = (long)int.MaxValue + 1;
            long l7 = (long)ulong.MinValue + 1;

            AssertLong("257", ub + l1);
            AssertLong("130", sb + l2);
            AssertLong("65539", us + l3);
            AssertLong("32772", ss + l4);
            AssertLong("4294967301", ui + l5);
            AssertLong("2147483654", si + l6);
            AssertLong("8", (long)ul + l7);

            decimal dcml = 11m;
            double dbl = 12d;
            float flt = 13;

            long l = 100;

            AssertLong("111", dcml + l, null, "System.Decimal");
            AssertLong("112", dbl + l, null, "System.Double");
            AssertLong("113", flt + l, null, "System.Single");
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

            result = long.TryParse("0000000000000000", out numberResult);
            Assert.True(result);
            NumberHelper.AssertNumber(0L, numberResult, "#3031");

            result = long.TryParse("0", out numberResult);
            Assert.True(result);
            NumberHelper.AssertNumber(0L, numberResult, "#3031");

            result = long.TryParse("0000000000000010", out numberResult);
            Assert.True(result);
            NumberHelper.AssertNumber(10L, numberResult, "#3031");

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
            NumberHelper.AssertNumber(0L, long.Parse("0"), "#3031");
            NumberHelper.AssertNumber(0L, long.Parse("000000000000000"), "#3031");
            NumberHelper.AssertNumber(10L, long.Parse("0000000000000010"), "#3031");
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

        [Test]
        public void ShiftWorks()
        {
            var x = 1L;

            Assert.True(2 == x << 1);

            Assert.True(256 == x << 8);
            Assert.True(65536 == x << 16);
            Assert.True(8388608 == x << 23);
            Assert.True(16777216 == x << 24);
            Assert.True(33554432 == x << 25);
            Assert.True(4294967296 == x << 32);
            Assert.True(140737488355328 == x << 47);
            Assert.True(281474976710656 == x << 48);
            Assert.True(562949953421312 == x << 49);
            Assert.True(-9223372036854775808 == x << 63);
            Assert.True(1 == x << 64);

            var t = 1L;
            Assert.True(0 == t >> 1);

            var y = x << 63;
            Assert.True(-9223372036854775808 == y);
            Assert.True(-4611686018427387904 == y >> 1);
            Assert.True(-2305843009213693952 == y >> 2);
            Assert.True(-1152921504606846976 == y >> 3);
            Assert.True(-36028797018963968 == y >> 8);
            Assert.True(-9007199254740992 == y >> 10);
            Assert.True(-2251799813685248 == y >> 12);
            Assert.True(-281474976710656 == y >> 15);
            Assert.True(-140737488355328 == y >> 16);
            Assert.True(-1099511627776 == y >> 23);
            Assert.True(-549755813888 == y >> 24);
            Assert.True(-274877906944 == y >> 25);
            Assert.True(-2147483648 == y >> 32);
            Assert.True(-65536 == y >> 47);
            Assert.True(-32768 == y >> 48);
            Assert.True(-16384 == y >> 49);
            Assert.True(-1 == y >> 63);
            Assert.True(-9223372036854775808 == y >> 64);
        }
    }
}