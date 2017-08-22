using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_EQUALITYCOMPARER)]
    [TestFixture]
    public class EqualityComparerTests
    {
        private class MyClass
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
        public void TypePropertiesAreCorrect_SPI_1546()
        {
            // #1546
            Assert.AreStrictEqual(typeof(object), typeof(EqualityComparer<object>).BaseType, "BaseType should be correct");
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.EqualityComparer`1[[System.Object, mscorlib]]", typeof(EqualityComparer<object>).FullName, "FullName should be correct");
            Assert.True(typeof(EqualityComparer<object>).IsClass, "IsClass should be true");

            object dict = EqualityComparer<object>.Default;
            Assert.True(dict is EqualityComparer<object>, "is EqualityComparer<object> should be true");
            Assert.True(dict is IEqualityComparer<object>, "is IEqualityComparer<object> should be true");
        }

        [Test]
        public void DefaultComparerCanGetHashCodeOfNumber()
        {
            Assert.AreEqual(12345.GetHashCode(), EqualityComparer<object>.Default.GetHashCode(12345));
        }

        [Test]
        public void DefaultComparerReturnsZeroAsHashCodeForNullAndUndefined()
        {
            Assert.AreEqual(0, EqualityComparer<object>.Default.GetHashCode(null));
            Assert.AreEqual(0, EqualityComparer<object>.Default.GetHashCode(Script.Undefined));
        }

        [Test]
        public void DefaultComparerCanDetermineEquality()
        {
            var o1 = new object();
            var o2 = new object();

            Assert.True(EqualityComparer<object>.Default.Equals(null, null), "null, null");
            Assert.False(EqualityComparer<object>.Default.Equals(null, o1), "null, o1");
            Assert.False(EqualityComparer<object>.Default.Equals(o1, null), "o1, null");
            Assert.True(EqualityComparer<object>.Default.Equals(o1, o1), "o1, o1");
            Assert.False(EqualityComparer<object>.Default.Equals(o1, o2), "o1, o2");
        }

        [Test]
        public void DefaultComparerInvokesOverriddenGetHashCode()
        {
            Assert.AreEqual(42158, EqualityComparer<object>.Default.GetHashCode(new MyClass
            {
                hashCode = 42158
            }));
        }

        [Test]
        public void DefaultComparerInvokesOverriddenEquals()
        {
            var c = new MyClass();
            var other = new MyClass();
            c.shouldEqual = false;
            Assert.False(EqualityComparer<object>.Default.Equals(c, other));
            Assert.AreStrictEqual(other, c.other);

            c.shouldEqual = true;
            c.other = null;
            Assert.True(EqualityComparer<object>.Default.Equals(c, other));
            Assert.AreStrictEqual(other, c.other);

            c.shouldEqual = true;
            c.other = other;
            Assert.False(EqualityComparer<object>.Default.Equals(c, null)); // We should not invoke our own equals so its return value does not matter.
            Assert.AreEqual(other, c.other); // We should not invoke our own equals so the 'other' member should not be set.
        }
    }
}