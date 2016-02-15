using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_SBYTE)]
    [TestFixture(TestNameFormat = "SByte - {0}")]
    public class SByteTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(byte)0 is sbyte);
            Assert.False((object)0.5 is sbyte);
            Assert.True((object)-129 is sbyte);
            Assert.True((object)128 is sbyte);
            Assert.AreEqual("Bridge.Int", typeof(sbyte).GetClassName());

            object b = (sbyte)0;
            Assert.True(b is sbyte);
            Assert.True(b is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -129, i2 = -128, i3 = 80, i4 = 127, i5 = 128;
            int? ni1 = -129, ni2 = -128, ni3 = 80, ni4 = 127, ni5 = 128, ni6 = null;

            // TODO unchecked
            {
                Assert.AreStrictEqual(-129, (sbyte)i1, "-129 unchecked");
                Assert.AreStrictEqual(-128, (sbyte)i2, "-128 unchecked");
                Assert.AreStrictEqual(80, (sbyte)i3, "80 unchecked");
                Assert.AreStrictEqual(127, (sbyte)i4, "127 unchecked");
                Assert.AreStrictEqual(128, (sbyte)i5, "128 unchecked");

                Assert.AreStrictEqual(-129, (sbyte?)ni1, "nullable -129 unchecked");
                Assert.AreStrictEqual(-128, (sbyte?)ni2, "nullable -128 unchecked");
                Assert.AreStrictEqual(80, (sbyte?)ni3, "nullable 80 unchecked");
                Assert.AreStrictEqual(127, (sbyte?)ni4, "nullable 127 unchecked");
                Assert.AreStrictEqual(128, (sbyte?)ni5, "nullable 128 unchecked");
                Assert.AreStrictEqual(null, (sbyte?)ni6, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual(-128, (sbyte)i2, "-128 checked");
                Assert.AreStrictEqual(80, (sbyte)i3, "80 checked");
                Assert.AreStrictEqual(127, (sbyte)i4, "127 checked");

                Assert.AreStrictEqual(-128, (sbyte?)ni2, "nullable -128 checked");
                Assert.AreStrictEqual(80, (sbyte?)ni3, "nullable 80 checked");
                Assert.AreStrictEqual(127, (sbyte?)ni4, "nullable 127 checked");
                Assert.AreStrictEqual(null, (sbyte?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<sbyte>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new sbyte());
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<sbyte>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(-128, sbyte.MinValue);
            Assert.AreEqual(127, sbyte.MaxValue);
        }


        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("12", ((sbyte)0x12).Format("x"));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("12", ((sbyte)0x12).ToString("x"));
        }

        [Test]
        public void TryParseWorks()
        {
            sbyte numberResult;
            bool result = sbyte.TryParse("124", out numberResult);
            Assert.True(result);
            Assert.AreEqual(124, numberResult);

            result = sbyte.TryParse("-123", out numberResult);
            Assert.True(result);
            Assert.AreEqual(-123, numberResult);

            result = sbyte.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = sbyte.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = sbyte.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = sbyte.TryParse("54768", out numberResult);
            Assert.False(result);
            Assert.AreEqual(54768, numberResult);

            result = sbyte.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(124, sbyte.Parse("124"));
            Assert.AreEqual(-123, sbyte.Parse("-123"));
            Assert.Throws(() => sbyte.Parse(""));
            Assert.Throws(() => sbyte.Parse(null));
            Assert.Throws(() => sbyte.Parse("notanumber"));
            Assert.Throws(() => sbyte.Parse("54768"));
            Assert.Throws(() => sbyte.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((sbyte)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((sbyte)123).ToString(10));
            Assert.AreEqual("12", ((sbyte)0x12).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((sbyte)0).GetHashCode(), ((sbyte)0).GetHashCode());
            Assert.AreEqual(((sbyte)1).GetHashCode(), ((sbyte)1).GetHashCode());
            Assert.AreNotEqual(((sbyte)1).GetHashCode(), ((sbyte)0).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((sbyte)0).Equals((object)(sbyte)0));
            Assert.False(((sbyte)1).Equals((object)(sbyte)0));
            Assert.False(((sbyte)0).Equals((object)(sbyte)1));
            Assert.True(((sbyte)1).Equals((object)(sbyte)1));
        }


        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((sbyte)0).Equals((sbyte)0));
            Assert.False(((sbyte)1).Equals((sbyte)0));
            Assert.False(((sbyte)0).Equals((sbyte)1));
            Assert.True(((sbyte)1).Equals((sbyte)1));

            Assert.True(((IEquatable<sbyte>)((sbyte)0)).Equals((sbyte)0));
            Assert.False(((IEquatable<sbyte>)((sbyte)1)).Equals((sbyte)0));
            Assert.False(((IEquatable<sbyte>)((sbyte)0)).Equals((sbyte)1));
            Assert.True(((IEquatable<sbyte>)((sbyte)1)).Equals((sbyte)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((sbyte)0).CompareTo((sbyte)0) == 0);
            Assert.True(((sbyte)1).CompareTo((sbyte)0) > 0);
            Assert.True(((sbyte)0).CompareTo((sbyte)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<sbyte>)((sbyte)0)).CompareTo((sbyte)0) == 0);
            Assert.True(((IComparable<sbyte>)((sbyte)1)).CompareTo((sbyte)0) > 0);
            Assert.True(((IComparable<sbyte>)((sbyte)0)).CompareTo((sbyte)1) < 0);
        }
    }
}
