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
    [TestFixture(TestNameFormat = "#2950 - {0}")]
    public class Bridge2950
    {
        [Test]
        public static void TestNullCast()
        {
#pragma warning disable CS0458 // The result of the expression is always 'null'
            Assert.False((((object)null) as Int64?).HasValue);
            Assert.False((((object)null) as Int64?).HasValue ? true : false);
#pragma warning restore CS0458 // The result of the expression is always 'null'
        }
    }
}