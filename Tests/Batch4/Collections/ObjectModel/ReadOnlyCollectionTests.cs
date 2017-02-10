using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Collections.ObjectModel;

namespace Bridge.ClientTest.Batch4.Collections.ObjectModel
{
    [TestFixture(TestNameFormat = "ReadOnlyCollectionTests - {0}")]
    public class ReadOnlyCollectionTests
    {
        private class C
        {
            public readonly int i;

            public C(int i)
            {
                this.i = i;
            }

            public override bool Equals(object o)
            {
                return o is C && i == ((C)o).i;
            }

            public override int GetHashCode()
            {
                return i;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.ObjectModel.ReadOnlyCollection$1[[System.Int32, mscorlib]]", typeof(ReadOnlyCollection<int>).FullName, "FullName should be Array");
            Assert.True(typeof(ReadOnlyCollection<int>).IsClass, "IsClass should be true");
            object list = new ReadOnlyCollection<int>(new int[0]);
            Assert.True(list is ReadOnlyCollection<int>, "is ReadOnlyCollection<int> should be true");
            Assert.True(list is IList<int>, "is IList<int> should be true");
            Assert.True(list is ICollection<int>, "is ICollection<int> should be true");
            Assert.True(list is IEnumerable<int>, "is IEnumerable<int> should be true");
        }

        [Test]
        public void ConstructorWorks()
        {
            var l = new ReadOnlyCollection<int>(new int[] { 41, 42, 43 });
            Assert.AreEqual(3, l.Count);
            Assert.AreEqual(41, l[0]);
            Assert.AreEqual(42, l[1]);
            Assert.AreEqual(43, l[2]);
        }

        [Test]
        public void CountWorks()
        {
            Assert.AreEqual(0, new ReadOnlyCollection<string>(new string[0]).Count);
            Assert.AreEqual(1, new ReadOnlyCollection<string>(new string[1]).Count);
            Assert.AreEqual(2, new ReadOnlyCollection<string>(new string[2]).Count);
        }

        [Test]
        public void IndexingWorks()
        {
            var l = new ReadOnlyCollection<string>(new[] { "x", "y" });
            Assert.AreEqual("x", l[0]);
            Assert.AreEqual("y", l[1]);
        }

        [Test]
        public void ForeachWorks()
        {
            string result = "";
            foreach (var s in new ReadOnlyCollection<string>(new[] { "x", "y" }))
            {
                result += s;
            }
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void GetEnumeratorWorks()
        {
            var e = new ReadOnlyCollection<string>(new[] { "x", "y" }).GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ContainsWorks()
        {
            var l = new ReadOnlyCollection<string>(new[] { "x", "y" });
            Assert.True(l.Contains("x"));
            Assert.False(l.Contains("z"));
        }

        [Test]
        public void ContainsUsesEqualsMethod()
        {
            var l = new ReadOnlyCollection<C>(new[] { new C(1), new C(2), new C(3) });
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void IndexOfWorks()
        {
            Assert.AreEqual(1, new ReadOnlyCollection<string>(new[] { "a", "b", "c", "b" }).IndexOf("b"));
            Assert.AreEqual(1, new ReadOnlyCollection<C>(new[] { new C(1), new C(2), new C(3), new C(2) }).IndexOf(new C(2)));
        }

        [Test]
        public void ForeachWhenCastToIEnumerableWorks()
        {
            IEnumerable<string> list = new ReadOnlyCollection<string>(new[] { "x", "y" });
            string result = "";
            foreach (var s in list)
            {
                result += s;
            }
            Assert.AreEqual("xy", result);
        }

        [Test]
        public void IEnumerableGetEnumeratorWorks()
        {
            var l = (IEnumerable<string>)new ReadOnlyCollection<string>(new[] { "x", "y" });
            var e = l.GetEnumerator();
            Assert.True(e.MoveNext());
            Assert.AreEqual("x", e.Current);
            Assert.True(e.MoveNext());
            Assert.AreEqual("y", e.Current);
            Assert.False(e.MoveNext());
        }

        [Test]
        public void ICollectionCountWorks()
        {
            IList<string> l = new ReadOnlyCollection<string>(new[] { "x", "y", "z" });
            Assert.AreEqual(3, l.Count);
        }

        [Test]
        public void ICollectionContainsWorks()
        {
            IList<string> l = new ReadOnlyCollection<string>(new[] { "x", "y", "z" });
            Assert.True(l.Contains("y"));
            Assert.False(l.Contains("a"));
        }

        [Test]
        public void ICollectionContainsUsesEqualsMethod()
        {
            IList<C> l = new ReadOnlyCollection<C>(new[] { new C(1), new C(2), new C(3) });
            Assert.True(l.Contains(new C(2)));
            Assert.False(l.Contains(new C(4)));
        }

        [Test]
        public void IListIndexingWorks()
        {
            IList<string> l = new ReadOnlyCollection<string>(new[] { "x", "y", "z" });
            Assert.AreEqual("y", l[1]);
        }

        [Test]
        public void IListIndexOfWorks()
        {
            IList<string> l = new ReadOnlyCollection<string>(new[] { "x", "y", "z" });
            Assert.AreEqual(1, l.IndexOf("y"));
            Assert.AreEqual(-1, l.IndexOf("a"));
        }

        [Test]
        public void IListIndexOfUsesEqualsMethod()
        {
            IList<C> l = new ReadOnlyCollection<C>(new[] { new C(1), new C(2), new C(3) });
            Assert.AreEqual(1, l.IndexOf(new C(2)));
            Assert.AreEqual(-1, l.IndexOf(new C(4)));
        }
    }
}