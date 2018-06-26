using Bridge.Html5;
using Bridge.Test.NUnit;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [TestFixture(TestNameFormat = "#3649 - {0}")]
    public class Bridge3649
    {
        [Test]
        public static void TestValueTuple()
        {
            (string a, int b, bool c) = default((string, int, bool));

            Assert.Null(a);
            Assert.AreEqual(0, b);
            Assert.False(c);

            (string a, string b, string c) val2 = default((string, string, string));
            var val1 = val2;
            val2.a = "xcv";

            Assert.Null(val1.a);
            Assert.AreEqual("xcv", val2.a);
        }
    }
}