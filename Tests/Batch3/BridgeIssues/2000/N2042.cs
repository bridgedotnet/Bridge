using System;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2042 - {0}")]
    public class Bridge2042
    {
        [Test]
        public static void TestAppDomain()
        {
            Assert.True(AppDomain.CurrentDomain.GetAssemblies().Length > 0);
        }
    }
}