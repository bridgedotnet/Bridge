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

            Assert.AreEqual(res.Length, 2, "Bridge907 instance Length");
            Assert.AreEqual(res[0], "Hello", "Bridge907 instance [0]");
            Assert.AreEqual(res[1], "World!", "Bridge907 instance [1]");

            var s1 = "Hi Man!";
            var res1 = s1.Split((string[])null, StringSplitOptions.RemoveEmptyEntries);

            Assert.AreEqual(res1.Length, 2, "Bridge907 static Length");
            Assert.AreEqual(res1[0], "Hi", "Bridge907 static [0]");
            Assert.AreEqual(res1[1], "Man!", "Bridge907 static [1]");
        }
    }
}