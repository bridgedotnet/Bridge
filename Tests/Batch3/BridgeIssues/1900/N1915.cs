using Bridge.Test;
using Bridge.ClientTestHelper.Internal;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1915 - {0}")]
    public class Bridge1915
    {
        public class LocalItem : IWriteableItem
        {
            private object value;
            public object Value { get { return value; } }

            public bool SetValue(object value)
            {
                this.value = value;
                return true;
            }
        }

        public static class LocalTest
        {
            public static void Test(IWriteableItem item)
            {
                item.SetValue(1);
            }
        }

        [Test]
        public void TestImplementingExternalInterface()
        {
            IWriteableItem item = new LocalItem();

            LocalTest.Test(item);
            Assert.AreEqual(1, item.Value);
            ClassLibraryTest.Test(item);
            Assert.AreEqual(2, item.Value);
        }
    }
}