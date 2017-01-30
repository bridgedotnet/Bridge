// #1626
//using Bridge.Test.NUnit;
//using System.Collections;
//using System.Collections.Generic;

//namespace Bridge.ClientTest.Batch4.Collections.Generic
//{
//    [TestFixture]
//    public class IReadOnlyCollectionTests
//    {
//        private class MyCollection : IReadOnlyCollection<string>
//        {
//            public MyCollection(string[] items)
//            {
//                Items = new List<string>(items);
//            }

//            IEnumerator IEnumerable.GetEnumerator()
//            {
//                return GetEnumerator();
//            }

//            public List<string> Items
//            {
//                get;
//                private set;
//            }

//            public IEnumerator<string> GetEnumerator()
//            {
//                return Items.GetEnumerator();
//            }

//            public int Count
//            {
//                get
//                {
//                    return Items.Count;
//                }
//            }

//            public bool Contains(string item)
//            {
//                return Items.Contains(item);
//            }
//        }

//        private class C
//        {
//            private readonly int _i;

//            public C(int i)
//            {
//                _i = i;
//            }

//            public override bool Equals(object o)
//            {
//                return o is C && _i == ((C)o)._i;
//            }

//            public override int GetHashCode()
//            {
//                return _i;
//            }
//        }

//        [Test]
//        public void TypePropertiesAreCorrect()
//        {
//            Assert.AreEqual(typeof(IReadOnlyCollection<object>).FullName, "Bridge.IReadOnlyCollection", "FullName should be correct");
//            Assert.True(typeof(IReadOnlyCollection<object>).IsInterface, "IsInterface should be true");

//            var interfaces = typeof(IReadOnlyCollection<object>).GetInterfaces();
//            Assert.AreEqual(interfaces.Length, 1, "Interfaces length");
//            Assert.AreEqual(interfaces[0], typeof(IEnumerable<object>), "Interfaces");
//        }

//        [Test]
//        public void ArrayImplementsIReadOnlyCollection()
//        {
//            Assert.True((object)new int[1] is IReadOnlyCollection<int>);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void CustomClassThatShouldImplementIReadOnlyCollectionDoesSo()
//        {
//            Assert.True((object)new MyCollection(new string[0]) is IReadOnlyCollection<string>);
//        }

//        [Test]
//        public void ArrayCastToIReadOnlyCollectionCountWorks()
//        {
//            Assert.AreEqual(((IReadOnlyCollection<string>)new[] { "x", "y", "z" }).Count, 3);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ClassImplementingICollectionCastToIReadOnlyCollectionCountWorks()
//        {
//            Assert.AreEqual(((IReadOnlyCollection<string>)new MyCollection(new[] { "x", "y", "z" })).Count, 3);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ArrayCastToIReadOnlyCollectionContainsWorks()
//        {
//            IReadOnlyCollection<C> arr = new[] { new C(1), new C(2), new C(3) };
//            Assert.True(arr.Contains(new C(2)));
//            Assert.False(arr.Contains(new C(4)));
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ClassImplementingICollectionCastToIReadOnlyCollectionContainsWorks()
//        {
//            IReadOnlyCollection<string> c = new MyCollection(new[] { "x", "y" });
//            Assert.True(c.Contains("x"));
//            Assert.False(c.Contains("z"));
//        }
//    }
//}