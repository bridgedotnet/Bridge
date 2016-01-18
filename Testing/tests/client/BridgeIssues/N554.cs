using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#554]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#554 - {0}")]
    public class Bridge554
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var s = "0123456789";

            Assert.AreEqual(s.Remove(5), "01234", "Remove(5)");
            Assert.AreEqual(s.Remove(10), "0123456789", "Remove(10)");
            Assert.AreEqual(s.Remove(1, 2), "03456789", "Remove(1, 2)");
            Assert.AreEqual(s.Remove(1, 10), "0", "Remove(1, 10)");
        }
    }
}
