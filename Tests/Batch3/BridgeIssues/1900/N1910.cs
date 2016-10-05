using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1910 - {0}")]
    public class Bridge1910
    {
        public class ItemValue
        {
        }

        public class Item<T>
        {
            private object value;

            public ItemValue Value1 { get { return (ItemValue)value; } }
            public T Value2 { get { return (T)value; } }

            public Item(T value)
            {
                this.value = value;
            }
        }

        [Test]
        public void TestCase()
        {
            var item1 = new Item<ItemValue>(null);

            Assert.True(item1.Value1 == null);
            Assert.True(item1.Value2 == null);
        }
    }
}