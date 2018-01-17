using System;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    /// <summary>
    /// This tests consists in just checking whether URI's .ToString() does
    /// not return "[Object object]" but the actual instantiated URL.
    /// </summary>
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3301 - {0}")]
    public class Bridge3301
    {
        /// <summary>
        /// Just checks whether an URI's ToString() matches its provided URL
        /// string.
        /// </summary>
        [Test]
        public static void TestUriToString()
        {
            var uriStr = "https://deck.net/";
            var uri = new Uri(uriStr);
            Assert.AreEqual(uriStr, uri.ToString(), "URI ToString() returns the same string used to initialize it.");
        }
    }
}