//#1626
using Bridge.Test.NUnit;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_ICOLLECTION)]
    [TestFixture(TestNameFormat = "IReadOnlyCollection - {0}")]
    public class IReadOnlyCollectionTests
    {
        private class MyCollection : IReadOnlyCollection<string>
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

            public bool Contains(string item)
            {
                return Items.Contains(item);
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
            Assert.AreEqual("System.Collections.Generic.IReadOnlyCollection`1[[System.Object, mscorlib]]", typeof(IReadOnlyCollection<object>).FullName, "FullName should be correct");
            Assert.True(typeof(IReadOnlyCollection<object>).IsInterface, "IsInterface should be true");

            var interfaces = typeof(IReadOnlyCollection<object>).GetInterfaces();
            Assert.AreEqual(2, interfaces.Length, "Interfaces length");
            Assert.AreEqual(typeof(IEnumerable<object>).FullName, interfaces[0].FullName, "Interfaces IEnumerable<object>");
            Assert.AreEqual(typeof(IEnumerable).FullName, interfaces[1].FullName, "Interfaces IEnumerable");
        }

        [Test]
        public void ArrayImplementsIReadOnlyCollection()
        {
            Assert.True((object)new int[1] is IReadOnlyCollection<int>);
        }

        [Test]
        public void CustomClassThatShouldImplementIReadOnlyCollectionDoesSo()
        {
            Assert.True((object)new MyCollection(new string[0]) is IReadOnlyCollection<string>);
        }

        [Test]
        public void ArrayCastToIReadOnlyCollectionCountWorks()
        {
            var a = new[] { "x", "y", "z" };

            var c = a as IReadOnlyCollection<string>;
            Assert.NotNull(c);
            Assert.AreEqual(3, c.Count);
        }

        [Test]
        public void ClassImplementingICollectionCastToIReadOnlyCollectionCountWorks()
        {
            Assert.AreEqual(3, ((IReadOnlyCollection<string>)new MyCollection(new[] { "x", "y", "z" })).Count);
        }

        [Test]
        public void ArrayCastToIReadOnlyCollectionContainsWorks()
        {
            IReadOnlyCollection<C> arr = new[] { new C(1), new C(2), new C(3) };
            Assert.True(arr.Contains(new C(2)));
            Assert.False(arr.Contains(new C(4)));
        }

        [Test]
        public void ClassImplementingICollectionCastToIReadOnlyCollectionContainsWorks()
        {
            IReadOnlyCollection<string> c = new MyCollection(new[] { "x", "y" });
            Assert.True(c.Contains("x"));
            Assert.False(c.Contains("z"));
        }
    }
}