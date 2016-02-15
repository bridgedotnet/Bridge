using System;
using Bridge;
using Bridge.Test;

namespace Bridge.ClientTest.BridgeIssues
{
    // Bridge[#661]
    [Category(Constants.MODULE_ISSUES)]
    [TestFixture(TestNameFormat = "#661 - {0}")]
    public class Bridge661
    {
        public static bool Example1(char exampleInput = '\0')
        {
            return exampleInput == '\0';
        }

        public static bool Example2(char exampleInput = '1')
        {
            return exampleInput == '1';
        }

        [Test(ExpectedCount = 6)]
        public static void TestUseCase()
        {
            Assert.AreEqual(true, Example1(), "Bridge661 Example1 true default");
            Assert.AreEqual(true, Example1('\0'), "Bridge661 Example1 true");
            Assert.AreEqual(false, Example1('A'), "Bridge661 Example1 false");

            Assert.AreEqual(true, Example2(), "Bridge661 Example2 true default");
            Assert.AreEqual(true, Example2('1'), "Bridge661 Example2 true");
            Assert.AreEqual(false, Example2('\0'), "Bridge661 Example2 false");
        }
    }
}