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
    [TestFixture(TestNameFormat = "#2932 - {0}")]
    public class Bridge2932
    {
        enum A { A, B, C }

        [Test]
        public static void TestEnumBaseType()
        {
            Assert.AreEqual(typeof(Enum), typeof(A).BaseType);
        }
    }
}