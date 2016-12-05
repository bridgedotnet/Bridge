using System;
using System.Globalization;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2127 - {0}")]
    public class Bridge2127
    {
        [Test]
        public static void TestNumberFormatInfoNaNSymbol()
        {
            var c = CultureInfo.GetCultureInfo("ru-RU");
            var nanSymbol = c.NumberFormat.NaNSymbol;

            Assert.AreEqual("NaN", nanSymbol);
        }
    }
}
