using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#538]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#538 - {0}")]
    public class Bridge538
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var srcString = "123";
            var destString = "4";

            destString += srcString[2];

            Assert.AreEqual("43", destString, "Bridge538 '43'");
        }
    }
}