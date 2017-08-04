using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2937 - {0}")]
    public class Bridge2937
    {
        enum A { A, B, C }

        [Test]
        public static void TestAssignmentConversion()
        {
            var e = A.C;
            Assert.AreEqual("A", ((object)(e -= 2)).ToString());
            Assert.AreEqual("A", ((object)(e)).ToString());
        }
    }
}