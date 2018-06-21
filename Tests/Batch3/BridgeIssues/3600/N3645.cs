using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3645 - {0}")]
    public class Bridge3645
    {
        [Test]
        public static void TestNullableTuple()
        {
            (string Prop1, string Prop2) val1 = ("test1", "test2");
            string test1 = val1.Prop1;
            Assert.AreEqual("test1", test1);

            (string Prop1, string Prop2)? val2 = ("test1", "test2");
            string test2 = val2.Value.Prop1;
            Assert.AreEqual("test1", test2);
        }
    }
}