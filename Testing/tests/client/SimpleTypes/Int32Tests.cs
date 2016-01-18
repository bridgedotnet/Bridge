using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

#pragma warning disable 184, 219, 458

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_INT32)]
    [TestFixture(TestNameFormat = "Int32 - {0}")]
    public class Int32Tests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)(int)0 is int);
            Assert.False((object)0.5 is int);
            Assert.True((object)-2147483649 is int);
            Assert.True((object)2147483648 is int);
            Assert.AreEqual(typeof(int).GetClassName(), "Bridge.Int");

            object i = (int)0;
            Assert.True(i is int);
            Assert.True(i is IComparable<int>);
            Assert.True(i is IEquatable<int>);
            Assert.True(i is IFormattable);
        }

        [Test]
        public void CastsWork()
        {
            long? i1 = -2147483649, i2 = -2147483648, i3 = 5754, i4 = 2147483647, i5 = 2147483648;
            long? ni1 = -2147483649, ni2 = -2147483648, ni3 = 5754, ni4 = 2147483647, ni5 = 2147483648, ni6 = null;

            //unchecked
            {
                Assert.AreStrictEqual((int)i1, -2147483649, "-2147483649 unchecked");
                Assert.AreStrictEqual((int)i2, -2147483648, "-2147483648 unchecked");
                Assert.AreStrictEqual((int)i3, 5754, "5754 unchecked");
                Assert.AreStrictEqual((int)i4, 2147483647, "2147483647 unchecked");
                Assert.AreStrictEqual((int)i5, 2147483648, "2147483648 unchecked");

                Assert.AreStrictEqual((int?)ni1, -2147483649, "nullable -2147483649 unchecked");
                Assert.AreStrictEqual((int?)ni2, -2147483648, "nullable -2147483648 unchecked");
                Assert.AreStrictEqual((int?)ni3, 5754, "nullable 5754 unchecked");
                Assert.AreStrictEqual((int?)ni4, 2147483647, "nullable 2147483647 unchecked");
                Assert.AreStrictEqual((int?)ni5, 2147483648, "nullable 2147483648 unchecked");
                Assert.AreStrictEqual((int?)ni6, null, "null unchecked");
            }

            //checked
            {
                Assert.AreStrictEqual((int)i2, -2147483648, "-2147483648 checked");
                Assert.AreStrictEqual((int)i3, 5754, "5754 checked");
                Assert.AreStrictEqual((int)i4, 2147483647, "2147483647 checked");

                Assert.AreStrictEqual((int?)ni2, -2147483648, "nullable -2147483648 checked");
                Assert.AreStrictEqual((int?)ni3, 5754, "nullable 5754 checked");
                Assert.AreStrictEqual((int?)ni4, 2147483647, "nullable 2147483647 checked");
                Assert.AreStrictEqual((int?)ni6, null, "null checked");
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
            Assert.AreEqual((int?)_null, null);
            Assert.Throws(() => { var _ = (int?)o; }, "Cannot cast object to int?");
            Assert.Throws(() => { var _ = (int?)d; }, "Cannot cast decimal to int?");
            Assert.AreEqual((int?)i, 1);
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIs0()
        {
            Assert.AreStrictEqual(GetDefaultValue<int>(), 0);
        }

        [Test]
        public void DefaultConstructorReturnsZero()
        {
            Assert.AreStrictEqual(new int(), 0);
        }

        [IgnoreTest(Until = Constants.IGNORE_DATE)]
        [Test]
        public void CreatingInstanceReturnsZero()
        {
            Assert.AreStrictEqual(Activator.CreateInstance<int>(), 0);
        }

        [Test]
        public void ConstantsWork()
        {
            Assert.AreEqual(int.MinValue, -2147483648);
            Assert.AreEqual(int.MaxValue, 2147483647);
        }

        [Test]
        public void FormatWorks()
        {
            Assert.AreEqual(((int)0x123).Format("x"), "123");
        }

        [Test]
        public void IFormattableToStringWorks()
        {
            Assert.AreEqual(((int)0x123).ToString("x"), "123");
        }

        [Test]
        public void TryParseWorks()
        {
            int numberResult;
            bool result = int.TryParse("57574", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, 57574);

            result = int.TryParse("-14", out numberResult);
            Assert.True(result);
            Assert.AreEqual(numberResult, -14);

            result = int.TryParse("", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = int.TryParse(null, out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = int.TryParse("notanumber", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);

            result = int.TryParse("2.5", out numberResult);
            Assert.False(result);
            Assert.AreEqual(numberResult, 0);
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreEqual(int.Parse("57574"), 57574);
            Assert.AreEqual(int.Parse("-14"), -14);

            Assert.Throws(() => int.Parse(""));
            Assert.Throws(() => int.Parse(null));
            Assert.Throws(() => int.Parse("notanumber"));
            Assert.Throws(() => int.Parse("2147483648"));
            Assert.Throws(() => int.Parse("-2147483649"));
            Assert.Throws(() => int.Parse("2.5"));
        }

        [Test]
        public void ToStringWithoutRadixWorks()
        {
            Assert.AreEqual(((int)123).ToString(), "123");
        }

        [Test]
        public void ToStringWithRadixWorks()
        {
            Assert.AreEqual(((int)123).ToString(10), "123");
            Assert.AreEqual(((int)0x123).ToString(16), "123");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(((int)0).GetHashCode(), ((int)0).GetHashCode());
            Assert.AreEqual(((int)1).GetHashCode(), ((int)1).GetHashCode());
            Assert.AreNotEqual(((int)0).GetHashCode(), ((int)1).GetHashCode());
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
            Assert.AreEqual(a / b, 4);
            Assert.AreEqual(-a / b, -4);
            Assert.AreEqual(a / -b, -4);
            Assert.AreEqual(-a / -b, 4);
            Assert.Throws(() => { var x = a / c; });
        }

        [Test]
        public void IntegerModuloWorks()
        {
            int a = 17, b = 4, c = 0;
            Assert.AreEqual(a % b, 1);
            Assert.AreEqual(-a % b, -1);
            Assert.AreEqual(a % -b, 1);
            Assert.AreEqual(-a % -b, -1);
            //Assert.Throws(() => { var x = a % c; });
        }

        [Test]
        public void IntegerDivisionByZeroThrowsDivideByZeroException()
        {
            int a = 17, b = 0;
            Assert.Throws(() => { var x = a / b; });
        }

        [Test]
        public void DoublesAreTruncatedWhenConvertedToIntegers()
        {
            double d1 = 4.5;
            double? d2 = null;
            double? d3 = 8.5;
            Assert.AreEqual((int)d1, 4);
            Assert.AreEqual((int)-d1, -4);
            Assert.AreEqual((int?)d2, null);
            Assert.AreEqual((int)d3, 8);
            Assert.AreEqual((int)-d3, -8);
            Assert.AreEqual((int?)d3, 8);
            Assert.AreEqual((int?)-d3, -8);
        }
    }
}
