using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1520 - {0}")]
    public class Bridge1520
    {
        public static decimal x = 30;

        [Test]
        public void TestStaticDecimalInitialization()
        {
            Assert.AreEqual("Decimal", x.GetType().Name, "decimal type");

            x++;
            Assert.True(31 == x, "31");
        }

        [Test]
        public void TestLocalDecimalInitialization()
        {
            decimal x = 100;
            Assert.AreEqual("Decimal", x.GetType().Name, "decimal type");

            x++;
            Assert.True(101 == x, "101");
        }

        [Test]
        public void TestUseCase()
        {
            decimal newVal = 12;
            CustomList item = new CustomList();
            item.value += newVal;

            Assert.AreEqual("Decimal", item.value.GetType().Name, "decimal type");
            Assert.True(19 == item.value, "19");
        }

        class CustomList
        {
            public List<int> ranges = new List<int>();
            public decimal value = 7;
        }
    }
}