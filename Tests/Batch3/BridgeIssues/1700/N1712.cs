using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public static class Bridge1712MSDNExtensions
    {
        public static void Add<T>(this Bridge1712.MSDNCollectionWithoutAdd collection, T item)
        {
            Bridge1712.Buffer += item;
        }
    }

    public static class Bridge1712Extensions
    {
        public static void Add(this Bridge1712.Collection collection, int item)
        {
            collection.list.Add(item);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1712 - {0}")]
    public class Bridge1712
    {
        public static string Buffer
        {
            get; set;
        }

        public class MSDNCollectionWithAdd : IEnumerable
        {
            public void Add<T>(T item)
            {
                Bridge1712.Buffer += item;
            }

            public IEnumerator GetEnumerator()
            {
                throw new InvalidOperationException();
            }
        }

        public class MSDNCollectionWithoutAdd : IEnumerable
        {
            public IEnumerator GetEnumerator()
            {
                throw new NotImplementedException();
            }
        }

        public class Collection : IEnumerable
        {
            public List<int> list = new List<int>();
            public IEnumerator GetEnumerator()
            {
                return this.list.GetEnumerator();
            }
        }

        [Test(ExpectedCount = 3)]
        public void TestCollectionAddWithExtensionMethod()
        {
            var collection2 = new Collection { 4, 5, 6 };

            int i = 4;
            foreach (int item in collection2)
            {
                Assert.AreEqual(i++, item);
            }
        }

        [Test(ExpectedCount = 1)]
        public void TestCollectionWithAdd_BeforeCS6()
        {
            Bridge1712.Buffer = string.Empty;
            var collection = new MSDNCollectionWithAdd { 1, 2, 3 };

            Assert.AreEqual("123", Bridge1712.Buffer);
        }

        [Test(ExpectedCount = 1)]
        public void TestCollectionWithAdd_CS6()
        {
            Bridge1712.Buffer = string.Empty;
            var collection = new MSDNCollectionWithoutAdd { 4, 5, 6 };

            Assert.AreEqual("456", Bridge1712.Buffer);
        }
    }
}