using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#796]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#796 - {0}")]
    public class Bridge796
    {
        [Test(ExpectedCount = 5)]
        public static void TestUseCase()
        {
            bool b = true;

            Assert.True(Method1(true), "Bridge796 Method1");
            Assert.True(Method1_1(true), "Bridge796 Method1_1");
            Assert.True(Method2(true), "Bridge796 Method2");
            Assert.False(Method3(ref b), "Bridge796 Method3");
            Assert.False(b, "Bridge796 Method3 b");
        }

        private static bool Method1([Name("$num")] bool throws)
        {
            return throws;
        }

        private static bool Method1_1([Name("throws")] bool num)
        {
            return num;
        }

        private static bool Method2(bool throws)
        {
            return throws;
        }

        private static bool Method3(ref bool throws)
        {
            throws = false;
            return throws;
        }
    }
}