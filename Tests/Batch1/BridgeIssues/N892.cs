using System;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#892]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#892 - {0}")]
    public class Bridge892
    {
        public static string Test(string format, params object[] p)
        {
            var message = String.Format(format, p);
            return message;
        }

        [Test(ExpectedCount = 1)]
        public static void TestUseCase()
        {
           Assert.AreEqual("Test One Two", Test("Test {0} {1}", "One", "Two"));
        }
    }
}