using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1141 - {0}")]
    public class Bridge1141
    {
        [Test]
        public static void TestLongDivisionInfiniteLoopFixed()
        {
            ulong m = UInt64.MaxValue;
            ulong m1 = UInt64.MaxValue - 1;
            ulong res1 = m / m1;

            Assert.AreEqual("1", res1.ToString(), "https://github.com/dcodeIO/long.js/issues/31");
        }
    }
}