using System;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2127 - {0}")]
    public class Bridge2127
    {
        [Test]
        public static void TestNumberFormatInfoNaNSymbol()
        {
            var c = CultureInfo.GetCultureInfo("es-US");
            var nanSymbol = c.NumberFormat.NaNSymbol;

            Assert.AreEqual("NaN", nanSymbol);


            c = CultureInfo.GetCultureInfo("nb-NO");
            nanSymbol = c.NumberFormat.NaNSymbol;

            Assert.AreEqual("NaN", nanSymbol);
        }
    }
}