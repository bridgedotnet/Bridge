using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT16)]
    [TestFixture(TestNameFormat = "Int16 - {0}")]
    public class Int16Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(short)0 is short);
            Assert.False((object)0.5 is short);
            Assert.True((object)-32769 is short);
            Assert.True((object)32768 is short);
            Assert.AreEqual(typeof(short).GetClassName(), "Bridge.Int");

            object s = (short)0;
            Assert.True(s is short);
            Assert.True(s is IComparable<short>);
            Assert.True(s is IEquatable<short>);
            Assert.True(s is IFormattable);

        }

        [Test]
        public void CastsWork()
        {
            int i1 = -32769, i2 = -32768, i3 = 5754, i4 = 32767, i5 = 32768;
            int? ni1 = -32769, ni2 = -32768, ni3 = 5754, ni4 = 32767, ni5 = 32768, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual((short)i1, -32769, "-32769 unchecked");
                Assert.AreStrictEqual((short)i2, -32768, "-32768 unchecked");
                Assert.AreStrictEqual((short)i3, 5754, "5754 unchecked");
                Assert.AreStrictEqual((short)i4, 32767, "32767 unchecked");
                Assert.AreStrictEqual((short)i5, 32768, "32768 unchecked");

                Assert.AreStrictEqual((short?)ni1, -32769, "nullable -32769 unchecked");
                Assert.AreStrictEqual((short?)ni2, -32768, "nullable -32768 unchecked");
                Assert.AreStrictEqual((short?)ni3, 5754, "nullable 5754 unchecked");
                Assert.AreStrictEqual((short?)ni4, 32767, "nullable 32767 unchecked");
                Assert.AreStrictEqual((short?)ni5, 32768, "nullable 32768 unchecked");
                Assert.AreStrictEqual((short?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((short)i2, -32768, "-32768 checked");
                Assert.AreStrictEqual((short)i3, 5754, "5754 checked");
                Assert.AreStrictEqual((short)i4, 32767, "32767 checked");

                Assert.AreStrictEqual((short?)ni2, -32768, "nullable -32768 checked");
                Assert.AreStrictEqual((short?)ni3, 5754, "nullable 5754 checked");
                Assert.AreStrictEqual((short?)ni4, 32767, "nullable 32767 checked");
                Assert.AreStrictEqual((short?)ni6, null, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(GetDefaultValue<short>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(new short(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<short>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(short.MinValue, -32768);
            Assert.AreEqual(short.MaxValue, 32767);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual(((short)0x123).Format("x"), "123");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual(((short)0x123).ToString("x"), "123");
        }

        [Test]
        public void TryParseWorks()
        {
            short numberResult;
            bool result = short.TryParse("234", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 234);

            result = short.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = short.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = short.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = short.TryParse("54768", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 54768);

            result = short.TryParse("-55678", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, -55678);

            result = short.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(short.Parse("234"), 234);
            Assert.Throws(() => short.Parse(""));
            Assert.Throws(() => short.Parse(null));
            Assert.Throws(() => short.Parse("notanumber"));
            Assert.Throws(() => short.Parse("54768"));
            Assert.Throws(() => short.Parse("-55678"));
            Assert.Throws(() => short.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual(((short)123).ToString(), "123");
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual(((short)123).ToString(10), "123");
            Assert.AreEqual(((short)0x123).ToString(16), "123");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((short)0).GetHashCode(), ((short)0).GetHashCode());
            Assert.AreEqual(((short)1).GetHashCode(), ((short)1).GetHashCode());
            Assert.AreNotEqual(((short)0).GetHashCode(), ((short)1).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((short)0).Equals((object)(short)0));
            Assert.False(((short)1).Equals((object)(short)0));
            Assert.False(((short)0).Equals((object)(short)1));
            Assert.True(((short)1).Equals((object)(short)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((short)0).Equals((short)0));
            Assert.False(((short)1).Equals((short)0));
            Assert.False(((short)0).Equals((short)1));
            Assert.True(((short)1).Equals((short)1));

            Assert.True(((IEquatable<short>)((short)0)).Equals((short)0));
            Assert.False(((IEquatable<short>)((short)1)).Equals((short)0));
            Assert.False(((IEquatable<short>)((short)0)).Equals((short)1));
            Assert.True(((IEquatable<short>)((short)1)).Equals((short)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((short)0).CompareTo((short)0) == 0);
            Assert.True(((short)1).CompareTo((short)0) > 0);
            Assert.True(((short)0).CompareTo((short)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<short>)((short)0)).CompareTo((short)0) == 0);
            Assert.True(((IComparable<short>)((short)1)).CompareTo((short)0) > 0);
            Assert.True(((IComparable<short>)((short)0)).CompareTo((short)1) < 0);
        }
    }
}
