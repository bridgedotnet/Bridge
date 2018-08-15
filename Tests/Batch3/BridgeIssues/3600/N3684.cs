using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3684 - {0}")]
    public class Bridge3684
    {
        [Test]
        public static void TestIsInterface()
        {
            Assert.True(typeof(IDictionary<,>).IsInterface);
            Assert.True(typeof(IDictionary<string, string>).IsInterface);
        }
    }
}