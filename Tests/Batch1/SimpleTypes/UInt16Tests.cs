using Bridge.Test.NUnit;
using System;
using System.Globalization;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_UINT16)]
    [TestFixture(TestNameFormat = "UInt16 - {0}")]
    public class UInt16Tests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(ushort)0 is ushort);
            Assert.False((object)0.5 is ushort);
            Assert.False((object)-1 is ushort);
            Assert.False((object)65536 is ushort);
            Assert.AreEqual("System.UInt16", typeof(ushort).FullName);
            Assert.False(typeof(ushort).IsClass);
            Assert.True(typeof(IComparable<ushort>).IsAssignableFrom(typeof(ushort)));
            Assert.True(typeof(IEquatable<ushort>).IsAssignableFrom(typeof(ushort)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(ushort)));
            object s = (ushort)0;
            Assert.True(s is ushort);
            Assert.True(s is IComparable<ushort>);
            Assert.True(s is IEquatable<ushort>);
            Assert.True(s is IFormattable);

            var interfaces = typeof(ushort).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<ushort>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<ushort>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            int i1 = -1, i2 = 0, i3 = 234, i4 = 65535, i5 = 65536;
            int? ni1 = -1, ni2 = 0, ni3 = 234, ni4 = 65535, ni5 = 65536, ni6 = null;

            unchecked
            {
                Assert.AreStrictEqual(65535, (ushort)i1, "-1 unchecked");
                Assert.AreStrictEqual(0, (ushort)i2, "0 unchecked");
                Assert.AreStrictEqual(234, (ushort)i3, "234 unchecked");
                Assert.AreStrictEqual(65535, (ushort)i4, "65535 unchecked");
                Assert.AreStrictEqual(0, (ushort)i5, "65536 unchecked");

                Assert.AreStrictEqual(65535, (ushort?)ni1, "nullable -1 unchecked");
                Assert.AreStrictEqual(0, (ushort?)ni2, "nullable 0 unchecked");
                Assert.AreStrictEqual(234, (ushort?)ni3, "nullable 234 unchecked");
                Assert.AreStrictEqual(65535, (ushort?)ni4, "nullable 65535 unchecked");
                Assert.AreStrictEqual(0, (ushort?)ni5, "nullable 65536 unchecked");
                Assert.AreStrictEqual(null, (ushort?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ushort)i1;
                }, "-1 checked");
                Assert.AreStrictEqual(0, (ushort)i2, "0 checked");
                Assert.AreStrictEqual(234, (ushort)i3, "234 checked");
                Assert.AreStrictEqual(65535, (ushort)i4, "65535 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ushort)i5;
                }, "65536 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ushort?)ni1;
                }, "nullable -1 checked");
                Assert.AreStrictEqual(0, (ushort?)ni2, "nullable 0 checked");
                Assert.AreStrictEqual(234, (ushort?)ni3, "nullable 234 checked");
                Assert.AreStrictEqual(65535, (ushort?)ni4, "nullable 65535 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (ushort?)ni5;
                }, "nullable 65536 checked");
                Assert.AreStrictEqual(null, (ushort?)ni6, "null checked");
            }
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<ushort>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new ushort());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<ushort>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(0, ushort.MinValue);
            Assert.AreEqual(65535, ushort.MaxValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((ushort)0x123).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((ushort)0x123).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((ushort)0x123).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((ushort)0x123)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((ushort)0x123).LocaleFormat("x"), "123");
        //}

        [Test]
        public void TryParseWorks_SPI_1592()
        {
            ushort numberResult;
            bool result = ushort.TryParse("23445", out numberResult);
            Assert.True(result);
            Assert.AreEqual(23445, numberResult);

            result = ushort.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = ushort.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = ushort.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = ushort.TryParse("32768", out numberResult);
            Assert.True(result);
            Assert.AreEqual(32768, numberResult);

            result = ushort.TryParse("-1", out numberResult);
            Assert.False(result);
            // #1592
            Assert.AreEqual(-1, numberResult);
            //Assert.AreEqual(0, numberResult);

            result = ushort.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(23445, ushort.Parse("23445"));
            Assert.Throws<FormatException>(() => ushort.Parse(""));
            Assert.Throws<ArgumentNullException>(() => ushort.Parse(null));
            Assert.Throws<FormatException>(() => ushort.Parse("notanumber"));
            Assert.Throws<OverflowException>(() => ushort.Parse("65536"));
            Assert.Throws<OverflowException>(() => ushort.Parse("-1"));
            Assert.Throws<FormatException>(() => ushort.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((ushort)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((ushort)123).ToString(10));
            Assert.AreEqual("123", ((ushort)0x123).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((ushort)0).GetHashCode(), ((ushort)0).GetHashCode());
            Assert.AreEqual(((ushort)1).GetHashCode(), ((ushort)1).GetHashCode());
            Assert.AreNotEqual(((ushort)1).GetHashCode(), ((ushort)0).GetHashCode());
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