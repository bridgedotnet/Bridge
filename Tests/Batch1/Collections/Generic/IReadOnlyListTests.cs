//#1626
using Bridge.Test.NUnit;
using System;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Collections.Generic
{
    [Category(Constants.MODULE_ICOLLECTION)]
    [TestFixture(TestNameFormat = "IReadOnlyList - {0}")]
    public class IReadOnlyListTests
    {
        private class MyList : IReadOnlyList<string>
        {
            public MyList(string[] items)
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

            public string this[int index]
            {
                get
                {
                    return Items[index];
                }
                set
                {
                    Items[index] = value;
                }
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
            Assert.AreEqual("System.Collections.Generic.IReadOnlyList`1[[System.Object, mscorlib]]", typeof(IReadOnlyList<object>).FullName, "FullName should be correct");
            Assert.True(typeof(IReadOnlyList<object>).IsInterface, "IsInterface should be true");

            var interfaces = typeof(IReadOnlyList<object>).GetInterfaces();
            Assert.AreEqual(3, interfaces.Length, "Interfaces length");
            Assert.True(interfaces.Contains(typeof(IEnumerable<object>)), "Interfaces should contain IEnumerable<object>");
            Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<object>)), "Interfaces should contain IReadOnlyCollection");
            Assert.True(interfaces.Contains(typeof(IEnumerable)), "Interfaces should contain IEnumerable");
        }

        [Test]
        public void CustomClassThatShouldImplementIReadOnlyListDoesSo()
        {
            Assert.True((object)new MyList(new string[0]) is IReadOnlyList<string>);
        }

        [Test]
        public void ArrayImplementsIReadOnlyList()
        {
            Assert.True((object)new int[1] is IReadOnlyList<int>);
        }

        [Test]
        public void ArrayCastToIReadOnlyListGetItemWorks()
        {
            IReadOnlyList<string> l = new[] { "x", "y", "z" };
            Assert.AreEqual("y", l[1]);
        }

        [Test]
        public void ClassImplementingIReadOnlyListGetItemWorks()
        {
            MyList l = new MyList(new[] { "x", "y", "z" });
            Assert.AreEqual("y", l[1]);
        }

        [Test]
        public void ClassImplementingIReadOnlyListCastToIReadOnlyListGetItemWorks()
        {
            IReadOnlyList<string> l = new MyList(new[] { "x", "y", "z" });
            Assert.AreEqual("y", l[1]);
        }
    }
}