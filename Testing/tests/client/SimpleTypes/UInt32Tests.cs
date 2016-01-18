using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_UINT32)]
    [TestFixture(TestNameFormat = "UInt32 - {0}")]
    public class UInt32Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(int)0 is uint);
            Assert.False((object)0.5 is uint);
            Assert.True((object)-1 is uint);
            Assert.True((object)4294967296 is uint);
            Assert.AreEqual(typeof(uint).GetClassName(), "Bridge.Int");
            object i = (uint)0;
            Assert.True(i is uint);
            Assert.True(i is IComparable<uint>);
            Assert.True(i is IEquatable<uint>);
            Assert.True(i is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            long i1 = -1, i2 = 0, i3 = 234, i4 = 4294967295, i5 = 4294967296;
            long? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 4294967295, ni5 = 4294967296, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual((uint)i1, -1, "-1 unchecked");
                Assert.AreStrictEqual((uint)i2, 0, "0 unchecked");
                Assert.AreStrictEqual((uint)i3, 234, "234 unchecked");
                Assert.AreStrictEqual((uint)i4, 4294967295, "4294967295 unchecked");
                Assert.AreStrictEqual((uint)i5, 4294967296, "4294967296 unchecked");

                Assert.AreStrictEqual((uint?)ni1, -1, "nullable -1 unchecked");
                Assert.AreStrictEqual((uint?)ni2, 0, "nullable 0 unchecked");
                Assert.AreStrictEqual((uint?)ni3, 234, "nullable 234 unchecked");
                Assert.AreStrictEqual((uint?)ni4, 4294967295, "nullable 4294967295 unchecked");
                Assert.AreStrictEqual((uint?)ni5, 4294967296, "nullable 4294967296 unchecked");
                Assert.AreStrictEqual((uint?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((uint)i2, 0, "0 checked");
                Assert.AreStrictEqual((uint)i3, 234, "234 checked");
                Assert.AreStrictEqual((uint)i4, 4294967295, "4294967295 checked");

                Assert.AreStrictEqual((uint?)ni2, 0, "nullable 0 checked");
                Assert.AreStrictEqual((uint?)ni3, 234, "nullable 234 checked");
                Assert.AreStrictEqual((uint?)ni4, 4294967295, "nullable 4294967295 checked");
                Assert.AreStrictEqual((uint?)ni6, null, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(GetDefaultValue<uint>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(new uint(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<uint>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(uint.MinValue, 0);
            Assert.AreEqual(uint.MaxValue, 4294967295U);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual(((uint)0x123).Format("x"), "123");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual(((uint)0x123).ToString("x"), "123");
        }

        [Test]
        public void TryParseWorks()
        {
            uint numberResult;
            bool result = uint.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 23445);

            result = uint.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = uint.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = uint.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = uint.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, -1);

            result = uint.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(uint.Parse("23445"), 23445);
            Assert.Throws(() => uint.Parse(""));
            Assert.Throws(() => uint.Parse(null));
            Assert.Throws(() => uint.Parse("notanumber"));
            Assert.Throws(() => uint.Parse("4294967296"));
            Assert.Throws(() => uint.Parse("-1"));
            Assert.Throws(() => uint.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual(((uint)123).ToString(), "123");
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual(((uint)123).ToString(10), "123");
            Assert.AreEqual(((uint)0x123).ToString(16), "123");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((uint)0).GetHashCode(), ((uint)0).GetHashCode());
            Assert.AreEqual(((uint)1).GetHashCode(), ((uint)1).GetHashCode());
            Assert.AreNotEqual(((uint)0).GetHashCode(), ((uint)1).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((uint)0).Equals((object)(uint)0));
            Assert.False(((uint)1).Equals((object)(uint)0));
            Assert.False(((uint)0).Equals((object)(uint)1));
            Assert.True(((uint)1).Equals((object)(uint)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((uint)0).Equals((uint)0));
            Assert.False(((uint)1).Equals((uint)0));
            Assert.False(((uint)0).Equals((uint)1));
            Assert.True(((uint)1).Equals((uint)1));

            Assert.True(((IEquatable<uint>)((uint)0)).Equals((uint)0));
            Assert.False(((IEquatable<uint>)((uint)1)).Equals((uint)0));
            Assert.False(((IEquatable<uint>)((uint)0)).Equals((uint)1));
            Assert.True(((IEquatable<uint>)((uint)1)).Equals((uint)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((uint)0).CompareTo((uint)0) == 0);
            Assert.True(((uint)1).CompareTo((uint)0) > 0);
            Assert.True(((uint)0).CompareTo((uint)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<uint>)((uint)0)).CompareTo((uint)0) == 0);
            Assert.True(((IComparable<uint>)((uint)1)).CompareTo((uint)0) > 0);
            Assert.True(((IComparable<uint>)((uint)0)).CompareTo((uint)1) < 0);
        }
    }
}
