using Bridge.Test.NUnit;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    // Bridge[#922]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#922 - {0}")]
    public class Bridge922
    {
        [Test(ExpectedCount = 2)]
        public static void TestLinqDecimal()
        {
            decimal[] a = { 1m, 2m, 3m };

            Assert.True(a.Average() == 2);
            Assert.True(a.Sum() == 6);
        }
    }
}