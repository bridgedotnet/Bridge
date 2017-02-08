using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2347 - {0}")]
    public class Bridge2347
    {
        [Test]
        public static void TestG17FormatSpecifier()
        {
            double d = 36.099999999999994d;
            Assert.AreEqual("36.099999999999994", d.ToString("G17"));
            Assert.AreEqual("36.09999999999999", d.ToString("G16"));
            Assert.AreEqual("36.1", d.ToString("G15"));
        }
    }
}