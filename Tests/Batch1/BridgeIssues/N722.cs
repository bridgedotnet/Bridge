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

            Assert.AreEqual(2, asset1, "Bridge722 asset1");
            Assert.AreEqual(3, M1(c1["path"] = 3), "Bridge722 M1 3");
            Assert.AreEqual(4, M1(asset1 = c1["path"] = 4), "Bridge722 M1 4");

            var c2 = new { };
            var asset2 = c2["path"] = 5;
            Assert.AreEqual(5, asset2, "Bridge722 asset2");
            Assert.AreEqual(5, c2["path"], "Bridge722 c2");

            var c3 = new Dictionary<string, int>();
            var asset3 = c3["path"] = 6;
            Assert.AreEqual(6, asset3, "Bridge722 asset3");
            Assert.AreEqual(6, c3["path"], "Bridge722 c3");

            decimal[] data4 = { 1m, 2m, 3m, 4m, 7m };
            var c4 = new Dictionary<string, decimal>();
            var asset4 = c4["path"] = data4.Select(x => x).Last();
            Assert.AreDeepEqual(7m, asset4, "Bridge722 asset4");
            Assert.AreDeepEqual(7m, c4["path"], "Bridge722 c4");
        }
    }
}