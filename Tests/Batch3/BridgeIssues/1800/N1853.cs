using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1853 - {0}")]
    public class Bridge1853
    {
#pragma warning disable CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()
        public class Test
        {
            public override bool Equals(object a)
            {
                return false;
            }
        }
#pragma warning restore CS0659 // Type overrides Object.Equals(object o) but does not override Object.GetHashCode()

        [Test]
        public void TestContainsUseEquals()
        {
            Test t = new Test();
            List<Test> l = new List<Test> { t };
            Assert.False(l.Contains(t));

            var o = new object();
            List<object> l1 = new List<object> { o };
            Assert.True(l1.Contains(o));
        }
    }
}