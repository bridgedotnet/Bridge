using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_UINT64)]
    [TestFixture(TestNameFormat = "UInt64 - {0}")]
    public class UInt64Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(ulong)0 is ulong);
            Assert.False((object)0.5 is ulong);
            Assert.AreEqual(typeof(ulong).GetClassName(), "Bridge.Int");
            object l = (ulong)0;
            Assert.True(l is ulong);
            Assert.True(l is IComparable<ulong>);
            Assert.True(l is IEquatable<ulong>);
            Assert.True(l is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            long i2 = 0, i3 = 234, i4 = 9223372036854775000;
            long? ni2 = 0, ni3 = 234, ni4 = 9223372036854775000, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual((ulong)i2, 0, "0 unchecked");
                Assert.AreStrictEqual((ulong)i3, 234, "234 unchecked");
                Assert.AreStrictEqual((ulong)i4, 9223372036854775000, "9223372036854775000 unchecked");

                Assert.AreStrictEqual((ulong?)ni2, 0, "nullable 0 unchecked");
                Assert.AreStrictEqual((ulong?)ni3, 234, "nullable 234 unchecked");
                Assert.AreStrictEqual((ulong?)ni4, 9223372036854775000, "nullable 9223372036854775000 unchecked");
                Assert.AreStrictEqual((ulong?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((ulong)i2, 0, "0 checked");
                Assert.AreStrictEqual((ulong)i3, 234, "234 checked");
                Assert.AreStrictEqual((ulong)i4, 9223372036854775000, "9223372036854775000 checked");

                Assert.AreStrictEqual((ulong?)ni2, 0, "nullable 0 checked");
                Assert.AreStrictEqual((ulong?)ni3, 234, "nullable 234 checked");
                Assert.AreStrictEqual((ulong?)ni4, 9223372036854775000, "nullable 9223372036854775000 checked");
                Assert.AreStrictEqual((ulong?)ni6, null, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(GetDefaultValue<ulong>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(new ulong(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<ulong>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(ulong.MinValue, 0);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual(((ulong)0x123).Format("x"), "123");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual(((ulong)0x123).ToString("x"), "123");
        }

        [Test]
        public void CastingOfLargeValuesToUInt64Works()
        {
            double d1 = 5e9 + 0.5, d2 = -d1;
            Assert.AreEqual((ulong)d1, 5000000000, "Positive");
            Assert.False((ulong)d2 > int.MaxValue, "Negative");
        }

        [Test]
        public void DivisionOfLargeUInt64Works()
        {
            ulong v1 = 50000000000L, v2 = 3;
            Assert.AreEqual(v1 / v2, 16666666666);
        }

        [Test]
        public void TryParseWorks()
        {
            ulong numberResult;
            bool result = ulong.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 23445);

            result = ulong.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ulong.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ulong.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ulong.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, -1);

            result = ulong.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ulong.TryParse("100000000000000000000", out numberResult);
            Assert.False(result);
            //Assert.AreEqual(numberResult, 100000000000000000000);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(ulong.Parse("23445"), 23445);
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
            Assert.AreEqual(((ulong)123).ToString(), "123");
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual(((ulong)123).ToString(10), "123");
            Assert.AreEqual(((ulong)0x123).ToString(16), "123");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((ulong)0).GetHashCode(), ((ulong)0).GetHashCode());
            Assert.AreEqual(((ulong)1).GetHashCode(), ((ulong)1).GetHashCode());
            Assert.AreNotEqual(((ulong)0).GetHashCode(), ((ulong)1).GetHashCode());
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
