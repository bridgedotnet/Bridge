using System;
using System.Collections;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1886 - {0}")]
    public class Bridge1886
    {
        [Test]
        public void TestCase()
        {
            Assert.True(23.24m == System.Convert.ToDecimal("23.24"));
            Assert.True(23m == System.Convert.ToDecimal("23."));
            Assert.True(23m == System.Convert.ToDecimal("23"));
            Assert.True(.24m == System.Convert.ToDecimal(".24"));
            Assert.True(2m == System.Convert.ToDecimal("2"));
        }
    }
}