using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_ICOLLECTION)]
    [TestFixture(TestNameFormat = "ICollection - {0}")]
    public class ICollectionTests
    {
        private class MyCollection : ICollection<string>
        {
            public MyCollection(string[] items)
            {
                Items = new List<string>(items);
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return GetEnumerator();
            }

            public List<string> Items
            {
                get;
                private set;
            }

            public IEnumerator<string> GetEnumerator()
            {
                return Items.GetEnumerator();
            }

            public int Count
            {
                get
                {
                    return Items.Count;
                }
            }

            public bool IsReadOnly
            {
                get
                {
                    return false;
                }
            }

            public void CopyTo(string[] array, int arrayIndex)
            {
                Items.CopyTo(array, arrayIndex);
            }

            public void Add(string item)
            {
                Items.Add(item);
            }

            public void Clear()
            {
                Items.Clear();
            }

            public bool Contains(string item)
            {
                return Items.Contains(item);
            }

            public bool Remove(string item)
            {
                return Items.Remove(item);
            }
        }

        private class C
        {
            private readonly int _i;

            public C(int i)
            {
                _i = i;
            }

            public override bool Equals(object o)
            {
                return o is C && _i == ((C)o)._i;
            }

            public override int GetHashCode()
            {
                return _i;
            }
        }

        [Test]
        public void TypePropertiesAreCorrect()
        {
            Assert.AreEqual("System.Collections.Generic.ICollection`1[[System.Object, mscorlib]]", typeof(ICollection<object>).FullName, "FullName should be correct");
            Assert.True(typeof(ICollection<object>).IsInterface, "IsInterface should be true");

            var interfaces = typeof(ICollection<object>).GetInterfaces();
            Assert.AreEqual(2, interfaces.Length, "Interfaces length");
            Assert.AreEqual(typeof(IEnumerable<object>), interfaces[0], "Interfaces");
        }

        [Test]
        public void ArrayImplementsICollection()
        {
            Assert.True((object)new int[1] is ICollection<int>);
        }

        [Test]
        public void CustomClassThatShouldImplementICollectionDoesSo()
        {
            Assert.True((object)new MyCollection(new string[0]) is ICollection<string>);
        }

        [Test]
        public void ArrayCastToICollectionCountWorks()
        {
            Assert.AreEqual(3, ((ICollection<string>)new[] { "x", "y", "z" }).Count);
        }

        [Test]
        public void ClassImplementingICollectionCountWorks()
        {
            Assert.AreEqual(2, new MyCollection(new[] { "x", "y" }).Count);
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionCountWorks()
        {
            Assert.AreEqual(3, ((ICollection<string>)new MyCollection(new[] { "x", "y", "z" })).Count);
        }

        [Test]
        public void ArrayCastToICollectionIsReadOnlyWorks()
        {
            Assert.AreEqual(true, ((ICollection<string>)new[] { "x", "y", "z" }).IsReadOnly);
        }

        [Test]
        public void ClassImplementingICollectionIsReadOnlyWorks()
        {
            Assert.AreEqual(false, new MyCollection(new[] { "x", "y" }).IsReadOnly);
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionIsReadOnlyWorks()
        {
            Assert.AreEqual(false, ((ICollection<string>)new MyCollection(new[] { "x", "y", "z" })).IsReadOnly);
        }

        [Test]
        public void ClassImplementingICollectionAddWorks()
        {
            MyCollection c = new MyCollection(new[] { "x", "y" });
            c.Add("z");
            Assert.AreEqual(3, c.Count);
            Assert.True(c.Contains("z"));
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionAddWorks()
        {
            ICollection<string> c = new MyCollection(new[] { "x", "y" });
            c.Add("z");
            Assert.AreEqual(3, c.Count);
            Assert.True(c.Contains("z"));
        }

        [Test]
        public void ClassImplementingICollectionClearWorks()
        {
            MyCollection c = new MyCollection(new[] { "x", "y" });
            c.Clear();
            Assert.AreEqual(0, c.Count);
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionClearWorks()
        {
            ICollection<string> c = new MyCollection(new[] { "x", "y" });
            c.Clear();
            Assert.AreEqual(0, c.Count);
        }

        [Test]
        public void ArrayCastToICollectionContainsWorks()
        {
            ICollection<C> arr = new[] { new C(1), new C(2), new C(3) };
            Assert.True(arr.Contains(new C(2)));
            Assert.False(arr.Contains(new C(4)));
        }

        [Test]
        public void ClassImplementingICollectionContainsWorks()
        {
            MyCollection c = new MyCollection(new[] { "x", "y" });
            Assert.True(c.Contains("x"));
            Assert.False(c.Contains("z"));
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionContainsWorks()
        {
            ICollection<string> c = new MyCollection(new[] { "x", "y" });
            Assert.True(c.Contains("x"));
            Assert.False(c.Contains("z"));
        }

        [Test]
        public void ClassImplementingICollectionRemoveWorks()
        {
            MyCollection c = new MyCollection(new[] { "x", "y" });
            c.Remove("x");
            Assert.AreEqual(1, c.Count);
            c.Remove("y");
            Assert.AreEqual(0, c.Count);
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionRemoveWorks()
        {
            ICollection<string> c = new MyCollection(new[] { "x", "y" });
            c.Remove("x");
            Assert.AreEqual(1, c.Count);
            c.Remove("y");
            Assert.AreEqual(0, c.Count);
        }

        [Test]
        public void ClassImplementingICollectionCopyToWorks()
        {
            MyCollection l = new MyCollection(new[] { "x", "y" });

            var a1 = new string[2];
            l.CopyTo(a1, 0);

            Assert.AreEqual("x", a1[0], "1.Element 0");
            Assert.AreEqual("y", a1[1], "1.Element 1");

            var a2 = new string[4];
            l.CopyTo(a2, 1);

            Assert.AreEqual(null, a2[0], "2.Element 0");
            Assert.AreEqual("x", a2[1], "2.Element 1");
            Assert.AreEqual("y", a2[2], "2.Element 2");
            Assert.AreEqual(null, a2[3], "2.Element 3");

            Assert.Throws<ArgumentNullException>(() => { l.CopyTo(null, 0); }, "null");

            var a3 = new string[1];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a3, 0); }, "Short array");

            var a4 = new string[2];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a4, 1); }, "Start index 1");
            Assert.Throws<ArgumentOutOfRangeException>(() => { l.CopyTo(a4, -1); }, "Negative start index");
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a4, 3); }, "Start index 3");
        }

        [Test]
        public void ClassImplementingICollectionCastToICollectionCopyToWorks()
        {
            ICollection<string> l = new MyCollection(new[] { "x", "y" });

            var a1 = new string[2];
            l.CopyTo(a1, 0);

            Assert.AreEqual("x", a1[0], "1.Element 0");
            Assert.AreEqual("y", a1[1], "1.Element 1");

            var a2 = new string[4];
            l.CopyTo(a2, 1);

            Assert.AreEqual(null, a2[0], "2.Element 0");
            Assert.AreEqual("x", a2[1], "2.Element 1");
            Assert.AreEqual("y", a2[2], "2.Element 2");
            Assert.AreEqual(null, a2[3], "2.Element 3");

            Assert.Throws<ArgumentNullException>(() => { l.CopyTo(null, 0); }, "null");

            var a3 = new string[1];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a3, 0); }, "Short array");

            var a4 = new string[2];
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a4, 1); }, "Start index 1");
            Assert.Throws<ArgumentOutOfRangeException>(() => { l.CopyTo(a4, -1); }, "Negative start index");
            Assert.Throws<ArgumentException>(() => { l.CopyTo(a4, 3); }, "Start index 3");
        }
    }
}