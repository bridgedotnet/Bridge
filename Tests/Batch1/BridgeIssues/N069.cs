using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#69]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#69 - {0}")]
    public class Bridge069
    {
        public struct Point69
        {
            public int x;
            public int y;

            public Point69(int y1)
            {
                this = new Point69();
                y = y1;
            }
        }

        [Test(ExpectedCount = 1)]
        public static void ThisKeywordInStructConstructorWorks()
        {
            var p = new Point69(10);
            Assert.AreEqual(10, p.y);
        }
    }
}
