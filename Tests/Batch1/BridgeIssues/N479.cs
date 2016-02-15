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
            Assert.AreEqual(1, pair.Key, "Bridge479 Key");
            Assert.AreEqual("value", pair.Value, "Bridge479 Value");
            Assert.AreEqual("[1, value]", pair.ToString(), "Bridge479 ToString");
        }
    }
}