using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#572]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#572 - {0}")]
    public class Bridge572
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var d1 = new Dictionary<int, string>();

            var d = d1 as IDictionary<int, string>;

            d.Add(1, "One");
            d.Add(2, "Two");

            Assert.AreEqual(d[1], "One", "#572 getItem One");
            Assert.AreEqual(d[2], "Two", "#572 getItem Two");

            d[1] = "New one";
            d[2] = "New two";

            Assert.AreEqual(d[1], "New one", "#572 setItem New one");
            Assert.AreEqual(d[2], "New two", "#572 setItem New two");
        }
    }
}