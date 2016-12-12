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
            Assert.AreEqual(0.477121254719662, Math.Log10(3.0));
            Assert.AreEqual(double.NegativeInfinity, Math.Log10(0.0));
            Assert.AreEqual(double.NaN, Math.Log10(-3.0));
            Assert.AreEqual(double.NaN, Math.Log10(double.NaN));
            Assert.AreEqual(double.PositiveInfinity, Math.Log10(double.PositiveInfinity));
            Assert.AreEqual(double.NaN, Math.Log10(double.NegativeInfinity));
        }

        [Test]
        public void TestMathLogWithBase()
        {
            Assert.AreEqual(1.0, Math.Log(3.0, 3.0));
            Assert.AreEqual(2.40217350273, Math.Log(14, 3.0));
            Assert.AreEqual(double.NegativeInfinity, Math.Log(0.0, 3.0));
            Assert.AreEqual(double.NaN, Math.Log(-3.0, 3.0));
            Assert.AreEqual(double.NaN, Math.Log(double.NaN, 3.0));
            Assert.AreEqual(double.PositiveInfinity, Math.Log(double.PositiveInfinity, 3.0));
            Assert.AreEqual(double.NaN, Math.Log(double.NegativeInfinity, 3.0));
        }

        [Test]
        public void TestMathLog()
        {
            Assert.AreEqual(1.09861228866811, Math.Log(3.0));
            Assert.AreEqual(double.NegativeInfinity, Math.Log(0.0));
            Assert.AreEqual(double.NaN, Math.Log(-3.0));
            Assert.AreEqual(double.NaN, Math.Log(double.NaN));
            Assert.AreEqual(double.PositiveInfinity, Math.Log(double.PositiveInfinity));
            Assert.AreEqual(double.NaN, Math.Log(double.NegativeInfinity));
        }
    }
}