using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1899 - {0}")]
    public class Bridge1899
    {
        public interface IItem
        {
            int Value
            {
                get;
            }
            void SetValue();
        }

        public class Item : IItem
        {
            public int Value
            {
                get
                {
                    return 1; // getter
                }
            }

            public int GetValue()
            {
                return 2; // function
            }

            public void SetValue()
            {

            }
        }

        [Test]
        public void TestPropertyAndMethodNameConflict()
        {
            var item = new Item();
            Assert.AreEqual(1, item.Value);
            Assert.AreEqual(2, item.GetValue());
        }
    }
}