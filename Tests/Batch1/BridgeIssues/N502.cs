using Bridge;
using Bridge.Html5;
using Bridge.Test;

using System;
using System.Linq;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#502]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#502 - {0}")]
    public class Bridge502
    {
        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
            int[] numbers = { 1, 2, 3 };

            int sum = 0;

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            foreach (int a in numbers)
            {
                sum = sum + a;
            }

            Assert.AreEqual(24, sum, "Bridge502 sum");
        }
    }
}