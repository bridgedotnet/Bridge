using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1735 - {0}")]
    public class Bridge1735
    {
        private delegate void PropertySetter(object source);

        [Test]
        public void TestTryGetValueWithDelegate()
        {
            var delegateCache = new Dictionary<string, PropertySetter>();
            PropertySetter setter;
            bool result = delegateCache.TryGetValue("test", out setter);
            Assert.False(result);
        }
    }
}