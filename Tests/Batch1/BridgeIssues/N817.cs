using System;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#817]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#817 - {0}")]
    public class Bridge817
    {
        [Test(ExpectedCount = 4)]
        public static void TestUseCase()
        {
            Assert.True(Char.IsLetterOrDigit('A'), "Bridge817 IsLetterOrDigit");
            Assert.True(Char.IsLetterOrDigit("A", 0), "Bridge817 IsLetterOrDigit string");

            Assert.False(!Char.IsLetterOrDigit('A'), "Bridge817 IsLetterOrDigit !");
            Assert.False(!Char.IsLetterOrDigit("A", 0), "Bridge817 IsLetterOrDigit string !");
        }
    }
}