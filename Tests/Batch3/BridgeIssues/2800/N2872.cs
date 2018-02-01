using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2872 - {0}")]
    public class Bridge2872
    {
        [Test]
        public static void TestChainingAssignment()
        {
            string a = a = "test";
            Assert.AreEqual(a, "test");

            string s, s2 = s = "test";
            Assert.AreEqual(s2, "test");
            Assert.AreEqual(s, "test");


#pragma warning disable CS0168 // Variable is declared but never used
            string c, c3, c2 = c = "test", c4;
#pragma warning restore CS0168 // Variable is declared but never used
            Assert.AreEqual(c2, "test");
            Assert.AreEqual(c, "test");
        }
    }
}