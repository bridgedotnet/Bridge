using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2899 - {0}")]
    public class Bridge2899
    {
        static int pass;

        static void A()
        {
            pass |= 1;
        }

        static void B()
        {
            pass |= 2;
        }

        [Test]
        public static void TestDelegateCombining()
        {
            ((Action)A + B)();
            Assert.AreEqual(3, pass);
        }
    }
}