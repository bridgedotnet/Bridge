using System;
using System.Collections.Generic;
using System.Linq;
using Bridge;
using Bridge.Test;
using Bridge.Html5;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#689]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#694 - {0}")]
    public class Bridge694
    {
        [Test(ExpectedCount = 3)]
        public static void TestUseCase()
        {
            var fruits = new object[3];
            fruits[0] = "mango";
            fruits[1] = "apple";
            fruits[2] = "lemon";

            var list = fruits.Cast<string>().OrderBy(fruit => fruit).Select(fruit => fruit).ToList();
            Assert.AreEqual(list[0], "apple", "Bridge694 apple");
            Assert.AreEqual(list[1], "lemon", "Bridge694 lemon");
            Assert.AreEqual(list[2], "mango", "Bridge694 mango");
        }
    }
}