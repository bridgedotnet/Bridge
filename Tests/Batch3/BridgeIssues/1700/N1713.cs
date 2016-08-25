using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1713 - {0}")]
    public class Bridge1713
    {
        int Overloaded(Func<int, int> action)
        {
            return 1;
        }

        int Overloaded(Func<int> function)
        {
            return 2;
        }

        int DoSomething1(int i)
        {
            return 0;
        }

        int DoSomething2()
        {
            return 0;
        }

        [Test]
        public void TestOverloadResolution()
        {
            Assert.AreEqual(1, Overloaded(DoSomething1));
            Assert.AreEqual(2, Overloaded(DoSomething2));
        }
    }
}