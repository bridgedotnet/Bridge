using Bridge.Test;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1428 - {0}")]
    public class Bridge1428
    {
        private void Method1()
        {
        }

        private void Method2()
        {
        }

        [Test]
        public static void TestEqOperatorWithNull()
        {
            var c = new Bridge1428();

            List<Action> test = new List<Action>();
            test.Add(c.Method1);

            Assert.AreEqual(1, test.Count);
            test.Remove(c.Method1);
            Assert.AreEqual(0, test.Count);

            Action l1 = c.Method1;
            Action l2 = c.Method1;

            Assert.True(l1 == l2);

            l1 = c.Method1;
            l2 = c.Method2;

            Assert.False(l1 == l2);
        }
    }
}
