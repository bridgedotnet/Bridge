using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch4.SimpleTypes
{
    [TestFixture(TestNameFormat = "BooleanTests - {0}")]
    public class BooleanTests
    {
        [Test]
        public void TypePropertiesAreCorrect_SPI_1575()
        {
            Assert.True((object)true is bool);
            Assert.AreEqual("Boolean", typeof(bool).FullName);
            // #1575
            Assert.AreEqual(typeof(object), typeof(bool).BaseType);
            Assert.False(typeof(bool).IsClass);
            Assert.True(typeof(IComparable<bool>).IsAssignableFrom(typeof(bool)));
            Assert.True(typeof(IEquatable<bool>).IsAssignableFrom(typeof(bool)));

            object b = false;
            Assert.True(b is IComparable<bool>);
            Assert.True(b is IEquatable<bool>);

            var interfaces = typeof(bool).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length);
            Assert.True(interfaces.Contains(typeof(IComparable<bool>)));
            Assert.True(interfaces.Contains(typeof(IEquatable<bool>)));
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIsFalse()
        {
            Assert.AreStrictEqual(false, GetDefaultValue<bool>());
        }

        [Test]
        public void CreatingInstanceReturnsFalse()
        {
            Assert.AreStrictEqual(false, Activator.CreateInstance<bool>());
        }

        [Test]
        public void DefaultConstructorReturnsFalse_SPI_1576()
        {
            // #1576
            Assert.AreStrictEqual(false, new bool());
        }

        [Test]
        public void ParseWorks()
        {
            Assert.AreStrictEqual(true, bool.Parse("true"), "true");
            Assert.AreStrictEqual(true, bool.Parse("TRue"), "TRue");
            Assert.AreStrictEqual(true, bool.Parse("TRUE"), "TRUE");
            Assert.AreStrictEqual(true, bool.Parse("  true\t"), "true with spaces");

            Assert.AreStrictEqual(false, bool.Parse("false"), "false");
            Assert.AreStrictEqual(false, bool.Parse("FAlse"), "FAlse");
            Assert.AreStrictEqual(false, bool.Parse("FALSE"), "FALSE");
            Assert.AreStrictEqual(false, bool.Parse("  false\t"), "false with spaces");
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(true.GetHashCode(), true.GetHashCode());
            Assert.AreEqual(false.GetHashCode(), false.GetHashCode());
            Assert.AreNotEqual(true.GetHashCode(), false.GetHashCode());
        }

        [Test]
        public void ObjectEqualsWorks()
        {
            Assert.True(true.Equals((object)true));
            Assert.False(true.Equals((object)false));
            Assert.False(false.Equals((object)true));
            Assert.True(false.Equals((object)false));
        }

        [Test]
        public void IEquatableEqualsWorks()
        {
            Assert.True(true.Equals(true));
            Assert.False(true.Equals(false));
            Assert.False(false.Equals(true));
            Assert.True(false.Equals(false));

            Assert.True(((IEquatable<bool>)true).Equals(true));
            Assert.False(((IEquatable<bool>)true).Equals(false));
            Assert.False(((IEquatable<bool>)false).Equals(true));
            Assert.True(((IEquatable<bool>)false).Equals(false));
        }

        [Test]
        public void CompareToWorks()
        {
            Assert.True(true.CompareTo(true) == 0);
            Assert.True(true.CompareTo(false) > 0);
            Assert.True(false.CompareTo(true) < 0);
            Assert.True(false.CompareTo(false) == 0);
        }

        [Test]
        public void IComparableCompareToWorks()
        {
            Assert.True(((IComparable<bool>)true).CompareTo(true) == 0);
            Assert.True(((IComparable<bool>)true).CompareTo(false) > 0);
            Assert.True(((IComparable<bool>)false).CompareTo(true) < 0);
            Assert.True(((IComparable<bool>)false).CompareTo(false) == 0);
        }
    }
}
