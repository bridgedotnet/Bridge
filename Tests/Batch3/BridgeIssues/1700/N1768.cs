using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1768 - {0}")]
    public class Bridge1768
    {
        public interface I1<T>
        {
            T this[int index]
            {
                get;
                set;
            }

            int Add(T item);

            int Count
            {
                get;
            }
        }

        public class C1<T> : I1<T>
        {
            public T this[int index]
            {
                get { return default(T); }
                set {  }
            }

            public int Add(T item)
            {
                return 2;
            }

            public int Count
            {
                get
                {
                    return 1;
                }
            }
        }

        public class C2<T> : I1<T>
        {
            T I1<T>.this[int index]
            {
                get { return default(T); }
                set { }
            }

            int I1<T>.Add(T item)
            {
                return 20;
            }

            int I1<T>.Count
            {
                get
                {
                    return 10;
                }
            }
        }

        public class List1<T> : IList<T>
        {
            T IList<T>.this[int index]
            {
                get
                {
                    return default(T);
                }

                set
                {

                }
            }

            int ICollection<T>.Count
            {
                get
                {
                    return 100;
                }
            }

            void ICollection<T>.Add(T item)
            {
            }

            void ICollection<T>.Clear()
            {
            }

            bool ICollection<T>.Contains(T item)
            {
                return true;
            }

            void ICollection<T>.CopyTo(T[] array, int arrayIndex)
            {
                array[0] = default(T);
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return null;
            }

            IEnumerator<T> IEnumerable<T>.GetEnumerator()
            {
                return null;
            }

            int IList<T>.IndexOf(T item)
            {
                return 200;
            }

            void IList<T>.Insert(int index, T item)
            {
            }

            bool ICollection<T>.Remove(T item)
            {
                return true;
            }

            void IList<T>.RemoveAt(int index)
            {
            }
        }

        public class List2<T> : IList<T>
        {
            public T this[int index]
            {
                get
                {
                    return default(T);
                }

                set
                {

                }
            }

            public int Count
            {
                get
                {
                    return 1000;
                }
            }

            public void Add(T item)
            {
            }

            public void Clear()
            {
            }

            public bool Contains(T item)
            {
                return true;
            }

            public void CopyTo(T[] array, int arrayIndex)
            {
                array[1] = default(T);
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return null;
            }

            public IEnumerator<T> GetEnumerator()
            {
                return null;
            }

            public int IndexOf(T item)
            {
                return 2000;
            }

            public void Insert(int index, T item)
            {
            }

            public bool Remove(T item)
            {
                return true;
            }

            public void RemoveAt(int index)
            {
            }
        }

        [Test]
        public void TestImplicitImplementation()
        {
            I1<int> c2 = new C2<int>();
            Assert.AreEqual(0, c2[0]);
            Assert.AreEqual(20, c2.Add(0));
            Assert.AreEqual(10, c2.Count);
        }

        [Test]
        public void TestExplicitImplementation()
        {
            var c1 = new C1<int>();
            Assert.AreEqual(0, c1[0]);
            Assert.AreEqual(2, c1.Add(0));
            Assert.AreEqual(1, c1.Count);

            var i1 = new C1<int>();
            Assert.AreEqual(0, i1[0]);
            Assert.AreEqual(2, i1.Add(0));
            Assert.AreEqual(1, i1.Count);
        }

        [Test]
        public void TestListImplicitImplementation()
        {
            IList<int> list = new List1<int>();
            Assert.AreEqual(0, list[0]);
            Assert.True(list.Contains(0));
            Assert.AreEqual(100, list.Count);
            Assert.Null(list.GetEnumerator());
            Assert.AreEqual(200, list.IndexOf(0));
            Assert.True(list.Remove(0));

            var a = new int[] { 1, 2 };
            list.CopyTo(a, 0);
            Assert.AreEqual(0, a[0]);
        }

        [Test]
        public void TestListExplicitImplementation()
        {
            var list = new List2<int>();
            Assert.AreEqual(0, list[0]);
            Assert.True(list.Contains(0));
            Assert.AreEqual(1000, list.Count);
            Assert.Null(list.GetEnumerator());
            Assert.AreEqual(2000, list.IndexOf(0));
            Assert.True(list.Remove(0));
            var a = new int[] { 1, 2 };
            list.CopyTo(a, 0);
            Assert.AreEqual(0, a[1]);

            IList<int> list2 = new List2<int>();
            Assert.AreEqual(0, list2[0]);
            Assert.True(list2.Contains(0));
            Assert.AreEqual(1000, list2.Count);
            Assert.Null(list2.GetEnumerator());
            Assert.AreEqual(2000, list2.IndexOf(0));
            Assert.True(list2.Remove(0));
            var a2 = new int[] { 1, 2 };
            list2.CopyTo(a, 0);
            Assert.AreEqual(2, a2[1]);
        }
    }
}