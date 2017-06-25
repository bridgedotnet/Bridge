#define CONTRACTS_FULL

using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Threading.Tasks;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2859 - {0}")]
    public class Bridge2859
    {
        public class A
        {
            public int J => 3;
            public void Works()
            {
                Assert.Throws<ContractException>(() => Contract.Assume(J == 4));

                Contract.Assert(J == 3);
                Assert.True(true);
            }
        }

        [Test]
        public static void TestContractAssertWithThis()
        {
            new A().Works();
        }
    }
}