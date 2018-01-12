using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3301 - {0}")]
    public class Bridge3301
    {
        [Test]
        public static void TestUriToString()
        {
            var uriStr = "https://deck.net/";
            var uri = new Uri(uriStr);
            Assert.AreEqual(uriStr, uri.ToString());
        }
    }
}