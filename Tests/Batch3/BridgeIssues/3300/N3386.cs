using Bridge.Html5;
using Bridge.Test.NUnit;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// The test here consists in checking whether the Single (float) and
    /// Double (double) types' NaN and Infinity constants can be used as
    /// function parameters' default values.
    /// </summary>
    [TestFixture(TestNameFormat = "#3386 - {0}")]
    public class Bridge3386
    {
        private static float floatNaN(float f = float.NaN)
        {
            return f;
        }

        private static float floatPInf(float f = float.PositiveInfinity)
        {
            return f;
        }

        private static float floatNInf(float f = float.NegativeInfinity)
        {
            return f;
        }

        private static double doubleNaN(double d = float.NaN)
        {
            return d;
        }

        private static double doublePInf(double d = float.PositiveInfinity)
        {
            return d;

        }
        private static double doubleNInf(double d = float.NegativeInfinity)
        {
            return d;
        }

        /// <summary>
        /// This test checks methods with float/double NaN and Infinity default
        /// values, whether they get the passed or the default ones.
        /// </summary>
        [Test]
        public static void Test64bitKey()
        {
            var probe = new Bridge3386();
            var floatVal = 2f;
            var doubleVal = 2D;

            Assert.AreEqual(floatNaN(), float.NaN, "floatNaN() with no parameter is float.NaN.");
            Assert.AreEqual(floatNaN(floatVal), floatVal, "floatNaN() with parameter kept the parameter value.");
            Assert.AreEqual(floatPInf(), float.PositiveInfinity, "floatPInf() with no parameter is float.PositiveInfinity.");
            Assert.AreEqual(floatPInf(floatVal), floatVal, "floatPInf() with parameter kept the parameter value.");
            Assert.AreEqual(floatNInf(), float.NegativeInfinity, "floatNInf() with no parameter is float.NegativeInfinity.");
            Assert.AreEqual(floatNInf(floatVal), floatVal, "floatNInf() with parameter kept the parameter value.");

            Assert.AreEqual(doubleNaN(), double.NaN, "doubleNaN() with no parameter is double.NaN.");
            Assert.AreEqual(doubleNaN(doubleVal), doubleVal, "doubleNaN() with parameter kept the parameter value.");
            Assert.AreEqual(doublePInf(), double.PositiveInfinity, "doublePInf() with no parameter is double.PositiveInfinity.");
            Assert.AreEqual(doublePInf(doubleVal), doubleVal, "doublePInf() with parameter kept the parameter value.");
            Assert.AreEqual(doubleNInf(), double.NegativeInfinity, "doubleNInf() with no parameter is double.NegativeInfinity.");
            Assert.AreEqual(doubleNInf(doubleVal), doubleVal, "doubleNInf() with parameter kept the parameter value.");

        }
    }
}