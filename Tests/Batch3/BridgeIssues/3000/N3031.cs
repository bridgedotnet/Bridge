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
    [TestFixture(TestNameFormat = "#3031 - {0}")]
    public class Bridge3031
    {
        [Test]
        public static void TestLongParse()
        {
            var l = Convert.ToInt64("0000000000000010", 16);
            Assert.True( l == 16);

            l = long.Parse("0000000000000010");
            Assert.True(l == 10);
        }
    }
}