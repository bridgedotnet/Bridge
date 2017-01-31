// #1626
//using Bridge.Test.NUnit;
//using System;
//using System.Collections;
//using System.Collections.Generic;

//namespace Bridge.ClientTest.Batch4.Collections.Generic
//{
//    [TestFixture]
//    public class IReadOnlyListTests
//    {
//        private class MyList : IReadOnlyList<string>
//        {
//            public MyList(string[] items)
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

//            public string this[int index]
//            {
//                get
//                {
//                    return Items[index];
//                }
//                set
//                {
//                    Items[index] = value;
//                }
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
//            Assert.AreEqual(typeof(IReadOnlyList<object>).FullName, "Bridge.IReadOnlyList", "FullName should be correct");
//            Assert.True(typeof(IReadOnlyList<object>).IsInterface, "IsInterface should be true");

//            var interfaces = typeof(IReadOnlyList<object>).GetInterfaces();
//            Assert.AreEqual(interfaces.Length, 2, "Interfaces length");
//            Assert.True(interfaces.Contains(typeof(IEnumerable<object>)), "Interfaces should contain IEnumerable");
//            Assert.True(interfaces.Contains(typeof(IReadOnlyCollection<object>)), "Interfaces should contain IReadOnlyCollection");
//        }

//        [Test]
//        public void ArrayImplementsIReadOnlyList()
//        {
//            Assert.True((object)new int[1] is IReadOnlyList<int>);
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void CustomClassThatShouldImplementIReadOnlyListDoesSo()
//        {
//            Assert.True((object)new MyList(new string[0]) is IReadOnlyList<string>);
//        }

//        [Test]
//        public void ArrayCastToIReadOnlyListGetItemWorks()
//        {
//            IReadOnlyList<string> l = new[] { "x", "y", "z" };
//            Assert.AreEqual(l[1], "y");
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ClassImplementingIReadOnlyListGetItemWorks()
//        {
//            MyList l = new MyList(new[] { "x", "y", "z" });
//            Assert.AreEqual(l[1], "y");
//        }

//        // TODO Fix test NEWCI Run client tests to see the test errors
//        [Test]
//        public void ClassImplementingIReadOnlyListCastToIReadOnlyListGetItemWorks()
//        {
//            IReadOnlyList<string> l = new MyList(new[] { "x", "y", "z" });
//            Assert.AreEqual(l[1], "y");
//        }
//    }
//}