using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2281 - {0}")]
    public class Bridge2281
    {
        public class Node<T>
        {
            public T Item;
        }

        public struct Optional<T>
        {
            public Optional(T value) : this(value, value != null) { }
            private Optional(T value, bool isDefined)
            {
                IsDefined = isDefined && (value != null);
                Value = value;
            }

            public bool IsDefined
            {
                get;
            }
            public T Value
            {
                get;
            }

            public override string ToString()
            {
                return IsDefined ? Value.ToString() : "{Missing}";
            }
        }

        [Test]
        public static void TestFieldMerge()
        {
            var item = new Optional<string>("abc");
            Assert.AreEqual("abc", item.Value);

            var node = new Node<Optional<string>> { Item = item };
            Assert.AreEqual(item, node.Item);
            Assert.AreEqual("abc", node.Item.Value);

            FieldMerge("xyz");
            FieldMerge(5);
            FieldMerge(6m);
            FieldMerge(7L);
            FieldMerge(8UL);
        }

        private static void FieldMerge<T>(T value)
        {
            var item = new Optional<T>(value);
            Assert.AreEqual(value, item.Value);

            var node = new Node<Optional<T>> { Item = item };
            Assert.AreEqual(item, node.Item);
            Assert.AreEqual(value, node.Item.Value);
        }
    }
}