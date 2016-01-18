using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#514]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#514 - {0}")]
    public class Bridge514
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            double d1 = 5.43;
            Assert.AreEqual(Math.Sign(d1), 1, "Bridge514 Sign(double 5.43)");

            double d2 = -7.1;
            Assert.AreEqual(Math.Sign(d2), -1, "Bridge514 Sign(double -7.1)");
        }

        [Test(ExpectedCount = 2)]
        public static void TestRelated()
        {
            decimal d1 = 5.43M;
            Assert.AreEqual(Math.Sign(d1), 1, "Bridge514 Sign(decimal 5.43)");

            decimal d2 = -7.1M;
            Assert.AreEqual(Math.Sign(d2), -1, "Bridge514 Sign(decimal -7.1)");
        }
    }
}
