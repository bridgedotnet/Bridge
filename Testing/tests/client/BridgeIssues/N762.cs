using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    internal struct Bridge762A
    {
    }
    internal struct Bridge762B
    {
        public int Data { get; set; }
    }

    // Bridge[#762]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#762 - {0}")]
    public class Bridge762
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            int? test1 = null;
            Bridge762A? test2 = null;
            Bridge762B? test3 = null;

            int value1 = test1.GetValueOrDefault();
            Bridge762A value2 = test2.GetValueOrDefault();
            var value3 = test3.GetValueOrDefault();

            Assert.AreEqual(value1, 0, "Bridge762 int");
            Assert.AreNotEqual(value2, null, "Bridge762A struct");
            Assert.AreNotEqual(value3, null, "Bridge762B struct");
            Assert.AreEqual(value3.Data, 0, "Bridge762B.Data struct");
        }
    }
}