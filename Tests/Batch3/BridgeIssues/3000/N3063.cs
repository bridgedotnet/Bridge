using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.ClientTest.Batch3;
using Bridge.Test.NUnit;

namespace BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3063 - {0}")]
    public class Bridge3063
    {
        [Test]
        public static void TestAssigmentWithIndexer()
        {
            int[] data = { 10, 20, 30 };
            int i = 0;
            data[i++] += 1;

            Assert.AreEqual(11, data[0]);
            Assert.AreEqual(20, data[1]);
            Assert.AreEqual(1, i);
        }
    }
}