using Bridge.Test.NUnit;

namespace Bridge.ClientTest.SimpleTypes
{
    [Category(Constants.MODULE_OBJECT)]
    [TestFixture(TestNameFormat = "Object - {0}")]
    public class ObjectTests
    {
        private class C1
        {
            public override string ToString()
            {
                return "test";
            }
        }

        private class C2 : C1
        {
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.True(new object() is object);
            Assert.AreEqual("System.Object", typeof(object).FullName);
            Assert.True(typeof(object).IsClass);
        }

        [Test]
        public void CanGetHashCodeForObject()
        {
            var o = new object();
            int c = o.GetHashCode();
            Assert.True((object)c is int);
        }

        [Test]
        public void RepeatedCallsToGetHashCodeReturnsSameValue()
        {
            var o = new object();
            Assert.AreEqual(o.GetHashCode(), o.GetHashCode());
        }

        [Test]
        public void ObjectIsEqualToItself()
        {
            var o = new object();
            Assert.True(o.Equals(o));
        }

        [Test]
        public void ObjectIsNotEqualToOtherObject()
        {
            Assert.False(new object().Equals(new object()));
        }

        [Test]
        public void StaticEqualsWorks()
        {
            object o1 = new object(), o2 = new object();
            Assert.True(Equals(null, null));
            Assert.False(Equals(null, o1));
            Assert.False(Equals(o1, null));
            Assert.True(Equals(o1, o1));
            Assert.False(Equals(o1, o2));
        }

        [Test]
        public void ReferenceEqualsWorks()
        {
            object o1 = new object(), o2 = new object(), n = null;
            Assert.True(ReferenceEquals(n, n), "n, n");
            Assert.True(ReferenceEquals(n, Script.Undefined), "n, Script.Undefined");
            Assert.False(ReferenceEquals(o1, o2), "o1, o2");
            Assert.False(ReferenceEquals(o1, n), "o1, n");
            Assert.False(ReferenceEquals(o1, Script.Undefined), "o1, Script.Undefined");
            Assert.True(ReferenceEquals(o1, o1), "o1, o1");
        }

        [Test]
        public void ToStringOverride()
        {
            object c1 = new C1(), c2 = new C2();
            Assert.AreEqual("test", c1.ToString(), "#1");
            Assert.AreEqual("test", c2.ToString(), "#1");
        }
    }
}