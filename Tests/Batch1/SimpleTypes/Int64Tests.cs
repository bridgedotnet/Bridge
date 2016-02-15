using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT64)]
    [TestFixture(TestNameFormat = "Int64 - {0}")]
    public class Int64Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(long)0 is long);
            Assert.False((object)0.5 is long);
            Assert.True((object)1e100 is long);
            Assert.AreEqual("Bridge.Int", typeof(long).GetClassName());

            object l = (long)0;
            Assert.True(l is long);
            Assert.True(l is IComparable<long>);
            Assert.True(l is IEquatable<long>);
            Assert.True(l is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            ulong i3 = 5754, i4 = 9223372036854775000, i5 = 16223372036854776000;
            ulong? ni3 = 5754, ni4 = 9223372036854775000, ni5 = 16223372036854776000, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual(5754, (long)i3, "5754 unchecked");
                Assert.AreStrictEqual(9223372036854775000, (long)i4, "9223372036854775000 unchecked");
                Assert.False((long)i5 < 0, "16223372036854776000 unchecked");

                Assert.AreStrictEqual(5754, (long?)ni3, "nullable 5754 unchecked");
                Assert.AreStrictEqual(9223372036854775000, (long?)ni4, "nullable 9223372036854775000 unchecked");
                Assert.False((long?)ni5 < 0, "nullable 16223372036854776000 unchecked");
                Assert.AreStrictEqual(null, (long?)ni6, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual(5754, (long)i3, "5754 checked");
                Assert.AreStrictEqual(9223372036854775000, (long)i4, "9223372036854775000 checked");

                Assert.AreStrictEqual(5754, (long?)ni3, "nullable 5754 checked");
                Assert.AreStrictEqual(9223372036854775000, (long?)ni4, "nullable 9223372036854775000 checked");
                Assert.AreStrictEqual(null, (long?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<long>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new long());
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<long>());
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((long)0x123).Format("x"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((long)0x123).ToString("x"));
        }

        [Test]
        public void TryParseWorks()
        {
            long numberResult;
            bool result = long.TryParse("57574", out numberResult);
            Assert.True(result);
            Assert.AreEqual(57574, numberResult);

            result = long.TryParse("-14", out numberResult);
            Assert.True(result);
            Assert.AreEqual(-14, numberResult);

            result = long.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = long.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = long.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = long.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = long.TryParse("-10000000000000000000", out numberResult);
            Assert.False(result);
            //Assert.AreEqual(numberResult, 0);

            result = long.TryParse("10000000000000000000", out numberResult);
            Assert.False(result);
            //Assert.AreEqual(numberResult, 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(13453634535, long.Parse("13453634535"));
            Assert.AreEqual(-234253069384953, long.Parse("-234253069384953"));
            Assert.Throws(() => long.Parse(""));
            Assert.Throws(() => long.Parse(null));
            Assert.Throws(() => long.Parse("notanumber"));
            Assert.Throws(() => long.Parse("2.5"));
            Assert.Throws(() => long.Parse("-10000000000000000000"));
            Assert.Throws(() => long.Parse("10000000000000000000"));
        }

        [Test]
        public void CastingOfLargeDoublesToInt64Works()
        {
            double d1 = 5e9 + 0.5, d2 = -d1;
            Assert.AreEqual(5000000000, (long)d1, "Positive");
            Assert.AreEqual(-5000000000, (long)d2, "Negative");
        }

        [Test]
        public void DivisionOfLargeInt64Works()
        {
            long v1 = 50000000000L, v2 = -v1, v3 = 3;
            Assert.AreEqual(16666666666, v1 / v3, "Positive");
            Assert.AreEqual(-16666666666, v2 / v3, "Negative");
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
