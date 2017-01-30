using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch2.BridgeIssues
{
    // Bridge[#1122]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1122 - " + Constants.BATCH_NAME + " {0}")]
    public class N1122
    {
        [Test(ExpectedCount = 4)]
        public static void TestClippingInJavaScriptOverflowMode()
        {
            var x = double.MaxValue;

            var y1 = (int)Math.Floor(x / 0.2);
            Assert.AreEqual(Double.PositiveInfinity, y1, "int");

            var y2 = (uint)Math.Floor(x / 0.2);
            Assert.AreEqual(Double.PositiveInfinity, y2, "uint");

            var z1 = (long)Math.Floor(x / 0.2);
            Assert.AreEqual(Double.PositiveInfinity, z1, "long");

            var z2 = (ulong)Math.Floor(x / 0.2);
            Assert.AreEqual(Double.PositiveInfinity, z2, "ulong");
        }

        [Test(ExpectedCount = 4)]
        public static void TestIntegerDivisionInJavaScriptOverflowMode()
        {
            var x = 1.1;

            int y1 = (int)(1 / x);
            Assert.AreEqual("0.9090909090909091", y1.ToString(), "int");

            uint y2 = (uint)(1 / x);
            Assert.AreEqual("0.9090909090909091", y2.ToString(), "uint");

            long z1 = (long)(1 / x);
            Assert.AreEqual("0.9090909090909091", z1.ToString(), "long");

            ulong z2 = (ulong)(1 / x);
            Assert.AreEqual("0.9090909090909091", z2.ToString(), "ulong");
        }
    }
}