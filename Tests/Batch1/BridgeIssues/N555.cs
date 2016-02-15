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

            Assert.AreEqual("0123456789", s.JsSubstring(-1), "JsSubstring(-1)");
            Assert.AreEqual("56789", s.JsSubstring(5), "JsSubstring(5)");
            Assert.AreEqual("", s.JsSubstring(10), "JsSubstring(10)");
            Assert.AreEqual("1", s.JsSubstring(1, 2), "JsSubstring(1, 2)");
            Assert.AreEqual("123456789", s.JsSubstring(1, 10), "JsSubstring(1, 10)");

            Assert.AreEqual("9", s.Substring(-1), "Substring(-1)");
            Assert.AreEqual("56789", s.Substring(5), "Substring(5)");
            Assert.AreEqual("", s.Substring(10), "Substring(10)");
            Assert.AreEqual("12", s.Substring(1, 2), "Substring(1, 2)");
            Assert.AreEqual("123456789", s.Substring(1, 10), "Substring(1, 10)");

            Assert.AreEqual("9", s.Substr(-1), "Substr(-1)");
            Assert.AreEqual("56789", s.Substr(5), "Substr(5)");
            Assert.AreEqual("", s.Substr(10), "Substr(10)");
            Assert.AreEqual("12", s.Substr(1, 2), "Substr(1, 2)");
            Assert.AreEqual("123456789", s.Substr(1, 10), "Substr(1, 10)");
        }
    }
}
