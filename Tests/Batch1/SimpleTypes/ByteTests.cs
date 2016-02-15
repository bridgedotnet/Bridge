using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_BYTE)]
    [TestFixture(TestNameFormat = "Byte - {0}")]
    public class ByteTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(byte)0 is byte);
            Assert.False((object)0.5 is byte);
            Assert.True((object)-1 is byte);
            Assert.True((object)256 is byte);
            Assert.AreEqual("Bridge.Int", typeof(byte).GetClassName());
            object b = (byte)0;
            Assert.True(b is byte);
            Assert.True(b is IComparable<byte>);
            Assert.True(b is IEquatable<byte>);
            Assert.True(b is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 255, i5 = 256;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 255, ni5 = 256, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual(-1, (byte)i1, "-1 unchecked");
                Assert.AreStrictEqual(0, (byte)i2, "0 unchecked");
                Assert.AreStrictEqual(234, (byte)i3, "234 unchecked");
                Assert.AreStrictEqual(255, (byte)i4, "255 unchecked");
                Assert.AreStrictEqual(256, (byte)i5, "256 unchecked");

                Assert.AreStrictEqual(-1, (byte?)ni1, "nullable -1 unchecked");
                Assert.AreStrictEqual(0, (byte?)ni2, "nullable 0 unchecked");
                Assert.AreStrictEqual(234, (byte?)ni3, "nullable 234 unchecked");
                Assert.AreStrictEqual(255, (byte?)ni4, "nullable 255 unchecked");
                Assert.AreStrictEqual(256, (byte?)ni5, "nullable 256 unchecked");
                Assert.AreStrictEqual(null, (byte?)ni6, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual(0, (byte)i2, "0 checked");
                Assert.AreStrictEqual(234, (byte)i3, "234 checked");
                Assert.AreStrictEqual(255, (byte)i4, "256 checked");

                Assert.AreStrictEqual(0, (byte?)ni2, "nullable 0 checked");
                Assert.AreStrictEqual(234, (byte?)ni3, "nullable 234 checked");
                Assert.AreStrictEqual(255, (byte?)ni4, "nullable 255 checked");
                Assert.AreStrictEqual(null, (byte?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<byte>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new byte());
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreEqual(0, Activator.CreateInstance<byte>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(0, byte.MinValue);
            Assert.AreEqual(255, byte.MaxValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("12", ((byte)0x12).Format("x"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("12", ((byte)0x12).ToString("x"));
        }

        [Test]
        public void TryParseWorks()
        {
            byte numberResult;
            bool result = byte.TryParse("234", out numberResult);
            Assert.True(result);
            Assert.AreEqual(234, numberResult);

            result = byte.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = byte.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = byte.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = byte.TryParse("54768", out numberResult);
            Assert.False(result);
            Assert.AreEqual(54768, numberResult);

            result = byte.TryParse("-1", out numberResult);
            Assert.False(result);
            Assert.AreEqual(-1, numberResult);

            result = byte.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(234, byte.Parse("234"));
            Assert.Throws(() => byte.Parse(""));
            Assert.Throws(() => byte.Parse(null));
            Assert.Throws(() => byte.Parse("notanumber"));
            Assert.Throws(() => byte.Parse("54768"));
            Assert.Throws(() => byte.Parse("-1"));
            Assert.Throws(() => byte.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((byte)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((byte)123).ToString(10));
            Assert.AreEqual("12", ((byte)0x12).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((byte)0).GetHashCode(), ((byte)0).GetHashCode());
            Assert.AreEqual(((byte)1).GetHashCode(), ((byte)1).GetHashCode());
            Assert.AreNotEqual(((byte)1).GetHashCode(), ((byte)0).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((byte)0).Equals((object)(byte)0));
            Assert.False(((byte)1).Equals((object)(byte)0));
            Assert.False(((byte)0).Equals((object)(byte)1));
            Assert.True(((byte)1).Equals((object)(byte)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((byte)0).Equals((byte)0));
            Assert.False(((byte)1).Equals((byte)0));
            Assert.False(((byte)0).Equals((byte)1));
            Assert.True(((byte)1).Equals((byte)1));

            Assert.True(((IEquatable<byte>)((byte)0)).Equals((byte)0));
            Assert.False(((IEquatable<byte>)((byte)1)).Equals((byte)0));
            Assert.False(((IEquatable<byte>)((byte)0)).Equals((byte)1));
            Assert.True(((IEquatable<byte>)((byte)1)).Equals((byte)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((byte)0).CompareTo((byte)0) == 0);
            Assert.True(((byte)1).CompareTo((byte)0) > 0);
            Assert.True(((byte)0).CompareTo((byte)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<byte>)((byte)0)).CompareTo((byte)0) == 0);
            Assert.True(((IComparable<byte>)((byte)1)).CompareTo((byte)0) > 0);
            Assert.True(((IComparable<byte>)((byte)0)).CompareTo((byte)1) < 0);
        }
    }
}
