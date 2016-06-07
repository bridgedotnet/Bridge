using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#122 - {0}")]
    public class Bridge122
    {
        private static int nx = 1;
        private static int[,] breaker = new int[,]
        {
            { 1, 2 },
            { 3, 4 }
        };

        [Test(ExpectedCount = 1)]
        public static void Test2DArrayConstruction()
        {
            var x = 0;
            var y = 1;

            var retval = (x >= 0 && x < nx && breaker.Length > ((x + 1) * nx)) ? breaker[x, y] : 0;

            Assert.AreEqual(2, retval);
        }

    }
}
