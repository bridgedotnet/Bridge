using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2802 - {0}")]
    public class Bridge2802
    {
        [Test]
        public static void TestLocalesWithoutAmPm()
        {
            var culture = new CultureInfo("nb-NO");
            culture.DateTimeFormat.TimeSeparator = ".";
            DateTime testValue;
            if (DateTime.TryParseExact("13.00", $"H{culture.DateTimeFormat.TimeSeparator}mm", culture, out testValue))
            {
                var now = DateTime.Now;
                Assert.AreEqual(now.Year, testValue.Year);
                Assert.AreEqual(now.Month, testValue.Month);
                Assert.AreEqual(now.Day, testValue.Day);
                Assert.AreEqual(13, testValue.Hour);
                Assert.AreEqual(0, testValue.Minute);
            }
            else
            {
                Assert.Fail("Date is not parsed correctly");
            }

            culture = new CultureInfo("ru-RU");
            culture.DateTimeFormat.TimeSeparator = ".";
            if (DateTime.TryParseExact("13.00", $"H{culture.DateTimeFormat.TimeSeparator}mm", culture, out testValue))
            {
                var now = DateTime.Now;
                Assert.AreEqual(now.Year, testValue.Year);
                Assert.AreEqual(now.Month, testValue.Month);
                Assert.AreEqual(now.Day, testValue.Day);
                Assert.AreEqual(13, testValue.Hour);
                Assert.AreEqual(0, testValue.Minute);
            }
            else
            {
                Assert.Fail("Date is not parsed correctly");
            }

            Assert.AreEqual(13, DateTime.Parse("13:00", new CultureInfo("en-GB")).Hour);
            Assert.AreEqual(13, DateTime.Parse("13:00", new CultureInfo("nb-NO")).Hour);
            Assert.AreEqual(13, DateTime.Parse("13:00", new CultureInfo("ru-RU")).Hour);
            Assert.AreEqual(13, DateTime.Parse("13:00", new CultureInfo("es-ES")).Hour);
            Assert.AreEqual(1, DateTime.Parse("01:00", new CultureInfo("nb-NO")).Hour);
            Assert.AreEqual(1, DateTime.Parse("01:00", new CultureInfo("ru-RU")).Hour);
        }
    }
}