using Bridge.Test;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1599 - {0}")]
    public class Bridge1599
    {
        [Test]
        public void TestCustomIEnumerableForStringJoin()
        {
            IEnumerable<int> intValues = new MyEnumerable<int>(new[] { 1, 5, 6 });
            Assert.AreEqual("1, 5, 6", string.Join(", ", intValues));
        }

        private class MyEnumerable<T> : IEnumerable<T>
        {
            private readonly T[] _items;

            public MyEnumerable(T[] items)
            {
                _items = items;
            }

            IEnumerator IEnumerable.GetEnumerator()
            {
                return null;
            }

            public IEnumerator<T> GetEnumerator()
            {
                return (IEnumerator<T>)(object)_items.ToList().GetEnumerator();
            }
        }
    }
}