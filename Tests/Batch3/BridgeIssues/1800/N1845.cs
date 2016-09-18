using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1845 - {0}")]
    public class Bridge1845
    {
        public class Base
        {
            public Base(object target)
            {
                //Name = "ctor"
                ctor();
            }

            private void ctor()
            {
                //Name = "ctor" , Expected: not "ctor"
            }
        }

        [Test]
        public void TestCase()
        {
            Assert.NotNull(new Base(null));
        }
    }
}