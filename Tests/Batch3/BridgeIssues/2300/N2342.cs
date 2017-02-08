using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2342 - {0}")]
    public class Bridge2342
    {
        [Test]
        public static void TestCastParanthesize()
        {
            double bar = 2.0;
            double foo = 1.0 / (float)(Math.Abs(bar) / Math.Abs(bar));
            Assert.AreEqual(1, foo);
        }
    }
}