using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2443 - {0}")]
    public class Bridge2443
    {
        [Test]
        public static void TestNaNCompareForDouble()
        {
            var vals = new double[]
            {
                4,
                3,
                double.NaN,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(4, vals.Max());
            Assert.AreEqual(double.NaN, vals.Min());

            vals = new double[]
            {
                4,
                3,
                double.PositiveInfinity,
                double.NaN,
                double.NegativeInfinity,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(double.PositiveInfinity, vals.Max());
            Assert.AreEqual(double.NaN, vals.Min());

            vals = new double[]
            {
                4,
                3,
                double.PositiveInfinity,
                double.NegativeInfinity,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(double.PositiveInfinity, vals.Max());
            Assert.AreEqual(double.NegativeInfinity, vals.Min());
        }

        [Test]
        public static void TestNaNCompareForFloat()
        {
            var vals = new float[]
            {
                4,
                3,
                float.NaN,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(4, vals.Max());
            Assert.AreEqual(float.NaN, vals.Min());

            vals = new float[]
            {
                4,
                3,
                float.PositiveInfinity,
                float.NaN,
                float.NegativeInfinity,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(float.PositiveInfinity, vals.Max());
            Assert.AreEqual(float.NaN, vals.Min());

            vals = new float[]
            {
                4,
                3,
                float.PositiveInfinity,
                float.NegativeInfinity,
                0,
                1,
                2,
                1,
            };

            Assert.AreEqual(float.PositiveInfinity, vals.Max());
            Assert.AreEqual(float.NegativeInfinity, vals.Min());
        }
    }
}