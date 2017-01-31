using Bridge.Test.NUnit;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_IENUMERABLE)]
    [TestFixture(TestNameFormat = "IEnumerable - {0}")]
    public class IEnumerableTests
    {
        private class MyEnumerable : IEnumerable<string>
        {
            public IEnumerator<string> GetEnumerator()
            {
                yield return "x";
                yield return "y";
                yield return "z";
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }
        }

        [Test]
        public void ArrayImplementsIEnumerable()
        {
            Assert.True((object)new int[1] is IEnumerable<int>);
        }

        [Test]
        public void CustomClassThatShouldImplementIEnumerableDoesSo()
        {
            Assert.True((object)new MyEnumerable() is IEnumerable<string>);
        }

        [Test]
        public void ArrayGetEnumeratorMethodWorks()
        {
            var e = new[] { "x", "y", "z" }.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("z", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ArrayCastToIEnumerableCanBeEnumerated()
        {
            IEnumerable<string> enm = new[] { "x", "y", "z" };
            var e = enm.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("z", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ClassImplementingIEnumerableCanBeEnumerated()
        {
            MyEnumerable enm = new MyEnumerable();
            var e = enm.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("z", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ClassImplementingIEnumerableCastToIEnumerableCanBeEnumerated()
        {
            IEnumerable<string> enm = new MyEnumerable();
            var e = enm.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("z", e.Current);
            Assert.False(e.MoveNext());
        }
    }
}