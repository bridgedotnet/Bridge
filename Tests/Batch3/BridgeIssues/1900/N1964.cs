using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1964 - {0}")]
    public class Bridge1964
    {
        [Test]
        public void TestCase()
        {
            Assert.True(String.IsNullOrWhiteSpace("\t"));
            Assert.True(String.IsNullOrWhiteSpace("\r"));
            Assert.True(String.IsNullOrWhiteSpace("\n"));
        }
    }
}