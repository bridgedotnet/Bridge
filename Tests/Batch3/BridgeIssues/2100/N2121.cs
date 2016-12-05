using System;
using System.Collections.Generic;
using Bridge.Test;

namespace Bridge.ClientTest.Batch3.BridgeIssues
{
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#2121 - {0}")]
    public class Bridge2121
    {
        [Test]
        public static void TestLongAsDictionaryKey()
        {
            var dict = new Dictionary<long, string>();
            var i = 0;
            dict[i] = "test";

            long l = 0;
            Assert.AreEqual("test", dict[i]);
            Assert.AreEqual("test", dict[l]);

            string[] s = new []{"test"};
            Assert.AreEqual("test", s[l]);
            Assert.AreEqual("test", s[(long)i]);
        }
    }
}
