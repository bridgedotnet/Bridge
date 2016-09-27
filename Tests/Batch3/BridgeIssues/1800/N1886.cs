using System;
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
            Assert.True(23.24m == Convert.ToDecimal("23.24"));
            Assert.True(23m == Convert.ToDecimal("23."));
            Assert.True(23m == Convert.ToDecimal("23"));
            Assert.True(.24m == Convert.ToDecimal(".24"));
            Assert.True(2m == Convert.ToDecimal("2"));
        }
    }
}