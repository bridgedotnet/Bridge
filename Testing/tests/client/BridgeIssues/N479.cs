using Bridge;
using Bridge.Test;
using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#479]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#479 - {0}")]
    public class Bridge479
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var pair = new KeyValuePair<int, string>(1, "value");
            Assert.AreEqual(pair.Key, 1, "Bridge479 Key");
            Assert.AreEqual(pair.Value, "value", "Bridge479 Value");
            Assert.AreEqual(pair.ToString(), "[1, value]", "Bridge479 ToString");
        }
    }
}