using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2692 - {0}")]
    public class Bridge2692
    {
        [Test]
        public static void TestUnusedGotoLabel()
        {
#pragma warning disable 164
            Try:
#pragma warning restore 164
            int value = 7;
            Assert.AreEqual(7, value);
        }
    }
}