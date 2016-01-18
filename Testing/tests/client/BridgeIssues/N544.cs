using Bridge;
using Bridge.Html5;
using Bridge.Test;

using Bridge.ClientTest.Utilities;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#544]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#544 - {0}")]
    public class Bridge544
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            var o = JSON.Parse<bool>("true");
            Assert.AreEqual(o, true, "Bridge544 bool");
        }

        [Test(ExpectedCount = 5)]
        public static void TestRelated()
        {
            var i = JSON.Parse<int>("25");
            Assert.AreEqual(i, 25, "Bridge544 int");

            var dbl = JSON.Parse<double>("26.1");
            Assert.AreEqual(dbl, 26.1d, "Bridge544 double");

            var d = JSON.Parse<decimal>("27.2");
            DecimalHelper.AssertIsDecimalAndEqualTo(d, 27.2, "Bridge544 decimal");

            var s = JSON.Parse<string>("\"Some string\"");
            Assert.AreEqual(s, "Some string", "Bridge544 string");
        }
    }
}
