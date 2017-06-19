using System;
using System.Collections.Generic;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2693 - {0}")]
    public class Bridge2693
    {
        [Test]
        public static void TestListCapacity()
        {
            List<int> parts = new List<int>();

            Assert.AreEqual(0, parts.Capacity);

            parts.Add(1);
            parts.Add(2);
            parts.Add(3);
            parts.Add(4);
            parts.Add(5);

            Assert.AreEqual(8, parts.Capacity);
            Assert.AreEqual(5, parts.Count);

            parts.TrimExcess();
            Assert.AreEqual(5, parts.Capacity);
            Assert.AreEqual(5, parts.Count);

            parts.Clear();
            Assert.AreEqual(5, parts.Capacity);
            Assert.AreEqual(0, parts.Count);
        }
    }
}