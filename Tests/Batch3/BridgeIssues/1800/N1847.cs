using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1847 - {0}")]
    public class Bridge1847
    {
        public class CLS
        {
            public string status;
            protected CLS()
            {
                status = "Not ok";
            }

            public CLS(int i)
            {
                status = "ok";
            }
        }

        [Test]
        public void TestActivatorCreateInstanceCallProtectedConstructor()
        {
            var instance = Activator.CreateInstance<CLS>(1);
            Assert.AreEqual("ok", instance.status);
        }
    }
}