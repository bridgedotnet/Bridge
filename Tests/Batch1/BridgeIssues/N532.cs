using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#532]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#532 - {0}")]
    public class Bridge532
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var list = new List<int>(new[] { 1, 2, 3, 4, 5, 6, 7, 8, 9 });

            Assert.AreDeepEqual(new[] { 1, 2 }, list.GetRange(0, 2).ToArray(), "Bridge532 (0, 2)");
            Assert.AreDeepEqual(new[] { 2, 3 }, list.GetRange(1, 2).ToArray(), "Bridge532 (1, 2)");
            Assert.AreDeepEqual(new[] { 7, 8, 9 }, list.GetRange(6, 3).ToArray(), "Bridge532 (6, 3)");

        }
    }
}