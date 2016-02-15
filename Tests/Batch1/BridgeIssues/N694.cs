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
            Assert.AreEqual("apple", list[0], "Bridge694 apple");
            Assert.AreEqual("lemon", list[1], "Bridge694 lemon");
            Assert.AreEqual("mango", list[2], "Bridge694 mango");
        }
    }
}