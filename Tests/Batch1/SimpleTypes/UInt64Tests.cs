using Bridge.Test.NUnit;
using System;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_UINT64)]
    [TestFixture(TestNameFormat = "UInt64 - {0}")]
    public class UInt64Tests
    {
        private void AssertULong(object expected, object actual, string message = "", string checkedType = "System.UInt64")
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
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(ulong)0 is ulong);
            Assert.False((object)0.5 is ulong);
            Assert.AreEqual("System.UInt64", typeof(ulong).FullName);
            object l = (ulong)0;
            Assert.True(l is ulong);
            Assert.True(l is IComparable<ulong>);
            Assert.True(l is IEquatable<ulong>);
            Assert.True(l is IFormattable);
        }

        [Test]
        public void MinMaxValuesAreCorrect()
        {
            AssertULong("0", ulong.MinValue);
            AssertULong("18446744073709551615", ulong.MaxValue);
        }

        [Test]
        public void CastsWork()
        {
            long i2 = 0, i3 = 234, i4 = 9223372036854775000;
            long? ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

            unchecked
            {
                Assert.True(0 == (ulong)i2, "0 unchecked");
                Assert.True(234 == (ulong)i3, "234 unchecked");
                Assert.True(9223372036854775000 == (ulong)i4, "9223372036854775000 unchecked");

                Assert.True(0 == (ulong?)ni2, "nullable 0 unchecked");
                Assert.True(234 == (ulong?)ni3, "nullable 234 unchecked");
                Assert.True(9223372036854775000 == (ulong?)ni4, "nullable 9223372036854775000 unchecked");
                Assert.True(null == (ulong?)ni6, "null unchecked");
            }

            checked
            {
                Assert.True(0 == (ulong)i2, "0 checked");
                Assert.True(234 == (ulong)i3, "234 checked");
                Assert.True(9223372036854775000 == (ulong)i4, "9223372036854775000 checked");

                Assert.True(0 == (ulong?)ni2, "nullable 0 checked");
                Assert.True(234 == (ulong?)ni3, "nullable 234 checked");
                Assert.True(9223372036854775000 == (ulong?)ni4, "nullable 9223372036854775000 checked");
                Assert.True(null == (ulong?)ni6, "null checked");
            }
        }

        [Test]
        public void OverflowWorks()
        {
            ulong min = ulong.MinValue;
            ulong max = ulong.MaxValue;

            unchecked
            {
                Assert.True((max + 1) == min, "max + 1 unchecked");
                Assert.True((min - 1) == max, "min - 1 unchecked");
            }

            checked
            {
                Assert.Throws(() => { var l = max + 1; }, err => err is OverflowException, "max + 1 should be OverflowException");
                Assert.Throws(() => { var l = min - 1; }, err => err is OverflowException, "min - 1 should be OverflowException");
                Assert.Throws(() => { var l = max * max; }, err => err is OverflowException, "max * max should be OverflowException");
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
            long sl = 7;

            ulong l1 = (ulong)byte.MaxValue + 1;
            ulong l2 = (ulong)sbyte.MaxValue + 1;
            ulong l3 = (ulong)ushort.MaxValue + 1;
            ulong l4 = (ulong)short.MaxValue + 1;
            ulong l5 = (ulong)uint.MaxValue + 1;
            ulong l6 = (ulong)int.MaxValue + 1;
            ulong l7 = (ulong)(long)0 + 1;

            AssertULong("257", ub + l1);
            AssertULong("130", (ulong)sb + l2);
            AssertULong("65539", us + l3);
            AssertULong("32772", (ulong)ss + l4);
            AssertULong("4294967301", ui + l5);
            AssertULong("2147483654", (ulong)si + l6);
            AssertULong("8", (ulong)sl + l7);

            decimal dcml = 11m;
            double dbl = 12d;
            float flt = 13;

            long l = 100;

            AssertULong("111", dcml + l, null, "System.Decimal");
            AssertULong("112", dbl + l, null, "System.Double");
            AssertULong("113", flt + l, null, "System.Single");
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.True(0 == GetDefaultValue<ulong>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.True(0 == new ulong());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.True(0 == Activator.CreateInstance<ulong>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.True(0 == ulong.MinValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((ulong)0x123).Format("x"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((ulong)0x123).ToString("x"));
        }

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
            Assert.True(16666666666 == (v1 / v2));
        }

        [Test]
        public void TryParseWorks()
        {
            ulong numberResult;
            bool result = ulong.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.True(23445 == numberResult);

            result = ulong.TryParse("", out numberResult);
            Assert.False(result);
            Assert.True(0 == numberResult);

            result = ulong.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.True(0 == numberResult);

            result = ulong.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.True(0 == numberResult);

            result = ulong.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.True(0 == numberResult);

            result = ulong.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.True(0 == numberResult);

            result = ulong.TryParse("100000000000000000000", out numberResult);
            Assert.False(result);
            Assert.True(numberResult == 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.True(23445 == ulong.Parse("23445"));
            Assert.Throws(() => ulong.Parse(""));
            Assert.Throws(() => ulong.Parse(null));
            Assert.Throws(() => ulong.Parse("notanumber"));
            Assert.Throws(() => ulong.Parse("-1"));
            Assert.Throws(() => ulong.Parse("2.5"));
            Assert.Throws(() => ulong.Parse("100000000000000000000"));
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