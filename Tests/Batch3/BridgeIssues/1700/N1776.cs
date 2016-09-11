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
            int output;
            Tuple<int, int> key1 = new Tuple<int, int>(1, 2);
            Tuple<int, int> key2 = new Tuple<int, int>(1, 2);
            Assert.True(key1.Equals(key2));

            Dictionary<Tuple<int, int>, int> dic = new Dictionary<Tuple<int, int>, int>();
            dic.Add(key1, 1);

            dic.TryGetValue(key1, out output);
            Assert.AreEqual(1, output);
            dic.TryGetValue(key2, out output);
            Assert.AreEqual(1, output);
            Assert.AreEqual(key1.GetHashCode(), key2.GetHashCode());
        }
    }
}