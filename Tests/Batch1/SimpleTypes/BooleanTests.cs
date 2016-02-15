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
        class Counter
        {
            public int Count { get; set; }

            public bool Increment(bool r = true)
            {
                Count++;

                return r;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True((object)true is bool);
            Assert.AreEqual("Boolean", typeof(bool).GetClassName());
        }

        private T GetDefaultValue<T>()
        {
            return default(T);
        }

        [Test]
        public void DefaultValueIsFalse()
        {
            Assert.AreEqual(false, GetDefaultValue<bool>());
        }

        [Test]
        public void CreatingInstanceReturnsFalse()
        {
            Assert.AreEqual(false, Activator.CreateInstance<bool>());
        }

        [Test]
        public void DefaultConstructorReturnsFalse()
        {
            Assert.AreEqual(false, new bool());
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
        public void BoolEqualsWorks()
        {
            Assert.True(true.Equals(true));
            Assert.False(true.Equals(false));
            Assert.False(false.Equals(true));
            Assert.True(false.Equals(false));
        }

        [Test]
        public void LogicalExclusiveOrWorks()
        {
            Assert.True(true ^ false);
            Assert.False(false ^ false);
            Assert.False(true ^ true);
            var t = true;
            var f = false;
            Assert.True(t ^ f);
            Assert.False(f ^ f);
            Assert.False(t ^ t);
        }

        [Test]
        public void LogicalAndWorks()
        {
            Assert.False(true & false);
            Assert.False(false & false);
            Assert.True(true & true);
            var t = true;
            var f = false;
            Assert.False(t & f);
            Assert.False(f & f);
            Assert.True(t & t);
        }

        [Test]
        public void LogicalNegationWorks()
        {
            Assert.False(!true);
            Assert.True(!false);
            var t = true;
            var f = false;
            Assert.False(!t);
            Assert.True(!f);
        }

        [Test]
        public void ConditionalOperatorWorks()
        {
            var t = true;
            var f = false;
            Assert.False(!t ? true : false);
            Assert.True(!f ? true : false);
        }

        [Test]
        public void ConditionalAndWorks()
        {
            var counterAnd = new Counter();

            Assert.True(counterAnd.Increment() && counterAnd.Increment());
            Assert.AreEqual(2, counterAnd.Count, "1. Counter 2");
            Assert.False(counterAnd.Increment() && counterAnd.Increment(false));
            Assert.AreEqual(4, counterAnd.Count, "2. Counter 4");

            Assert.False(counterAnd.Increment(false) && counterAnd.Increment());
            Assert.AreEqual(5, counterAnd.Count, "3. Counter 5");
            Assert.False(counterAnd.Increment(false) && counterAnd.Increment(false));
            Assert.AreEqual(6, counterAnd.Count, "4. Counter 6");

            var t = true;
            var f = false;

            Assert.True(t && counterAnd.Increment());
            Assert.AreEqual(7, counterAnd.Count, "5. Counter 7");
            Assert.False(t && counterAnd.Increment(false));
            Assert.AreEqual(8, counterAnd.Count, "6. Counter 8");

            Assert.False(f && counterAnd.Increment());
            Assert.AreEqual(8, counterAnd.Count, "7. Counter 8");
            Assert.False(f && counterAnd.Increment(false));
            Assert.AreEqual(8, counterAnd.Count, "8. Counter 8");
        }

        [Test]
        public void ConditionalOrWorks()
        {
            var counterOr = new Counter();

            Assert.True(counterOr.Increment() || counterOr.Increment());
            Assert.AreEqual(1, counterOr.Count, "1. Counter 1");
            Assert.True(counterOr.Increment() || counterOr.Increment(false));
            Assert.AreEqual(2, counterOr.Count, "2. Counter 2");

            Assert.True(counterOr.Increment(false) || counterOr.Increment());
            Assert.AreEqual(4, counterOr.Count, "3. Counter 4");
            Assert.False(counterOr.Increment(false) || counterOr.Increment(false));
            Assert.AreEqual(6, counterOr.Count, "4. Counter 6");

            var t = true;
            var f = false;

            Assert.True(t || counterOr.Increment());
            Assert.AreEqual(6, counterOr.Count, "5. Counter 6");
            Assert.True(t || counterOr.Increment(false));
            Assert.AreEqual(6, counterOr.Count, "6. Counter 6");

            Assert.True(f || counterOr.Increment());
            Assert.AreEqual(7, counterOr.Count, "7. Counter 7");
            Assert.False(f || counterOr.Increment(false));
            Assert.AreEqual(8, counterOr.Count, "8. Counter 8");
        }

        [Test]
        public void EqualityWorks()
        {
            Assert.True(true == true);
            Assert.False(true == false);
            Assert.False(false == true);
            Assert.True(false == false);

            var t = true;
            var t1 = true;
            var f = false;
            var f1 = false;
            Assert.True(t == t1);
            Assert.False(t == f);
            Assert.False(f == t);
            Assert.True(f == f1);
        }

        [Test]
        public void InequalityWorks()
        {
            Assert.False(true != true);
            Assert.True(true != false);
            Assert.True(false != true);
            Assert.False(false != false);

            var t = true;
            var t1 = true;
            var f = false;
            var f1 = false;
            Assert.False(t != t1);
            Assert.True(t != f);
            Assert.True(f != t);
            Assert.False(f != f1);
        }

        //[Test]
        //public void CompareToWorks()
        //{
        //    Assert.True(true.CompareTo(true) == 0);
        //    Assert.True(true.CompareTo(false) > 0);
        //    Assert.True(false.CompareTo(true) < 0);
        //    Assert.True(false.CompareTo(false) == 0);
        //}

        //[Test]
        //public void IComparableCompareToWorks()
        //{
        //    Assert.True(((IComparable<bool>)true).CompareTo(true) == 0);
        //    Assert.True(((IComparable<bool>)true).CompareTo(false) > 0);
        //    Assert.True(((IComparable<bool>)false).CompareTo(true) < 0);
        //    Assert.True(((IComparable<bool>)false).CompareTo(false) == 0);
        //}
    }
}
