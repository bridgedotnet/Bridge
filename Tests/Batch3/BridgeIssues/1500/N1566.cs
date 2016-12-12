using Bridge.Test;
using System;
using System.Linq;
using System.Collections;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1566 - {0}")]
    public class Bridge1566
    {
        [Test]
        public void TestMathLog10()
        {
            AssertAlmostEqual(0.477121254719662, Math.Log10(3.0));
            AssertAlmostEqual(double.NegativeInfinity, Math.Log10(0.0));
            AssertAlmostEqual(double.NaN, Math.Log10(-3.0));
            AssertAlmostEqual(double.NaN, Math.Log10(double.NaN));
            AssertAlmostEqual(double.PositiveInfinity, Math.Log10(double.PositiveInfinity));
            AssertAlmostEqual(double.NaN, Math.Log10(double.NegativeInfinity));
        }

        [Test]
        public void TestMathLogWithBase()
        {
            AssertAlmostEqual(1.0, Math.Log(3.0, 3.0));
            AssertAlmostEqual(2.40217350273, Math.Log(14, 3.0));
            AssertAlmostEqual(double.NegativeInfinity, Math.Log(0.0, 3.0));
            AssertAlmostEqual(double.NaN, Math.Log(-3.0, 3.0));
            AssertAlmostEqual(double.NaN, Math.Log(double.NaN, 3.0));
            AssertAlmostEqual(double.PositiveInfinity, Math.Log(double.PositiveInfinity, 3.0));
            AssertAlmostEqual(double.NaN, Math.Log(double.NegativeInfinity, 3.0));
        }

        [Test]
        public void TestMathLog()
        {
            AssertAlmostEqual(1.09861228866811, Math.Log(3.0));
            AssertAlmostEqual(double.NegativeInfinity, Math.Log(0.0));
            AssertAlmostEqual(double.NaN, Math.Log(-3.0));
            AssertAlmostEqual(double.NaN, Math.Log(double.NaN));
            AssertAlmostEqual(double.PositiveInfinity, Math.Log(double.PositiveInfinity));
            AssertAlmostEqual(double.NaN, Math.Log(double.NegativeInfinity));
        }

        private void AssertAlmostEqual(double expected, double actual)
        {
            var se = expected.ToString();
            var sa = actual.ToString();

            if (sa == se)
            {
                Assert.True(true, "Actual:" + actual + " vs Expected:" + expected);
                return;
            }

            var diff = actual - expected;
            if (diff < 0)
            {
                diff = -diff;
            }

            Assert.True(diff < 1e-8, "Actual:" + actual + " vs Expected:" + expected);
        }
    }
}