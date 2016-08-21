using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1523 - {0}")]
    public class Bridge1523
    {
        [Test]
        public void TestAssignDecimalToInt()
        {
            int x = 0;
            decimal? y = 2;
            x += (int)(y.Value * 60m);
            Assert.AreEqual(120, x);
        }
    }
}