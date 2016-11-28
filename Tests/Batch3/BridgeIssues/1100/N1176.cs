using Bridge.Test;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1176 - {0}")]
    public class Bridge1176
    {
        [Test]
        public static void TestFunctionLifting()
        {
            dynamic scope = Script.Get("$asm.$.Bridge.ClientTest.Batch3.BridgeIssues.Bridge1176");
            Assert.Null(scope, "scope should not exists");

            var items = new[]
            {
                new Item<int>(),
                new Item<int>()
            };
            var values = GetItemValues(items);
            Assert.AreEqual("Item, Item", string.Join(", ", values));
        }

        public static string[] GetItemValues<TValue>(IEnumerable<Item<TValue>> items)
        {
            return items
                .Select(item => (string)item)
                .ToArray();
        }

        public class Item<TValue>
        {
            public static implicit operator string (Item<TValue> item)
            {
                return "Item";
            }
        }
    }
}