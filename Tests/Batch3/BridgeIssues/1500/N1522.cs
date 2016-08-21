using Bridge.Test;

using System.ComponentModel;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1522 - {0}")]
    public class Bridge1522
    {
        [Test]
        public void TestAssignIntToDecimal()
        {
            decimal x = 2m;
            x = (int)(x * 60);
            Assert.True(x > 2m);
        }
    }
}