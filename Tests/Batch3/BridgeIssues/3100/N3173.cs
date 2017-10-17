using System;
using Bridge.Test.NUnit;
using System.Globalization;
using System.IO;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3173 - {0}")]
    public class Bridge3173
    {
        [Test]
        public void TestSyncReadToEnd()
        {
            string str = null;
            using (var sr = new StreamReader("/resources/test.js"))
            {
                str = sr.ReadToEnd();
            }

            Assert.AreEqual("TEST", str);
        }

        [Test]
        public async void TestAsyncReadToEnd()
        {
            var done = Assert.Async();
            string str = null;
            using (var sr = new StreamReader("/resources/test.js"))
            {
                str = await sr.ReadToEndAsync();
            }

            Assert.AreEqual("TEST", str);
            done();
        }
    }
}