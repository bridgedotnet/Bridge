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
        enum Letter { A, B, C }

        [Test]
        public static void TestAssignmentConversion()
        {
            var e = Letter.C;

            Assert.AreEqual(Letter.C, ((object)e), "e C");
            Assert.AreEqual("C", e.ToString(), "e ToString()");

            var r = (object)(e -= 2);

            Assert.AreEqual(Letter.A, r, "r A");
            Assert.AreEqual("A", r.ToString(), "r A ToString()");
            Assert.AreEqual("Letter", r.GetType().Name, "r A Type");
            Assert.AreEqual("A", ((object)(r)).ToString());

            r = (object)(e -= 1);

            Assert.AreEqual(-1, r, "r -1");
            Assert.AreEqual("-1", r.ToString(), "r -1 ToString()");
            Assert.AreEqual("Letter", r.GetType().Name, "r -1 Type");
        }
    }
}