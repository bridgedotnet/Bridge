using Bridge.Html5;
using Bridge.Test.NUnit;

namespace Bridge.ClientTest.Batch3.BridgeIssues
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

            // Not C# API #2392
            Assert.AreEqual("0123456789", StringPrototype.Substring(s, -1), "JavaScript Substring(-1)");
            Assert.AreEqual("56789", StringPrototype.Substring(s, 5), "JavaScript Substring(5)");
            Assert.AreEqual("", StringPrototype.Substring(s, 10), "JavaScript Substring(10)");
            Assert.AreEqual("1", StringPrototype.Substring(s, 1, 2), "JavaScript Substring(1, 2)");
            Assert.AreEqual("123456789", StringPrototype.Substring(s, 1, 10), "JavaScript Substring(1, 10)");

            Assert.AreEqual("9", s.Substring(-1), "Substring(-1)");
            Assert.AreEqual("56789", s.Substring(5), "Substring(5)");
            Assert.AreEqual("", s.Substring(10), "Substring(10)");
            Assert.AreEqual("12", s.Substring(1, 2), "Substring(1, 2)");
            Assert.AreEqual("123456789", s.Substring(1, 10), "Substring(1, 10)");

            // Not C# API #2392
            Assert.AreEqual("9", s.Substr(-1), "Substr(-1)");
            Assert.AreEqual("56789", s.Substr(5), "Substr(5)");
            Assert.AreEqual("", s.Substr(10), "Substr(10)");
            Assert.AreEqual("12", s.Substr(1, 2), "Substr(1, 2)");
            Assert.AreEqual("123456789", s.Substr(1, 10), "Substr(1, 10)");
        }
    }
}