using System;
using System.Collections.Generic;
using System.Diagnostics.Contracts;
using System.Linq;
using System.Threading.Tasks;
using Bridge.ClientTest.Batch3;
using Bridge.Test.NUnit;

namespace BridgeTest.ClientTest.Batch3.Bridge.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#3038 - {0}")]
    public class Bridge3038
    {
        [Test]
        public static void TestRewriterInBridgeNs()
        {
            Dictionary<string, object> dict = new Dictionary<string, object>
            {
                { "123", "Test" }
            };

            Assert.AreEqual("Test", dict["123"]?.ToString());
        }
    }
}