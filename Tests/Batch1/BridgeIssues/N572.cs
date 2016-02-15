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

            Assert.AreEqual("One", d[1], "#572 getItem One");
            Assert.AreEqual("Two", d[2], "#572 getItem Two");

            d[1] = "New one";
            d[2] = "New two";

            Assert.AreEqual("New one", d[1], "#572 setItem New one");
            Assert.AreEqual("New two", d[2], "#572 setItem New two");
        }
    }
}