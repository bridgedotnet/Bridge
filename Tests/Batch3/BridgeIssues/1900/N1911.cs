using System.Linq;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    public class Bridge1911_BaseItem<T>
    {
    }

    public static class Bridge1911_BaseItemExtensions
    {
        public static int GetValue<T>(this Bridge1911_BaseItem<T> item)
        {
            return 1;
        }

        public static int GetValue<T>(this Bridge1911_BaseItem<T> item, int i)
        {
            return i;
        }
    }

    public class Bridge1911_DerivedItem<T> : Bridge1911_BaseItem<T>
    {
        // a static method, shouldn't be called
        public static int GetValue<T1>()
        {
            return 2;
        }
    }

    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1911 - {0}")]
    public class Bridge1911
    {
        [Test]
        public void TestExtensionMethodOfBaseClass()
        {
            Bridge1911_DerivedItem<int> item = new Bridge1911_DerivedItem<int>();
            Assert.AreEqual(1, item.GetValue());
            Assert.AreEqual(3, item.GetValue(3));
        }

        [Test]
        public void TestExtensionMethodOfBaseClassLinqCase()
        {
            var values = new[] { 0, 1, 2 };

            var max1 = values.Select(Bridge1911.GetValue1).Max();
            var max2 = values.Select(Bridge1911.GetValue2).Max();

            Assert.AreEqual(2, max1);
            Assert.AreEqual(2, max2);
        }

        private static int GetValue1(int value)
        {
            return value;
        }

        private static object GetValue2(int value)
        {
            return value;
        }
    }
}