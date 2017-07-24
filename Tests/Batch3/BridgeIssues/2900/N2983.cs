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
    [TestFixture(TestNameFormat = "#2983 - {0}")]
    public class Bridge2983
    {
        [Test]
        public static void TestIListIndexer()
        {
            IList<int> list = new List<int> { 0 };
            int num = list[0];
            Assert.True(0 == num);
        }
    }
}