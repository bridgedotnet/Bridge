using Bridge.Test.NUnit;
using System;
using System.Globalization;

#pragma warning disable 184, 219, 458

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT32)]
    [TestFixture(TestNameFormat = "Int32 - {0}")]
    public class Int32Tests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1717()
        {
            Assert.True((object)(int)0 is int);
            Assert.False((object)0.5 is int);
            Assert.False((object)-2147483649 is int);
            Assert.False((object)2147483648 is int);
            Assert.AreEqual("System.Int32", typeof(int).FullName);
            Assert.False(typeof(int).IsClass);
            Assert.True(typeof(IComparable<int>).IsAssignableFrom(typeof(int)));
            Assert.True(typeof(IEquatable<int>).IsAssignableFrom(typeof(int)));
            Assert.True(typeof(IFormattable).IsAssignableFrom(typeof(int)));
            object i = (int)0;
            Assert.True(i is int);
            Assert.True(i is IComparable<int>);
            Assert.True(i is IEquatable<int>);
            Assert.True(i is IFormattable);

            var interfaces = typeof(int).GetInterfaces();
            Assert.AreEqual(4, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<int>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<int>)));
            Assert.True(interfaces.Contains(typeof(IFormattable)));
        }

        [Test]
        public void CastsWork()
        {
            long? i1 = -2147483649, i2 = -2147483648, i3 = 5754, i4 = 2147483647, i5 = 2147483648;
            long? ni1 = -2147483649, ni2 = -2147483648, ni3 = 5754, ni4 = 2147483647, ni5 = 2147483648, ni6 = null;

            unchecked
            {
                Assert.AreStrictEqual(2147483647, (int)i1, "-2147483649 unchecked");
                Assert.AreStrictEqual(-2147483648, (int)i2, "-2147483648 unchecked");
                Assert.AreStrictEqual(5754, (int)i3, "5754 unchecked");
                Assert.AreStrictEqual(2147483647, (int)i4, "2147483647 unchecked");
                Assert.AreStrictEqual(-2147483648, (int)i5, "2147483648 unchecked");

                Assert.AreStrictEqual(2147483647, (int?)ni1, "nullable -2147483649 unchecked");
                Assert.AreStrictEqual(-2147483648, (int?)ni2, "nullable -2147483648 unchecked");
                Assert.AreStrictEqual(5754, (int?)ni3, "nullable 5754 unchecked");
                Assert.AreStrictEqual(2147483647, (int?)ni4, "nullable 2147483647 unchecked");
                Assert.AreStrictEqual(-2147483648, (int?)ni5, "nullable 2147483648 unchecked");
                Assert.AreStrictEqual(null, (int?)ni6, "null unchecked");
            }

            checked
            {
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (int)i1;
                }, "-2147483649 checked");
                Assert.AreStrictEqual(-2147483648, (int)i2, "-2147483648 checked");
                Assert.AreStrictEqual(5754, (int)i3, "5754 checked");
                Assert.AreStrictEqual(2147483647, (int)i4, "2147483647 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (int)i5;
                }, "32768 checked");

                Assert.Throws<OverflowException>(() =>
                {
                    var x = (int?)ni1;
                }, "nullable -2147483649 checked");
                Assert.AreStrictEqual(-2147483648, (int?)ni2, "nullable -2147483648 checked");
                Assert.AreStrictEqual(5754, (int?)ni3, "nullable 5754 checked");
                Assert.AreStrictEqual(2147483647, (int?)ni4, "nullable 2147483647 checked");
                Assert.Throws<OverflowException>(() =>
                {
                    var x = (int?)ni5;
                }, "nullable 2147483648 checked");
                Assert.AreStrictEqual(null, (int?)ni6, "null checked");
            }
        }

        [Test]
        public void TypeIsWorksForInt32()
        {
            Assert.False((object)null is int);
            Assert.False((object)1.5 is int);
            Assert.False(new object() is int);
            Assert.True((object)1 is int);
        }

        [Test]
        public void TypeAsWorksForInt32()
        {
            Assert.False((null as int?) != null);
            Assert.False((new object() as int?) != null);
            Assert.False(((object)1.5 as int?) != null);
            Assert.True((1 as int?) != null);
        }

        [Test]
        public void UnboxingWorksForInt32()
        {
            object _null = null;
            object o = new object();
            object d = 1.5;
            object i = 1;
            Assert.AreEqual(null, (int?)_null);
            Assert.Throws(() =>
            {
                var _ = (int?)o;
            });
            Assert.Throws(() =>
            {
                var _ = (int?)d;
            });
            Assert.AreEqual(1, (int?)i);
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(0, GetDefaultValue<int>());
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(0, new int());
        }

        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(0, Activator.CreateInstance<int>());
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(-2147483648, int.MinValue);
            Assert.AreEqual(2147483647, int.MaxValue);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual("123", ((int)0x123).Format("x"));
        }

        [Test]
        public void ToStringWithFormatWorks()
        {
            Assert.AreEqual("123", ((int)0x123).ToString("x"));
        }

        [Test]
        public void ToStringWithFormatAndProviderWorks()
        {
            Assert.AreEqual("123", ((int)0x123).ToString("x", CultureInfo.InvariantCulture));
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual("123", ((IFormattable)((int)0x123)).ToString("x", CultureInfo.InvariantCulture));
        }

        // Not C# API
        //[Test]
        //public void LocaleFormatWorks()
        //{
        //    Assert.AreEqual(((int)0x123).LocaleFormat("x"), "123");
        //}

        [Test]
        public void TryParseWorks()
        {
            int numberResult;
            bool result = int.TryParse("57574", out numberResult);
            Assert.True(result);
            Assert.AreEqual(57574, numberResult);

            result = int.TryParse("-14", out numberResult);
            Assert.True(result);
            Assert.AreEqual(-14, numberResult);

            result = int.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = int.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = int.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);

            result = int.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(0, numberResult);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(57574, int.Parse("57574"));
            Assert.AreEqual(-14, int.Parse("-14"));

            Assert.Throws<FormatException>(() => int.Parse(""));
            Assert.Throws<ArgumentNullException>(() => int.Parse(null));
            Assert.Throws<FormatException>(() => int.Parse("notanumber"));
            Assert.Throws<OverflowException>(() => int.Parse("2147483648"));
            Assert.Throws<OverflowException>(() => int.Parse("-2147483649"));
            Assert.Throws<FormatException>(() => int.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual("123", ((int)123).ToString());
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual("123", ((int)123).ToString(10));
            Assert.AreEqual("123", ((int)0x123).ToString(16));
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((int)0).GetHashCode(), ((int)0).GetHashCode());
            Assert.AreEqual(((int)1).GetHashCode(), ((int)1).GetHashCode());
            Assert.AreNotEqual(((int)1).GetHashCode(), ((int)0).GetHashCode());
        }

        [Test]
        public void EqualsWorks()
        {
            Assert.True(((int)0).Equals((object)(int)0));
            Assert.False(((int)1).Equals((object)(int)0));
            Assert.False(((int)0).Equals((object)(int)1));
            Assert.True(((int)1).Equals((object)(int)1));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(((int)0).Equals((int)0));
            Assert.False(((int)1).Equals((int)0));
            Assert.False(((int)0).Equals((int)1));
            Assert.True(((int)1).Equals((int)1));

            Assert.True(((IEquatable<int>)((int)0)).Equals((int)0));
            Assert.False(((IEquatable<int>)((int)1)).Equals((int)0));
            Assert.False(((IEquatable<int>)((int)0)).Equals((int)1));
            Assert.True(((IEquatable<int>)((int)1)).Equals((int)1));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(((int)0).CompareTo((int)0) == 0);
            Assert.True(((int)1).CompareTo((int)0) > 0);
            Assert.True(((int)0).CompareTo((int)1) < 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<int>)((int)0)).CompareTo((int)0) == 0);
            Assert.True(((IComparable<int>)((int)1)).CompareTo((int)0) > 0);
            Assert.True(((IComparable<int>)((int)0)).CompareTo((int)1) < 0);
        }

        [Test]
        public void IntegerDivisionWorks()
        {
            int a = 17, b = 4, c = 0;
            Assert.AreEqual(4, a / b);
            Assert.AreEqual(-4, -a / b);
            Assert.AreEqual(-4, a / -b);
            Assert.AreEqual(4, -a / -b);
            Assert.Throws<DivideByZeroException>(() =>
            {
                var x = a / c;
            });
        }

        [Test]
        public void IntegerModuloWorks_SPI_1602()
        {
            int a = 17, b = 4, c = 0;
            Assert.AreEqual(1, a % b);
            Assert.AreEqual(-1, -a % b);
            Assert.AreEqual(1, a % -b);
            Assert.AreEqual(-1, -a % -b);
            // #1602
            //Assert.Throws<DivideByZeroException>(() =>
            //{
            //    var x = a % c;
            //});
        }

        [Test]
        public void IntegerDivisionByZeroThrowsDivideByZeroException()
        {
            int a = 17, b = 0;
            Assert.Throws<DivideByZeroException>(() =>
            {
                var x = a / b;
            });
        }

        [Test]
        public void DoublesAreTruncatedWhenConvertedToIntegers()
        {
            double d1 = 4.5;
            double? d2 = null;
            double? d3 = 8.5;
            Assert.AreEqual(4, (int)d1);
            Assert.AreEqual(-4, (int)-d1);
            Assert.AreEqual(null, (int?)d2);
            Assert.AreEqual(8, (int)d3);
            Assert.AreEqual(-8, (int)-d3);
            Assert.AreEqual(8, (int?)d3);
            Assert.AreEqual(-8, (int?)-d3);
        }
    }
}