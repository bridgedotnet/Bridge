using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2204 - {0}")]
    public class Bridge2204
    {
        [Test]
        public static void TestDecimalToString()
        {
            decimal d = 0.00000000000000000000000001m;
            Assert.AreEqual("0.00000000000000000000000001", d.ToString());
        }
    }
}