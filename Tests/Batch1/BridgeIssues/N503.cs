using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#503]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#503 - {0}")]
    public class Bridge503
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            var a = new string[] { "a", "b", "c" };
            var list = new System.Collections.Generic.List<string>(a);

            list.AddRange(a);

            Assert.AreEqual(3, a.Length, "Bridge503: array.Length is correct");
            Assert.AreEqual(6, list.Count, "Bridge503: list.Count is correct");

            list.Clear();

            Assert.AreEqual(3, a.Length, "Bridge503: array.Length is correct");
            Assert.AreEqual(0, list.Count, "Bridge503: list.Count is correct");
        }
    }
}