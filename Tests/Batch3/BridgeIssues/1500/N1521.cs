using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1521 - {0}")]
    public class Bridge1521
    {
        [Test]
        public void TestDecimalTrueInConditionalBlock()
        {
            var decimalValue1 = 5m;
            var decimalValue2 = 10m;
            bool assign = true;
            decimal test1 = assign ? 0 : decimalValue1;
            decimal test2 = !assign ? 0 : 1;
            decimal test3 = !assign ? 0 : decimalValue1;
            decimal test4 = assign ? decimalValue2 : decimalValue1;

            Assert.True(test1 == 0);
            Assert.True(test2 == 1);
            Assert.True(test3 == 5);
            Assert.True(test4 == 10);
        }
    }
}