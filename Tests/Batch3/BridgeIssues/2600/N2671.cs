using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2671 - {0}")]
    public class Bridge2671
    {
        public class GenericClass<T>
        {
            public T TestMethod()
            {
                IDictionary<string, T> dictionary = new Dictionary<string, T>();

                dictionary["key"] = default(T);
                return dictionary["key"];
            }
        }

        [Test]
        public static void TestInterfaceIndexer()
        {
            Assert.AreEqual(0, new GenericClass<int>().TestMethod());
        }
    }
}