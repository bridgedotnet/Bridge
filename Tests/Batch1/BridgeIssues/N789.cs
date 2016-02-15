using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#789]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#789 - {0}")]
    public class Bridge789
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            Assert.AreNotEqual(null, Method1());
            Assert.AreNotEqual(null, Method2());
            Assert.AreEqual(0, Method2().field1);
        }

        private static DateTime Method1(DateTime dt = default(DateTime))
        {
            return dt;
        }

        private static Bridge789A Method2(Bridge789A s = default(Bridge789A))
        {
            return s;
        }
    }

    public struct Bridge789A
    {
        public int field1;
    }
}