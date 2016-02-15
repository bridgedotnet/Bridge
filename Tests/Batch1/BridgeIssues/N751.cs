using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#751]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#751 - {0}")]
    public class Bridge751
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            for (int i = 0; i < 5; i++)
            {
                var el = i;
            }

            var values = new List<int>() { 1, 2 };
            var v1 = values.Count(el => el == 1);

            Assert.AreEqual(1, v1, "Bridge751");
        }
    }
}