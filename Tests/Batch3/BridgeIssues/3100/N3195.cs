using System;
using Bridge.Test.NUnit;
using System.Globalization;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3195 - {0}")]
    public class Bridge3195
    {
        [Test]
        public void TestGuidTryParse()
        {
            Guid t;
            bool result = Guid.TryParse(null, out t);
            Assert.False(result);
        }
    }
}