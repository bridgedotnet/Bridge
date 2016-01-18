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
            Assert.AreEqual(Example1(), true, "Bridge661 Example1 true default");
            Assert.AreEqual(Example1('\0'), true, "Bridge661 Example1 true");
            Assert.AreEqual(Example1('A'), false, "Bridge661 Example1 false");

            Assert.AreEqual(Example2(), true, "Bridge661 Example2 true default");
            Assert.AreEqual(Example2('1'), true, "Bridge661 Example2 true");
            Assert.AreEqual(Example2('\0'), false, "Bridge661 Example2 false");
        }
    }
}