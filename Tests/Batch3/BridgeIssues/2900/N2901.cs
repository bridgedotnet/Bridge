using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2901 - {0}")]
    public class Bridge2901
    {
        [Test]
        public static void TestDelegateRemoving()
        {
            int x = 5;
            Action a = () => x--;
            Action combo = (a + a);
            (combo - a)();
            Assert.AreEqual(4, x);
        }
    }
}