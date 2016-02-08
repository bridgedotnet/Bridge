using System;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#913]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#913 - {0}")]
    public class Bridge913
    {
        [Test(ExpectedCount = 2)]
        public static void TestNullableDateTimeGreaterThanWorks()
        {
            DateTime? a = DateTime.Now;
            DateTime? b = null;

            Assert.False(a > b, "Bridge913 gt");
            Assert.False(a < b, "Bridge913 lt");
        }
    }
}