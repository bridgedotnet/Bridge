using System.Collections;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2050 - {0}")]
    public class Bridge2050
    {
        [Test]
        public static void TestIList()
        {
            var list = new List<int> { 1, 2, 3 };
            IList l = list;
            object o = list;

            Assert.True(o is IList);
            Assert.True(o is ICollection);
            Assert.True(o is IEnumerable);
            Assert.True(o is IList<int>);
            Assert.AreEqual(3, list.Count);
            Assert.AreEqual(3, l.Count);
            Assert.AreEqual(2, list[1]);
            Assert.AreEqual(2, l[1]);

            var arr = new int[] { 1, 2, 3 };
            l = arr;
            o = arr;

            Assert.True(o is IList);
            Assert.True(o is ICollection);
            Assert.True(o is IEnumerable);
            Assert.True(o is IList<int>);
            Assert.AreEqual(3, arr.Length);
            Assert.AreEqual(3, l.Count);
            Assert.AreEqual(2, arr[1]);
            Assert.AreEqual(2, l[1]);
        }

        [Test]
        public static void TestIDictionary()
        {
            var dict = new Dictionary<int, int> { { 1, 2 }, { 2, 3 } };
            IDictionary d = dict;
            object o = dict;

            Assert.True(o is ICollection);
            Assert.True(o is IEnumerable);
            Assert.True(o is IDictionary);
            Assert.True(o is IDictionary<int, int>);
            Assert.AreEqual(2, dict.Count);
            Assert.AreEqual(2, d.Count);
            Assert.AreEqual(2, dict[1]);
            Assert.AreEqual(2, d[1]);
        }
    }
}