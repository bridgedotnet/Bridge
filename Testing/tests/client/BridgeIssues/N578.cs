using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#578]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#578 - {0}")]
    public class Bridge578
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var s = "ab|abc&ab&abc|de&ef&";

            var r = s.Split('|', '&');
            var expected = new[] { "ab", "abc", "ab", "abc", "de", "ef", "" };

            Assert.AreDeepEqual(r, expected, "#578 Split(params char[] separator)");
        }
    }
}