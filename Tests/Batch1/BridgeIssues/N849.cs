using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    internal static class Bridge849A
    {
        public static bool SetToBlah(this string value, bool blah = true)
        {
            return blah;
        }
    }

    // Bridge[#849]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#849 - {0}")]
    public class Bridge849
    {
        [Test(ExpectedCount = 2)]
        public static void TestUseCase()
        {
            Assert.AreEqual(true, "".SetToBlah(), "Bridge849 true");
            Assert.AreEqual(false, "".SetToBlah(false), "Bridge849 false");
        }
    }
}