using System;
using System.Runtime.CompilerServices;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.PREFIX_SYSTEM_CLASSES)]
    [TestFixture(TestNameFormat = "Boolean - {0}")]
    public class BooleanTests
    {
        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)true is bool);
            Assert.AreEqual(typeof(bool).GetClassName(), "Boolean");
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIsFalse()
        {
            Assert.AreEqual(GetDefaultValue<bool>(), false);
        }

        [Test]
        public void CreatingInstanceReturnsFalse()
        {
            Assert.AreEqual(Activator.CreateInstance<bool>(), false);
        }

        [Test]
        public void DefaultConstructorReturnsFalse()
        {
            Assert.AreEqual(new bool(), false);
        }

        [Test]
        public void GetHashCodeWorks()
        {
            Assert.AreEqual(true.GetHashCode(), true.GetHashCode());
            Assert.AreEqual(false.GetHashCode(), false.GetHashCode());
            Assert.AreNotEqual(false.GetHashCode(), true.GetHashCode());
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
        public void BoolEqualsWorks()
        {
            Assert.True(true.Equals(true));
            Assert.False(true.Equals(false));
            Assert.False(false.Equals(true));
            Assert.True(false.Equals(false));
        }

        //[Test]
        //public void CompareToWorks() {
        //    Assert.True(true.CompareTo(true) == 0);
        //    Assert.True(true.CompareTo(false) > 0);
        //    Assert.True(false.CompareTo(true) < 0);
        //    Assert.True(false.CompareTo(false) == 0);
        //}

        //[Test]
        //public void IComparableCompareToWorks() {
        //    Assert.True(((IComparable<bool>)true).CompareTo(true) == 0);
        //    Assert.True(((IComparable<bool>)true).CompareTo(false) > 0);
        //    Assert.True(((IComparable<bool>)false).CompareTo(true) < 0);
        //    Assert.True(((IComparable<bool>)false).CompareTo(false) == 0);
        //}
    }
}
