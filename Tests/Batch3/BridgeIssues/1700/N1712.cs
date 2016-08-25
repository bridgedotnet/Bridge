using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public class Bridge1712Collection : IEnumerable
    {
        public List<int> list = new List<int>(); 
        public IEnumerator GetEnumerator()
        {
            return this.list.GetEnumerator();
        }
    }

    public static class Bridge1712Extensions
    {
        public static void Add(this Bridge1712Collection collection, int item)
        {
            collection.list.Add(item);
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1712 - {0}")]
    public class Bridge1712
    {
        [Test(ExpectedCount = 3)]
        public void TestCollectionAddWithExtensionMethod()
        {
            var collection2 = new Bridge1712Collection { 4, 5, 6 };

            int i = 4;
            foreach (int item in collection2)
            {
                Assert.AreEqual(i++, item);
            }
        }
    }
}