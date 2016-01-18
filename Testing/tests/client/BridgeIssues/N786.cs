using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#786]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#786 - {0}")]
    public class Bridge786
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.AreEqual(Get(true), "true", "Bridge786 true");
            Assert.AreEqual(Get(false), "false", "Bridge786 false");
        }

        private static string Get(bool throws)
        {
            return throws ? "true" : "false";
        }
    }
}