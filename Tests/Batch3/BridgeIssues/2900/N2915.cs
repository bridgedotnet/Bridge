using System;
using System.Collections.Generic;
using System.Globalization;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2915 - {0}")]
    public class Bridge2915
    {
        [Test]
        public static void TestLocalesWithoutColonInTime()
        {
            var culture = new CultureInfo("en-GB");
            Assert.AreEqual(13, DateTime.Parse("13:00", culture).Hour);

            culture.DateTimeFormat.TimeSeparator = ".";
            Assert.AreEqual(13, DateTime.Parse("13:00", culture).Hour);

            culture = new CultureInfo("nb-NO");
            Assert.AreEqual(13, DateTime.Parse("13:00", culture).Hour);

            culture.DateTimeFormat.TimeSeparator = ".";
            Assert.AreEqual(13, DateTime.Parse("13:00", culture).Hour);
        }
    }
}