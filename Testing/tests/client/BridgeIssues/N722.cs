using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#722]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#722 - {0}")]
    public class Bridge722
    {
        private int lastItem;
        public new int this[string item]
        {
            get
            {
                return lastItem;
            }
            set
            {
                lastItem = value;
            }
        }

        public static int M1(int i)
        {
            return i;
        }

        [Test(ExpectedCount = 9)]
        public static void TestUseCase()
        {
            var c1 = new Bridge722();
            var asset1 = 1;
            asset1 = c1["path"] = 2;

            Assert.AreEqual(asset1, 2, "Bridge722 asset1");
            Assert.AreEqual(M1(c1["path"] = 3), 3, "Bridge722 M1 3");
            Assert.AreEqual(M1(asset1 = c1["path"] = 4), 4, "Bridge722 M1 4");

            var c2 = new { };
            var asset2 = c2["path"] = 5;
            Assert.AreEqual(asset2, 5, "Bridge722 asset2");
            Assert.AreEqual(c2["path"], 5, "Bridge722 c2");

            var c3 = new Dictionary<string, int>();
            var asset3 = c3["path"] = 6;
            Assert.AreEqual(asset3, 6, "Bridge722 asset3");
            Assert.AreEqual(c3["path"], 6, "Bridge722 c3");

            decimal[] data4 = { 1m, 2m, 3m, 4m, 7m };
            var c4 = new Dictionary<string, decimal>();
            var asset4 = c4["path"] = data4.Select(x => x).Last();
            Assert.AreDeepEqual(asset4, 7m, "Bridge722 asset4");
            Assert.AreDeepEqual(c4["path"], 7m, "Bridge722 c4");
        }
    }
}