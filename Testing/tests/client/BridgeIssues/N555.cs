using Bridge;
using Bridge.Test;

using System;
using System.Collections.Generic;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#555]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#555 - {0}")]
    public class Bridge555
    {
        [Test(ExpectedCount = 15)]
        public static void TestUseCase()
        {
            var s = "0123456789";

            Assert.AreEqual(s.JsSubstring(-1), "0123456789", "JsSubstring(-1)");
            Assert.AreEqual(s.JsSubstring(5), "56789", "JsSubstring(5)");
            Assert.AreEqual(s.JsSubstring(10), "", "JsSubstring(10)");
            Assert.AreEqual(s.JsSubstring(1, 2), "1", "JsSubstring(1, 2)");
            Assert.AreEqual(s.JsSubstring(1, 10), "123456789", "JsSubstring(1, 10)");

            Assert.AreEqual(s.Substring(-1), "9", "Substring(-1)");
            Assert.AreEqual(s.Substring(5), "56789", "Substring(5)");
            Assert.AreEqual(s.Substring(10), "", "Substring(10)");
            Assert.AreEqual(s.Substring(1, 2), "12", "Substring(1, 2)");
            Assert.AreEqual(s.Substring(1, 10), "123456789", "Substring(1, 10)");

            Assert.AreEqual(s.Substr(-1), "9", "Substr(-1)");
            Assert.AreEqual(s.Substr(5), "56789", "Substr(5)");
            Assert.AreEqual(s.Substr(10), "", "Substr(10)");
            Assert.AreEqual(s.Substr(1, 2), "12", "Substr(1, 2)");
            Assert.AreEqual(s.Substr(1, 10), "123456789", "Substr(1, 10)");
        }
    }
}
