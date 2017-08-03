using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_SBYTE)]
    [TestFixture(TestNameFormat = "SByte - {0}")]
    public class SByteTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.False((object)(byte)0 is sbyte);
            Assert.False((object)0.5 is sbyte);
            Assert.False((object)-129 is sbyte);
            Assert.False((object)128 is sbyte);
            Assert.AreEqual("System.SByte", typeof(sbyte).FullName);
            Assert.False(typeof(sbyte).IsClass);
            Assert.True(typeof(IComparable<sbyte>).IsAssignableFrom(typeof(sbyte)));
            Assert.True(typeof(IEquatable<sbyte>).IsAssignableFrom(typeof(sbyte)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(sbyte)));
            object b = (sbyte)0;
            Assert.True(b is sbyte);
            Assert.True(b is IComparable<sbyte>);
            Assert.True(b is IEquatable<sbyte>);
            Assert.True(b is IFormattable);

            var interfaces = typeof(sbyte).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<sbyte>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<sbyte>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -129, i2 = -128, i3 = 80, i4 = 127, i5 = 128;
            int? ni1 = -129, ni2 = -128, ni3 = 80, ni4 = 127, ni5 = 128, ni6 = null;

            unchecked
            {
                Assert.AreStrictEqual(127, (sbyte)i1, "-129 unchecked");
                Assert.AreStrictEqual(-128, (sbyte)i2, "-128 unchecked");
                Assert.AreStrictEqual(80, (sbyte)i3, "80 unchecked");
                Assert.AreStrictEqual(127, (sbyte)i4, "127 unchecked");
                Assert.AreStrictEqual(-128, (sbyte)i5, "128 unchecked");

                Assert.AreStrictEqual(127, (sbyte?)ni1, "nullable -129 unchecked");
                Assert.AreStrictEqual(-128, (sbyte?)ni2, "nullable -128 unchecked");
                Assert.AreStrictEqual(80, (sbyte?)ni3, "nullable 80 unchecked");
                Assert.AreStrictEqual(127, (sbyte?)ni4, "nullable 127 unchecked");
                Assert.AreStrictEqual(-128, (sbyte?)ni5, "nullable 128 unchecked");
                Assert.AreStrictEqual(null, (sbyte?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (byte)i1;
                }, "-129 checked");
                Assert.AreStrictEqual(-128, (sbyte)i2, "-128 checked");
                Assert.AreStrictEqual(80, (sbyte)i3, "80 checked");
                Assert.AreStrictEqual(127, (sbyte)i4, "127 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (sbyte)i5;
                }, "-128 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (sbyte?)ni1;
                }, "nullable -129 checked");
                Assert.AreStrictEqual(-128, (sbyte?)ni2, "nullable -128 checked");
                Assert.AreStrictEqual(80, (sbyte?)ni3, "nullable 80 checked");
                Assert.AreStrictEqual(127, (sbyte?)ni4, "nullable 127 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (sbyte?)ni5;
                }, "nullable 128 checked");
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
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("12", ((sbyte)0x12).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("12", ((sbyte)0x12).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("12", ((IFormattable)((sbyte)0x12)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((sbyte)0x12).LocaleFormat("x"), "12");
        //}

        [Test]
        public void TryParseWorks_SPI_1592()
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
            // #1592
            Assert.AreEqual(54768, numberResult);
            //Assert.AreEqual(0, numberResult);

            result = sbyte.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(124, sbyte.Parse("124"));
            Assert.AreEqual(-123, sbyte.Parse("-123"));
            Assert.Throws<FormatException>(() => sbyte.Parse(""));
            Assert.Throws<ArgumentNullException>(() => sbyte.Parse(null));
            Assert.Throws<FormatException>(() => sbyte.Parse("notanumber"));
            Assert.Throws<OverflowException>(() => sbyte.Parse("54768"));
            Assert.Throws<FormatException>(() => sbyte.Parse("2.5"));
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