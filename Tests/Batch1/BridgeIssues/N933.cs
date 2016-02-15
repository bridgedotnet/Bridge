using System;
using Bridge.Test;
#pragma warning disable 649

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#933]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#933 - {0}")]
    public class Bridge933
    {
        private static Boolean IsRunning;

        [Test(ExpectedCount = 1)]
        public static void TestBooleanInIfStatement()
        {
            if (Bridge933.IsRunning)
            {
                Assert.Fail("IsRunning must be false");
            }

            Assert.False(Bridge933.IsRunning);
        }
    }
}