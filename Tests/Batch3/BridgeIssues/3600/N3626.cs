using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3626 - {0}")]
    public class Bridge3626
    {
        [Test]
        public static void TestStringFormat()
        {
            string TestVariable = "Hey";
            var Result = $"{{TEST:{TestVariable}HelloWorld}}";
            Assert.AreEqual("{TEST:HeyHelloWorld}", Result);
        }
    }
}