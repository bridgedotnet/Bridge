using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#788]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#788 - {0}")]
    public class Bridge788
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.True(Validation.Url("http://127.0.0.1"));
            Assert.False(Validation.Url("http://127.0.1"));
        }
    }
}