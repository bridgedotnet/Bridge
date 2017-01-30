using System;
using System.Collections.Generic;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2249 - {0}")]
    public class Bridge2249
    {
        public class c1
        {
            #region properties

            public string p1 { get; set; } = "test";

            #endregion properties
        }

        [Test]
        public static void TestPropertyInitializerWithDirective()
        {
            var c1 = new c1();
            Assert.AreEqual("test", c1.p1);
        }
    }
}