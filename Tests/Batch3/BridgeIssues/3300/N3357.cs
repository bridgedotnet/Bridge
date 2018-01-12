using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3357 - {0}")]
    public class Bridge3357
    {
        [Test]
        public static void TestUriEquals()
        {
            var uriStr = "https://deck.net/";
            Assert.True(new Uri(uriStr) == new Uri(uriStr));
        }
    }
}