using System;
using Bridge.Test.NUnit;
using Bridge.ClientTestHelper;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2399 - {0}")]
    public class Bridge2399
    {
        [Test]
        public static void TestSqrt()
        {
            NumberHelper.AssertDoubleWithEpsilon8(1.73205080756888, Math.Sqrt(3.0));
            Assert.AreEqual(0.0, Math.Sqrt(0.0));
            Assert.AreEqual(double.NaN, Math.Sqrt(-3.0));
            Assert.AreEqual(double.NaN, Math.Sqrt(double.NaN));
            Assert.AreEqual(double.PositiveInfinity, Math.Sqrt(double.PositiveInfinity));
            Assert.AreEqual(double.NaN, Math.Sqrt(double.NegativeInfinity));
            Assert.AreEqual(3, Math.Sqrt(9u));
            Assert.AreEqual(3, Math.Sqrt(9L));
        }
    }
}