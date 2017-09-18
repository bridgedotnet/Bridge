using System;
using Bridge.Test.NUnit;
using System.Collections.Generic;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3147 - {0}")]
    public class Bridge3147
    {
        [Test]
        public static void TestUriJSON()
        {
            var uri = new Uri("http://myurl.com");
            Assert.AreEqual("\"http://myurl.com\"", Bridge.Html5.JSON.Stringify(uri));
        }
    }
}