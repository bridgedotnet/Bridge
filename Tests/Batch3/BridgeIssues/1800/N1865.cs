using System;
using System.Collections;
using System.Collections.Generic;
using System.Text;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1865 - {0}")]
    public class Bridge1865
    {
        [ObjectLiteral]
        private interface IContract
        {
            int Value
            {
                get; set;
            }
        }

        [ObjectLiteral]
        private class Contract : IContract
        {
            public int Value
            {
                get; set;
            }
        }

        [ObjectLiteral]
        private class Contract2 : IContract
        {
            public int Value
            {
                get; set;
            }
        }

        [Test]
        public void TestObjectLiteralInterface()
        {
            var contract = new Contract { Value = 5 };
            IContract icontract = contract;
            object o = contract;

            Assert.True(o is IContract);
            Assert.True(o is Contract);
            Assert.False(o is Contract2);

            Assert.AreEqual(5, contract.Value);
            Assert.AreEqual(5, icontract.Value);
        }
    }
}