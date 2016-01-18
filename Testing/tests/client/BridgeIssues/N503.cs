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

            Assert.AreEqual(a.Length, 3, "Bridge503: array.Length is correct");
            Assert.AreEqual(list.Count, 6, "Bridge503: list.Count is correct");

            list.Clear();

            Assert.AreEqual(a.Length, 3, "Bridge503: array.Length is correct");
            Assert.AreEqual(list.Count, 0, "Bridge503: list.Count is correct");
        }
    }
}