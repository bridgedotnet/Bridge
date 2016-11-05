using Bridge.Test;
using System;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#1081 - {0}")]
    public class Bridge1081
    {
        [Test]
        public static void TestTimeSpanMsFormat()
        {
            var ts = new TimeSpan(12, 23, 32, 43, 893);

            Assert.AreEqual("32:43.8", ts.ToString(@"mm:ss.f"), "f");
            Assert.AreEqual("32:43.89", ts.ToString(@"mm:ss.ff"), "ff");
            Assert.AreEqual("32:43.893", ts.ToString(@"mm:ss.fff"), "fff");
            Assert.AreEqual("32:43.8930", ts.ToString(@"mm:ss.ffff"), "ffff");
            Assert.AreEqual("32:43.89300", ts.ToString(@"mm:ss.fffff"), "fffff");
            Assert.AreEqual("32:43.893000", ts.ToString(@"mm:ss.ffffff"), "ffffff");
            Assert.AreEqual("32:43.8930000", ts.ToString(@"mm:ss.fffffff"), "fffffff");
        }
    }
}