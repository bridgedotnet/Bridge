using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT16)]
    [TestFixture(TestNameFormat = "Int16 - {0}")]
    public class Int16Tests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(short)0 is short);
            Assert.False((object)0.5 is short);
            Assert.False((object)-32769 is short);
            Assert.False((object)32768 is short);
            Assert.AreEqual("System.Int16", typeof(short).FullName);
            Assert.False(typeof(short).IsClass);
            Assert.True(typeof(IComparable<short>).IsAssignableFrom(typeof(short)));
            Assert.True(typeof(IEquatable<short>).IsAssignableFrom(typeof(short)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(short)));
            object s = (short)0;
            Assert.True(s is short);
            Assert.True(s is IComparable<short>);
            Assert.True(s is IEquatable<short>);
            Assert.True(s is IFormattable);

            var interfaces = typeof(short).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<short>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<short>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -32769, i2 = -32768, i3 = 5754, i4 = 32767, i5 = 32768;
            int? ni1 = -32769, ni2 = -32768, ni3 = 5754, ni4 = 32767, ni5 = 32768, ni6 = null;

            unchecked
            {
                Assert.AreStrictEqual(32767, (short)i1, "-32769 unchecked");
                Assert.AreStrictEqual(-32768, (short)i2, "-32768 unchecked");
                Assert.AreStrictEqual(5754, (short)i3, "5754 unchecked");
                Assert.AreStrictEqual(32767, (short)i4, "32767 unchecked");
                Assert.AreStrictEqual(-32768, (short)i5, "32768 unchecked");

                Assert.AreStrictEqual(32767, (short?)ni1, "nullable -32769 unchecked");
                Assert.AreStrictEqual(-32768, (short?)ni2, "nullable -32768 unchecked");
                Assert.AreStrictEqual(5754, (short?)ni3, "nullable 5754 unchecked");
                Assert.AreStrictEqual(32767, (short?)ni4, "nullable 32767 unchecked");
                Assert.AreStrictEqual(-32768, (short?)ni5, "nullable 32768 unchecked");
                Assert.AreStrictEqual(null, (short?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (short)i1;
                }, "-32769 checked");
                Assert.AreStrictEqual(-32768, (short)i2, "-32768 checked");
                Assert.AreStrictEqual(5754, (short)i3, "5754 checked");
                Assert.AreStrictEqual(32767, (short)i4, "32767 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (short)i5;
                }, "32768 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (short?)ni1;
                }, "nullable -32769 checked");
                Assert.AreStrictEqual(-32768, (short?)ni2, "nullable -32768 checked");
                Assert.AreStrictEqual(5754, (short?)ni3, "nullable 5754 checked");
                Assert.AreStrictEqual(32767, (short?)ni4, "nullable 32767 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (short?)ni5;
                }, "nullable 32768 checked");
                Assert.AreStrictEqual(null, (short?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<short>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new short());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<short>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(-32768, short.MinValue);
            Assert.AreEqual(32767, short.MaxValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((short)0x123).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((short)0x123).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((short)0x123).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((short)0x123)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((short)0x123).LocaleFormat("x"), "123");
        //}

        [Test]
        public void TryParseWorks_SPI_1592()
        {
            short numberResult;
            bool result = short.TryParse("234", out numberResult);
            Assert.True(result);
            Assert.AreEqual(234, numberResult);

            result = short.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = short.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = short.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = short.TryParse("54768", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult, "#1592");

            result = short.TryParse("-55678", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult, "#1592");

            result = short.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(234, short.Parse("234"));
            Assert.Throws<FormatException>(() => short.Parse(""));
            Assert.Throws<ArgumentNullException>(() => short.Parse(null));
            Assert.Throws<FormatException>(() => short.Parse("notanumber"));
            Assert.Throws<OverflowException>(() => short.Parse("54768"));
            Assert.Throws<OverflowException>(() => short.Parse("-55678"));
            Assert.Throws<FormatException>(() => short.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((short)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((short)123).ToString(10));
            Assert.AreEqual("123", ((short)0x123).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((short)0).GetHashCode(), ((short)0).GetHashCode());
            Assert.AreEqual(((short)1).GetHashCode(), ((short)1).GetHashCode());
            Assert.AreNotEqual(((short)1).GetHashCode(), ((short)0).GetHashCode());
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