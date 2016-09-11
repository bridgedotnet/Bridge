using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1776 - {0}")]
    public class Bridge1776
    {
        [Test]
        public void TestTupleHashCode()
        {
            Tuple<int, int> key1 = new Tuple<int, int>(1, 2);
            Tuple<int, int> key2 = new Tuple<int, int>(1, 2);

            Assert.True(key1.Equals(key2), "Equals works");

            Dictionary<Tuple<int, int>, int> dic = new Dictionary<Tuple<int, int>, int>();
            dic.Add(key1, 1);

            int output1;
            dic.TryGetValue(key1, out output1);
            Assert.AreEqual(1, output1, "TryGetValue for key1");

            int output2;
            dic.TryGetValue(key2, out output2);
            Assert.AreEqual(1, output2, "TryGetValue for key2");

            Assert.AreEqual(key1.GetHashCode(), key2.GetHashCode(), "Same GetHashCode");
        }
    }
}