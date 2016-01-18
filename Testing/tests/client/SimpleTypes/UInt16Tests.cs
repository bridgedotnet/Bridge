using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_UINT16)]
    [TestFixture(TestNameFormat = "UInt16 - {0}")]
    public class UInt16Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(ushort)0 is ushort);
            Assert.False((object)0.5 is ushort);
            Assert.True((object)-1 is ushort);
            Assert.True((object)65536 is ushort);
            Assert.AreEqual(typeof(ushort).GetClassName(), "Bridge.Int");

            object s = (ushort)0;
            Assert.True(s is ushort);
            Assert.True(s is IComparable<ushort>);
            Assert.True(s is IEquatable<ushort>);
            Assert.True(s is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual((ushort)i1, -1, "-1 unchecked");
                Assert.AreStrictEqual((ushort)i2, 0, "0 unchecked");
                Assert.AreStrictEqual((ushort)i3, 234, "234 unchecked");
                Assert.AreStrictEqual((ushort)i4, 65535, "65535 unchecked");
                Assert.AreStrictEqual((ushort)i5, 65536, "65536 unchecked");

                Assert.AreStrictEqual((ushort?)ni1, -1, "nullable -1 unchecked");
                Assert.AreStrictEqual((ushort?)ni2, 0, "nullable 0 unchecked");
                Assert.AreStrictEqual((ushort?)ni3, 234, "nullable 234 unchecked");
                Assert.AreStrictEqual((ushort?)ni4, 65535, "nullable 65535 unchecked");
                Assert.AreStrictEqual((ushort?)ni5, 65536, "nullable 65536 unchecked");
                Assert.AreStrictEqual((ushort?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((ushort)i2, 0, "0 checked");
                Assert.AreStrictEqual((ushort)i3, 234, "234 checked");
                Assert.AreStrictEqual((ushort)i4, 65535, "65535 checked");

                Assert.AreStrictEqual((ushort?)ni2, 0, "nullable 0 checked");
                Assert.AreStrictEqual((ushort?)ni3, 234, "nullable 234 checked");
                Assert.AreStrictEqual((ushort?)ni4, 65535, "nullable 65535 checked");
                Assert.AreStrictEqual((ushort?)ni6, null, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(GetDefaultValue<ushort>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(new ushort(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<ushort>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(ushort.MinValue, 0);
            Assert.AreEqual(ushort.MaxValue, 65535);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual(((ushort)0x123).Format("x"), "123");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual(((ushort)0x123).ToString("x"), "123");
        }

        [Test]
        public void TryParseWorks()
        {
            ushort numberResult;
            bool result = ushort.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 23445);

            result = ushort.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ushort.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ushort.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = ushort.TryParse("32768", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 32768);

            result = ushort.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, -1);

            result = ushort.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(ushort.Parse("23445"), 23445);
            Assert.Throws(() => ushort.Parse(""));
            Assert.Throws(() => ushort.Parse(null));
            Assert.Throws(() => ushort.Parse("notanumber"));
            Assert.Throws(() => ushort.Parse("65536"));
            Assert.Throws(() => ushort.Parse("-1"));
            Assert.Throws(() => ushort.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual(((ushort)123).ToString(), "123");
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual(((ushort)123).ToString(10), "123");
            Assert.AreEqual(((ushort)0x123).ToString(16), "123");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((ushort)0).GetHashCode(), ((ushort)0).GetHashCode());
            Assert.AreEqual(((ushort)1).GetHashCode(), ((ushort)1).GetHashCode());
            Assert.AreNotEqual(((ushort)0).GetHashCode(), ((ushort)1).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((ushort)0).Equals((object)(ushort)0));
            Assert.False(((ushort)1).Equals((object)(ushort)0));
            Assert.False(((ushort)0).Equals((object)(ushort)1));
            Assert.True(((ushort)1).Equals((object)(ushort)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((ushort)0).Equals((ushort)0));
            Assert.False(((ushort)1).Equals((ushort)0));
            Assert.False(((ushort)0).Equals((ushort)1));
            Assert.True(((ushort)1).Equals((ushort)1));

            Assert.True(((IEquatable<ushort>)((ushort)0)).Equals((ushort)0));
            Assert.False(((IEquatable<ushort>)((ushort)1)).Equals((ushort)0));
            Assert.False(((IEquatable<ushort>)((ushort)0)).Equals((ushort)1));
            Assert.True(((IEquatable<ushort>)((ushort)1)).Equals((ushort)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((ushort)0).CompareTo((ushort)0) == 0);
            Assert.True(((ushort)1).CompareTo((ushort)0) > 0);
            Assert.True(((ushort)0).CompareTo((ushort)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<ushort>)((ushort)0)).CompareTo((ushort)0) == 0);
            Assert.True(((IComparable<ushort>)((ushort)1)).CompareTo((ushort)0) > 0);
            Assert.True(((IComparable<ushort>)((ushort)0)).CompareTo((ushort)1) < 0);
        }
    }
}
