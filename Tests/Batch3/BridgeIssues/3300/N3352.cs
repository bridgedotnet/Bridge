using System;
using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3352 - {0}")]
    public class Bridge3352
    {
        [Test]
        public static void TestTimeSpanEqualsNull()
        {
            TimeSpan? result = null;

            Assert.True(result == null);
            Assert.False(result != null);
        }
    }
}