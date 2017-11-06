using System;
using Bridge.Test.NUnit;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3249 - {0}")]
    public class Bridge3249
    {
        [Test]
        public static void TestTimeSpanEquals()
        {
            Assert.False(new TimeSpan().Equals(true));
        }
    }
}