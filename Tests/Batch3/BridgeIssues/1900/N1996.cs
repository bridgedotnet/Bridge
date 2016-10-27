using System;
using System.Collections;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1996 - {0}")]
    public class Bridge1996
    {
        public class ArrayHolder : IEnumerable
        {
            private int[] array;

            public ArrayHolder(int[] array)
            {
                this.array = array;
            }

            [Template("new Bridge.ArrayEnumerator({this}.array)")]
            public extern IEnumerator GetEnumerator();
        }

        [Test]
        public void TestCase()
        {
            var holder = new ArrayHolder(new[] { 1, 2, 3 });

            int i = 0;
            foreach (var item in holder)
            {
                Assert.AreEqual(++i, item);
            }
        }
    }
}