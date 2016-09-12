using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1721 - {0}")]
    public class Bridge1721
    {
        private void Method1()
        {
        }

        private void Method2()
        {
        }

        [Test]
        public void TestDelegateEquals()
        {
            var inst = new Bridge1721();
            Action fn1 = inst.Method1;
            Action fn2 = inst.Method1;
            Action fn3 = inst.Method2;

            Assert.AreEqual(fn1, fn2);
            Assert.AreNotEqual(fn1, fn3);
        }
    }
}