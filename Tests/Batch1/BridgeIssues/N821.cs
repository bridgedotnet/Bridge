using System;
using System.Globalization;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#821]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#821 - {0}")]
    public class Bridge821
    {
        [Test(ExpectedCount = 9)]
        public static void TestUseCase()
        {
            var defaultCulture = CultureInfo.CurrentCulture;

            try
            {
                var d = 443534569034876.12345678901235m;
                Assert.AreEqual("443534569034876.12345678901235", d.ToString());
                Assert.AreEqual("443534569034876,12345678901235", d.ToString(CultureInfo.GetCultureInfo("ru-RU")));
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual("443534569034876,12345678901235", d.ToString());

                CultureInfo.CurrentCulture = defaultCulture;

                double d1 = 1.25;
                Assert.AreEqual("1.25", d1.ToString());
                Assert.AreEqual("1,25", d1.ToString(CultureInfo.GetCultureInfo("ru-RU")));
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual("1,25", d1.ToString());

                CultureInfo.CurrentCulture = defaultCulture;

                float f = 1.25f;
                Assert.AreEqual("1.25", f.ToString());
                Assert.AreEqual("1,25", f.ToString(CultureInfo.GetCultureInfo("ru-RU")));
                CultureInfo.CurrentCulture = CultureInfo.GetCultureInfo("ru-RU");
                Assert.AreEqual("1,25", f.ToString());
            }
            finally
            {
                CultureInfo.CurrentCulture = defaultCulture;
            }
        }
    }
}