using System;
using System.Collections.Generic;
using Bridge;
using Bridge.Test;
using Bridge.ClientTest;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_EQUALITYCOMPARER)]
    [TestFixture]
    public class EqualityComparerTests
    {
        class MyClass
        {
            public int hashCode;
            public object other;
            public bool shouldEqual;

            public override int GetHashCode()
            {
                return hashCode;
            }

            public override bool Equals(object o)
            {
                other = o;
                return shouldEqual;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual(typeof(EqualityComparer<object>).GetClassName(), "Bridge.EqualityComparer$1$Object", "FullName should be correct");
            object dict = EqualityComparer<object>.Default;
            Assert.True(dict is EqualityComparer<object>, "is EqualityComparer<object> should be true");
            Assert.True(dict is IEqualityComparer<object>, "is IEqualityComparer<object> should be true");
        }

        [Test]
        public void DefaultComparerCanGetHashCodeOfNumber()
        {
            Assert.AreEqual(EqualityComparer<object>.Default.GetHashCode(12345), 12345.GetHashCode());
        }

        [Test]
        public void DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined()
        {
            Assert.AreEqual(EqualityComparer<object>.Default.GetHashCode(null), 0);
            Assert.AreEqual(EqualityComparer<object>.Default.GetHashCode(Script.Undefined), 0);
        }

        [Test]
        public void DefaultComparerCanDetermineEquality()
        {
            object
                o1 = new object(),
                o2 = new object();

            Assert.True(EqualityComparer<object>.Default.Equals(null, null), "null, null");
            Assert.False(EqualityComparer<object>.Default.Equals(null, o1), "null, o1");
            Assert.False(EqualityComparer<object>.Default.Equals(o1, null), "o1, null");
            Assert.True(EqualityComparer<object>.Default.Equals(o1, o1), "o1, o1");
            Assert.False(EqualityComparer<object>.Default.Equals(o1, o2), "o1, o2");
        }

        [Test]
        public void DefaultComparerInvokesOverriddenGetHashCode()
        {
            Assert.AreEqual(EqualityComparer<object>.Default.GetHashCode(new MyClass { hashCode = 42158 }), 42158);
        }

        [Test]
        public void DefaultComparerInvokesOverriddenEquals()
        {
            var c = new MyClass();
            var other = new MyClass();
            c.shouldEqual = false;
            Assert.False(EqualityComparer<object>.Default.Equals(c, other));
            Assert.AreStrictEqual(c.other, other);

            c.shouldEqual = true;
            c.other = null;
            Assert.True(EqualityComparer<object>.Default.Equals(c, other));
            Assert.AreStrictEqual(c.other, other);

            c.shouldEqual = true;
            c.other = other;
            Assert.False(EqualityComparer<object>.Default.Equals(c, null)); // We should not invoke our own equals so its return value does not matter.
            Assert.AreEqual(c.other, other); // We should not invoke our own equals so the 'other' member should not be set.
        }
    }
}
