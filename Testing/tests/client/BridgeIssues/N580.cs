using Bridge;
using Bridge.Test;
using System;
using System.Collections.Generic;
using System.Linq;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#580]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#580 - {0}")]
    public class Bridge580
    {
        [Test(ExpectedCount = 10)]
        public static void TestUseCase()
        {
            string[] arrs = new string[] { "s1", "s2" };

            int intIndex;

            string[] dst = new string[2];
            intIndex = 0;
            arrs.CopyTo(dst, intIndex);

            Assert.AreEqual(dst.Length, 2, "Bridge580 Length Int");
            Assert.AreEqual(dst[0], arrs[0], "Bridge580 0 Int");
            Assert.AreEqual(dst[1], arrs[1], "Bridge580 1 Int");

            dst = new string[1];
            intIndex = 1;
            arrs.CopyTo(dst, intIndex);

            Assert.AreEqual(dst.Length, 1, "Bridge580 Length 1 Int");
            Assert.AreEqual(dst[0], arrs[1], "Bridge580 1_1 Int");

            long longIndex;

            dst = new string[2];
            longIndex = 0;
            arrs.CopyTo(dst, longIndex);

            Assert.AreEqual(dst.Length, 2, "Bridge580 Length Long");
            Assert.AreEqual(dst[0], arrs[0], "Bridge580 0 Long");
            Assert.AreEqual(dst[1], arrs[1], "Bridge580 1 Long");

            dst = new string[1];
            longIndex = 1;
            arrs.CopyTo(dst, longIndex);

            Assert.AreEqual(dst.Length, 1, "Bridge580 Length 1 Long");
            Assert.AreEqual(dst[0], arrs[1], "Bridge580 1_1 Long");
        }
    }
}