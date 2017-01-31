using System;
using System.Linq;
using Bridge.Test.NUnit;
using Bridge.ClientTestHelperExternal;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2167 - {0}")]
    public class Bridge2167
    {
        public class Data
        {
            public decimal p1 { get; set; }
            public decimal p2 { get; set; }
        }

        [Test]
        public static void TestMerge()
        {
            object o1 = new
            {
                p1 = 1
            };

            Data o2 = new Data()
            {
                p1 = 2.0m,
                p2 = 2.0m
            };
            o2 = BridgeHelper.Merge<Data>(o2, o1);

            decimal o3 = 3.0m;
#pragma warning disable 219
            object o4 = 1;
#pragma warning restore 219
            o3 = BridgeHelper.Merge<decimal>(o3, o4);

            Assert.True(o2.p1.Is<decimal>());
            Assert.True(o2.p2.Is<decimal>());
            Assert.True(o3.Is<decimal>());
        }
    }
}