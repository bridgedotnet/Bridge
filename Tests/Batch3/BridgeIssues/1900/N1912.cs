using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1912 - {0}")]
    public class Bridge1912
    {
        [Test]
        public void TestExtentionMethod()
        {
            var Bridge1912_Item = new Bridge1912_Item();
            var Bridge1912_Item2 = new Bridge1912_Item();

            Assert.True(Bridge1912_Item.SetValue() is Bridge1912_Item);
            Assert.True(Bridge1912_Item2.SetValue() is Bridge1912_Item);
        }
    }

    public class Bridge1912_Item
    {
    }

    public static class ItemExtensions
    {
        public static object SetValue(this Bridge1912_Item item)
        {
            return item;
        }
    }
}