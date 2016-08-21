using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1524 - {0}")]
    public class Bridge1524
    {
        [Test]
        public void TestDecimalWithIntOps()
        {
            decimal x = 3m;
            int y = 2;
            int z = 1;
            Assert.False(y - z > x);
            decimal a = y - z;
            Assert.False(a > 2);

            int? x1 = 1;
            decimal y1 = x1.HasValue ? -x1.Value : 0m;
            Assert.False(y1 > 1);
            y1 = x1.HasValue ? -1 * (x1.Value) : 0m;
            Assert.False(y1 > 1);
        }
    }
}