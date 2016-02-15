using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#818]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#818 - {0}")]
    public class Bridge818
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var z = 0;
            for (; ; )
            {
                z++;
                if (z == 10) break;
            }
            Assert.AreEqual(10, z, "Bridge818 z");

            int i;
            int j;
            for (i = 0, j = 1; i < 10; i++, j++)
            {

            }
            Assert.AreEqual(10, i, "Bridge818 i");
            Assert.AreEqual(11, j, "Bridge818 j");
        }
    }
}