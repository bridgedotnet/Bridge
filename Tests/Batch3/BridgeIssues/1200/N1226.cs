using Bridge.Test.NUnit;

using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1226 - {0}")]
    public class Bridge1226
    {
        private const double DELTA = 1E-15;

        private static void AssertValue(double expected, double actual, double delta = DELTA, string message = null)
        {
            var e = expected.ToString();
            var a = actual.ToString();

            if (!Script.IsFinite(expected) || !Script.IsFinite(actual))
            {
                Assert.AreEqual(e, a, message);
                return;
            }

            var diff = expected - actual;
            if (diff > delta || diff < -delta)
            {
                Assert.AreEqual(e, a, message);
            }
            else
            {
                var m = message ?? "" + " " + (diff != 0 ? "Diff: " + diff + "; Expected: " + e + "; Actual: " + a : "");
                Assert.True(true, m);
            }
        }

        [Test]
        public static void TestSinh()
        {
            AssertValue(-3.626860407847019, Math.Sinh(-2));
            AssertValue(-1.1752011936438014, Math.Sinh(-1));
            AssertValue(-0.5210953054937474, Math.Sinh(-0.5));
            AssertValue(0, Math.Sinh(0));
            AssertValue(0.5210953054937474, Math.Sinh(0.5));
            AssertValue(1.1752011936438014, Math.Sinh(1));
            AssertValue(3.626860407847019, Math.Sinh(2));
            AssertValue(Double.NaN, Math.Sinh(Double.NaN));
            AssertValue(Double.NegativeInfinity, Math.Sinh(Double.NegativeInfinity));
            AssertValue(Double.PositiveInfinity, Math.Sinh(Double.PositiveInfinity));
        }

        [Test]
        public static void TestCosh()
        {
            AssertValue(3.762195691083631, Math.Cosh(-2));
            AssertValue(1.543080634815244, Math.Cosh(-1));
            AssertValue(1.12762596520638, Math.Cosh(-0.5));
            AssertValue(1, Math.Cosh(0));
            AssertValue(1.12762596520638, Math.Cosh(0.5));
            AssertValue(1.543080634815244, Math.Cosh(1));
            AssertValue(3.762195691083631, Math.Cosh(2));
            AssertValue(Double.NaN, Math.Cosh(Double.NaN));
            AssertValue(Double.PositiveInfinity, Math.Cosh(Double.NegativeInfinity));
            AssertValue(Double.PositiveInfinity, Math.Cosh(Double.PositiveInfinity));
        }

        [Test]
        public static void TestTanh()
        {
            AssertValue(-0.964027580075817, Math.Tanh(-2));
            AssertValue(-0.761594155955765, Math.Tanh(-1));
            AssertValue(-0.46211715726001, Math.Tanh(-0.5));
            AssertValue(0, Math.Tanh(0));
            AssertValue(0.46211715726001, Math.Tanh(0.5));
            AssertValue(0.761594155955765, Math.Tanh(1));
            AssertValue(0.964027580075817, Math.Tanh(2));
            AssertValue(Double.NaN, Math.Tanh(Double.NaN));
            AssertValue(-1, Math.Tanh(Double.NegativeInfinity));
            AssertValue(1, Math.Tanh(Double.PositiveInfinity));
        }
    }
}