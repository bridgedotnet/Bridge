using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2399 - {0}")]
    public class Bridge2399
    {
        [Test]
        public static void TestSqrt()
        {
            AssertAlmostEqual(1.73205080756888, Math.Sqrt(3.0));
            Assert.AreEqual(0.0, Math.Sqrt(0.0));
            Assert.AreEqual(double.NaN, Math.Sqrt(-3.0));
            Assert.AreEqual(double.NaN, Math.Sqrt(double.NaN));
            Assert.AreEqual(double.PositiveInfinity, Math.Sqrt(double.PositiveInfinity));
            Assert.AreEqual(double.NaN, Math.Sqrt(double.NegativeInfinity));
            Assert.AreEqual(3, Math.Sqrt(9u));
            Assert.AreEqual(3, Math.Sqrt(9L));
        }

        private static void AssertAlmostEqual(double d1, double d2)
        {
            var diff = d2 - d1;
            if (diff < 0)
                diff = -diff;
            Assert.True(diff < 1e-8);
        }
    }
}