using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1704 - {0}")]
    public class Bridge1704
    {
        public class Base
        {
            public virtual int Show(int i = 1)
            {
                return i;
            }
        }

        public class Derived : Base
        {
            public override int Show(int i = 1)
            {
                return base.Show();
            }
        }

        [Test]
        public void TestBaseMethodWithOptionalParams()
        {
            var d = new Derived();
            Assert.AreEqual(1, d.Show());
        }
    }
}