using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2039 - {0}")]
    public class Bridge2039
    {
        [Test]
        public static void TestNaNToString()
        {
            Assert.AreEqual(System.Globalization.CultureInfo.InvariantCulture.NumberFormat.NaNSymbol, Double.NaN.ToString());
        }
    }
}