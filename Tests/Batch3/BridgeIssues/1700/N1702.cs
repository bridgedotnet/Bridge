using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1702 - {0}")]
    public class Bridge1702
    {
        public sealed class Set<T> : IEnumerable<T>
        {
            private readonly static Set<T> _empty = new Set<T>(null);
            public static Set<T> Empty { get { return _empty; } }

            private readonly Node _headIfAny;
            private Set(Node headIfAny)
            {
                _headIfAny = headIfAny;
            }

            public Set<T> Insert(T item)
            {
                if (item == null)
                    throw new ArgumentNullException("item");

                if (_headIfAny == null)
                    return new Set<T>(new Node { Count = 1, Item = item, NextIfAny = null });

                return new Set<T>(new Node
                {
                    Count = _headIfAny.Count + 1,
                    Item = item,
                    NextIfAny = _headIfAny
                });
            }

            public IEnumerator<T> GetEnumerator()
            {
                var node = _headIfAny;
                while (node != null)
                {
                    yield return node.Item;
                    node = node.NextIfAny;
                }
            }

            IEnumerator IEnumerable.GetEnumerator() { return GetEnumerator(); }

            private sealed class Node
            {
                public int Count;
                public T Item;
                public Node NextIfAny;
            }
        }

        [Test(ExpectedCount = 3)]
        public void TestFieldWithItemName()
        {
            var set = Set<int>.Empty;
            set = set.Insert(3);
            set = set.Insert(2);
            set = set.Insert(1);

            var idx = 0;
            foreach (var i in set)
            {
                Assert.AreEqual(++idx, i);
            }
        }
    }
}