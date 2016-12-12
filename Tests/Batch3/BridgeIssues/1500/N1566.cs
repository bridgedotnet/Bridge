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
    }
}