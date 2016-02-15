using System;
using System.Collections.Generic;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#733]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#733 - {0}")]
    public class Bridge733
    {
        private static DateTime DateA
        {
            get; set;
        }

        private static DateTime dateb;

        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.True(DateA == DateTime.MinValue, "Bridge733 DateA");
            Assert.True(dateb == DateTime.MinValue, "Bridge733 dateb");

            dateb = DateTime.Now; // to prevent warning that dateb is never assigned
        }
    }
}