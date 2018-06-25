using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3647 - {0}")]
    public class Bridge3647
    {
        private static (string Var1, string Var2) Test()
        {
            return ("test1", "test2");
        }

        [Test]
        public static void TestDiscard()
        {
            (string _, string value) = new KeyValuePair<string, string>("key", "value");
            Assert.AreEqual("value", value);

            (string a, string _) = Test();
            Assert.AreEqual("test1", a);

            (string _, string b) = Test();
            Assert.AreEqual("test2", b);
        }
    }
}