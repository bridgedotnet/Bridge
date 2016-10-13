using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1921 - {0}")]
    public class Bridge1921
    {
        [Test]
        public void TestCase()
        {
            Assert.AreEqual("<", new string('\u003C'));
            Assert.True(new string('\u003C') == new string('\u003C', 1));
        }
    }
}