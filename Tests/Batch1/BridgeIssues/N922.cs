using System;
using System.Linq;
using Bridge.Html5;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
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