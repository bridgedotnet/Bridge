using System;
using System.Collections.Generic;
using System.Globalization;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2657 - {0}")]
    public class Bridge2657
    {
        [Test]
        public static void TestRoundtripFormat()
        {
            var a = DateTime.UtcNow.ToString("o");
            var b = DateTime.ParseExact(a, "o", CultureInfo.InvariantCulture);

            // There is a diff to .Net as DateTime.Kind is not supported - Z vs +00:00 compared to .Net result
            Assert.AreEqual(a, b.ToString("o"));

            var c1 = DateTime.ParseExact("2017-05-15T14:34:03.6762498+00:00", "o", CultureInfo.InvariantCulture);
            var c2 = DateTime.ParseExact("2017-05-15T14:34:03.6760000+00:00", "o", CultureInfo.InvariantCulture);

            Assert.AreEqual(2017, c1.Year);
            Assert.AreEqual(5, c1.Month);
            // JS limitation - ms part may be different compared to .Net
            Assert.AreEqual(c1.ToString("o"), c2.ToString("o"));
        }
    }
}