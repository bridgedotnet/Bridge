using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#760]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#760 - {0}")]
    public class Bridge760
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            int? a = null;
            int? b = 10;

            var c = b ?? DoSomething(a);
            Assert.AreEqual(10, c, "Bridge760");
        }

        public static int DoSomething(int? test)
        {
            return test.Value;
        }
    }
}