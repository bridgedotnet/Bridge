using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Test.NUnit;
using System.Collections;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2925 - {0}")]
    public class Bridge2925
    {
        [Test]
        public static void TestIListAdd()
        {
            IList list = new List<int>();
            var idx = list.Add(5);
            Assert.AreEqual(0, idx);
        }
    }
}