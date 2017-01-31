using System;
using System.Linq;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2163 - {0}")]
    public class Bridge2163
    {
        [Test]
        public static void TestDecimalToFormat()
        {
            decimal d1 = 1.0m;
            Assert.AreEqual("1.00", d1.ToFormat(2));
            Assert.AreEqual("1", d1.ToFormat());
        }
    }
}