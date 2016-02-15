using System;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#907]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#907 - {0}")]
    public class Bridge907
    {
        [Test(ExpectedCount = 6)]
        public static void TestStringSpitWithNullParameterFixed()
        {
            var s = "Hello World!";
            var res = s.Split((string[])null, StringSplitOptions.RemoveEmptyEntries);

            Assert.AreEqual(2, res.Length, "Bridge907 instance Length");
            Assert.AreEqual("Hello", res[0], "Bridge907 instance [0]");
            Assert.AreEqual("World!", res[1], "Bridge907 instance [1]");

            var s1 = "Hi Man!";
            var res1 = s1.Split((string[])null, StringSplitOptions.RemoveEmptyEntries);

            Assert.AreEqual(2, res1.Length, "Bridge907 static Length");
            Assert.AreEqual("Hi", res1[0], "Bridge907 static [0]");
            Assert.AreEqual("Man!", res1[1], "Bridge907 static [1]");
        }
    }
}