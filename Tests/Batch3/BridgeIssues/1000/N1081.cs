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
            Assert.AreEqual("00:00.000", new TimeSpan(0).ToString(@"mm\:ss\.fff"), "Test case");

            var ts = new TimeSpan(12, 23, 32, 43, 893);

            Assert.AreEqual("32:43.8", ts.ToString(@"mm\:ss\.f"), "Escapeed by \\ f");
            Assert.AreEqual("32:43.89", ts.ToString(@"mm\:ss\.ff"), "Escapeed by \\ ff");
            Assert.AreEqual("32:43.893", ts.ToString(@"mm\:ss\.fff"), "Escapeed by \\ fff");
            Assert.AreEqual("32:43.8930", ts.ToString(@"mm\:ss\.ffff"), "Escapeed by \\ ffff");
            Assert.AreEqual("32:43.89300", ts.ToString(@"mm\:ss\.fffff"), "Escapeed by \\ fffff");
            Assert.AreEqual("32:43.893000", ts.ToString(@"mm\:ss\.ffffff"), "Escapeed by \\ ffffff");
            Assert.AreEqual("32:43.8930000", ts.ToString(@"mm\:ss\.fffffff"), "Escapeed by \\ fffffff");

            Assert.AreEqual("32:43.8", ts.ToString(@"mm':'ss'.'f"), "Escapeed by '' f");
            Assert.AreEqual("32:43.89", ts.ToString(@"mm':'ss'.'ff"), "Escapeed by '' ff");
            Assert.AreEqual("32:43.893", ts.ToString(@"mm':'ss'.'fff"), "Escapeed by '' fff");
            Assert.AreEqual("32:43.8930", ts.ToString(@"mm':'ss'.'ffff"), "Escapeed by '' ffff");
            Assert.AreEqual("32:43.89300", ts.ToString(@"mm':'ss'.'fffff"), "Escapeed by '' fffff");
            Assert.AreEqual("32:43.893000", ts.ToString(@"mm':'ss'.'ffffff"), "Escapeed by '' ffffff");
            Assert.AreEqual("32:43.8930000", ts.ToString(@"mm':'ss'.'fffffff"), "Escapeed by '' fffffff");
        }
    }
}